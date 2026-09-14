const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-opportunity-audit',
  title: 'AI Opportunity Audit: AI Readiness Assessment UK | Revio',
  description: 'A two-week AI readiness assessment for UK businesses: a ranked list of where AI pays, with cost and payback on each item. From £1,500, credited against the build.',
  keywords: ['ai readiness assessment uk', 'ai opportunity audit', 'ai audit for small business', 'ai strategy audit', 'ai consultancy uk'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'AI Opportunity Audit',
  art: 'network',
  badge: 'AI Opportunity Audit',
  h1: 'Two weeks to find out <em class="mint">where AI actually pays</em> in your business.',
  sub: 'A fixed-price assessment that ends in a ranked list: the processes worth automating, what each would cost to build, what it would return, and the ones where AI is the wrong answer. From £1,500, and the fee comes off whatever you build next.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See all prices', href: S.PRICING_URL, style: 'ghost' },
  ],
  heroProof: ['Fixed fee, fixed two weeks', 'Cost and payback against every item', 'Fee credited against a build or the first month of an Embedded AI Lead'],
  heroNote: 'Prices exclude VAT. The audit is the usual first piece of work we do together.',
  service: { name: 'AI Opportunity Audit', type: 'AI readiness assessment', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'Everybody has a list of AI ideas. Almost nobody has them in the right order.',
      body: [
        'The usual position is not scepticism. It is noise. Three people have shown the board a different tool, one department has a subscription nobody is measuring, and a supplier has quoted for something that sounds expensive and looks vague. The question is no longer whether AI does anything useful. It is which of the forty things is worth doing first, in this business, with these systems and these people.',
        'The AI Opportunity Audit answers that in two weeks for a fixed fee. We look at how work actually moves through your business, count where skilled time goes, and come back with a ranked list you can act on or hand to somebody else. It is deliberately small: cheap enough to be a sensible first step, short enough that the answer is still current when you get it.',
      ],
    },
    {
      type: 'stats', tone: 'wash',
      items: [
        { n: '2 weeks', count: 2, suffix: ' weeks', label: 'From kick-off to delivered findings' },
        { n: '90 minutes', count: 90, suffix: ' minutes', label: 'Closing session with your team, not a PDF in an inbox' },
        { n: '1 list', count: 1, suffix: ' list', label: 'Every opportunity ranked, costed and defensible' },
      ],
    },
    {
      type: 'cards', kicker: 'What you get', h2: 'Four things land on your desk at the end of it.',
      lede: 'No maturity wheel, no vendor comparison matrix, no sixty pages nobody reads twice.',
      items: [
        { icon: 'target', title: 'A ranked list of opportunities', text: 'Every process where AI would pay, scored on annual hours or pounds returned, build effort in days, and risk. Ordered so the first item is the one we would start on Monday, with the reasoning written next to it.' },
        { icon: 'pound', title: 'Cost and payback per item', text: 'A build price and a running cost against each opportunity, set against what it returns. Some items pay back in six weeks. Some take a year. Some never do, and those are marked as such rather than quietly dropped.' },
        { icon: 'cross', title: 'Where AI is the wrong answer', text: 'A named section. Processes that need a fixed rule rather than a model, work where the volume is too low to justify anything, and the two or three places where the honest fix is a better form or a tidier CRM.' },
        { icon: 'data', title: 'A data-readiness read', text: 'What state your records are actually in: duplicates, ownership, missing fields, where the information lives and whether it can legally be used for this. Most stalled AI projects stall here, so we look before anything is promised.' },
      ],
    },
    {
      type: 'timeline', kicker: 'The two weeks', h2: 'How the fortnight runs, day by day.',
      lede: 'Roughly six hours of your team’s time in total, spread so it does not interrupt a working week.',
      items: [
        { when: 'Day 1', title: 'Kick-off, one hour', text: 'We agree the scope: which departments are in, which systems we get read access to, and who the four or five people we need to speak with are. You get a short list of documents to send and nothing else to prepare.' },
        { when: 'Days 2–4', title: 'Interviews', text: 'Thirty to forty-five minutes each with the people who do the work, not only the people who manage it. Sales, operations, finance, whoever handles the inbox. We are looking for the tasks that eat hours and the ones everybody quietly dreads.' },
        { when: 'Days 4–6', title: 'Systems and data', text: 'Read-only access to the CRM and the main line-of-business systems. We count records, check field hygiene, follow how an enquiry or an order travels end to end, and note where the same information is keyed in twice.' },
        { when: 'Days 7–9', title: 'Sizing and costing', text: 'Each candidate is sized against what we have built before: the tooling it would need, the build days, the monthly running cost, and the supervision it would require in the first month. Anything we cannot cost honestly is marked as needing a spike.' },
        { when: 'Days 10–12', title: 'Ranking and drafting', text: 'The list is scored and ordered, the not-worth-doing section is written, and the governance and data notes are pulled together. We test the top three against your own numbers before we commit them to paper.' },
        { when: 'Day 13 or 14', title: 'The closing session', text: 'Ninety minutes with you and whoever else should hear it. We walk the list, defend the order, take the arguments, and adjust. You leave with the document, the numbers behind it, and a first project you could start immediately.' },
      ],
    },
    {
      type: 'checks', tone: 'wash', kicker: 'Scope', h2: 'What is included and what is not.',
      groups: [
        {
          title: 'What is included',
          items: [
            'Kick-off session and scoping of departments in and out',
            'Four to six staff interviews across the processes in scope',
            'Read-only review of the CRM and main operational systems',
            'Data-readiness read: hygiene, ownership, duplication, lawful basis',
            'Ranked opportunity list with build cost, running cost and payback on each',
            'A written section on where AI is the wrong answer here',
            'Governance notes: what would need a policy, a register entry or a disclosure',
            'A costed first project you can either hand to us or take elsewhere',
            'The 90-minute closing session with your team',
            'The fee credited against a build or the first month of an Embedded AI Lead',
          ],
        },
        {
          title: 'What is not included',
          items: [
            'Any building. Nothing is written during the audit except the findings',
            'A vendor shortlist or a licence procurement exercise',
            'A full data migration or CRM clean-up, which we would quote separately',
            'Penetration testing, security audit or IT infrastructure review',
            'A formal EU AI Act conformity assessment, though we flag what would need one',
            'Interviews with your customers or suppliers',
            'An unlimited number of departments. Three is the usual scope at this fee',
          ],
        },
      ],
    },
    {
      type: 'split', art: 'pipeline', kicker: 'What it usually finds', h2: 'The answer is rarely the thing the board was excited about.',
      body: [
        'Across the audits we have run, the first item on the list is almost never the customer-facing chat everybody imagined. It is usually something dull and expensive that happens forty times a week: enquiries retyped from an inbox into the CRM, quotes rebuilt from scratch when a near-identical one exists, purchase orders or applications read by a person because nobody ever automated the reading.',
        'That is a good outcome. Dull processes have clean success criteria, low reputational risk and a payback you can measure in a month. They also earn the internal trust you need before anything is allowed to talk to a customer.',
      ],
      bullets: [
        'Enquiry and inbox triage keyed into the CRM automatically',
        'Quotes and proposals drafted from your own precedent, checked by a person',
        'Documents read and the fields posted into the system that needs them',
        'Reporting produced rather than assembled every Monday morning',
        'One customer-facing agent, usually later rather than first',
      ],
      ctas: [{ label: 'See what we have built', href: S.WORK_URL, style: 'dark' }],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who should buy this, and who should not.',
      yes: {
        title: 'A good fit',
        items: [
          'UK businesses from about £1m turnover with a process worth automating',
          'A CRM or line-of-business system already in place, however untidy',
          'A director who can give an hour to the kick-off and an hour to the close',
          'A board that has asked for an AI plan with real numbers attached',
          'Anyone who has been quoted for a build and wants a second opinion first',
        ],
      },
      no: {
        title: 'Not this, yet',
        items: [
          'You already know exactly what you want built, in which case go straight to a scoping session at ' + P.scoping,
          'Nobody internally can grant read access to the systems for a fortnight',
          'The real project is replacing the CRM, which is a different piece of work',
          'You want a procurement exercise, a tool shortlist or a licence negotiation',
        ],
      },
    },
    {
      type: 'quote', tone: 'wash',
      text: 'The most useful page in an audit is usually the one that says do not build this. It costs a client nothing to hear it from us in week two, and a great deal to find it out in month five.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book the audit.',
      items: [
        { q: 'What does the audit cost?', a: 'It is ' + P.audit + ', excluding VAT, for a scope of about three departments. Larger or multi-site businesses are quoted before we start, and the price is fixed before any work begins. If you then build with us, or start an Embedded AI Lead, the whole fee is credited against it, so the assessment effectively costs nothing if you act on it.' },
        { q: 'How much of our time does it take?', a: 'Around six hours in total across the fortnight. A one-hour kick-off, four to six interviews of thirty to forty-five minutes, some read-only access, and the ninety-minute closing session. We work around the operational week rather than asking for a workshop day that takes the team off the floor.' },
        { q: 'What do we actually receive?', a: 'A written document and the session that walks you through it. The document holds the ranked opportunity list with cost and payback on each item, the data-readiness read, the governance notes, the not-worth-doing section and one costed first project. It is written so you could hand it to a different supplier and they would know what to quote.' },
        { q: 'Do we have to build it with you?', a: 'No, and the document is deliberately written to be portable. You own it. Plenty of clients take the top item to an internal team or an existing IT partner. If you do build with us the audit fee comes off the price, but nothing about the findings depends on that.' },
        { q: 'Is this the same as an AI readiness assessment?', a: 'It covers the same ground and then goes further. Readiness assessments usually score you against a maturity model and stop. This one names specific processes in your business, prices the work, and puts them in an order, because a score does not tell anybody what to do on Monday.' },
        { q: 'What if the answer is that AI is not worth it here?', a: 'Then that is what the document says, in a named section, with the reasoning. It happens. Low volumes, a process that needs a fixed rule rather than a model, or data that is not fit to be used yet. Finding that out for a fixed fee in two weeks is a good result, not a wasted one.' },
        { q: 'Who runs it?', a: 'The senior consultant who would build the work runs the interviews and writes the findings, with the same team that builds. Nobody hands your business to a junior analyst and a template, which is also why we only run a small number of these at a time.' },
        { q: 'How soon can you start?', a: 'Usually within two weeks of a signed order, sometimes sooner. The fortnight itself is fixed once it starts, so you know the date you will have the answer before you commit to anything.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'What normally happens next.',
      items: [
        { href: '/ai-implementation/', icon: 'build', title: 'AI Build & Implementation', text: 'The first item on the list, built to a fixed price and a fixed date, and wired into the CRM you already run.', meta: P.build_from },
        { href: S.LEAD_URL, icon: 'lead', title: 'Embedded AI Lead', text: 'If the list is long, a senior AI lead inside your team one to three days a week to work through it.', meta: P.lead_1 },
        { href: '/ai-strategy/', icon: 'layers', title: 'AI Strategy', text: 'The one-page plan that comes out of the audit: the first three things to build, and the order to build them in.', meta: P.audit },
      ],
    },
    {
      type: 'cta', h2: 'Find out where AI pays here before you spend anything building it.',
      text: 'Thirty minutes on the phone is enough for us to tell you whether the audit is the right first step, or whether you should skip straight to a scoping session.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
      note: P.audit + ', excluding VAT, credited in full against a build or the first month of an Embedded AI Lead.',
    },
  ],
};
