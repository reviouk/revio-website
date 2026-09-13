const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'enterprise-ai-consultancy',
  title: 'Enterprise & Mid-Market AI Consultancy UK | Revio',
  description: 'AI consultancy for £25m+ firms: governance, ERP/CRM/telephony integration, private deployment. Embedded Head of AI £9,500 a month. A senior boutique, not a bench.',
  keywords: ['enterprise ai consultancy uk', 'mid market ai consulting', 'ai transformation consultancy uk', 'ai governance for enterprise', 'private ai deployment uk'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'Enterprise AI',
  art: 'network',
  badge: 'Enterprise & Mid-Market AI',
  h1: 'A senior team you can actually reach, <em class="mint">not a rotating bench.</em>',
  sub: 'Past £25m turnover, AI stops being one process and becomes several departments, an ERP, a CRM, a telephony system, and a board that wants governance in writing. We run that as a phased programme, with the same senior people from the first meeting to the last, and we are honest about when a larger consultancy is the better call.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the Embedded AI Lead tiers', href: '/embedded-ai-lead/', style: 'ghost' },
  ],
  heroProof: ['Named senior lead, present throughout, not a rotating team', 'Governance and integration work built to survive an audit', 'Every price published, phased as builds, no open-ended day rate'],
  service: { name: 'Enterprise AI Consultancy', type: 'Governance, integration and embedded leadership', price: P.lead_3_num },
  sections: [
    {
      type: 'intro', kicker: 'What changes past £25m',
      h2: 'The problem is no longer finding one process. It is running several at once, safely.',
      body: [
        'A £2m business needs one process automated and someone to own it. A £25m plus business usually already has three or four AI experiments running in different departments, none of them talking to each other, none of them governed, and a board asking what the actual policy is. The technical work does not get harder so much as the coordination does: an ERP that has to stay the system of record, a CRM several teams depend on differently, a telephony system that cannot go down, and data protection obligations that apply the moment a customer\'s details touch a model.',
        'We run this as a phased programme rather than a single build: governance and data flows mapped first, then integration work into the systems you already run, then the automations themselves, each one supervised before it is allowed to act alone.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Where the work sits', h2: 'Five areas that tend to come up together.',
      items: [
        { icon: 'shield', title: 'Governance', text: 'A written policy on what each system may see, do and say, an AI register, and an audit trail that holds up to a board, an auditor or a regulator.' },
        { icon: 'flow', title: 'ERP & CRM integration', text: 'Automations that read from and write to the systems of record you already run, rather than a parallel database nobody trusts.' },
        { icon: 'phone', title: 'Telephony & contact centre', text: 'Call handling, transcription and routing wired into the phone system and CRM you already have, without replacing either.' },
        { icon: 'lock', title: 'Private deployment', text: 'Models and data kept inside infrastructure you control, for businesses that cannot send customer data to a third-party API.' },
        { icon: 'lead', title: 'Embedded leadership', text: 'A senior AI lead inside the business three days a week, owning the programme across departments rather than one team\'s backlog.' },
      ],
    },
    {
      type: 'steps', kicker: 'How a programme runs', h2: 'Governed first, built in phases, never a single big-bang launch.',
      items: [
        { title: 'Discovery & governance', text: 'Every existing AI use mapped, a written policy agreed, and a register built before anything new is switched on.', meta: 'Weeks 1-4' },
        { title: 'Integration groundwork', text: 'Access and data flows built into the ERP, CRM and telephony systems, with the access controls the governance phase specified.', meta: 'Weeks 4-8' },
        { title: 'First automations, supervised', text: 'The highest-value processes built and run with a human checking every action, department by department.', meta: 'Weeks 8 onward' },
        { title: 'Scale and hand over', text: 'Proven automations allowed to act alone within agreed limits, with internal owners trained and named for each one.', meta: 'Ongoing' },
      ],
    },
    {
      type: 'tiers', kicker: 'Priced as phases', h2: 'A programme, not an open-ended retainer.',
      lede: 'Every phase is quoted before it starts. Nothing runs on an undefined day rate.',
      items: [
        { name: 'Governance & discovery', price: P.governance, per: 'from', text: 'The written policy, register and data-flow map a board can actually sign off, done once and revisited annually.', includes: ['AI register across every department', 'Data-flow mapping for GDPR and the EU AI Act', 'A policy your own team can maintain'], href: S.BOOK_URL, cta: 'Talk about this' },
        { name: 'Build phases', price: P.build_big, per: 'from, per phase', text: 'Each automation or integration built as its own scoped phase, sized to the system it touches and the risk involved.', includes: ['ERP, CRM or telephony integration', 'Supervised launch before autonomy is granted', 'Documentation for internal audit'], featured: true, best: 'businesses running several automations across departments', href: S.BOOK_URL, cta: 'Talk about this' },
        { name: 'Embedded Head of AI', price: P.lead_3, per: 'a month', text: 'A senior lead in the business three days a week, owning the programme across every phase and department.', includes: ['Everything in the Embedded AI Lead top tier', 'Cross-department prioritisation', 'Board-level reporting'], href: S.BOOK_URL, cta: 'Talk about this' },
      ],
      note: 'Every price excludes VAT. Phases can run in sequence or, where capacity allows, in parallel across departments.',
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and when a bigger firm is the right call.',
      yes: { title: 'A good fit', items: ['UK business turning over roughly £25m or more', 'Several departments each with their own AI experiments and no single owner', 'A board or regulator asking for governance in writing', 'A preference for a small senior team over a large rotating one'] },
      no: { title: 'Better served by a large consultancy', items: ['You need a bench of forty consultants running in parallel across a global rollout', 'The requirement is a multi-year systems integration programme, not an AI one', 'Procurement rules require a firm above a certain headcount or turnover'] },
    },
    {
      type: 'quote', tone: 'wash',
      text: 'We are a small senior team by design, not by accident. At this size a client gets the same two or three people from the first governance workshop to the automation that finally goes live. That continuity is the actual product.',
      who: 'Rob Wells', role: 'Founder, Revio',
    },
    {
      type: 'checks', kicker: 'What we are honest about', h2: 'What a boutique consultancy is, and is not.',
      groups: [
        { title: 'What we bring', items: ['Senior people throughout, no juniors learning on your engagement', 'A method proven on our own production AI product, LeadSignal', 'Governance and integration built to survive scrutiny, not a slide deck'] },
        { title: 'What we are not', items: ['A forty-person bench for a global, multi-region rollout', 'A systems integrator replacing your ERP or core telephony platform', 'A fit if procurement requires a firm above a certain size'] },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'Can you integrate with our ERP?', a: 'Yes, we build to the ERP\'s existing API or data layer rather than asking you to change systems. Which ERP and how it exposes data changes the scope, not whether it is possible.' },
        { q: 'How do you handle the EU AI Act and UK GDPR at this scale?', a: 'The governance phase produces a data-flow map and a register that names every system touching personal data, classifies risk under both frameworks, and sets out disclosure rules for anything customer-facing.' },
        { q: 'Do you replace our IT or security team?', a: 'No. We work alongside whoever owns infrastructure and security today. Our scope is the AI systems and their governance, not the rest of the estate.' },
        { q: 'Can this run across multiple departments at once?', a: 'Yes, that is usually the point at this size. Phases can run in parallel where you have the internal capacity to review them, or sequentially where you do not.' },
        { q: 'What does "private AI" actually mean here?', a: 'Models and data kept inside infrastructure you control, rather than sent to a third-party API, for businesses whose data protection obligations or client contracts require it.' },
        { q: 'Why not just hire a permanent Head of AI?', a: 'Many of our enterprise clients do, eventually. The Embedded Head of AI tier is often how that role gets defined and proven before a permanent hire, with a named deputy so there is no gap if you decide to.' },
        { q: 'How is pricing controlled on a multi-phase programme?', a: 'Every phase is quoted and agreed before it starts. There is no open-ended day rate, and the governance phase in particular is fixed regardless of what it uncovers.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: '/embedded-ai-lead/', icon: 'lead', title: 'Embedded AI Lead', text: 'The fractional leadership tiers this programme is built on.', meta: P.lead_3 },
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'The governance phase as a standalone piece of work.', meta: P.governance },
        { href: '/private-ai/', icon: 'lock', title: 'Private AI', text: 'For businesses whose data cannot leave their own infrastructure.', meta: P.private_ai },
      ],
    },
    {
      type: 'cta', h2: 'Find out whether a boutique or a bench is the right fit.',
      text: 'A 30-minute call, and an honest answer either way, including a steer toward a larger firm if that is genuinely the better call.',
      ctas: [{ label: 'Book a call', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
