/* Harmless browser probes: cross-origin DOM/storage, messages and enforced CSP. */
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = process.env.R06_BASE_URL || 'http://127.0.0.1:8173';
const output = process.env.R06_EVIDENCE_DIR || path.resolve(__dirname, '../reports');
const report = {base, startedAt:new Date().toISOString(), checks:[]};
fs.mkdirSync(output, {recursive:true});
(async () => {
  const browser = await chromium.launch({executablePath:process.env.R06_BROWSER_EXECUTABLE, headless:true, args:['--no-sandbox']});
  const context = await browser.newContext({viewport:{width:1440,height:900}, reducedMotion:'reduce'});
  await context.addInitScript(() => {
    window.__r06AuditNative = {fetch:fetch.bind(window), XHR:XMLHttpRequest, beacon:navigator.sendBeacon.bind(navigator)};
  });
  const page = await context.newPage();
  try {
    const response = await page.goto(base + '/index.html');
    const headers = response.headers();
    assert(headers['content-security-policy'].includes("script-src 'self'"));
    assert(!headers['content-security-policy'].includes("script-src 'self' 'unsafe-inline'"));
    assert.equal(headers['x-content-type-options'], 'nosniff');
    assert.equal(headers['referrer-policy'], 'no-referrer');
    assert(headers['content-security-policy'].includes("frame-ancestors 'none'"));
    report.mainHeaders = headers;
    const card = page.locator('[data-module="01"] .rounded-visual-card');
    await card.scrollIntoViewIfNeeded();
    await page.locator('[data-module="01"] .r06-client-ready').waitFor({timeout:30000});
    const frame = await (await card.locator('iframe').elementHandle()).contentFrame();
    const childOrigin = new URL(frame.url()).origin;
    assert.notEqual(childOrigin, new URL(base).origin);
    const child = await context.request.get(frame.url());
    report.rendererHeaders = child.headers();
    assert(child.headers()['content-security-policy'].includes("connect-src 'none'"));
    assert(child.headers()['content-security-policy'].includes('frame-ancestors ' + new URL(base).origin));
    report.origins = {main:new URL(base).origin, renderer:childOrigin};
    const denied = await frame.evaluate(() => {
      const result = {};
      for (const name of ['document','localStorage']) {
        try { void parent[name]; result[name] = 'allowed'; } catch(error) { result[name] = error.name; }
      }
      return result;
    });
    assert.deepEqual(denied, {document:'SecurityError',localStorage:'SecurityError'});
    report.checks.push('different origins; browser denies parent DOM and localStorage access');
    await frame.evaluate(() => {
      for (const [origin, source] of [['https://untrusted.invalid', parent], [new URL(document.URL).origin, window]]) {
        dispatchEvent(new MessageEvent('message', {origin, source, data:{type:'CDUT_SHOWCASE_THEME',theme:'dark'}}));
      }
    });
    assert.equal(await frame.locator('html').evaluate(e => e.classList.contains('dark')), false);
    await page.locator('#themeToggle').click();
    await frame.waitForFunction(() => document.documentElement.classList.contains('dark'));
    report.checks.push('untrusted theme messages ignored; genuine parent theme message applied');
    report.network = await frame.evaluate(async () => {
      const result = {violations:[]};
      document.addEventListener('securitypolicyviolation', e => result.violations.push({directive:e.effectiveDirective,disposition:e.disposition,blockedURI:e.blockedURI}));
      const probe = new URL('/__r06_disabled_network_probe', location.href).href;
      try { await fetch(probe); result.fetchGuard = 'allowed'; } catch { result.fetchGuard = 'blocked'; }
      try { new XMLHttpRequest(); result.xhrGuard = 'allowed'; } catch(error) { result.xhrGuard = error.name; }
      result.beaconGuard = navigator.sendBeacon(probe, 'r06 offline probe');
      try { await window.__r06AuditNative.fetch(probe + '-fetch'); result.nativeFetch = 'allowed'; } catch { result.nativeFetch = 'blocked'; }
      result.nativeXHR = await new Promise(resolve => {
        try {
          const xhr = new window.__r06AuditNative.XHR();
          xhr.open('GET', probe + '-xhr'); xhr.onload = () => resolve('allowed'); xhr.onerror = () => resolve('blocked'); xhr.send();
        } catch { resolve('blocked'); }
      });
      result.nativeBeaconQueueAccepted = window.__r06AuditNative.beacon(probe + '-beacon', 'r06 offline probe');
      await new Promise(resolve => setTimeout(resolve, 300));
      return result;
    });
    assert.equal(report.network.fetchGuard, 'blocked');
    assert.equal(report.network.xhrGuard, 'SecurityError');
    assert.equal(report.network.beaconGuard, false);
    assert.equal(report.network.nativeFetch, 'blocked');
    assert.equal(report.network.nativeXHR, 'blocked');
    assert(report.network.violations.length >= 3);
    assert(report.network.violations.every(e => e.directive === 'connect-src' && e.disposition === 'enforce'));
    for (const api of ['fetch','xhr','beacon']) assert(report.network.violations.some(e => e.blockedURI.endsWith('-' + api)));
    report.network.note = 'Native beacon may acknowledge queuing with true; the enforced CSP violation proves it is blocked before delivery.';
    report.checks.push('fetch/XHR/beacon guards and browser CSP both deny same-origin connections; bypassing guards still fails');
    for (const pathname of ['/tools/build-student-docs.cjs','/tests/showcase-browser.cjs','/evidence/2026-10-18/README.md',
      '/content/student-docs-v0.1-combined.md','/.git/config','/deployment/security-headers.json','/demos/webui/index.html','/api/']) {
      const probe = await context.request.get(base + pathname);
      assert.equal(probe.status(),404,pathname);
    }
    report.checks.push('private build/test/evidence/source paths and same-origin renderer/API routes return 404');
    report.status = 'passed';
    console.log(JSON.stringify({status:report.status,origins:report.origins,checks:report.checks},null,2));
  } catch(error) { report.status='failed';report.failure=error.stack;throw error; }
  finally {
    fs.writeFileSync(path.join(output,'security-browser-report.json'),JSON.stringify(report,null,2));
    await browser.close();
  }
})().catch(error => {console.error(error);process.exitCode=1;});
