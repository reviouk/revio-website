const S = require('../../site');
const P = S.PRICE;

module.exports = {
  slug: 'industries/smes',
  title: 'AI for Small Businesses & SMEs UK | Revio',
  description: 'AI for owner-managed SMEs: missed enquiries, quoting, admin and chasing invoices, found by a two-week audit before anything is built. From £1,500.',
  keywords: ['ai for small business uk', 'ai for smes', 'small business ai consultancy uk'],
  crumbs: [{ label: 'Industries', href: S.INDUSTRIES_URL }],
  crumbLabel: 'SMEs',
  art: 'clock',
  badge: 'SMEs',
  h1: 'AI for owner-managed businesses, <em class="mint">starting with the audit, not the tool</em>.',
  sub: 'Missed enquiries answered, quotes drafted, admin cleared, invoices chased, and a report that tells you what actually happened last week. From £1,500 for the two-week audit that finds the one process worth automating first.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['One process, proven, before anything else is built', 'No subscription to a platform you do not need', 'Every price published, nothing hidden in a day rate'],
  service: { name: 'AI for SMEs', type: 'Industry page', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'Where this fits',
      h2: 'You are not short of ideas. You are short of a first one, done properly.',
      body: [
        'Most owner-managed trades, services and B2B businesses we meet have already tried something, a chatbot plugin, a Zapier chain, a ChatGPT subscription somebody expenses. None of it stuck, because nobody sat down first and worked out which process was actually worth automating. In an SME the four things AI reliably fixes are missed enquiries out of hours, quoting that takes too long to turn around, admin that eats an evening every week, and invoices that should have been chased a fortnight ago.',
        'The audit exists because guessing wrong here is expensive in time you do not have. Two weeks looking at how enquiries, quotes and admin actually move through your business, ending in a ranked list with a price against each item, so the first build is the one that pays back fastest rather than the one that sounded most interesting in a sales call.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Where AI pays', h2: 'Six places small businesses see it earn its keep.',
      lede: 'Not a platform. Each of these is a defined, working thing on your own systems.',
      items: [
        { icon: 'chat', title: 'Missed enquiries', text: 'A website enquiry or a message at 8pm answered within minutes instead of the next working day, so it does not go to whichever competitor replied first.' },
        { icon: 'doc', title: 'Quoting', text: 'A first-pass quote drafted from your price list and past jobs, so a job that used to take an evening to quote goes out the same day.' },
        { icon: 'brief', title: 'Admin and paperwork', text: 'Forms, job sheets and reports that eat an evening a week drafted automatically from what already happened on the job.' },
        { icon: 'pound', title: 'Chasing invoices', text: 'Overdue invoices followed up automatically on a schedule, politely and consistently, instead of whenever you remember.' },
        { icon: 'chart', title: 'Weekly reporting', text: 'A short report on enquiries, jobs and cash produced automatically each week, so you know what happened without assembling it yourself on a Sunday.' },
        { icon: 'people', title: 'CRM and record-keeping', text: 'Customer and job records kept tidy and up to date automatically, so the next quote or invoice does not start with hunting for the right details.' },
      ],
    },
    {
      type: 'steps', kicker: 'First 90 days', h2: 'What actually happens if you start.',
      items: [
        { title: 'Audit the enquiry-to-invoice flow', text: 'Two weeks watching how an enquiry actually becomes a job, a quote and an invoice, ending in a ranked list of what to build first.', meta: 'Weeks 1–2' },
        { title: 'Build the first automation', text: 'Usually enquiry handling or quoting, wired into whatever you already use, even if that is a shared inbox and a spreadsheet, tested before it goes live.', meta: 'Weeks 3–6' },
        { title: 'Supervised launch', text: 'You check what it produces for two to three weeks, so mistakes are caught before a customer sees them.', meta: 'Weeks 6–9' },
        { title: 'Hand it over', text: 'Whoever runs the business day to day is trained on the exceptions it flags, a short runbook is left behind, and a second use case is scoped if the first has paid for itself.', meta: 'Weeks 9–13' },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and where we say wait.',
      yes: { title: 'A good fit', items: ['Owner-managed trades, services and B2B businesses with a steady flow of enquiries', 'A director or owner who will spend an hour reviewing what gets built', 'At least one process, enquiries, quoting or admin, that visibly eats time each week', 'A willingness to start with the audit rather than a tool bought off a shelf'] },
      no: { title: 'Not this, yet', items: ['You want a platform subscription rather than a built, working automation', 'Enquiry volume is low enough that answering by hand genuinely costs nothing', 'There is no digital record at all, everything is a paper diary', 'You need this live in days rather than weeks'] },
    },
    {
      type: 'table', tone: 'wash', kicker: 'What it costs', h2: 'A typical first project.',
      head: ['Use case', 'What it replaces', 'Typical build', 'Price from'],
      rows: [
        ['Missed enquiries', 'An owner answering messages evenings and weekends', 'An AI agent that answers and books', P.build_from],
        ['Quoting', 'A quote drafted from scratch each time', 'Quote-drafting tool built from your price list', P.build_from],
        ['Chasing invoices', 'A director remembering to chase overdue accounts', 'Automated invoice-chasing sequence', P.build_from],
        ['Weekly reporting', 'A Sunday evening spent pulling numbers together', 'Automated weekly report', P.data],
        ['Full enquiry-to-invoice system', 'Several of the above, wired together', 'A connected app across the job lifecycle', P.build_mid],
      ],
      note: 'All prices exclude VAT. The audit above is the usual first step and its fee comes off the first build.',
    },
    {
      type: 'quote', tone: 'wash',
      text: 'The businesses that get the most out of AI are not the ones with the biggest budget, they are the ones who let us find the one process worth fixing first instead of buying a platform and hoping.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions small business owners ask before they start.',
      items: [
        { q: 'We are a small business, will this be too expensive?', a: 'The audit starts from £1,500 and its fee comes off the first build. Most SME automations we build cost from £4,500, a fraction of hiring anyone, and every price is published up front.' },
        { q: 'Do we need a CRM already?', a: 'It helps but is not essential. Some of the businesses we work with start with a shared inbox and a spreadsheet, and the first project sometimes includes putting basic structure in place.' },
        { q: 'How long before we see something working?', a: 'A first automation, usually enquiry handling or quoting, is typically live within six weeks of the audit finishing, running unsupervised within nine.' },
        { q: 'What if the audit finds nothing worth automating?', a: 'That happens occasionally, and we say so. You keep the report either way, and it is useful even if the answer is "not yet".' },
        { q: 'Can I do the audit and then build it myself?', a: 'Yes. The audit and its report are yours regardless of what you decide to do next.' },
        { q: 'Will an AI answer customers in a way that sounds like us?', a: 'It is built from your actual past messages and price list, not a generic script, and checked by you during the supervised launch before it runs alone.' },
        { q: 'What happens after the first project?', a: 'You decide. Some businesses stop there having solved the one thing that mattered; others move on to a second use case or an Embedded AI Lead once the first has paid for itself.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where to start.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your business.', meta: P.audit },
        { href: '/ai-for-smes/', icon: 'chart', title: 'AI for SMEs', text: 'The wider service page on how we work with smaller businesses.', meta: P.build_from },
        { href: S.LEAD_URL, icon: 'lead', title: 'Embedded AI Lead', text: 'A senior AI lead inside your business once the first process is proven, from one day a week.', meta: P.lead_1 },
      ],
    },
    {
      type: 'cta', h2: 'Find the one process where AI pays in your business.',
      text: 'A 30-minute call on where enquiries, quotes and admin actually go. If AI is not the right answer yet, we will say so.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
