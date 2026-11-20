const S = require('../../site');
const P = S.PRICE;

/* Clear Desk Business. DRAFT 2026-11-19. Audience: owner or MD of a 10–40 person firm. */
module.exports = {
  slug: 'ai-assist/clear-desk-business',
  title: 'Clear Desk Business: AI Back Office, 10-40 Staff | REVIO AI Assist',
  description: 'Flo, an AI assistant, runs your back office: enquiry to quote to invoice, customer and staff questions answered 24/7, monthly review. From £4,500, then £595 a month.',
  keywords: ['ai back office small business', 'ai for business 10-40 staff uk', 'automate quote to invoice', 'ai customer service small business uk', 'ai hr assistant small business', 'business automation uk fixed price'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }, { label: 'AI Assist', href: '/ai-assist/' }],
  crumbLabel: 'Clear Desk Business',
  art: 'pipeline',
  badge: 'Clear Desk Business',
  h1: 'The back office runs itself. <em class="mint">You run the business.</em>',
  sub: 'At ten to forty staff the admin has become roles: someone answers, someone quotes, someone invoices, someone chases, someone answers the same HR question for the fifth time. Clear Desk Business hands the whole chain to an assistant called Flo, from the first enquiry to the paid invoice, with your people approving at the points that matter and a monthly review with us.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See what it costs', href: '#price', style: 'ghost' },
  ],
  heroProof: [`${P.assist_business_setup} to set up, live in three to four weeks`, `${P.assist_business_month} a month with a monthly review`, 'Forty hours a week back, cash collected sooner'],
  heroNote: 'For recruiters, multi-site trades firms, e-commerce businesses, clinics, agencies and professional firms with up to about forty staff. Larger than that, start with the AI Opportunity Audit.',
  service: { name: 'Clear Desk Business', type: 'Back-office assistant for 10 to 40 staff', price: P.assist_business_setup_num },
  sections: [
    {
      type: 'intro', kicker: 'Your week today',
      h2: 'Big enough to have a back office, too small for it to be anyone\'s whole job.',
      body: [
        'Between ten and forty staff a business carries real admin weight without the people to carry it. Enquiries are handled well on a good day and lost on a busy one. Quotes depend on one person. Invoices go out late because the job notes are on a phone. The same questions about holiday, expenses and the price list are answered by the owner, by hand, every week. Customers wait until nine the next morning for an answer that was in a document all along.',
        'Clear Desk Business connects Flo to the whole chain: enquiry, qualification, booking, quote, job notes, invoice, reminder, review request. Flo answers customers around the clock from your own material, answers staff from your own policies, writes the numbers every Monday and the full picture every month, and sits down with us once a month to decide what it takes on next. Your people approve at the points you choose. Everything else just happens.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What it does for you', h2: 'Everything in Team, plus the four things a bigger business needs.',
      cols: 2,
      items: [
        { icon: 'flow', title: 'Enquiry to quote to invoice, end to end', text: 'A new enquiry is answered, qualified and booked. The site or call notes become a quote in your format. The accepted quote becomes a job, the finished job becomes an invoice, the unpaid invoice becomes a polite reminder, the paid one becomes a review request. One chain, no retyping, your people approving where you choose.' },
        { icon: 'chat', title: 'Customer questions answered 24/7', text: 'Opening hours, prices, areas, lead times, order status, how-to questions, all answered on your website, by message and by phone, from your own documents and systems, with a clean hand-over to a person when it matters. Overnight enquiries are booked, not lost.' },
        { icon: 'book', title: 'Staff questions answered from your own policies', text: 'Holiday, sick pay, expenses, the price list, the process for a refund, who to call when a van breaks down. Your handbook, policies and procedures loaded once, answered instantly, so the owner stops being the help desk.' },
        { icon: 'target', title: 'A monthly review and roadmap', text: 'Once a month we look at what Flo did, what went wrong, what it should take on next and what the numbers say. You get a one-page roadmap for the next month and the changes made. It is a back office that improves, not a tool that decays.' },
        { icon: 'chart', title: 'Numbers you can run the business on', text: 'The Monday page for everyone, plus a monthly view: pipeline, conversion, cash collected, days to pay, who is overdue, which services make money, where enquiries come from. From your own tools, no spreadsheets.' },
        { icon: 'shield', title: 'Rules, access and an audit trail', text: 'Who may approve what, which customers and documents Flo may see, what it must never do, and a record of every action it took. Written down, agreed with you, and reviewed monthly.' },
      ],
    },
    {
      type: 'table', kicker: 'Before and after', h2: 'A twenty-person firm, before and after.',
      head: ['', 'Before', 'After'],
      rows: [
        ['Enquiries', 'Handled well on quiet days, lost on busy ones', 'Every one answered and qualified within minutes, around the clock'],
        ['Quote to invoice', 'Four people, three systems, retyping at each step', 'One chain, approvals at quote and invoice, nothing retyped'],
        ['Cash', 'Reminders sent when someone has time', 'Reminders on schedule, days to pay down, overdue list on Monday'],
        ['Staff questions', 'Owner answers the same ten questions every week', 'Answered instantly from the handbook, owner asked only for the exceptions'],
        ['Reporting', 'Month end, from the accountant, three weeks late', 'Monday page and a monthly review you act on'],
      ],
      note: 'Illustrative. Real figures from the first Business clients will replace this table.',
    },
    {
      type: 'checks', tone: 'wash', kicker: 'Honest scope', h2: 'What it does alone, what your people approve, and what stays human.',
      groups: [
        { title: 'Flo does alone', items: ['Answers and qualifies enquiries, books, confirms', 'Answers customer and staff questions from your material', 'Turns notes into draft quotes and invoices', 'Sends reminders and review requests', 'Produces the Monday page and the monthly numbers', 'Keeps the CRM and the customer list current'] },
        { title: 'Your people approve first', items: ['Quotes and prices', 'Invoices before they are issued', 'Marketing and customer emails', 'Any complaint or unusual request', 'New policies before they are answered from'] },
        { title: 'Always human', items: ['Payments, refunds and credit decisions', 'Hiring, performance and HR decisions', 'Signing contracts', 'Deciding which work to take and at what price'] },
      ],
    },
    {
      type: 'tiers', kicker: 'Price', h2: 'A fixed setup fee, a monthly plan with a monthly review.',
      items: [
        { name: 'Clear Desk Business', price: P.assist_business_setup, per: 'setup, ex VAT', cadence: `then ${P.assist_business_month} a month, cancel any time`, text: 'Everything on this page for up to about forty people, set up in three to four weeks.', includes: ['Everything in Clear Desk Team, for each person', 'Enquiry to quote to invoice chain, end to end', 'Customer answers 24/7 on web, message and phone', 'Staff answers from your handbook and policies', 'CRM connected and cleaned, or set up', 'Rules, access policy and audit trail', 'Half-day team training and a written guide', 'Monthly review and one-page roadmap'], featured: true, flag: 'Live in 3 to 4 weeks', best: 'a 10 to 40 person business where admin has become roles but is nobody\'s whole job', href: S.BOOK_URL, cta: 'Book a call' },
      ],
      note: `"From" because a forty-person firm on three sites with a warehouse system is more work than a twelve-person practice. We quote the exact figure after the first call and it does not move. The plan covers running costs, monitoring, fixes, unlimited small changes and the monthly review. Larger new jobs are scoped and priced separately, ${P.assist_job} upwards.`,
    },
    {
      type: 'steps', kicker: 'How it works', h2: 'Three to four weeks to set up, then a review every month.',
      items: [
        { title: 'A 30-minute call and a half-day walk-through', text: 'We map how an enquiry becomes cash today, who touches it, and where it stalls. You get the exact price and a plan of what Flo takes on in which week.' },
        { title: 'Weeks one and two: connections and material', text: 'Phone, inboxes, calendars, website and social channels, CRM, quoting, invoicing and accounts connected. Handbook, policies, price lists and procedures loaded and checked.' },
        { title: 'Week three: rules and roles', text: 'Who approves what, what Flo may see, what it must never do. Each person\'s tone learned from their own messages. Half-day training for the team.' },
        { title: 'Supervised fortnight, then monthly review', text: 'Everything goes past a person first. Then Flo runs, and once a month we review what it did, fix what it got wrong and agree what it takes on next.', meta: P.assist_business_month },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Right for you if, and not if.',
      yes: { title: 'Right for you if', items: ['Ten to forty people, one owner or MD who still gets the exceptions', 'Enquiries, quotes and invoices pass through several hands and systems', 'Customers and staff ask the same questions every week', 'Cash takes longer to collect than the terms say', 'A manager can own the approvals and the monthly review'] },
      no: { title: 'Not this if', items: [`More than about forty staff or several departments with their own systems: start with the AI Opportunity Audit at ${P.audit}`, 'You want a chatbot and nothing behind it', 'Nobody can own approvals: it will stall at the first quote', 'You need it fully unattended with no human check: we do not set it up that way'] },
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'What owners and MDs ask us.',
      items: [
        { q: 'How is this different from the AI Opportunity Audit and a build?', a: `The audit and build route is for larger businesses where the first question is where AI pays at all, and the answer might be a bespoke system. Clear Desk Business is for a 10 to 40 person firm where we already know the answer: the enquiry-to-cash chain and the questions everyone asks. It is a fixed package, set up in weeks, at a fraction of the price. If on the first call it is clear you need the audit instead, we will say so.` },
        { q: 'Which of our systems does Flo connect to?', a: 'The ones you have: phone, email, calendars, website, social channels, CRM, quoting, job management, invoicing and accounts. We name no software on these pages because the point is to fit around yours. If a system is genuinely closed we say so on the first call and suggest the workaround, which is usually a daily export.' },
        { q: 'Who is responsible if Flo gets something wrong?', a: 'For the first fortnight a person approves everything. After that you choose what Flo may do alone, and the list is written down. Quotes, invoices and anything to a customer in writing are approved by default. Flo logs every action. When it is unsure it asks rather than guesses. If it does make a mistake, the monthly review exists to find it and fix the rule.' },
        { q: 'How do staff questions work?', a: 'We load your handbook, policies, price lists and procedures once. Staff ask by message, in plain English, and get the answer with the source paragraph. Anything about an individual, a grievance or a decision is passed to the owner or manager, not answered. New policies are approved by you before Flo answers from them.' },
        { q: 'Why is the price "from"?', a: `${P.assist_business_setup} covers a typical firm on one or two sites with the usual tools. More sites, a warehouse or stock system, several phone lines or a legacy database add work and we price it on the first call. The figure we quote is fixed for the setup.` },
        { q: 'What is in the monthly plan?', a: `${P.assist_business_month} a month, ex VAT: running costs for the whole team, monitoring, fixes, unlimited small changes, the Monday page and monthly numbers, and the monthly review with a one-page roadmap. Call minutes above a normal firm's volume are charged at cost. Cancel any time. Accounts and data are yours.` },
        { q: 'What about data protection?', a: 'Flo reads customer and staff data, so we treat it seriously. Every account is in your company\'s name, data stays in your tools, and the AI services behind it process it under business terms. You get a data note, a staff access policy, a record of what Flo may see, and a short data protection impact assessment template filled in for your setup. You can disconnect anything in a minute.' },
        { q: 'Can it grow with us past forty staff?', a: `Yes, to a point. Past forty staff or when departments start running their own systems, the right step is the AI Opportunity Audit and, usually, an Embedded AI Lead from ${P.lead_1} a month. Your Business setup fee is credited against the first build if you move within a year.` },
      ],
    },
    {
      type: 'related', kicker: 'Smaller, or much bigger', h2: 'The other routes.',
      items: [
        { href: '/ai-assist/clear-desk-team/', icon: 'people', title: 'Clear Desk Team', text: 'Two to ten staff. One assistant for everyone, with enquiries, numbers and marketing handled.', meta: P.assist_team_setup },
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Past forty staff: two weeks to find where AI pays across departments.', meta: P.audit },
        { href: '/small-business-ai-pricing/', icon: 'pound', title: 'All prices', text: 'Every package, add-on and running cost on one page.', meta: P.assist_business_setup },
      ],
    },
    {
      type: 'cta', h2: 'Map how an enquiry becomes cash in your business.',
      text: 'A 30-minute call. We walk the chain with you, show you where Flo takes over and where your people stay in, and give you the exact price.',
      ctas: [{ label: 'Book a call', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
      note: `${P.assist_business_setup} setup, ${P.assist_business_month} a month, ex VAT. Live in three to four weeks.`,
    },
  ],
};
