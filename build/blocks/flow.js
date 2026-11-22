/* "Everything runs through Flo": a hub-and-spoke picture for the How it works
 * section. What comes in sits on the left, what Flo gets done on the right,
 * and animated dotted lines carry the flow through Flo in the middle.
 *
 * The picture is drawn on a 1000 x 560 grid. The lines are one SVG behind the
 * cards; the cards are placed with the same numbers, so they always meet.
 * Under 900px the lines are dropped and the cards stack under Flo.
 * All motion is CSS (ai.css) and stops under prefers-reduced-motion. */
const W = 1000, H = 560;
const HUB = { x: 500, y: 235, r: 90 };
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
  const ico = (k) => EXTRA[k] || icon(k);
  const f = (n) => Math.round(n * 10) / 10;

  const node = (it, i) =>
    `<li style="--y:${ROWS[i]};--i:${i}"><span class="ff-ic">${ico(it.icon)}</span>` +
    `<span class="ff-tx"><b>${rich(it.title)}</b><small>${rich(it.text)}</small></span></li>`;

  /* One curve per card. Left curves run card -> Flo, right curves Flo -> card,
     so the dots always travel in the direction the work does. */
  const curves = [];
  ROWS.forEach((y, i) => {
    const dy = EDGE[i], dx = Math.sqrt(HUB.r * HUB.r - dy * dy);
    const lx = HUB.x - dx, rx = HUB.x + dx, hy = HUB.y + dy;
    curves.push({ cls: 'in', i, d: `M${CARD},${y} C${f(CARD + 95)},${y} ${f(lx - 85)},${f(hy)} ${f(lx)},${f(hy)}` });
    curves.push({ cls: 'out', i, d: `M${f(rx)},${f(hy)} C${f(rx + 85)},${f(hy)} ${f(W - CARD - 95)},${y} ${W - CARD},${y}` });
  });
  const approveY = 492;
  curves.push({ cls: 'ok', i: 4, d: `M${HUB.x},${HUB.y + HUB.r + 22} L${HUB.x},${approveY - 30}` });
  const lines = curves.map((c) =>
    `<path class="ff-dots ff-${c.cls}" d="${c.d}"/>` +
    `<path class="ff-pulse ff-${c.cls}" style="--i:${c.i}" pathLength="100" d="${c.d}"/>`).join('');

  const pct = (n, of) => f(100 * n / of) + '%';
  return `<section class="${secCls(s)}"${s.id ? ` id="${s.id}"` : ''}><div class="wrap">` + head2(s, { center: true }) +
    `<div class="ff mt-lg reveal" style="--hx:${pct(HUB.x, W)};--hy:${pct(HUB.y, H)};--hd:${pct(HUB.r * 2, W)};--ay:${pct(approveY, H)}">` +
    `<svg class="ff-lines" viewBox="0 0 ${W} ${H}" aria-hidden="true" focusable="false">${lines}` +
    `<circle class="ff-ring" cx="${HUB.x}" cy="${HUB.y}" r="${HUB.r + 10}"/></svg>` +
    `<div class="ff-hub"><img src="${esc(s.image || '/img/flo/flo.webp')}" alt="Flo, the Clear Desk assistant" width="180" height="180" loading="lazy" decoding="async"><b>Flo</b></div>` +
    `<p class="ff-cap ff-cap-in">${rich(s.inTitle || 'Comes in')}</p>` +
    `<ul class="ff-nodes ff-list-in">${(s.incoming || []).slice(0, 4).map(node).join('')}</ul>` +
    `<p class="ff-cap ff-cap-out">${rich(s.outTitle || 'Flo gets it done')}</p>` +
    `<ul class="ff-nodes ff-list-out">${(s.outgoing || []).slice(0, 4).map(node).join('')}</ul>` +
    (s.approve ? `<p class="ff-approve"><span class="ff-ic">${ico('phoneTick')}</span>${rich(s.approve)}</p>` : '') +
    `</div>` +
    (s.note ? `<p class="micro mt-md" style="text-align:center">${rich(s.note)}</p>` : '') +
    '</div></section>';
};
