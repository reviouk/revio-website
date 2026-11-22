const S = require('../../site');
const P = S.PRICE;
const C = S.CLEARDESK;

/* REVIO AI Assist hub. DRAFT 2026-11-19 for Rob's review. No vendor or tool is
   named anywhere on these pages: the assistant is the product. */
module.exports = {
  slug: 'cleardesk/index',
  title: 'Clear Desk: Flo, the AI Assistant for Small Businesses | by REVIO',
  description: 'Meet Flo, the assistant that answers your calls, clears the inbox, chases invoices and books jobs. Set up for you in days, from £295. Three Clear Desk packages.',
  keywords: ['ai assistant for small business uk', 'ai personal assistant small business', 'flo ai assistant', 'ai receptionist uk', 'automate admin small business', 'ai for sole traders', 'done for you ai setup'],
  art: 'clock',
  heroImage: { src: '/img/flo/flo.webp', alt: 'Flo, the Clear Desk assistant', say: 'Hi, it&rsquo;s Flo. Shall I take that call?' },
  badge: 'Clear Desk by REVIO',
  h1: 'Get your week back. <em class="mint">Flo starts Monday.</em>',
  sub: "Meet Flo, the assistant we set up for your business. Flo picks up the phone when you can't, keeps the inbox clear, chases unpaid invoices, books the jobs in and remembers every customer. You check and approve. Flo does the rest.",
  ctas: [
    { label: 'Book a 20-minute call', href: C.BOOK_URL, style: 'mint' },
    { label: 'See the three packages', href: '#packages', style: 'ghost' },
  ],
  heroProof: ['Set up for you in one to four weeks', 'Every price on this page', 'No lock-in, cancel the monthly plan any time'],
  heroNote: 'For UK sole traders and businesses with up to 40 staff.',
  service: { name: 'Clear Desk', type: 'Personal assistant for small businesses', price: P.assist_solo_setup_num },
  sections: [
    {
      type: 'intro', kicker: 'The problem',
      h2: 'You did not start a business to spend Sunday night on admin.',
      body: [
        "Owners of small UK businesses lose around eight hours a week to admin. Most of it is the same five jobs: answering the phone while on another job, replying to enquiries, chasing invoices, writing quotes and keeping the diary straight. None of it is the work you are paid for, and all of it piles up the moment you are busy.",
        "Half of small companies have tried AI. Most stopped at a chat window, because the hard part is not the typing. The hard part is connecting an assistant to your phone, your inbox, your diary, your invoicing and your customer list, and teaching it how you work. That is the job we do. You get Flo, already holding the keys.",
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What Flo does', h2: 'Five jobs Flo takes off you in the first month.',
      cols: 3,
      items: [
        { icon: 'phone', title: 'Answers the phone', text: "When you can't pick up, Flo does. Flo takes the details, answers the usual questions and books the job in your diary. You get a summary by text." },
        { icon: 'mail', title: 'Clears the inbox', text: 'Sorts what matters from what does not, drafts replies in your voice for you to approve, and chases the people who have gone quiet.' },
        { icon: 'pound', title: 'Chases the money', text: 'Watches your invoices and sends polite reminders at 7, 14 and 21 days, in your tone, until they are paid. You see every one before it goes.' },
        { icon: 'calendar', title: 'Keeps the diary', text: 'Books, moves and confirms appointments, writes up meeting notes and sends the follow-up you would have forgotten.' },
        { icon: 'doc', title: 'Drafts the quote', text: 'Turns a phone call or an email into a quote in your format in minutes, priced from your own list, ready for you to check and send.' },
        { icon: 'people', title: 'Remembers every customer', text: 'Who they are, what they asked for, what you quoted and when you last spoke. One place, on your phone, so nothing goes cold.' },
      ],
    },
    {
      type: 'tiers', id: 'packages', kicker: 'Three packages', h2: 'Pick the size of business, not a list of features.',
      items: [
        { name: 'Clear Desk Solo', price: P.assist_solo_setup, per: 'setup', cadence: `then ${P.assist_solo_month} a month`, text: 'For sole traders and owner-operators. Flo on your phone, inbox, diary and invoices, with 250 call minutes included.', includes: ['Phone answered and jobs booked', 'Inbox sorted, replies drafted', 'Invoices chased until paid', 'Quotes drafted from calls', 'Every customer remembered', 'Live in one week'], best: 'electricians, plumbers, therapists, garages, sole-practitioner accountants and consultants', href: '/solo/', cta: 'See Solo' },
        { name: 'Clear Desk Team', price: P.assist_team_setup, per: 'setup', cadence: `then ${P.assist_team_month} a month`, text: 'For two to ten staff. Two people included, then £35 a person. Flo works for the whole team, with the enquiries, numbers and marketing handled.', includes: ['Everything in Solo, for every person', 'Enquiries answered in minutes and logged', 'Weekly numbers every Monday', "A month's marketing drafted in a morning", 'Shared customer list for the team', 'Live in two to three weeks'], featured: true, flag: 'Most popular', best: 'small practices, agencies, trades companies with office staff, lettings agents', href: '/team/', cta: 'See Team' },
        { name: 'Clear Desk Business', price: P.assist_business_setup, per: 'setup', cadence: `then ${P.assist_business_month} a month`, text: 'For ten to forty staff. Ten people included, then £30 a person. The back office runs itself, with a monthly review and roadmap from us.', includes: ['Everything in Team', 'Enquiry to quote to invoice, end to end', 'Customer questions answered 24/7', 'HR and policy questions answered from your documents', 'Monthly review and roadmap', 'Live in three to four weeks'], best: 'recruiters, multi-site trades, e-commerce, professional companies', href: '/business/', cta: 'See Business' },
      ],
      note: `All prices exclude VAT and are shown as "from". The monthly plan covers Flo's running costs, monitoring, fixes and changes, with a call-minute allowance for each size. Team and Business are priced per person beyond the people included. Not sure which fits? Book a 90-minute Health Check for ${P.assist_check}, credited against Team or Business.`,
    },
    {
      type: 'table', tone: 'wash', kicker: 'What we typically do for you', h2: 'The connections we make, and why they matter.',
      head: ['We will', 'So that'],
      rows: [
        ['Connect Flo to your phone line', 'Calls are answered when you are busy, details taken and jobs booked'],
        ['Connect it to your email and calendar', 'Replies are drafted in your voice and meetings land in the right slot'],
        ['Integrate with your CRM, or set one up if you have none', 'Every enquiry is logged, followed up and visible, so nothing goes cold'],
        ['Connect your website forms and enquiry channels', 'A new lead gets a proper reply in minutes, not the next morning'],
        ['Link your accounting and invoicing software', 'Overdue invoices are chased politely until they are paid'],
        ['Connect your quoting or job-management tool', 'A quote is drafted from a call or an email in minutes'],
        ['Load your documents, price lists and policies', 'Staff and customers get accurate answers from your own material'],
        ['Pull your sales, cash and marketing numbers together', 'A one-page summary arrives every Monday, no spreadsheets'],
        ['Train you and your team, and write the guide', 'People use Flo from week one and know what still needs a human'],
        ['Hand over every account and line of code', 'You own it all. We are optional afterwards'],
      ],
      note: 'Each package page lists which of these it includes. We name no software here on purpose: we connect to what you already use.',
    },
    {
      type: 'steps', id: 'how', kicker: 'How it works', h2: 'From first call to a clear desk.',
      items: [
        { title: 'A 20-minute call', text: 'You tell us where the week goes. We tell you which package fits and what it will and will not do. No pitch deck.' },
        { title: 'Setup, done by us', text: 'We connect your phone, inbox, diary, invoicing and customer list, teach Flo your tone and your prices, and test it on real work.', meta: '1 to 4 weeks' },
        { title: 'Supervised first fortnight', text: 'Every call summary, draft and reminder goes past you first. You correct Flo, and it learns. Nothing goes out that you have not seen.' },
        { title: 'Monthly plan', text: 'Flo keeps running. We monitor it, fix what breaks, and make one change a month as your business shifts. Cancel any time.', meta: P.assist_solo_month },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and who it is not.',
      yes: { title: 'A good fit', items: ['A sole trader or a business with up to 40 staff', 'A phone that rings while you are working', 'Invoices that take longer to collect than they should', 'Enquiries that wait hours for a reply', 'An owner who can spend 20 minutes a week approving and correcting'] },
      no: { title: 'Not this, yet', items: ['More than 40 staff or several departments: ask us on the call and we will point you to the right thing', 'You want a chatbot on the website and nothing behind it', 'You want it fully automatic with no human check: we do not sell that', 'You want to build it yourself: a good idea if you have the time, and we will say so'] },
    },
    {
      type: 'quote', tone: 'wash',
      text: 'The owners who get the most from this are not the technical ones. They are the ones who were drowning in Sunday-night admin and wanted it gone.',
      who: 'Revio', role: 'The team that sets up and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions owners ask before they book.',
      items: [
        { q: 'Is Flo a real person?', a: 'No. Flo is the name we give the assistant so you and your customers have something to call it. If a caller asks, Flo says it is an automated assistant and offers to take a message or book a slot. Anything it is unsure about goes to you.' },
        { q: 'Is this just a chatbot?', a: 'No. A chatbot waits for you to type. Flo is connected to your phone, inbox, diary, invoicing and customer list, knows your prices and your tone, and does the jobs on a schedule whether or not you are at a screen. The connecting and the teaching are what we do for the setup fee.' },
        { q: 'Will Flo send things without me seeing them?', a: 'Not until you say so. For the first fortnight every call summary, draft reply, quote and reminder goes past you. After that you choose which jobs Flo may do alone, for example invoice reminders, and which still need your approval, for example quotes. Payments, contracts and anything legal always need you.' },
        { q: 'What does the monthly plan cover?', a: `Flo's running costs, monitoring so we know when something breaks before you do, fixes, and one change a month as your business shifts. Solo starts at ${P.assist_solo_month}, Team at ${P.assist_team_month} and Business at ${P.assist_business_month}, all excluding VAT. Cancel any time. You keep the accounts and the data.` },
        { q: 'Do I need to change my software?', a: 'Almost never. We connect to the phone, email, calendar, invoicing and customer tools you already use. If you have no customer list at all, we set up a simple one as part of the package. We name no software on these pages because the point is that we fit around yours.' },
        { q: 'Where does my data go?', a: 'Flo reads your email, calls and invoices, so this matters. Every account is in your name, data stays in your tools, and the AI services we use process it under business terms, not consumer ones. You get a plain-English one-page note on what it can see and where it goes, and you can disconnect anything at any time.' },
        { q: 'How quickly is it live?', a: 'Solo in about a week, Team in two to three weeks, Business in three to four. The first fortnight after that is supervised, so expect the full benefit about a month after you sign.' },
        { q: 'What if I am bigger than 40 staff?', a: 'Then these packages are probably too small for you, and we will say so on the call. REVIO works with larger companies separately; book the call anyway and we will point you to the right thing.' },
        { q: 'Could I set this up myself?', a: 'If you are comfortable with software and have a spare weekend, yes, and the result will be a useful chat tool. What you will probably not do is wire it into your phone line, your invoicing and your diary, write the rules for what it may do alone, and keep it running when something changes. That is what you are paying for.' },
      ],
    },
    {
      type: 'related', kicker: 'Next', h2: 'Pick a package, or see every price.',
      items: [
        { href: '/solo/', icon: 'phone', title: 'Clear Desk Solo', text: 'For anyone who is the whole business. Live in a week.', meta: P.assist_solo_setup },
        { href: '/team/', icon: 'people', title: 'Clear Desk Team', text: 'Two to ten staff. One assistant for everyone.', meta: P.assist_team_setup },
        { href: '/pricing/', icon: 'pound', title: 'Every price', text: 'All three packages, add-ons and running costs on one page.', meta: P.assist_business_setup },
      ],
    },
    {
      type: 'cta', h2: 'Find out what Flo would do first.',
      text: 'A 20-minute call. You describe your week, we tell you which three jobs to hand over first and what it will cost. If it is not for you, we will say so.',
      ctas: [{ label: 'Book a call', href: C.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: C.CONTACT_URL, style: 'ghost' }],
      note: 'For sole traders and businesses up to 40 staff. UK only.',
    },
  ],
};
