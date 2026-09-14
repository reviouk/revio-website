/* Native enquiry form. Posts JSON to the delivery dashboard's public intake
 * endpoint (see public/ai.js). The field names are the columns of the
 * dashboard's `requests` table, so nothing is retyped at triage.
 *
 * Variants (s.variant): 'contact' (default), 'quote', 'audit', 'lead'. The
 * questions change a little; the payload shape does not. */
module.exports = function form(s, SITE, u) {
  const { rich, esc, head2, secCls } = u;
  const v = s.variant || 'contact';
  const id = s.formId || v;
  const svc = (s.services || [
    ['Embedded AI Lead', 'embedded_ai_lead'], ['AI Opportunity Audit', 'ai_opportunity_audit'],
    ['AI Build & Implementation', 'ai_implementation'], ['Agents & automation', 'ai_agents_automation'],
    ['AI chatbot or voice', 'ai_chatbot'], ['Training & enablement', 'ai_enablement'],
    ['Governance & compliance', 'ai_governance'], ['HubSpot', 'hubspot'], ['Not sure yet', 'unsure'],
  ]);
  const chips = svc.map(([label, val], i) =>
    `<label><input type="checkbox" name="services[]" value="${esc(val)}"${s.preselect === val ? ' checked' : ''}><span>${rich(label)}</span></label>`).join('');
  const opt = (arr, name) => arr.map(([l, val]) => `<option value="${esc(val)}">${rich(l)}</option>`).join('');
  const budget = [['Under £2,000', 'under_2k'], ['£2,000 – £5,000', '2k_5k'], ['£5,000 – £15,000', '5k_15k'], ['£15,000 – £50,000', '15k_50k'], ['£50,000+', '50k_plus'], ['Monthly retainer', 'monthly'], ['Not decided', 'undecided']];
  const timeline = [['As soon as possible', 'asap'], ['Within a month', '1m'], ['This quarter', '3m'], ['Later this year', '12m'], ['Just researching', 'research']];
  const team = [['Just me', '1'], ['2 – 10', '2_10'], ['11 – 50', '11_50'], ['51 – 250', '51_250'], ['250+', '250_plus']];
  const crm = [['HubSpot', 'hubspot'], ['Salesforce', 'salesforce'], ['Pipedrive', 'pipedrive'], ['Zoho', 'zoho'], ['Microsoft Dynamics', 'dynamics'], ['GoHighLevel', 'ghl'], ['Spreadsheets / none', 'none'], ['Something else', 'other']];

  const heading = s.h3 || { contact: 'Tell us what is going on.', quote: 'Tell us the scope and we will price it.', audit: 'Book an AI Opportunity Audit.', lead: 'Ask about an Embedded AI Lead.' }[v];
  const subline = s.text || { contact: 'One working day to a reply from a person, not a sequence.', quote: 'An itemised proposal with scope, dates and a fixed number, within two working days.', audit: 'Two weeks, from £1,500. We come back within one working day with dates.', lead: 'A 30-minute conversation about the shape of the role and which tier fits.' }[v];

  const inner = `<form class="ai-form" data-form-id="${esc(id)}" data-book="${esc(SITE.BOOK_URL)}" novalidate>
  ${s.embedded ? `<h2>${rich(heading)}</h2><p class="ai-form-sub">${rich(subline)}</p>` : ''}
  <div class="form-grid">
    <div class="field"><label for="${id}-name">Your name</label><input id="${id}-name" name="contact_name" autocomplete="name" required></div>
    <div class="field"><label for="${id}-email">Work email</label><input id="${id}-email" name="contact_email" type="email" autocomplete="email" required></div>
    <div class="field"><label for="${id}-company">Company</label><input id="${id}-company" name="company_name" autocomplete="organization" required></div>
    <div class="field"><label for="${id}-phone">Phone <small>optional</small></label><input id="${id}-phone" name="phone" type="tel" autocomplete="tel"></div>
    <div class="field"><label for="${id}-role">Your role</label><input id="${id}-role" name="role" placeholder="Founder, Ops Director, Head of Sales…"></div>
    <div class="field"><label for="${id}-website">Website</label><input id="${id}-website" name="website" type="url" placeholder="https://" inputmode="url"></div>
    <div class="field full"><label>What are you interested in? <small>tick any</small></label><div class="chips">${chips}</div></div>
    <div class="field full"><label for="${id}-problem">${v === 'quote' ? 'What do you want built, and what should it change?' : 'What is the job that eats the most time, or the enquiry you keep missing?'}</label><textarea id="${id}-problem" name="main_problem" required placeholder="Two or three sentences is plenty. Where does the time go today, and what would you like to be true in three months?"></textarea></div>
    <div class="field"><label for="${id}-crm">CRM you run today</label><select id="${id}-crm" name="current_crm"><option value="">Choose…</option>${opt(crm)}</select></div>
    <div class="field"><label for="${id}-team">Team size</label><select id="${id}-team" name="team_size"><option value="">Choose…</option>${opt(team)}</select></div>
    <div class="field"><label for="${id}-timeline">When do you want this running?</label><select id="${id}-timeline" name="timeline"><option value="">Choose…</option>${opt(timeline)}</select></div>
    <div class="field"><label for="${id}-budget">Budget in mind <small>helps us answer honestly</small></label><select id="${id}-budget" name="budget_band"><option value="">Choose…</option>${opt(budget)}</select></div>
    ${s.carry ? `<input type="hidden" id="calc-carry" name="calculator">` : ''}
    <div class="hp" aria-hidden="true"><label>Leave this empty<input name="website_url" tabindex="-1" autocomplete="off"></label></div>
  </div>
  <div class="ai-form-status" role="status" aria-live="polite"></div>
  <button class="btn btn-purple" type="submit">${rich(s.button || { contact: 'Send it over', quote: 'Request the quote', audit: 'Book the audit', lead: 'Start the conversation' }[v])}</button>
  <p class="micro" style="margin-top:4px">By sending this you agree to our <a href="/privacy/" style="color:var(--purple)">privacy policy</a>. No newsletters, no sequences, one reply from a person.</p>
</form>`;

  if (s.embedded) return inner;

  const side = `<div class="ai-form-side reveal">
    ${s.kicker ? `<span class="kicker">${rich(s.kicker)}</span>` : ''}
    <h2>${rich(s.h2 || heading)}</h2>
    <p class="lede mt-md">${rich(s.lede || subline)}</p>
    ${(s.points || ['A reply from a person within one working day', 'No sales sequence, no call-booking bot', 'If we are the wrong fit, we will say who is not']).length ? `<ul class="checks mt-md">${(s.points || ['A reply from a person within one working day', 'No sales sequence, no call-booking bot', 'If we are the wrong fit, we will say who is not']).map((p) => `<li>${rich(p)}</li>`).join('')}</ul>` : ''}
    <div class="contact-lines">
      <a href="mailto:${SITE.EMAIL}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 8 9 6 9-6"/></svg>${SITE.EMAIL}</a>
      <a href="${SITE.BOOK_URL}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 11h18"/></svg>Rather talk? Pick a slot in the diary</a>
      <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>${SITE.ADDRESS}</span>
    </div>
  </div>`;
  return `<section class="${secCls(s)}" id="form"><div class="wrap ai-form-grid">${side}<div class="ai-form-wrap reveal">${inner}</div></div></section>`;
};
