const S = require('../../site');
const P = S.PRICE;

module.exports = {
  slug: 'industries/financial-services',
  title: 'AI for IFAs, Accountants & Pensions Firms UK | Revio',
  description: 'AI for financial advisers, accountants and pensions administrators: onboarding, fact-find summaries, meeting notes and Consumer Duty evidence. From £1,500.',
  keywords: ['ai for financial advisers uk', 'ai for accountants uk', 'ai consultancy financial services', 'fca compliant ai'],
  crumbs: [{ label: 'Industries', href: S.INDUSTRIES_URL }],
  crumbLabel: 'Financial Services',
  art: 'shield',
  badge: 'Financial Services',
  h1: 'AI for IFAs, accountants and pensions firms, <em class="mint">with the FCA in mind from day one</em>.',
  sub: 'Onboarding and KYC documents read in minutes, fact-finds summarised, meeting notes into the CRM the same day, Consumer Duty evidence that exists rather than gets reconstructed. From £1,500 for the audit that finds the first process worth automating.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['Suitability and advice decisions stay with the adviser', 'Consumer Duty evidence built as a by-product, not a project', 'Private AI available where client data cannot leave the building'],
  service: { name: 'AI for Financial Services', type: 'Industry page', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'Where this fits',
      h2: 'The advice is the job. Everything around it is what eats the week.',
      body: [
        'An IFA, accountant, broker or pensions administrator spends a surprisingly small share of the week on the actual advice or the actual numbers. The rest goes on onboarding a new client\'s documents, summarising a fact-find into something usable, typing up a meeting into the CRM, and building the evidence file a compliance review will ask for eventually. Client onboarding and KYC document handling, fact-find summaries, meeting notes into the CRM, and Consumer Duty evidence are the four jobs AI does well here, because they are about reading, structuring and filing, not about the advice itself.',
        'The line we hold firm is suitability. AI can draft a summary of options, it can flag what a fact-find is missing, it can produce the first version of a document, but the suitability decision and the sign-off stay with the adviser, every time. For firms handling sensitive client and pension data, we also build with UK GDPR and, where it matters, a private AI option that keeps client data off third-party model providers entirely.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Where AI pays', h2: 'Six places advice and accountancy firms see it earn its keep.',
      lede: 'Not a platform. Each of these is a defined, working thing on your own systems.',
      items: [
        { icon: 'doc', title: 'Client onboarding and KYC', text: 'Passports, proof of address, source-of-funds documents and application forms read and checked against your requirements, so onboarding stops being a document-chasing exercise.' },
        { icon: 'brief', title: 'Fact-find summaries', text: 'A long client fact-find turned into a short, structured summary an adviser can read in two minutes before a meeting, with the gaps and follow-up questions flagged.' },
        { icon: 'chat', title: 'Suitability drafting support', text: 'A first-pass draft of a suitability report built from the fact-find and the recommendation, always reviewed and signed off by the adviser before it goes anywhere near a client.' },
        { icon: 'people', title: 'Meeting notes into the CRM', text: 'A recorded or transcribed client meeting turned into structured CRM notes and actions the same day, rather than whenever someone finds an hour to type it up.' },
        { icon: 'shield', title: 'Consumer Duty evidence', text: 'The record of what was communicated, why, and to whom, captured as the work happens rather than reconstructed from memory when a review is announced.' },
        { icon: 'lock', title: 'Private AI for sensitive data', text: 'Where client, pension or tax data cannot sit with a third-party model provider, the same automations run on a private, ring-fenced setup instead.' },
      ],
    },
    {
      type: 'steps', kicker: 'First 90 days', h2: 'What actually happens if you start.',
      items: [
        { title: 'Audit the onboarding and advice flow', text: 'Two weeks watching how a client actually moves from enquiry to advice to file, ending in a ranked list of what to build first.', meta: 'Weeks 1–2' },
        { title: 'Build the first automation', text: 'Usually onboarding documents or meeting notes, wired into the CRM and file structure you already run, tested on real cases before it goes live.', meta: 'Weeks 3–6' },
        { title: 'Supervised launch', text: 'An adviser or paraplanner checks every summary or document for two to three weeks, so mistakes are caught before they reach a client file.', meta: 'Weeks 6–9' },
        { title: 'Hand to the team', text: 'Advisers and paraplanners trained on the exceptions it flags, a runbook left behind, and a second use case scoped once the first is paying for itself.', meta: 'Weeks 9–13' },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and where we say wait.',
      yes: { title: 'A good fit', items: ['IFAs, accountancy practices, brokers and pensions administrators with a CRM', 'A steady flow of onboarding, fact-finds or meetings each week', 'A compliance function that wants better evidence, not less oversight', 'A firm willing to keep a named person signing off anything client-facing'] },
      no: { title: 'Not this, yet', items: ['You want AI to make the suitability or advice decision', 'There is no CRM or file structure to connect to at all', 'The firm is pre-revenue or handling only a handful of clients', 'You need this live in days rather than weeks'] },
    },
    {
      type: 'table', tone: 'wash', kicker: 'What it costs', h2: 'A typical first project.',
      head: ['Use case', 'What it replaces', 'Typical build', 'Price from'],
      rows: [
        ['Client onboarding and KYC', 'A paraplanner checking documents by hand', 'Document extraction and checklist tool', P.build_from],
        ['Fact-find summaries', 'An adviser reading the full fact-find before every meeting', 'Summary and gap-flagging tool', P.build_from],
        ['Meeting notes into the CRM', 'Manual write-ups done days after the meeting', 'Transcription and CRM-write agent', P.build_from],
        ['Consumer Duty evidence', 'A compliance file rebuilt from memory before a review', 'Automated evidence capture wired to the CRM', P.data],
        ['Full onboarding-to-advice system', 'Several of the above, wired together', 'A connected app across the client lifecycle', P.build_mid],
      ],
      note: 'All prices exclude VAT. The audit above is the usual first step and its fee comes off the first build.',
    },
    {
      type: 'cases', kicker: 'A firm we work with', h2: 'TLPI, a UK pensions and SSAS specialist.',
      items: [
        { href: S.WORK_URL, kicker: 'Pensions administration', title: 'TLPI', result: 'HubSpot, AI properties and a connected inbox', text: 'A pensions and SSAS specialist running HubSpot with AI properties built into the CRM and a connected inbox, so client communication and case data sit in one place rather than across email and spreadsheets.' },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions advice and accountancy firms ask before they start.',
      items: [
        { q: 'Will an AI ever give advice or a recommendation to a client?', a: 'No. It drafts, summarises and flags for the adviser or accountant. The recommendation, the suitability decision and the sign-off stay with a qualified person, every time, without exception.' },
        { q: 'How does this help with FCA Consumer Duty?', a: 'Consumer Duty asks firms to evidence good outcomes, not just claim them. Building the evidence trail into the workflow, what was said, when, and why, means it exists automatically rather than being reconstructed under time pressure before a review.' },
        { q: 'Is our client data safe with an AI system?', a: 'Data handling is mapped and agreed before anything is built: what a system can see, where it is stored, and for how long. Where client, pension or tax data should not sit with a third-party model provider, we build on a private AI setup instead.' },
        { q: 'Can this connect to the CRM or back-office system we already use?', a: 'Most CRMs and practice management platforms used by UK advice and accountancy firms have an API or export we can work with. This is checked in the audit before anything is quoted.' },
        { q: 'What if a fact-find or document is incomplete?', a: 'The system is built to flag gaps rather than guess. An incomplete fact-find produces a list of what is missing, not an invented answer.' },
        { q: 'Do you understand FCA rules, or just AI?', a: 'We are not a compliance consultancy and do not replace your compliance function or your PI cover. What we build is designed around the constraints your compliance team sets, and we work alongside them, not around them.' },
        { q: 'How quickly could a first automation be live?', a: 'A first build, usually onboarding or meeting notes, is typically live within six weeks of the audit finishing, running unsupervised, with sign-off in place, within nine.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where to start.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your practice.', meta: P.audit },
        { href: '/private-ai/', icon: 'lock', title: 'Private AI', text: 'The same automations, run on infrastructure where client data never leaves your control.', meta: P.private_ai },
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'The register, policy and evidence trail a regulated firm needs before anything goes live.', meta: P.governance },
      ],
    },
    {
      type: 'cta', h2: 'Find the one process where AI pays in your practice.',
      text: 'A 30-minute call on how onboarding, fact-finds and meeting notes actually flow today. If AI is not the right answer for one of them, we will say so.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
