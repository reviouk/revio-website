const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-services',
  title: 'AI Services UK: Audit, Build, Agents, Embedded Lead | Revio',
  description: 'AI services for UK businesses with a process worth automating: a two-week audit from £1,500, fixed-price builds from £4,500, and a senior AI lead inside your team.',
  keywords: ['ai consultancy uk', 'ai services for smes', 'ai agency uk', 'ai consulting services', 'ai implementation uk'],
  crumbLabel: 'AI Services',
  art: 'layers',
  badge: 'AI Services',
  h1: 'AI services for businesses that already have <em class="mint">a process worth automating</em>.',
  sub: 'We are a UK consultancy that finds the one process where AI pays, builds it to a fixed price and date, wires it into the CRM you already run, and stays until your team actually uses it. Every price is published. The usual first step is a two-week audit from £1,500.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'Start with the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['Published prices, no day rate', 'Tooling and licences in your own name', 'We built and run our own AI platform, so we have done this under load'],
  heroNote: 'Borehamwood, on the London edge. All prices exclude VAT.',
  service: { name: 'AI consultancy services', type: 'AI consultancy', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'Where to start',
      h2: 'Three ways in, and the right one depends on how certain you are.',
      body: [
        'If you do not yet know which process to automate, start with the two-week AI Opportunity Audit at ' + P.audit + ', which ends in a ranked and costed list. If you already know exactly what you want, skip it and take a half-day scoping session at ' + P.scoping + ', which turns the idea into a fixed price and a delivery date. If the list is long and ongoing, an Embedded AI Lead puts a senior person inside your team one to three days a week from ' + P.lead_1 + ' a month.',
        'Everything below hangs off those three. The services are separate so you can buy the smallest sensible piece, and every one of them is priced on this site rather than quoted after a discovery call.',
      ],
    },
    {
      type: 'cards', tone: 'wash', cols: 3, kicker: 'Everything we do', h2: 'The full list, with prices.',
      lede: 'Each page says what is included, what is not, and when the honest answer is that you do not need it.',
      items: [
        { icon: 'lead', title: 'Embedded AI Lead', text: 'A senior AI lead inside your business one, two or three days a week. Owns the backlog, builds the work, trains the team as each thing lands.', meta: P.lead_1 + ' a month', href: S.LEAD_URL },
        { icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks to a ranked list of where AI pays here, with cost and payback on each item, and where it is the wrong answer.', meta: P.audit, href: S.AUDIT_URL },
        { icon: 'build', title: 'AI Build & Implementation', text: 'A defined system built to a fixed price and date, wired into your CRM, run supervised before it is allowed to act alone.', meta: P.build_from, href: '/ai-implementation/' },
        { icon: 'layers', title: 'AI Strategy', text: 'A one-page plan naming the first three things to build, in order, costed and owned. Delivered through the audit or the Embedded AI Lead.', meta: P.audit, href: '/ai-strategy/' },
        { icon: 'agent', title: 'Agentic AI & Automation', text: 'Agents that answer, qualify, chase, book, read documents and take actions in your systems, with guardrails and handback to humans.', meta: P.build_from, href: '/ai-agents-automation/' },
        { icon: 'flow', title: 'AI Workflow Automation', text: 'The routing, triage and handoffs around the agents, plus the reporting that proves what the automation actually saved.', meta: P.build_from, href: '/ai-workflow-automation/' },
        { icon: 'chat', title: 'AI Chatbot', text: 'A scoped assistant on your website, trained on your own content, wired into the CRM, with disclosure and escalation built in.', meta: P.chatbot, href: '/ai-chatbot/' },
        { icon: 'voice', title: 'Voice AI', text: 'Answering, qualifying and booking on the phone, in your hours and your script, with a written scope of what it may say.', meta: P.voice, href: '/voice-ai/' },
        { icon: 'spark', title: 'Claude implementation', text: 'Anthropic Claude rolled out properly: projects, prompts, permissions, connected data and the rules for what it may see.', meta: P.programme + ' a month', href: '/claude-implementation/' },
        { icon: 'cpu', title: 'ChatGPT implementation', text: 'ChatGPT Enterprise or Team configured, governed and taught, rather than bought and left to whoever is loudest about it.', meta: P.programme + ' a month', href: '/chatgpt-implementation/' },
        { icon: 'brief', title: 'Microsoft Copilot implementation', text: 'Copilot made useful inside Microsoft 365: permissions tidied first, use cases chosen, and adoption measured at 90 days.', meta: P.programme + ' a month', href: '/microsoft-copilot-implementation/' },
        { icon: 'training', title: 'AI Enablement & Training', text: 'Training your people on the tools they actually have, by department, with a written playbook rather than a generic webinar.', meta: P.training_day + ' a day', href: '/ai-enablement/' },
        { icon: 'lock', title: 'Private AI', text: 'Models running in your own tenancy or on your own infrastructure, for firms whose data cannot leave the building.', meta: P.private_ai, href: '/private-ai/' },
        { icon: 'shield', title: 'AI Governance & Compliance', text: 'The AI register, the policy, the data-flow map and the audit trail, in a form your own team can maintain.', meta: P.governance, href: '/ai-governance-compliance/' },
        { icon: 'repair', title: 'AI App Rescue', text: 'A build that stalled, broke, or lost its supplier. Diagnosed honestly, then either fixed or rebuilt where that costs less.', meta: P.diagnostic, href: '/ai-app-rescue/' },
        { icon: 'server', title: 'Legacy Modernisation', text: 'Old systems opened up so something modern can read and write to them, starting with a discovery that says whether it is worth it.', meta: P.legacy_discovery, href: '/legacy-modernisation/' },
        { icon: 'grant', title: 'Funded AI Projects', text: 'Grant and funding routes for UK AI projects, and what a funder actually needs to see before they will consider one.', meta: 'Eligibility first', href: '/funded-ai-projects/' },
      ],
      note: 'All prices exclude VAT and third-party licences. Support and iteration after a build is ' + P.run + ' a month and is optional. Data configuration work is ' + P.data + '.',
    },
    {
      type: 'steps', kicker: 'The order of operations', h2: 'How the pieces fit together.',
      lede: 'Nearly every stalled AI programme we are asked to rescue did these in a different order.',
      items: [
        { title: 'Find where it pays', text: 'Two weeks, ' + P.audit + ', a ranked and costed list, and a named section on where AI is the wrong answer. Skip it only if you already know exactly what to build.', meta: 'AI Opportunity Audit' },
        { title: 'Fix the data that would poison it', text: 'Ownership, duplicates, lifecycle, attribution. Usually a fortnight of unglamorous CRM work, and the difference between a build that is trusted and one that is quietly bypassed.', meta: 'Data configuration, ' + P.data },
        { title: 'Build one thing properly', text: 'Fixed price, fixed date, built into the system you already run, with monitoring and a runbook. Internal and low-risk first, customer-facing later.', meta: 'AI Build, from ' + P.build_from },
        { title: 'Run it supervised, then let it off the lead', text: 'Two to four weeks with a human approving every action, then autonomy granted action by action while monitoring and cost caps stay on.', meta: 'Included in every build' },
        { title: 'Train the people who have to use it', text: 'Licences are not usage. Each build lands with a session for its users and a written playbook, and adoption is measured at 30, 60 and 90 days.', meta: 'AI Enablement, ' + P.training_day + ' a day' },
        { title: 'Keep a plan, or keep a person', text: 'Either you take it from here with the documentation, or an Embedded AI Lead owns the backlog and works through it from ' + P.lead_1 + ' a month.', meta: 'Embedded AI Lead' },
      ],
    },
    {
      type: 'band', h2: 'Not sure which of these you need?',
      text: 'Thirty minutes on the phone is usually enough for us to say which piece is right, or that none of them is yet.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'See all prices', href: S.PRICING_URL, style: 'ghost' }],
    },
    {
      type: 'pillars', kicker: 'By sector', h2: 'The same method, different constraints.',
      lede: 'What changes between industries is the regulation, the document types and where the time actually goes.',
      items: [
        { icon: 'health', title: 'Healthcare and dental', text: 'Enquiry handling, recalls and rebooking inside clinical governance, with disclosure and record-keeping that stands up to inspection.', links: [{ href: '/industries/healthcare-dental/', label: 'Healthcare and dental' }] },
        { icon: 'truck', title: 'Logistics and transport', text: 'Documents read at volume, exceptions escalated, and status questions answered without a person opening the tracking system.', links: [{ href: '/industries/logistics-transport/', label: 'Logistics and transport' }] },
        { icon: 'bank', title: 'Financial services', text: 'Suitability of records, audit trails and disclosure first, then the automation. Work we already do for a pensions firm.', links: [{ href: '/industries/financial-services/', label: 'Financial services' }] },
        { icon: 'brief', title: 'Professional services', text: 'Proposals drafted from precedent, engagement admin removed, and chargeable hours protected from unbillable typing.', links: [{ href: '/industries/professional-services/', label: 'Professional services' }] },
        { icon: 'people', title: 'Recruitment', text: 'Candidate screening, CV reading and interview scheduling, with the bias and record-keeping questions answered before launch.', links: [{ href: '/industries/recruitment/', label: 'Recruitment' }] },
        { icon: 'cart', title: 'Ecommerce and retail', text: 'Pre-sales questions, order status and returns answered around the clock, connected to the store rather than guessing.', links: [{ href: '/industries/ecommerce-retail/', label: 'Ecommerce and retail' }, { href: '/industries/smes/', label: 'Smaller businesses' }, { href: S.INDUSTRIES_URL, label: 'All industries' }] },
      ],
    },
    {
      type: 'cases', tone: 'wash', kicker: 'Proof', h2: 'Three pieces of work, with numbers attached.',
      items: [
        { href: '/work/leadsignal/', kicker: 'AI platform', title: 'LeadSignal', result: '8 weeks to a live AI platform', text: 'A multi-tenant platform whose agents answer, qualify, score and book leads out of Instagram, Facebook, WhatsApp and SMS. Designed, built and run by us, with an approved Meta app, live payments and paying customers.' },
        { href: S.WORK_URL, kicker: 'Training provider', title: 'Intelligencia Training', result: 'A national pipeline on long cycles', text: 'Pipeline and CRM work for a national training provider where enquiries convert over months rather than days, and attribution has to survive the gap between first touch and enrolment.' },
        { href: S.WORK_URL, kicker: 'Market intelligence', title: 'Mintec', result: 'Leads up 28%, £1.5M attributed in nine months', text: 'HubSpot consultancy and automation for a global commodity pricing business, with the Salesforce integration fixed and attribution good enough that the revenue could be traced back to the work that produced it.' },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who we are useful to, and who we are not.',
      yes: {
        title: 'A good fit',
        items: [
          'UK businesses from about £1m to £50m turnover',
          'A CRM or line-of-business system already in place, however untidy',
          'A process that happens dozens of times a week and eats skilled time',
          'A director who will own the decision and give it an hour a fortnight',
          'A preference for one thing working over five things piloted',
        ],
      },
      no: {
        title: 'Not us',
        items: [
          'A FTSE 250 transformation programme with a change workstream',
          'Anyone looking for a body-shop day rate rather than a fixed price',
          'Businesses that want a tool shortlist and a licence negotiation',
          'Projects where nobody internally can grant access to the systems',
        ],
      },
    },
    {
      type: 'quote',
      text: 'We publish every price because the thing clients are actually buying is certainty. If we cannot say what something costs before we start, we probably do not understand it well enough to build it.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before getting in touch.',
      items: [
        { q: 'Where should we start?', a: 'With the audit if you have several ideas and no agreed order: two weeks, ' + P.audit + ', and the fee comes off whatever you build. With a scoping session at ' + P.scoping + ' if you already know the one process. With an Embedded AI Lead from ' + P.lead_1 + ' a month if the work is ongoing and nobody internally owns it.' },
        { q: 'Do you publish your prices?', a: 'Yes, all of them, on this site and on the pricing page. Audit ' + P.audit + ', builds from ' + P.build_from + ', connected applications ' + P.build_mid + ', platforms ' + P.build_big + ', Embedded AI Lead from ' + P.lead_1 + ' a month. There is no day rate and no second price list for larger clients.' },
        { q: 'Which CRMs and systems do you work with?', a: 'HubSpot most often, with a decade of HubSpot, CRM and RevOps work behind us, and regularly Microsoft 365, Salesforce, Xero, Shopify, WooCommerce and internal systems with an API. If a system has no API we say so before quoting rather than after.' },
        { q: 'Who owns the tools and the accounts?', a: 'You do. Model subscriptions, API keys and third-party accounts are created in your business name from the start, and documentation comes with every build. Nothing we build depends on a wrapper you have to keep renting from us in order to keep using your own system.' },
        { q: 'How quickly can something be live?', a: 'A single tool or agent is about a week to build, then two to four weeks running supervised, so roughly a month before it acts alone. A connected application is two to three weeks of build, a platform four to six. Dates are fixed at scoping rather than estimated.' },
        { q: 'What makes you different from a general digital agency?', a: 'We build and run an AI product of our own, so the parts that decide whether a system survives its first year, monitoring, cost caps, handback rules, audit trails, are things we have had to get right under real load rather than read about. And we say out loud where AI is the wrong answer.' },
        { q: 'Do you work outside the UK?', a: 'Most clients are UK-based and we are in Borehamwood on the London edge, but the work is delivered remotely with on-site days by agreement. If you sell into the EU we map the EU AI Act obligations alongside UK GDPR as part of the governance work.' },
        { q: 'What if we already have something half-built?', a: 'That is common. The AI app diagnostic at ' + P.diagnostic + ' looks at what exists and tells you whether it is worth rescuing or whether rebuilding the part that matters costs less. Either way you get a straight answer and a price before any further work.' },
      ],
    },
    {
      type: 'related', kicker: 'Start here', h2: 'The three usual first steps.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks and a ranked, costed list of where AI pays in your business. The fee comes off whatever you build next.', meta: P.audit },
        { href: S.LEAD_URL, icon: 'lead', title: 'Embedded AI Lead', text: 'A senior AI lead inside your team one to three days a week, owning the backlog and doing the work in it.', meta: P.lead_1 + ' a month' },
        { href: S.CALC_URL, icon: 'chart', title: 'AI ROI calculator', text: 'A rough read on what a process is costing you now and what automating it would return, before you speak to anyone.', meta: 'Free' },
      ],
    },
    {
      type: 'cta', h2: 'Tell us the process and we will tell you what it costs.',
      text: 'Thirty minutes on the phone. If AI is not the right answer for the thing you have in mind, we will say so on the call rather than quote for it.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Email us instead', href: S.CONTACT_URL, style: 'ghost' }],
      note: 'Revio, Imperial Place, 4 Maxwell Rd, Borehamwood WD6 1JN. All prices exclude VAT.',
    },
  ],
};
