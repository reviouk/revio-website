const S = require('../../site');
const P = S.PRICE;

module.exports = {
  slug: 'industries/recruitment',
  title: 'AI for Recruitment & Staffing Agencies UK | Revio',
  description: 'AI for recruitment and staffing agencies: CV parsing and matching, candidate screening, job-ad writing and CRM hygiene, with Equality Act care. From £1,500.',
  keywords: ['ai for recruitment agencies uk', 'recruitment automation ai', 'ai candidate screening uk'],
  crumbs: [{ label: 'Industries', href: S.INDUSTRIES_URL }],
  crumbLabel: 'Recruitment',
  art: 'chat',
  badge: 'Recruitment',
  h1: 'AI for recruitment agencies, <em class="mint">built so the shortlist stays fair</em>.',
  sub: 'CVs parsed and matched in seconds, candidates screened before a consultant\'s time is spent, job ads written from the brief, interviews scheduled without the back-and-forth. From £1,500 for the audit that finds the first process worth automating.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['Shortlisting logic checked against the Equality Act, not left to a model', 'A consultant decides who gets put forward, always', 'Every price published, nothing hidden in a day rate'],
  service: { name: 'AI for Recruitment', type: 'Industry page', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'Where this fits',
      h2: 'The placement is the job. The paperwork around it is not.',
      body: [
        'A recruitment or staffing agency\'s value is in the placement, the judgement about whether a candidate is right for a client. What surrounds that judgement is a lot of repetitive work: parsing hundreds of CVs against a spec, writing the same first-pass candidate message, drafting a job ad from a brief, chasing interview times across two diaries, and keeping a CRM clean enough to be useful. CV parsing and matching, candidate comms and screening, job-ad writing, interview scheduling and CRM hygiene are the five jobs AI does well here.',
        'Bias is the risk that has to be named up front. A model trained or prompted carelessly can quietly favour or exclude candidates in ways that would breach the Equality Act, so any screening or matching tool we build is scoped to surface candidates against the objective criteria in the brief, not to reject anyone outright, and a consultant makes the final call on every shortlist. We would rather turn down a build than ship something that automates a discrimination risk.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Where AI pays', h2: 'Six places agencies see it earn its keep.',
      lede: 'Not a platform. Each of these is a defined, working thing on your own systems.',
      items: [
        { icon: 'doc', title: 'CV parsing and matching', text: 'CVs read and matched against a live spec in seconds, ranked on the criteria the consultant sets, so the pile to review by hand shrinks to the candidates worth a look.' },
        { icon: 'chat', title: 'Candidate comms and screening', text: 'First-contact messages and screening questions sent and answered automatically, with the summary and any red flags handed to a consultant before a call is booked.' },
        { icon: 'brief', title: 'Job-ad writing', text: 'A job advert drafted from the brief and your past ads for similar roles, in your agency\'s voice, ready for a consultant to check and post.' },
        { icon: 'calendar', title: 'Interview scheduling', text: 'Interview slots proposed and confirmed across a candidate\'s and a client\'s diary without the usual chain of emails, with reminders sent automatically.' },
        { icon: 'chart', title: 'Client updates', text: 'A client\'s weekly update on pipeline, interviews and offers drafted from the CRM data automatically, rather than assembled by hand before every call.' },
        { icon: 'data', title: 'CRM hygiene', text: 'Duplicate candidates merged, stale records flagged and missing fields filled from source documents, so the database consultants search is worth searching.' },
      ],
    },
    {
      type: 'steps', kicker: 'First 90 days', h2: 'What actually happens if you start.',
      items: [
        { title: 'Audit the sourcing and screening flow', text: 'Two weeks watching how a role actually moves from brief to shortlist, ending in a ranked list of what to build first.', meta: 'Weeks 1–2' },
        { title: 'Build the first automation', text: 'Usually CV matching or screening, wired into the CRM or ATS you already run, tested on real roles before it goes live.', meta: 'Weeks 3–6' },
        { title: 'Supervised launch', text: 'A consultant checks every shortlist or message for two to three weeks, so bias risk and errors are caught before they reach a client.', meta: 'Weeks 6–9' },
        { title: 'Hand to the team', text: 'Consultants trained on the exceptions it flags, a runbook left behind, and a second use case scoped once the first is paying for itself.', meta: 'Weeks 9–13' },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and where we say wait.',
      yes: { title: 'A good fit', items: ['Recruitment and staffing agencies with a CRM or ATS in place', 'Enough volume that CV screening or comms genuinely eats consultant time', 'A willingness to keep a consultant signing off every shortlist', 'A director who wants the bias risk managed properly, not ignored'] },
      no: { title: 'Not this, yet', items: ['You want AI to reject candidates without a human review', 'There is no digital candidate record to work from at all', 'Volume is low enough that manual screening is genuinely faster', 'You need this live in days rather than weeks'] },
    },
    {
      type: 'table', tone: 'wash', kicker: 'What it costs', h2: 'A typical first project.',
      head: ['Use case', 'What it replaces', 'Typical build', 'Price from'],
      rows: [
        ['CV parsing and matching', 'A consultant screening every CV against a spec by hand', 'Matching tool wired into your ATS', P.build_from],
        ['Candidate comms and screening', 'A consultant messaging and screening each candidate individually', 'An AI agent for first-contact and screening', P.build_from],
        ['Job-ad writing', 'A consultant drafting every ad from a blank page', 'Ad-drafting tool built from past ads', P.build_from],
        ['CRM hygiene', 'Manual deduplication and data cleanup', 'Automated CRM hygiene tool', P.data],
        ['Full sourcing-to-shortlist system', 'Several of the above, wired together', 'A connected app across the sourcing lifecycle', P.build_mid],
      ],
      note: 'All prices exclude VAT. The audit above is the usual first step and its fee comes off the first build.',
    },
    {
      type: 'quote', tone: 'wash',
      text: 'A matching tool that quietly narrows a shortlist in a way you cannot explain to a client, or a tribunal, is worse than no tool at all. We build the automation to surface candidates against the brief, and leave the decision with the consultant.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions agencies ask before they start.',
      items: [
        { q: 'Could AI screening breach the Equality Act?', a: 'It can, if it is built carelessly. We scope matching and screening tools to rank candidates against the objective criteria in the brief, never to reject anyone outright, and a consultant makes the final shortlist decision every time.' },
        { q: 'Will this replace consultants?', a: 'No. It removes the repetitive first pass, parsing, screening and scheduling, so consultants spend their time on the calls and relationships that actually place people.' },
        { q: 'Can it connect to our ATS or CRM?', a: 'Most UK recruitment CRMs and ATS platforms have an API or export we can work with. This is checked in the audit before anything is quoted.' },
        { q: 'What happens if a candidate objects to being screened by AI?', a: 'The screening step is disclosed and a human review is always available; nothing final happens without a consultant\'s sign-off.' },
        { q: 'How do you keep candidate data safe?', a: 'Data handling is mapped before anything is built, covering what a system can see, where CVs and personal data are stored, and how long they are kept.' },
        { q: 'Do you work with contingency and retained agencies differently?', a: 'The audit adapts to your model. Retained searches usually lean on screening and client reporting; high-volume contingency work usually leans on parsing and CRM hygiene.' },
        { q: 'How quickly could a first automation be live?', a: 'A first build, usually CV matching or screening, is typically live within six weeks of the audit finishing, running unsupervised within nine.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where to start.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your agency.', meta: P.audit },
        { href: '/ai-agents-automation/', icon: 'agent', title: 'AI Agents & Automation', text: 'The screening and comms agent, built and supported as a standalone product.', meta: P.build_from },
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'The policy and audit trail an agency needs to show its screening is fair.', meta: P.governance },
      ],
    },
    {
      type: 'cta', h2: 'Find the one process where AI pays in your agency.',
      text: 'A 30-minute call on how sourcing, screening and scheduling actually flow today. If AI is not the right answer for one of them, we will say so.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
