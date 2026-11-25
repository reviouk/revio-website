/* "Everything runs through Flo": a hub-and-spoke picture. Flo, the built-in brain,
 * sits in the middle with a ring of neurons; the employees sit either side, and
 * animated dotted lines carry the flow between them. (The older use, with what
 * comes in on the left and what gets done on the right, still works.)
 *
 * The picture is drawn on a 1000 x 560 grid. The lines are one SVG behind the
 * cards; the cards are placed with the same numbers, so they always meet.
 * Under 900px the lines are dropped and the cards stack under Flo.
 * All motion is CSS (ai.css) and stops under prefers-reduced-motion. */
const W = 1000, H = 560;
const HUB0 = { x: 500, y: 235, r: 90 };
const ROWS = [95, 205, 315, 425];      // card centres, top to bottom
const CARD = 262;                       // card width on the grid
const EDGE = [-36, -12, 12, 36];        // where each line meets the hub, around its middle

const svgIcon = (paths) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
  'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
const EXTRA = {
  globe: svgIcon('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 3.9 5.2 3.9 8.500s-1.300 6.100-3.900 8.500c-2.600-2.400-3.900-5.200-3.900-8.500S9.400 5.900 12 3.500z"/>'),
  megaphone: svgIcon('<path d="M4 10v4a1 1 0 0 0 1 1h2l8 4V5L7 9H5a1 1 0 0 0-1 1z"/><path d="M18.500 9a4 4 0 0 1 0 6"/><path d="M8 15v3.500"/>'),
  phoneTick: svgIcon('<rect x="7" y="3" width="10" height="18" rx="2.500"/><path d="m10 12 1.600 1.600L14.500 10"/>'),
};

module.exports = function flow(s, SITE, u) {
  const { rich, esc, head2, secCls, icon } = u;
  /* A brain hub sits level with the middle of five rows. */
  const HUB = s.hub ? { ...HUB0, y: 270 } : HUB0;
  const outward = !!s.outward;     /* dots travel from the hub out to both sides */
  const ico = (k) => EXTRA[k] || icon(k);
  const f = (n) => Math.round(n * 10) / 10;

  /* Up to four cards sit on the fixed rows. A side with five spreads them evenly. */
  const spread = (n, from, to) => Array.from({ length: n }, (_, i) => f(from + i * (to - from) / (n - 1)));
  const rowsFor = (n) => (n <= 4 ? ROWS.slice(0, n) : spread(n, 70, 470));
  const edgeFor = (n) => (n <= 4 ? EDGE.slice(0, n) : spread(n, -40, 40));
  const incoming = (s.incoming || []).slice(0, 5), outgoing = (s.outgoing || []).slice(0, 5);
  const rowsIn = rowsFor(incoming.length), rowsOut = rowsFor(outgoing.length);

  /* A card shows an agent's small round face when it names one, else an icon. */
  const pic = (it) => (it.face
    ? `<img class="ff-face" src="/img/agents/${esc(it.face)}-s.webp" alt="" width="44" height="44" loading="lazy" decoding="async">`
    : `<span class="ff-ic">${ico(it.icon)}</span>`);
  const node = (rows) => (it, i) =>
    `<li style="--y:${rows[i]};--i:${i}">${pic(it)}` +
    `<span class="ff-tx"><b>${rich(it.title)}</b><small>${rich(it.text)}</small></span></li>`;

  /* One curve per card. Left curves run card -> Flo, right curves Flo -> card,
     so the dots always travel in the direction the work does. */
  const curves = [];
  const meet = (dy) => { const dx = Math.sqrt(HUB.r * HUB.r - dy * dy); return { lx: HUB.x - dx, rx: HUB.x + dx, hy: HUB.y + dy }; };
  rowsIn.forEach((y, i) => {
    const { lx, hy } = meet(edgeFor(rowsIn.length)[i]);
    curves.push({ cls: 'in', i, d: outward
      ? `M${f(lx)},${f(hy)} C${f(lx - 85)},${f(hy)} ${f(CARD + 95)},${y} ${CARD},${y}`
      : `M${CARD},${y} C${f(CARD + 95)},${y} ${f(lx - 85)},${f(hy)} ${f(lx)},${f(hy)}` });
  });
  rowsOut.forEach((y, i) => {
    const { rx, hy } = meet(edgeFor(rowsOut.length)[i]);
    curves.push({ cls: 'out', i, d: `M${f(rx)},${f(hy)} C${f(rx + 85)},${f(hy)} ${f(W - CARD - 95)},${y} ${W - CARD},${y}` });
  });
  const approveY = 492;
  if (s.approve) curves.push({ cls: 'ok', i: 4, d: `M${HUB.x},${HUB.y + HUB.r + 22} L${HUB.x},${approveY - 30}` });
  const lines = curves.map((c) =>
    `<path class="ff-dots ff-${c.cls}" d="${c.d}"/>` +
    `<path class="ff-pulse ff-${c.cls}" style="--i:${c.i}" pathLength="100" d="${c.d}"/>`).join('');

  const cap = (v, dflt, side) => (v === '' ? '' : `<p class="ff-cap ff-cap-${side}">${rich(v || dflt)}</p>`);
  const BRAIN = '<svg class="ff-brain" viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
    '<path d="M50 24C44 16 30 16 26 26C16 27 12 38 18 45C12 52 15 64 25 66C27 76 40 80 50 74C60 80 73 76 75 66C85 64 88 52 82 45C88 38 84 27 74 26C70 16 56 16 50 24Z"/>' +
    '<path d="M50 24V74"/><path d="M26 26C32 30 34 36 30 42M18 45C26 45 32 48 34 54M25 66C30 62 36 62 40 66"/>' +
    '<path d="M74 26C68 30 66 36 70 42M82 45C74 45 68 48 66 54M75 66C70 62 64 62 60 66"/></svg>';
  /* Neurons: small glowing dots joined by fine lines, drawn round the hub (which is
     90 units across its radius here). They sit inside the hub element, so they
     show on a phone too, where the long lines to the cards are dropped. */
  const neurons = () => {
    const at = (deg, r) => [f(r * Math.cos(deg * Math.PI / 180)), f(r * Math.sin(deg * Math.PI / 180))];
    /* angle (0 = right, -90 = up), distance from the middle, dot size */
    const N = [[-140, 128, 4.6], [-122, 154, 3.4], [-106, 124, 4.2], [-90, 156, 3.8], [-74, 124, 4.6], [-58, 154, 3.4], [-40, 128, 4.2],
      [140, 130, 3.8], [124, 156, 3.2], [56, 156, 3.2], [40, 130, 3.8]];
    const LINKS = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [0, 2], [2, 4], [4, 6], [7, 8], [9, 10]];
    const FIRE = [1, 4, 7, 9];           /* links that carry a travelling spark */
    const p = N.map(([a, r]) => at(a, r));
    let out = '';
    LINKS.forEach(([a, b], k) => {
      const d = `M${p[a][0]},${p[a][1]} L${p[b][0]},${p[b][1]}`;
      out += `<path class="nl" d="${d}"/>`;
      if (FIRE.includes(k)) out += `<path class="nf" style="--i:${k}" pathLength="100" d="${d}"/>`;
    });
    N.forEach(([a, r, size], k) => {
      if (r < 135) {                      /* inner dots reach in to the hub */
        const e = at(a, 97);
        out += `<path class="nl" d="M${e[0]},${e[1]} L${p[k][0]},${p[k][1]}"/>`;
      } else {                            /* outer dots grow a short branch with a bud */
        const e = at(a + (k % 2 ? 9 : -9), r + 19);
        out += `<path class="nl" d="M${p[k][0]},${p[k][1]} L${e[0]},${e[1]}"/><circle class="nb" cx="${e[0]}" cy="${e[1]}" r="1.9"/>`;
      }
      out += `<circle class="ng" cx="${p[k][0]}" cy="${p[k][1]}" r="${f(size * 2.5)}"/>` +
        `<circle class="nn" style="--i:${k}" cx="${p[k][0]}" cy="${p[k][1]}" r="${size}"/>`;
    });
    return `<svg class="ff-neurons" viewBox="-180 -180 360 360" aria-hidden="true" focusable="false">${out}</svg>`;
  };
  const sub = () => (s.hub && s.hub.caption ? `<small class="ff-sub">${rich(s.hub.caption)}</small>` : '');
  const hubHtml = () => (s.hub && s.hub.face
    ? `<div class="ff-hub ff-hub-face${s.hub.neurons ? ' ff-hub-neurons' : ''}" role="img" aria-label="${esc(s.hub.alt || (s.hub.name + ', the brain behind your team'))}">` +
      (s.hub.neurons ? neurons() : '') +
      `<img src="${esc(s.hub.face)}" alt="" width="180" height="180" loading="lazy" decoding="async"><b>${rich(s.hub.name)}</b>` + sub() + `</div>`
    : s.hub
    ? `<div class="ff-hub ff-hub-brain" role="img" aria-label="${esc(s.hub.alt || (s.hub.name + ', the brain behind your team'))}">${BRAIN}<b>${rich(s.hub.name)}</b>` +
      (s.hub.caption ? `<small class="ff-sub">${rich(s.hub.caption)}</small>` : '') + `</div>`
    : `<div class="ff-hub"><img src="${esc(s.image || '/img/flo/flo.webp')}" alt="Flo, who leads your team" width="180" height="180" loading="lazy" decoding="async"><b>Flo</b></div>`);
  const pct = (n, of) => f(100 * n / of) + '%';
  return `<section class="${secCls(s)}"${s.id ? ` id="${s.id}"` : ''}><div class="wrap">` + head2(s, { center: true }) +
    `<div class="ff mt-lg reveal" style="--hx:${pct(HUB.x, W)};--hy:${pct(HUB.y, H)};--hd:${pct(HUB.r * 2, W)};--ay:${pct(approveY, H)}">` +
    `<svg class="ff-lines" viewBox="0 0 ${W} ${H}" aria-hidden="true" focusable="false">${lines}` +
    `<circle class="ff-ring" cx="${HUB.x}" cy="${HUB.y}" r="${HUB.r + 10}"/></svg>` +
    hubHtml() +
    cap(s.inTitle, 'Comes in', 'in') +
    `<ul class="ff-nodes ff-list-in">${incoming.map(node(rowsIn)).join('')}</ul>` +
    cap(s.outTitle, 'Flo gets it done', 'out') +
    `<ul class="ff-nodes ff-list-out">${outgoing.map(node(rowsOut)).join('')}</ul>` +
    (s.approve ? `<p class="ff-approve"><span class="ff-ic">${ico('phoneTick')}</span>${rich(s.approve)}</p>` : '') +
    `</div>` +
    (s.note ? `<p class="micro mt-md" style="text-align:center">${rich(s.note)}</p>` : '') +
    '</div></section>';
};
