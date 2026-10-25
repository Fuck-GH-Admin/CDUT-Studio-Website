#!/usr/bin/env python3
"""Verify the vendored static dependency graph of demos/webui.

Walks every local reference (JS imports, CSS url(), HTML src/href) inside
demos/webui and fails when a referenced file or directory is missing.
Reports file counts and key renderer hashes to reports/scope-assets-report.json.
"""
import hashlib
import json
import re
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
WEBUI = ROOT / 'demos/webui'
OUT = ROOT / 'reports'
OUT.mkdir(parents=True, exist_ok=True)

edges = []
missing = []


def check(source, reference):
    parts = urlsplit(reference)
    if parts.scheme or parts.netloc or reference.startswith('#'):
        return
    candidate = WEBUI / parts.path.lstrip('/') if reference.startswith('/') else source.parent / unquote(parts.path)
    edges.append((str(source.relative_to(WEBUI)), reference))
    if not (candidate.is_dir() if reference.endswith('/') else candidate.is_file()):
        missing.append({'source': str(source.relative_to(WEBUI)), 'reference': reference})


files = list(WEBUI.rglob('*'))
for source in files:
    if source.suffix not in ['.js', '.css', '.html']:
        continue
    text = source.read_text()
    if source.suffix == '.js':
        for reference in re.findall(r'\bfrom\s*["\'](\.{1,2}/[^"\'\\]+)["\']', text):
            check(source, reference)
        for reference in re.findall(r'\bimport\(\s*["\'](\.{1,2}/[^"\'\\]+)["\']\s*\)', text):
            check(source, reference)
        for reference in re.findall(r'new URL\(\s*["\']([^"\']+)["\']\s*,\s*import\.meta\.url\s*\)', text):
            check(source, reference)
        match = re.search(r'm\.f=\[(.*?)\]', text)
        if match:
            for reference in json.loads('[' + match.group(1) + ']'):
                check(source, reference)
    elif source.suffix == '.css':
        for reference in re.findall(r'url\(["\']?([^\)"\']+)["\']?\)', text):
            check(source, reference)
    elif source.name == 'index.html':
        for reference in re.findall(r'(?:src|href)=["\']([^"\']+)["\']', text):
            check(source, reference)

report = {
    'vendoredFiles': sum(path.is_file() for path in files),
    'checkedDependencyEdges': len(edges),
    'missingResources': missing,
    'rendererHashes': {
        str(p.relative_to(ROOT)): hashlib.sha256(p.read_bytes()).hexdigest()
        for p in [WEBUI / 'assets/main-Dqivs-S6.js', WEBUI / 'assets/index-Dmr8w2zr.js',
                  WEBUI / 'assets/showcase-bridge.js', WEBUI / 'assets/showcase-browser.js',
                  WEBUI / 'assets/cdut-background.webp']
        if p.is_file()
    },
}
(OUT / 'scope-assets-report.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
assert not missing, json.dumps(missing, ensure_ascii=False, indent=2)
print(json.dumps(report, ensure_ascii=False, indent=2))
