const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'start-growing',
  title: 'Request a Quote: Itemised AI and HubSpot Proposal | Revio',
  description: 'Tell us the scope and get an itemised proposal within two working days: what is included, what is not, dates and a fixed number. AI builds from £4,500.',
  keywords: ['ai consultancy quote uk', 'request a quote ai agency', 'hubspot agency quote', 'fixed price ai build'],
  crumbLabel: 'Request a quote',
  utility: true,
  art: 'pipeline',
  badge: 'Request a quote',
  h1: 'Tell us the scope. <em class="mint">Get an itemised number</em>.',
  sub: 'A few details on what you want built, the systems it touches and when you need it running is all we need. Within two working days you get a proposal with scope, what is explicitly not included, dates and a fixed price.',
  ctas: [
    { label: 'Fill in the form', href: '#form', style: 'mint' },
    { label: 'Prefer to talk? Book a meeting', href: S.BOOK_URL, style: 'ghost' },
  ],
  heroProof: ['Itemised, so you see what you are buying', 'Fixed price and date', 'No twelve-month lock-ins'],
  sections: [
    { type: 'form', variant: 'quote', formId: 'quote', kicker: 'The scope', h2: 'What do you want built, and what should it change?', lede: 'The more you tell us about the process and the systems, the closer the first number lands to the final one.', points: ['Proposal within two working days', 'Scope, exclusions, dates and one number', 'Senior team, no juniors learning on your budget'] },
    {
      type: 'cards', tone: 'wash', kicker: 'Rough sizes', h2: 'So you know before you fill anything in.', cols: 3,
      items: [
        { icon: 'build', title: 'One tool or one agent', text: 'About a week. A single-purpose internal tool, or one agent doing one job well, wired into your CRM.', meta: P.build_from, href: '/ai-implementation/' },
        { icon: 'flow', title: 'Connected app', text: 'Two to three weeks. Several screens, logins, permissions and integrations.', meta: P.build_mid, href: '/ai-app-development/' },
        { icon: 'layers', title: 'Platform', text: 'Four to six weeks. Multi-user, multi-customer, billing and roles.', meta: P.build_big, href: '/ai-app-development/' },
      ],
      note: 'HubSpot and growth-marketing work is priced as projects or monthly retainers depending on scope. Say what you need and the quote comes back the same way.',
    },
    {
      type: 'faq', kicker: 'About the quote', h2: 'What to expect.',
      items: [
        { q: 'What is in the proposal?', a: 'The scope in plain words, an explicit list of what is not included, the acceptance list we will test against, dates, the price, and the payment schedule. It is written so that a colleague who was not on the call can read it.' },
        { q: 'Do you charge for proposals or scoping calls?', a: 'No. Where the build is large enough that a written scope needs half a day of real work, we offer a ' + P.scoping + ' scoping session and credit it against the build.' },
        { q: 'Will the price change later?', a: 'Not for the scope in the proposal. Anything new goes on a change list and is quoted separately, in both directions: scope taken out reduces the fee.' },
        { q: 'How fast can you start?', a: 'Usually within two weeks of the proposal being accepted. The first fortnight is scoping and access, which is also the part most likely to wait on your side.' },
        { q: 'We do not have a CRM.', a: 'Say so in the form. Some builds do not need one; others are best done on a free HubSpot portal we set up as part of the work.' },
      ],
    },
    {
      type: 'cta', h2: 'Not sure what to ask for yet?',
      text: 'The audit turns "we should do something with AI" into a ranked list with prices. Two weeks, ' + P.audit + '.',
      ctas: [{ label: 'Book the audit', href: S.AUDIT_URL, style: 'mint' }, { label: 'Book a meeting', href: S.BOOK_URL, style: 'ghost' }],
    },
  ],
};
