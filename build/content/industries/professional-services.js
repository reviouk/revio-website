const S = require('../../site');
const P = S.PRICE;

module.exports = {
  slug: 'industries/professional-services',
  title: 'AI for Law Firms, Consultancies & Architects UK | Revio',
  description: 'AI for law firms, consultancies, architects and agencies: document drafting, intake, time capture and proposals, with confidentiality built in. From £1,500.',
  keywords: ['ai for law firms uk', 'ai for professional services', 'ai for consultancies uk', 'ai for architects'],
  crumbs: [{ label: 'Industries', href: S.INDUSTRIES_URL }],
  crumbLabel: 'Professional Services',
  art: 'layers',
  badge: 'Professional Services',
  h1: 'AI for law firms, consultancies and architects, <em class="mint">that treats confidentiality as the starting point</em>.',
  sub: 'Documents drafted from your own precedent, intake handled without a partner\'s time, time capture that actually happens, proposals that go out the same day. From £1,500 for the audit that finds the first process worth automating.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['Drafting support, never a substitute for professional judgement', 'Private AI available where client confidentiality demands it', 'Every price published, nothing hidden in a day rate'],
  service: { name: 'AI for Professional Services', type: 'Industry page', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'Where this fits',
      h2: 'The billable work is protected. The rest is where AI earns its keep.',
      body: [
        'Law firms, consultancies, architects and agencies charge for judgement, and that is not what we automate. What eats a fee-earner or partner\'s week alongside the judgement is document review and drafting from precedent, intake, time capture, proposals, and finding the right document or clause in a firm\'s own knowledge base fast enough to be useful. All five are things AI is genuinely good at, because a firm\'s past work is exactly the kind of material a well-built system can search and draft from.',
        'Confidentiality is the constraint that shapes every build here. Client matters, board papers and design files are often the most sensitive material a firm holds, so where a private AI option is warranted, that is what we recommend rather than a general-purpose tool that sends everything to a third party. The output is always a draft a professional reviews, never a document that goes to a client unchecked.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Where AI pays', h2: 'Six places firms see it earn its keep.',
      lede: 'Not a platform. Each of these is a defined, working thing on your own systems.',
      items: [
        { icon: 'doc', title: 'Document review and drafting', text: 'A first draft of a letter, contract clause or report built from your own precedent library, in your firm\'s language, ready for a fee-earner or partner to check and finish.' },
        { icon: 'chat', title: 'Intake and enquiry handling', text: 'A new enquiry answered, qualified and routed to the right person the same day, without a partner\'s time spent on a call that was never going to convert.' },
        { icon: 'clock', title: 'Time capture', text: 'Work actually captured against the right matter or project as it happens, from calendar entries and correspondence, rather than reconstructed from memory at month end.' },
        { icon: 'brief', title: 'Proposals and fee quotes', text: 'A first draft of a proposal or fee quote built from the scope discussed and past comparable work, so it goes out the same week rather than the same month.' },
        { icon: 'search', title: 'Knowledge search', text: 'A question answered from the firm\'s own past matters, precedents or design files in seconds, instead of a fee-earner asking around the office or starting from scratch.' },
        { icon: 'lock', title: 'Private AI for confidential work', text: 'Where client confidentiality or a board\'s expectations rule out sending documents to a public AI tool, the same drafting and search run on a private, ring-fenced setup.' },
      ],
    },
    {
      type: 'steps', kicker: 'First 90 days', h2: 'What actually happens if you start.',
      items: [
        { title: 'Audit the drafting and intake flow', text: 'Two weeks watching how documents actually get drafted and enquiries handled, ending in a ranked list of what to build first.', meta: 'Weeks 1–2' },
        { title: 'Build the first automation', text: 'Usually document drafting or intake, wired into the practice management or CRM system you already run, tested on real matters before it goes live.', meta: 'Weeks 3–6' },
        { title: 'Supervised launch', text: 'A fee-earner or partner checks every draft or routed enquiry for two to three weeks, so mistakes are caught before a client sees them.', meta: 'Weeks 6–9' },
        { title: 'Hand to the team', text: 'Staff trained on the exceptions it flags, a runbook left behind, and a second use case scoped once the first is paying for itself.', meta: 'Weeks 9–13' },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and where we say wait.',
      yes: { title: 'A good fit', items: ['Law firms, consultancies, architecture practices and agencies with a body of past work', 'A practice management, CRM or document system already in use', 'Partners or directors willing to review AI drafts before they go out', 'Intake, drafting or proposal volume that currently costs real fee-earner time'] },
      no: { title: 'Not this, yet', items: ['You want AI to give legal, design or strategic advice unsupervised', 'There is no digital precedent library or file system to draw from', 'The firm is small enough that a partner drafts everything personally and prefers it that way', 'You need this live in days rather than weeks'] },
    },
    {
      type: 'table', tone: 'wash', kicker: 'What it costs', h2: 'A typical first project.',
      head: ['Use case', 'What it replaces', 'Typical build', 'Price from'],
      rows: [
        ['Document drafting from precedent', 'A fee-earner drafting from a blank page every time', 'Drafting tool wired to your precedent library', P.build_from],
        ['Intake and enquiry handling', 'A partner or senior staff member fielding every new enquiry', 'An AI agent that answers, qualifies and routes', P.build_from],
        ['Time capture', 'End-of-month reconstruction from memory', 'Automated time capture into your billing system', P.build_from],
        ['Proposals and fee quotes', 'A director drafting each proposal from scratch', 'Proposal draft tool built from past scopes', P.data],
        ['Full intake-to-proposal system', 'Several of the above, wired together', 'A connected app across the client lifecycle', P.build_mid],
      ],
      note: 'All prices exclude VAT. The audit above is the usual first step and its fee comes off the first build.',
    },
    {
      type: 'cases', kicker: 'A firm we work with', h2: 'Extension Architecture, London architects.',
      items: [
        { href: S.WORK_URL, kicker: 'Architecture', title: 'Extension Architecture', result: 'SEO and paid search built around the enquiry', text: 'A London architecture practice where we built the SEO and paid search that brings enquiries in, the same precision we now bring to the document and intake work inside the practice itself.' },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions firms ask before they start.',
      items: [
        { q: 'Will an AI ever give advice to a client directly?', a: 'No. It drafts and searches, a professional reviews and sends. We do not build systems that put an unchecked AI output in front of a client in a regulated or advisory profession.' },
        { q: 'How is client confidentiality protected?', a: 'Data handling is agreed before anything is built: what a system can see, where documents are stored, and who can access them. Where confidentiality rules out a public AI tool, we build on a private AI setup instead.' },
        { q: 'Can this work with our practice management or document system?', a: 'Most systems used by UK law firms, consultancies and architecture practices have an API or export we can work with. This is checked in the audit before anything is quoted.' },
        { q: 'Does this reduce the quality of our drafting?', a: 'The aim is the opposite, a faster first draft built from your own best past work, checked by the same professional who would have drafted it from scratch. The final document is still theirs.' },
        { q: 'What about client conflicts and access control?', a: 'Access is scoped per matter or project the same way your existing systems are, so an automation cannot see across a conflict wall that would not otherwise exist.' },
        { q: 'Is this only for large firms?', a: 'No. Smaller firms and sole practitioners often see the fastest return, because the partner\'s time saved on drafting or intake goes straight back into billable work.' },
        { q: 'How quickly could a first automation be live?', a: 'A first build, usually drafting or intake, is typically live within six weeks of the audit finishing, running unsupervised within nine.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where to start.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your firm.', meta: P.audit },
        { href: '/private-ai/', icon: 'lock', title: 'Private AI', text: 'The same drafting and search, run where client confidentiality demands it.', meta: P.private_ai },
        { href: '/ai-implementation/', icon: 'build', title: 'AI Build & Implementation', text: 'A defined drafting, intake or proposal tool, built to a fixed price and date.', meta: P.build_from },
      ],
    },
    {
      type: 'cta', h2: 'Find the one process where AI pays in your firm.',
      text: 'A 30-minute call on how drafting, intake and proposals actually flow today. If AI is not the right answer for one of them, we will say so.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
