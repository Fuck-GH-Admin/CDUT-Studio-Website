/* Check the narrowly scoped mirror patch and the static publication allowlist. */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
const start = app.indexOf('        // Only explicitly reviewed mirrors');
const end = app.indexOf('        const makeRelease = release => {', start);
assert(start > 0 && end > start);
const patch = app.slice(start, end);
const validate = approved => vm.runInNewContext(patch.replace('new Set([])', `new Set(${JSON.stringify(approved)})`) + '\nsafeDomesticUrl', {URL});
for (const url of ['https://example.invalid/file.exe', 'http://mirror.example.test/file.exe', 'javascript:alert(1)', null]) {
  assert.equal(validate([])(url), null);
}
const mirror = validate(['mirror.example.test']);
assert.equal(mirror('https://mirror.example.test/file.exe'), 'https://mirror.example.test/file.exe');
for (const url of ['http://mirror.example.test/file.exe', 'https://mirror.example.test.evil.invalid/file.exe',
  'https://evil.mirror.example.test/file.exe', 'https://user@mirror.example.test/file.exe',
  'https://mirror.example.test:8443/file.exe']) assert.equal(mirror(url), null);
const restored = app.replace(patch, '').replace(
  '              const domesticUrl = safeDomesticUrl(asset.domestic_download_url);\n              if (domesticUrl) {',
  "              const domesticUrl = asset.domestic_download_url;\n              if (typeof domesticUrl === 'string' && /^https:\\/\\//.test(domesticUrl)) {");
const bytes = Buffer.from(restored);
const hash = crypto.createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
assert.equal(hash, '51f822696c42ccc4a06ca96439853650defeec47', 'all app.js outside the mirror patch must match the frozen baseline');
if (process.argv[2]) {
  const release = path.resolve(process.argv[2]);
  const manifest = JSON.parse(fs.readFileSync(path.join(release, 'manifest.json'), 'utf8'));
  for (const [name, expected] of Object.entries(manifest.publicFiles)) {
    assert(!/(?:^|\/)(?:tests|tools|evidence|content|deployment|\.git)(?:\/|$)/.test(name));
    assert(!name.endsWith('.md'));
    const actual = crypto.createHash('sha256').update(fs.readFileSync(path.join(release, name))).digest('hex');
    assert.equal(actual, expected, name);
  }
  const html = fs.readFileSync(path.join(release, 'site/index.html'), 'utf8');
  assert.equal(html, fs.readFileSync(path.join(root, 'index-modular.html'), 'utf8'));
  assert(!/<script(?![^>]*\b(?:src=|type="application\/json"))[^>]*>/i.test(html));
  assert(!fs.existsSync(path.join(release, 'site/demos')));
  assert(fs.existsSync(path.join(release, 'renderer/demos/webui/index.html')));
  console.log(`PASS: ${Object.keys(manifest.publicFiles).length} public files match manifest; private paths excluded; separate renderer root`);
}
console.log('PASS: mirror allowlist rejects unknown hosts and unsafe URLs; all other app.js bytes unchanged');
