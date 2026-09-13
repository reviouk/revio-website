const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-app-rescue',
  title: 'AI App Rescue: Fix a Lovable, Bolt or Replit App | Revio',
  description: 'Vibe-coded app breaking with real users? We diagnose in 3-5 days for £495, then fix or rebuild it properly. Lovable, Bolt.new, Replit, Cursor, Claude Code.',
  keywords: ['lovable app rescue', 'bolt.new app fix', 'replit app production', 'vibe coded app broken', 'ai app rescue uk', 'fix ai generated app'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'AI App Rescue',
  art: 'code',
  badge: 'AI App Rescue',
  h1: 'Your app worked in the demo. <em class="mint">It is falling over with real users.</em>',
  sub: 'Tools like Lovable, Bolt.new, Replit, Cursor and Claude Code get a working prototype built in a weekend. Getting it through a hundred real customers without leaking data, losing orders or falling over at 9am on a Monday is a different job. We diagnose what is actually wrong, then fix it or rebuild the parts that need it.',
  ctas: [
    { label: 'Book a diagnostic call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the diagnostic audit', href: '/ai-app-diagnostic-audit/', style: 'ghost' },
  ],
  heroProof: ['Diagnostic in 3-5 days, £495', 'Written verdict: fix, refactor or rebuild', 'Fee credited against the rescue work'],
  service: { name: 'AI App Rescue', type: 'Production readiness and rebuild', price: P.build_from_num },
  sections: [
    {
      type: 'intro', kicker: 'How we usually meet',
      h2: 'It shipped fast. Nobody checked what shipped.',
      body: [
        'A founder or an ops lead used an AI builder to get from idea to working app in days rather than months. It looked finished, so it went live. Then customers signed up, real money moved, and the cracks a demo never shows started to matter: another user\'s data on screen, a form with no server-side check, a database that falls over past a few thousand rows, an API key sitting in the browser for anyone to read.',
        'This is not a criticism of the tools. Lovable, Bolt.new, Replit, Cursor and Claude Code are genuinely good at turning a description into working software fast. What they do not do on their own is the part that only matters once someone else is using the app: authorisation on every route, tests that catch a regression, backups that actually restore, monitoring that tells you something broke before a customer does.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What we find, by tool', h2: 'Every builder fails in its own predictable way.',
      lede: 'Not a criticism of the tool. A pattern we have seen enough times to name.',
      cols: 2,
      items: [
        { icon: 'code', title: 'Lovable', text: 'Fast, opinionated Supabase apps where row-level security was never turned on. One user\'s data is often readable by any other logged-in user, because the default policy is open and nobody closed it.' },
        { icon: 'code', title: 'Bolt.new', text: 'Client-heavy builds that call third-party APIs straight from the browser, keys included. Fine for a demo on one laptop, a liability the day a key gets scraped and billed against.' },
        { icon: 'server', title: 'Replit', text: 'Apps that grew from a single Repl into real traffic, still on the free database tier with no backup schedule and no split between development and production.' },
        { icon: 'cpu', title: 'Cursor & Claude Code', text: 'Larger codebases built fast with an AI pair programmer, often with no test suite. The code reads well; nobody can say what breaks when the next feature goes in.' },
      ],
    },
    {
      type: 'checks', tone: 'wash', kicker: 'What actually goes wrong', h2: 'The failures that do not show up in a demo.',
      groups: [
        { title: 'Security', items: ['Row-level security or tenant isolation left off', 'API keys and secrets shipped in the client bundle', 'Admin routes reachable without a real permission check', 'No rate limiting on forms, logins or paid endpoints'] },
        { title: 'Data', items: ['No backup schedule, or backups nobody has tested restoring', 'A schema that cannot hold the volume the business now has', 'No migration history, so changes are made by hand in production'] },
        { title: 'Operations', items: ['No monitoring, so outages are reported by customers first', 'No automated tests, so every change is a gamble', 'One person holds every credential and nothing is documented'] },
      ],
    },
    {
      type: 'steps', kicker: 'How the rescue runs', h2: 'Diagnose first. Fix second. Rebuild only where it earns it.',
      items: [
        { title: 'Diagnostic audit', text: 'Three to five days against your live codebase and infrastructure: security, data, auth, tests, hosting, cost and code quality, ending in a written fix, refactor or rebuild verdict.', meta: P.diagnostic },
        { title: 'Triage', text: 'We agree what must be fixed before real customers can trust the app, what can wait, and what should be rebuilt rather than patched again.', meta: 'Same week' },
        { title: 'Fix or rebuild', text: 'Small apps are often fixed in place: holes closed, tests added, backups switched on, monitoring wired in. Where the foundations will not hold, we rebuild the weak parts in your own repository.', meta: `${P.build_from} upward` },
        { title: 'Handover', text: 'Documentation, credentials in your name, and a plain note on what changed and why.', meta: 'Ongoing' },
      ],
    },
    {
      type: 'split', tone: 'wash', art: 'code', kicker: 'What good looks like', h2: 'The same app, built to hold real users.',
      body: ['A rescued app is not necessarily rewritten from scratch. Often the product is right and the plumbing is wrong. We fix what is broken, keep what works, and tell you honestly which is which.'],
      bullets: ['Authorisation checked on every route, not just the ones a demo hit', 'Secrets and API keys moved out of the client and into the server', 'A database and hosting plan sized for the traffic you actually have', 'Automated tests around the paths that lose money if they break', 'Monitoring and alerts so you hear about a problem before a customer does'],
      ctas: [{ label: 'Book a diagnostic call', href: S.BOOK_URL, style: 'dark' }],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and who it is not.',
      yes: { title: 'A good fit', items: ['An app built with Lovable, Bolt.new, Replit, Cursor, Claude Code or similar', 'It works, mostly, but you would not bet the business on it', 'Real customers, real payments or real data now depend on it', 'Nobody in the business can say with confidence what is and is not secure'] },
      no: { title: 'Not this, yet', items: ['The app is still an internal prototype with no real users', 'You want a from-scratch build with no existing code to assess, see AI App Development', 'The issue is a single bug you already know how to fix'] },
    },
    {
      type: 'quote', tone: 'wash',
      text: 'The apps that fail are usually not badly written. They are unfinished in the ways a demo never tests: who can see what, what happens when the database gets busy, what happens when it breaks at 2am. That is the part we add.',
      who: 'Rob Wells', role: 'Founder, Revio',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'Do you rebuild everything from scratch?', a: 'Rarely. Most apps have a working product underneath and specific gaps in security, data handling or reliability. The diagnostic tells us which parts to fix and which are better rebuilt.' },
        { q: 'What if the diagnostic finds nothing serious?', a: 'That happens, and we say so in the report. You have then paid £495 for an independent second opinion and a written record for insurers, investors or your own board.' },
        { q: 'We built it with Cursor and it looks fine. Why would we need this?', a: 'Code that reads well and code that is safe with real users are different things. Row-level security, key handling and test coverage rarely show up from reading the app by eye.' },
        { q: 'Can you work with a vibe-coded app you did not write?', a: 'Yes. Most of our rescues are exactly that. We do not need the original builder involved, though it helps if someone can answer questions about intent.' },
        { q: 'How fast can this start?', a: 'The diagnostic is booked and run within days, because the risk is live while it waits. Fix and rebuild timelines are quoted once the report is in.' },
        { q: 'Do we own the code afterwards?', a: 'Yes. The app stays or moves into your own repository and hosting, with credentials in your name. We keep no special access once the engagement ends.' },
        { q: 'What does the fix or rebuild cost?', a: `Fixes typically start at ${P.build_from}. A fuller rebuild is quoted after the diagnostic, once we know the size of the real problem.` },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: '/ai-app-diagnostic-audit/', icon: 'audit', title: 'AI App Diagnostic Audit', text: 'The standalone check, if you want the report before you decide anything about a fix.', meta: P.diagnostic },
        { href: '/ai-app-development/', icon: 'code', title: 'AI Web & App Development', text: 'When the answer is a proper rebuild, built fixed price, fixed date, in your own repository.', meta: P.build_from },
        { href: '/legacy-modernisation/', icon: 'layers', title: 'Legacy Software Modernisation', text: 'For older bespoke systems and spreadsheets rather than AI-generated apps.', meta: P.legacy_discovery },
      ],
    },
    {
      type: 'cta', h2: 'Find out what is actually wrong, in writing, in under a week.',
      text: 'Book a call, or go straight to the diagnostic audit. Either way you get a plain answer on whether to fix, refactor or rebuild.',
      ctas: [{ label: 'Book a diagnostic call', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
