const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-strategy',
  title: 'AI Strategy Consulting UK for SMEs & Mid-Market | Revio',
  description: 'AI strategy consulting for UK SMEs and mid-market firms: a one-page plan naming the first three things to build, with costs. From £1,500 through the audit.',
  keywords: ['ai strategy consulting uk', 'ai strategy for smes', 'ai roadmap consultancy', 'ai consultancy uk', 'ai strategy consultant'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'AI Strategy',
  art: 'layers',
  badge: 'AI Strategy',
  h1: 'A one-page AI strategy that names the <em class="mint">first three things to build</em>.',
  sub: 'Not a sixty-page deck. A short document that says what this business should build, in what order, what each costs, who owns it and how you will know it worked. It comes out of the two-week audit from £1,500, or it comes with an Embedded AI Lead.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the audit it comes from', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['One page the board can actually read', 'Every item costed and sequenced', 'Delivered through the audit or the Embedded AI Lead, not as a standalone deck'],
  heroNote: 'We do not sell a strategy day that ends in a document nobody owns.',
  service: { name: 'AI Strategy', type: 'AI strategy consulting', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'Most AI strategies are long, expensive and impossible to act on.',
      body: [
        'The pattern is familiar. A firm is engaged, six weeks pass, and a deck arrives with a maturity model, a landscape of vendors, three horizons and a change-management workstream. It is not wrong. It is just not actionable by a business of eighty people with a CRM, a busy operations team and no internal AI owner. Nobody can start anything on Monday from it, so nothing starts, and a year later the board asks the same question again.',
        'A strategy is only worth what it causes to happen. Ours is short on purpose: the first three things to build, in order, with a price and a payback against each, the data and governance work that has to happen alongside them, and the name of the person accountable for each one. If it runs past two pages we have usually failed to make a decision somewhere.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What the document contains', h2: 'Six things, and nothing that is only there for the page count.',
      items: [
        { icon: 'target', title: 'The first three builds, in order', text: 'Named processes, not themes. Why this one is first, what it returns in hours or pounds, and what has to be true before the second one starts. The order is defended, so you can defend it too.' },
        { icon: 'pound', title: 'The cost of each, and the payback', text: 'A build price, a monthly running cost and a realistic payback window against every item, using the same published prices as the rest of this site. No indicative ranges that double at contract.' },
        { icon: 'cross', title: 'What we are not doing this year', text: 'The ideas that were considered and dropped, with the reason. This is the half that stops the same proposal coming back through a different department in March.' },
        { icon: 'data', title: 'The data work that has to happen', text: 'What state the records are in, what must be cleaned or restructured before item one can work, and what that costs. Strategies that skip this are the ones that stall in month three.' },
        { icon: 'shield', title: 'Governance and the rules', text: 'What the business will and will not let AI see, do and say, who signs off, what gets disclosed, and where UK GDPR and the EU AI Act actually bite for your sector. Two pages, not a policy library.' },
        { icon: 'people', title: 'Owners and how success is measured', text: 'A named internal owner per item and the number that will be looked at in ninety days. A strategy with no owner is a wish list with better formatting.' },
      ],
    },
    {
      type: 'split', art: 'network', kicker: 'How it gets delivered', h2: 'Strategy is an output of doing the work, not a separate purchase.',
      body: [
        'There are two honest routes to this document, and both of them involve somebody looking at your systems rather than interviewing you about them.',
        'The usual route is the AI Opportunity Audit. Two weeks, ' + P.audit + ', interviews with the people who do the work, read-only access to the CRM, and a ranked and costed list at the end of it. The strategy is the front page of that document. The second route is the Embedded AI Lead, where the strategy is written in the first fortnight inside the business and then revised every month as things actually ship, which is the version that survives contact with reality.',
      ],
      bullets: [
        'Through the audit: two weeks, ' + P.audit + ', fee credited against whatever you build',
        'Through an Embedded AI Lead: written in the first fortnight, revised monthly, from ' + P.lead_1 + ' a month',
        'Either way it is based on your systems and numbers, not a sector benchmark',
        'Either way you own the document and can hand it to another supplier',
      ],
      ctas: [{ label: 'See the audit', href: S.AUDIT_URL, style: 'dark' }],
    },
    {
      type: 'table', tone: 'wash', kicker: 'The three ways to get one', h2: 'Big consultancy, Revio, or doing it in-house.',
      head: ['', 'Big consultancy', 'Revio', 'In-house'],
      rows: [
        ['Typical cost', '£150,000 minimum engagement', P.audit + ' through the audit, or inside an Embedded AI Lead from ' + P.lead_1 + ' a month', 'Management time, which is rarely counted honestly'],
        ['Time to a decision', 'Six to ten weeks', 'Two weeks', 'Months, in gaps between other work'],
        ['What you receive', 'A large deck, a maturity model and a workstream plan', 'One or two pages: three builds, costed, sequenced, owned', 'Usually a spreadsheet of tools and a stalled debate'],
        ['Who writes it', 'A team that rotates, often led by someone junior', 'The people who would then build it', 'Whoever has the most enthusiasm, not always the most context'],
        ['Prices in it', 'Indicative, firmed up at contract', 'The published prices on this site', 'Vendor list pricing, before integration work'],
        ['Can it be acted on next week', 'After a mobilisation phase', 'Yes, item one is already scoped', 'If somebody is given the time, which is the usual blocker'],
        ['Independence', 'Often tied to platform partnerships', 'Tooling chosen per job, licences in your name', 'Fully independent, less benchmarked'],
      ],
      note: 'The consultancy figure is the entry point quoted by tier-one firms for an AI programme. We are not the right answer for a FTSE 250 transformation programme, and we say so when that is what is needed.',
    },
    {
      type: 'steps', kicker: 'The order of operations', h2: 'What a sensible first year looks like.',
      lede: 'The sequence matters more than the ambition. Nearly every failed AI programme we are asked to rescue did these in the wrong order.',
      items: [
        { title: 'Decide where it pays', text: 'Two weeks to rank the opportunities against real numbers, name the ones that are not worth doing, and read the state of the data. Everything else waits for this.', meta: 'Weeks 1–2' },
        { title: 'Fix what would poison the first build', text: 'Duplicate records, missing ownership, a lifecycle nobody maintains. Usually a fortnight of unglamorous work, and the difference between a build that is trusted and one that is quietly bypassed.', meta: 'Weeks 3–4' },
        { title: 'Build one internal thing', text: 'Something with low reputational risk and a measurable saving. Document reading, enquiry triage, quote drafting. It earns the internal trust that everything after it depends on.', meta: 'Weeks 5–8' },
        { title: 'Measure it in front of people', text: 'Hours returned, error rate, what the team says. One page, reviewed with the department that uses it. This is the moment the programme either gets funded or gets forgotten.', meta: 'Weeks 9–12' },
        { title: 'Then let it face customers', text: 'Only once the internal work is trusted does an agent get to answer, qualify or book. By then the guardrails, the handback rules and the monitoring already exist, because you built them on something safer.', meta: 'Quarter two' },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'When you need a strategy, and when you need to stop planning.',
      yes: {
        title: 'Worth doing the strategy first',
        items: [
          'Several departments each have an AI idea and nobody can rank them',
          'A board or an investor has asked for a plan with numbers in it',
          'Budget exists for the year but not the order it should be spent in',
          'Two suppliers have quoted for very different things and both sound plausible',
          'A regulated sector where governance has to be settled before anything ships',
        ],
      },
      no: {
        title: 'Skip it and go and build',
        items: [
          'You already know the one process that costs you the most time',
          'The first build is small enough that a scoping session at ' + P.scoping + ' answers everything',
          'You have had two strategy documents already and neither caused anything to happen',
          'The honest blocker is that nobody has been given ownership, which no document fixes',
        ],
      },
    },
    {
      type: 'quote',
      text: 'If a strategy cannot be read in ten minutes and started in a week, it is not a strategy. It is a way of postponing the decision until somebody else is in the chair.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask about AI strategy work.',
      items: [
        { q: 'What does an AI strategy cost with you?', a: 'It is ' + P.audit + ' when it comes through the two-week AI Opportunity Audit, and that fee is credited against whatever you build afterwards. Inside an Embedded AI Lead it is included, written in the first fortnight and revised monthly. We do not sell a standalone strategy day, because a document written without access to your systems is guesswork.' },
        { q: 'Why will you not just run a strategy workshop?', a: 'Because workshops surface opinions, and opinions are not evidence. The useful findings come from counting records, following an enquiry end to end and talking to the people who do the work rather than the people who describe it. That takes two weeks, and it is why the audit exists in the shape it does.' },
        { q: 'How long is the document?', a: 'One or two pages for the strategy itself, with the working behind it in the appendices: the ranked opportunity list, the costings, the data read and the governance notes. The front page is what goes to the board. If we cannot fit the decisions on it, we have not finished deciding.' },
        { q: 'Does it cover the EU AI Act and UK GDPR?', a: 'Yes, at the level a business of this size needs. What data each system may see, what has to be disclosed to customers, what goes in an AI register, who signs off a new use, and which of your intended uses would carry higher obligations if you sell into the EU. A full conformity assessment is separate work.' },
        { q: 'Can we use the strategy with a different supplier?', a: 'Yes, and it is written so you can. It names processes, costs and sequence rather than proprietary method, and every price in it is published on this site so another supplier can be measured against it. Plenty of clients take item one to an internal team.' },
        { q: 'How often should it be revisited?', a: 'Quarterly for the order of work, annually for the shape. Model capability and pricing move fast enough that an eighteen-month roadmap with fixed technology choices is fiction. What stays stable is the list of processes that cost you money, which is why we anchor the plan there.' },
        { q: 'We are a small business. Is this overkill?', a: 'Under about £1m of turnover it usually is. At that size the right spend is normally one small build on the single process that eats the most time. We will say so on the call rather than sell a planning exercise to a business with one obvious answer.' },
        { q: 'Who writes it?', a: 'The senior consultant who would build the work, with the same team behind them. That is the point: the person recommending the sequence has to live with it, quote it at a fixed price and deliver it on the date they gave you.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'How the strategy gets delivered.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'The two-week assessment the strategy comes out of. Ranked, costed, and the fee credited against your first build.', meta: P.audit },
        { href: S.LEAD_URL, icon: 'lead', title: 'Embedded AI Lead', text: 'A senior AI lead inside the business one to three days a week, owning the plan and doing the work in it.', meta: P.lead_1 },
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'The register, the policy and the audit trail, when governance is the part that has to be settled first.', meta: P.governance },
      ],
    },
    {
      type: 'cta', h2: 'Get the plan that names the first three things, not the sixty-page one.',
      text: 'Thirty minutes on the phone and we can usually tell you whether you need a strategy at all, or whether you already know the answer and should be scoping a build.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'See all prices', href: S.PRICING_URL, style: 'ghost' }],
      note: 'Strategy is ' + P.audit + ' through the audit, or included in an Embedded AI Lead from ' + P.lead_1 + ' a month. Prices exclude VAT.',
    },
  ],
};
