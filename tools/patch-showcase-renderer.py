#!/usr/bin/env python3
"""Apply small, reversible patches to the vendored renderer; no UI reimplementation."""
import argparse
import hashlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / 'demos/webui/assets'


def blob_sha(text):
    data = text.encode()
    return hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()


PATCHES = {
    'main-Dqivs-S6.js': ('2b0825caf1e2d843f4a608b9341fc0cf73e169ba', [
        ('src:"cdut-resource://background.png"', 'src:new URL("./cdut-background.webp",import.meta.url).href'),
        # cdut-account-atoms.ts / tab-atoms.ts / settings-tab.ts / review-atoms.ts.
        ('fXt?U(async()=>', 'window.__CDUT_SHOWCASE_INIT__?.({zoneAtom:Hb,accountAtom:pm,tabsAtom:hn,activeTabAtom:yr,sidebarAtom:Zd,settingsAtom:dx,reviewCaseAtom:Yl});fXt?U(async()=>'),
        # 保留 YanhuErrorPage 组件，只在微缩态说明原生网页视图的离线边界。
        ('children:"网页加载失败"', 'children:window.__CDUT_SHOWCASE__?.zone==="yanhu-express"?"离线网页演示":"网页加载失败"'),
        ('children:[e.errorDescription,"（错误码 ",e.errorCode,"）"]', 'children:window.__CDUT_SHOWCASE__?.zone==="yanhu-express"?[e.errorDescription]:[e.errorDescription,"（错误码 ",e.errorCode,"）"]'),
        ('children:"请尝试排查："', 'children:window.__CDUT_SHOWCASE__?.zone==="yanhu-express"?"此框可直接操作：":"请尝试排查："'),
        ('children:"确认已连接校园网，或已登录学校 VPN（校外访问需先接入内网）"', 'children:window.__CDUT_SHOWCASE__?.zone==="yanhu-express"?"新建、切换、关闭或拖动浏览器标签":"确认已连接校园网，或已登录学校 VPN（校外访问需先接入内网）"'),
        ('children:"校内服务可能正在维护或临时故障，可稍后重试"', 'children:window.__CDUT_SHOWCASE__?.zone==="yanhu-express"?"输入地址、选择校园书签，查看本地前进与后退":"校内服务可能正在维护或临时故障，可稍后重试"'),
        ('children:"检查本地网络是否稳定，必要时切换网络环境"', 'children:window.__CDUT_SHOWCASE__?.zone==="yanhu-express"?"完整网页内容需要桌面客户端的原生浏览器；本演示不会联网":"检查本地网络是否稳定，必要时切换网络环境"'),
    ]),
    'index-Dmr8w2zr.js': ('034b137d24ab2474d4fcbff1e66fd24a1ddc1902', [
        ('const __vite__mapDeps=', 'import {installShowcase} from "./showcase-bridge.js";\nconst __vite__mapDeps='),
        ('V0();const ds=', 'V0();const __r06Showcase=installShowcase({store:kt(),viewAtom:gs,themeAtom:Gt,styleAtom:Yt,applyTheme:al});const ds='),
        ('.then(()=>{const i=document.createElement("div");i.id="webui-preview-controls"', '.then(()=>{if(__r06Showcase)return;const i=document.createElement("div");i.id="webui-preview-controls"'),
    ]),
}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    for filename, (original_sha, patches) in PATCHES.items():
        path = ROOT / filename
        current = path.read_text()
        original = current
        if blob_sha(original) != original_sha:
            for before, after in reversed(patches):
                if original.count(after) == 1:
                    original = original.replace(after, before, 1)
                elif original.count(before) != 1:
                    raise ValueError(f'{filename}: patched anchor changed: {after[:60]}')
        if blob_sha(original) != original_sha:
            raise ValueError(f'{filename}: original bundle hash differs')
        expected = original
        for before, after in patches:
            if expected.count(before) != 1:
                raise ValueError(f'{filename}: expected a unique source anchor: {before[:60]}')
            expected = expected.replace(before, after, 1)
        if args.check:
            if current != expected:
                raise ValueError(f'{filename}: run patch-showcase-renderer.py')
        else:
            path.write_text(expected)
        print(f'PASS: {filename}: {len(patches)} reproducible patches; original {original_sha}')


if __name__ == '__main__':
    main()
