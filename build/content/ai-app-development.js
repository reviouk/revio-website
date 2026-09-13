const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-app-development',
  title: 'AI Web & App Development for UK Businesses | Revio',
  description: 'Internal tools, client portals and calculators built with AI-assisted engineering, fixed price and date, in your own repository from day one. From £4,500.',
  keywords: ['ai app development uk', 'internal tool development uk', 'custom web app agency uk', 'rapid app development', 'ai assisted software development'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'AI App Development',
  art: 'code',
  badge: 'AI Web & App Development',
  h1: 'Built in weeks, not quarters, and it is <em class="mint">yours from day one.</em>',
  sub: 'Internal tools, client portals, calculators and customer-facing apps, built with AI-assisted engineering and shipped to a fixed price and a fixed date. The code lives in your own repository from the first commit. We run our own product, LeadSignal, the same way we build for you.',
  ctas: [
    { label: 'Book a scoping call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See what we have built', href: S.WORK_URL, style: 'ghost' },
  ],
  heroProof: ['Fixed price and date, agreed before work starts', 'Code in your own repository from day one', 'Built and tested by the same team that runs LeadSignal in production'],
  service: { name: 'AI Web & App Development', type: 'Custom software build', price: P.build_from_num },
  sections: [
    {
      type: 'intro', kicker: 'Why this is different',
      h2: 'AI-assisted does not mean AI-generated and unowned.',
      body: [
        'A lot of software gets built fast now, and a lot of it is built badly, because speed and ownership are being treated as opposites. We build fast because AI-assisted engineering genuinely is faster, and we build it properly because a senior engineer reviews, tests and owns every part of it. Nothing ships that we would not be comfortable running ourselves.',
        'We know that is not a claim to take on trust. LeadSignal, our own AI setter product, was built in eight weeks with the same team and the same process, has an approved Meta app, live payments and paying customers today. It is the proof that this way of building holds up once real users and real money depend on it.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What we build', h2: 'Four shapes of app, one process.',
      items: [
        { icon: 'build', title: 'Internal tools', text: 'Dashboards, quoting tools, ops systems that replace a spreadsheet or a manual process with something the whole team can rely on.' },
        { icon: 'people', title: 'Client portals', text: 'A branded space where your customers see their own data, documents or status, wired into the CRM or systems you already run.' },
        { icon: 'chart', title: 'Calculators & configurators', text: 'Interactive pricing, ROI or product configuration tools that turn a static page into something a prospect actually uses.' },
        { icon: 'chat', title: 'Customer-facing apps', text: 'Booking, self-service and account tools built for real customer traffic, not a demo audience of one.' },
      ],
    },
    {
      type: 'steps', kicker: 'How it runs', h2: 'Scope, build, ship, in that order.',
      items: [
        { title: 'Scoping', text: 'A half-day working session to agree exactly what the app does, who uses it and what it connects to, ending in a fixed price and date.', meta: P.scoping },
        { title: 'Build', text: 'Development in short, visible cycles, with something working to look at every week rather than a silent wait for a big reveal.', meta: 'Weeks 1 onward' },
        { title: 'Test', text: 'Automated tests written alongside the code, and a manual pass through every path a real user or customer could take.', meta: 'Ongoing' },
        { title: 'Ship', text: 'Launched into your own hosting and repository, with documentation and a short handover session for whoever will maintain it.', meta: 'Go-live' },
      ],
    },
    {
      type: 'tiers', kicker: 'Priced by size', h2: 'Three sizes, every price published.',
      lede: 'Every project starts with scoping, so the tier reflects the real shape of the work, not a guess.',
      items: [
        { name: 'Tool or agent', price: P.build_from, per: 'from', text: 'One clearly scoped tool or automation: a calculator, an internal dashboard, a single agent doing one job well.', includes: ['Scoping session included', 'Automated tests around core logic', 'Deployed to your own hosting', 'Documentation and handover'], href: S.BOOK_URL, cta: 'Talk about this' },
        { name: 'Connected app', price: P.build_mid, per: 'one-off', text: 'An app wired into your CRM or other systems: a client portal, a multi-step tool, something with real integrations.', includes: ['Everything in Tool or agent', 'Integration with CRM or existing systems', 'User accounts and permissions', 'Staff training on launch'], best: 'businesses needing the app to talk to what they already run', featured: true, href: S.BOOK_URL, cta: 'Talk about this' },
        { name: 'Platform', price: P.build_big, per: 'from', text: 'A multi-user platform with its own data model, roles and reporting, built the way LeadSignal itself was built.', includes: ['Everything in Connected app', 'Multi-tenant or multi-role architecture', 'Reporting and admin tooling', 'Phased delivery with milestones'], href: S.BOOK_URL, cta: 'Talk about this' },
      ],
      note: 'Every price excludes VAT. Run and support after launch is available separately from £450 a month.',
    },
    {
      type: 'split', tone: 'wash', art: 'code', kicker: 'How we build it', h2: 'AI writes the first draft. A senior engineer decides what ships.',
      body: ['AI-assisted engineering means the boilerplate, the scaffolding and much of the first pass of code is generated fast, so time goes into the parts that matter: the data model, the edge cases, the security and the tests. Every line is reviewed by a senior engineer before it ships, which is the difference between this and the vibe-coded apps we rescue elsewhere on this site.'],
      bullets: ['Automated tests around the logic that would cost money if it broke', 'Authorisation and data isolation built in from the first commit, not added later', 'Code in your repository throughout, never held on our infrastructure', 'A named engineer accountable for the build, not a rotating team'],
      ctas: [{ label: 'See LeadSignal, built the same way', href: '/work/leadsignal/', style: 'dark' }],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and who it is not.',
      yes: { title: 'A good fit', items: ['You know roughly what the app needs to do and want it built properly', 'A fixed price and date matter more than an open-ended engagement', 'You want to own the code and hosting outright', 'The work is a defined tool, portal or app rather than an ongoing programme'] },
      no: { title: 'Not this, yet', items: ['You have an existing AI-built app that is breaking, see AI App Rescue', 'The work is really about replacing an old system, see Legacy Modernisation', 'You want an ongoing AI backlog managed for you, see Embedded AI Lead'] },
    },
    {
      type: 'quote', tone: 'wash',
      text: 'We do not ask a client to trust a method we have not bet our own product on. LeadSignal runs on the same process, the same tests and the same standards as anything we build for someone else.',
      who: 'Rob Wells', role: 'Founder, Revio',
    },
    {
      type: 'checks', kicker: 'What is included', h2: 'What comes with every build.',
      groups: [
        { title: 'Included', items: ['A fixed price and date, agreed before work starts', 'Automated tests around the logic that matters', 'Code and hosting in your own name', 'Documentation and a handover session'] },
        { title: 'Not included', items: ['Ongoing support after launch, available separately from £450 a month', 'Scope added after the build starts, quoted as a change'] },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'How is this different from using Lovable or Bolt.new ourselves?', a: 'Those tools are good for a first prototype. This is a senior engineer using AI-assisted tooling to build production software, with tests, security review and ownership of every decision, aimed at real users rather than a demo.' },
        { q: 'What does a fixed price actually cover?', a: 'Everything agreed in the scoping session. If new requirements appear once the build starts, they are quoted as a separate change rather than absorbed silently or used to justify slipping the date.' },
        { q: 'Do we own the code?', a: 'Yes, entirely. It is built in your own repository and deployed to your own hosting from the first commit. We do not retain rights, access or a dependency on our infrastructure.' },
        { q: 'How long does a typical build take?', a: 'A single tool is usually two to four weeks. A connected app is four to eight weeks. A platform is phased over several months with working milestones throughout.' },
        { q: 'Can you build on our existing codebase?', a: 'Yes, if it is a reasonable foundation. If it needs stabilising first, we would say so and point you at AI App Rescue rather than building new features on unstable ground.' },
        { q: 'What happens after launch?', a: `Run and support is available from ${P.run} a month, covering fixes, small changes and monitoring, or you can take the documentation and run it yourselves.` },
        { q: 'Do you use AI in the finished product, or just to build it?', a: 'Both, where it earns its place. Some builds are plain software with no AI in the finished product. Others include an agent, a chatbot or automation as the actual feature, which we scope and price the same way.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: '/ai-app-rescue/', icon: 'repair', title: 'AI App Rescue', text: 'For an existing AI-built app that needs fixing rather than building from scratch.', meta: P.build_from },
        { href: '/legacy-modernisation/', icon: 'layers', title: 'Legacy Software Modernisation', text: 'For replacing an old Access database, spreadsheet or discontinued tool.', meta: P.legacy_discovery },
        { href: '/embedded-ai-lead/', icon: 'lead', title: 'Embedded AI Lead', text: 'For an ongoing backlog of builds rather than a single defined project.', meta: P.lead_1 },
      ],
    },
    {
      type: 'cta', h2: 'Scope it properly before anyone writes a line of code.',
      text: 'A half-day scoping session gets you a fixed price and a fixed date. Book a call to start it.',
      ctas: [{ label: 'Book a scoping call', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
