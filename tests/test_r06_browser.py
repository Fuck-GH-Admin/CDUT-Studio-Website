# R06 Browser Regression | requires pip install playwright pytest + playwright install chromium
# This is a runnable suite, not a claim that CI or cross-browser acceptance already passed.
import contextlib
import functools
import http.server
import threading
from pathlib import Path

import pytest
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent


@contextlib.contextmanager
def serve():
    class QuietHandler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *_args):
            pass

    class Server(http.server.ThreadingHTTPServer):
        allow_reuse_address = True

    handler = functools.partial(QuietHandler, directory=str(ROOT))
    server = Server(("127.0.0.1", 0), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        yield f"http://127.0.0.1:{server.server_port}/index-modular.html"
    finally:
        server.shutdown()
        thread.join(timeout=3)


@pytest.fixture(scope="module")
def url():
    with serve() as value:
        yield value


@pytest.fixture
def context():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx = browser.new_context(viewport={"width": 1440, "height": 900}, reduced_motion="reduce")
        yield ctx
        ctx.close()
        browser.close()


def goto(page, url, route=""):
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto(url + route, wait_until="domcontentloaded")
    page.wait_for_timeout(160)
    return errors


def test_home_mint_and_scroll_wave(context, url):
    page = context.new_page()
    errors = goto(page, url)
    hero = page.locator("#heroStage")
    assert abs(float(hero.evaluate("(e) => getComputedStyle(e).getPropertyValue('--white-rise-progress')") or 0)) < .0001
    page.evaluate("window.scrollTo(0, 600)")
    page.wait_for_timeout(100)
    state = hero.evaluate("""e => ({
        progress: Number(e.style.getPropertyValue('--white-rise-progress')),
        rise: Number(e.style.getPropertyValue('--hero-title-rise').replace('px','')),
        height: e.getBoundingClientRect().height
    })""")
    assert state["progress"] > 0
    assert abs(state["rise"] + 1.2 * state["height"] * state["progress"]) < 1.5
    assert errors == []


def test_routes_restore_scroll_and_keep_position_on_reclick(context, url):
    page = context.new_page()
    errors = goto(page, url)
    page.evaluate("window.scrollTo(0, 1050)")
    page.wait_for_timeout(100)
    before = page.evaluate("scrollY")
    assert before > 900
    page.locator('.nav-links [data-route="download"]').click()
    page.wait_for_timeout(100)
    assert page.locator("#view-download.active").count() == 1
    page.locator('.nav-links [data-route="home"]').click()
    page.wait_for_timeout(100)
    assert abs(page.evaluate("scrollY") - before) < 10
    page.locator('.nav-links [data-route="home"]').click()
    assert abs(page.evaluate("scrollY") - before) < 10
    assert errors == []


def test_direct_hash_load_without_early_reference_error(context, url):
    page = context.new_page()
    errors = goto(page, url, "#/download")
    assert page.locator("#view-download.active").count() == 1
    assert errors == []


def test_back_navigation_with_scroll_memory(context, url):
    page = context.new_page()
    errors = goto(page, url)
    page.evaluate("window.scrollTo(0, 1200)")
    page.wait_for_timeout(70)
    recorded = page.evaluate("scrollY")
    page.locator('.nav-links [data-route="docs"]').click()
    page.wait_for_timeout(70)
    page.go_back()
    page.wait_for_timeout(130)
    assert page.locator("#view-home.active").count() == 1
    assert abs(page.evaluate("scrollY") - recorded) < 10
    assert errors == []


def test_mobile_menu_escape_and_focus(url):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 390, "height": 844}, reduced_motion="reduce")
        errors = goto(page, url)
        menu = page.locator("#mobileMenuBtn")
        menu.click()
        assert page.locator("#mobileDrawer").evaluate("e => e.classList.contains('open')")
        assert page.locator("#mobileDrawerBackdrop").is_visible()
        assert page.evaluate("document.activeElement.closest('#mobileDrawer') !== null")
        page.keyboard.press("Escape")
        assert not page.locator("#mobileDrawerBackdrop").is_visible()
        assert page.evaluate("document.activeElement.id") == "mobileMenuBtn"
        menu.click()
        page.locator('#mobileDrawer [data-route="download"]').click()
        page.wait_for_timeout(110)
        assert page.locator("#view-download.active").count() == 1
        assert page.evaluate("document.activeElement.closest('#mobileDrawer') === null")
        assert errors == []
        browser.close()


def test_releases_domestic_placeholder_click_retry(context, url):
    page = context.new_page()
    fake = [{
        "tag_name": "test-preview", "prerelease": True,
        "published_at": "2026-10-17T00:00:00Z",
        "html_url": "https://github.com/Nya-Angle/CDUT-Studio/releases/tag/test-preview",
        "assets": [{
            "name": "CDUT-Studio-Example.exe", "size": 321,
            "browser_download_url": "https://github.com/Nya-Angle/CDUT-Studio/releases/download/test-preview/CDUT-Studio-Example.exe"
        }]
    }]
    page.route("https://api.github.com/repos/Nya-Angle/CDUT-Studio/releases?per_page=8",
               lambda route: route.fulfill(json=fake))
    page.route("https://github.com/**", lambda route: route.abort())
    errors = goto(page, url)
    page.locator('.nav-links [data-route="download"]').click()
    assert page.locator("#releaseList .v1-download-domestic").count() == 1
    assert page.locator("#releaseList .v1-download-retry").is_hidden()
    page.locator("#releaseList a").filter(has_text="GitHub 安装包直链下载").click()
    assert page.locator("#releaseList .v1-download-retry").is_visible()
    assert errors == []


def test_api_failure_can_retry(context, url):
    page = context.new_page()
    calls = [0]
    def respond(route):
        calls[0] += 1
        if calls[0] == 1:
            route.fulfill(status=503, body="Unavailable")
        else:
            route.fulfill(json=[])
    page.route("https://api.github.com/repos/Nya-Angle/CDUT-Studio/releases?per_page=8", respond)
    errors = goto(page, url)
    page.locator('.nav-links [data-route="download"]').click()
    assert page.locator("#releaseRetryButton").is_visible()
    page.locator("#releaseRetryButton").click()
    page.wait_for_timeout(90)
    assert calls[0] == 2
    assert page.locator("#releaseRetryButton").is_hidden()
    assert errors == []

def test_single_file_inline_sources_are_exact_and_not_dollar_substituted():
    import re
    single = (ROOT / "index.html").read_text(encoding="utf-8")
    app = (ROOT / "js" / "app.js").read_text(encoding="utf-8")
    styles = (ROOT / "css" / "style.css").read_text(encoding="utf-8")
    assert re.search(r"<script>\s*[\s\S]+?</script>", single)
    assert single.split("<script>", 1)[1].split("</script>", 1)[0] == "\n" + app + "\n"
    assert single.split("<style>", 1)[1].split("</style>", 1)[0] == "\n" + styles + "\n"
    assert "const $$ = (sel, root = document)" in single


def test_single_file_offline_nav_dragon_and_menu(context):
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    # The standalone single HTML must work when double-clicked, without a server.
    page.goto((ROOT / "index.html").as_uri(), wait_until="domcontentloaded")
    page.wait_for_timeout(140)
    assert page.locator("#hero-ascii-canvas").count() == 1
    page.locator('.nav-links [data-route="docs"]').click()
    page.wait_for_timeout(100)
    assert page.locator("#view-docs.active").count() == 1
    page.locator('.nav-links [data-route="home"]').click()
    assert page.locator("#view-home.active").count() == 1
    page.locator("#heroStage").hover(position={"x": 120, "y": 260})
    page.wait_for_timeout(100)
    assert errors == []


def test_original_fluid_and_stable_dragon_char_coordinates():
    script = (ROOT / "js" / "app.js").read_text(encoding="utf-8")
    assert "injectPointerBrush(fluid," in script
    assert "splashes.push({" in script
    assert "stepCodexFluid(fluid, dt)" in script
    dragon_part = script.split("if (insideMask > 64) {", 1)[1].split("} else {", 1)[0]
    assert "drawX = x;" in dragon_part and "drawY = y;" in dragon_part
    assert "cursorInfluence * 12" not in dragon_part

def test_all_page_views_activate_one_at_a_time(context, url):
    page = context.new_page()
    errors = goto(page, url)
    for route in ("download", "docs", "home"):
        page.locator(f'.nav-links [data-route="{route}"]').click()
        page.wait_for_timeout(140)
        assert page.locator(f"#view-{route}.active").count() == 1
        assert page.locator(".page-view.active").count() == 1
        assert page.locator(".page-view[aria-hidden='true']").count() == 3
        assert page.evaluate("location.hash") == f"#/{route}"
    assert errors == []


def test_single_file_all_routes_reachable_without_server(context):
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto((ROOT / "index.html").as_uri(), wait_until="domcontentloaded")
    for route in ("download", "docs", "home"):
        page.locator(f'.nav-links [data-route="{route}"]').click()
        page.wait_for_timeout(160)
        assert page.locator(f"#view-{route}.active").count() == 1
    assert errors == []


def test_hero_title_is_in_top_third(context, url):
    page = context.new_page()
    errors = goto(page, url)
    rect = page.locator(".hero-content").bounding_box()
    assert rect
    assert 0.26 <= rect["y"] / 900 <= 0.42
    assert errors == []


def test_mobile_nav_is_keyboard_cycle_safe(url):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 390, "height": 844}, reduced_motion="reduce")
        errors = goto(page, url)
        page.locator("#mobileMenuBtn").click()
        page.keyboard.press("Shift+Tab")
        assert page.locator("#mobileDrawer .nav-btn").last.evaluate("(el) => document.activeElement === el")
        page.locator("#mobileDrawer .nav-btn").last.click()
        page.wait_for_timeout(140)
        assert page.locator("#view-docs.active").count() == 1
        assert not page.locator("#mobileDrawer").is_visible()
        assert errors == []
        browser.close()


def test_download_manifest_is_valid_and_download_url_direct():
    import json
    import re
    from urllib.parse import urlparse

    doc = (ROOT / "index-modular.html").read_text(encoding="utf-8")
    m = re.search(
        r'<script type="application/json" id="downloadManifest">\s*([\s\S]*?)\s*</script>', doc
    )
    assert m
    data = json.loads(m.group(1))
    assert data["schemaVersion"] == 1
    entry = data["releases"][0]
    assert entry["tag"] == "Dev.26.1"
    assert entry["prerelease"] is True
    assert len(entry["assets"]) == 1  # No fictitious macOS/Linux packages.
    asset = entry["assets"][0]
    assert asset["platform"] == "Windows"
    url = urlparse(asset["githubUrl"])
    assert url.scheme == "https" and url.hostname == "github.com"
    assert url.path == (
        "/Nya-Angle/CDUT-Studio/releases/download/Dev.26.1/"
        "Windows.CDUT-Studio-Setup-Dev.26.1.exe"
    )
    assert asset["domesticUrl"] is None
    assert asset["size"] == 223850063
    assert len(asset["sha256"]) == 64


def test_png_bitmap_removed_theme_vector_remains():
    modular = (ROOT / "index-modular.html").read_text(encoding="utf-8")
    standalone = (ROOT / "index.html").read_text(encoding="utf-8")
    for content in (modular, standalone):
        assert "data:image/png;base64" not in content
        assert "cdutThemeF" not in content
        assert "cdutThemeL" not in content
        assert 'id="themeToggle"' in content


def test_docs_heading_spacing_and_dragon_down():
    doc = (ROOT / "index-modular.html").read_text(encoding="utf-8")
    css = (ROOT / "css/style.css").read_text(encoding="utf-8")
    js = (ROOT / "js/app.js").read_text(encoding="utf-8")
    assert "<h1>CDUT Studio，从这里上手。</h1>" in doc
    assert ".docs-landing > h1" in css
    assert "const centerY = stageH * (mobile ? 0.39 : 0.41) + 16;" in js
    assert "stepCodexFluid(fluid, dt)" in js


def test_known_windows_direct_download_survives_api_outage(context, url):
    page = context.new_page()
    page.route(
        "https://api.github.com/repos/Nya-Angle/CDUT-Studio/releases?per_page=8",
        lambda route: route.abort(),
    )
    errors = goto(page, url)
    page.locator('.nav-links [data-route="download"]').click()
    # The verified asset is supplied from local JSON, independent of GitHub API.
    link = page.locator("#releaseList a").filter(has_text="GitHub 安装包直链下载")
    assert link.count() == 1
    assert link.get_attribute("href") == (
        "https://github.com/Nya-Angle/CDUT-Studio/releases/download/Dev.26.1/"
        "Windows.CDUT-Studio-Setup-Dev.26.1.exe"
    )
    assert page.locator("#releaseRetryButton").is_visible()
    assert errors == []


def test_standalone_builder_matches_current_output():
    import subprocess
    import sys

    cmd = [sys.executable, str(ROOT / "tools" / "build-standalone.py"), "--check"]
    proc = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=15)
    assert proc.returncode == 0, proc.stdout + proc.stderr


def test_dragon_gaze_calmer_and_other_effects_preserved():
    script = (ROOT / "js" / "app.js").read_text(encoding="utf-8")
    assert "const DRAGON_POINTER_RANGE = 0.55;" in script
    assert "const DRAGON_MAX_POSE = 0.7;" in script
    assert "const DRAGON_FOLLOW_RATE = 3.5;" in script
    assert "wantedPose = clamp((x - rect.width / 2) / (rect.width * DRAGON_POINTER_RANGE), -DRAGON_MAX_POSE, DRAGON_MAX_POSE);" in script
    assert "Math.exp(-DRAGON_FOLLOW_RATE * dt)" in script
    assert "returningState = { from: currentPose, start: nowMs + 160, duration: 2100 };" in script
    assert "injectPointerBrush(fluid, gx, gy" in script
    assert "splashes.push({" in script
    assert "stepCodexFluid(fluid, dt)" in script


def test_student_docs_source_and_chapter_integrity():
    import re
    from html.parser import HTMLParser

    source = (ROOT / "content" / "student-docs-v0.1-combined.md").read_text(encoding="utf-8")
    rendered = (ROOT / "index-modular.html").read_text(encoding="utf-8")
    assert len(re.findall(r'^> 文档 \d{2}/21', source, flags=re.MULTILINE)) == 21
    assert rendered.count('class="docs-chapter"') == 6
    assert rendered.count('class="docs-article docs-prose"') == 14
    assert rendered.count('class="docs-chapter-intro docs-prose"') == 6
    assert rendered.count('class="docs-chapter-card"') == 6
    assert '非学校官方项目' in rendered
    assert 'CDUT Studio，从这里上手。' in rendered
    assert 'id="doc-03-features"' in rendered
    assert rendered.count('id="doc-03-features"') == 1
    assert 'id="docs-chapter-header-03-features"' in rendered
    assert '智联万站与砚小龙' in rendered
    assert '材料审核' in rendered


def test_student_docs_generation_matches_frozen_v01():
    import subprocess
    cmd = ["node", str(ROOT / "tools" / "build-student-docs.cjs"), "--check"]
    proc = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=20)
    assert proc.returncode == 0, proc.stdout + proc.stderr


def test_docs_full_text_search_and_anchor_navigation(context, url):
    page = context.new_page()
    errors = goto(page, url, "#/docs")
    assert page.locator("#view-docs.active").count() == 1
    assert page.locator(".docs-chapter").count() == 6
    page.locator("#docsSearchInput").fill("材料审核")
    assert page.locator("#docsSearchResults a").count() > 0
    page.locator("#docsSearchResults a").filter(has_text="材料审核").first.click()
    page.wait_for_timeout(350)
    assert page.evaluate("location.hash").startswith("#/docs/03-features")
    assert errors == []


def test_docs_chapter_and_heading_deep_links(context, url):
    page = context.new_page()
    errors = goto(page, url, "#/docs/02-installation/model-setup?section=2")
    page.wait_for_timeout(300)
    assert page.locator("#view-docs.active").count() == 1
    assert page.locator("#doc-02-installation-model-setup-heading-2").count() == 1
    target_y = page.locator("#doc-02-installation-model-setup-heading-2").evaluate(
        "(el) => el.getBoundingClientRect().top"
    )
    assert 105 <= target_y <= 235
    assert errors == []


def test_docs_mobile_single_column(context, url):
    page = context.new_page()
    page.set_viewport_size({"width": 390, "height": 844})
    errors = goto(page, url, "#/docs")
    assert page.locator(".docs-chapter-card").count() == 6
    assert page.evaluate("document.documentElement.scrollWidth <= innerWidth+1")
    page.locator(".docs-chapter-card[href='#/docs/04-faq']").click()
    page.wait_for_timeout(250)
    assert page.evaluate("location.hash") == "#/docs/04-faq"
    assert errors == []


def test_team_profiles_order_source_and_no_false_links():
    script = (ROOT / "js" / "app.js").read_text(encoding="utf-8")
    expected = ("Nya-Angle", "Yuan-lai-ru-ci", "Fuck-GH-Admin", "核心成员 04", "核心成员 05")
    positions = [script.index('"name":"' + name + '"') for name in expected]
    assert positions == sorted(positions)
    assert "https://github.com/Yuan-lai-ru-ci.png?size=320" in script
    assert "https://github.com/Yuan-lai-ru-ci" in script
    assert "https://github.com/Fuck-GH-Admin" in script
    for filename in ("team-3.png", "team-4.png", "team-5.jpg"):
        assert "https://raw.githubusercontent.com/Nya-Angle/CDUT-Studio/main/assets/team/" + filename in script
    assert "create(link ? 'a' : 'div', 'member-surface')" in script
    assert "team-member--no-link" in script
    assert "这位成员尚未设置个人主页" not in script


def test_local_logo_and_standalone_offline_logo_data():
    modular = (ROOT / "index-modular.html").read_text(encoding="utf-8")
    standalone = (ROOT / "index.html").read_text(encoding="utf-8")
    vector = (ROOT / "assets" / "logo" / "CDUT_Studio_Mark.svg").read_text(encoding="utf-8")
    assert vector.lstrip().startswith("<svg")
    assert vector.strip().endswith("</svg>")
    assert modular.count("assets/logo/CDUT_Studio_Mark.svg") == 3
    assert standalone.count("data:image/svg+xml,%3Csvg") == 3
    assert "assets/logo/CDUT_Studio_Mark.svg" not in standalone


def test_team_cards_links_only_for_first_three(context, url):
    page = context.new_page()
    errors = goto(page, url)
    cards = page.locator("#teamMemberGrid .team-member")
    assert cards.count() == 5
    links = cards.locator("a.member-surface")
    assert links.count() == 3
    assert links.nth(0).get_attribute("href") == "https://github.com/Nya-Angle"
    assert links.nth(1).get_attribute("href") == "https://github.com/Yuan-lai-ru-ci"
    assert links.nth(2).get_attribute("href") == "https://github.com/Fuck-GH-Admin"
    assert cards.nth(3).locator("div.member-surface").count() == 1
    assert cards.nth(4).locator("div.member-surface").count() == 1
    assert errors == []


def test_icon_mark_is_square_textless_and_source_preserved():
    source = (ROOT / "assets/logo/CDUT_Studio.svg").read_text(encoding="utf-8")
    mark = (ROOT / "assets/logo/CDUT_Studio_Mark.svg").read_text(encoding="utf-8")
    assert 'viewBox="148 177 1240 1190"' in source
    assert 'viewBox="283 167 1000 1000"' in mark
    assert 'width="1000" height="1000"' in mark
    assert 'M681.75,1180.80' in source
    assert 'M681.75,1180.80' not in mark
    assert 'CDUT Studio 龙形徽标' in mark
    assert mark.count('<g id=') == 8
    assert 'CDUT Studio，从这里上手。' in (ROOT / "index-modular.html").read_text(encoding="utf-8")
    assert '文档，让每一步都有迹可循。' in (ROOT / "content/student-docs-v0.1-combined.md").read_text(encoding="utf-8")
