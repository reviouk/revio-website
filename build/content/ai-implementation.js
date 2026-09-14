const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-implementation',
  title: 'AI Implementation UK: Build & Integration Services | Revio',
  description: 'AI implementation for UK businesses: a defined system built to a fixed price and date, wired into the CRM you already run, supervised then monitored. From £4,500.',
  keywords: ['ai implementation uk', 'ai implementation services', 'ai integration consultancy', 'build ai into crm', 'ai development agency uk'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'AI Build & Implementation',
  art: 'pipeline',
  badge: 'AI Build & Implementation',
  h1: 'A defined system, built to a <em class="mint">fixed price and a fixed date</em>.',
  sub: 'We build one thing properly: an agent, a tool or a connected application, wired into the CRM you already run, watched by a human before it is allowed to act alone, and monitored after it is. Builds start at £4,500 and every price is published.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See build prices', href: '#tiers', style: 'ghost' },
  ],
  heroProof: ['Fixed scope, fixed price, fixed delivery date', 'Built into your existing CRM, not alongside it', 'Documentation and credentials in your name on day one'],
  heroNote: 'All prices exclude VAT. No day rate, no time and materials.',
  service: { name: 'AI Build & Implementation', type: 'AI implementation and integration', price: P.build_from_num },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'The pilot worked. Eight months later it is still a pilot.',
      body: [
        'Most AI that fails in a business does not fail because the model was wrong. It fails because it was never wired into anything. It ran in a browser tab, one enthusiastic person fed it, the output was pasted into the CRM by hand, and when that person went on holiday the whole thing stopped. Nobody could say what it had saved, so nobody defended it at budget time.',
        'Implementation is the unglamorous half that makes the difference: the integration into the system your team already lives in, the permissions, the error handling, the supervision period where a human approves every action, the monitoring that tells you when it drifts, and the runbook that means somebody other than us can look after it. We quote that half openly, because it is where the work is.',
      ],
    },
    {
      type: 'steps', kicker: 'How an engagement runs', h2: 'Four steps, and nothing is autonomous until step four.',
      items: [
        { title: 'Pick one process', text: 'A half-day scoping session at ' + P.scoping + ' turns an idea into a specification: the trigger, the inputs, the actions it may take, the systems it touches, what success looks like in numbers, and the cases where it must stop and ask a person. You get a fixed price and a delivery date out of it, or a straight answer that this should not be built.', meta: 'Half a day' },
        { title: 'Build it', text: 'We build on your own data, in your own tenancy, with accounts and API keys in your business name. Integration into the CRM is part of the build rather than a phase two. You see working software at the end of each week, not a status report about it.', meta: 'One to six weeks' },
        { title: 'Run it supervised', text: 'For the first two to four weeks every action the system takes is queued for a human to approve, reject or edit. Those decisions are the tuning data. We watch the reject rate come down together, and nothing is released until you are comfortable with the numbers in front of you.', meta: 'Two to four weeks' },
        { title: 'Let it off the lead', text: 'Autonomy is granted case by case, not all at once. Low-risk actions go first, edge cases keep escalating to a person, and monitoring and alerting stay switched on. By then the runbook is written and your named owner has been trained on it.', meta: 'From week four' },
      ],
    },
    {
      type: 'tiers', tone: 'wash', kicker: 'Build prices', h2: 'Three sizes of build, published in full.',
      lede: 'Every price excludes VAT and third-party tooling. The scoping session is credited against the build if you go ahead.',
      items: [
        { name: 'One tool or one agent', price: P.build_from, cadence: 'About one week', text: 'A single job done properly: a document reader, an enquiry triage agent, a drafting tool, a reporting job. One trigger, one system, one clear measure of success.', includes: ['Scoping specification and fixed quote', 'Build on your own data and tenancy', 'One system integration, usually the CRM', 'Supervised run with an approval queue', 'Monitoring, alerting and error handling', 'Runbook and a training session for the owner'], best: 'a first build, or a process that eats hours in one department', href: S.BOOK_URL, cta: 'Talk about a first build' },
        { name: 'Connected application', price: P.build_mid, cadence: 'Two to three weeks', text: 'Several steps and several systems: an agent that reads, decides, writes into two or three places and hands difficult cases to a person, with an interface your team can actually use.', includes: ['Everything in the single build', 'Two to four system integrations', 'A user interface or queue for your team', 'Role-based permissions and an audit trail', 'Reporting on volume, accuracy and hours returned', 'Four weeks of supervised running'], best: 'a process that crosses departments and systems', featured: true, flag: 'Most chosen', href: S.BOOK_URL, cta: 'Talk about a connected build' },
        { name: 'Platform', price: P.build_big, cadence: 'Four to six weeks', text: 'A product rather than a tool: multiple agents, multiple channels, its own data model, users and billing if it needs them. This is the shape of work we did to build and run our own AI platform.', includes: ['Everything in the connected application', 'Multi-agent architecture and orchestration', 'Multi-tenant or multi-site data model', 'Third-party app reviews and approvals where needed', 'Load, cost and failure testing before release', 'Handover to your team or an ongoing run agreement'], best: 'businesses building something they intend to sell or run at scale', href: S.BOOK_URL, cta: 'Talk about a platform' },
      ],
      note: 'Support and iteration after delivery is ' + P.run + ' a month and is optional. Data configuration work, where records need serious cleaning before anything can be built on them, is quoted separately at ' + P.data + '.',
    },
    {
      type: 'cards', kicker: 'What gets built', h2: 'The systems businesses actually ask for.',
      lede: 'Ordinary work, done to a standard that survives a holiday, a leaver and an audit.',
      items: [
        { icon: 'mail', title: 'Enquiry and inbox triage', text: 'Incoming email, forms and DMs read, classified, answered where the answer is obvious, and keyed into the CRM with the right owner and source attached. The slow part of a Monday, removed.' },
        { icon: 'doc', title: 'Document intelligence', text: 'Invoices, contracts, applications, delivery notes and specifications read and their fields posted into the system that needs them, with confidence scores and a human queue for anything borderline.' },
        { icon: 'brief', title: 'Quoting and proposals', text: 'Drafts assembled from your own past work and current price list, in your house format, for a person to check and send. Faster, and more consistent than five people writing from memory.' },
        { icon: 'data', title: 'CRM wiring and hygiene', text: 'Ownership, lifecycle stages, attribution and deduplication fixed so that anything built on top of the CRM can be trusted. A decade of HubSpot and RevOps work sits behind this one.' },
        { icon: 'agent', title: 'Customer-facing agents', text: 'Agents that answer, qualify, chase and book across web chat, email and messaging, with a written scope of what they may say, and handback to a human the moment they are out of their depth.' },
        { icon: 'chart', title: 'Reporting that produces itself', text: 'The weekly pack built from the source systems rather than assembled by an analyst on a Friday, with the definitions written down so two departments stop arguing about the numbers.' },
      ],
    },
    {
      type: 'split', tone: 'wash', art: 'chart', kicker: 'Proof', h2: 'We build these for clients because we built one for ourselves.',
      body: [
        'Revio designed, built and runs LeadSignal, a multi-tenant AI platform that answers, qualifies, scores and books leads out of Instagram, Facebook, WhatsApp and SMS conversations. It went from nothing to live in eight weeks, has an approved Meta app, takes live payments and has paying customers on it today.',
        'That matters here for one reason. Everything we ask a client to do, we have had to do ourselves under real load: the supervised period, the monitoring, the cost control when a model gets chatty, the handback rules, the audit trail when a platform reviewer asks what the agent is allowed to say.',
      ],
      bullets: [
        'Eight weeks from first commit to a live, paid platform',
        'An approved Meta app and production messaging permissions',
        'Monitoring, alerting and cost caps on every agent',
        'Mintec: leads up 28% and £1.5M of deals attributed in nine months',
      ],
      ctas: [{ label: 'Read the LeadSignal case study', href: '/work/leadsignal/', style: 'dark' }],
    },
    {
      type: 'checks', kicker: 'Scope', h2: 'What comes with every build, and what does not.',
      groups: [
        {
          title: 'Included in the price',
          items: [
            'A written specification agreed before the build starts',
            'A fixed price and a fixed delivery date',
            'Accounts, API keys and tooling created in your business name',
            'Integration into the CRM or system you already run',
            'A supervised period with a human approval queue',
            'Monitoring, alerting, error handling and cost caps',
            'A runbook and a training session for your named owner',
            'Thirty days of defect fixes after delivery',
          ],
        },
        {
          title: 'Not included',
          items: [
            'Third-party licences and model usage, which you pay for directly and own',
            'Serious data clean-up, quoted separately at ' + P.data,
            'Replacing your CRM or core line-of-business system',
            'Ongoing support after the thirty days, which is ' + P.run + ' a month if you want it',
            'Scope added mid-build. It goes on the next fixed quote instead',
            'Formal certification or conformity assessment work',
          ],
        },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'When a fixed-price build is right, and when it is not.',
      yes: {
        title: 'Build now',
        items: [
          'You can name the process and roughly what good looks like',
          'The volume is high enough that saved hours are real money',
          'A system of record exists that the build can write into',
          'Somebody internally will own it once it is live',
          'You would rather have one thing working than five things piloted',
        ],
      },
      no: {
        title: 'Start somewhere else',
        items: [
          'You are not yet sure which process to pick, in which case the audit at ' + P.audit + ' comes first',
          'The list is long and ongoing, which is what an Embedded AI Lead is for',
          'The data is in a state where nothing could be trusted to read it yet',
          'What you want is training and adoption rather than software',
        ],
      },
    },
    {
      type: 'quote',
      text: 'A build is finished when somebody who does not work for us can run it, explain it and switch it off. Anything short of that is a demo with an invoice attached.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before commissioning a build.',
      items: [
        { q: 'What are the payment terms?', a: 'Thirty per cent on kick-off, forty per cent at the agreed mid-point, thirty per cent on delivery, each invoiced on fourteen-day terms. Prices exclude VAT. There is no day rate and no time-and-materials billing, so the number on the quote is the number on the invoices.' },
        { q: 'What happens if the scope changes half way through?', a: 'The current build finishes as specified and the new request is priced as its own fixed quote, usually within a day. That is deliberate. Absorbing changes mid-build is how fixed prices quietly become estimates and delivery dates slip past the quarter.' },
        { q: 'Which CRM and systems do you integrate with?', a: 'HubSpot most often, with a decade of HubSpot work behind it, and regularly Microsoft 365, Salesforce, Xero, Shopify, WooCommerce and bespoke internal systems with an API. If the system has no API we say so before quoting rather than after.' },
        { q: 'Who owns what you build?', a: 'You do. Code, configuration and documentation are yours, and the accounts, API keys and model subscriptions are created in your business name from day one. There is no wrapper you have to keep renting from us in order to keep your own system running.' },
        { q: 'How long until it is actually live?', a: 'A single tool or agent is about a week to build and then two to four weeks running supervised, so roughly a month before it acts alone. A connected application is two to three weeks of build, a platform four to six. Dates are fixed at the scoping session, not estimated.' },
        { q: 'Do we have to take the support agreement?', a: 'No. Thirty days of defect fixes are included and a runbook comes with every build, so an internal team can take it. Support and iteration at ' + P.run + ' a month exists for businesses that would rather we kept watching it, and it can start or stop monthly.' },
        { q: 'How do you stop it doing something stupid or expensive?', a: 'Three ways, all built in. A written scope of the actions it is permitted to take, an approval queue for anything outside them, and hard cost caps with alerting on model usage. The supervised period exists to find the edge cases while a person is still checking every action.' },
        { q: 'Can you take over something another supplier built?', a: 'Often, yes. That usually starts with the AI app diagnostic at ' + P.diagnostic + ', which tells you honestly whether the existing work is worth rescuing or whether it costs less to rebuild the part that matters.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Before and after a build.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks and a ranked list of where AI pays here, if you are not yet certain which process to build first.', meta: P.audit },
        { href: '/ai-agents-automation/', icon: 'agent', title: 'Agentic AI & Automation', text: 'Agents that answer, qualify, chase, book and take actions inside your systems, with guardrails and handback.', meta: P.build_from },
        { href: '/ai-app-rescue/', icon: 'repair', title: 'AI App Rescue', text: 'A build that stalled, broke or was left behind by its supplier, diagnosed and then either fixed or rebuilt.', meta: P.diagnostic },
      ],
    },
    {
      type: 'cta', h2: 'Bring one process and we will tell you what it costs to build.',
      text: 'Thirty minutes is usually enough to size it. If it is not the right thing to build first, we will say that on the call rather than quote for it.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'See all prices', href: S.PRICING_URL, style: 'ghost' }],
      note: 'Builds from ' + P.build_from + ', scoping session ' + P.scoping + ' and credited against the build. All prices exclude VAT.',
    },
  ],
};
