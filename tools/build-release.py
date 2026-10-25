#!/usr/bin/env python3
"""Build a static allowlist release with separate homepage and renderer roots."""
import argparse
import hashlib
import json
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPO = ROOT.parents[1]
EXTENSIONS = {'.html', '.js', '.css', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif', '.mp3', '.woff', '.woff2', '.ttf'}

def build(output):
    output = output.resolve()
    if output == REPO or REPO in output.parents or output in REPO.parents:
        raise ValueError('Release output must be outside the repository')
    if output.exists() and any(output.iterdir()):
        raise ValueError('Release output must be empty; no existing files are removed')
    output.mkdir(parents=True, exist_ok=True)
    site, renderer = output / 'site', output / 'renderer'
    site.mkdir(); renderer.mkdir()

    def copy(source, destination):
        assert source.is_file() and not source.is_symlink(), source
        assert source.suffix in EXTENSIONS, source
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, destination)

    # Production uses external scripts, so script-src does not need unsafe-inline.
    for name in ['index.html', 'index-modular.html']:
        copy(ROOT / 'index-modular.html', site / name)
    for directory in ['css', 'js', 'assets']:
        for source in (ROOT / directory).rglob('*'):
            if source.is_file():
                copy(source, site / source.relative_to(ROOT))
    for source in (ROOT / 'demos/webui').rglob('*'):
        if source.is_file():
            copy(source, renderer / source.relative_to(ROOT))

    public = [p for root in [site, renderer] for p in root.rglob('*') if p.is_file()]
    for file in public:
        relative = file.relative_to(output)
        assert not set(relative.parts) & {'tests', 'tools', 'evidence', 'content', '.git', 'deployment'}
        assert file.suffix != '.md'
    policies = json.loads((ROOT / 'deployment/security-headers.json').read_text())
    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=REPO, text=True).strip()
    dirty = bool(subprocess.check_output(['git', 'status', '--porcelain'], cwd=REPO))
    config = (ROOT / 'deployment/nginx.conf.template').read_text()
    for kind in ['main', 'renderer']:
        headers = {**policies['common'], **policies[kind]}
        rendered = '\n'.join(f'    add_header {name} "{value}" always;' for name, value in headers.items())
        config = config.replace(f'@@{kind.upper()}_HEADERS@@', rendered)
    config = config.replace('@@RELEASE@@', commit)
    assert '@@' not in config
    (output / 'nginx.conf').write_text(config)
    shutil.copyfile(ROOT / 'deployment/activate-release.py', output / 'activate-release.py')
    manifest = {
        'sourceCommit': commit, 'worktreeDirty': dirty,
        'homepageOrigin': 'https://cdut-studio.work',
        'rendererOrigin': 'https://www.cdut-studio.work',
        'entry': 'index-modular.html copied to production index.html',
        'publicFiles': {str(file.relative_to(output)): hashlib.sha256(file.read_bytes()).hexdigest() for file in sorted(public)},
        'nginxSHA256': hashlib.sha256(config.encode()).hexdigest(),
    }
    (output / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({'output': str(output), 'sourceCommit': commit, 'dirty': dirty, 'publicFiles': len(public)}, indent=2))

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', required=True, type=Path)
    build(parser.parse_args().output)
