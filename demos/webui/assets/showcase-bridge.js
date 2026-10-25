/* Adapter for the user-supplied offline renderer. No real service calls. */
import {createOfflineBrowser} from './showcase-browser.js';
export function installShowcase({store, viewAtom, themeAtom, styleAtom, applyTheme}) {
  const params = new URLSearchParams(location.search);
  if (params.get('miniature') !== '1') return false;
  const allowedViews = ['conversations', 'cdut-zone', 'agent-skills'];
  const view = allowedViews.includes(params.get('view')) ? params.get('view') : 'conversations';
  const zones = ['ai-class', 'material-review', 'yanhu-express'];
  const zone = zones.includes(params.get('zone')) ? params.get('zone') : null;
  const parentURL = new URL(location.origin);
  if (location.hostname === 'www.cdut-studio.work') parentURL.hostname = 'cdut-studio.work';
  else if (location.hostname === 'localhost') parentURL.hostname = '127.0.0.1';
  else if (location.hostname === '127.0.0.1') parentURL.hostname = 'localhost';
  const parentOrigin = parentURL.origin;
  window.__CDUT_SHOWCASE__ = {view, zone};
  document.documentElement.dataset.showcaseView = zone || view;
  // 预加载的桌面客户端不能抢走网站焦点或把首页滚到输入框。
  // 用户进入框后仍可使用原生控件；程序定位只滚动最近的客户端滚动容器。
  let interacted = false;
  for (const type of ['pointerdown', 'keydown']) {
    document.addEventListener(type, event => {if (event.isTrusted) interacted = true}, true);
  }
  const nativeFocus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function(options) {
    if (interacted) nativeFocus.call(this, {...options, preventScroll: true});
  };
  const nativeScrollIntoView = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(options) {
    if (interacted) nativeScrollIntoView.call(this, {
      ...(typeof options === 'object' ? options : {block: options === false ? 'end' : 'start'}),
      container: 'nearest',
    });
  };
  store.set(viewAtom, view);
  store.sub(viewAtom, () => { if (store.get(viewAtom) !== view) store.set(viewAtom, view); });
  // 编译资源在 createRoot 前交出真实 Jotai 原子；符号映射见补丁脚本。
  window.__CDUT_SHOWCASE_INIT__ = atoms => {
    const lock = (atom, value) => {
      store.set(atom, value);
      store.sub(atom, () => {if (store.get(atom) !== value) store.set(atom, value)});
    };
    lock(atoms.settingsAtom, false);
    if (zone) {
      lock(atoms.zoneAtom, zone);
      store.set(atoms.accountAtom, {status: 'active', studentId: '2023000000', studentName: 'WebUI 演示用户'});
      store.set(atoms.sidebarAtom, true);
    }
    const classSession = 'webui-ai-class-session';
    if (zone === 'ai-class') {
      const tab = {id: classSession, type: 'agent', sessionId: classSession, title: '材料科学与工程：硅酸盐结构'};
      lock(atoms.tabsAtom, [tab]);
      lock(atoms.activeTabAtom, tab.id);
      window.electronAPI.updateSettings({tabState: {tabs: [tab], activeTabId: tab.id}});
    } else {
      // 禁止教程、浏览器、便笺等通过会话标签绕开顶层视图限制。
      store.sub(atoms.tabsAtom, () => {
        const current = store.get(atoms.tabsAtom);
        const allowed = current.filter(tab => view === 'conversations' && tab.type === 'agent');
        if (allowed.length !== current.length) store.set(atoms.tabsAtom, allowed);
      });
    }
    if (zone === 'material-review') {
      window.reviewAPI.loadDemoCase().then(reviewCase => store.set(atoms.reviewCaseAtom, reviewCase));
    }
    window.__CDUT_SHOWCASE__.state = () => ({
      view: store.get(viewAtom), zone: store.get(atoms.zoneAtom),
      settingsOpen: store.get(atoms.settingsAtom), activeTab: store.get(atoms.activeTabAtom),
      tabs: store.get(atoms.tabsAtom).map(tab => ({id: tab.id, type: tab.type})),
    });
  };
  const setTheme = mode => {
    if (!['light', 'dark'].includes(mode)) return;
    store.set(themeAtom, mode); store.set(styleAtom, 'default');
    applyTheme(mode, 'default', mode === 'dark');
    window.electronAPI.updateSettings({themeMode: mode, themeStyle: 'default'});
  };
  setTheme(params.get('theme') || 'light');
  window.addEventListener('message', event => {
    if (event.source !== parent || event.origin !== parentOrigin) return;
    if (event.data?.type === 'CDUT_SHOWCASE_THEME') setTheme(event.data.theme);
  });
  // Prevent navigation at both the renderer-state and input layers.
  document.addEventListener('click', event => {
    const el = event.target.closest('a,button,[role="button"],[role^="menuitem"],[data-profer-navigation-item]');
    if (!el) return;
    const item = el.dataset.proferNavigationItem;
    const label = [el.getAttribute('title'), el.getAttribute('aria-label'), el.textContent].join(' ').trim();
    if (el.dataset.showcaseLimited || el.matches('a[href]') || (item && ['planning', 'agent-skills'].includes(item) && item !== view)
      || el.closest('[data-profer-navigation-region^="mode-switcher"]')
      || /^(设置|打开设置|退出特区账户|返回专区|返回 CDUT 专区|WebUI)/.test(label)) {
      event.preventDefault(); event.stopImmediatePropagation();
    }
  }, true);
  document.addEventListener('submit', event => event.preventDefault(), true);
  document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    const command = event.ctrlKey || event.metaKey;
    const editing = event.target.closest('input,textarea,[contenteditable="true"]')
      && command && !event.altKey && !event.shiftKey && ['a','c','v','x','z','y','arrowleft','arrowright'].includes(key);
    const copy = command && !event.shiftKey && key === 'c';
    const reviewAssistant = zone === 'material-review' && command && event.shiftKey && key === 'a';
    if (/^f\d+$/.test(key) || ((event.altKey || command) && !editing && !copy && !reviewAssistant)) {
      event.preventDefault(); event.stopImmediatePropagation();
    }
  }, true);
  // 原客户端按钮保留原位；不能可靠模拟的操作明确禁用。
  const unavailable = /发送消息|添加文件或文件夹|导入|导出|上传|下载|从此处分叉|从此处探索|回退到此处|界面引导|打开受管浏览器|关闭返回专区首页|在系统浏览器中打开|净化缓存并重试|诊断控制台|切换课堂|开始审核|从头审核|继续审核|提交|退出|添加申报材料|添加证明材料|新建 Skill|提升为全局|抽认卡|自测练习|确认审核依据|添加依据|编辑规则摘要|修正|清空|删除材料|复制|新建项目|项目菜单/;
  const restrictButtons = () => {
    for (const button of document.querySelectorAll('button,[role^="menuitem"]')) {
      const label = [button.getAttribute('aria-label'), button.getAttribute('title'), button.textContent].join(' ');
      const navigation = button.dataset.proferNavigationItem;
      const otherView = navigation && ['planning', 'agent-skills'].includes(navigation) && navigation !== view;
      const mode = button.closest('[data-profer-navigation-region^="mode-switcher"]');
      const agentOnly = view !== 'conversations' && /新会话|新建 Agent 会话|中新建会话|返回当前 Agent 会话|打开已归档列表/.test(label);
      if (unavailable.test(label) || otherView || mode || agentOnly || /^(设置|打开设置)/.test(label.trim())) {
        button.disabled = true;
        button.setAttribute('aria-disabled', 'true');
        if (!button.dataset.showcaseLimited) {
          button.title = `${label.trim()}（离线演示不提供此操作）`;
          button.dataset.showcaseLimited = 'true';
        }
      }
    }
    for (const link of document.querySelectorAll('a[href]')) {
      link.dataset.showcaseHref = link.getAttribute('href');
      link.removeAttribute('href'); link.removeAttribute('target');
      link.setAttribute('aria-disabled', 'true');
    }
    for (const input of document.querySelectorAll('input[type="file"]')) input.disabled = true;
    if (view !== 'conversations') {
      for (const sidebar of document.querySelectorAll('.sidebar-collapse-ease')) {
        sidebar.inert = true;
        sidebar.title = '此展示框仅开放当前模块';
      }
    }
    for (const input of document.querySelectorAll('textarea,[contenteditable="true"]')) {
      if (input.tagName === 'TEXTAREA') input.readOnly = true;
      else input.setAttribute('contenteditable', 'false');
      input.title = '离线演示仅浏览预置内容，不发送、上传或提交';
    }
  };
  new MutationObserver(restrictButtons).observe(document.getElementById('root'), {childList: true, subtree: true});
  // 不可用的原生写入 API 也受限，覆盖快捷键和直接方法调用。
  const wrappers = new WeakMap();
  const browser = createOfflineBrowser();
  const rendererAPI = window.electronAPI;
  const skillStates = new Map();
  const skillKey = (workspace, slug, source = '') => `${workspace}:${slug}:${source}`;
  const listSkills = async workspace => (await rendererAPI.getWorkspaceSkills(workspace)).map(skill => ({
    ...skill,
    enabled: skillStates.get(skillKey(workspace, skill.slug, skill.sourceSkillId)) ?? skill.enabled,
  }));
  const toggleSkill = async (workspace, slug, enabled, source) => {
    skillStates.set(skillKey(workspace, slug, source), enabled);
    return {ok: true};
  };
  const wrap = target => {
    if (wrappers.has(target)) return wrappers.get(target);
    const proxy = new Proxy(target, {get(object, key) {
    const value = key === 'yanhuExpress' ? browser
      : object === rendererAPI && key === 'getWorkspaceSkills' ? listSkills
      : object === rendererAPI && key === 'toggleWorkspaceSkill' ? toggleSkill : object[key];
    if (typeof value === 'object' && value !== null) return wrap(value);
    if (typeof value !== 'function') return value;
    if (/^(send|submit|export|import|ingest|upload|download|openExternal|openSettings|open.*Window|startAgent|runAgent|preparePi|runReview|login|logout)/i.test(String(key))) {
      return async () => ({ok: false, success: false, error: '离线演示不提供此操作'});
    }
    return value.bind(object);
    }});
    wrappers.set(target, proxy);
    return proxy;
  };
  for (const name of ['electronAPI', 'reviewAPI']) {
    Object.defineProperty(window, name, {configurable: true, value: wrap(window[name])});
  }
  // Strict CSP and the early external bootstrap block network APIs.
  window.open = () => null;
  document.addEventListener('auxclick', event => {event.preventDefault(); event.stopImmediatePropagation()}, true);
  document.addEventListener('drop', event => {
    if (event.dataTransfer?.files.length) {event.preventDefault(); event.stopImmediatePropagation()}
  }, true);
  const observer = new MutationObserver(() => {
    if (document.querySelector('#root button')) {
      observer.disconnect();
      parent.postMessage({type: 'CDUT_OFFLINE_DEMO_READY', view, zone}, parentOrigin);
    }
  });
  observer.observe(document.getElementById('root'), {childList: true, subtree: true});
  return true;
}
