const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-governance-compliance',
  title: 'AI Governance UK: Policy, Register &amp; EU AI Act | Revio',
  description: 'AI governance and compliance for UK SMEs: an AI register, a usable policy, a data-flow map, UK GDPR and EU AI Act readiness, in two weeks. From £2,500.',
  keywords: ['ai governance uk', 'eu ai act consultancy uk', 'ai policy for smes', 'ai compliance consultancy', 'ai register template uk', 'dpia for ai uk'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'AI Governance & Compliance',
  art: 'shield',
  badge: 'AI Governance & Compliance',
  h1: 'Write down what the AI may <em class="mint">see, do and say</em>.',
  sub: 'A two-week sprint that produces the things a board, an auditor, an insurer or a big customer will ask for: an AI register, a policy people can actually follow, a data-flow map, your UK GDPR position, EU AI Act readiness if you sell into Europe, and an audit trail. From £2,500, usually bought alongside a build.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'Read the straight answers', href: '#faq', style: 'ghost' },
  ],
  heroProof: ['Two weeks, fixed fee, documents you own', 'Written for an SME, not a bank', 'Your own team can run it afterwards'],
  service: { name: 'AI Governance & Compliance', type: 'AI governance and compliance', price: 2500 },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'Nobody knows how many AI tools are already inside your business.',
      body: [
        'Start counting and it gets uncomfortable quickly. The transcription tool in the sales team’s meetings. The image generator on the marketing credit card. Copilot, switched on with the licences. The recruitment screener your HR platform quietly added. Two people with personal chatbot subscriptions doing real work in them. A customer-facing widget somebody trialled and never removed.',
        'None of that is a scandal, but it is unmanaged, and unmanaged is what turns into a problem: a client asks in a tender whether you use AI on their data, an insurer asks at renewal, an employee is refused a role by a screening tool, or personal data ends up somewhere your privacy notice never mentioned. Governance is not a compliance ornament. It is the register, the policy and the map that let you answer those questions in a week rather than a quarter.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What we produce', h2: 'Six documents, all short enough to be read.',
      cols: 3,
      items: [
        { icon: 'data', title: 'The AI register', text: 'Every AI system in use or planned, with owner, purpose, data touched, supplier, contract terms, risk rating and review date. One spreadsheet or CRM object, maintained by your team, not by us.' },
        { icon: 'doc', title: 'The policy', text: 'What staff may and may not do, in the language your staff speak. What may be pasted where, what must never leave, when output must be checked, and who to ask. Two pages, not thirty.' },
        { icon: 'layers', title: 'The data-flow map', text: 'For each system: what goes in, where it is processed, which region it sits in, who the processors are, how long it is kept. This is what feeds your Article 30 record and answers tender questions.' },
        { icon: 'shield', title: 'The UK GDPR position', text: 'Lawful basis per use, privacy notice wording, retention, and a DPIA where a system warrants one. Written so your DPO or your solicitor can sign it rather than rewrite it.' },
        { icon: 'globe', title: 'EU AI Act readiness', text: 'If you sell into the EU: which of your systems fall in scope, at which risk tier, what transparency and documentation each needs, and the dates that apply to you. A gap list with owners.' },
        { icon: 'eye', title: 'The audit trail', text: 'What is logged, where, for how long, and who reviews it. Without this, every other document is a statement of intent rather than something you can evidence.' },
      ],
    },
    {
      type: 'timeline', kicker: 'The sprint', h2: 'Two weeks, five sessions, and a pack at the end.',
      items: [
        { when: 'Day 1', title: 'Kick-off and scope', text: 'One hour with the director who will own this. We agree what is in scope, who signs the policy, and which regulators, insurers, clients or frameworks you have to satisfy.' },
        { when: 'Days 2–4', title: 'Discovery', text: 'We find the AI actually in use: expense lines, browser extensions, platform settings, the SaaS tools that added features nobody asked for, and a short anonymous staff survey that always turns up two more.' },
        { when: 'Days 5–6', title: 'Risk and classification', text: 'Each system rated on data sensitivity, customer impact, autonomy and reversibility, then mapped to EU AI Act tiers where you sell into Europe. Disagreements settled in the room rather than in a report.' },
        { when: 'Days 7–8', title: 'Drafting', text: 'Register, policy, data-flow map, DPIA where needed, disclosure wording for anything customer-facing, and the logging and review rules.' },
        { when: 'Day 9', title: 'Review session', text: 'Ninety minutes going through the pack line by line with the owner and anyone who has to live with it. Wording changes made live, so nothing waits on an email thread.' },
        { when: 'Day 10', title: 'Handover and training', text: 'A session for the people who maintain it: how to add a system to the register, when a change needs a new assessment, and what the quarterly review looks like. Then it is yours.' },
      ],
    },
    {
      type: 'checks', kicker: 'The pack', h2: 'What you get, and what you do not.',
      groups: [
        { title: 'In the pack', items: ['AI register, populated with everything found in discovery', 'Two-page acceptable-use policy for staff', 'Data-flow map per system, feeding your Article 30 record', 'Lawful basis notes and privacy notice wording', 'DPIA for any system that warrants one', 'EU AI Act scope assessment and gap list, where relevant', 'Disclosure wording for customer-facing AI', 'Logging, review and escalation rules', 'Vendor and contract checklist for new AI tools', 'A quarterly review agenda your team runs itself'] },
        { title: 'Not in the pack', items: ['Legal advice. We are not solicitors, and the pack is written to be reviewed by yours', 'Certification against ISO 42001 or similar, though the pack is a sensible start toward it', 'A penetration test or security audit', 'Ongoing DPO services', 'Approval from your regulator or insurer, which remains yours to seek', 'Sixty pages of framework nobody will read'] },
      ],
    },
    {
      type: 'split', tone: 'wash', art: 'layers', reverse: true, kicker: 'Why it is bought', h2: 'Usually because somebody outside the business asked.',
      body: [
        'Very few SMEs commission governance because they woke up wanting it. They commission it because a tender asked how AI is used on customer data and nobody could answer, because the insurer added a question at renewal, because a board member read something, or because an enterprise customer sent a fifty-line AI addendum with the contract.',
        'The second common trigger is a build. You are about to put an agent in front of customers, or point a model at client files, and somebody sensibly asks what it is allowed to do. That is why most of this work is bought alongside an implementation rather than on its own, and why it is designed to take two weeks rather than a quarter.',
      ],
      bullets: ['Tender and procurement questionnaires answered from one document', 'Insurance renewal questions answered with evidence', 'A board paper that says what is in use and what the exposure is', 'Enterprise customer AI addenda reviewed against what you actually do', 'A defensible position before a customer-facing system goes live'],
      ctas: [{ label: 'See how we build', href: '/ai-implementation/', style: 'dark' }],
    },
    {
      type: 'table', kicker: 'Scope and price', h2: 'What changes the number.',
      head: ['', 'Included at ' + P.governance, 'Priced on top'],
      rows: [
        ['Business size', 'Up to about 150 staff, one country', 'Multi-country or multi-entity groups'],
        ['Systems in scope', 'Up to twelve AI systems in the register', 'Larger estates, scoped after discovery'],
        ['EU AI Act', 'Scope assessment and gap list', 'Full conformity work for a high-risk system'],
        ['DPIA', 'One, where a system warrants it', 'Additional DPIAs, £600 each'],
        ['Maintenance', 'Handover and a quarterly agenda you run', 'We run the quarterly review, from ' + P.run + ' a month'],
        ['Training', 'One session for the owners', 'Firm-wide sessions at ' + P.training_half + ' a half day'],
      ],
      note: 'All prices exclude VAT. Where governance is bought alongside a build, it is scheduled to finish before the build goes live rather than after.',
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who needs this now, and who can wait.',
      yes: { title: 'Do this now', items: ['You sell to enterprise, public sector or regulated buyers who ask about AI', 'You handle personal data at any scale, which is almost everyone', 'You sell goods or services into the EU', 'You are about to put AI in front of customers or in an HR decision', 'Your staff are already using AI tools you did not approve', 'A board member, insurer or auditor has asked the question once'] },
      no: { title: 'Can wait a little', items: ['One person experimenting with drafting, on no customer data', 'You have nothing live and no build planned for six months', 'You already hold ISO 42001 or an equivalent framework, where this would duplicate', 'A large in-house legal and compliance function that will own it themselves'] },
    },
    {
      type: 'quote',
      text: 'Every governance pack we write gets used for something commercial within three months. A tender, an insurance renewal, a customer contract. That is the argument for doing it, not the fear of a fine.',
      who: 'Rob Wells', role: 'Founder, Revio',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions boards ask.',
      items: [
        { q: 'Does the EU AI Act apply to a UK business?', a: 'It can. The test is not where you are established but whether your system is placed on the EU market or its output is used in the EU. A UK firm with EU customers, an EU subsidiary or a product sold across Europe is usually in scope for at least the transparency obligations. The sprint tells you which of your systems are caught and at which tier, rather than leaving you to guess.' },
        { q: 'What does the UK actually require?', a: 'There is no single UK AI act. What applies is existing law: UK GDPR and the Data Protection Act for personal data, equality law where AI affects people, sector rules from the FCA, SRA, ICO and others, and consumer law for anything customer-facing. The pack maps your systems against those rather than inventing a framework.' },
        { q: 'Do we need a DPIA?', a: 'You need one where processing is likely to result in a high risk to people: systematic monitoring, large-scale special category data, automated decisions with legal or similarly significant effects, or innovative technology used on personal data. Several AI uses meet that test. One DPIA is included; we will tell you plainly if you need none.' },
        { q: 'Must we tell customers they are talking to AI?', a: 'Yes, and you should want to. Transparency obligations under the EU AI Act apply to systems interacting with people, UK consumer and advertising rules already frown on misleading impressions, and in our own products disclosure improves trust rather than damaging it. The pack includes wording for chat, phone and email.' },
        { q: 'Is this just a template pack?', a: 'No. Templates are the starting point and the discovery work is the value: finding the systems in use, deciding the risk rating with the people accountable, and writing rules that match how your business actually runs. A generic policy that nobody follows is worse than none, because it documents a standard you are visibly missing.' },
        { q: 'Who should own this internally?', a: 'One director, usually operations, finance or whoever holds data protection, with a named deputy. It should not sit with IT alone, because most of the decisions are commercial and legal rather than technical. The handover session is built around whoever you choose.' },
        { q: 'How does this fit with a build you are doing for us?', a: 'It runs in parallel and finishes first. The rules about what a system may see, do and say are an input to the build, not a review of it afterwards. Clients who buy both usually buy governance at the point the build is scoped.' },
        { q: 'What happens after the two weeks?', a: 'You own the documents and your team runs the quarterly review with the agenda we leave. If you would rather we ran it, that is support from ' + P.run + ' a month. Either way the register is yours, in your systems, and does not depend on us being in the room.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where this leads.',
      items: [
        { href: '/private-ai/', icon: 'lock', title: 'Private AI', text: 'When the answer to the governance question is that the data must stay inside your own tenant or your own walls.', meta: P.private_ai },
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks and a ranked list of where AI pays. Governance is often scheduled straight after it.', meta: P.audit },
        { href: S.LEAD_URL, icon: 'lead', title: 'Embedded AI Lead', text: 'When the register needs an owner every month rather than a pack every year.', meta: P.lead_1 },
      ],
    },
    {
      type: 'cta', h2: 'Answer the AI question before a customer asks it.',
      text: 'Two weeks, a fixed fee, and a pack your board, your insurer and your biggest client can all read. Book thirty minutes and we will tell you whether you need the full sprint or half of it.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'See all AI services', href: S.SERVICES_URL, style: 'ghost' }],
      note: 'Prices exclude VAT. The pack is legal-adjacent, not legal advice, and is written to be reviewed by your own solicitor.',
    },
  ],
};
