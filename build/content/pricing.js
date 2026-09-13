const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'pricing',
  title: 'AI Consultancy Pricing UK: Every Price Published | Revio',
  description: 'Every Revio price on one page: AI audit from £1,500, Embedded AI Lead from £3,500 a month, builds from £4,500, training from £700. Fixed fees, no day rate.',
  keywords: ['ai consultancy pricing uk', 'ai consultant cost uk', 'fractional ai lead cost', 'ai implementation cost uk', 'how much does ai consultancy cost'],
  crumbLabel: 'Pricing',
  art: 'calc',
  badge: 'Pricing',
  h1: 'Every number we charge, <em class="mint">on one page</em>.',
  sub: 'Most firms in this market make you sit through a discovery call to learn whether you can afford them. Here is the whole ladder, including the numbers that make us look expensive. Prices exclude VAT. There is no second price list.',
  ctas: [
    { label: 'Work out your return first', href: S.CALC_URL, style: 'mint' },
    { label: 'Start with the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['Fixed fees wherever scope can be defined', 'No day rate', 'Audit fee credited against a build'],
  sections: [
    {
      type: 'tiers', kicker: 'The ladder', h2: 'Three ways in, and you can stop after any of them.',
      lede: 'Most people start at the top and work down. Nobody is asked to buy the bottom rung on a first call.',
      items: [
        { name: 'AI Opportunity Audit', price: P.audit, per: 'fixed', cadence: 'Two weeks', text: 'Where AI genuinely pays in your business, ranked, with the cost and payback of each item. Yours to keep, and to take elsewhere.', includes: ['Process map of where the time goes', 'Ranked opportunity list with pounds against each', 'Data-readiness read on your CRM', 'Where AI is the wrong answer for you', '90-minute session to decide what happens next', 'Fee credited against a build or first month of a lead'], best: 'anyone who has not yet had this mapped', featured: true, flag: 'Start here', href: S.AUDIT_URL, cta: 'See what is in it' },
        { name: 'Embedded AI Lead', price: P.lead_1, per: 'a month', cadence: 'One, two or three days a week', text: 'A senior AI lead inside your team. One backlog, the work delivered, your people trained as each piece lands.', includes: ['Advisor: one day a week, ' + P.lead_1, 'Operating Lead: two days, ' + P.lead_2, 'Embedded Head of AI: three days, ' + P.lead_3, 'Three-month initial term, then rolling', 'Quarterly review, no lock-in'], best: '£2m to £50m businesses without an AI owner', href: S.LEAD_URL, cta: 'Compare the tiers' },
        { name: 'AI Build & Implementation', price: P.build_from, per: 'fixed', cadence: 'Fixed price, fixed date', text: 'A defined system built against your live CRM, supervised before it acts alone, with monitoring that tells us when a seam comes apart.', includes: ['One tool or one agent: ' + P.build_from + ', about a week', 'Connected app: ' + P.build_mid + ', two to three weeks', 'Platform: ' + P.build_big + ', four to six weeks', 'Scoping half-day ' + P.scoping + ' where needed', 'Code and accounts in your name from day one'], best: 'a process you already know you want automated', href: '/ai-implementation/', cta: 'How builds are priced' },
      ],
      note: 'Payment on fixed-fee work is 30% at kick-off, 40% at the mid-point and 30% on delivery, on 14-day terms. Monthly work is invoiced in advance.',
    },
    {
      type: 'table', tone: 'wash', kicker: 'Specialist work', h2: 'The smaller, defined pieces.',
      lede: 'Each is a product with a scope and a number, so it can be bought without a proposal.',
      head: ['Service', 'Price', 'Takes', 'What you get'],
      rows: [
        ['<a href="/ai-app-diagnostic-audit/">AI App Diagnostic Audit</a>', P.diagnostic, '3 – 5 days', 'A written verdict on an app built with Lovable, Bolt, Replit or Cursor: fix, refactor or rebuild. Credited against a rescue.'],
        ['<a href="/ai-chatbot/">AI chatbot</a>', P.chatbot, '1 – 3 weeks', 'Configured on your own material, hands to a human, writes to the CRM. Custom and multi-channel tiers above.'],
        ['<a href="/voice-ai/">Voice AI</a>', P.voice, '2 – 4 weeks', 'Inbound answering, out-of-hours, booking and call notes into the CRM.'],
        ['<a href="/private-ai/">Private AI deployment</a>', P.private_ai, '2 – 4 weeks', 'Models in your own tenant or on your own hardware, for work that must not leave the building. Hosting in your name.'],
        ['<a href="/ai-governance-compliance/">Governance & compliance pack</a>', P.governance, '2 weeks', 'AI register, policy, data-flow map, UK GDPR and EU AI Act readiness. Cheaper alongside a build.'],
        ['<a href="/legacy-modernisation/">Legacy modernisation discovery</a>', P.legacy_discovery, '2 weeks', 'What replaces the Access database or the spreadsheet operation, and what it costs. Credited against the build.'],
        ['<a href="/hubspot-agency/">Data configuration</a>', P.data, 'Quoted after a look inside', 'Dedupe rules, field mapping, ownership and attribution. Fixed once we have seen your CRM, never before.'],
      ],
    },
    {
      type: 'tiers', kicker: 'People', h2: 'Training, and keeping things running.',
      items: [
        { name: 'Training session', price: P.training_day, per: 'a day', cadence: 'Half day ' + P.training_half, text: 'Built on your own work, recorded so new starters inherit it, with written follow-up.', includes: ['Department-specific, on your documents', 'Recorded and transcribed', 'Prompt library left behind', 'Written follow-up within 48 hours'], href: '/ai-enablement/', cta: 'See the programme' },
        { name: 'Adoption programme', price: P.programme, per: 'a month', cadence: 'Three months minimum', text: 'Monthly sessions, workflow rebuilds and adoption measured at 30, 60 and 90 days, because most one-off training is gone in a month.', includes: ['Monthly working session per team', 'Usage measured, not licences', 'Playbooks per department', 'Office hours between sessions'], featured: true, flag: 'What actually sticks', href: '/ai-enablement/', cta: 'How it works' },
        { name: 'Run: support & iteration', price: P.run, per: 'a month', cadence: 'Optional, never a condition of a build', text: 'Keeping what we built connected as the products underneath it change, watched, and improved with the numbers reviewed with you.', includes: ['Monitoring and alerts', 'Vendor changes absorbed', 'Monthly review of the numbers', 'Small changes included'], href: S.CONTACT_URL, cta: 'Ask about Run' },
      ],
    },
    {
      type: 'intro', tone: 'wash', kicker: 'What is not on this page', h2: 'There is no day rate here on purpose.',
      body: [
        'Selling days encourages both sides to care about the wrong thing. Everything above is priced against a piece of work or a month of capacity, so the incentive is to finish rather than to fill a timesheet. Where scope is genuinely uncertain we say so and price a short discovery instead.',
        'Tooling is carried on our invoice where the system needs products we have chosen, so there is one number to budget rather than a spreadsheet of subscriptions. On exit, the licences transfer into your name rather than switching off. We never take a cut of a subscription, which means you can leave and the machine keeps running.',
      ],
    },
    {
      type: 'table', kicker: 'Where this sits', h2: 'Three kinds of firm sell AI work in the UK.',
      head: ['', 'Revio', 'Tier-one consultancy', 'Freelancer'],
      rows: [
        ['Typical engagement', '£1,500 – £60,000, or £3,500 – £9,500 a month', '£150,000 minimum', '£5,000 – £30,000'],
        ['Who does the work', 'The senior person you met', 'A rotating team, partner occasionally', 'The freelancer'],
        ['Builds and runs its own AI product', 'Yes', 'No', 'Rarely'],
        ['Published prices', 'All of them', 'None', 'Sometimes'],
        ['CRM depth', 'A decade of HubSpot and RevOps', 'Yes, at length', 'Varies'],
        ['Governance', 'Included in every build', 'Strong, and slow', 'Weak'],
        ['Best when', 'You want something running in weeks', 'A board needs a big name on the report', 'One narrow, well-specified job'],
      ],
    },
    {
      type: 'steps', kicker: 'Which line are you on?', h2: 'A short decision tree.', narrow: true,
      items: [
        { title: 'Not sure where AI would pay', text: 'The audit. Two weeks, ' + P.audit + ', and a written answer. If it says "automate two things and leave the rest alone", that is a real answer and you got it for the price of a laptop.' },
        { title: 'You know the process, you want it built', text: 'A build. Fixed price by size, ' + P.build_from + ' to ' + P.build_big + '. A ' + P.scoping + ' scoping half-day first if the shape is not yet written down.' },
        { title: 'Several things, no internal owner', text: 'An Embedded AI Lead. One to three days a week, ' + P.lead_1 + ' to ' + P.lead_3 + ' a month, the backlog owned and the work delivered.' },
        { title: 'Something narrower', text: 'One of the specialist products above, each with its own scope and number.' },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before booking.',
      items: [
        { q: 'Why publish prices when most UK AI consultancies do not?', a: 'Because you are trying to work out whether you can afford this, and making that take three calls wastes your time and ours. Opacity favours the seller. Publishing forces us to keep scope disciplined, and it means the number you see is the number you pay.' },
        { q: 'What does "from" mean in practice?', a: 'The minimum-scope version: one process, the standard tool stack, no regulated-data overlay, your existing CRM. Most engagements land at or near the "from" figure. When one will not, we say so before you commit, with the reason in writing.' },
        { q: 'Are these prices inclusive of VAT?', a: 'No. UK VAT is added at the prevailing rate, 20% at the time of writing. Eligible non-UK businesses are reverse-charged.' },
        { q: 'Is the audit really credited against later work?', a: 'Yes. The full audit fee comes off a build or the first month of an Embedded AI Lead commissioned within 90 days. The audit stands on its own whatever you decide.' },
        { q: 'How does payment work?', a: 'Fixed-fee work is 30% at kick-off, 40% at the agreed mid-point and 30% on delivery, on 14-day terms by bank transfer, or by card for work under £5,000. Monthly work is invoiced in advance and reviewed quarterly.' },
        { q: 'Is there a discount for a longer commitment?', a: 'No. A discount for a longer lock-in is a charge for the right to leave, dressed up. The monthly is reviewed quarterly at the same rate.' },
        { q: 'What about the tools we will have to buy?', a: 'Where the system needs products, we choose, buy and maintain them and carry them on our invoice with a margin. You can see what they are, and they transfer to you if you leave. Where you already have the tools, there is nothing to add.' },
        { q: 'Do you offer revenue-share or success fees?', a: 'Occasionally, where there is a clean number to measure against, such as booked calls from a customer-facing agent. It is usually a lower fixed fee with a defined kicker. Ask, and we will tell you whether your case is one of them.' },
        { q: 'Do you work with businesses smaller than this?', a: 'Sometimes, and sometimes the honest answer is that the audit alone is enough and you should go and do the two things it tells you. We will say so.' },
      ],
    },
    {
      type: 'related', kicker: 'Before you decide', h2: 'Three things worth reading first.',
      items: [
        { href: S.CALC_URL, icon: 'pound', title: 'AI ROI calculator', text: 'Put your own numbers in and see what the ladder looks like against your return.', meta: 'Two minutes' },
        { href: S.AUDIT_URL, icon: 'audit', title: 'What is in the audit', text: 'The two weeks, day by day, and what you get at the end of them.', meta: P.audit },
        { href: S.WORK_URL, icon: 'brief', title: 'Our work', text: 'Case studies, including the AI platform we built and run ourselves.', meta: 'Proof' },
      ],
    },
    {
      type: 'cta', h2: 'Start with the cheapest thing on the page.',
      text: 'Two weeks, from £1,500, and a written answer on whether any of the rest is worth it.',
      ctas: [{ label: 'Book the audit', href: S.AUDIT_URL, style: 'mint' }, { label: 'Talk to us first', href: S.BOOK_URL, style: 'ghost' }],
    },
  ],
};
