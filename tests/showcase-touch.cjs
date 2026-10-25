/* Real touch events in a mobile Chromium context, using the served homepage. */
const {chromium} = require('playwright');
const {tap: clientTap} = require('./scaled-pointer.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.R06_BROWSER_EXECUTABLE,
    headless: true,
    args: ['--no-sandbox'],
  });
  const context = await browser.newContext({
    viewport: {width:390, height:844},
    hasTouch: true,
    isMobile: true,
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  const report = {viewport:{width:390,height:844}, hasTouch:true, checks:[], errors:[]};
  page.on('pageerror', error => report.errors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') report.errors.push(message.text());
  });
  try {
    await page.goto((process.env.R06_BASE_URL || 'http://127.0.0.1:8173') + '/index.html');
    await page.waitForTimeout(1000);
    assert.equal(await page.evaluate(() => scrollY), 0);
    for (const id of ['01','02','03','04','05']) {
      const card = page.locator(`[data-module="${id}"] .rounded-visual-card`);
      await card.scrollIntoViewIfNeeded();
      await page.locator(`[data-module="${id}"] .r06-client-ready`).waitFor();
      const frame = await (await card.locator('iframe').elementHandle()).contentFrame();
      if (id === '01') {
        await clientTap(frame,frame.getByText('主题与页面预览', {exact:true}).first());
        await frame.getByText('我想用这个 WebUI 做页面演示，主题和页面怎么切换？', {exact:true}).waitFor();
      }
      if (id === '02') {
        await clientTap(frame,frame.getByRole('button', {name:'收起课程资料与大纲向导',exact:true}));
        await frame.getByRole('button', {name:'展开课程资料与大纲向导',exact:true}).waitFor();
      }
      if (id === '03') {
        const source = frame.locator('summary').filter({hasText:'查看原文（21 段）'}).first();
        await clientTap(frame,source);
        assert.equal(await source.evaluate(element => element.parentElement.open), true);
      }
      if (id === '04') {
        await clientTap(frame,frame.getByRole('button', {name:'新建标签',exact:true}));
        assert.equal(await frame.getByRole('button', {name:'关闭标签',exact:true}).count(), 2);
      }
      if (id === '05') {
        const search = frame.getByPlaceholder('搜索 Skills...');
        await clientTap(frame,search);
        await search.fill('课程');
        assert.equal(await frame.getByText('文档证据核验', {exact:true}).count(), 0);
      }
      report.checks.push(id + ': native touch interaction passed');
    }
    assert.deepEqual(report.errors, []);
    report.status = 'passed';
    console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    report.status = 'failed';
    report.failure = error.stack;
    throw error;
  } finally {
    const output = process.env.R06_EVIDENCE_DIR || path.resolve(__dirname, '../reports');
    fs.mkdirSync(output, {recursive:true});
    fs.writeFileSync(path.join(output, 'touch-report.json'), JSON.stringify(report,null,2));
    await browser.close();
  }
})().catch(error => {console.error(error);process.exitCode=1});
