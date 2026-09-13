const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'funded-ai-projects',
  title: 'Funded AI Projects for UK SMEs | Revio',
  description: 'How UK SMEs pay for AI work: R&D tax relief, Knowledge Transfer Partnerships and growth-hub grants, honestly assessed. Scoping from £1,500.',
  keywords: ['grant funded ai implementation uk', 'r&d tax relief ai software', 'ai grants for smes uk', 'funded ai projects'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'Funded AI Projects',
  art: 'pipeline',
  badge: 'Funded AI Projects',
  h1: 'There is money for this. <em class="mint">Most of it is not a grant.</em>',
  sub: 'Every AI conversation eventually reaches the funding question. For most UK SMEs the honest answer is R&D tax relief, not a grant: money back for the qualifying development work already inside a build. We scope projects so the qualifying element is documented from day one, work with your accountant, and are plain about the routes that are currently closed. Scoping via the standard audit, from £1,500.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the routes compared', href: '#routes', style: 'ghost' },
  ],
  heroProof: ['The qualifying element documented from the start, not reconstructed later', 'We work alongside your accountant, we are not a substitute for one', 'Honest about which routes are actually open in 2026'],
  service: { name: 'Funded AI Projects', type: 'AI project scoping for grant and tax-relief funding', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'Somebody mentioned a grant. It has been paused for a year.',
      body: [
        'AI budgets get easier to approve once someone in the room mentions grants or R&D tax relief, and harder once the details turn out to be vaguer than hoped. Innovate UK\'s Smart grants, the most commonly cited route, have been paused since early 2025 with no relaunch date confirmed, which catches out anyone still planning around them.',
        'The route that is dependable, and that most SMEs already qualify for without realising it, is R&D tax relief: a claim against the corporation tax bill for software development that resolved a genuine technical uncertainty, which describes a large share of real AI implementation work. We are not tax advisers, and say so plainly. What we do is scope the project so the qualifying work is documented as it happens, then hand that record to your accountant to make the claim.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'The routes', h2: 'Four ways UK businesses fund AI work, assessed honestly.',
      lede: 'We rank these by how dependable they are in 2026, not by how often they get mentioned in a pitch.',
      items: [
        { icon: 'pound', title: 'R&D tax relief', text: 'A claim against corporation tax for development that resolved technical uncertainty. The dependable route: no application window, no competition, assessed after the work is done against HMRC\'s own rules.' },
        { icon: 'handshake', title: 'Knowledge Transfer Partnerships', text: 'A part-funded partnership between a business and a university or college to embed new capability, including AI, with a graduate or postgraduate associate. Slower to set up, genuinely funded, and a better fit for a defined capability gap than a quick build.' },
        { icon: 'bank', title: 'Regional growth-hub grants', text: 'Smaller, locally administered grants through Growth Hubs and Local Enterprise Partnerships, varying by region and changing frequently. Worth checking for your specific area, not something to plan a national rollout around.' },
        { icon: 'grant', title: 'Innovate UK Smart grants', text: 'Paused since early 2025 with no relaunch date. We do not recommend planning a project timeline around them reopening, and say so to anyone who raises them.' },
      ],
    },
    {
      type: 'steps', kicker: 'How we scope a funded project', h2: 'The qualifying element gets documented from day one, not reconstructed afterwards.',
      items: [
        { title: 'Scope the work', text: 'The two-week AI Opportunity Audit identifies where AI pays in the business and, within that, which parts involve genuine technical uncertainty rather than off-the-shelf configuration.', meta: 'Weeks 1–2' },
        { title: 'Separate the qualifying work', text: 'The build is structured so development that resolves technical uncertainty is distinct from routine setup, because HMRC assesses the former, not the latter.', meta: 'Before build starts' },
        { title: 'Document as we go', text: 'Technical notes, decisions and dead ends are kept as the build happens, which is the record an accountant needs to support a claim, rather than a story written up months later.', meta: 'Throughout the build' },
        { title: 'Hand over to your accountant', text: 'The documentation goes to whoever prepares your tax return. We are not tax advisers and do not submit the claim ourselves.', meta: 'At year end' },
      ],
    },
    {
      type: 'compare', kicker: 'What counts', id: 'routes', h2: 'What tends to qualify for R&D tax relief, and what does not.',
      yes: { title: 'Usually qualifies', items: ['Building an agent or integration where the approach was not obvious in advance', 'Genuine technical uncertainty: would this even work, and how', 'Custom work on your own data and systems, not a template', 'Iteration and failed attempts along the way, properly recorded'] },
      no: { title: 'Usually does not', items: ['Buying and configuring an off-the-shelf tool with no development', 'Routine licensing, such as buying ChatGPT or Copilot seats', 'Training staff to use an existing product', 'Work with no technical uncertainty at all, however new it feels to the business'] },
    },
    {
      type: 'table', tone: 'wash', kicker: 'Routes compared', h2: 'Speed, certainty and effort, side by side.',
      head: ['', 'R&D tax relief', 'Knowledge Transfer Partnership', 'Growth-hub grant', 'Innovate UK Smart grant'],
      rows: [
        ['Status in 2026', 'Open, ongoing', 'Open, by application', 'Varies by region', 'Paused since early 2025'],
        ['Timeline', 'Claimed at year end', 'Months to set up', 'Weeks to months', 'Unknown'],
        ['Competition', 'None, it is a tax claim', 'Competitive application', 'Competitive, often small pots', 'Was highly competitive'],
        ['Best fit', 'Most AI builds with real development in them', 'A defined capability gap, willing to bring in an associate', 'A specific regional business, worth checking locally', 'Not currently plannable around'],
      ],
      note: 'This is a general guide, not tax or funding advice specific to your business. Rules and regional schemes change; confirm current detail with your accountant or the relevant Growth Hub before committing a budget.',
    },
    {
      type: 'quote', tone: 'wash',
      text: 'We tell every client the same thing about grants: plan the project on the assumption none of it arrives, then treat anything that does as a bonus. R&D tax relief is the one route we have seen actually land, reliably, because it rewards work you would be doing anyway.',
      who: 'Rob Wells', role: 'Founder, Revio',
    },
    {
      type: 'checks', kicker: 'What is and is not included', h2: 'Where our work ends and your accountant\'s begins.',
      groups: [
        { title: 'What we do', items: ['Scope the project so qualifying work is identifiable', 'Keep technical documentation as the build happens', 'Flag Knowledge Transfer Partnership or growth-hub fit where relevant', 'Hand a clear record to your accountant at year end'] },
        { title: 'What we do not do', items: ['Give tax advice or confirm what HMRC will accept', 'Submit an R&D tax relief claim on your behalf', 'Apply for grants or KTP funding for you', 'Guarantee any funding route will pay out'] },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'Are you tax advisers?', a: 'No, and we tell every client that directly. We scope and document AI projects so the qualifying development is clear and recorded; your accountant or a specialist R&D tax adviser assesses and submits the actual claim.' },
        { q: 'What actually counts as R&D for tax relief purposes?', a: 'Broadly, work that resolves a genuine technical uncertainty in software or a process, where the answer was not obvious in advance. Custom AI builds on your own systems and data often qualify; buying and configuring an off-the-shelf tool usually does not.' },
        { q: 'Are Innovate UK Smart grants coming back?', a: 'As of this writing they have been paused since early 2025 with no confirmed relaunch date. We do not recommend building a project timeline around them reopening, and will say so if a client raises them.' },
        { q: 'What is a Knowledge Transfer Partnership?', a: 'A part-funded scheme pairing a business with a university and a graduate or postgraduate associate to embed a new capability over a fixed period. It suits a defined capability gap better than a short build, and takes longer to set up than a direct project.' },
        { q: 'Do regional grants exist for AI specifically?', a: 'Some Growth Hubs and Local Enterprise Partnerships run grants that AI projects can qualify for, but availability and rules vary by region and change often. Worth checking locally rather than assuming a national scheme.' },
        { q: 'How does scoping for this work start?', a: 'The same way any project starts with us: the AI Opportunity Audit, from £1,500, which identifies where AI pays in the business. Within that, we flag which parts look like qualifying development.' },
        { q: 'Does this change how the build itself is priced?', a: 'No. Builds are priced the same way whether or not funding is involved, from £4,500. What changes is that we document the qualifying work as we go, at no extra charge, so the record exists if you want to make a claim.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your business, and where the qualifying work sits within it.', meta: P.audit },
        { href: '/ai-implementation/', icon: 'build', title: 'AI Build & Implementation', text: 'A defined system built to a fixed price and date, documented as it goes.', meta: P.build_from },
        { href: '/ai-for-smes/', icon: 'people', title: 'AI for SMEs', text: 'How smaller UK businesses take on AI work without an in-house team.', meta: P.audit },
      ],
    },
    {
      type: 'cta', h2: 'Scope the project so the funding case documents itself.',
      text: 'A 30-minute call on what you are trying to build and which funding routes, if any, are realistically worth planning around.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
