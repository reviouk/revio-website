/* Page renderer for the AI services rebuild (2026-09).
 *
 * A content file (build/content/<slug>.js) describes a page as data: head
 * fields, a hero, and an ordered list of typed sections. This turns that into
 * a full HTML document on the live design system (styles.css + partials.js),
 * plus ai.css for the blocks that did not exist before this rebuild.
 *
 * Every page gets the same SEO furniture from one place: title, description,
 * canonical, Open Graph, Twitter card, BreadcrumbList, and Service / FAQPage
 * JSON-LD when the page carries those sections. Copy lives in the content
 * files; nothing here is page-specific.
 *
 * Section types: intro, cards, steps, tiers, table, stats, split, compare,
 * quote, faq, related, cta, checks, timeline, prose, band, logos, calculator,
 * form, booking, cases, pillars.
 */
const SITE = require('./site');

const esc = (s) => String(s == null ? '' : s)
  .replace(/&(?!(amp|lt|gt|quot|#39|pound|mdash|ndash|middot|rsquo|lsquo|rarr|nbsp|hellip|times|#\d+);)/g, '&amp;')
  .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/* Text that is allowed light inline markup (<em>, <b>, <a>, <br>). Copy in the
   content files is ours, so it passes through as written. */
const rich = (s) => String(s == null ? '' : s);
/* Strip tags for schema.org strings and meta fields. */
const plain = (s) => String(s == null ? '' : s).replace(/<[^>]+>/g, '')
  .replace(/&pound;/g, '£').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–')
  .replace(/&rsquo;/g, '’').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

/* ------------------------------------------------------------------ icons */
const ic = (paths) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
  'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
const ICONS = {
  audit: ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  lead: ic('<circle cx="12" cy="8" r="3.4"/><path d="M5 20c.6-3.6 3.4-5.6 7-5.6s6.4 2 7 5.6"/>'),
  build: ic('<path d="M14.8 4.6a4 4 0 0 0 5.1 5.2l-8.3 8.3a2.4 2.4 0 0 1-3.4-3.4z"/><path d="m6.5 17.5-1.7 1.7"/>'),
  agent: ic('<rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 8V4"/><circle cx="9" cy="13" r="1.2"/><circle cx="15" cy="13" r="1.2"/>'),
  chat: ic('<path d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9l-5 4z"/><path d="M8 8h8M8 12h5"/>'),
  voice: ic('<path d="M4 12h2M8 8v8M12 5v14M16 8v8M20 12h-2"/>'),
  flow: ic('<rect x="3" y="4" width="6" height="6" rx="1.5"/><rect x="15" y="14" width="6" height="6" rx="1.5"/><path d="M9 7h4a3 3 0 0 1 3 3v4"/>'),
  shield: ic('<path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6z"/><path d="m9 12 2 2 4-4"/>'),
  lock: ic('<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
  code: ic('<path d="m9 8-5 4 5 4"/><path d="m15 8 5 4-5 4"/>'),
  chart: ic('<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>'),
  clock: ic('<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>'),
  doc: ic('<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>'),
  data: ic('<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6"/><path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6"/>'),
  people: ic('<circle cx="9" cy="9" r="3"/><path d="M3.6 18.4c.5-2.7 2.7-4.4 5.4-4.4s4.9 1.7 5.4 4.4"/><path d="M16.5 6.2a3 3 0 0 1 0 5.6"/><path d="M18 14.4c1.4.7 2.3 2 2.6 4"/>'),
  spark: ic('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>'),
  target: ic('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>'),
  eye: ic('<path d="M3 12s3.3-5.5 9-5.5S21 12 21 12s-3.3 5.5-9 5.5S3 12 3 12z"/><circle cx="12" cy="12" r="2.2"/>'),
  rocket: ic('<path d="M5 19c3-8.5 7.9-12.5 14-13-.4 6.1-4.4 11-13 14"/><path d="M9.5 14.5 5 19"/><path d="M12.5 5.5c-3.5.3-5.7 2-6.4 5"/>'),
  handshake: ic('<path d="m3 11 4-4 5 2 4-2 5 4-3 3-2-1-3 3-3-1-3 3z"/><path d="m8 15 2 2M11 13l2 2"/>'),
  pound: ic('<path d="M15 6.5A3.5 3.5 0 0 0 8 8v8H6"/><path d="M6 12h8M8 16h9"/>'),
  calendar: ic('<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 11h18"/>'),
  mail: ic('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 8 9 6 9-6"/>'),
  phone: ic('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'),
  tick: ic('<path d="M21 12a8 8 0 1 1-3.2-6.4"/><path d="m8 12 3 3 6-7"/>'),
  cross: ic('<circle cx="12" cy="12" r="8.5"/><path d="m9 9 6 6M15 9l-6 6"/>'),
  warn: ic('<path d="M12 4 3 20h18z"/><path d="M12 10v4M12 17h.01"/>'),
  book: ic('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/>'),
  globe: ic('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c3 3 3 14 0 17M12 3.5c-3 3-3 14 0 17"/>'),
  layers: ic('<path d="M12 3 4 7l8 4 8-4z"/><path d="m4 12 8 4 8-4M4 17l8 4 8-4"/>'),
  truck: ic('<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>'),
  health: ic('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>'),
  bank: ic('<path d="M3 10 12 4l9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18"/>'),
  brief: ic('<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M9 7V5h6v2"/>'),
  cart: ic('<path d="M3 4h2l2.4 11h11l2-7H6.5"/><circle cx="9" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>'),
  search: ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  repair: ic('<path d="M14.8 4.6a4 4 0 0 0 5.1 5.2l-8.3 8.3a2.4 2.4 0 0 1-3.4-3.4z"/><path d="m6.5 17.5-1.7 1.7"/>'),
  server: ic('<rect x="4" y="4" width="16" height="6" rx="2"/><rect x="4" y="14" width="16" height="6" rx="2"/><path d="M8 7h.01M8 17h.01"/>'),
  cpu: ic('<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'),
  grant: ic('<path d="M12 3v18M7 8c0-2 2.2-3 5-3s5 1 5 3-2.2 3-5 3-5 1-5 3 2.2 3 5 3 5-1 5-3"/>'),
  training: ic('<path d="M3 8l9-4 9 4-9 4z"/><path d="M7 10v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5M21 8v5"/>'),
};
const icon = (k) => ICONS[k] || ICONS.spark;

/* ------------------------------------------------------ animated hero art */
/* Inline SVGs animated by CSS in ai.css. Decorative: aria-hidden, and every
   animation stops under prefers-reduced-motion. Keyed by content.art. */
const ART = {
  network() {
    const nodes = [[60, 70], [170, 40], [260, 90], [110, 160], [220, 190], [320, 160], [60, 250], [180, 280], [300, 270]];
    const links = [[0, 1], [1, 2], [0, 3], [1, 3], [3, 4], [2, 5], [4, 5], [3, 6], [6, 7], [4, 7], [7, 8], [5, 8]];
    return '<svg class="art art-network" viewBox="0 0 380 320" aria-hidden="true">' +
      links.map(([a, b], i) => `<line class="ln" style="--i:${i}" x1="${nodes[a][0]}" y1="${nodes[a][1]}" x2="${nodes[b][0]}" y2="${nodes[b][1]}"/>`).join('') +
      nodes.map(([x, y], i) => `<g class="nd" style="--i:${i}"><circle class="halo" cx="${x}" cy="${y}" r="14"/><circle class="dot" cx="${x}" cy="${y}" r="6"/></g>`).join('') +
      '<circle class="pk" r="4"><animateMotion dur="7s" repeatCount="indefinite" path="M60 70 L170 40 L260 90 L320 160 L300 270 L180 280 L60 250 L110 160 Z"/></circle>' +
      '</svg>';
  },
  pipeline() {
    return '<svg class="art art-pipeline" viewBox="0 0 380 320" aria-hidden="true">' +
      '<defs><linearGradient id="pg" x1="0" x2="1"><stop offset="0" stop-color="#5862ff"/><stop offset="1" stop-color="#12c98b"/></linearGradient></defs>' +
      '<path class="rail" d="M30 160 H350"/>' +
      [50, 125, 200, 275].map((x, i) => `<g class="stage" style="--i:${i}"><rect x="${x - 18}" y="132" width="56" height="56" rx="14"/><text x="${x + 10}" y="166" text-anchor="middle">${i + 1}</text></g>`).join('') +
      '<rect class="doc" x="-40" y="146" width="28" height="28" rx="7"><animate attributeName="x" from="-40" to="360" dur="6s" repeatCount="indefinite"/></rect>' +
      '<rect class="doc d2" x="-40" y="146" width="28" height="28" rx="7"><animate attributeName="x" from="-40" to="360" dur="6s" begin="2s" repeatCount="indefinite"/></rect>' +
      '<rect class="doc d3" x="-40" y="146" width="28" height="28" rx="7"><animate attributeName="x" from="-40" to="360" dur="6s" begin="4s" repeatCount="indefinite"/></rect>' +
      '<g class="labels"><text x="60" y="222">Scope</text><text x="135" y="222">Build</text><text x="210" y="222">Prove</text><text x="285" y="222">Run</text></g>' +
      '<path class="spark" d="M60 80c30-30 60 30 90 0s60 30 90 0 60 30 90 0"/>' +
      '</svg>';
  },
  chat() {
    return '<svg class="art art-chat" viewBox="0 0 380 320" aria-hidden="true">' +
      '<g class="bub b1" style="--i:0"><rect x="30" y="40" width="200" height="46" rx="16"/><rect class="tx" x="48" y="58" width="120" height="8" rx="4"/></g>' +
      '<g class="bub b2 me" style="--i:1"><rect x="150" y="104" width="200" height="46" rx="16"/><rect class="tx" x="168" y="122" width="150" height="8" rx="4"/></g>' +
      '<g class="bub b3" style="--i:2"><rect x="30" y="168" width="240" height="46" rx="16"/><rect class="tx" x="48" y="186" width="90" height="8" rx="4"/><rect class="tx" x="146" y="186" width="80" height="8" rx="4"/></g>' +
      '<g class="typing" style="--i:3"><rect x="30" y="232" width="86" height="40" rx="16"/><circle cx="55" cy="252" r="4"/><circle cx="73" cy="252" r="4"/><circle cx="91" cy="252" r="4"/></g>' +
      '<g class="booked" style="--i:4"><rect x="190" y="232" width="160" height="40" rx="12"/><path d="m212 252 6 6 12-13"/><text x="240" y="257">Call booked</text></g>' +
      '</svg>';
  },
  chart() {
    const bars = [30, 42, 38, 55, 62, 74, 88];
    return '<svg class="art art-chart" viewBox="0 0 380 320" aria-hidden="true">' +
      '<g class="grid">' + [80, 140, 200, 260].map((y) => `<line x1="30" x2="350" y1="${y}" y2="${y}"/>`).join('') + '</g>' +
      bars.map((h, i) => `<rect class="bar" style="--i:${i}" x="${44 + i * 44}" y="${270 - h * 2.2}" width="26" height="${h * 2.2}" rx="7"/>`).join('') +
      '<path class="line" d="M57 210 L101 184 L145 192 L189 155 L233 140 L277 113 L321 82"/>' +
      '<g class="pill"><rect x="236" y="30" width="114" height="34" rx="17"/><text x="293" y="52">+38% booked</text></g>' +
      '</svg>';
  },
  shield() {
    return '<svg class="art art-shield" viewBox="0 0 380 320" aria-hidden="true">' +
      '<path class="ring r1" d="M190 40 110 72v70c0 62 34 108 80 130 46-22 80-68 80-130V72z"/>' +
      '<path class="ring r2" d="M190 70 135 92v50c0 46 24 80 55 98 31-18 55-52 55-98V92z"/>' +
      '<path class="tick" d="m158 160 22 22 44-48"/>' +
      [[60, 120], [320, 110], [70, 230], [310, 240]].map(([x, y], i) => `<g class="orb" style="--i:${i}"><circle cx="${x}" cy="${y}" r="10"/></g>`).join('') +
      '</svg>';
  },
  clock() {
    return '<svg class="art art-clock" viewBox="0 0 380 320" aria-hidden="true">' +
      '<circle class="face" cx="190" cy="160" r="110"/>' +
      [...Array(12)].map((_, i) => { const a = i * 30 * Math.PI / 180; return `<line class="tk" x1="${190 + 96 * Math.sin(a)}" y1="${160 - 96 * Math.cos(a)}" x2="${190 + 104 * Math.sin(a)}" y2="${160 - 104 * Math.cos(a)}"/>`; }).join('') +
      '<circle class="arc" cx="190" cy="160" r="110"/>' +
      '<line class="hand h" x1="190" y1="160" x2="190" y2="100"/>' +
      '<line class="hand m" x1="190" y1="160" x2="190" y2="76"/>' +
      '<circle class="pin" cx="190" cy="160" r="6"/>' +
      '<g class="saved"><rect x="120" y="282" width="140" height="30" rx="15"/><text x="190" y="302">14 hrs a week back</text></g>' +
      '</svg>';
  },
  voice() {
    return '<svg class="art art-voice" viewBox="0 0 380 320" aria-hidden="true">' +
      [...Array(21)].map((_, i) => `<rect class="wv" style="--i:${i}" x="${40 + i * 15}" y="140" width="8" height="40" rx="4"/>`).join('') +
      '<g class="call"><rect x="100" y="230" width="180" height="40" rx="20"/><circle cx="124" cy="250" r="7"/><text x="200" y="255">Answered in 2 rings</text></g>' +
      '</svg>';
  },
  code() {
    const lines = [[40, 160], [60, 220], [60, 120], [80, 200], [60, 90], [40, 180]];
    return '<svg class="art art-code" viewBox="0 0 380 320" aria-hidden="true">' +
      '<rect class="win" x="30" y="30" width="320" height="260" rx="18"/>' +
      '<circle cx="54" cy="52" r="5" class="d d1"/><circle cx="72" cy="52" r="5" class="d d2"/><circle cx="90" cy="52" r="5" class="d d3"/>' +
      lines.map(([x, w], i) => `<rect class="cl" style="--i:${i}" x="${x + 20}" y="${86 + i * 28}" width="${w}" height="10" rx="5"/>`).join('') +
      '<rect class="cursor" x="60" y="254" width="10" height="14" rx="2"/>' +
      '<g class="pass"><rect x="210" y="236" width="120" height="34" rx="17"/><path d="m230 253 6 6 12-13"/><text x="278" y="258">Tests pass</text></g>' +
      '</svg>';
  },
  lead() {
    return '<svg class="art art-lead" viewBox="0 0 380 320" aria-hidden="true">' +
      '<g class="person"><circle cx="190" cy="120" r="34"/><path d="M120 236c8-46 36-70 70-70s62 24 70 70"/></g>' +
      '<g class="ring"><circle cx="190" cy="160" r="120"/></g>' +
      [[60, 90, 'Backlog'], [320, 90, 'Build'], [60, 250, 'Train'], [320, 250, 'Report']].map(([x, y, t], i) =>
        `<g class="sat" style="--i:${i}"><rect x="${x - 40}" y="${y - 16}" width="80" height="32" rx="16"/><text x="${x}" y="${y + 5}">${t}</text></g>`).join('') +
      '<circle class="pk" r="5"><animateMotion dur="8s" repeatCount="indefinite" path="M60 90 L320 90 L320 250 L60 250 Z"/></circle>' +
      '</svg>';
  },
  layers() {
    return '<svg class="art art-layers" viewBox="0 0 380 320" aria-hidden="true">' +
      [0, 1, 2, 3].map((i) => `<g class="lay" style="--i:${i}"><path d="M190 ${70 + i * 44} 300 ${120 + i * 44} 190 ${170 + i * 44} 80 ${120 + i * 44}z"/></g>`).join('') +
      '<g class="lab"><text x="325" y="125">Your systems</text><text x="325" y="169">Data</text><text x="325" y="213">Models</text><text x="325" y="257">Your team</text></g>' +
      '</svg>';
  },
  calc() {
    return '<svg class="art art-calc" viewBox="0 0 380 320" aria-hidden="true">' +
      '<rect class="win" x="70" y="30" width="240" height="260" rx="20"/>' +
      '<rect class="screen" x="94" y="54" width="192" height="58" rx="10"/>' +
      '<text class="num" x="270" y="93" text-anchor="end">£48,600</text>' +
      [...Array(12)].map((_, i) => `<rect class="key" style="--i:${i}" x="${94 + (i % 3) * 66}" y="${130 + Math.floor(i / 3) * 40}" width="58" height="30" rx="8"/>`).join('') +
      '</svg>';
  },
};
const art = (k) => (ART[k] || ART.network)();

/* --------------------------------------------------------------- helpers */
const btn = (c) => {
  const cls = { primary: 'btn btn-purple', mint: 'btn btn-mint', ghost: 'btn btn-ghost', dark: 'btn btn-ghost-dark' }[c.style || 'primary'];
  return `<a class="${cls}" href="${esc(c.href)}">${rich(c.label)}</a>`;
};
const ctaRow = (ctas) => ctas && ctas.length ? `<div class="cta-row">${ctas.map(btn).join('')}</div>` : '';
const head2 = (s, opts = {}) => {
  const center = opts.center ? ' center' : '';
  let out = `<div class="reveal${center}">`;
  if (s.kicker) out += `<span class="kicker">${rich(s.kicker)}</span>`;
  if (s.h2) out += `<h2>${rich(s.h2)}</h2>`;
  if (s.lede) out += `<p class="lede mt-md">${rich(s.lede)}</p>`;
  out += '</div>';
  return out;
};
const paras = (arr, cls = '') => (arr || []).map((p) => `<p class="${cls}">${rich(p)}</p>`).join('');
const wrapCls = (s) => (s.narrow ? 'wrap wrap-narrow' : 'wrap');
const secCls = (s, extra = '') => {
  const tone = { wash: 'section-wash', deep: 'section-deep', plain: '' }[s.tone || 'plain'];
  return ['ai-sec', tone, s.tight ? 'tight' : '', extra].filter(Boolean).join(' ');
};

/* -------------------------------------------------------------- sections */
const SECTION = {
  intro(s) {
    return `<section class="${secCls(s)}"><div class="${wrapCls({ narrow: s.narrow !== false })}">` +
      head2(s) + `<div class="ai-body reveal">${paras(s.body, 'mt-md')}</div>` +
      (s.ctas ? `<div class="mt-md reveal">${ctaRow(s.ctas)}</div>` : '') +
      '</div></section>';
  },
  cards(s) {
    const cols = s.cols || 3;
    const items = (s.items || []).map((it, i) => {
      const tag = it.href ? 'a' : 'div';
      return `<${tag} class="card reveal" ${it.href ? `href="${esc(it.href)}"` : ''} style="--d:${i}">` +
        (it.icon ? `<div class="icon">${icon(it.icon)}</div>` : '') +
        (it.when ? `<div class="svc-when">${rich(it.when)}</div>` : '') +
        `<h3>${rich(it.title)}</h3><p>${rich(it.text)}</p>` +
        (it.bullets ? `<ul class="checks small">${it.bullets.map((b) => `<li>${rich(b)}</li>`).join('')}</ul>` : '') +
        (it.meta ? `<span class="svc-more">${rich(it.meta)} <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>` : '') +
        `</${tag}>`;
    }).join('');
    return `<section class="${secCls(s)}"><div class="wrap">` + head2(s, { center: s.center }) +
      `<div class="grid-${cols} mt-lg">${items}</div>` +
      (s.note ? `<p class="micro mt-md">${rich(s.note)}</p>` : '') +
      (s.ctas ? `<div class="mt-lg reveal">${ctaRow(s.ctas)}</div>` : '') +
      '</div></section>';
  },
  steps(s) {
    const items = (s.items || []).map((it, i) =>
      `<li class="ai-step reveal" style="--d:${i}"><div class="ai-step-n"><span>${i + 1}</span></div>` +
      `<div><h3>${rich(it.title)}</h3><p>${rich(it.text)}</p>${it.meta ? `<span class="ai-step-meta">${rich(it.meta)}</span>` : ''}</div></li>`).join('');
    return `<section class="${secCls(s)}"><div class="${wrapCls(s)}">` + head2(s) +
      `<ol class="ai-steps mt-lg">${items}</ol>` +
      (s.note ? `<p class="micro mt-md">${rich(s.note)}</p>` : '') +
      '</div></section>';
  },
  tiers(s) {
    const n = (s.items || []).length;
    const items = (s.items || []).map((t, i) =>
      `<div class="price-card reveal${t.featured ? ' featured' : ''}" style="--d:${i}">` +
      (t.flag ? `<span class="flag">${rich(t.flag)}</span>` : '') +
      `<span class="tier-name">${rich(t.name)}</span>` +
      `<div class="amount">${rich(t.price)}${t.per ? `<small> ${rich(t.per)}</small>` : ''}</div>` +
      (t.cadence ? `<p class="setup">${rich(t.cadence)}</p>` : '') +
      `<p class="desc">${rich(t.text)}</p>` +
      `<ul class="checks">${(t.includes || []).map((b) => `<li>${rich(b)}</li>`).join('')}</ul>` +
      (t.best ? `<p class="ai-best"><b>Best for</b> ${rich(t.best)}</p>` : '') +
      btn({ label: t.cta || 'Talk to us', href: t.href || SITE.BOOK_URL, style: t.featured ? 'primary' : 'dark' }) +
      '</div>').join('');
    return `<section class="${secCls(s)}"><div class="wrap">` + head2(s) +
      `<div class="price-grid${n === 4 ? ' cols-4' : n === 2 ? ' cols-2' : ''} mt-lg">${items}</div>` +
      (s.note ? `<p class="price-note">${rich(s.note)}</p>` : '') +
      '</div></section>';
  },
  table(s) {
    const head = `<tr>${(s.head || []).map((h) => `<th>${rich(h)}</th>`).join('')}</tr>`;
    const rows = (s.rows || []).map((r) => `<tr>${r.map((c, i) => `<td${i === 0 ? ' class="k"' : ''}>${rich(c)}</td>`).join('')}</tr>`).join('');
    return `<section class="${secCls(s)}"><div class="${wrapCls(s)}">` + head2(s) +
      `<div class="ai-table-wrap mt-lg reveal"><table class="ai-table"><thead>${head}</thead><tbody>${rows}</tbody></table></div>` +
      (s.note ? `<p class="micro mt-md">${rich(s.note)}</p>` : '') +
      '</div></section>';
  },
  stats(s) {
    const items = (s.items || []).map((it, i) =>
      `<div class="stat reveal" style="--d:${i}"><div class="n"${it.count != null ? ` data-count="${it.count}" data-prefix="${esc(it.prefix || '')}" data-suffix="${esc(it.suffix || '')}"` : ''}>${rich(it.n)}</div><div class="l">${rich(it.label)}</div></div>`).join('');
    return `<section class="${secCls(s, 'tight')}"><div class="wrap">` + (s.h2 || s.kicker ? head2(s) : '') +
      `<div class="stats${(s.items || []).length === 4 ? ' cols-4' : ''}${s.h2 ? ' mt-lg' : ''}">${items}</div></div></section>`;
  },
  split(s) {
    const visual = s.art ? `<div class="ai-art-panel reveal">${art(s.art)}</div>` :
      s.mock ? `<div class="panel-visual reveal">${rich(s.mock)}</div>` : '';
    const copy = `<div class="reveal">` + (s.kicker ? `<span class="kicker">${rich(s.kicker)}</span>` : '') +
      (s.h2 ? `<h2>${rich(s.h2)}</h2>` : '') + (s.lede ? `<p class="lede mt-md">${rich(s.lede)}</p>` : '') +
      paras(s.body, 'mt-md') +
      (s.bullets ? `<ul class="checks mt-md">${s.bullets.map((b) => `<li>${rich(b)}</li>`).join('')}</ul>` : '') +
      (s.ctas ? `<div class="mt-md">${ctaRow(s.ctas)}</div>` : '') + '</div>';
    return `<section class="${secCls(s)}"><div class="wrap split${s.reverse ? ' rev' : ''}">` +
      (s.reverse ? visual + copy : copy + visual) + '</div></section>';
  },
  compare(s) {
    const col = (c, cls) => `<div class="ai-cmp ${cls} reveal"><h3>${rich(c.title)}</h3><ul>${(c.items || []).map((b) => `<li>${rich(b)}</li>`).join('')}</ul></div>`;
    return `<section class="${secCls(s)}"><div class="${wrapCls(s)}">` + head2(s) +
      `<div class="ai-cmp-grid mt-lg">${col(s.yes, 'yes')}${col(s.no, 'no')}</div>` +
      (s.note ? `<p class="micro mt-md">${rich(s.note)}</p>` : '') + '</div></section>';
  },
  quote(s) {
    return `<section class="${secCls(s)}"><div class="wrap wrap-narrow"><div class="testimonial reveal">` +
      `<blockquote>${rich(s.text)}</blockquote><div class="who"><strong>${rich(s.who)}</strong>${s.role ? ` &middot; ${rich(s.role)}` : ''}</div>` +
      '</div></div></section>';
  },
  faq(s) {
    const items = (s.items || []).map((f, i) =>
      `<details class="ai-faq reveal" style="--d:${i}"><summary><span>${rich(f.q)}</span><i></i></summary><div class="ai-faq-a">${paras([].concat(f.a))}</div></details>`).join('');
    return `<section class="${secCls(s)}" id="faq"><div class="wrap wrap-narrow">` + head2(s) +
      `<div class="ai-faqs mt-lg">${items}</div></div></section>`;
  },
  related(s) {
    const items = (s.items || []).map((it, i) =>
      `<a class="card reveal" href="${esc(it.href)}" style="--d:${i}">${it.icon ? `<div class="icon">${icon(it.icon)}</div>` : ''}<h3>${rich(it.title)}</h3><p>${rich(it.text)}</p><span class="arrow-link">${rich(it.meta || 'Read more')}</span></a>`).join('');
    return `<section class="${secCls(s)}"><div class="wrap">` + head2({ kicker: s.kicker || 'Related', h2: s.h2 || 'Where this leads.' }) +
      `<div class="grid-${s.cols || 3} mt-lg">${items}</div></div></section>`;
  },
  cta(s) {
    return `<section class="${secCls(s)}"><div class="wrap reveal"><div class="cta-band">` +
      `<h2>${rich(s.h2)}</h2><p>${rich(s.text)}</p>${ctaRow(s.ctas || [
        { label: 'Book a meeting', href: SITE.BOOK_URL, style: 'mint' },
        { label: 'Start with the audit', href: SITE.AUDIT_URL, style: 'ghost' }])}` +
      (s.note ? `<p class="micro">${rich(s.note)}</p>` : '') +
      '</div></div></section>';
  },
  checks(s) {
    return `<section class="${secCls(s)}"><div class="${wrapCls(s)}">` + head2(s) +
      `<div class="ai-checks-grid mt-lg">${(s.groups || []).map((g, i) =>
        `<div class="ai-check-group reveal" style="--d:${i}"><h3>${rich(g.title)}</h3><ul class="checks">${(g.items || []).map((b) => `<li>${rich(b)}</li>`).join('')}</ul></div>`).join('')}</div>` +
      '</div></section>';
  },
  timeline(s) {
    return `<section class="${secCls(s)}"><div class="${wrapCls(s)}">` + head2(s) +
      `<div class="ai-timeline mt-lg">${(s.items || []).map((it, i) =>
        `<div class="ai-tl reveal" style="--d:${i}"><div class="ai-tl-when">${rich(it.when)}</div><div class="ai-tl-body"><h3>${rich(it.title)}</h3><p>${rich(it.text)}</p></div></div>`).join('')}</div>` +
      '</div></section>';
  },
  prose(s) {
    return `<section class="${secCls(s)}"><div class="wrap wrap-narrow">` + head2(s) +
      `<div class="prose mt-md reveal">${rich(s.html || '')}${paras(s.body)}</div></div></section>`;
  },
  band(s) {
    return `<section class="${secCls({ tone: 'deep', tight: true })}"><div class="wrap ai-band">` +
      `<div class="reveal">${s.kicker ? `<span class="kicker">${rich(s.kicker)}</span>` : ''}<h2>${rich(s.h2)}</h2>${s.text ? `<p class="lede mt-md">${rich(s.text)}</p>` : ''}</div>` +
      `<div class="reveal">${ctaRow(s.ctas || [{ label: 'Book a meeting', href: SITE.BOOK_URL, style: 'mint' }])}</div>` +
      '</div></section>';
  },
  logos(s) {
    const imgs = (s.items || []).map((l) => `<img src="${esc(l.src)}" alt="${esc(l.alt)}" loading="lazy" onerror="this.remove()">`).join('');
    return `<section class="ai-sec tight ai-logos"><div class="wrap"><span class="ai-logos-lab">${rich(s.label || 'Worked with')}</span>` +
      `<div class="logo-cloud"><div class="logo-track">${imgs}${imgs}</div></div></div></section>`;
  },
  cases(s) {
    const items = (s.items || []).map((c, i) =>
      `<a class="case-card reveal" href="${esc(c.href)}" style="--d:${i}"><div class="case-top"><span class="kicker">${rich(c.kicker || 'Case study')}</span><h3>${rich(c.title)}</h3><p>${rich(c.result)}</p></div><div class="ai-case-body"><p>${rich(c.text)}</p><span class="arrow-link">Read the case study</span></div></a>`).join('');
    return `<section class="${secCls(s)}"><div class="wrap">` + head2(s) + `<div class="grid-3 mt-lg">${items}</div></div></section>`;
  },
  pillars(s) {
    const items = (s.items || []).map((p, i) =>
      `<div class="ai-pillar reveal" style="--d:${i}"><div class="icon">${icon(p.icon || 'book')}</div><h3>${rich(p.title)}</h3><p>${rich(p.text)}</p><ul class="ai-links">${(p.links || []).map((l) => `<li><a href="${esc(l.href)}">${rich(l.label)}</a></li>`).join('')}</ul></div>`).join('');
    return `<section class="${secCls(s)}"><div class="wrap">` + head2(s) + `<div class="grid-2 mt-lg">${items}</div></div></section>`;
  },
  html(s) { return rich(s.html); },
  form(s) { return require('./blocks/form')(s, SITE, { rich, esc, head2, secCls }); },
  calculator(s) { return require('./blocks/calculator')(s, SITE, { rich, esc, head2, secCls }); },
  booking(s) { return require('./blocks/booking')(s, SITE, { rich, esc, head2, secCls }); },
};

/* ------------------------------------------------------------------ hero */
function hero(p) {
  const badge = p.badge ? `<span class="badge">${rich(p.badge)}</span>` : '';
  const ctas = ctaRow(p.ctas || [
    { label: 'Book a meeting', href: SITE.BOOK_URL, style: 'mint' },
    { label: 'See pricing', href: SITE.PRICING_URL, style: 'ghost' }]);
  const note = p.heroNote ? `<p class="micro">${rich(p.heroNote)}</p>` : '';
  const proof = p.heroProof ? `<ul class="ai-hero-proof">${p.heroProof.map((x) => `<li>${rich(x)}</li>`).join('')}</ul>` : '';
  const side = p.heroForm ? `<aside class="ai-hero-side ai-hero-form">${SECTION.form(Object.assign({ embedded: true }, p.heroForm))}</aside>` :
    `<aside class="ai-hero-side ai-hero-art" aria-hidden="true">${art(p.art || 'network')}</aside>`;
  return `<div class="page-hero ai-hero"><div class="wrap ai-hero-grid"><div class="ai-hero-copy">${badge}<h1>${rich(p.h1)}</h1>` +
    `<p class="sub">${rich(p.sub)}</p>${ctas}${proof}${note}</div>${side}</div></div>`;
}

/* ------------------------------------------------------------- schema.org */
function jsonld(p) {
  const url = SITE.ORIGIN + p.path;
  const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.ORIGIN + '/' }];
  (p.crumbs || []).forEach((c, i) => crumbs.push({ '@type': 'ListItem', position: i + 2, name: plain(c.label), item: SITE.ORIGIN + c.href }));
  crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: plain(p.h1 || p.title), item: url });
  const graph = [
    { '@type': 'WebPage', '@id': url, url, name: plain(p.title), description: plain(p.description), isPartOf: { '@id': SITE.ORIGIN + '/#website' }, breadcrumb: { '@id': url + '#breadcrumb' } },
    { '@type': 'BreadcrumbList', '@id': url + '#breadcrumb', itemListElement: crumbs },
    { '@type': 'Organization', '@id': SITE.ORIGIN + '/#org', name: 'Revio', url: SITE.ORIGIN + '/', email: SITE.EMAIL, logo: SITE.ORIGIN + '/assets/revio-logo-white.png', address: { '@type': 'PostalAddress', streetAddress: 'Imperial Place, 4 Maxwell Rd', addressLocality: 'Borehamwood', postalCode: 'WD6 1JN', addressCountry: 'GB' }, sameAs: ['https://www.linkedin.com/company/revio-agency/'] },
  ];
  if (p.service) {
    graph.push(Object.assign({ '@type': 'Service', '@id': url + '#service', name: plain(p.service.name || p.h1), serviceType: plain(p.service.type || p.service.name || p.h1), provider: { '@id': SITE.ORIGIN + '/#org' }, areaServed: 'GB', url, description: plain(p.description) },
      p.service.price != null ? { offers: { '@type': 'Offer', priceCurrency: 'GBP', price: p.service.price, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', minPrice: p.service.price, valueAddedTaxIncluded: false }, url } } : {}));
  }
  if (p.path === '/') {
    graph.push({ '@type': 'ProfessionalService', '@id': SITE.ORIGIN + '/#service', name: 'Revio AI Consultancy', url: SITE.ORIGIN + '/', parentOrganization: { '@id': SITE.ORIGIN + '/#org' }, areaServed: { '@type': 'Country', name: 'United Kingdom' }, address: { '@type': 'PostalAddress', streetAddress: 'Imperial Place, 4 Maxwell Rd', addressLocality: 'Borehamwood', postalCode: 'WD6 1JN', addressCountry: 'GB' }, priceRange: '££', hasOfferCatalog: { '@type': 'OfferCatalog', name: 'AI consultancy services', itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Opportunity Audit', url: SITE.ORIGIN + SITE.AUDIT_URL }, priceCurrency: 'GBP', price: 1500 },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Build & Implementation', url: SITE.ORIGIN + '/ai-implementation/' }, priceCurrency: 'GBP', price: 4500 },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Run: support & iteration', url: SITE.ORIGIN + SITE.PRICING_URL }, priceCurrency: 'GBP', price: 450 },
    ] } });
  }
  const faq = (p.sections || []).find((s) => s.type === 'faq');
  if (faq && faq.items && faq.items.length) {
    graph.push({ '@type': 'FAQPage', '@id': url + '#faq', mainEntity: faq.items.map((f) => ({ '@type': 'Question', name: plain(f.q), acceptedAnswer: { '@type': 'Answer', text: plain([].concat(f.a).join(' ')) } })) });
  }
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

/* ------------------------------------------------------------- document */
function render(p) {
  if (!p.path) p.path = '/' + p.slug.replace(/^\/|\/$/g, '') + '/';
  const url = SITE.ORIGIN + (p.canonical || p.path);
  const title = plain(p.title);
  const desc = plain(p.description);
  // A meeting ask after the sections that do the persuading (Rob 2026-09-14:
  // "more CTAs throughout the site"). Not after every section: skipped when
  // the section carries its own buttons, when the next section is a CTA band
  // or a form, and on pages that opt out with meetingRows: false.
  const MEETING_AFTER = new Set(['steps', 'compare', 'cases', 'checks']);
  const list = p.sections || [];
  const sections = list.map((s, i) => {
    const fn = SECTION[s.type];
    if (!fn) throw new Error(`${p.slug}: unknown section type "${s.type}"`);
    let out = fn(s);
    const next = list[i + 1];
    if (p.meetingRows !== false && MEETING_AFTER.has(s.type) && !(s.ctas && s.ctas.length) && !(next && ['cta', 'band', 'booking', 'form'].includes(next.type))) {
      out += `<div class="meeting-row"><div class="wrap reveal"><p>${rich(s.meetingText || 'Not sure which of these fits? Twenty minutes on a call usually settles it.')}</p>${ctaRow([{ label: 'Book a meeting', href: SITE.BOOK_URL, style: 'mint' }])}</div></div>`;
    }
    return out;
  }).join('\n');
  const crumbs = `<nav class="ai-crumbs" aria-label="Breadcrumb"><div class="wrap"><a href="/">Home</a>` +
    (p.crumbs || []).map((c) => ` <span>/</span> <a href="${esc(c.href)}">${rich(c.label)}</a>`).join('') +
    ` <span>/</span> <span aria-current="page">${rich(p.crumbLabel || plain(p.h1).split(/[.:!?]/)[0])}</span></div></nav>`;
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${p.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Revio">
<meta property="og:locale" content="en_GB">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.ORIGIN}${p.image || '/assets/og/default.png'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${SITE.ORIGIN}${p.image || '/assets/og/default.png'}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/ai.css">
<script>(function(){try{var t=localStorage.getItem("revio-theme-v2")||"light";document.documentElement.setAttribute("data-theme",t);}catch(e){}})();</script>
${jsonld(p)}
${p.headExtra || ''}
</head>
<body class="ai-page${p.bodyClass ? ' ' + p.bodyClass : ''}">
<div id="site-header"></div>
<main>
${p.heroHtml || hero(p)}
${p.noCrumbs ? '' : crumbs}
${sections}
</main>
<div id="site-footer"></div>
<script src="/partials.js" defer></script>
<script src="/ai.js" defer></script>
${p.bodyExtra || ''}
</body>
</html>
`;
}

module.exports = { render, ICONS, ART, esc, rich, plain, SECTION, art, icon };
