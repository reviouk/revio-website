const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-agents-automation',
  title: 'Agentic AI & AI Automation Agency UK | Revio',
  description: 'AI agents that answer, qualify, chase, book and read documents inside your systems, with guardrails, handback and monitoring. From £4,500 per agent. UK built.',
  keywords: ['agentic ai uk', 'ai agents for business', 'ai automation agency uk', 'ai agent development', 'ai workflow agents'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'Agentic AI & Automation',
  art: 'chat',
  badge: 'Agentic AI & Automation',
  h1: 'Agents that <em class="mint">do the work</em>, inside the systems you already run.',
  sub: 'Not a chat window bolted to the website. Agents that read an enquiry, decide what it is, answer it, chase it, book it, open the document, key the fields and hand back to a person the moment they are out of their depth. From £4,500 an agent, with guardrails and monitoring included.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the build prices', href: '/ai-implementation/', style: 'ghost' },
  ],
  heroProof: ['Written scope of every action an agent may take', 'Supervised approval queue before anything runs alone', 'Handback rules, monitoring and hard cost caps as standard'],
  heroNote: 'All prices exclude VAT and third-party model usage, which stays in your name.',
  service: { name: 'Agentic AI & Automation', type: 'AI agent development and automation', price: P.build_from_num },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'Automation that only moves data is running out of road.',
      body: [
        'Rule-based automation was good at moving a record from A to B. It was hopeless at anything requiring judgement, which is why the rules multiplied, then broke, and why somebody in operations still reads every email before the workflow can fire. Every business we look at has a layer of work that is too varied to write rules for and too dull to justify a person, and it is usually the layer that costs the most.',
        'An agent handles that layer. It reads the unstructured thing, works out what it is, takes the action the business would have taken, and escalates the cases it should not decide alone. The interesting engineering is not the model. It is deciding exactly what it is allowed to do, proving it in front of a human first, and knowing within minutes when it starts behaving differently.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Three patterns', h2: 'The three shapes of agent we build.',
      lede: 'In that order, usually. Internal first, customer-facing last, because trust has to be earned somewhere cheap.',
      items: [
        { icon: 'flow', title: 'Internal workflow agents', text: 'They sit in the middle of a process your team already runs: triaging the shared inbox into the CRM, routing a job to the right engineer, drafting the quote from precedent, keeping the pipeline honest. Low risk, high volume, and the fastest payback of the three.', meta: P.build_from },
        { icon: 'doc', title: 'Research and back-office agents', text: 'They read. Invoices, contracts, applications, specifications, tender packs, supplier emails. Fields are extracted with a confidence score, posted into the system that needs them, and anything borderline lands in a human queue rather than being guessed at.', meta: P.build_from },
        { icon: 'agent', title: 'Customer-facing agents', text: 'They answer, qualify, chase and book across web chat, email, SMS and messaging channels, in your voice, within a written scope of what they may say. Out-of-scope questions are handed to a named person with the whole thread attached.', meta: P.build_mid },
      ],
    },
    {
      type: 'steps', kicker: 'How an agent is built', h2: 'Four steps, and autonomy comes last.',
      items: [
        { title: 'Scope what it may do', text: 'A half-day session at ' + P.scoping + ' produces the action list: the things it may do alone, the things it must propose for approval, the things it must never touch, and the exact conditions under which it stops and calls a person.', meta: 'Half a day' },
        { title: 'Build it into your systems', text: 'Built on your data, in your tenancy, with API keys in your name, and wired into the CRM or line-of-business system rather than running beside it. Logging and an audit trail are part of the build, not an extra.', meta: 'One to three weeks' },
        { title: 'Run it supervised', text: 'Every action queues for a human to approve, edit or reject for two to four weeks. Those decisions are the tuning data and the evidence. Nothing gets released on a feeling that it seems to be working.', meta: 'Two to four weeks' },
        { title: 'Release actions one at a time', text: 'Low-risk actions go autonomous first, the rest keep escalating. Monitoring, alerting and cost caps stay on permanently, and the runbook tells your named owner how to pause it in one step.', meta: 'From week four' },
      ],
    },
    {
      type: 'split', art: 'chart', kicker: 'Guardrails', h2: 'The part that decides whether it is still running in a year.',
      body: [
        'Agents fail in predictable ways. They answer a question they should have escalated, they quietly stop firing after a platform changes an API, they get chatty and the model bill triples, or they become confidently wrong about an edge case nobody thought to test. Each of those has a known countermeasure, and each one is built in rather than promised.',
        'Everything an agent does is logged: the input, the reasoning, the action taken, the human who approved it if one did. That log is what lets you answer a complaint, satisfy an auditor, or work out why the reject rate moved on a Tuesday.',
      ],
      bullets: [
        'A written, versioned scope of permitted actions per agent',
        'Confidence thresholds, with anything below them queued for a person',
        'Handback to a named human with the full thread, not a dead end',
        'Hard monthly cost caps and alerting on model usage',
        'Volume, accuracy and escalation rate on one page every month',
        'A one-step pause your own team can pull without calling us',
      ],
      ctas: [{ label: 'See the build prices', href: '/ai-implementation/', style: 'dark' }],
    },
    {
      type: 'split', tone: 'wash', reverse: true, art: 'pipeline', kicker: 'Proof', h2: 'We run a production agent platform of our own.',
      body: [
        'Revio designed, built and runs LeadSignal, a multi-tenant platform whose agents answer, qualify, score, chase and book leads out of Instagram, Facebook, WhatsApp and SMS conversations. Eight weeks from nothing to live, an approved Meta app, live payments, paying customers on it now.',
        'It is a client and a case study rather than the thing being sold here, but it is the reason the guardrails on this page are specific. Handback rules, cost caps, escalation thresholds and audit trails are not theory to us. They are the things we had to get right to keep a platform approved and running under real message volume.',
      ],
      ctas: [{ label: 'Read the LeadSignal case study', href: '/work/leadsignal/', style: 'dark' }],
    },
    {
      type: 'checks', kicker: 'Scope', h2: 'What comes with an agent, and what does not.',
      groups: [
        {
          title: 'Included',
          items: [
            'A written action scope agreed before any code is written',
            'Integration into your CRM or operational system',
            'Supervised period with a human approval queue',
            'Escalation and handback rules to a named person',
            'Full logging and an audit trail of every action',
            'Monitoring, alerting and hard model cost caps',
            'Runbook, pause control and training for your owner',
            'Thirty days of defect fixes after release',
          ],
        },
        {
          title: 'Not included',
          items: [
            'Model and messaging usage, billed to your own accounts',
            'An agent with no defined scope of action, which we will not build',
            'Anything that makes a final decision on credit, employment or health without a person',
            'Cold outreach or unsolicited messaging at volume',
            'Ongoing tuning after thirty days, which is ' + P.run + ' a month if you want it',
          ],
        },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'When an agent is the right answer, and when it is not.',
      yes: {
        title: 'A good fit',
        items: [
          'The task happens dozens of times a week and varies every time',
          'A person currently reads something before a workflow can run',
          'Response speed is costing you deals or goodwill',
          'The judgement involved is real but not high-stakes',
          'A system of record exists for the agent to write into',
        ],
      },
      no: {
        title: 'Use something simpler',
        items: [
          'A fixed rule would do it, in which case a rule is cheaper and more reliable',
          'The volume is a handful of cases a month',
          'The decision is regulated to the point that a person must make it anyway',
          'Nobody can say what a correct outcome looks like, which makes it untestable',
        ],
      },
    },
    {
      type: 'quote',
      text: 'The question we ask before building any agent is what happens on its worst day. If nobody can answer that, we are not ready to build it yet, whatever the demo looked like.',
      who: 'Rob Wells', role: 'Founder, Revio',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask about AI agents.',
      items: [
        { q: 'What does an agent cost?', a: 'From ' + P.build_from + ' for a single agent doing one job in one system, about a week to build plus the supervised period. An agent that spans two to four connected systems with a queue and permissions for your team is ' + P.build_mid + '. Both exclude VAT and model usage, which is billed to your own account.' },
        { q: 'What is the difference between an agent and an automation?', a: 'An automation follows rules you wrote. An agent decides, within limits you set, and can handle inputs nobody anticipated. That flexibility is the value and the risk, which is why every agent we build has a written list of permitted actions and a person it escalates to.' },
        { q: 'How do you stop it saying something wrong to a customer?', a: 'Customer-facing agents work to a written scope of what they may discuss, with a confidence threshold below which they hand back rather than improvise. They do not quote prices, terms or advice unless those are explicitly in scope. Every thread is logged, and the first weeks run with a person approving each reply.' },
        { q: 'Will customers know they are talking to AI?', a: 'Yes, where it matters. Disclosure is built in for public-facing agents, which is both sensible practice and where UK and EU expectations are heading. In our experience it costs nothing in conversion. What loses people is an agent pretending to be a person and then getting caught.' },
        { q: 'Which systems can agents act inside?', a: 'HubSpot most often, and regularly Microsoft 365, Salesforce, Xero, Shopify, WooCommerce, messaging platforms and internal systems with an API. Where a system has no API we say so before quoting. Actions are always scoped to the minimum permissions the job needs.' },
        { q: 'What happens when the agent gets it wrong?', a: 'It escalates before it acts when confidence is low, and everything it does is logged, so a wrong action can be found, explained and reversed. The supervised period exists to surface those cases while a human is still approving each one. Your team can pause any agent in one step without calling us.' },
        { q: 'How long before it runs on its own?', a: 'Usually four to six weeks from kick-off. A week or so of building, then two to four weeks supervised while the approval and reject rates settle. Autonomy is then granted action by action, starting with the lowest-risk ones, rather than all at once on a go-live date.' },
        { q: 'Do we need the audit first?', a: 'Only if you are not sure which process to hand an agent. If you already know, a scoping session at ' + P.scoping + ' is enough to get a fixed price and a date. If there are six candidates and no agreed order, the two-week audit at ' + P.audit + ' will save you more than it costs.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Nearby work.',
      items: [
        { href: '/ai-workflow-automation/', icon: 'flow', title: 'AI Workflow Automation', text: 'The rules-plus-judgement layer around the agents: routing, triage, handoffs and the reporting that proves it works.', meta: P.build_from },
        { href: '/ai-chatbot/', icon: 'chat', title: 'AI Chatbot', text: 'A scoped customer-facing assistant on the website, trained on your own content and wired into the CRM.', meta: P.chatbot },
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'The register, the policy and the audit trail behind every agent that talks to a customer.', meta: P.governance },
      ],
    },
    {
      type: 'cta', h2: 'Bring us the job nobody wants to do forty times a week.',
      text: 'Thirty minutes is usually enough to tell you whether it should be an agent, a fixed rule, or left alone.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'See all prices', href: S.PRICING_URL, style: 'ghost' }],
      note: 'Agents from ' + P.build_from + ', connected across systems from ' + P.build_mid + '. Prices exclude VAT.',
    },
  ],
};
