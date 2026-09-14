const S = require('../site');
const P = S.PRICE;
const { art, icon } = require('../render');

const heroHtml = `<div class="page-hero ai-hero"><div class="wrap hm-hero">
  <div class="ai-hero-copy">
    <span class="badge">AI consultancy &middot; audit &middot; build &middot; run</span>
    <h1>AI consultancy for systems still running <em class="mint">in month twelve</em>.</h1>
    <p class="sub">Most AI projects do not fail at launch. They fail quietly, later: a field changes, a sync stops, nobody notices for three weeks. Revio finds the one process where AI genuinely pays in your business, builds it into the CRM you already run, and stays until your team is using it.</p>
    <div class="cta-row">
      <a class="btn btn-mint" href="${S.AUDIT_URL}">Start with the audit &mdash; ${P.audit.toLowerCase()}</a>
      <a class="btn btn-ghost" href="${S.BOOK_URL}">Book a meeting</a>
    </div>
    <ul class="ai-hero-proof"><li>Every price published</li><li>Senior team, no hand-offs</li><li>We build and run our own AI product</li></ul>
  </div>
  <aside class="ai-hero-side hm-orbit" aria-hidden="true">${art('network')}</aside>
</div></div>`;

const ladder = `<section class="ai-sec"><div class="wrap">
  <div class="reveal center"><span class="kicker">Transparent UK pricing</span><h2>Three phases. Every price published.</h2>
  <p class="lede mt-md">Most people start with phase one and work right. Nobody is asked to buy phase three on a first call, and every price here excludes VAT.</p></div>
  <div class="hm-ladder mt-lg">
    <a class="hm-rung reveal" href="${S.AUDIT_URL}" style="--d:0"><div class="no">1</div><span class="when">Phase 1 &middot; Find</span><h3>AI Opportunity Audit</h3><p>Two weeks. Where AI saves time or makes money in your business, in priority order, with the cost and payback of each, and an honest note on where AI is the wrong answer.</p><div class="fee">${P.audit}<small>2 weeks &middot; fixed fee, credited against a build</small></div><span class="btn btn-mint hm-cta">Book the audit &rarr;</span></a>
    <a class="hm-rung reveal" href="/ai-implementation/" style="--d:1"><div class="no">2</div><span class="when">Phase 2 &middot; Prove</span><h3>Pilot</h3><p>One real process, live, with a number attached. Wired into the CRM you already run, supervised before it acts alone. Small enough to prove the case in weeks, real enough that it stays in use.</p><div class="fee">${P.build_from}<small>3 to 4 weeks &middot; fixed price, fixed date</small></div><span class="btn btn-ghost hm-cta">Scope a pilot &rarr;</span></a>
    <a class="hm-rung reveal" href="${S.PRICING_URL}" style="--d:2"><div class="no">3</div><span class="when">Phase 3 &middot; Build and embed</span><h3>The full system</h3><p>The connected app or platform: integrations, guardrails, handbacks, staff trained as each part lands, and monitoring that says when a seam comes apart. Handed over with a written runbook.</p><div class="fee">From ${P.build_mid}<small>6 to 12 weeks &middot; fixed price, fixed date</small></div><span class="btn btn-ghost hm-cta">See build pricing &rarr;</span></a>
  </div>
  <p class="hm-ladder-note reveal mt-md">After any build, <a href="${S.PRICING_URL}">Run</a> keeps it connected and improving from ${P.run} a month, monthly rolling, never a condition of the build. HubSpot work, an embedded AI lead and advisory are available ad hoc, by the day.</p>
</div></section>`;

const marquee = `<div class="hm-marquee" aria-hidden="true"><div class="track">${[
  'Enquiries answered in your voice', 'Quotes drafted from precedent', 'Documents read and keyed', 'Calls answered out of hours',
  'CRM hygiene fixed', 'Monday reports produced', 'Invoices chased politely', 'Candidates screened', 'Bookings made while you sleep',
  'Governance you can run', 'Every price published', 'Built in weeks, not quarters',
].concat([
  'Enquiries answered in your voice', 'Quotes drafted from precedent', 'Documents read and keyed', 'Calls answered out of hours',
  'CRM hygiene fixed', 'Monday reports produced', 'Invoices chased politely', 'Candidates screened', 'Bookings made while you sleep',
  'Governance you can run', 'Every price published', 'Built in weeks, not quarters',
]).map((t) => `<span>${t}</span>`).join('')}</div></div>`;

const svc = (href, ic, title, text) => `<a class="hm-svc reveal" href="${href}"><div class="icon">${icon(ic)}</div><div><h3>${title}</h3><p>${text}</p></div></a>`;
const services = `<section class="ai-sec section-wash"><div class="wrap">
  <div class="reveal"><span class="kicker">Everything we do</span><h2>Named after the job, not the technology.</h2>
  <p class="lede mt-md">Nobody wants an LLM integration. They want the enquiries answered, the data to stop going missing, and the team to stop dreading the software.</p></div>
  <div class="hm-grid-services mt-lg">
    ${svc('/ai-agents-automation/', 'agent', 'Agents &amp; automation', 'Answer, qualify, chase, book, and act inside your systems, with guardrails.')}
    ${svc('/ai-workflow-automation/', 'flow', 'Workflow automation', 'The copy-paste jobs between systems, gone, and monitored so they stay gone.')}
    ${svc('/ai-chatbot/', 'chat', 'AI chatbots', 'Web, WhatsApp and DMs, on your own material, handing to a human when it should.')}
    ${svc('/voice-ai/', 'voice', 'Voice AI', 'Calls answered in two rings, out of hours, booked and noted into the CRM.')}
    ${svc('/claude-implementation/', 'layers', 'Claude, ChatGPT &amp; Copilot', 'Rolled out properly: data controls, custom assistants, adoption measured.')}
    ${svc('/ai-enablement/', 'training', 'Training &amp; enablement', 'A programme on your own work, not a workshop that is forgotten in a month.')}
    ${svc('/private-ai/', 'lock', 'Private AI', 'Models in your own tenant or on your own hardware, for work that must not leave.')}
    ${svc('/ai-governance-compliance/', 'shield', 'Governance &amp; compliance', 'The register, the policy and the audit trail, in a form your team can run.')}
    ${svc('/ai-app-rescue/', 'repair', 'AI app rescue', 'Lovable, Bolt, Replit or Cursor app that works in a demo and not in production. Fixed.')}
    ${svc('/legacy-modernisation/', 'server', 'Legacy modernisation', 'The Access database, the spreadsheet operation, the dying SaaS: replaced.')}
    ${svc('/hubspot-agency/', 'data', 'HubSpot', 'A decade of implementation, migration, RevOps and support. Still here.')}
    ${svc('/ai-growth-systems/', 'chart', 'AI growth systems', 'Find, nurture and create, as one machine on tools in your own name.')}
  </div>
  <div class="cta-row mt-lg reveal"><a class="btn btn-purple" href="${S.SERVICES_URL}">All AI services</a><a class="btn btn-ghost-dark" href="${S.INDUSTRIES_URL}">By industry</a></div>
</div></section>`;

module.exports = {
  slug: 'home', path: '/',
  title: 'AI Consultancy UK: AI Audit, Build & Implementation | Revio',
  description: 'UK AI consultancy: a two-week AI audit from £1,500, fixed-price builds from £4,500 wired into the CRM you already run, support from £450 a month. Every price published.',
  keywords: ['ai consultancy uk', 'ai agency uk', 'ai implementation consultancy', 'embedded ai lead', 'ai audit uk'],
  noCrumbs: true,
  heroHtml,
  sections: [
    { type: 'html', html: marquee },
    { type: 'html', html: ladder },
    {
      type: 'logos', label: 'Worked with', items: [
        { src: '/assets/legacy/Mintec-Logo-300x169.jpg', alt: 'Mintec' }, { src: '/assets/legacy/lsbu-logo.svg', alt: 'London South Bank University' },
        { src: '/assets/legacy/intelli-bw-1.jpg', alt: 'Intelligencia Training' }, { src: 'https://www.tlpi.co.uk/hubfs/tlpi-colour.svg', alt: 'TLPI' },
        { src: '/assets/legacy/thisisbud-logo.svg', alt: 'This is Bud' }, { src: '/assets/legacy/prosips.jpg', alt: 'ProSIPS' },
        { src: '/assets/blog/leadsignal-hero.png', alt: 'LeadSignal' }, { src: '/assets/legacy/EA-cover-560x560.jpg', alt: 'Extension Architecture' },
      ],
    },
    { type: 'html', html: services },
    {
      type: 'split', art: 'pipeline', kicker: 'How an engagement runs', h2: 'Small, live, then bigger.',
      lede: 'The first thing we build is chosen to prove the case in weeks, on one real process, with a number attached. Nobody signs off a programme of work on a promise.',
      bullets: ['<strong>Pick one process.</strong> Out of the audit, or the one that already annoys everybody.', '<strong>Build it.</strong> Two to four weeks for most things, on your own data.', '<strong>Run it supervised.</strong> It drafts, your team approves, it learns from the edits.', '<strong>Let it off the lead.</strong> Only then does it act alone, with guardrails and monitoring already in place.'],
      ctas: [{ label: 'See how builds are priced', href: '/ai-implementation/', style: 'dark' }],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Why us', h2: 'Why businesses choose Revio.', cols: 3,
      items: [
        { icon: 'rocket', title: 'We build and run our own AI product', text: 'LeadSignal is our own AI platform: multi-tenant, an approved Meta app, live payments and paying customers, built in eight weeks. We run it every day, so the advice you get comes from operating AI in production, not from a slide.', href: '/work/leadsignal/', meta: 'Read the case study' },
        { icon: 'data', title: 'It lands in the CRM you already have', text: 'HubSpot, Salesforce, Pipedrive, Zoho, Dynamics, GoHighLevel or an in-house system with an API. Ten years of CRM implementation and data work is why that part is scoped and priced openly, not buried inside a build.', href: '/hubspot-agency/', meta: 'HubSpot services' },
        { icon: 'pound', title: 'Every price is on the page', text: 'The audit, the pilot, the builds and the monthly support are all published, with what each includes. You can work out whether we fit your budget before a first call, not after a proposal.', href: S.PRICING_URL, meta: 'See pricing' },
      ],
    },
    {
      type: 'stats', tone: 'deep', kicker: 'In numbers', h2: 'What the work looks like.',
      items: [
        { n: '8', count: 8, suffix: ' wks', label: 'from an empty repository to a live, paying AI platform' },
        { n: '28%', count: 28, suffix: '%', label: 'more leads for Mintec, with £1.5M in deals attributed in nine months' },
        { n: '5', count: 5, label: 'messaging channels handled by one agent, in one inbox' },
        { n: '10+', count: 10, suffix: '+', label: 'years of HubSpot and RevOps work underneath the AI' },
      ],
    },
    {
      type: 'cases', kicker: 'Our work', h2: 'Different industries. Different CRMs. Same method.',
      items: [
        { href: '/work/leadsignal/', kicker: 'AI platform build', title: 'LeadSignal', result: '8 weeks to a live, paying platform', text: 'A multi-tenant AI setter for Instagram, Facebook, WhatsApp and SMS, with an approved Meta app, scoring, booking and billing. Built with the method we sell, and run every day.' },
        { href: S.WORK_URL, kicker: 'Financial services', title: 'TLPI', result: 'HubSpot, AI properties, one connected inbox', text: 'A pensions specialist with a long sales cycle. CRM rebuilt around how the team actually sells, with AI reading the inbox and filling the record.' },
        { href: S.WORK_URL, kicker: 'B2B data', title: 'Mintec', result: 'Leads up 28%, £1.5M attributed', text: 'HubSpot consultancy and automation, with the Salesforce integration issues resolved so the sales team worked from one connected record.' },
      ],
    },
    {
      type: 'quote', tone: 'wash',
      text: 'Revio took on our HubSpot consultancy and automation and resolved the Salesforce integration issues that had been holding the sales team back. Leads are up 28% and we have attributed £1.5M in deals to the programme within nine months.',
      who: 'Mintec', role: 'Client',
    },
    {
      type: 'pillars', kicker: 'By industry', h2: 'The same method, applied to your sector.',
      items: [
        { icon: 'health', title: 'Healthcare &amp; dental', text: 'Enquiries, bookings, recalls and treatment letters, with clinical decisions left where they belong.', links: [{ href: '/industries/healthcare-dental/', label: 'AI for clinics and dental practices' }, { href: '/industries/professional-services/', label: 'Professional services' }] },
        { icon: 'truck', title: 'Logistics &amp; transport', text: 'Quotes from emails, PODs read, drivers and customers kept informed.', links: [{ href: '/industries/logistics-transport/', label: 'AI for logistics and haulage' }, { href: '/industries/ecommerce-retail/', label: 'Ecommerce and retail' }] },
        { icon: 'bank', title: 'Financial services', text: 'Onboarding documents, fact-find summaries, meeting notes into the CRM, Consumer Duty evidence.', links: [{ href: '/industries/financial-services/', label: 'AI for advisers and accountants' }, { href: '/industries/recruitment/', label: 'Recruitment' }] },
        { icon: 'people', title: 'Owner-managed SMEs', text: 'Missed enquiries, quoting, admin, chasing. The audit first, then the one thing that pays.', links: [{ href: '/industries/smes/', label: 'AI for small businesses' }, { href: S.INDUSTRIES_URL, label: 'All industries' }] },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'What people ask first.',
      items: [
        { q: 'We are not sure AI is right for us at all.', a: 'Good. That is what the audit is for, and it is the smallest, quickest way to find out. A fair number end with "automate two things and leave the rest alone", which is a real answer, and you get it in writing.' },
        { q: 'Do we have to replace our CRM?', a: 'No. The system is built around your process, not around a vendor. We know HubSpot best and will say so, but it has never been a condition of working with us.' },
        { q: 'How quickly does something actually run?', a: 'Two weeks for the audit, then typically two to six for the first working version, depending on what the data turns up. You see it running on your own records, supervised, before it is allowed to act on its own.' },
        { q: 'What happens to our data?', a: 'It stays yours, in your systems, and we write down what the AI is allowed to see and do before anything is switched on. That document is part of the build, not an afterthought.' },
        { q: 'What does it cost?', a: 'Every price is on the pricing page. The audit is ' + P.audit + ', builds start at ' + P.build_from + ', and Run, the optional support after a build, is ' + P.run + ' a month. Nothing is quoted from a menu you cannot see.' },
        { q: 'Can we stop?', a: 'Yes. The audit is a fixed piece of work with no obligation, and the monthly is reviewed quarterly rather than locked. The configuration is documented as we build it, so leaving is possible rather than theoretical.' },
      ],
    },
    {
      type: 'cta', h2: 'Start where everything else starts.',
      text: 'Two weeks, ' + P.audit.toLowerCase() + ', and a written answer on whether this is worth building for you at all.',
      ctas: [{ label: 'Book an AI Opportunity Audit', href: S.AUDIT_URL, style: 'mint' }, { label: 'Book a meeting first', href: S.BOOK_URL, style: 'ghost' }],
    },
  ],
};
