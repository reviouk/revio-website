const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-workflow-automation',
  title: 'AI Workflow Automation UK: Automate Admin | Revio',
  description: 'AI workflow automation for UK businesses: the copy-paste between systems, document extraction, inbox triage and quoting, built and monitored. From £4,500.',
  keywords: ['ai workflow automation uk', 'business process automation ai', 'automate admin with ai', 'zapier make consultant uk', 'n8n consultant uk', 'document extraction ai uk'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'AI Workflow Automation',
  art: 'pipeline',
  badge: 'AI Workflow Automation',
  h1: 'The copy-paste job between two systems, <em class="mint">done without you</em>.',
  sub: 'Most of the time AI saves in a business is not clever. It is the invoice retyped into Xero, the enquiry re-entered in the CRM, the quote assembled from three past quotes, the report rebuilt every Monday. We automate that work with tools in your own name, and we monitor it so it does not break in silence. From £4,500.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'Start with the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['Built in your accounts, handed over documented', 'Monitored, with alerts when a step fails', 'Hours returned measured at 30, 60 and 90 days'],
  service: { name: 'AI Workflow Automation', type: 'Process automation', price: P.build_from_num },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'Your best people spend a day a week moving data between screens.',
      body: [
        'Ask a team where the time goes and you get the same answers everywhere. An email arrives, somebody reads it, decides who it is for, copies four fields into the CRM, attaches the PDF, and raises a task. A supplier invoice comes in, somebody keys the lines into the accounts package. A quote is needed, so somebody opens the last three similar ones and edits them. On Monday, somebody exports four reports and pastes them into a deck.',
        'None of that is skilled work, all of it is done by skilled people, and it is where automation pays before anything more ambitious does. The reason it has not been fixed is rarely the technology. It is that each job is slightly too messy for a plain rule and slightly too small to justify a project. Language models close that gap: they read the unstructured thing, decide what it is, and hand a structured result to a process that was always straightforward.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'The usual suspects', h2: 'Twelve things we automate most.',
      lede: 'Short list, deliberately. These are the jobs that come up in almost every business we audit.',
      cols: 4,
      items: [
        { icon: 'mail', title: 'Inbox triage', text: 'Shared inboxes read, classified, routed and logged, with the enquiry on the right record.' },
        { icon: 'doc', title: 'Invoice and receipt extraction', text: 'Line items, dates, references and totals pulled out and keyed into the accounts system.' },
        { icon: 'brief', title: 'Contract and document review', text: 'Key terms, dates and obligations lifted from PDFs into a table a person can check.' },
        { icon: 'pound', title: 'Quote and proposal drafting', text: 'A first draft assembled from your own precedent and price list, for a human to approve.' },
        { icon: 'data', title: 'CRM data entry and hygiene', text: 'Records created, matched, deduplicated and enriched so the pipeline report is worth reading.' },
        { icon: 'chart', title: 'Weekly and monthly reporting', text: 'Reports produced rather than assembled, with the commentary drafted from the numbers.' },
        { icon: 'tick', title: 'Onboarding and compliance packs', text: 'New client or new starter paperwork chased, checked, filed and ticked off.' },
        { icon: 'search', title: 'Tender and opportunity screening', text: 'Portals watched, notices read, and only the ones that fit your criteria put in front of someone.' },
        { icon: 'people', title: 'CV and application screening', text: 'Applications summarised against the brief, with the reasoning shown and the decision left to a person.' },
        { icon: 'calendar', title: 'Scheduling and reminders', text: 'Appointments confirmed, rescheduled and chased without anybody watching a diary.' },
        { icon: 'repair', title: 'Order and job status updates', text: 'Customers told where their order or job is, from the systems that already know.' },
        { icon: 'book', title: 'Knowledge answers for staff', text: 'Internal questions answered from your own handbooks, policies and past tickets.' },
      ],
      note: 'If your version of one of these is genuinely unusual, that is normally a half-day of scoping at ' + P.scoping + ' rather than a reason it cannot be done.',
    },
    {
      type: 'steps', kicker: 'How we build it', h2: 'Pick one process, prove it, then move to the next.',
      items: [
        { title: 'Watch the job being done', text: 'We sit with the person who does it and record the actual steps, including the exceptions they handle without thinking about it. The exceptions are where automations die, so they get written down first.', meta: 'Week 1' },
        { title: 'Agree the number', text: 'Hours a week, error rate, or days of delay. One measure, taken before we build, so the argument at the end is about evidence rather than impressions.', meta: 'Week 1' },
        { title: 'Build it in your own accounts', text: 'Make, Zapier, n8n, HubSpot workflows, Power Automate, or custom code where the platforms would be a bad fit. Your subscriptions, your logins, our build.', meta: 'Weeks 2–4' },
        { title: 'Run it alongside the human', text: 'For a fortnight the automation proposes and a person checks. Disagreements are the tuning list. Only when the check stops finding anything does it run unattended.', meta: 'Week 5' },
        { title: 'Monitor, alert and document', text: 'Every run logged, failures alerted to a person rather than an inbox nobody reads, a written runbook, and a named owner inside your business.', meta: 'Week 6 onward' },
      ],
    },
    {
      type: 'table', kicker: 'What it is worth', h2: 'Three automations and the arithmetic behind them.',
      head: ['Process', 'Before', 'After', 'Typical annual saving'],
      rows: [
        ['Shared inbox triage, 120 emails a day', 'About 90 minutes a day of someone senior reading and routing', 'Classified, routed and logged; a person reviews the exceptions', '250 to 350 hours'],
        ['Supplier invoice keying, 400 a month', 'Around 4 minutes each, plus the corrections found at month end', 'Extracted and posted for approval; roughly 30 seconds each', '280 to 320 hours'],
        ['Quote drafting from precedent', 'Two to three hours per quote, and inconsistent pricing', 'A first draft in minutes from your own prior work, checked by a human', '150 to 400 hours, plus fewer pricing errors'],
      ],
      note: 'Ranges are from work we have delivered and from audits we have run. We do not publish a saving for your business until we have measured the before, which is the first week of every build.',
    },
    {
      type: 'split', tone: 'wash', art: 'network', kicker: 'How it is built', h2: 'In your name, on tools you could hire someone else to run.',
      body: [
        'Automation work goes wrong in two predictable ways. The first is a consultancy building on its own accounts, so the day you part company the whole thing stops. The second is a chain of no-code steps nobody documented, which fails quietly in month four and is discovered in month six when the numbers do not add up.',
        'We build every workflow in subscriptions in your own name, with credentials you hold, and we pick the simplest tool that will survive: Make, Zapier or n8n for the plumbing, HubSpot or Power Automate workflows where the CRM or Microsoft stack already does the job, and custom code only where the platforms genuinely cannot hold the logic. Everything is monitored, and a failure raises an alert to a person.',
      ],
      bullets: ['Your accounts, your credentials, your data, from day one', 'The simplest tool that will hold, not the most impressive one', 'Run logs, failure alerts and a documented retry path', 'A written runbook and a named internal owner', 'Handover designed in, so leaving us is a decision rather than a risk'],
      ctas: [{ label: 'See how we work', href: '/ai-implementation/', style: 'dark' }],
    },
    {
      type: 'checks', kicker: 'Scope', h2: 'What a build includes.',
      groups: [
        { title: 'Included', items: ['Process mapping with the people who do the work', 'A measured baseline before anything is built', 'Build, test and exception handling', 'Connections to the systems you already run', 'A fortnight running alongside a human before it acts alone', 'Monitoring, alerting and error retries', 'Runbook, training and named internal owner', 'A 30, 60 and 90 day adoption check'] },
        { title: 'Not included', items: ['Platform subscriptions and model usage, billed in your own accounts', 'Replacing your CRM or finance system', 'Automating a process nobody can describe, which is a scoping job first', 'Unlimited change requests after handover, which is what ' + P.run + ' a month covers', 'Any automation that would send customer communications without a human ever seeing them, unless you ask for it in writing'] },
      ],
    },
    {
      type: 'compare', tone: 'wash', kicker: 'Fit', h2: 'Which processes are worth automating first.',
      yes: { title: 'Good candidates', items: ['Runs at least weekly, ideally daily', 'The same shape every time, with a handful of known exceptions', 'The inputs already arrive digitally: email, PDF, form, API', 'Somebody can describe what a correct output looks like', 'More than about four hours a week of someone’s time'] },
      no: { title: 'Leave these alone for now', items: ['Once a quarter, where the setup costs more than the saving', 'Decisions that need judgement and carry legal or clinical risk', 'Processes about to be replaced by a new system anyway', 'Anything where the underlying data is wrong and nobody has fixed it', 'Work that is only slow because two departments disagree'] },
    },
    {
      type: 'quote',
      text: 'The automation that saves ten hours a week is worth nothing if it fails in April and nobody notices until June. Monitoring is not an extra on these builds, it is most of the reason they are still running a year later.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they start.',
      items: [
        { q: 'What does a workflow automation cost?', a: 'One tool or one agent starts at ' + P.build_from + '. A connected app that spans several systems with its own interface is ' + P.build_mid + ', and a platform is ' + P.build_big + '. Most first projects are a single process at the lower figure. A half day of scoping at ' + P.scoping + ' will give you a fixed quote before you commit.' },
        { q: 'Do we need AI for this, or is it just automation?', a: 'Often it is just automation, and we will say so. AI earns its place where something unstructured has to be read and understood: an email, a PDF, a free-text note, a CV. Where the input is already structured, plain rules are cheaper, faster and more reliable, and that is what we build.' },
        { q: 'Which tools do you use?', a: 'Make, Zapier and n8n for connecting systems, HubSpot workflows where the CRM is the centre of things, Power Automate inside a Microsoft estate, and custom code where the platforms would be forced. The choice is driven by what your team can maintain after we have gone, not by what we prefer.' },
        { q: 'What happens when something breaks?', a: 'Every run is logged and every failure raises an alert to a named person, with the payload attached so it can be re-run rather than reconstructed. Steps that can safely retry do. Where a build is on support at ' + P.run + ' a month we hold the pager; where it is not, your owner does, with the runbook.' },
        { q: 'Will this replace jobs?', a: 'In the work we have delivered it has moved people off keying and on to the parts of the job that need them. That is the honest, commercial answer rather than a reassuring one: if you are buying this purely to cut headcount, say so at the start, because it changes which processes are worth doing first.' },
        { q: 'How do you prove it worked?', a: 'We measure the process before we touch it, usually hours a week, error rate or elapsed days. The same measure is taken at 30, 60 and 90 days after launch, and it goes on one page you review with us. If the number has not moved, that is our problem to fix.' },
        { q: 'Can our own team maintain it?', a: 'Yes, and that is the design intent. Builds are handed over with a runbook, an architecture note, credentials in your name and a training session for the owner. Clients who want to keep us on do so because they have more to build, not because they are locked in.' },
        { q: 'Where should we start if we are not sure?', a: 'The AI Opportunity Audit at ' + P.audit + ' takes two weeks, maps where the time actually goes, and gives you a ranked list with an estimated saving against each item. Its fee comes off a build that follows. If you already know which process hurts, skip it and book a scoping session instead.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where this leads.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks and a ranked list of the processes worth automating, with a saving estimated against each.', meta: P.audit },
        { href: S.LEAD_URL, icon: 'lead', title: 'Embedded AI Lead', text: 'When there are a dozen of these to build and nobody internally whose job it is to own the backlog.', meta: P.lead_1 },
        { href: '/ai-agents-automation/', icon: 'agent', title: 'AI Agents & Automation', text: 'When the job needs an agent that decides and acts, rather than a workflow that follows a path.', meta: P.build_from },
      ],
    },
    {
      type: 'cta', h2: 'Name the process that annoys you most.',
      text: 'Thirty minutes on one job your team does every day is usually enough to say whether it can be automated, roughly what it would cost, and what you would get back. If the honest answer is that it is not worth it, you will hear that instead.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Work out the return', href: S.CALC_URL, style: 'ghost' }],
      note: 'Prices exclude VAT. Every subscription, credential and workflow is created in your own name.',
    },
  ],
};
