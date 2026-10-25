#!/usr/bin/env python3
"""Local production-policy preview: 127.0.0.1 homepage, localhost renderer."""
import argparse
import json
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POLICIES = json.loads((ROOT / 'deployment/security-headers.json').read_text())

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, release, port, **kwargs):
        self.release = release
        self.port = port
        super().__init__(*args, directory=str(release / 'site'), **kwargs)

    def do_GET(self):
        host = self.headers.get('Host', '').split(':')[0]
        self.kind = 'renderer' if host == 'localhost' else 'main'
        self.directory = str(self.release / ('renderer' if self.kind == 'renderer' else 'site'))
        super().do_GET()

    def do_HEAD(self):
        host = self.headers.get('Host', '').split(':')[0]
        self.kind = 'renderer' if host == 'localhost' else 'main'
        self.directory = str(self.release / ('renderer' if self.kind == 'renderer' else 'site'))
        super().do_HEAD()

    def end_headers(self):
        for name, value in {**POLICIES['common'], **POLICIES.get(getattr(self, 'kind', 'main'), {})}.items():
            # Preserve the policy shape, substitute only the two test origins.
            value = value.replace('https://www.cdut-studio.work', f'http://localhost:{self.port}').replace('https://cdut-studio.work', f'http://127.0.0.1:{self.port}')
            self.send_header(name, value)
        super().end_headers()

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--directory', required=True, type=Path)
    parser.add_argument('--port', type=int, default=8173)
    args = parser.parse_args()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), partial(Handler, release=args.directory, port=args.port))
    print(f'Production-policy preview: http://127.0.0.1:{args.port}', flush=True)
    server.serve_forever()
