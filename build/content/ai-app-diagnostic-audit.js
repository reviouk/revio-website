const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-app-diagnostic-audit',
  title: 'AI App Diagnostic Audit: £495, 3-5 Days | Revio',
  description: 'A written, independent audit of an AI-built app: security, data, auth, tests, hosting and cost. £495, 3-5 days, fee credited against a rescue or fix.',
  keywords: ['ai app diagnostic audit', 'code review for ai generated app', 'app security audit uk', 'vibe code audit', 'ai app health check'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }, { label: 'AI App Rescue', href: '/ai-app-rescue/' }],
  crumbLabel: 'Diagnostic Audit',
  art: 'code',
  badge: 'AI App Diagnostic Audit',
  h1: 'Know exactly what is wrong with the app, in writing, in a week.',
  sub: 'A fixed-fee, independent check of an AI-built app: security, data handling, authentication, tests, hosting and cost. You get a written report with a fix, refactor or rebuild verdict, not a sales conversation dressed up as one.',
  ctas: [
    { label: 'Book a diagnostic call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See AI App Rescue', href: '/ai-app-rescue/', style: 'ghost' },
  ],
  heroProof: ['Fixed fee, no hidden scope', '3-5 working days to a written report', 'Fee credited if you go on to a rescue'],
  service: { name: 'AI App Diagnostic Audit', type: 'Code and infrastructure audit' },
  sections: [
    {
      type: 'intro', kicker: 'Why this exists',
      h2: 'An app can look finished and still be a liability.',
      body: [
        'A working demo tells you the happy path works. It does not tell you whether another user can read your customers\' data, whether the database survives Black Friday traffic, whether a leaked API key is quietly running up a bill, or whether anyone could restore the last backup if they had to. Those questions do not show up by clicking around the app. They show up in the code, the infrastructure settings and the account dashboards behind it.',
        'The diagnostic audit answers them in writing. It is the same process we run before any AI App Rescue, sold on its own for founders, boards and investors who want an honest, independent answer before they commit to a fix, a rebuild or an investment decision.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What gets checked', h2: 'Seven areas, the same ones every time.',
      lede: 'A named engineer works through your live codebase and infrastructure, not a questionnaire.',
      items: [
        { icon: 'lock', title: 'Security', text: 'Authorisation on every route, tenant and row-level isolation, where secrets and keys actually live, and whether admin functions are reachable by anyone who guesses the URL.' },
        { icon: 'data', title: 'Data', text: 'Backup schedule and whether a restore has ever been tested, schema design against real volumes, and whether production and development share a database by accident.' },
        { icon: 'shield', title: 'Auth', text: 'How users are authenticated, whether sessions expire sensibly, and whether roles and permissions are enforced on the server rather than hidden in the interface.' },
        { icon: 'tick', title: 'Tests', text: 'Whether an automated test suite exists at all, what it actually covers, and how confidently a change can be shipped without a human clicking through everything by hand.' },
        { icon: 'server', title: 'Hosting', text: 'Where the app runs, what happens under load, whether staging and production are properly separated, and how a deploy could take the site down.' },
        { icon: 'pound', title: 'Cost', text: 'What the current setup actually costs to run at today\'s volume and at ten times it, and where a metered API or database tier could produce a surprise bill.' },
        { icon: 'code', title: 'Code quality', text: 'How maintainable the codebase is for the next developer, whether it was built with tests and structure in mind, and how much technical debt sits under the surface.' },
      ],
    },
    {
      type: 'steps', kicker: 'How it runs', h2: 'Three to five days, start to written report.',
      items: [
        { title: 'Access', text: 'You grant read access to the repository and the relevant dashboards: hosting, database, and any AI or payment provider in use. Nothing is changed at this stage.', meta: 'Day 1' },
        { title: 'The check', text: 'A senior engineer works through the seven areas against your actual code and configuration, not a generic checklist copied between clients.', meta: 'Days 1-3' },
        { title: 'The report', text: 'A written document scoring each area, listing specific findings with severity, and ending in one recommendation: fix, refactor or rebuild.', meta: 'Days 3-5' },
        { title: 'The call', text: 'Thirty minutes to walk through the findings and answer questions, with no obligation to book anything further.', meta: 'Day 5' },
      ],
    },
    {
      type: 'table', tone: 'wash', kicker: 'What you get', h2: 'A report you can act on or hand to someone else.',
      head: ['', 'Included'],
      rows: [
        ['Format', 'A written PDF report, plain English, with a technical appendix for a developer'],
        ['Findings', 'Every issue found, ranked by severity, with what it means in business terms'],
        ['Verdict', 'One clear recommendation: fix in place, refactor parts, or rebuild'],
        ['Estimate', 'An indicative range for the fix or rebuild, confirmed once scoped'],
        ['Credit', `The full ${P.diagnostic} fee credited against the rescue if you go ahead within 60 days`],
      ],
      note: 'The report is yours regardless of whether you go further with us. Some clients take it to another developer to action.',
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who commissions this, and when it is not needed.',
      yes: { title: 'A good fit', items: ['An AI-built app now carrying real customers, data or payments', 'A founder or board wanting an independent second opinion before investing further', 'An investor or acquirer doing technical due diligence on a target', 'A team unsure whether to fix, rebuild, or shut the project down'] },
      no: { title: 'Not this, yet', items: ['The app is a personal project with no real users or data at risk', 'You already have a trusted developer who has reviewed it thoroughly', 'You want ongoing code review rather than a one-off written verdict'] },
    },
    {
      type: 'quote', tone: 'wash',
      text: 'Most founders can tell you what their app does. Very few can tell you what happens when it goes wrong. The audit answers that second question in writing, before it becomes an incident.',
      who: 'Rob Wells', role: 'Founder, Revio',
    },
    {
      type: 'checks', kicker: 'What this is not', h2: 'A short, honest report, not a long engagement.',
      groups: [
        { title: 'Included', items: ['A written report within 3-5 working days', 'A fix, refactor or rebuild verdict', 'A follow-up call to talk through it'] },
        { title: 'Not included', items: ['Any code changes or fixes, unless a rescue is booked separately', 'Ongoing monitoring or a retainer', 'A penetration test against production traffic'] },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'Do you need the original developer involved?', a: 'No. Most audits are run on code we did not write and a builder we have never used before. It helps if someone can answer questions about intent, but it is not required.' },
        { q: 'What access do you need?', a: 'Read access to the code repository and the dashboards for hosting, database and any third-party APIs in use. We do not need write access or production credentials to run the check.' },
        { q: 'Is £495 the final cost?', a: 'Yes, for the audit itself. It is a fixed fee regardless of what is found. Any fix or rebuild that follows is quoted separately once the report is in.' },
        { q: 'What if we disagree with the verdict?', a: 'The report lists every finding with its severity so you can judge for yourself. You are free to take it to another developer, or to fix only the parts you agree matter.' },
        { q: 'How is this different from a normal code review?', a: 'A code review usually looks at the code alone. This also checks the live infrastructure, the account settings, the cost exposure and the data handling, because most of the risk in an AI-built app sits outside the code itself.' },
        { q: 'Can this be used for due diligence on an acquisition?', a: 'Yes. We run this for investors and acquirers assessing a target\'s technical risk, with the report structured for a non-technical board to read.' },
        { q: 'Does the fee really come off a rescue?', a: `Yes, in full, if you book AI App Rescue work within 60 days of the report. There is no separate discovery fee on top.` },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: '/ai-app-rescue/', icon: 'repair', title: 'AI App Rescue', text: 'The fix or rebuild that follows the audit, when the verdict calls for one.', meta: P.build_from },
        { href: '/ai-app-development/', icon: 'code', title: 'AI Web & App Development', text: 'A from-scratch build, fixed price and date, when there is no existing app to audit.', meta: P.build_from },
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'For businesses that need the policy and audit trail alongside the technical fix.', meta: P.governance },
      ],
    },
    {
      type: 'cta', h2: 'Get the written answer before you spend another pound on it.',
      text: 'Book a call to scope the audit, or go straight to booking one against your repository. Five days to a plain answer.',
      ctas: [{ label: 'Book a diagnostic call', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
