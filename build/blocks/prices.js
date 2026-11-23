/* Over to Flo price table with two switches (how you pay, currency).
 * All prices come from ONE data object in the content file (s.data). The page
 * is rendered here as plain HTML in the default view (GBP, monthly), and the
 * same data is embedded as JSON so the small script in public/ai.js can switch
 * view without any new request. The maths below is mirrored in ai.js. */
module.exports = function prices(s, SITE, u) {
  const { rich, esc, head2, secCls } = u;
  const d = s.data;
  const cur = d.currencies[0];
  const term = d.terms[0];

  const fmt = (n) => {
    const str = Number.isInteger(n) ? String(n) : n.toFixed(2);
    const [i, f] = str.split('.');
    return i.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (f ? '.' + f : '');
  };
  const pay = (m, t) => t.id === 'quarter' ? Math.floor(m * 27 / 10) : t.id === 'year' ? m * 10 : m;
  const months = (t) => (t.id === 'quarter' ? 3 : t.id === 'year' ? 12 : 1);
  const eq = (m, t) => (t.id === 'month' ? '' : `That is ${cur.sym}${fmt(Math.round(pay(m, t) / months(t) * 100) / 100)} a month.`);

  const priceBlock = (key, p, cls) => {
    const m = p[cur.id];
    return `<div class="${cls}" data-k="${esc(key)}"><div class="pr-amt-line"><span class="pr-amt">${cur.sym}${fmt(pay(m, term))}</span> <span class="pr-per">${term.per}</span></div><div class="pr-eq">${eq(m, term)}</div></div>`;
  };

  /* A small round face. Both Flo agents share Flo's face. */
  const FACE = { flo_phone: 'flo', flo_assistant: 'flo' };
  const face = (k, size) => `<img class="cd-face" src="/img/agents/${esc(FACE[k] || k)}-s.webp" alt="" width="${size}" height="${size}" loading="lazy" decoding="async">`;

  const rows = d.agents.map((a, i) => {
    const live = a.status === 'live';
    return `<li class="pr-row reveal" style="--d:${i}"><div class="pr-main">${face(a.key, 48)}<div>` +
      `<div class="pr-title"><a href="${esc(a.href)}">${rich(a.name)}</a><span class="pr-badge ${live ? 'live' : 'soon'}">${live ? 'Working today' : 'Coming soon'}</span></div>` +
      `<p>${rich(a.text)}</p></div></div>` +
      priceBlock(a.key, a.price, 'pr-price') +
      `<div class="pr-act">${live ? `<a class="btn btn-mint btn-sm" href="${esc(d.startUrl)}">Get started</a>` : `<a class="pr-more" href="${esc(a.href)}">See the plan</a>`}</div></li>`;
  }).join('');

  /* The packages come first on the page. Each shows the faces of the agents in it. */
  const bundles = d.bundles.map((b, i) =>
    `<div class="price-card pr-bundle${b.featured ? ' featured' : ''} reveal" style="--d:${i}">` +
    `<div class="pr-b-top"><span class="tier-name">${rich(b.name)}</span><span class="pr-badge soon">Coming soon</span></div>` +
    `<div class="pr-faces">${(b.faces || []).map((k) => face(k, 40)).join('')}</div>` +
    `<p class="desc">${rich(b.text)}</p>` +
    priceBlock(b.key, b.price, 'pr-price pr-price-b') +
    `<ul class="checks">${b.includes.map((x) => `<li>${rich(x)}</li>`).join('')}</ul>` +
    `<p class="setup">${rich(b.note)}</p></div>`).join('');

  const included = (d.included || []).map((x) =>
    `<li><span class="ic">${u.icon(x.icon || 'tick')}</span><strong>${rich(x.title)}</strong><span class="t">${rich(x.text)}</span></li>`).join('');

  const seg = (label, attr, list, active) =>
    `<div class="pr-group" role="group" aria-label="${esc(label)}"><span class="pr-label">${esc(label)}</span><div class="pr-seg">` +
    list.map((x) => `<button type="button" class="pr-btn" data-${attr}="${x.id}" aria-pressed="${x.id === active.id ? 'true' : 'false'}">${rich(x.label)}</button>`).join('') +
    '</div></div>';

  const json = JSON.stringify(d).replace(/</g, '\u003c');
  return `<section class="${secCls(s, 'cd-pr-sec')}" id="prices"><div class="wrap">
<div class="pr" id="pr-root">
  <p class="pr-nojs">Prices are shown in &pound; and paid monthly.</p>
  <div class="pr-controls reveal">${seg('How you pay', 'term', d.terms, term)}${seg('Currency', 'cur', d.currencies, cur)}</div>
  <p class="pr-sr" role="status" aria-live="polite" id="pr-status"></p>
  <h2 class="pr-sr">${rich(d.bundlesTitle)}</h2>
  <div class="price-grid pr-packs">${bundles}</div>
  <p class="pr-sub pr-center reveal">${rich(d.bundlesText)}</p>
  ${included ? `<div class="pr-inc reveal"><h3>${rich(d.includedTitle || 'Included with every agent')}</h3><ul>${included}</ul></div>` : ''}
  <div class="pr-single reveal"><h2>${rich(d.singleTitle)}</h2><p class="lede mt-md">${rich(d.singleText)}</p></div>
  <ul class="pr-list mt-md">${rows}</ul>
  <p class="pr-extra reveal">${rich(d.extraLabel)}: <b data-extra>${cur.sym}${fmt(d.extra[cur.id])}</b> ${rich(d.extraPer)}</p>
  ${s.note ? `<p class="price-note">${rich(s.note)}</p>` : ''}
</div>
<script type="application/json" id="pr-data">${json}</script>
</div></section>`;
};
