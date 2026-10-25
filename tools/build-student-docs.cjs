#!/usr/bin/env node
// Auto-generate the student-docs section from the attached V0.1 combined Markdown.
// No external npm Markdown renderer or runtime network needed.
const fs = require('node:fs');
const path = require('node:path');
function buildDocs(source){
  const normalize=s=>s.replace(/\r\n?/g,"\n").trim();
  const esc=s=>String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
  const pieces=[...source.matchAll(/^> 文档 (\d{2})\/21 · `([^`]+)` · ([^\n]+)\s*$/gm)];
  if(pieces.length!==21)throw Error(`Expected 21 document boundaries, found ${pieces.length}`);
  const docs=pieces.map((m,i)=>{
    const content=normalize(source.slice(m.index+m[0].length,i+1<pieces.length?pieces[i+1].index:source.length).replace(/(?:\n\s*---\s*)+$/,""));
    const path=m[2];
    if(!/^(?:[a-z0-9][a-z0-9_-]*\/)*[a-z0-9][a-z0-9_-]*\.md$/.test(path))throw Error(`Invalid document path: ${JSON.stringify(path)}`);
    const slug=path==="index.md"?"":path.replace(/\/index\.md$/,"").replace(/\.md$/,"");
    const title=(content.match(/^# (.+)$/m)||[])[1];
    if(!title)throw Error(`Missing H1 in ${path}`);
    return {num:i+1,path,slug,title,group:m[3],body:content, id:"doc-"+(slug||"index").replace(/[^a-z0-9-]/gi,"-")};
  });
  if(new Set(docs.map(doc=>doc.slug)).size!==docs.length)throw Error('Duplicate document slug');
  const sections=[
    ["01-getting-started","快速开始","认识软件，完成第一项任务","GETTING STARTED"],
    ["02-installation","安装与配置","下载、模型渠道、备份、更新和校验","INSTALLATION"],
    ["03-features","功能指南","Agent、校园事务、学习辅助与材料审核","FEATURES"],
    ["04-faq","常见问题","排查安装、连接和使用中的问题","QUESTIONS"],
    ["05-development","开发与贡献","反馈问题、参与开源、查看技术资料","CONTRIBUTE"],
    ["06-about","关于项目","认识项目定位与开源许可","ABOUT"]
  ];
  function normalizeHref(target,fromPath){
    if(target==="/download")return "#/download";
    if(target.startsWith("/docs/"))return "#"+target;
    if(target.startsWith("https://")||target.startsWith("http://"))return target;
    if(target.startsWith("mailto:"))return target;
    if(target.startsWith("#"))return target;
    if(target.startsWith("/"))return target;
    const from=fromPath.split("/");from.pop();
    for(const bit of target.split("/")){if(bit==="..")from.pop();else if(bit!==".")from.push(bit);}
    const path=from.join("/");
    return "#/docs"+(path==="index.md"?"":"/"+path.replace(/\/index\.md$/,"").replace(/\.md$/,""));
  }
  function inline(s,fromPath){
    let t=esc(s);
    t=t.replace(/`([^`]+)`/g,(_,v)=>`<code>${v}</code>`);
    t=t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,(_,label,url)=>{
      const href=normalizeHref(url.replace(/&amp;/g,"&"),fromPath);
      const internal=href.startsWith("#/docs")?' data-doc-link="true"':"";
      const ext=href.startsWith("https://")?' target="_blank" rel="noopener noreferrer"':"";
      return `<a href="${esc(href)}"${internal}${ext}>${label}</a>`;
    });
    t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");
    t=t.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g,"<em>$1</em>");
    return t;
  }
  function renderMarkdown(markdown,doc,omitTitle=true){
    const lines=normalize(markdown).split("\n");
    const result=[];let para=[],list=null,code=null,table=null,quote=[],heading=0,skipH1=omitTitle;
    const flushPara=()=>{if(para.length){result.push(`<p>${inline(para.join(" "),doc.path)}</p>`);para=[]}};
    const flushList=()=>{if(list){result.push(`</${list}>`);list=null}};
    const flushQuote=()=>{if(quote.length){result.push(`<aside class="docs-callout">${quote.map(q=>`<p>${inline(q,doc.path)}</p>`).join("")}</aside>`);quote=[]}};
    const flushTable=()=>{if(table){result.push(`<div class="docs-table-wrap"><table><thead><tr>${table[0].map(x=>`<th>${inline(x,doc.path)}</th>`).join("")}</tr></thead><tbody>${table.slice(1).map(row=>`<tr>${row.map(x=>`<td>${inline(x,doc.path)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);table=null}};
    const flushAll=()=>{flushPara();flushList();flushQuote();flushTable()};
    function cells(line){return line.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(s=>s.trim());}
    for(let i=0;i<lines.length;i++){
      const line=lines[i],trim=line.trim();
      if(code){
        if(/^```/.test(trim)){result.push(`<pre><code>${esc(code.lines.join("\n"))}</code></pre>`);code=null;}
        else code.lines.push(line);
        continue;
      }
      if(/^```/.test(trim)){flushAll();code={lines:[]};continue;}
      if(!trim){flushAll();continue;}
      if(/^#{1,4}\s/.test(trim)){
        flushAll(); const m=trim.match(/^(#{1,4})\s+(.+)$/);if(m[1].length===1&&skipH1){skipH1=false;continue;}
        heading++;
        const level=m[1].length===1?"h3":m[1].length===2?"h4":"h5";
        const href="#/docs/"+doc.slug+(doc.slug?"?":"?")+"section="+heading;
        const id=doc.id+"-heading-"+heading;
        result.push(`<${level} id="${id}" class="docs-prose-heading">${inline(m[2],doc.path)} <a class="docs-anchor" href="${esc(href)}" data-doc-link="true" aria-label="链接到：${esc(m[2])}">#</a></${level}>`);
        continue;
      }
      if(/^\s*---+\s*$/.test(trim)){flushAll();result.push("<hr>");continue;}
      if(/^\|.*\|$/.test(trim)){
        flushPara();flushList();flushQuote();
        if(/^\|\s*:?-{3,}/.test(trim))continue;
        if(!table)table=[];table.push(cells(trim));
        continue;
      }
      if(table)flushTable();
      if(/^>\s?/.test(trim)){flushPara();flushList();quote.push(trim.replace(/^>\s?/,""));continue;}
      if(quote.length)flushQuote();
      const li=trim.match(/^(\d+)\.\s+(.+)$/)||trim.match(/^[-*]\s+(.+)$/);
      if(li){
        flushPara(); const tag=/^\d+\./.test(trim)?"ol":"ul";
        if(list!==tag){flushList();result.push(`<${tag}>`);list=tag;}
        const val=li[li.length-1];result.push(`<li>${inline(val,doc.path)}</li>`);
        continue;
      }
      if(list){if(/^\s{3,}\S/.test(line)){result.push(`<p class="docs-list-continuation">${inline(trim,doc.path)}</p>`);continue;}flushList();}
      para.push(trim);
    }
    if(code)result.push(`<pre><code>${esc(code.lines.join("\n"))}</code></pre>`);
    flushAll();
    return result.join("\n");
  }
  const home=docs[0], homeText=home.body.split("\n");
  const homeIntro=(homeText.find((x,i)=>i>0&&x.trim()&&!x.startsWith("#")&&!x.startsWith(">"))||"").trim();
  const caution=homeText.find(x=>x.startsWith("> **阅读前请注意**"))?.replace(/^>\s*/,"")||"";
  const quickStart=homeText.slice(homeText.findIndex(x=>x.startsWith("## 第一次使用"))+1,homeText.findIndex(x=>x.startsWith("## 六个文档模块"))).filter(x=>/^\d+\.\s+/.test(x));
  const sectionCards=sections.map(([slug,title,desc,eyebrow],i)=>
    `<a class="docs-chapter-card" href="#/docs/${slug}" data-doc-link="true"><span class="docs-card-number">${String(i+1).padStart(2,"0")} / ${eyebrow}</span><span class="docs-card-title">${esc(title)}<span aria-hidden="true">↗</span></span><span class="docs-card-desc">${esc(desc)}</span></a>`).join("\n");
  let chapters=sections.map(([slug,title,desc,eyebrow],idx)=>{
    const entries=docs.filter(d=>d.slug===slug||d.slug.startsWith(slug+"/"));
    if(!entries.length)throw Error("No documents in "+slug);
    const content=entries.map((doc,i)=>{
      const c=renderMarkdown(doc.body,doc,true);
      if(i===0) return `<div class="docs-chapter-intro docs-prose" id="${doc.id}" data-doc-title="${esc(doc.title)}" data-doc-slug="${esc(doc.slug)}">${c}</div>`;
      return `<article class="docs-article docs-prose" id="${doc.id}" data-doc-title="${esc(doc.title)}" data-doc-slug="${esc(doc.slug)}">
        <p class="docs-article-index">${String(idx+1).padStart(2,"0")}.${String(i).padStart(2,"0")} / GUIDE</p>
        <h3 class="docs-article-title"><a href="#/docs/${esc(doc.slug)}" data-doc-link="true">${esc(doc.title)}</a></h3>
        ${c}
        <div class="docs-article-end"><a href="#/docs/${slug}" data-doc-link="true">回到本章开头 ↑</a></div>
      </article>`;
    }).join("\n");
    return `<section class="docs-chapter" id="docs-chapter-${slug}" data-doc-chapter="${esc(title)}">
      <header class="docs-chapter-heading" id="docs-chapter-header-${slug}">
        <p class="docs-chapter-kicker">CHAPTER ${String(idx+1).padStart(2,"0")} / ${esc(eyebrow)}</p>
        <h2><a href="#/docs/${slug}" data-doc-link="true">${esc(title)}</a></h2>
        <p class="docs-chapter-description">${esc(desc)}</p>
      </header>
      ${content}
    </section>`;
  }).join("\n");
  const html=`<section id="view-docs" class="page-view" aria-label="学生使用文档" aria-hidden="true">
    <div class="docs-v01-shell" id="docsV01">
      <div class="docs-reading-progress" aria-hidden="true"><span id="docsReadingProgress"></span></div>
      <div class="docs-reading-location" id="docsReadingLocation">
        <span class="docs-reading-location-text" id="docsLocationText">文档 / 阅读指南</span>
        <button type="button" id="docsCopyLocation" title="复制当前段落链接" aria-label="复制当前段落链接"># <span>复制位置</span></button>
      </div>
      <div class="docs-reading-column">
        <header class="docs-landing" id="doc-index" data-doc-title="文档首页" data-doc-slug="">
          <span class="docs-eyebrow">CDUT STUDIO <span>·</span> STUDENT HANDBOOK V0.1</span>
          <h1>${esc('CDUT Studio，从这里上手。')}</h1>
          <p class="docs-lead">${inline(homeIntro,home.path)}</p>
          <aside class="docs-important">${inline(caution,home.path)}</aside>
          <div class="docs-search-wrap">
            <label for="docsSearchInput">搜索这份说明书</label>
            <div class="docs-search-field"><span aria-hidden="true">⌕</span><input id="docsSearchInput" type="search" placeholder="搜索安装、模型、材料审核、砚小龙…" autocomplete="off" aria-controls="docsSearchResults" aria-expanded="false" /></div>
            <div class="docs-search-results" id="docsSearchResults" hidden></div>
          </div>
          <div class="docs-home-subheading"><span>目录</span><h2>想了解哪一部分？</h2><p>点击一个章节直接进入，或者继续向下阅读全部说明。</p></div>
          <div class="docs-chapter-grid" id="docsCategoryGrid">${sectionCards}</div>
          <section class="docs-first-steps docs-prose">
            <h2>第一次使用，走这条路线</h2>
            <ol>${quickStart.map(x=>`<li>${inline(x.replace(/^\d+\.\s+/,""),home.path)}</li>`).join("")}</ol>
            <p>你也可以直接打开应用内 <strong>设置 → 帮助 → CDUT Studio 教程</strong>，阅读随客户端提供的指南。如果页面文字和你安装的版本不同，请优先以当前客户端为准。</p>
          </section>
          <div class="docs-scroll-cue" aria-hidden="true">继续向下阅读 <span>↓</span></div>
        </header>
        <main class="docs-chapters" id="docsChapters">${chapters}</main>
        <footer class="docs-footer"><p>CDUT Studio 学生文档 · V0.1 · 2026-10-17</p><p>学生与开源贡献者开发的非学校官方项目。实际可用功能以当前发行版本为准。</p><a href="#/docs" data-doc-link="true">回到文档顶部 ↑</a></footer>
      </div>
    </div>
  </section>`;
  return {html,docs:docs.map(({path,slug,title,id,group})=>({path,slug,title,id,group})),counts:{documents:docs.length,chapters:sections.length,links:(html.match(/data-doc-link="true"/g)||[]).length,chars:html.length}};
}
module.exports = {buildDocs};
if (require.main === module) {
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'content/student-docs-v0.1-combined.md'), 'utf8');
const markupPath = path.join(root, 'index-modular.html');
const markup = fs.readFileSync(markupPath, 'utf8');
const begin = '<!-- STUDENT_DOCS_V0.1_BEGIN -->', end = '<!-- STUDENT_DOCS_V0.1_END -->';
if(!markup.includes(begin)||!markup.includes(end))throw Error('Docs generation markers missing');
const rendered = buildDocs(source);
const head = markup.slice(0,markup.indexOf(begin)+begin.length);
const tail = markup.slice(markup.indexOf(end));
const expected = head+'\n'+rendered.html+'\n'+tail;
if(process.argv.includes('--check')){
  if(markup!==expected) { console.error('Student docs source is out of date. Run node tools/build-student-docs.cjs'); process.exit(1); }
  console.log('PASS: '+rendered.counts.documents+' documents, '+rendered.counts.chapters+' chapters');
} else {
  fs.writeFileSync(markupPath, expected);
  console.log('Updated modular student docs: '+rendered.counts.documents+' documents');
}
}
