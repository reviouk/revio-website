#!/usr/bin/env node
/* Builds every page in build/content/ into public/<slug>/index.html, then
 * regenerates public/sitemap.xml from every indexable page on the site.
 *
 *   node build/build.js              build everything
 *   node build/build.js --check slug validate one content file, print stats
 *   node build/build.js --only a,b   build a subset
 */
const fs = require('fs');
const path = require('path');
const { render, plain } = require('./render');
const SITE = require('./site');

const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const CONTENT = path.join(__dirname, 'content');

const args = process.argv.slice(2);
const flag = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };

function loadPage(file) {
  delete require.cache[require.resolve(file)];
  const p = require(file);
  if (!p.slug) throw new Error(`${file}: missing slug`);
  if (!p.path) p.path = '/' + p.slug.replace(/^\/|\/$/g, '') + '/';
  return p;
}

function lint(p) {
  const problems = [];
  const t = plain(p.title || '');
  const d = plain(p.description || '');
  if (!t) problems.push('no title');
  if (t.length > 70) problems.push(`title ${t.length} chars (>70)`);
  if (d.length < 120 || d.length > 165) problems.push(`description ${d.length} chars (want 120–165)`);
  if (!p.h1 && !p.heroHtml) problems.push('no h1');
  if (!p.sub && !p.heroHtml) problems.push('no sub');
  if (!p.sections || p.sections.length < (p.utility ? 3 : 5)) problems.push('fewer than 5 sections');
  const last = p.sections && p.sections[p.sections.length - 1];
  if (last && last.type !== 'cta') problems.push('last section is not cta');
  const faq = (p.sections || []).find((s) => s.type === 'faq');
  if (!faq) problems.push('no faq section');
  const banned = /\b(cutting[- ]edge|unlock|supercharge|revolutioni[sz]e|seamless|leverage|game[- ]chang)/i;
  const text = JSON.stringify(p);
  const m = text.match(banned);
  if (m) problems.push(`banned word: "${m[0]}"`);
  if (/\bshe\b/i.test(text) && /\bAI\b/.test(text)) problems.push('check: "she" appears');
  const words = plain(text.replace(/"[a-z_]+":/g, ' ')).split(/\s+/).length;
  return { problems, words, title: t.length, description: d.length };
}

function writePage(p) {
  const html = render(p);
  const dir = path.join(PUBLIC, p.path.replace(/^\//, ''));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  return html.length;
}

function sitemap() {
  const urls = [];
  const walk = (dir, rel) => {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const st = fs.statSync(full);
      if (st.isDirectory()) {
        if (['assets', 'newaisite', 'admin', 'login', 'client-login', 'meta-review'].includes(name)) continue;
        walk(full, rel + name + '/');
      } else if (name === 'index.html') {
        const html = fs.readFileSync(full, 'utf8').slice(0, 6000);
        if (/name="robots"\s+content="[^"]*noindex/i.test(html)) continue;
        if (/http-equiv="refresh"/i.test(html)) continue;
        const loc = SITE.ORIGIN + (rel === '' ? '/' : rel);
        urls.push({ loc, lastmod: st.mtime.toISOString().slice(0, 10), priority: rel === '' ? '1.0' : rel.split('/').length > 2 ? '0.6' : '0.8' });
      }
    }
  };
  walk(PUBLIC, '/');
  urls.sort((a, b) => a.loc.localeCompare(b.loc));
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join('\n') +
    '\n</urlset>\n';
  fs.writeFileSync(path.join(PUBLIC, 'sitemap.xml'), xml);
  const robots = `User-agent: *\nAllow: /\nDisallow: /newaisite/\nDisallow: /admin/\n\nSitemap: ${SITE.ORIGIN}/sitemap.xml\n`;
  fs.writeFileSync(path.join(PUBLIC, 'robots.txt'), robots);
  return urls.length;
}

(function main() {
  const check = flag('--check');
  if (check) {
    const file = path.join(CONTENT, check.replace(/\.js$/, '') + '.js');
    const p = loadPage(file);
    const html = render(p);
    const r = lint(p);
    console.log(`${p.slug}: ${r.words} words, title ${r.title} chars, description ${r.description} chars, ${html.length} bytes`);
    if (r.problems.length) { console.log('  problems: ' + r.problems.join('; ')); process.exitCode = 1; }
    else console.log('  ok');
    return;
  }
  const only = flag('--only');
  const files = fs.readdirSync(CONTENT).filter((f) => f.endsWith('.js'))
    .filter((f) => !only || only.split(',').includes(f.replace(/\.js$/, '')));
  let bad = 0;
  for (const f of files) {
    const p = loadPage(path.join(CONTENT, f));
    const r = lint(p);
    const bytes = writePage(p);
    console.log(`${p.path.padEnd(44)} ${String(r.words).padStart(5)} words ${String(bytes).padStart(7)} b${r.problems.length ? '  ! ' + r.problems.join('; ') : ''}`);
    if (r.problems.length) bad++;
  }
  const n = sitemap();
  console.log(`\n${files.length} pages built, ${bad} with lint notes, sitemap has ${n} urls`);
})();
