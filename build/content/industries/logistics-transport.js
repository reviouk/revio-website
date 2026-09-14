const S = require('../../site');
const P = S.PRICE;

module.exports = {
  slug: 'industries/logistics-transport',
  title: 'AI for Logistics, Haulage & Transport UK | Revio',
  description: 'AI for hauliers, couriers and freight forwarders: quoting from emails, POD extraction, driver comms and compliance paperwork. From £1,500 for the audit.',
  keywords: ['ai for logistics companies uk', 'ai for haulage', 'ai for removals companies', 'transport ai automation'],
  crumbs: [{ label: 'Industries', href: S.INDUSTRIES_URL }],
  crumbLabel: 'Logistics & Transport',
  art: 'pipeline',
  badge: 'Logistics & Transport',
  h1: 'AI for hauliers, couriers and freight forwarders, <em class="mint">built around the load, not the demo</em>.',
  sub: 'Quotes drafted from the email that just landed, proof of delivery read and filed automatically, drivers and customers updated without a phone call. From £1,500 for the two-week audit that finds the first process worth automating.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['Built around your TMS, not a replacement for it', 'Compliance paperwork drafted, never filed unchecked', 'Every price published, nothing hidden in a day rate'],
  service: { name: 'AI for Logistics & Transport', type: 'Industry page', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'Where this fits',
      h2: 'The paperwork moves as much as the freight.',
      body: [
        'A haulage firm, courier or freight forwarder runs on documents as much as on trucks: a quote request that arrives as a scruffy email, a proof of delivery photographed on a driver\'s phone, a customer asking where their load is, and a stack of compliance paperwork that has to be right every time. None of that requires a person to decide anything clever, it requires someone to read, extract and reply fast, which is exactly what AI does well. Quoting from emails, POD and document extraction, driver and customer comms, and compliance paperwork are the four jobs we build first in this sector.',
        'What we do not automate is the judgement calls: which carrier to use on a tight lane, whether to accept a load at a marginal rate, how to handle a damaged consignment. Those stay with your ops team. The AI\'s job is to get the paperwork off their desk fast enough that they have time to make those calls properly, rather than to make the calls for them.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Where AI pays', h2: 'Six places transport operators see it earn its keep.',
      lede: 'Not a platform. Each of these is a defined, working thing on your own systems.',
      items: [
        { icon: 'mail', title: 'Quoting from emails', text: 'A rate request lands as a free-text email, and a first-pass quote comes back in minutes, built from your rate card and past jobs, ready for a human to check before it is sent.' },
        { icon: 'doc', title: 'POD and document extraction', text: 'Proof of delivery, CMR notes and delivery photos read automatically and keyed into the job record, so nobody re-types a signature or a delivery time from a phone photo.' },
        { icon: 'chat', title: 'Driver communications', text: 'Drivers get their next job, a route change or a delay notice by message rather than a phone call mid-shift, and can reply with a status update the system reads and logs.' },
        { icon: 'phone', title: 'Customer status updates', text: 'A customer asking "where is my load" gets an answer from the live tracking and job data, not a call transferred round the office while someone finds the file.' },
        { icon: 'truck', title: 'Load planning support', text: 'A first-pass plan for which loads go together, drafted from capacity, postcode and time-window data, checked by the planner rather than built from a blank sheet.' },
        { icon: 'shield', title: 'Compliance paperwork', text: 'Driver hours records, vehicle checks and licence renewals drafted and flagged before they lapse, so compliance is chased automatically instead of discovered late.' },
      ],
    },
    {
      type: 'steps', kicker: 'First 90 days', h2: 'What actually happens if you start.',
      items: [
        { title: 'Audit the quote-to-invoice flow', text: 'Two weeks watching how a quote actually becomes a job, a POD and an invoice, ending in a ranked list of what to build first.', meta: 'Weeks 1–2' },
        { title: 'Build the first automation', text: 'Usually quoting or POD extraction, wired into the TMS or spreadsheet you already run, tested on real jobs before it goes live.', meta: 'Weeks 3–6' },
        { title: 'Supervised launch', text: 'A human checks every quote or extracted document for two to three weeks, so errors are caught before a customer or a driver sees one.', meta: 'Weeks 6–9' },
        { title: 'Hand to the team', text: 'Ops and admin staff trained on the exceptions it flags, a runbook left behind, and a second use case scoped once the first is paying for itself.', meta: 'Weeks 9–13' },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and where we say wait.',
      yes: { title: 'A good fit', items: ['Hauliers, couriers, removals firms and freight forwarders with steady volume', 'A TMS, spreadsheet or shared inbox already in use', 'Quotes or PODs that currently take a person real time each day', 'An ops team who will use what gets built, not just admire it'] },
      no: { title: 'Not this, yet', items: ['You want AI to decide carrier or rate strategy on its own', 'There is no digital record of jobs at all, everything is on paper', 'Volume is low enough that manual handling is genuinely faster', 'You need this live in days rather than weeks'] },
    },
    {
      type: 'table', tone: 'wash', kicker: 'What it costs', h2: 'A typical first project.',
      head: ['Use case', 'What it replaces', 'Typical build', 'Price from'],
      rows: [
        ['Quoting from emails', 'A planner drafting every rate quote by hand', 'One AI agent wired into your rate card and inbox', P.build_from],
        ['POD and document extraction', 'Admin staff re-keying delivery notes and photos', 'Document extraction tool tied to your TMS', P.build_from],
        ['Driver and customer comms', 'Phone calls chasing status both ways', 'A messaging agent connected to live job data', P.build_from],
        ['Compliance paperwork', 'A spreadsheet tracking hours and renewals by hand', 'Automated compliance tracking and drafting', P.data],
        ['Full quote-to-invoice system', 'Several of the above, wired together', 'A connected app across the job lifecycle', P.build_mid],
      ],
      note: 'All prices exclude VAT. The audit above is the usual first step and its fee comes off the first build.',
    },
    {
      type: 'quote', tone: 'wash',
      text: 'In this sector the win is never the flashy agent, it is the hour a planner gets back because the quote is already half-drafted and the POD is already filed. That is where we start every time.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions transport operators ask before they start.',
      items: [
        { q: 'Will this replace our TMS?', a: 'No. It sits alongside the system you already run, reading and writing into it. We do not propose ripping out a working TMS to install AI; the automation connects to it.' },
        { q: 'Can AI actually read a scanned POD or a driver photo?', a: 'Yes, document extraction from photographs, scans and PDFs is one of the most reliable uses of AI available today, and it is usually the fastest-paying automation we build in this sector.' },
        { q: 'What happens if the AI misreads a quote or a document?', a: 'Every draft is checked by a person before it goes to a customer or into a compliance record during the supervised launch period, and flagged exceptions route to a human by default even after that.' },
        { q: 'Do drivers need to learn a new app?', a: 'Usually not. Driver comms are built on the messaging channel they already use, WhatsApp or SMS most often, rather than a new piece of software to install.' },
        { q: 'How does this handle multiple depots or a mixed fleet?', a: 'The audit maps this specifically. Multi-site operations usually mean one automation built once and rolled out, with local rate cards or rules configured per depot.' },
        { q: 'What about driver hours and licence compliance?', a: 'The system drafts and flags, it does not decide compliance on your behalf. A named person still signs off every record; the automation just stops anything falling through unnoticed.' },
        { q: 'How fast could a first automation be live?', a: 'A first build, usually quoting or POD extraction, is typically live within six weeks of the audit finishing, running unsupervised within nine.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where to start.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your operation.', meta: P.audit },
        { href: '/ai-workflow-automation/', icon: 'flow', title: 'AI Workflow Automation', text: 'Quoting, POD extraction and compliance chasing, built and wired into your systems.', meta: P.build_from },
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'The register and policy a regulated operator needs before anything goes live.', meta: P.governance },
      ],
    },
    {
      type: 'cta', h2: 'Find the one process where AI pays in your operation.',
      text: 'A 30-minute call on how quotes, PODs and compliance actually flow today. If AI is not the right answer for one of them, we will say so.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
