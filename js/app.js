
(() => {
      'use strict';

      const $ = (sel, root = document) => root.querySelector(sel);
      const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
      const smooth = t => t * t * (3 - 2 * t);
      const easeOutQuad = p => 1 - (1 - p) * (1 - p); // power2.out from antigravity-reveal-lab
      const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      /* ======================================================================
         A. Toast Notification Helper
         ====================================================================== */
      let toastTimer = null;
      function showToast(text) {
        const el = $('#toastMsg');
        if (!el) return;
        el.textContent = text;
        el.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
      }

      /* ======================================================================
         TEAM_MEMBERS — 唯一需要填写的五人资料配置
         name: 对外显示名; role: 简短职责; bio: 鼠标悬停后显示的详细介绍
         portrait: 头像地址。五人都使用头像区域；缺少头像时显示独立的抽象头像占位
         homepage: 可填 https://github.com/...、个人博客等；留空时不会虚构链接
         platform: 个人主页标记，例如 GitHub、Blog、主页
         ====================================================================== */
      const TEAM_MEMBERS = [
        {"name":"Nya-Angle","role":"项目负责人 · 核心开发","bio":"负责智联万站、AI 速课堂、RAG 算法、特区账户技术支持与「砚小龙」IP 设计。","portrait":"https://avatars.githubusercontent.com/u/289569438?v=4","homepage":"https://github.com/Nya-Angle","platform":"GitHub"},
        {"name":"Yuan-lai-ru-ci","role":"基础架构协作者 · ProferAI","bio":"为项目提供 ProferAI 基座支持，参与客户端通信和架构选型相关技术交流。","portrait":"https://github.com/Yuan-lai-ru-ci.png?size=320","homepage":"https://github.com/Yuan-lai-ru-ci","platform":"GitHub"},
        {"name":"Fuck-GH-Admin","role":"材料审核 · UI / 视觉设计","bio":"负责材料审核模块研发、项目图像资源设计，以及客户端 UI 与项目视觉设计。","portrait":"https://raw.githubusercontent.com/Nya-Angle/CDUT-Studio/main/assets/team/team-3.png","homepage":"https://github.com/Fuck-GH-Admin","platform":"GitHub"},
        {"name":"核心成员 04","role":"交互设计 · RAG / 技术文档","bio":"负责核心交互功能设计、RAG 知识库功能构思、技术架构与部署文档撰写。","portrait":"https://raw.githubusercontent.com/Nya-Angle/CDUT-Studio/main/assets/team/team-4.png","homepage":"","platform":""},
        {"name":"核心成员 05","role":"校园场景 · 用户文档","bio":"负责砚湖易办业务流逻辑梳理、学业场景需求设计与用户操作手册。","portrait":"https://raw.githubusercontent.com/Nya-Angle/CDUT-Studio/main/assets/team/team-5.jpg","homepage":"","platform":""}
      ];

      /* Decorative abstract portrait placeholders are NOT photos or depictions of real people. */
      function abstractPortrait(index) {
        const palette = [
          ['#d6f3e7','#79cbad','#2e9979'],
          ['#ddf1f2','#87b6d2','#638fc0'],
          ['#e8f4e9','#d6adcb','#a58ac3'],
          ['#f1f2e4','#d8caab','#ac936c'],
          ['#e8eff8','#9db7c9','#607f9c']
        ][index] || ['#d6f3e7','#79cbad','#2e9979'];
        return `<svg viewBox="0 0 180 180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="avatarGradient${index}" x1="0" x2="1" y1="0" y2="1">
            <stop stop-color="${palette[0]}"/><stop offset="1" stop-color="${palette[1]}"/>
          </linearGradient></defs>
          <rect width="180" height="180" fill="url(#avatarGradient${index})"/>
          <circle cx="146" cy="28" r="62" fill="#fff" opacity=".27"/>
          <path d="M20 182c4-56 29-80 70-80s66 24 70 80" fill="${palette[2]}" opacity=".48"/>
          <circle cx="90" cy="75" r="35" fill="${palette[2]}" opacity=".52"/>
          <path d="M10 147q79-30 160 0" stroke="#fff" stroke-width="2" opacity=".24" fill="none"/>
        </svg>`;
      }
      function safeHomepage(raw) {
        if (!raw || typeof raw !== 'string') return '';
        try {
          const url = new URL(raw);
          return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
        } catch (_) { return ''; }
      }
      function renderTeamMembers() {
        const grid = $('#teamMemberGrid');
        if (!grid) return;
        const create = (tag, className, text) => {
          const node = document.createElement(tag);
          if (className) node.className = className;
          if (text !== undefined) node.textContent = text;
          return node;
        };
        TEAM_MEMBERS.slice(0,5).forEach((member, index) => {
          const link = safeHomepage(member.homepage);
          const person = create('article', 'team-member');
          const surface = create(link ? 'a' : 'div', 'member-surface');
          if (link) {
            surface.href = link;
            surface.target = '_blank';
            surface.rel = 'noopener noreferrer';
            surface.setAttribute('aria-label', `前往 ${member.name} 的${member.platform || '个人'}主页`);
          } else {
            person.classList.add('team-member--no-link');
          }
          const art = create('div', 'member-art');
          art.dataset.slot = String(index+1);
          art.innerHTML = abstractPortrait(index);
          if (member.portrait) {
            const img = create('img','member-photo');
            img.alt = `${member.name} 的头像`;
            img.loading = 'lazy';
            img.referrerPolicy = 'no-referrer';
            // If remote/local image fails, retain the abstract placeholder below.
            img.style.opacity = '0';
            img.onload = () => { if (img.naturalWidth > 0) img.style.opacity = '1'; };
            img.onerror = () => { img.remove(); };
            img.src = member.portrait;
            art.append(img);
          }
          const summary = create('div','member-summary');
          summary.append(create('span','member-number',`MEMBER / ${String(index+1).padStart(2,'0')}`));
          summary.append(create('h3','member-name',member.name));
          summary.append(create('span','member-role-short',member.role || '项目成员'));
          surface.append(art,summary,create('span','member-arrow',link ? '↗' : ''));
          const detail = create('div','member-detail');
          detail.append(create('h4','member-detail-heading',member.name));
          detail.append(create('p','member-detail-role',member.role || '项目成员'));
          detail.append(create('p','member-detail-bio',member.bio || '个人介绍待补充。'));
          detail.append(create('span','member-detail-hint',link ? `↗ 点击成员卡片前往 ${member.platform || '个人主页'}` : '成员介绍（无个人主页跳转）'));
          person.append(surface,detail);
          const infoToggle = create('button','member-info-toggle','i');
          infoToggle.type = 'button';
          infoToggle.setAttribute('aria-label',`查看${member.name}的详细信息`);
          infoToggle.setAttribute('aria-expanded','false');
          infoToggle.addEventListener('click',(e) => {
            e.stopPropagation();
            const next = !person.classList.contains('is-open');
            $$('.team-member.is-open').forEach(el => {
              el.classList.remove('is-open');
              const t = $('.member-info-toggle', el);
              if (t) t.setAttribute('aria-expanded','false');
            });
            person.classList.toggle('is-open',next);
            infoToggle.setAttribute('aria-expanded',String(next));
          });
          person.append(infoToggle);
          grid.append(person);
        });
      }
      renderTeamMembers();

      document.addEventListener('pointerdown', (event) => {
        if (event.target.closest('.team-member')) return;
        $$('.team-member.is-open').forEach(el => {
          el.classList.remove('is-open');
          const t = $('.member-info-toggle', el);
          if (t) t.setAttribute('aria-expanded','false');
        });
      });

      /* ======================================================================
         B. Router & Navigation (首页 / 下载 / 文档 / 404)
         ====================================================================== */
      const routes = ['home', 'download', 'docs', '404'];
      // Original first-prototype release page, restored as an on-demand API index.
      // No hard-coded version, checksum or attachment is presented as verified.
      // Inline JSON is the single release config source for both modular HTML and
      // the generated standalone. The GitHub API enriches *other* versions only.
      // No dependency on fetch() to display the known Windows direct-download link.
      function getCuratedReleaseIndex() {
        try {
          const el = document.getElementById('downloadManifest');
          const manifest = JSON.parse(el?.textContent || '{}');
          if (manifest.schemaVersion !== 1 || !Array.isArray(manifest.releases)) return [];
          return manifest.releases.map(release => ({
            tag_name: String(release.tag || ''),
            name: String(release.name || ''),
            prerelease: !!release.prerelease,
            published_at: release.publishedAt || null,
            html_url: 'https://github.com/Nya-Angle/CDUT-Studio/releases/tag/' + encodeURIComponent(release.tag || ''),
            assets: (Array.isArray(release.assets) ? release.assets : []).map(asset => ({
              name: asset.name,
              size: asset.size,
              browser_download_url: asset.githubUrl || '',
              domestic_download_url: asset.domesticUrl || null,
              digest: typeof asset.sha256 === 'string' ? 'sha256:' + asset.sha256 : ''
            }))
          }));
        } catch (error) {
          console.warn('Unable to read local download manifest:', error);
          return [];
        }
      }
      let releasesRequested = false;
      async function loadReleaseIndex() {
        if (releasesRequested) return;
        releasesRequested = true;
        const latest = $('#releaseList'), older = $('#olderReleases');
        const currentStatus = $('#releaseStatus'), olderStatus = $('#olderStatus');
        const retryButton = $('#releaseRetryButton');
        if (!latest || !older || !currentStatus || !olderStatus) return;
        if (retryButton) retryButton.hidden = true;
        currentStatus.textContent = '正在准备已确认的下载地址…';
        const makeText = (tag, css, value) => {
          const el = document.createElement(tag);
          if (css) el.className = css;
          el.textContent = value;
          return el;
        };
        const safeGitHubUrl = value => {
          try {
            const u = new URL(value);
            return u.protocol === 'https:' && u.hostname === 'github.com' ? u.href : 'https://github.com/Nya-Angle/CDUT-Studio/releases';
          } catch (_) { return 'https://github.com/Nya-Angle/CDUT-Studio/releases'; }
        };
        // Only explicitly reviewed mirrors may become active download links.
        // No domestic mirror has been approved; keep the existing pending state.
        const approvedDomesticHosts = new Set([]);
        const safeDomesticUrl = value => {
          try {
            const u = new URL(value);
            return u.protocol === 'https:' && !u.username && !u.password && !u.port
              && approvedDomesticHosts.has(u.hostname) ? u.href : null;
          } catch (_) { return null; }
        };
        const makeRelease = release => {
          const card = makeText('article', 'v1-release-card', '');
          const info = document.createElement('div');
          info.append(makeText('h3', '', 'CDUT Studio ' + (release.tag_name || release.name || '')));
          const date = release.published_at ? new Date(release.published_at) : null;
          const formatted = date && !Number.isNaN(date.valueOf()) ? date.toLocaleDateString('zh-CN') : '';
          info.append(makeText('div', 'v1-release-meta', [release.prerelease ? '开发预览版' : '正式版', formatted].filter(Boolean).join(' · ')));
          const assets = Array.isArray(release.assets) ? release.assets : [];
          if (assets.length) {
            const assetList = makeText('div', 'v1-release-assets', '');
            for (const asset of assets) {
              const row = makeText('div', 'v1-release-asset', '');
              row.append(makeText('span', 'filename', asset.name || '发行附件'));
              if (Number.isFinite(asset.size) && asset.size > 0) row.append(makeText('span', 'v1-release-meta', (asset.size / 1048576).toFixed(1) + ' MB'));
              // Domestic goes first when configured. No link is fabricated while pending.
              const domesticUrl = safeDomesticUrl(asset.domestic_download_url);
              if (domesticUrl) {
                const domestic = makeText('a', 'v1-download-primary', '国内直链下载 ↗');
                domestic.href = domesticUrl;
                domestic.target = '_blank'; domestic.rel = 'noopener noreferrer';
                row.append(domestic);
              } else {
                row.append(makeText('span', 'v1-download-domestic', '国内下载 · 待接入'));
              }
              if (asset.browser_download_url && asset.browser_download_url.startsWith('https://github.com/')) {
                const downloadUrl = safeGitHubUrl(asset.browser_download_url);
                const link = makeText('a', '', 'GitHub 安装包直链下载 ↗');
                link.href = downloadUrl;
                link.target = '_blank'; link.rel = 'noopener noreferrer';
                const retry = makeText('a', 'v1-download-retry', '如果下载没有开始，点击这里重新下载 ↗');
                retry.href = downloadUrl;
                retry.target = '_blank'; retry.rel = 'noopener noreferrer';
                retry.hidden = true;
                link.addEventListener('click', () => { retry.hidden = false; });
                row.append(link, retry);
              }
              if (typeof asset.digest === 'string' && /^sha256:[a-f0-9]{64}$/i.test(asset.digest)) {
                const sha = asset.digest.slice(7);
                const btn = makeText('button', 'v1-outline-link', '复制 SHA-256');
                btn.type = 'button'; btn.style.marginTop = '0'; btn.style.minHeight = '32px';
                btn.addEventListener('click', async () => {
                  try { await navigator.clipboard.writeText(sha); showToast('校验值已复制。'); }
                  catch (_) { showToast('无法复制，请前往发行页查看校验值。'); }
                });
                row.append(btn);
              }
              assetList.append(row);
            }
            info.append(assetList);
          } else info.append(makeText('p', 'v1-release-meta', '此版本没有列出可直接下载的附件。'));
          card.append(info);
          const changes = makeText('a', 'v1-release-link', '查看更新说明 ↗');
          changes.href = safeGitHubUrl(release.html_url);
          changes.target = '_blank'; changes.rel = 'noopener noreferrer';
          card.append(changes);
          return card;
        };
        // Render verified links synchronously before making any network request.
        const pinned = getCuratedReleaseIndex();
        latest.replaceChildren(...pinned.map(makeRelease));
        older.replaceChildren();
        if (pinned.length) {
          currentStatus.textContent = '以下为项目已确认的安装包直链；国内镜像接入后将优先展示。';
        } else {
          currentStatus.textContent = '正在从 GitHub Releases 读取已公开的发行信息…';
        }
        const controller = typeof AbortController === 'function' ? new AbortController() : null;
        let deadline;
        try {
          if (controller) deadline = setTimeout(() => controller.abort(), 7000);
          const response = await fetch('https://api.github.com/repos/Nya-Angle/CDUT-Studio/releases?per_page=8', {
            headers: { Accept: 'application/vnd.github+json' },
            ...(controller ? { signal: controller.signal } : {})
          });
          if (!response.ok) throw new Error('HTTP ' + response.status);
          const data = await response.json();
          if (!Array.isArray(data)) throw new Error('Invalid GitHub Releases response');
          const pinnedTags = new Set(pinned.map(item => item.tag_name));
          const extras = data.filter(item => !pinnedTags.has(item.tag_name));
          if (!pinned.length && data.length) {
            latest.replaceChildren(makeRelease(data[0]));
            currentStatus.textContent = '以下信息从项目 GitHub Releases 读取。';
            extras.shift(); // The first API entry is already presented above.
          } else if (!pinned.length) {
            currentStatus.textContent = '暂时没有可展示的发行版本，请前往 GitHub Releases 查看。';
          }
          if (extras.length) {
            older.replaceChildren(...extras.slice(0, 5).map(makeRelease));
            olderStatus.textContent = '以下是 GitHub 上的其他公开版本，具体附件以对应发行说明为准。';
          } else {
            olderStatus.textContent = '目前没有更多公开版本。';
          }
        } catch (_) {
          releasesRequested = false; // Failed request can be repeated by the visitor.
          if (retryButton) retryButton.hidden = false;
          if (pinned.length) {
            currentStatus.textContent = '已保留可直接下载的安装包；其他版本信息暂时无法更新。';
          } else {
            currentStatus.textContent = '暂时无法获取版本信息，请通过 GitHub Releases 查看。';
          }
          olderStatus.textContent = '其他版本暂时无法读取，可以重试或访问 GitHub Releases。';
        } finally { if (deadline) clearTimeout(deadline); }
      }

      $('#releaseRetryButton')?.addEventListener('click', () => { void loadReleaseIndex(); });

      let currentRoute = 'home';
      // In-memory scroll positions are deliberately independent of the route transition.
      const routeScrollPositions = new Map([['home', 0], ['download', 0], ['docs', 0], ['404', 0]]);
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      function rememberRouteScroll(route = currentRoute) {
        routeScrollPositions.set(route, Math.max(0, window.scrollY || 0));
      }
      function restoreRouteScroll(route) {
        const top = routeScrollPositions.get(route) || 0;
        const maxScroll = Math.max(0, document.documentElement.scrollHeight - innerHeight);
        window.scrollTo({ top: Math.min(top, maxScroll), left: 0, behavior: 'instant' });
        // On initial hash load the Hero setup below has not run yet.
        requestAnimationFrame(() => requestWhiteRise());
      }
      let lowMotionFrameRendered = false;
      let routeSequence = 0;
      let pendingRoute = null;
      let routeAnimations = [];

      function routeFromLocation() {
        const match = /^#\/(home|download|docs|404)(?:\/|$)/.exec(location.hash);
        return match ? match[1] : 'home';
      }
      function finishAnimations() {
        const active = routeAnimations;
        routeAnimations = [];
        for (const a of active) {
          try { a.cancel(); } catch (_) { /* Animation no longer attached. */ }
        }
        $$('.page-view').forEach(el => {
          el.removeAttribute('data-route-transition');
          el.style.removeProperty('transform');
          el.style.removeProperty('filter');
          el.style.removeProperty('opacity');
        });
      }
      function closeMobileNav(restoreFocus = false) {
        const drawer = $('#mobileDrawer');
        const mobileBtn = $('#mobileMenuBtn');
        drawer?.classList.remove('open');
        document.body.classList.remove('mobile-menu-open');
        const backdrop = $('#mobileDrawerBackdrop');
        if (backdrop) backdrop.hidden = true;
        if (mobileBtn) {
          mobileBtn.setAttribute('aria-expanded', 'false');
          mobileBtn.setAttribute('aria-label', '打开菜单');
          if (restoreFocus) mobileBtn.focus();
        }
      }
      function commitRoute(target, updateAddress) {
        currentRoute = target;
        pendingRoute = null;
        $$('.page-view').forEach(sec => {
          const selected = sec.id === `view-${target}`;
          sec.classList.toggle('active', selected);
          if (selected) sec.removeAttribute('aria-hidden');
          else sec.setAttribute('aria-hidden', 'true');
        });
        $$('.nav-btn').forEach(btn => {
          if (btn.dataset.route === target) btn.setAttribute('aria-current','page');
          else btn.removeAttribute('aria-current');
        });
        if (updateAddress) {
          try { history.pushState({ route: target }, '', `#/${target}`); }
          catch (_) { /* Allows opening this HTML directly or in restricted preview. */ }
        }
        // Restore in the same DOM/layout turn to prevent a visible jump to the top.
        restoreRouteScroll(target);
        const heading = document.querySelector('#view-' + target + ' h1');
        if (heading) {
          heading.tabIndex = -1;
          heading.focus({ preventScroll: true });
        }
        if (target === 'download') void loadReleaseIndex();
        // Article deep links need a second layout pass after view activation.
        if (target === 'docs' && /^#\/docs\//.test(location.hash)) {
          requestAnimationFrame(() => docsScrollToHash('auto'));
        }
      }
      /** Antigravity Study 03: opacity + blur + scale; horizontal direction adds spatial continuity.
       *  With fast repeated clicks, previous animations are cancelled and only the latest token may commit.
       *  The page is always restored, even when WAAPI fails, motion is reduced, or navigation is interrupted.
       */
      async function navigateTo(route, options = {}) {
        const target = routes.includes(route) ? route : '404';
        if (options.updateAddress === false && pendingRoute === target) return;
        const seq = ++routeSequence;
        pendingRoute = target;
        const previousRoute = currentRoute;
        if (previousRoute !== target) rememberRouteScroll(previousRoute);
        const animate = options.animate !== false && !reducedMotion && typeof Element.prototype.animate === 'function';
        const updateAddress = options.updateAddress !== false;
        closeMobileNav();
        finishAnimations();
        if (previousRoute === target) {
          pendingRoute = null;
          if (updateAddress && location.hash !== `#/${target}`) {
            try { history.pushState({ route: target }, '', `#/${target}`); } catch (_) {}
          }
          // R06: Re-clicking the active page must not discard its scroll position.
          if (document.activeElement && document.activeElement.closest('.mobile-drawer')) {
            const h = document.querySelector('#view-' + target + ' h1');
            if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
          }
          return;
        }
        const previous = document.getElementById(`view-${previousRoute}`);
        const incoming = document.getElementById(`view-${target}`);
        if (!incoming) return;
        if (!animate || !previous) {
          commitRoute(target, updateAddress);
          return;
        }
        const direction = (routes.indexOf(target) >= routes.indexOf(previousRoute)) ? 1 : -1;
        const xOut = -direction * Math.min(28, Math.max(12, innerWidth * .015));
        const xIn = direction * Math.min(30, Math.max(14, innerWidth * .018));
        let outgoing = null;
        try {
          previous.setAttribute('data-route-transition','true');
          outgoing = previous.animate([
            { opacity: 1, transform: 'translate3d(0,0,0) scale(1)' },
            { opacity: 0.4, transform: `translate3d(${xOut}px,0,0) scale(.992)` }
          ], { duration: 125, easing: 'ease-in', fill: 'forwards' });
          routeAnimations.push(outgoing);
          await outgoing.finished;
          if (seq !== routeSequence) return;
        } catch (_) {
          if (seq !== routeSequence) return;
          // A cancelled/failed animation still leads to a deterministic route commit.
        } finally {
          if (seq === routeSequence) {
            try { outgoing?.cancel(); } catch (_) {}
            previous.removeAttribute('data-route-transition');
          }
        }
        if (seq !== routeSequence) return;
        commitRoute(target, updateAddress);
        // Avoid leaking a hidden page animation on every frame while switching.
        const newView = document.getElementById(`view-${target}`);
        try {
          newView.setAttribute('data-route-transition','true');
          const incomingAnimation = newView.animate([
            { opacity: 0.35, transform: `translate3d(${xIn}px,0,0) scale(.992)` },
            { opacity: 1, transform: 'translate3d(0,0,0) scale(1)' }
          ], { duration: 210, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' });
          routeAnimations.push(incomingAnimation);
          await incomingAnimation.finished;
        } catch (_) {
          // Prefer showing complete page rather than leaving blurred or hidden content.
        } finally {
          if (seq === routeSequence) {
            finishAnimations();
          }
        }
      }
      window.addEventListener('popstate', () => {
        void navigateTo(routeFromLocation(), { updateAddress: false });
      });
      window.addEventListener('hashchange', () => {
        const target = routeFromLocation();
        if (target !== currentRoute && target !== pendingRoute) void navigateTo(target, { updateAddress: false });
      });
      if (location.hash) { void navigateTo(routeFromLocation(), { animate: false, updateAddress: false }); }

      $$('[data-route]').forEach(btn => {
        btn.addEventListener('click', () => {
          const r = btn.dataset.route;
          navigateTo(r);
        });
      });

      $('#brandHomeLink').addEventListener('click', e => {
        e.preventDefault();
        navigateTo('home');
      });

      $('#heroDownloadBtn').addEventListener('click', () => {
        navigateTo('download');
      });
      const bridgeDownloadBtn = $('#bridgeDownloadBtn');
      if (bridgeDownloadBtn) {
        bridgeDownloadBtn.addEventListener('click', () => navigateTo('download'));
      }

      $$('[data-doc-topic]').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          navigateTo('docs');
          const topic = link.dataset.docTopic;
          const searchInput = $('#docsSearchInput');
          if (searchInput) {
            searchInput.value = topic === 'install' ? '安装' : topic === 'faq' ? '常见问题' : '安装';
            searchInput.dispatchEvent(new Event('input'));
          }
        });
      });

      // Mobile menu toggle (打开菜单 / 关闭菜单)
      const mobileMenuBtn = $('#mobileMenuBtn');
      const mobileDrawer = $('#mobileDrawer');
      mobileMenuBtn.addEventListener('click', () => {
        const open = !mobileDrawer.classList.contains('open');
        if (!open) { closeMobileNav(true); return; }
        mobileDrawer.classList.add('open');
        document.body.classList.add('mobile-menu-open');
        $('#mobileDrawerBackdrop').hidden = false;
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        mobileMenuBtn.setAttribute('aria-label', '关闭菜单');
        mobileDrawer.querySelector('.nav-btn')?.focus();
      });
      $('#mobileDrawerBackdrop')?.addEventListener('click', () => closeMobileNav(true));
      document.addEventListener('keydown', (event) => {
        if (!mobileDrawer.classList.contains('open')) return;
        if (event.key === 'Escape') {
          event.preventDefault();
          closeMobileNav(true);
        } else if (event.key === 'Tab') {
          const focusables = $$('button:not([disabled]), a[href]', mobileDrawer);
          const first = focusables[0], last = focusables[focusables.length - 1];
          if (!first || !last) return;
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }
      });
      window.addEventListener('resize', () => {
        if (innerWidth > 680 && mobileDrawer.classList.contains('open')) closeMobileNav();
      }, { passive: true });

      /* A single Day/Night switch, using the exact user-provided SVG control.
         Default to light; a manual choice is remembered on this device. */
      const themeToggleBtn = $('#themeToggle');
      function applyDarkMode(isDark) {
        document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
        lowMotionFrameRendered = false;
        document.body.dataset.darkMode = String(isDark);
        themeToggleBtn.setAttribute('aria-pressed', String(isDark));
        themeToggleBtn.setAttribute('aria-label', isDark ? '切换为浅色模式' : '切换为深色模式');
        try { localStorage.setItem('cdut-studio-theme', isDark ? 'dark' : 'light'); } catch (_) {}
      }
      // First visit follows OS preference. Explicit clicks keep R05's single visual switch.
      // A complete three-way preference UI is still a separate design task.
      let savedMode = '';
      try { savedMode = localStorage.getItem('cdut-studio-theme') || ''; } catch (_) {}
      const systemDark = window.matchMedia?.('(prefers-color-scheme: dark)');
      applyDarkMode(savedMode === 'dark' || (!savedMode && !!systemDark?.matches));
      if (!savedMode) {
        try { localStorage.removeItem('cdut-studio-theme'); } catch (_) {}
      }
      const applySystemTheme = () => {
        let explicit = '';
        try { explicit = localStorage.getItem('cdut-studio-theme') || ''; } catch (_) {}
        if (!explicit) {
          applyDarkMode(!!systemDark?.matches);
          try { localStorage.removeItem('cdut-studio-theme'); } catch (_) {}
        }
      };
      systemDark?.addEventListener?.('change', applySystemTheme);
      themeToggleBtn.addEventListener('click', () => {
        applyDarkMode(themeToggleBtn.getAttribute('aria-pressed') !== 'true');
      });

      /* ======================================================================
         D. Hero Entrance Timeline (from antigravity-reveal-lab Study 02)
            - Subtitle types out character by character
            - Synchronized "<": Logo (y: 1em -> 0, 2s), Button (y: 50px -> 0, 2s),
              and ASCII Dragon Canvas (opacity: 0 -> 1, 4s) with power2.out
         ====================================================================== */
      const heroLogo = $('#heroLogo');
      const heroTyped = $('#heroTyped');
      const heroCaret = $('#heroCaret');
      const heroDownloadBtn = $('#heroDownloadBtn');
      const heroCanvas = $('#hero-ascii-canvas');
      const HERO_SUBTITLE_TEXT = '让 AI 走进你的桌面，也走进成理日常。';
      const HERO_LOGO_DURATION = 2.0;
      const HERO_PARTICLE_DURATION = 4.0;
      const HERO_BTN_Y = 50;

      let heroTime = 0;
      let heroRunning = true;

      function getHeroTypeDuration() {
        return [...HERO_SUBTITLE_TEXT].length * 0.045 + 0.15;
      }
      function getHeroMaxTime() {
        return getHeroTypeDuration() + Math.max(HERO_LOGO_DURATION, HERO_PARTICLE_DURATION);
      }

      function applyHeroTimeline() {
        const tx = getHeroTypeDuration();
        const chars = [...HERO_SUBTITLE_TEXT];
        const count = clamp(Math.floor(heroTime / 0.045), 0, chars.length);
        heroTyped.textContent = chars.slice(0, count).join('');
        heroCaret.style.opacity = heroTime < tx + 0.6 ? '1' : '0';

        // Synchronized start ("<") for Logo, CTA Button, and ASCII Canvas background
        // We also allow the canvas to begin softly appearing from t=0 so the center dragon is immediately perceived, reaching full 1.0 over 4s
        const p = easeOutQuad(clamp((heroTime - tx * 0.35) / HERO_LOGO_DURATION, 0, 1));
        const q = easeOutQuad(clamp(heroTime / HERO_PARTICLE_DURATION, 0, 1));

        heroLogo.style.opacity = String(p);
        heroLogo.style.transform = `translate3d(0, ${(1 - p).toFixed(3)}em, 0)`;

        heroDownloadBtn.style.opacity = String(p);
        heroDownloadBtn.style.transform = `translate3d(0, ${((1 - p) * HERO_BTN_Y).toFixed(1)}px, 0)`;

        heroCanvas.style.opacity = String(Math.max(0.18, q));
      }

      function replayHeroTimeline() {
        if (reducedMotion) {
          heroTime = getHeroMaxTime();
          heroRunning = false;
          applyHeroTimeline();
          return;
        }
        heroTime = 0;
        heroRunning = true;
        applyHeroTimeline();
      }

      replayHeroTimeline();

      /* ======================================================================
         E. Center Dragon Rig (龙龙摆头.html)
            + ASCII-Moon Rendering Engine (ascii-moon-readable.js)
            + Codex-ASCII Mouse Fluid & Ripple Interaction (renderer.original.js)
         ====================================================================== */
      // 1. Dragon Skeletal Rig from 龙龙摆头.html
      const sourceD = "M60.79 48.916\nC60.42 48.794 59.869 49.084 59.571 49.251\nC55.61 51.643 53.26 55.61 51.508 59.795\nC50.528 62.803 50.263 65.644 50.805 68.7\nC51.11 70.42 51.69 71.48 52.351 72.561\nC53.03 73.67 53.55 74.73 53.923 76.347\nC54.092 76.815 54.23 77.297 54.282 77.789\nC54.356 78.496 54.283 79.205 54.256 79.911\nL54.251 80.34\nC55.28 80.42 56.26 80.52 57.15 80.67\nC57.216 80.047 57.174 79.037 57.066 78.652\nC56.986 78.365 56.909 78.144 56.77 77.909\nC56.51 77.48 55.85 76.82 54.65 75.64\nC55.02 75.73 56.22 76.79 56.68 77.25\nC57.68 78.23 57.65 79.28 57.58 80.74\nC58.464 80.882 59.341 81.055 60.211 81.262\nC60.278 80.523 60.211 79.063 60.355 78.397\nC60.415 78.121 60.484 77.866 60.604 77.608\nC60.92 76.96 61.35 76.43 61.754 76.786\nC62.438 77.362 62.498 79.232 62.346 80.227\nC62.31 80.42 62.23 80.61 62.36 80.79\nC62.47 80.95 62.59 80.99 62.774 80.978\nC63.38 80.99 64.57 81.07 64.873 80.901\nC65.013 80.786 64.94 80.433 64.908 80.267\nC64.68 79.14 63.42 77.63 61.936 76.635\nC63.08 77.10 64.74 78.81 65.19 80.03\nC65.4 80.56 65.43 81.15 65.6 81.42\nC65.714 81.599 65.97 81.584 66.184 81.577\nC66.923 81.359 67.669 81.164 68.419 80.994\nC68.32 80.5 67.99 80.04 67.771 79.36\nC67.65 78.98 67.51 78.49 67.75 78.31\nC67.91 78.19 68.13 78.44 68.624 78.749\nC70.21 79.79 71.56 80.22 73.21 80.304\nC74.29 80.35 74.67 80.32 75.249 80.146\nC79.162 79.352 81.451 75.839 77.764 72.706\nC78.15 73.2 78.39 73.68 78.51 74.22\nC78.9 75.7 78.53 76.75 77.51 77.511\nC76.3 78.28 74.53 78.14 73.087 77.754\nC72.17 77.51 71.6 76.99 71.266 76.397\nC69.77 74.26 68.65 72.17 67.168 70.589\nC65.53 68.86 63.6 68.03 61.041 68.018\nC59.83 68.03 58.39 68.18 57.346 68.305\nC54.977 68.584 54.288 67.78 53.703 65.651\nC53.338 63.354 53.37 61.641 53.946 59.339\nC54.43 57.43 55.12 56.09 56.09 54.75\nC57.06 53.41 58.08 52.33 59.169 51.66\nC60.17 51.1 61.3 50.9 62.693 50.426\nC62.91 50.35 63.03 50.23 63.061 50.074\nC63.13 49.8 63.03 49.48 62.784 49.241\nC62.317 48.891 61.381 49.106 60.79 48.916Z";

      const svgNS = 'http://www.w3.org/2000/svg';
      const boneSvg = $('#hero-bone-svg');
      const bonesGroup = $('#hero-bones');
      const hiddenSourcePath = document.createElementNS(svgNS, 'path');
      hiddenSourcePath.setAttribute('d', sourceD);
      hiddenSourcePath.style.display = 'none';
      boneSvg.appendChild(hiddenSourcePath);

      const rot2D = (x, y, a) => ({
        x: x * Math.cos(a) - y * Math.sin(a),
        y: x * Math.sin(a) + y * Math.cos(a)
      });

      const keyframes = {
        left: [0, 0, -0.18, -0.60, -1.25, -2.00, -2.65],
        center: [0, 0, 0, 0, 0, 0, 0],
        right: [0, 0, 0.07, 0.17, 0.30, 0.44, 0.55]
      };
      const anchors = [
        { x: 53.8, y: 68.3 },
        { x: 52.4, y: 65.5 },
        { x: 52.1, y: 62.5 },
        { x: 52.8, y: 59.5 },
        { x: 54.0, y: 56.5 },
        { x: 55.9, y: 53.8 },
        { x: 58.4, y: 51.5 }
      ];

      const rest = [];
      for (let j = 0; j < anchors.length - 1; j++) {
        const a = anchors[j], b = anchors[j + 1];
        const prev = anchors[Math.max(0, j - 1)];
        const next = anchors[Math.min(anchors.length - 1, j + 2)];
        const ta = { x: (b.x - prev.x) / (j ? 2 : 1), y: (b.y - prev.y) / (j ? 2 : 1) };
        const tb = { x: (next.x - a.x) / (j === anchors.length - 2 ? 1 : 2), y: (next.y - a.y) / (j === anchors.length - 2 ? 1 : 2) };
        for (let k = 0; k < 24; k++) {
          const t = k / 24;
          const h00 = 2 * t * t * t - 3 * t * t + 1;
          const h10 = t * t * t - 2 * t * t + t;
          const h01 = -2 * t * t * t + 3 * t * t;
          const h11 = t * t * t - t * t;
          rest.push({
            x: h00 * a.x + h10 * ta.x + h01 * b.x + h11 * tb.x,
            y: h00 * a.y + h10 * ta.y + h01 * b.y + h11 * tb.y,
            u: j + t
          });
        }
      }
      rest.push({ ...anchors[anchors.length - 1], u: 6 });

      const vertices = [];
      const totalLen = hiddenSourcePath.getTotalLength();
      const VERTEX_SAMPLES = 720;
      for (let i = 0; i < VERTEX_SAMPLES; i++) {
        const p = hiddenSourcePath.getPointAtLength((totalLen * i) / VERTEX_SAMPLES);
        let best = { dist: Infinity, j: 0, t: 0 };
        for (let j = 0; j < rest.length - 1; j++) {
          const a = rest[j], b = rest[j + 1];
          const dx = b.x - a.x, dy = b.y - a.y;
          const t = clamp(((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy), 0, 1);
          const dist = (p.x - a.x - dx * t) ** 2 + (p.y - a.y - dy * t) ** 2;
          if (dist < best.dist) best = { dist, j, t };
        }
        vertices.push({ x: p.x, y: p.y, ...best, fixed: p.y >= 65.5, head: p.y <= 52 });
      }

      function angleAt(u, key) {
        u = u <= 1 ? u : Math.min(6, 1 + ((u - 1) * 5) / 4.4);
        const j = Math.min(5, Math.floor(u));
        const t = smooth(u - j);
        return key[j] * (1 - t) + key[j + 1] * t;
      }

      function skeletalPose(val) {
        val = clamp(val, -1, 1);
        const key = val < 0 ? keyframes.left : keyframes.right;
        const weight = smooth(Math.abs(val));
        const angles = rest.map(p => angleAt(p.u, key) * weight);
        const current = [{ ...rest[0] }];
        for (let j = 1; j < rest.length; j++) {
          const v = rot2D(rest[j].x - rest[j - 1].x, rest[j].y - rest[j - 1].y, (angles[j - 1] + angles[j]) / 2);
          current.push({ x: current[j - 1].x + v.x, y: current[j - 1].y + v.y });
        }
        const end = rest.length - 1;
        const points = vertices.map(p => {
          if (p.fixed) return { x: p.x, y: p.y };
          const j = p.head ? end : p.j;
          const t = p.head ? 0 : p.t;
          const bind = p.head ? rest[end] : { x: rest[j].x * (1 - t) + rest[j + 1].x * t, y: rest[j].y * (1 - t) + rest[j + 1].y * t };
          const destination = p.head ? current[end] : { x: current[j].x * (1 - t) + current[j + 1].x * t, y: current[j].y * (1 - t) + current[j + 1].y * t };
          const angle = p.head ? angles[end] : angles[j] * (1 - t) + angles[j + 1] * t;
          const offset = rot2D(p.x - bind.x, p.y - bind.y, angle);
          return { x: destination.x + offset.x, y: destination.y + offset.y };
        });
        return { points, current, angles };
      }

      const dragonBounds = {
        minX: Math.min(...vertices.map(p => p.x)),
        maxX: Math.max(...vertices.map(p => p.x)),
        minY: Math.min(...vertices.map(p => p.y)),
        maxY: Math.max(...vertices.map(p => p.y))
      };
      const minY = dragonBounds.minY;
      const rootY = 65.5, axisX = 52.1, profileRows = 600, profile = [];
      for (let k = 0; k <= profileRows; k++) {
        const y = minY + Math.max(0.00001, (k / profileRows) * (rootY - minY));
        const xs = [];
        for (let j = 0; j < vertices.length; j++) {
          const a = vertices[j], b = vertices[(j + 1) % vertices.length];
          if ((a.y <= y && b.y > y) || (b.y <= y && a.y > y)) {
            xs.push(a.x + ((b.x - a.x) * (y - a.y)) / (b.y - a.y));
          }
        }
        profile.push(xs.length ? (Math.min(...xs) + Math.max(...xs)) / 2 : (profile[profile.length - 1] || 60.79));
      }

      function centerAt(y) {
        const k = clamp(((y - minY) / (rootY - minY)) * profileRows, 0, profileRows);
        const i = Math.min(profileRows - 1, Math.floor(k));
        const t = k - i;
        return profile[i] * (1 - t) + profile[i + 1] * t;
      }

      function leftPoint(p, t) {
        if (p.y >= rootY) return { x: p.x, y: p.y };
        const w = smooth(clamp((rootY - p.y) / 6, 0, 1));
        const center = centerAt(p.y);
        const front = Math.sin(Math.PI * t) ** 2;
        const head = smooth(clamp((54 - p.y) / 2.5, 0, 1));
        const width = 1 - 0.48 * front * head;
        return {
          x: p.x - 2 * t * (center - axisX) * w + (p.x - center) * (width - 1),
          y: p.y + 0.62 * front * w
        };
      }

      function computeDragonPose(val) {
        if (val >= 0) return skeletalPose(val);
        const t = smooth(clamp(-val, 0, 1));
        return {
          points: vertices.map(p => leftPoint(p, t)),
          current: rest.map(p => leftPoint(p, t)),
          angles: rest.map(() => 0)
        };
      }

      // Bone debug overlay elements
      const bonePath = document.createElementNS(svgNS, 'path');
      bonePath.setAttribute('fill', 'none');
      bonePath.setAttribute('stroke', '#e5734d');
      bonePath.setAttribute('stroke-width', '0.18');
      bonesGroup.appendChild(bonePath);
      const boneDots = [];
      for (let j = 0; j < 7; j++) {
        const c = document.createElementNS(svgNS, 'circle');
        c.setAttribute('r', '0.28');
        c.setAttribute('fill', '#2eb88a');
        bonesGroup.appendChild(c);
        boneDots.push(c);
      }

      // 2. ASCII-Moon Character Ramps & Value Noise (from ascii-moon-readable.js)
      const MOON_CHARS = " `.-':_,^=;><+!rc*/z?sLTv)J7(|Fi{C}fI31tlu[neoZ5Yxjya]2ESwqkP6h9d4VpOGbUAKXHm8RD#$Bg0MNWQ%&@";
      const CODEX_SPACE_CHARS = "  ..::--==++○>_*#@".split("");

      const hash2D = (x, y) => {
        const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
        return n - Math.floor(n);
      };

      const valueNoise2D = (x, y) => {
        const ix = Math.floor(x), iy = Math.floor(y);
        const fx = x - ix, fy = y - iy;
        const a = hash2D(ix, iy), b = hash2D(ix + 1, iy);
        const c = hash2D(ix, iy + 1), d = hash2D(ix + 1, iy + 1);
        const sx = smooth(fx), sy = smooth(fy);
        return a * (1 - sx) * (1 - sy) + b * sx * (1 - sy)
             + c * (1 - sx) * sy + d * sx * sy;
      };

      // 3. Codex-ASCII 2D Fluid & Click Ripple Solver (from codex-ascii-source/renderer.original.js)
      let fluid = null;
      const splashes = [];

      function createFluidGrid(w, h) {
        const size = w * h;
        return {
          width: w,
          height: h,
          size,
          density: new Float32Array(size),
          density0: new Float32Array(size),
          velX: new Float32Array(size),
          velY: new Float32Array(size),
          velX0: new Float32Array(size),
          velY0: new Float32Array(size),
          pressure: new Float32Array(size),
          divergence: new Float32Array(size)
        };
      }

      const idx = (x, y, w) => x + y * w;

      function sampleBilinear(field, x, y, w, h) {
        const ax = clamp(x, 0, w - 1), ay = clamp(y, 0, h - 1);
        const x0 = Math.floor(ax), y0 = Math.floor(ay);
        const x1 = Math.min(w - 1, x0 + 1), y1 = Math.min(h - 1, y0 + 1);
        const tx = ax - x0, ty = ay - y0;
        const p00 = field[idx(x0, y0, w)], p10 = field[idx(x1, y0, w)];
        const p01 = field[idx(x0, y1, w)], p11 = field[idx(x1, y1, w)];
        const top = p00 + (p10 - p00) * tx;
        const bot = p01 + (p11 - p01) * tx;
        return top + (bot - top) * ty;
      }

      function advectField(out, src, vx, vy, dt, w, h) {
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const i = idx(x, y, w);
            out[i] = sampleBilinear(src, x - vx[i] * dt, y - vy[i] * dt, w, h);
          }
        }
      }

      function diffuseField(out, src, diff, iters, w, h) {
        out.set(src);
        const a = 1 / (1 + 4 * diff);
        for (let k = 0; k < iters; k++) {
          for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
              const i = idx(x, y, w);
              const l = out[idx(Math.max(0, x - 1), y, w)];
              const r = out[idx(Math.min(w - 1, x + 1), y, w)];
              const t = out[idx(x, Math.max(0, y - 1), w)];
              const b = out[idx(x, Math.min(h - 1, y + 1), w)];
              out[i] = (src[i] + diff * (l + r + t + b)) * a;
            }
          }
        }
      }

      function projectFluid(vx, vy, p, div, iters, w, h) {
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const i = idx(x, y, w);
            const l = vx[idx(Math.max(0, x - 1), y, w)];
            const r = vx[idx(Math.min(w - 1, x + 1), y, w)];
            const t = vy[idx(x, Math.max(0, y - 1), w)];
            const b = vy[idx(x, Math.min(h - 1, y + 1), w)];
            div[i] = -0.5 * (r - l + b - t);
            p[i] = 0;
          }
        }
        for (let k = 0; k < iters; k++) {
          for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
              const i = idx(x, y, w);
              const l = p[idx(Math.max(0, x - 1), y, w)];
              const r = p[idx(Math.min(w - 1, x + 1), y, w)];
              const t = p[idx(x, Math.max(0, y - 1), w)];
              const b = p[idx(x, Math.min(h - 1, y + 1), w)];
              p[i] = (div[i] + l + r + t + b) / 4;
            }
          }
        }
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const i = idx(x, y, w);
            const l = p[idx(Math.max(0, x - 1), y, w)];
            const r = p[idx(Math.min(w - 1, x + 1), y, w)];
            const t = p[idx(x, Math.max(0, y - 1), w)];
            const b = p[idx(x, Math.min(h - 1, y + 1), w)];
            vx[i] -= 0.5 * (r - l);
            vy[i] -= 0.5 * (b - t);
          }
        }
      }

      function stepCodexFluid(f, dt) {
        if (!f || dt <= 0) return;
        const stepDt = Math.min(dt, 0.06);
        const { velX, velY, velX0, velY0, density, density0, pressure, divergence, width, height, size } = f;
        velX0.set(velX);
        velY0.set(velY);
        diffuseField(velX, velX0, 0.35, 3, width, height);
        diffuseField(velY, velY0, 0.35, 3, width, height);
        projectFluid(velX, velY, pressure, divergence, 5, width, height);
        velX0.set(velX);
        velY0.set(velY);
        advectField(velX, velX0, velX0, velY0, stepDt, width, height);
        advectField(velY, velY0, velX0, velY0, stepDt, width, height);
        projectFluid(velX, velY, pressure, divergence, 5, width, height);
        density0.set(density);
        advectField(density, density0, velX, velY, stepDt, width, height);
        const vDecay = Math.exp(-1.4 * stepDt);
        const dDecay = Math.exp(-1.6 * stepDt);
        for (let i = 0; i < size; i++) {
          velX[i] *= vDecay;
          velY[i] *= vDecay;
          density[i] *= dDecay;
        }
      }

      function injectPointerBrush(f, gx, gy, vx, vy, strength, radiusCells) {
        if (!f || radiusCells <= 0) return;
        const { width, height, velX, velY, density } = f;
        const rSq = radiusCells * radiusCells;
        const xMin = Math.max(0, Math.floor(gx - radiusCells));
        const xMax = Math.min(width - 1, Math.ceil(gx + radiusCells));
        const yMin = Math.max(0, Math.floor(gy - radiusCells));
        const yMax = Math.min(height - 1, Math.ceil(gy + radiusCells));
        for (let y = yMin; y <= yMax; y++) {
          const dy = y - gy;
          for (let x = xMin; x <= xMax; x++) {
            const dx = x - gx;
            const dSq = dx * dx + dy * dy;
            if (dSq > rSq) continue;
            const weight = smooth(1 - Math.sqrt(dSq) / radiusCells);
            const i = idx(x, y, width);
            velX[i] += vx * weight;
            velY[i] += vy * weight;
            density[i] = clamp(density[i] + strength * weight, 0, 1.35);
          }
        }
      }

      // Codex-ASCII click splash petal wave (w() from renderer.original.js)
      function applyCodexSplashes(f, nowMs, drawW, drawH) {
        if (!f || !splashes.length || !drawW || !drawH) return;
        const cellW = drawW / Math.max(1, f.width - 1);
        const cellH = drawH / Math.max(1, f.height - 1);
        const speedPxPerSec = 420;
        const active = [];
        for (const sp of splashes) {
          const elapsed = nowMs - sp.start;
          if (elapsed < 0) { active.push(sp); continue; }
          const duration = (sp.maxRadiusPx / speedPxPerSec) * 1000;
          if (elapsed > duration) continue;
          const progress = clamp(elapsed / duration, 0, 1);
          const eased = 1 - Math.pow(1 - progress, 2.5);
          const radiusPx = eased * sp.maxRadiusPx;
          const fade = Math.max(0, 1 - progress);
          const force = 18 * Math.pow(fade, 1.2);
          const dens = 0.28 * Math.pow(fade, 2.0);
          const cx = sp.normX * (f.width - 1);
          const cy = sp.normY * (f.height - 1);
          const maxR = radiusPx + sp.thicknessPx;
          const rx = Math.ceil(maxR / cellW);
          const ry = Math.ceil(maxR / cellH);
          const x0 = Math.max(0, Math.floor(cx - rx)), x1 = Math.min(f.width - 1, Math.ceil(cx + rx));
          const y0 = Math.max(0, Math.floor(cy - ry)), y1 = Math.min(f.height - 1, Math.ceil(cy + ry));
          for (let y = y0; y <= y1; y++) {
            const dyPx = (y - cy) * cellH;
            for (let x = x0; x <= x1; x++) {
              const dxPx = (x - cx) * cellW;
              const distPx = Math.hypot(dxPx, dyPx);
              const ang = Math.atan2(dyPx, dxPx);
              const petal = 0.5 * Math.sin(6 * ang + sp.seed) + 0.25 * Math.sin(3 * ang + 0.05 * distPx + 0.3 * sp.seed) + 0.5;
              const mod = clamp(1 + 0.14 * (2 * petal - 1) * (0.35 + 0.65 * eased), 0.6, 1.6);
              const ringDist = Math.abs(distPx - radiusPx * mod);
              if (ringDist > sp.thicknessPx) continue;
              const w = smooth(1 - ringDist / sp.thicknessPx);
              const i = idx(x, y, f.width);
              if (distPx > 0) {
                f.velX[i] += (dxPx / distPx) * force * w;
                f.velY[i] += (dyPx / distPx) * force * w;
              }
              f.density[i] = clamp(f.density[i] + dens * w, 0, 1.35);
            }
          }
          active.push(sp);
        }
        splashes.length = 0;
        splashes.push(...active);
      }

      // 4. Offscreen Dragon Mask & ASCII-Moon + Codex-ASCII Renderer Setup
      const asciiCtx = heroCanvas.getContext('2d');
      const maskCanvas = document.createElement('canvas');
      const maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });

      let stageW = 0, stageH = 0, asciiCols = 110, asciiRows = 60;
      let asciiPhase = 0;
      // Dragon gaze sensitivity. Keep shape, fluid, splash and return motion unchanged.
      // Lower speed and a capped angle make the dragon feel deliberate.
      const DRAGON_POINTER_RANGE = 0.55;
      const DRAGON_MAX_POSE = 0.7;
      const DRAGON_FOLLOW_RATE = 3.5;
      let wantedPose = 0, currentPose = 0, returningState = null;
      const mousePos = { x: -1000, y: -1000, prevX: null, prevY: null, prevTime: 0, inside: false };

      function resizeHeroStage() {
        const rect = $('#heroStage').getBoundingClientRect();
        stageW = Math.max(300, Math.floor(rect.width));
        stageH = Math.max(420, Math.floor(rect.height));
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        heroCanvas.width = Math.round(stageW * dpr);
        heroCanvas.height = Math.round(stageH * dpr);
        asciiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

        // Denser ASCII grid: smaller type, smoother silhouette, including on phones.
        asciiCols = stageW < 680 ? 118 : stageW < 1050 ? 166 : 208;
        const colStep = stageW / asciiCols;
        const rowStep = colStep * 1.12;
        asciiRows = Math.max(24, Math.ceil(stageH / rowStep));

        maskCanvas.width = asciiCols;
        maskCanvas.height = asciiRows;
        fluid = createFluidGrid(asciiCols, asciiRows);
      }

      window.addEventListener('resize', resizeHeroStage);
      resizeHeroStage();

      // Scale around the actual dragon silhouette rather than its oversized source
      // viewBox; use independent grid-axis factors to keep the ORIGINAL shape ratio.
      // Align the back near the wordmark baseline, like the dragon carries the title.
      function getSvgTransform(w, h) {
        const mobile = stageW < 680;
        const minX = dragonBounds.minX, maxX = dragonBounds.maxX, minY = dragonBounds.minY, maxY = dragonBounds.maxY;
        const dragonW = maxX - minX;
        const dragonH = maxY - minY;
        const xPerCell = stageW / w;
        const yPerCell = stageH / h;
        const targetW = stageW * (mobile ? 0.82 : 0.70);
        const targetH = stageH * (mobile ? 0.44 : 0.56);
        // Uniform 1.5x enlargement of R04: never scale x/y differently.
        const scalePx = 1.5 * Math.min(targetW / dragonW, targetH / dragonH);
        const centerX = stageW * 0.50;
        // Only the dragon's sampled silhouette moves; the ASCII backdrop stays where it is.
        const centerY = stageH * (mobile ? 0.39 : 0.41) + 16;
        return {
          scaleX: scalePx / xPerCell,
          scaleY: scalePx / yPerCell,
          offsetX: (centerX - (minX + dragonW / 2) * scalePx) / xPerCell,
          offsetY: (centerY - (minY + dragonH / 2) * scalePx) / yPerCell
        };
      }

      function rasterizeDragonMask(poseResult) {
        const w = asciiCols, h = asciiRows;
        maskCtx.clearRect(0, 0, w, h);
        const tf = getSvgTransform(w, h);

        // Fill silhouette in red channel + blurred inner volume in green channel for 3D normal/height reconstruction
        maskCtx.save();
        maskCtx.beginPath();
        poseResult.points.forEach((p, i) => {
          const x = p.x * tf.scaleX + tf.offsetX;
          const y = p.y * tf.scaleY + tf.offsetY;
          if (i === 0) maskCtx.moveTo(x, y);
          else maskCtx.lineTo(x, y);
        });
        maskCtx.closePath();
        maskCtx.fillStyle = 'rgb(255, 120, 0)';
        maskCtx.fill();

        // Draw spine ridge with thick stroke to give 3D anatomical volume inside the dragon
        maskCtx.beginPath();
        poseResult.current.forEach((p, i) => {
          const x = p.x * tf.scaleX + tf.offsetX;
          const y = p.y * tf.scaleY + tf.offsetY;
          if (i === 0) maskCtx.moveTo(x, y);
          else maskCtx.lineTo(x, y);
        });
        maskCtx.lineCap = 'round';
        maskCtx.lineJoin = 'round';
        maskCtx.lineWidth = Math.max(1.1, 1.65 * Math.min(tf.scaleX, tf.scaleY));
        maskCtx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
        maskCtx.stroke();
        maskCtx.restore();

        return maskCtx.getImageData(0, 0, w, h).data;
      }

      // Pointer & Pose Event Listeners (Combining 龙龙摆头 + codex-ascii + ASCII-Moon)
      function beginDragonReturn(nowMs) {
        if (returningState) return;
        returningState = { from: currentPose, start: nowMs + 160, duration: 2100 };
        wantedPose = 0;
      }

      const heroStageEl = $('#heroStage');
      // At scroll=0 progress is EXACTLY 0: pure mint hero, no white edge.
      // The lower showcase starts pure white; this overlay bridges that edge
      // and grows upward only after the user scrolls down.
      let riseFramePending = false;
      function syncWhiteRise() {
        riseFramePending = false;
        if (!heroStageEl || currentRoute !== 'home') return;
        const rect = heroStageEl.getBoundingClientRect();
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(1, scrolled / Math.max(rect.height * 0.64, 1));
        heroStageEl.style.setProperty('--white-rise-progress', progress.toFixed(5));
        // The title and white wave crest climb by the same physical distance.
        heroStageEl.style.setProperty('--hero-title-rise', (-rect.height * 1.2 * progress).toFixed(2) + 'px');
      }
      function requestWhiteRise() {
        if (riseFramePending) return;
        riseFramePending = true;
        requestAnimationFrame(syncWhiteRise);
      }
      window.addEventListener('scroll', requestWhiteRise, { passive: true });
      window.addEventListener('resize', requestWhiteRise, { passive: true });
      requestWhiteRise();


      heroStageEl.addEventListener('pointermove', e => {
        const rect = heroCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const now = performance.now();

        returningState = null;
        wantedPose = clamp((x - rect.width / 2) / (rect.width * DRAGON_POINTER_RANGE), -DRAGON_MAX_POSE, DRAGON_MAX_POSE);

        // Inject velocity & density into Codex-ASCII fluid grid
        if (fluid && mousePos.prevX !== null) {
          const dt = clamp((now - mousePos.prevTime) / 1000, 0.004, 0.05);
          const vx = ((x - mousePos.prevX) / dt) * (asciiCols / rect.width) * 0.42;
          const vy = ((y - mousePos.prevY) / dt) * (asciiRows / rect.height) * 0.42;
          const gx = (x / rect.width) * (asciiCols - 1);
          const gy = (y / rect.height) * (asciiRows - 1);
          const radiusCells = Math.max(2.2, (32 / rect.width) * asciiCols);
          injectPointerBrush(fluid, gx, gy, vx, vy, 0.65, radiusCells);
        }

        mousePos.x = x;
        mousePos.y = y;
        mousePos.prevX = x;
        mousePos.prevY = y;
        mousePos.prevTime = now;
        mousePos.inside = true;
      });

      heroStageEl.addEventListener('pointerdown', e => {
        if (e.target.closest('.hero-cta-wrap')) return;
        const rect = heroCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Trigger Codex-ASCII radial splash ripple on click/tap
        splashes.push({
          normX: clamp(x / rect.width, 0, 1),
          normY: clamp(y / rect.height, 0, 1),
          start: performance.now(),
          seed: Math.random() * 1000,
          maxRadiusPx: 190,
          thicknessPx: 84
        });
      });

      heroStageEl.addEventListener('pointerleave', () => {
        mousePos.inside = false;
        mousePos.prevX = null;
        mousePos.prevY = null;
        beginDragonReturn(performance.now());
      });

      // Main Render Loop for Hero Timeline + Dragon Rig + ASCII-Moon + Codex-ASCII
      let lastFrameTime = performance.now();

      function renderHeroFrame(now) {
        const dt = Math.min((now - lastFrameTime) / 1000 || 0.016, 0.05);
        lastFrameTime = now;

        // 1. Update Hero Entrance Timeline if running
        if (heroRunning) {
          heroTime = Math.min(getHeroMaxTime(), heroTime + dt);
          applyHeroTimeline();
          if (heroTime >= getHeroMaxTime()) heroRunning = false;
        }

        // Only run heavy canvas rendering when on Home view
        if (currentRoute === 'home' && !document.hidden &&
            (!reducedMotion || !lowMotionFrameRendered)) {
          if (reducedMotion) lowMotionFrameRendered = true;
          // 2. Update Dragon Neck Pose (龙龙摆头 interpolation)
          if (returningState) {
            const t = clamp((now - returningState.start) / returningState.duration, 0, 1);
            const ease = t * t * t * (10 + t * (-15 + 6 * t));
            currentPose = returningState.from * (1 - ease);
            if (t === 1) returningState = null;
          } else {
            currentPose += (wantedPose - currentPose) * (1 - Math.exp(-DRAGON_FOLLOW_RATE * dt));
          }

          const poseResult = computeDragonPose(currentPose);

          // Rig remains available in source but is not exposed as a public UI.
          if (false) {
            bonePath.setAttribute('d', poseResult.current.map((p, i) => (i ? 'L' : 'M') + p.x.toFixed(2) + ' ' + p.y.toFixed(2)).join(''));
            boneDots.forEach((c, i) => {
              const p = poseResult.current[i * 24];
              c.setAttribute('cx', p.x);
              c.setAttribute('cy', p.y);
            });
          }

          // 3. Step original Codex-ASCII Fluid Solver & Splashes
          applyCodexSplashes(fluid, now, stageW, stageH);
          stepCodexFluid(fluid, dt);

          // 4. Rasterize current Dragon pose and render ASCII-Moon + Codex-ASCII grid
          const maskData = rasterizeDragonMask(poseResult);
          asciiCtx.clearRect(0, 0, stageW, stageH);
          asciiPhase += 0.012;

          const colStep = stageW / asciiCols;
          const rowStep = colStep * 1.18;
          asciiCtx.font = `600 ${ (rowStep * 0.74).toFixed(1) }px "Fragment Mono", "JetBrains Mono", monospace`;
          asciiCtx.textAlign = 'center';
          asciiCtx.textBaseline = 'middle';

          // Directional Light from ASCII-Moon (1, 0.15, -0.6)
          let lx = 1, ly = 0.15, lz = -0.6;
          const lLen = Math.hypot(lx, ly, lz);
          lx /= lLen; ly /= lLen; lz /= lLen;

          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          const rotAngle = asciiPhase * 0.32;
          const cosR = Math.cos(rotAngle), sinR = Math.sin(rotAngle);

          for (let row = 0; row < asciiRows; row++) {
            const y = row * rowStep + rowStep * 0.5;
            const yRatio = y / stageH;

            for (let col = 0; col < asciiCols; col++) {
              const x = col * colStep + colStep * 0.5;
              const cellIdx = row * asciiCols + col;
              const pIdx = cellIdx * 4;
              const insideMask = maskData[pIdx]; // Red channel > 80 means inside dragon silhouette
              const ridgeVal = maskData[pIdx + 1] / 255; // Green channel encodes spine volume

              // ASCII-Moon exponential cursor influence + Codex-ASCII fluid density & velocity
              const cursorDist = mousePos.inside ? Math.hypot(x - mousePos.x, y - mousePos.y) : 9999;
              const cursorInfluence = Math.exp(-cursorDist * 0.0042);
              const fluidDensity = fluid ? fluid.density[cellIdx] : 0;
              const fluidVx = fluid ? fluid.velX[cellIdx] : 0;
              const fluidVy = fluid ? fluid.velY[cellIdx] : 0;

              let char = '';
              let alpha = 0;
              let drawX = x + fluidVx * 0.38;
              let drawY = y + fluidVy * 0.38;
              let useAccent = false;

              if (insideMask > 64) {
                // Inside Dragon: Reconstruct 3D surface normal & apply ASCII-Moon procedural terrain lighting
                // Estimate horizontal normal from neighbor mask gradient
                const leftM = col > 0 ? maskData[pIdx - 4] : 0;
                const rightM = col < asciiCols - 1 ? maskData[pIdx + 4] : 0;
                const upM = row > 0 ? maskData[pIdx - asciiCols * 4] : 0;
                const downM = row < asciiRows - 1 ? maskData[pIdx + asciiCols * 4] : 0;

                const sx = clamp((leftM - rightM) / 255 + (col / asciiCols - 0.5) * 0.65, -0.95, 0.95);
                const sy = clamp((upM - downM) / 255 - (row / asciiRows - 0.42) * 0.65, -0.95, 0.95);
                const sz = Math.sqrt(Math.max(0.08, 1 - sx * sx - sy * sy)) * (0.65 + 0.35 * ridgeVal);

                const rx = sx * cosR - sz * sinR;
                const ry = sy;
                const rz = sx * sinR + sz * cosR;

                let illumination = Math.max(0.18, rx * lx + ry * ly + rz * lz + ridgeVal * 0.35);

                // Two-band Value Noise from ASCII-Moon
                const lowNoise = valueNoise2D(rx * 2.6 + 4.2, ry * 2.6 - 1.7) * 0.6
                               + valueNoise2D(rz * 3.4 - 8.1, ry * 3.4 + 5.4) * 0.4;
                const highNoise = valueNoise2D(rx * 12 + ry * 6 + 30, rz * 12 - rx * 4 - 20) * 0.65
                                + valueNoise2D(rx * 20 - 11, ry * 20 + 7) * 0.35;
                const terrain = clamp(0.76 + highNoise * 0.14 - lowNoise * 0.18, 0.52, 0.94);

                const brightness = clamp(0.08 + illumination * terrain * 1.25 + fluidDensity * 0.38, 0, 1);
                const charIndex = clamp(Math.floor(brightness * (MOON_CHARS.length - 1)), 1, MOON_CHARS.length - 1);
                char = MOON_CHARS[charIndex];
                alpha = clamp(0.38 + brightness * 0.62, 0.35, 1);

                // Keep the original animated color/lighting response, but never
                // displace dragon glyph positions with cursor jitter or fluid velocity.
                drawX = x;
                drawY = y;
                useAccent = fluidDensity > 0.18 || cursorInfluence > 0.35;
              } else {
                // Outside Dragon: ASCII-Moon flowing noise field + Codex-ASCII fluid trail reveal
                const spaceSpeed = 1.45;
                const nx = col * 0.085 - asciiPhase * (1.2 + spaceSpeed * 1.1)
                         + Math.sin(asciiPhase * 4.2 + row * 0.28 + col * 0.08) * cursorInfluence * 1.8;
                const ny = row * 0.11 + Math.sin(col * 0.025 + asciiPhase * 1.2) * 0.6
                         + Math.cos(asciiPhase * 3.4 + col * 0.2) * cursorInfluence * 1.1;
                const n1 = valueNoise2D(nx, ny);
                const n2 = valueNoise2D(nx * 1.7 + 20, ny * 0.8 - 14);
                const wave = Math.sin(nx * 1.9 + yRatio * 14) * 0.5
                           + Math.cos(ny * 2.4 - asciiPhase * 2.1) * 0.5;
                let strength = n1 * 0.42 + n2 * 0.28 + (wave * 0.5 + 0.5) * 0.3 + fluidDensity * 0.65;

                if (strength > 0.44) {
                  const charIndex = clamp(Math.floor(strength * (CODEX_SPACE_CHARS.length - 1)), 0, CODEX_SPACE_CHARS.length - 1);
                  char = CODEX_SPACE_CHARS[charIndex];
                  alpha = clamp(0.012 + (strength - 0.4) * 0.06 + fluidDensity * 0.10, 0.008, 0.16);
                  drawX += Math.sin(asciiPhase * 4.8 + row * 0.35 + col * 0.1) * cursorInfluence * 14;
                  drawY += Math.cos(asciiPhase * 3.2 + col * 0.25) * cursorInfluence * 5;
                  useAccent = fluidDensity > 0.12;
                }
              }

              if (char && char !== ' ' && alpha > 0.03) {
                if (insideMask > 64) {
                  if (isDark) {
                    asciiCtx.fillStyle = useAccent
                      ? `rgba(110, 242, 198, ${alpha.toFixed(3)})`
                      : `rgba(195, 244, 226, ${alpha.toFixed(3)})`;
                  } else {
                    asciiCtx.fillStyle = useAccent
                      ? `rgba(22, 148, 108, ${alpha.toFixed(3)})`
                      : `rgba(17, 78, 57, ${alpha.toFixed(3)})`;
                  }
                } else {
                  if (isDark) {
                    asciiCtx.fillStyle = useAccent
                      ? `rgba(86, 207, 232, ${alpha.toFixed(3)})`
                      : `rgba(110, 185, 162, ${alpha.toFixed(3)})`;
                  } else {
                    asciiCtx.fillStyle = useAccent
                      ? `rgba(53, 172, 191, ${alpha.toFixed(3)})`
                      : `rgba(85, 176, 145, ${alpha.toFixed(3)})`;
                  }
                }
                asciiCtx.fillText(char, drawX, drawY);
              }
            }
          }
        }

        requestAnimationFrame(renderHeroFrame);
      }

      requestAnimationFrame(renderHeroFrame);

      /* ======================================================================
         F. Product Showcase Typed Header Effect (from antigravity-five-effects-lab Study 03)
            - Grapheme segmentation (Intl.Segmenter)
            - Character stagger + live cursor position tracking (getBoundingClientRect)
            - Triggered when scrolled into viewport via IntersectionObserver
         ====================================================================== */
      const splitGraphemes = str => {
        try {
          return [...new Intl.Segmenter('zh-CN', { granularity: 'grapheme' }).segment(str)].map(s => s.segment);
        } catch (_) {
          return [...str];
        }
      };

      const typedControllers = [];

      $$('.typed-block').forEach((block, index) => {
        const titleEl = $('.typed-title', block);
        const descEl = $('.typed-desc', block);
        const cursorEl = $('.typed-cursor', block);
        const titleText = titleEl.dataset.typedTitle || titleEl.textContent;
        const descText = descEl.dataset.typedDesc || descEl.textContent;

        let activeTimeouts = [];

        function prepareSpans() {
          activeTimeouts.forEach(clearTimeout);
          activeTimeouts = [];

          titleEl.replaceChildren();
          descEl.replaceChildren();

          const titleChars = splitGraphemes(titleText).map(ch => {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = ch;
            titleEl.appendChild(span);
            return { span, parent: titleEl };
          });

          const descChars = splitGraphemes(descText).map(ch => {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = ch;
            descEl.appendChild(span);
            return { span, parent: descEl };
          });

          return { titleChars, descChars };
        }

        function playTyping() {
          const { titleChars, descChars } = prepareSpans();
          if (reducedMotion) {
            [...titleChars, ...descChars].forEach(item => item.span.classList.add('visible'));
            cursorEl.style.opacity = '0';
            return;
          }

          cursorEl.style.opacity = '1';
          let delay = 60;

          // 1. Type Title with live cursor tracking (52ms per char)
          titleChars.forEach((item, i) => {
            const t = setTimeout(() => {
              item.span.classList.add('visible');
              const charRect = item.span.getBoundingClientRect();
              const blockRect = block.getBoundingClientRect();
              if (charRect.height > 0) {
                cursorEl.style.height = `${charRect.height * 0.82}px`;
                cursorEl.style.transform = `translate(${(charRect.right - blockRect.left + 4).toFixed(1)}px, ${(charRect.top - blockRect.top + charRect.height * 0.09).toFixed(1)}px)`;
              }
            }, delay);
            activeTimeouts.push(t);
            delay += 52;
          });

          delay += 140;

          // 2. Type Description with live cursor tracking (22ms per char)
          descChars.forEach((item, i) => {
            const t = setTimeout(() => {
              item.span.classList.add('visible');
              const charRect = item.span.getBoundingClientRect();
              const blockRect = block.getBoundingClientRect();
              if (charRect.height > 0) {
                cursorEl.style.height = `${charRect.height * 0.84}px`;
                cursorEl.style.transform = `translate(${(charRect.right - blockRect.left + 3).toFixed(1)}px, ${(charRect.top - blockRect.top + charRect.height * 0.08).toFixed(1)}px)`;
              }
              if (i === descChars.length - 1) {
                const hideT = setTimeout(() => {
                  cursorEl.style.opacity = '0';
                }, 950);
                activeTimeouts.push(hideT);
              }
            }, delay);
            activeTimeouts.push(t);
            delay += 22;
          });
        }

        // Pre-populate spans initially
        prepareSpans();
        typedControllers[index] = { block, playTyping, played: false };
      });

      const showcaseObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const idx = typedControllers.findIndex(c => c.block === entry.target);
          if (idx !== -1 && !typedControllers[idx].played) {
            typedControllers[idx].played = true;
            typedControllers[idx].playTyping();
          }
        });
      }, { threshold: 0.22 });

      typedControllers.forEach(c => showcaseObserver.observe(c.block));

      $$('[data-replay-typed]').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.dataset.replayTyped);
          if (typedControllers[idx]) {
            typedControllers[idx].playTyping();
          }
        });
      });

      /* ======================================================================
         G. Interactive UI Tabs in Module 02 (AI 速课堂) & Download Page Controls
         ====================================================================== */
      const classroomData = {
        map: `
          <div class="ui-node-tree">
            <div class="ui-node"><strong>硅酸盐晶体结构</strong> · 岛状 / 链状 / 层状</div>
            <div class="ui-node" style="border-left-color:var(--cyan-accent)"><strong>配位多面体</strong> · [SiO₄]⁴⁻ 四面体连接</div>
            <div class="ui-node" style="border-left-color:var(--iris-accent)"><strong>类质同象</strong> · Mg²⁺ 与 Fe²⁺ 晶格替代</div>
          </div>
          <div class="ui-flashcard">
            <span style="font-size:11px;font-weight:700;color:var(--iris-accent)">FLASHCARD #04</span>
            <strong style="font-size:13px;color:var(--ink-primary)">为什么层状硅酸盐常具有极完全解理？</strong>
            <p style="margin:0;font-size:12px;color:var(--ink-secondary)">层内共价/离子键强，层间分子间力或弱阳离子联结较弱。</p>
          </div>
        `,
        card: `
          <div class="ui-node-tree">
            <div class="ui-node"><strong>卡片 #01</strong> · 鲍林静电价规则定义</div>
            <div class="ui-node" style="border-left-color:var(--cyan-accent)"><strong>卡片 #02</strong> · 架状硅酸盐中 Al³⁺ 替代 Si⁴⁺ 的电价补偿</div>
          </div>
          <div class="ui-flashcard">
            <span style="font-size:11px;font-weight:700;color:var(--brand-primary)">复习进度 · 8 / 12 已掌握</span>
            <strong style="font-size:13px;color:var(--ink-primary)">橄榄石属于哪一类硅酸盐亚类？</strong>
            <p style="margin:0;font-size:12px;color:var(--ink-secondary)">岛状硅酸盐（孤立 [SiO₄] 四面体由 Mg²⁺、Fe²⁺ 连接）。</p>
          </div>
        `,
        quiz: `
          <div class="ui-node-tree">
            <div class="ui-node"><strong>自测题 01</strong> · 单选 · 辉石族矿物链状结构周期</div>
            <div class="ui-node" style="border-left-color:var(--lime-accent)"><strong>你的作答：</strong> 单链四面体，解理夹角约 87° / 93°（正确）</div>
          </div>
          <div class="ui-flashcard">
            <span style="font-size:11px;font-weight:700;color:var(--cyan-accent)">章节小结</span>
            <strong style="font-size:13px;color:var(--ink-primary)">已定位课件第 19 页对应图谱</strong>
            <p style="margin:0;font-size:12px;color:var(--ink-secondary)">可随时回到原课件核对晶体投影图。</p>
          </div>
        `
      };

      $$('[data-classroom-tab]').forEach(tab => {
        tab.addEventListener('click', () => {
          $$('[data-classroom-tab]').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const key = tab.dataset.classroomTab;
          const panel = $('#classroomPanel');
          if (panel && classroomData[key]) {
            panel.innerHTML = classroomData[key];
          }
        });
      });

      // Student handbook V0.1 — deep-linkable continuous articles, no framework.
      const docsPage = $('#view-docs');
      const docsShell = $('#docsV01');
      const docsSearchInput = $('#docsSearchInput');
      const docsSearchResults = $('#docsSearchResults');
      const docsLocationText = $('#docsLocationText');
      const docsReadingProgress = $('#docsReadingProgress');
      const docsCopyLocation = $('#docsCopyLocation');
      const docsEntries = $$('#view-docs [data-doc-slug]').map(el => ({
        element: el,
        id: el.id,
        slug: el.dataset.docSlug,
        title: el.dataset.docTitle,
        section: el.closest('.docs-chapter')?.dataset.docChapter || '阅读指南',
        text: (el.textContent || '').toLocaleLowerCase()
      }));
      let docsCurrentHash = '#/docs';
      let docsScrollScheduled = false;
      function docsHashTarget() {
        if (!location.hash.startsWith('#/docs')) return null;
        const raw = location.hash.replace(/^#\/docs\/?/, '');
        const [segment, params = ''] = raw.split('?');
        let slug = '';
        try { slug = decodeURIComponent(segment || ''); } catch (_) { slug = segment || ''; }
        const position = new URLSearchParams(params).get('section');
        const entry = docsEntries.find(item => item.slug === slug) || docsEntries[0];
        if (!entry) return null;
        let target = document.getElementById('docs-chapter-header-' + slug) || entry.element;
        if (position && /^\d+$/.test(position)) {
          const heading = document.getElementById(entry.id + '-heading-' + position);
          if (heading) target = heading;
        }
        return target;
      }
      function docsScrollToHash(behavior = 'smooth') {
        if (currentRoute !== 'docs') return;
        const target = docsHashTarget();
        if (!target) return;
        const headerGap = 138;
        const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - headerGap);
        window.scrollTo({top, behavior: reducedMotion ? 'instant' : behavior});
        requestAnimationFrame(docsUpdateLocation);
      }
      function docsUpdateLocation() {
        docsScrollScheduled = false;
        if (currentRoute !== 'docs' || !docsShell) return;
        const screenPos = 202;
        let active = docsEntries[0];
        for (const entry of docsEntries) {
          if (entry.element.getBoundingClientRect().top <= screenPos) active = entry;
          else break;
        }
        if (!active) return;
        const headings = $$('[id^="' + active.id + '-heading-"]', active.element);
        let currentHeading = null;
        for (const heading of headings) {
          if (heading.getBoundingClientRect().top <= screenPos + 8) currentHeading = heading;
          else break;
        }
        docsCurrentHash = active.slug ? '#/docs/' + active.slug : '#/docs';
        let locationLabel = active.slug ? active.section + ' / ' + active.title : '文档 / 阅读指南';
        if (currentHeading) {
          const headingLink = currentHeading.querySelector('.docs-anchor');
          docsCurrentHash = headingLink?.getAttribute('href') || docsCurrentHash;
          locationLabel += ' / ' + currentHeading.textContent.replace(/#\s*$/, '').trim();
        }
        if (docsLocationText) docsLocationText.textContent = '# ' + locationLabel;
        const rect = docsShell.getBoundingClientRect();
        const traveled = Math.max(0, -rect.top);
        const scrollable = Math.max(1, docsShell.scrollHeight - window.innerHeight);
        if (docsReadingProgress) docsReadingProgress.style.width = Math.min(100, 100 * traveled / scrollable).toFixed(2) + '%';
      }
      const docsRequestUpdate = () => {
        if (docsScrollScheduled || currentRoute !== 'docs') return;
        docsScrollScheduled = true;
        requestAnimationFrame(docsUpdateLocation);
      };
      window.addEventListener('scroll', docsRequestUpdate, {passive:true});
      window.addEventListener('resize', docsRequestUpdate, {passive:true});
      window.addEventListener('hashchange', () => {
        if (routeFromLocation() !== 'docs') return;
        if (currentRoute === 'docs') requestAnimationFrame(() => docsScrollToHash('auto'));
        else setTimeout(() => docsScrollToHash('auto'), 370);
      });
      window.addEventListener('popstate', () => {
        if (routeFromLocation() !== 'docs') return;
        if (currentRoute === 'docs') requestAnimationFrame(() => docsScrollToHash('auto'));
        else setTimeout(() => docsScrollToHash('auto'), 370);
      });
      docsPage?.addEventListener('click', event => {
        const anchor = event.target.closest('a[data-doc-link]');
        if (!anchor) return;
        const href = anchor.getAttribute('href');
        if (!href?.startsWith('#/docs')) return;
        event.preventDefault();
        if (location.hash !== href) history.pushState({route:'docs'}, '', href);
        if (currentRoute === 'docs') docsScrollToHash();
        else void navigateTo('docs', {updateAddress:false}).then(() => docsScrollToHash('auto'));
        if (docsSearchResults) docsSearchResults.hidden = true;
        if (docsSearchInput) docsSearchInput.setAttribute('aria-expanded', 'false');
      });
      function docsRunSearch() {
        if (!docsSearchInput || !docsSearchResults) return;
        const search = docsSearchInput.value.trim().toLocaleLowerCase();
        docsSearchResults.replaceChildren();
        if (!search) {
          docsSearchResults.hidden = true;
          docsSearchInput.setAttribute('aria-expanded','false');
          return;
        }
        const matches = docsEntries.filter(x => x.title.toLocaleLowerCase().includes(search) || x.text.includes(search)).slice(0, 9);
        if (!matches.length) {
          const empty = document.createElement('p');
          empty.className = 'docs-search-empty';
          empty.textContent = '没有找到匹配内容。试试缩短关键词。';
          docsSearchResults.append(empty);
        } else {
          for (const entry of matches) {
            const link = document.createElement('a');
            link.className = 'docs-search-result';
            link.href = entry.slug ? '#/docs/' + entry.slug : '#/docs';
            link.setAttribute('data-doc-link', 'true');
            const title = document.createElement('span');
            title.textContent = entry.title;
            const category = document.createElement('small');
            category.textContent = entry.section;
            link.append(title, category);
            docsSearchResults.append(link);
          }
        }
        docsSearchResults.hidden = false;
        docsSearchInput.setAttribute('aria-expanded','true');
      }
      docsSearchInput?.addEventListener('input', docsRunSearch);
      docsSearchInput?.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          docsSearchResults.hidden = true;
          docsSearchInput.setAttribute('aria-expanded', 'false');
          docsSearchInput.blur();
        } else if (event.key === 'Enter') {
          const first = docsSearchResults.querySelector('a[data-doc-link]');
          if (first) { event.preventDefault(); first.click(); }
        }
      });
      document.addEventListener('keydown', event => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k' && currentRoute === 'docs') {
          event.preventDefault();
          docsSearchInput?.focus();
        }
      });
      docsCopyLocation?.addEventListener('click', async () => {
        const url = location.href.split('#')[0] + docsCurrentHash;
        try {
          await navigator.clipboard.writeText(url);
          showToast('当前文档位置已复制。');
        } catch (_) {
          const input = document.createElement('textarea');
          input.value = url; input.style.position = 'fixed'; input.style.opacity = '0';
          document.body.append(input); input.select();
          try { document.execCommand('copy'); showToast('当前文档位置已复制。'); }
          catch (_) { showToast('请复制地址栏中的文档链接。'); }
          input.remove();
        }
      });
      if (location.hash.startsWith('#/docs/')) requestAnimationFrame(() => docsScrollToHash('auto'));
      requestAnimationFrame(docsRequestUpdate);


    })();

  