const S = require('../../site');
const P = S.PRICE;

/* Clear Desk Team. DRAFT 2026-11-19. Audience: owner of a 2–10 person business. */
module.exports = {
  slug: 'ai-assist/clear-desk-team',
  title: 'Clear Desk Team: AI Assistant for Small Teams | REVIO AI Assist',
  description: 'Flo, one assistant for a team of two to ten: enquiries answered in minutes, invoices chased, numbers every Monday. From £1,950 setup, then £245 a month.',
  keywords: ['ai assistant for small team', 'ai for small business uk 10 staff', 'automate enquiries small business', 'ai admin assistant office', 'weekly business report automation', 'small business ai setup uk'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }, { label: 'AI Assist', href: '/ai-assist/' }],
  crumbLabel: 'Clear Desk Team',
  art: 'chat',
  badge: 'Clear Desk Team',
  h1: 'One assistant for the whole team. <em class="mint">Twenty hours a week back.</em>',
  sub: 'With two to ten people, the admin does not go away, it multiplies. Enquiries wait for whoever is free. Three people chase the same invoice. Nobody knows the numbers until the accountant does. Clear Desk Team gives everyone one assistant, called Flo, with one shared customer list, so the business answers in minutes and the owner sees the week on a Monday.',
  ctas: [
    { label: 'Book a 20-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See what it costs', href: '#price', style: 'ghost' },
  ],
  heroProof: [`${P.assist_team_setup} to set up, live in two to three weeks`, `${P.assist_team_month} a month, cancel any time`, 'A two-hour team session included'],
  heroNote: 'For small practices, agencies, trades firms with office staff, lettings agents, clinics, salons and shops with a team.',
  service: { name: 'Clear Desk Team', type: 'Personal assistant setup for small teams', price: P.assist_team_setup_num },
  sections: [
    {
      type: 'intro', kicker: 'Your week today',
      h2: 'You hired people to do the work, and they spend half their day on the admin around it.',
      body: [
        'At two to ten staff the owner is still the switchboard. Enquiries land in a shared inbox and wait for whoever notices. A quote goes out late because the person who prices it was on site. The invoice reminder is sent twice by two people, or not at all. The Monday meeting runs on gut feel because the numbers live in four places. Everyone is busy and the business still feels slow to customers.',
        'Clear Desk Team puts Flo in front of every person, connected to the shared inbox, the diary, the invoicing, the customer list and your marketing channels. Flo answers and logs enquiries, drafts the replies, chases the money, writes the Monday numbers and drafts the month\'s posts. Your team approves, corrects and gets on with the work they were hired for.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What it does for you', h2: 'Everything in Solo, for every person, plus four things a team needs.',
      cols: 2,
      items: [
        { icon: 'chat', title: 'Every enquiry answered in minutes', text: 'Website forms, email, social messages and calls all land in one place. Flo replies properly within minutes, asks the qualifying questions, books the appointment or passes it to the right person with the details already filled in. Nothing waits for whoever is free.' },
        { icon: 'mail', title: 'An inbox for each person, one assistant', text: 'Each member of the team gets their own inbox sorted and their replies drafted in their voice. The owner sees the summary. The shared inbox stops being a place where things go to die.' },
        { icon: 'chart', title: 'The numbers, every Monday', text: 'Enquiries, quotes out, jobs booked, invoices raised, cash in, overdue. Pulled from your tools into a one-page summary in your inbox before the Monday meeting. No spreadsheets, no waiting for month end.' },
        { icon: 'spark', title: 'A month of marketing in a morning', text: 'Posts for your social channels, a monthly email to your customers and review requests after each job, drafted from what the business actually did this month, in your tone, for you to approve in one sitting.' },
        { icon: 'pound', title: 'Invoices chased, once', text: 'One schedule, one tone, one person who sees the reminders before they go. Reminders stop the moment the invoice is paid. Cash comes in sooner and nobody is chased twice.' },
        { icon: 'people', title: 'One customer list the whole team can see', text: 'Who enquired, who quoted, who booked, who paid and who has gone quiet, visible to everyone on a phone. If you already have a CRM we connect to it. If not, we set one up as part of the package.' },
      ],
    },
    {
      type: 'table', kicker: 'Before and after', h2: 'A six-person firm, before and after.',
      head: ['', 'Before', 'After'],
      rows: [
        ['New enquiry', 'Sits in the shared inbox until someone notices. Average reply: 5 hours', 'Answered and qualified in 4 minutes, booked or assigned with details filled in'],
        ['Quote', 'Written when the estimator is back in the office, often the next day', 'Drafted from the site notes within the hour, checked and sent the same day'],
        ['Invoices', 'Chased by whoever remembers, sometimes twice', 'One schedule, one tone, reminders stop on payment'],
        ['Monday meeting', 'Gut feel and a spreadsheet someone built on Sunday', 'One page in every inbox at 7am'],
        ['Marketing', 'Happens in quiet weeks, which means never', 'A month of posts and one email, approved in one sitting'],
      ],
      note: 'Illustrative. Real figures from the first Team clients will replace this table.',
    },
    {
      type: 'checks', tone: 'wash', kicker: 'Honest scope', h2: 'What it does alone, what the team approves, and what stays human.',
      groups: [
        { title: 'Flo does alone', items: ['Answers, qualifies and logs enquiries', 'Books into free slots and sends confirmations', 'Sorts every inbox and drafts replies', 'Sends invoice reminders on your schedule', 'Produces the Monday numbers', 'Keeps the customer list current'] },
        { title: 'Your team approves first', items: ['Quotes and prices', 'Marketing posts and the monthly email', 'Replies to complaints', 'Anything Flo is not sure about'] },
        { title: 'Always human', items: ['Taking or refunding payment', 'Hiring, firing and HR conversations', 'Signing anything', 'Deciding which work to take'] },
      ],
    },
    {
      type: 'tiers', kicker: 'Price', h2: 'One setup fee, one plan for the whole team.',
      items: [
        { name: 'Clear Desk Team', price: P.assist_team_setup, per: 'setup, ex VAT', cadence: `then ${P.assist_team_month} a month, cancel any time`, text: 'Everything on this page, set up in two to three weeks. Includes two people; each extra person £35 a month and £95 at setup, up to ten.', includes: ['Everything in Clear Desk Solo, for each person', '300 answered call minutes a month, then 15p a minute', 'One shared enquiry inbox, answered in minutes', 'Website forms and social messages connected', 'CRM connected, or a simple one set up', 'Weekly numbers every Monday', 'Monthly marketing drafts and review requests', 'Two-hour team session and a written guide', '30-day check-in and a 90-day review'], featured: true, flag: 'Most popular', best: 'a 2 to 10 person business where the owner is still the switchboard', href: S.BOOK_URL, cta: 'Book a call' },
      ],
      note: `"From" because a ten-person firm with three sites is more work than a three-person practice. We quote the exact figure on the first call and it does not move. The plan covers Flo's running costs, monitoring, fixes and up to three changes a month. Two people are included; each extra person is ${P.assist_team_person} a month, so a five-person team pays £350 and a ten-person team £525. Extra automated jobs ${P.assist_job} each.`,
    },
    {
      type: 'steps', kicker: 'How it works', h2: 'Two to three weeks to set up, a fortnight supervised.',
      items: [
        { title: 'A 20-minute call', text: 'You walk us through how enquiries, quotes, invoices and the diary work today, and who does what. We confirm Team fits and quote the exact price.' },
        { title: 'Week one: connections', text: 'Phone, shared and personal inboxes, calendars, invoicing, CRM or customer list, website forms and social channels, all connected. Prices, services and your usual answers loaded.' },
        { title: 'Week two: tone and rules', text: 'Flo learns each person\'s voice from their own messages. Together we write the rules: what it does alone, what each person approves, what it never touches.' },
        { title: 'Supervised fortnight, then running', text: 'Everything goes past the team first. Then Flo runs, we monitor it, and we make up to three changes a month as the business shifts.', meta: P.assist_team_month },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Right for you if, and not if.',
      yes: { title: 'Right for you if', items: ['Two to ten people, one owner still handling too much', 'Enquiries wait hours for a reply', 'The numbers arrive from the accountant, late', 'Marketing happens in quiet weeks, so rarely', 'Someone can own the approvals for twenty minutes a day'] },
      no: { title: 'Not this if', items: ['You are on your own: Clear Desk Solo is cheaper and faster', 'More than ten people or several departments: see Clear Desk Business', 'You want a chatbot on the website and nothing else', 'Nobody can own the approvals: it will stall'] },
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'What owners of small teams ask us.',
      items: [
        { q: 'We already have a CRM. Do we have to move?', a: 'No. We connect Flo to the one you have, however untidy. Part of the setup is cleaning it enough that Flo has something reliable to work from. If you have nothing, we set up a simple one. We do not name software on these pages because the point is to fit around yours.' },
        { q: 'Will customers know they are talking to an assistant?', a: 'On the phone Flo introduces itself as an assistant and says so if asked. In email the drafts go out in your team\'s names after a person has approved them, so they are your team\'s replies. We never set Flo up to pretend to be a named human.' },
        { q: 'How does it know which person should handle an enquiry?', a: 'From rules we write together in week two: by service, by area, by who is free in the diary, or round-robin. Flo fills in the details and hands over. If it is unsure it asks the owner rather than guessing.' },
        { q: 'What is in the Monday numbers?', a: 'Enquiries received and answered, quotes sent and won, jobs booked, invoices raised, cash collected, overdue invoices with names, and anything that went quiet. One page, pulled from your own tools at 7am. We agree the exact list with you and change it when you want.' },
        { q: 'Why is the price "from"?', a: `${P.assist_team_setup} covers a typical team on one site with the usual tools. Three sites, two phone lines or an awkward legacy system cost more to connect, and each person beyond the first two adds ${P.assist_team_person_setup} at setup. We say so on the first call. The figure we quote is fixed and does not move during the setup.` },
        { q: 'What does the monthly plan cover?', a: `${P.assist_team_month} a month, ex VAT: Flo's running costs for the whole team, monitoring, fixes, and up to three changes a month, for example a new service, a new person or a new reminder schedule. Two people are included and each extra person is ${P.assist_team_person} a month. 300 answered call minutes are included; above that, 15p a minute, itemised. Cancel any time.` },
        { q: 'Where does our data go?', a: 'Flo reads your team\'s email, calls, invoices and customer list, so this matters. Every account is in your company\'s name, data stays in your own tools, and the AI services behind it process it under business terms. You get a one-page data note and a short access policy for staff, and you can disconnect anything in a minute.' },
        { q: 'What happens when we grow past ten?', a: 'Clear Desk Business adds end-to-end enquiry to quote to invoice handling, 24/7 customer answers, HR and policy answers from your documents, and a monthly review with us. Your Team setup fee is credited against Business if you upgrade within a year.' },
      ],
    },
    {
      type: 'related', kicker: 'The other packages', h2: 'Smaller or bigger than this.',
      items: [
        { href: '/ai-assist/clear-desk-solo/', icon: 'voice', title: 'Clear Desk Solo', text: 'For a one-person business. Phone, inbox, invoices and diary, live in a week.', meta: P.assist_solo_setup },
        { href: '/ai-assist/clear-desk-business/', icon: 'layers', title: 'Clear Desk Business', text: 'Ten to forty staff. The back office runs itself, with a monthly review.', meta: P.assist_business_setup },
        { href: '/small-business-ai-pricing/', icon: 'pound', title: 'All prices', text: 'Every package, add-on and running cost on one page.', meta: P.assist_team_setup },
      ],
    },
    {
      type: 'cta', h2: 'Give the team Flo.',
      text: 'A 20-minute call. Tell us how enquiries, quotes and invoices move through the business today, and we will tell you what Flo takes off each person first, and the exact price.',
      ctas: [{ label: 'Book a call', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
      note: `${P.assist_team_setup} setup, ${P.assist_team_month} a month, ex VAT. Live in two to three weeks.`,
    },
  ],
};
