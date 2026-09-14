/* The AI ROI calculator. All maths is in public/ai.js; this is the markup.
 * Two inputs groups (time, enquiries) and one answer panel that maps the
 * result onto the published price ladder. */
module.exports = function calculator(s, SITE, u) {
  const { rich, head2, secCls } = u;
  const range = (id, label, hint, min, max, step, val, kind) =>
    `<div class="calc-row"><div class="lab"><label for="${id}">${label}</label><output for="${id}" data-kind="${kind}"></output></div>` +
    `<input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}"><div class="hint">${hint}</div></div>`;
  return `<section class="${secCls(s)}" id="calculator"><div class="wrap">${head2(s)}
<div class="calc mt-lg" id="roi-calc">
  <div class="calc-in reveal">
    <h3>Time your team spends on repetitive work</h3>
    ${range('c-people', 'People doing repetitive admin', 'Anyone who answers enquiries, keys data, writes quotes or chases.', 1, 60, 1, 4, 'n')}
    ${range('c-hours', 'Hours each spends on it a week', 'Inbox triage, copying between systems, drafting, chasing, reporting.', 1, 30, 1, 8, 'hrs')}
    ${range('c-rate', 'Loaded hourly cost', 'Salary plus on-costs. £22 is roughly a £35k salary with employer costs.', 12, 120, 1, 26, 'money')}
    ${range('c-share', 'Share AI can realistically take', 'We typically see 40–70% on the jobs that make the shortlist. Be conservative.', 10, 90, 5, 50, 'pct')}
    <h3>Enquiries you miss or answer late</h3>
    ${range('c-enq', 'Enquiries a month', 'Calls, forms, DMs, emails. Across every channel.', 0, 1000, 5, 80, 'n')}
    ${range('c-missed', 'Share missed or answered after an hour', 'Out of hours, busy days, the inbox nobody owns. Most businesses are 20–40%.', 0, 80, 5, 25, 'pct')}
    ${range('c-value', 'Average value of a won customer', 'First-year revenue, not lifetime.', 100, 50000, 100, 1500, 'money')}
    ${range('c-close', 'Close rate on answered enquiries', 'Of the enquiries you do answer promptly, how many become customers.', 5, 80, 5, 25, 'pct')}
  </div>
  <div class="calc-out reveal">
    <div class="calc-hero">
      <div class="k">Estimated annual return</div>
      <div class="big" id="o-annual">£0</div>
      <div class="sm" id="o-monthly">£0 a month</div>
    </div>
    <div class="calc-tiles">
      <div class="calc-tile"><div class="k">Hours back each week</div><div class="v good" id="o-hours">0</div></div>
      <div class="calc-tile"><div class="k">Revenue recovered a year</div><div class="v good" id="o-revenue">£0</div></div>
      <div class="calc-tile"><div class="k">Payback on the first build</div><div class="v" id="o-payback">—</div></div>
      <div class="calc-tile"><div class="k">Suggested first step</div><div class="v" id="o-fit" style="font-size:17px;line-height:1.3;margin-top:8px">—</div></div>
    </div>
    <div class="calc-bars">
      <div class="k">Where the number comes from</div>
      <div class="calc-bar"><span>Admin cost now</span><div class="t"><i id="b-admin"></i></div><b id="b-admin-v">£0</b></div>
      <div class="calc-bar gain"><span>Returned by AI</span><div class="t"><i id="b-ai"></i></div><b id="b-ai-v">£0</b></div>
      <div class="calc-bar" style="margin-top:14px"><span>Missed enquiry value</span><div class="t"><i id="b-missed"></i></div><b id="b-missed-v">£0</b></div>
      <div class="calc-bar gain"><span>Recovered by AI</span><div class="t"><i id="b-won"></i></div><b id="b-won-v">£0</b></div>
    </div>
    <div class="calc-fit"><b>Fit against the published prices</b><span id="o-fit-text"></span> <a id="o-fit-link" href="${SITE.AUDIT_URL}" style="color:var(--purple);font-weight:600">See that page</a></div>
    <p class="calc-note">Assumes 46 working weeks, 60% of missed enquiries recoverable with fast answers, and nothing for quality gains, staff churn or growth. Every figure comes from the sliders; nothing is stored until you choose to send it.</p>
    <a class="btn btn-mint" href="#form">Send these numbers to us</a>
  </div>
</div></div></section>`;
};
