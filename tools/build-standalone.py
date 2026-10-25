#!/usr/bin/env python3
"""Build R06 standalone HTML from the editable modular source.

One source of truth:
- index-modular.html includes the JSON download manifest
- css/style.css and js/app.js hold their respective source
- index.html is generated, never maintained by hand

Run: python tools/build-standalone.py
Check: python tools/build-standalone.py --check
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
LOGO_REF = "assets/logo/CDUT_Studio_Mark.svg"
CSS_IMPORT = '<link rel="stylesheet" href="css/style.css" />'
JS_IMPORT = '<script src="js/app.js"></script>'


def render() -> str:
    markup = (ROOT / "index-modular.html").read_text(encoding="utf-8")
    css = (ROOT / "css" / "style.css").read_text(encoding="utf-8")
    css += "\n" + (ROOT / "css/showcase-clients.css").read_text(encoding="utf-8")
    javascript = (ROOT / "js" / "app.js").read_text(encoding="utf-8")
    javascript += "\n" + (ROOT / "js/showcase-clients.js").read_text(encoding="utf-8")
    logo_svg = (ROOT / LOGO_REF).read_text(encoding="utf-8")

    if markup.count(CSS_IMPORT) != 1 or markup.count(JS_IMPORT) != 1:
        raise ValueError("Expected exactly one modular CSS and JS reference")
    manifest_match = re.search(
        r'<script type="application/json" id="downloadManifest">\s*([\s\S]*?)\s*</script>', markup
    )
    if manifest_match is None:
        raise ValueError("Missing downloadManifest JSON")
    manifest = json.loads(manifest_match.group(1))
    if manifest.get("schemaVersion") != 1 or not isinstance(manifest.get("releases"), list):
        raise ValueError("Unsupported downloadManifest schema")

    # Python str.replace is literal. Never feed JS through a JS replacement
    # string: '$$' and '$&' would be interpreted specially.
    markup = markup.replace('<link rel="stylesheet" href="css/showcase-clients.css" />', "").replace('<script src="js/showcase-clients.js"></script>', "")
    result = markup.replace(CSS_IMPORT, "<style>\n" + css + "\n</style>")
    result = result.replace(JS_IMPORT, "<script>\n" + javascript + "\n</script>")
    # Keep the original vector logo available with file:// standalone previews.
    result = result.replace(LOGO_REF, "data:image/svg+xml," + quote(logo_svg, safe="!'()*-._~"))
    if result.count("<script>") != 1:
        raise ValueError("Expected exactly one executable app script")
    assert result.split("<script>", 1)[1].split("</script>", 1)[0] == "\n" + javascript + "\n"
    assert result.split("<style>", 1)[1].split("</style>", 1)[0] == "\n" + css + "\n"
    if LOGO_REF in result:
        raise ValueError("Unresolved local logo import")
    if CSS_IMPORT in result or JS_IMPORT in result:
        raise ValueError("Unresolved source import")
    if "data:image/png;base64" in result:
        raise ValueError("Legacy embedded PNG unexpectedly returned")
    return result


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="Fail if index.html is out of date")
    args = parser.parse_args()
    expected = render()
    output = ROOT / "index.html"
    if args.check:
        current = output.read_text(encoding="utf-8")
        if current != expected:
            print("FAIL: index.html differs; run python tools/build-standalone.py")
            return 1
        print("PASS: standalone matches HTML/CSS/JS and inline download manifest")
        return 0
    output.write_text(expected, encoding="utf-8")
    print(f"Updated {output} ({len(expected)} characters)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
