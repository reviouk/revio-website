const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-for-smes',
  title: 'AI Consulting for SMEs (£1m-£25m Turnover) | Revio',
  description: 'AI that pays for a £1m-£25m business: enquiry handling, quoting, admin and reporting. Audit from £1,500, builds from £4,500, no day rate, every price published.',
  keywords: ['ai consulting for smes uk', 'ai for small business uk', 'ai consultancy small business', 'affordable ai consultancy', 'ai for growing businesses'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'AI for SMEs',
  art: 'chart',
  badge: 'AI for SMEs',
  h1: 'What actually pays for a business your size, <em class="mint">not the demo reel.</em>',
  sub: 'Between £1m and £25m turnover, AI rarely pays off as a chatbot on the homepage. It pays off in enquiry handling, quoting, admin and reporting, the unglamorous work that eats a skilled person\'s week. We audit where it pays, build the one thing that matters first, and tell you honestly what to leave alone.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the AI Opportunity Audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['Audit from £1,500, two weeks, a ranked list', 'Builds from £4,500, fixed price and date', 'No day rate, every price on this site'],
  service: { name: 'AI Consulting for SMEs', type: 'Audit, build and embedded lead', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'The size of business we mean',
      h2: 'Big enough to feel the pain, too small for a big consultancy\'s minimum.',
      body: [
        'Between roughly £1m and £25m turnover, a business is usually past the point where the founder can personally answer every enquiry and check every invoice, and well short of having a data team or a Head of AI to work it out. That gap is where most of the wasted AI spend happens: a chatbot bought because a competitor has one, a tool trialled by one enthusiastic manager and abandoned when they leave, a subscription nobody remembers approving.',
        'The businesses that get value from AI at this size are the ones that treat it like any other investment: find the process that actually costs money or time today, fix that one thing properly, prove it pays, then move to the next. Everything else on this page is that method, applied.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What actually pays at this size', h2: 'Four places the money usually is.',
      items: [
        { icon: 'chat', title: 'Enquiry handling', text: 'Website, DM and phone enquiries answered, qualified and booked without a person copying details between five systems. Usually the single biggest win.' },
        { icon: 'doc', title: 'Quoting', text: 'Quotes and proposals drafted from your own past work in minutes rather than hours, checked by a human before they go out.' },
        { icon: 'brief', title: 'Admin', text: 'Invoices, applications and forms read and keyed into the systems that need them, instead of a person retyping the same fields all day.' },
        { icon: 'chart', title: 'Reporting', text: 'A weekly number a director can actually read, produced automatically instead of assembled by hand from four spreadsheets on a Friday afternoon.' },
      ],
    },
    {
      type: 'checks', kicker: 'What to ignore', h2: 'What usually is not worth the money at this size.',
      groups: [
        { title: 'Worth doing first', items: ['Enquiry handling and quoting, where the volume is highest', 'CRM hygiene, so the rest of the system has something to work from', 'One agent or automation, proven, before a second is started'] },
        { title: 'Usually not yet', items: ['A general-purpose chatbot with no defined job to do', 'A platform build before a single process has proven the case', 'Replacing the CRM instead of using the one you already have'] },
      ],
    },
    {
      type: 'steps', kicker: 'The ladder', h2: 'Audit, then build, then decide if you need someone permanent.',
      items: [
        { title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your business, in pounds and hours rather than hype.', meta: P.audit },
        { title: 'AI Build', text: 'The top item built to a fixed price and date: one tool, one agent, or a connected app, whichever the audit points to.', meta: P.build_from },
        { title: 'Run and iterate', text: 'The build supported and improved as real use throws up edge cases, at a fraction of the cost of building it new each time.', meta: P.run },
        { title: 'Embedded AI Lead, if it grows', text: 'Once there are more than one or two things worth automating, a part-time lead owns the backlog properly rather than queuing everything through one-off projects.', meta: P.lead_1 },
      ],
    },
    {
      type: 'table', tone: 'wash', kicker: 'Typical budgets', h2: 'What businesses this size actually spend.',
      head: ['Turnover', 'Typical first spend', 'What it usually buys'],
      rows: [
        ['£1m - £5m', `${P.audit} then ${P.build_from}`, 'One process automated: enquiry handling or quoting'],
        ['£5m - £15m', `${P.build_from} - ${P.build_mid}`, 'A connected tool wired into the CRM, plus support'],
        ['£15m - £25m', `${P.build_mid} or ${P.lead_1} a month`, 'A second process, or a part-time lead owning the backlog'],
      ],
      note: 'These are typical starting points, not quotes. Every engagement is scoped individually and every price on this site excludes VAT.',
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and who it is not.',
      yes: { title: 'A good fit', items: ['UK business turning over roughly £1m to £25m', 'A CRM already in place, however untidy', 'A specific process that is visibly slow, expensive or error-prone', 'A director able to spend an hour reviewing progress'] },
      no: { title: 'Not this, yet', items: ['You are pre-revenue or under about £1m turnover, where a smaller off-the-shelf tool is usually the better first step', 'You are £25m plus with several departments and governance needs, see Enterprise AI Consultancy', 'Nobody can commit an hour a fortnight to reviewing what gets built'] },
    },
    {
      type: 'quote', tone: 'wash',
      text: 'The businesses that get burned by AI are usually the ones that bought the tool before they found the process. We do it the other way round every time.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'cases', kicker: 'Proof, not promises', h2: 'Businesses this size we have already done this for.',
      items: [
        { href: '/work/', kicker: 'Recruitment & training', title: 'Intelligencia Training', result: 'A national pipeline built for long sales cycles', text: 'CRM and lead handling rebuilt so a long, multi-stage sales process could actually be tracked and reported on.' },
        { href: '/work/', kicker: 'Professional services', title: 'PS Contracts', result: 'Leads and CRM foundations fixed', text: 'Enquiry handling and CRM hygiene put right before any automation was layered on top.' },
        { href: '/work/', kicker: 'Architecture', title: 'Extension Architecture', result: 'SEO and paid working together', text: 'A London architecture practice with enquiry and marketing systems finally talking to each other.' },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'We do not have a CRM. Can we still start here?', a: 'Yes, though the first job is usually getting one in place properly rather than building AI on top of spreadsheets. The audit will say so if that is the real first step.' },
        { q: 'Is £1,500 really the whole audit cost?', a: 'Yes, fixed, no day rate, and it comes off the first build if you go ahead within the audit\'s recommendation window.' },
        { q: 'What if the audit finds nothing worth doing?', a: 'That happens occasionally, and we say so. You have then spent £1,500 finding out AI is not your next priority, which is a useful answer in itself.' },
        { q: 'How fast will we see something working?', a: 'Two weeks for the audit, then typically two to six weeks for the first build to ship, depending on its size.' },
        { q: 'Do we need technical people on our side?', a: 'No. Most SME clients have no technical team at all. We work with whoever runs the process day to day and build for them.' },
        { q: 'What is the smallest useful engagement?', a: `The AI Opportunity Audit at ${P.audit} is the smallest, and the right starting point if you are not yet sure where the money is.` },
        { q: 'Will you tell us if AI is the wrong answer?', a: 'Yes. A cheaper piece of off-the-shelf software or simply fixing a broken process is sometimes the real fix, and we say so rather than building something to justify the fee.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'The starting point for almost every SME engagement: two weeks, one ranked list.', meta: P.audit },
        { href: '/ai-app-development/', icon: 'code', title: 'AI Web & App Development', text: 'The build that follows an audit, fixed price and date.', meta: P.build_from },
        { href: '/enterprise-ai-consultancy/', icon: 'flow', title: 'Enterprise AI Consultancy', text: 'For businesses past £25m with several departments and governance needs.', meta: P.lead_3 },
      ],
    },
    {
      type: 'cta', h2: 'Find out where AI actually pays in your business.',
      text: 'A 30-minute call, no obligation. If the audit is not the right first step for you, we will say which is.',
      ctas: [{ label: 'Book a call', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
