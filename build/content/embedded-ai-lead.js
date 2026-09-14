const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'embedded-ai-lead',
  title: 'Embedded AI Lead: Fractional AI Leadership for UK SMEs | Revio',
  description: 'A senior AI lead inside your business each week: one prioritised backlog, automations built, your team trained as each lands. From £3,500 a month, no long lock-in.',
  keywords: ['embedded ai lead', 'fractional ai lead', 'fractional chief ai officer uk', 'fractional caio', 'ai lead for smes', 'part time head of ai'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'Embedded AI Lead',
  art: 'lead',
  badge: 'Embedded AI Lead',
  h1: 'A senior AI lead inside your team, <em class="mint">without hiring one</em>.',
  sub: 'One named person, one prioritised backlog, and the work actually done. We sit inside your business for a fixed number of days each month, build the automations that pay, and train your people as each one lands. From £3,500 a month, reviewed quarterly, never locked in.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the three tiers', href: '#tiers', style: 'ghost' },
  ],
  heroProof: ['Named lead, not a rotating bench', 'Every deliverable documented and handed over', 'Quarterly review, no twelve-month lock-in'],
  service: { name: 'Embedded AI Lead', type: 'Fractional AI leadership', price: P.lead_1_num },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'You have the tools, three half-finished experiments, and nobody whose job it is.',
      body: [
        'Most businesses we meet are not short of AI ideas. They are short of an owner. Somebody in marketing tried ChatGPT for proposals, somebody in ops built a Zapier chain that broke in May, and the board has asked twice what the plan is. Hiring a Head of AI costs north of £120,000 a year plus on-costs, for a role nobody can yet write a job description for.',
        'An Embedded AI Lead is the middle path. A senior person who has built and run AI systems in production joins your team for one, two or three days a week. They own the backlog, do the work, and leave documentation behind, so what gets built keeps running after they step back.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What you get', h2: 'The decisions and the delivery, from the same person.',
      lede: 'Advice without hands is a report. Hands without judgement is a contractor. This is both.',
      items: [
        { icon: 'target', title: 'One prioritised backlog', text: 'Every AI idea in the business lands on one list, scored by impact and effort, in an order you can defend to a board. You always know what is next and why.' },
        { icon: 'build', title: 'Automations built, not proposed', text: 'The lead builds. Document intelligence, CRM wiring, inbox triage, quoting, reporting, agents that answer and qualify. Working software on your own data, not a slide about it.' },
        { icon: 'people', title: 'Your team trained as it lands', text: 'Each automation ships with a short session for the people who will use it and a written runbook. Adoption is measured at 30, 60 and 90 days, because licences are not usage.' },
        { icon: 'shield', title: 'Governance you can run', text: 'What the AI may see, do and say is written down before it is switched on. Data flows, vendor register, disclosure rules and an audit trail, in a form your own team can maintain.' },
        { icon: 'chart', title: 'A number every month', text: 'Hours returned, replies answered, leads booked, days off debtor cycles. One page, reviewed with you rather than emailed at you.' },
        { icon: 'doc', title: 'A planned handover', text: 'The engagement is designed to end. Documentation, credentials in your name, and a trained internal owner, so leaving is a decision rather than a risk.' },
      ],
    },
    {
      type: 'tiers', kicker: 'Three tiers', h2: 'Priced by days in the business, published in full.',
      lede: 'Every price on this page excludes VAT. There is no second price list.',
      items: [
        { name: 'Advisor', price: P.lead_1, per: 'a month', cadence: 'One day a week', text: 'For businesses under about £5m turnover with one or two processes worth automating and no internal owner.', includes: ['Backlog owned and reviewed monthly', 'One automation in build at a time', 'Monthly leadership session', 'Written governance basics', 'Team training as each build lands'], best: 'owner-led SMEs with a clear first project', href: S.BOOK_URL, cta: 'Talk about Advisor' },
        { name: 'Operating Lead', price: P.lead_2, per: 'a month', cadence: 'Two days a week', text: 'For £5m to £25m businesses with several departments and a CRM that has to be at the centre of it.', includes: ['Everything in Advisor', 'Two builds running in parallel', 'CRM and data work included', 'Fortnightly working sessions with department heads', 'Vendor and licence management', 'Quarterly board report'], best: 'multi-department businesses where the CRM is the spine', featured: true, flag: 'Most chosen', href: S.BOOK_URL, cta: 'Talk about Operating Lead' },
        { name: 'Embedded Head of AI', price: P.lead_3, per: 'a month', cadence: 'Three days a week', text: 'For £25m plus, regulated, or multi-site businesses that need the role filled properly while they decide whether to hire.', includes: ['Everything in Operating Lead', 'On-site days by agreement', 'Full AI register and policy set', 'Recruitment support for a permanent hire', 'Named deputy for continuity', 'Monthly board attendance'], best: 'businesses filling the seat before a permanent hire', href: S.BOOK_URL, cta: 'Talk about Embedded' },
      ],
      note: 'Three-month initial term, then rolling monthly with a quarterly review. Tooling is carried on our invoice where the system needs products we have chosen, and every licence transfers to your name on exit.',
    },
    {
      type: 'table', tone: 'wash', kicker: 'Compared with the alternatives', h2: 'What this costs against the other ways of filling the role.',
      head: ['', 'Embedded AI Lead', 'Permanent Head of AI', 'Big consultancy', 'Freelancer'],
      rows: [
        ['Annual cost', '£42,000 – £114,000', '£150,000 – £220,000 with on-costs', '£150,000 minimum engagement', '£40,000 – £90,000'],
        ['Time to start', 'Two weeks', 'Four to six months', 'Six to ten weeks', 'Days'],
        ['Builds the thing', 'Yes, that is the job', 'Usually manages others who do', 'Rarely at senior level', 'Yes, within one discipline'],
        ['Owns governance', 'Yes', 'Yes', 'Yes, at length', 'Rarely'],
        ['Continuity', 'Named deputy, documented', 'Leaves when they leave', 'Team rotates', 'None'],
        ['Can stop', 'Quarterly', 'Notice period plus severance', 'Contracted phases', 'Immediately'],
      ],
      note: 'Salary figures are 2026 UK market ranges for a Head of AI in a mid-sized business. The consultancy figure is the entry point quoted by tier-one firms for an AI programme.',
    },
    {
      type: 'steps', kicker: 'How it starts', h2: 'Four weeks from first call to first thing running.',
      items: [
        { title: 'A call, not a pitch', text: 'Thirty minutes on what the business does, where the time goes, and what has already been tried. If this is not the right shape for you, we say so on the call.', meta: 'Week 0' },
        { title: 'The audit, if you need it', text: 'If nobody has yet mapped where AI pays in your business, the two-week AI Opportunity Audit does that first and its fee comes off the first month. If you already know, skip it.', meta: 'Weeks 1–2, optional' },
        { title: 'Stabilise', text: 'First fortnight inside: the AI register, the policy, the vendor list, and the backlog scored and ordered. Nothing new gets built until the existing experiments are either finished or switched off.', meta: 'Weeks 1–2' },
        { title: 'Build in fortnights', text: 'One automation at a time, shipped on your real data, supervised before it is allowed to act alone, and trained into the team the week it lands. Then the next one.', meta: 'Week 3 onward' },
      ],
    },
    {
      type: 'split', tone: 'wash', art: 'pipeline', kicker: 'What gets built', h2: 'The work is usually less glamorous than the demos, and worth more.',
      body: ['The backlog in a typical first six months looks like this: inbox and enquiry triage into the CRM, quote and proposal drafting from your own past work, document extraction from invoices, contracts or applications, a customer-facing agent that answers and books, and reporting that a director can read on a Monday.'],
      bullets: ['Enquiry handling that answers, qualifies and books in your voice', 'Documents read and keyed into the systems that need them', 'Quotes and proposals drafted from precedent, checked by a human', 'CRM hygiene, ownership and attribution fixed so the rest can work', 'Weekly reporting produced rather than assembled'],
      ctas: [{ label: 'See what we have built before', href: S.WORK_URL, style: 'dark' }],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and who it is not.',
      yes: { title: 'A good fit', items: ['UK businesses from about £2m to £50m turnover', 'A CRM already in place, however untidy', 'A director who will spend an hour a fortnight on it', 'Two or more processes that eat skilled people’s time', 'A board asking for an AI plan with numbers in it'] },
      no: { title: 'Not this, yet', items: ['You want a one-off workshop rather than an owner', 'Nobody internally can give the lead access to systems', 'The first job is “replace the CRM”', 'You are under about £1m turnover, where the audit alone is usually the right spend'] },
    },
    {
      type: 'quote', tone: 'wash',
      text: 'We built and run our own AI platform, and the reason it is still running a year on is not the model. It is the wiring, the monitoring, and somebody whose job it is to notice. That is what an Embedded AI Lead brings into your business.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'Is this a fractional Chief AI Officer?', a: 'In substance, yes. We call it an Embedded AI Lead because the title matters less than the fact that the person builds as well as advises. If your board wants the CAIO title on the org chart for the duration, that is fine with us.' },
        { q: 'How are priorities decided?', a: 'Every candidate item is scored on impact in pounds or hours, effort in days, and risk. The lead proposes the order, you approve it, and it is revisited monthly. Nothing is built that was not on the agreed list.' },
        { q: 'What if our priorities change mid-engagement?', a: 'They will. The backlog is re-scored, the item in build is finished or parked with its notes, and the new priority goes to the top. Capacity is fixed per month; what fills it is yours to direct.' },
        { q: 'Does the monthly fee include building things?', a: 'Yes. The days are delivery days. What is not included is third-party tooling and any large fixed-scope build that would swamp the monthly capacity, which we would quote separately as an AI Build so you can see the number.' },
        { q: 'Can we cancel?', a: 'The initial term is three months, then it is rolling monthly with a review each quarter. Everything is documented as it is built and every licence is in your name, so stopping is a decision rather than a risk.' },
        { q: 'Who is the lead?', a: 'A senior consultant leads each engagement personally, with a named deputy for continuity on the two larger tiers. We do not run a bench of associates, which is why we take on a small number of these at a time.' },
        { q: 'How does this handle UK GDPR and the EU AI Act?', a: 'The first fortnight produces an AI register, a data-flow map and a written policy on what each system may see and do. Where a system talks to the public, disclosure rules are built in. If you sell into the EU, the AI Act obligations are mapped in the same document.' },
        { q: 'We already have a CTO or an IT provider.', a: 'Good. The lead works alongside them and never around them. Infrastructure, security and access stay with whoever owns them today; the lead owns the AI backlog and its delivery.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your business. Its fee comes off the first month of an Embedded AI Lead.', meta: P.audit },
        { href: '/ai-implementation/', icon: 'build', title: 'AI Build & Implementation', text: 'A defined system built to a fixed price and date, when you already know exactly what you want.', meta: P.build_from },
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'The register, the policy and the audit trail, as a standalone piece of work.', meta: P.governance },
      ],
    },
    {
      type: 'cta', h2: 'Fill the seat for three months and see what ships.',
      text: 'A 30-minute call to find out whether this is the right shape for your business. If it is not, we will tell you which of the smaller pieces of work is.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
