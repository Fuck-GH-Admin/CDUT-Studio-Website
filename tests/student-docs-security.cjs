/* Compile untrusted path probes in memory; never modify the frozen Markdown. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {buildDocs} = require('../tools/build-student-docs.cjs');
const source = fs.readFileSync(path.resolve(__dirname, '../content/student-docs-v0.1-combined.md'), 'utf8');
const original = '01-getting-started/first-run.md';
const replaceBoundary = value => source.replace(/(^> 文档 \d{2}\/21 · `)01-getting-started\/first-run\.md(`)/m,
  (_, prefix, suffix) => prefix + value + suffix);
const probes = [
  '01-getting-started/first-run" data-audit-proof="1.md',
  "01-getting-started/first-run' onmouseover='probe.md",
  '../first-run.md', '/first-run.md', 'first//run.md',
  'first/./run.md', 'first/../run.md', 'first\\run.md',
  'first%22run.md', 'first?run.md', 'first#run.md', 'first run.md',
  'first/<img>.md', 'https://example.invalid/run.md',
];
for (const probe of probes) {
  assert.throws(() => buildDocs(replaceBoundary(probe)), /Invalid document path/, probe);
}
assert.throws(() => buildDocs(replaceBoundary('index.md')), /Duplicate document slug/);
const rendered = buildDocs(source);
assert.equal(rendered.counts.documents, 21);
assert.equal(rendered.counts.chapters, 6);
assert(rendered.html.includes('href="#/docs/01-getting-started/first-run"'));
assert(!rendered.html.includes('data-audit-proof='));
assert.equal(fs.readFileSync(path.resolve(__dirname, '../content/student-docs-v0.1-combined.md'), 'utf8'), source);
console.log(`PASS: ${probes.length} invalid paths and duplicate slug rejected; 21 documents, 6 chapters preserved`);
