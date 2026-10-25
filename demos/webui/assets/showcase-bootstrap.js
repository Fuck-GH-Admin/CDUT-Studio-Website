// Browser-enforced connect-src 'none' is the permission boundary.
// These early guards also make unsupported APIs fail without issuing requests.
window.fetch = () => Promise.reject(new Error('Offline showcase: network disabled'));
window.XMLHttpRequest = class { constructor() { throw new DOMException('Offline showcase: network disabled', 'SecurityError'); } };
Object.defineProperty(navigator, 'sendBeacon', {configurable: true, value: () => false});
window.WebSocket = class { constructor() { throw new Error('Offline showcase: network disabled'); } };
window.EventSource = window.WebSocket;
// 每个微缩客户端只读写自己的内存，不共享网站或其他展示框的配置。
if (new URLSearchParams(location.search).get('miniature') === '1') {
  for (const name of ['localStorage', 'sessionStorage']) {
    const data = new Map();
    Object.defineProperty(window, name, {configurable: true, value: {
      get length() { return data.size },
      key: index => [...data.keys()][index] ?? null,
      getItem: key => data.get(String(key)) ?? null,
      setItem: (key, value) => data.set(String(key), String(value)),
      removeItem: key => data.delete(String(key)),
      clear: () => data.clear(),
    }});
  }
}
// 与桌面端保持一致：先恢复所选模式，避免页面首帧闪烁。
(() => {
  const params = new URLSearchParams(location.search)
  const mode = params.get('theme')
  const skin = params.get('skin')
  const view = params.get('view')
  if (['light', 'dark', 'system'].includes(mode)) localStorage.setItem('profer-theme-mode', mode)
  if (skin) {
    localStorage.setItem('profer-theme-mode', 'special')
    localStorage.setItem('profer-theme-style', skin)
  }
  if (view && ['conversations', 'planning', 'agent-skills', 'cdut-zone'].includes(view)) {
    localStorage.setItem('profer-active-view', view)
  }
  const savedMode = localStorage.getItem('profer-theme-mode') || 'system'
  const savedSkin = localStorage.getItem('profer-theme-style') || ''
  const html = document.documentElement
  if (savedMode === 'dark' || (savedMode === 'special' && savedSkin.endsWith('-dark'))) html.classList.add('dark')
  html.classList.add('ui-classic')
})()
