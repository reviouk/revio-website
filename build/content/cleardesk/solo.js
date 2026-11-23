const S = require('../../site');
const P = S.PRICE;
const C = S.CLEARDESK;

/* Flo Solo. DRAFT 2026-11-19. Audience: sole traders and owner-operators,
   not freelancers. Lead with the phone, then inbox, then invoices. */
module.exports = {
  slug: 'cleardesk/solo',
  title: 'Flo Solo: AI Assistant for Sole Traders | by LeadSignal',
  description: 'Flo answers missed calls, books the job, texts back callers, sorts your inbox and chases invoices. A named person, no contract. From £295, then £99 a month.',
  keywords: ['ai assistant for sole traders', 'ai receptionist for tradesmen uk', 'ai for self employed uk', 'missed calls tradesman', 'invoice chasing automation', 'ai personal assistant small business'],
  art: 'voice',
  heroImage: { src: '/img/flo/flo.webp', alt: 'Flo, the assistant for sole traders', say: 'Hi, it&rsquo;s Flo, Dave&rsquo;s assistant. Thursday at two?' },
  badge: 'Flo Solo',
  h1: 'Missed call, lost revenue. <em class="mint">Not any more.</em>',
  sub: "You are on the tools, in a treatment room or with a client. The phone rings, the inbox fills, and an invoice from three weeks ago still has not been paid. Flo Solo is the package for a one-person business. Flo answers your missed calls, books the job, texts back callers it could not help, sorts your inbox and chases unpaid invoices. You get a named person looking after it, a supervised first fortnight and no contract.",
  ctas: [
    { label: 'Book a 20-minute call', href: C.BOOK_URL, style: 'mint' },
    { label: 'See what it costs', href: '#price', style: 'ghost' },
  ],
  heroProof: [`${P.assist_solo_setup} to set up, live in a week`, `${P.assist_solo_month} a month, cancel any time`, 'You approve everything for the first fortnight'],
  heroNote: 'For electricians, plumbers, heating engineers, therapists, garages, sole-practitioner accountants, consultants and anyone else who is the whole business.',
  service: { name: 'Flo Solo', type: 'Personal assistant setup for sole traders', price: P.assist_solo_setup_num },
  sections: [
    {
      type: 'intro', kicker: 'Your week today',
      h2: 'Eight hours a week of admin, done in the gaps and at the kitchen table.',
      body: [
        "If you are the whole business, every call you miss is a job that goes to the next name on the search results. Every quote you write at nine at night is an hour you do not get back. Every invoice you forget to chase is money you have already earned sitting in someone else's account. Owners of one-person businesses tell us admin takes around eight hours a week, and invoicing, chasing and quoting are the worst of it.",
        "You do not need another app to learn. You need someone to pick up the phone, sort the inbox, send the reminder and book the job, and to check with you before anything important goes out. That is what Flo does. We set it up, connect it to the tools you already use and teach it how you talk. You carry on working.",
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What Flo does for you', h2: 'Six jobs you stop doing from the first week.',
      cols: 3,
      items: [
        { icon: 'phone', title: 'Answers the phone when you cannot', text: "Picks up on your existing number with \"Hi, it's Flo, Dave's assistant\", takes the name, the job and the address, answers the usual questions about prices and areas, and books a slot in your diary. You get a text summary within a minute. If Flo could not help a caller, it texts them back so nobody is left hanging." },
        { icon: 'mail', title: 'Sorts the inbox', text: 'Reads what came in, flags the two things that need you, drafts replies to the rest in your words, and chases the enquiries that went quiet last week.' },
        { icon: 'pound', title: 'Gets you paid', text: 'Texts the invoice the moment the job is done, so most customers pay before you leave. Anything still unpaid gets a polite reminder at 7, 14 and 21 days.' },
        { icon: 'doc', title: 'Drafts the quote', text: 'Turns a voicemail, a call summary or an email into a quote in your format, priced from your own list, ready to check and send from your phone.' },
        { icon: 'calendar', title: 'Keeps the diary straight', text: 'Books, moves and confirms appointments, sends the reminder the day before, and tells you when two things are about to clash.' },
        { icon: 'people', title: 'Remembers every customer', text: 'Who rang, what they wanted, what you quoted, when the job was done. One simple list on your phone, so the follow-up and the repeat work do not slip.' },
      ],
    },
    {
      type: 'table', kicker: 'Before and after', h2: 'A sole trader\'s Monday, before and after.',
      head: ['', 'Before', 'After'],
      rows: [
        ['7.30am', 'Three voicemails from Friday, two already gone elsewhere', 'Three calls answered on Friday, two booked, one quote drafted'],
        ['Mid-morning', 'Phone rings on a job, goes to voicemail', 'Flo answers, takes details, books Thursday 2pm, texts you'],
        ['Lunch', 'Twenty emails, you answer four', 'Two flagged for you, eleven drafted, five filed'],
        ['5pm', 'Try to remember who still owes you', 'Three reminders sent this morning, one invoice paid by lunchtime'],
        ['9pm', 'Write two quotes at the kitchen table', 'Two quotes drafted, you check and send in ten minutes'],
      ],
      note: 'Illustrative. Real figures from the first Solo clients will replace this table.',
    },
    {
      type: 'checks', tone: 'wash', kicker: 'Honest scope', h2: 'What Flo does alone, what you do, and what stays human.',
      groups: [
        { title: 'Flo does alone', items: ['Answers and logs calls, books into free slots', 'Texts back callers it could not help', 'Sorts and files email, drafts replies', 'Sends invoice reminders on the schedule you set', 'Sends appointment confirmations and reminders', 'Keeps the customer list up to date'] },
        { title: 'You approve first', items: ['Quotes and prices', 'Replies to new customers for the first fortnight', 'Anything involving a complaint', 'Any message Flo is not sure about'] },
        { title: 'Always human', items: ['Taking payment or refunding', 'Signing anything', 'Deciding whether to take a job', 'The work itself'] },
      ],
    },
    {
      type: 'tiers', kicker: 'Price', h2: 'One price to set up, one small plan to keep it running.',
      items: [
        { name: 'Flo Solo', price: P.assist_solo_setup, per: 'setup, ex VAT', cadence: `then ${P.assist_solo_month} a month, cancel any time`, text: 'Everything on this page, set up for you in about a week.', includes: ['Phone answering on your existing number', 'Texts back callers Flo could not help', 'Inbox sorting and drafted replies', 'Invoice reminders from your invoicing software', 'Quotes drafted from calls and emails', 'Diary booking and reminders', 'A simple customer list on your phone', 'One hour of training and a one-page guide', '30-day check-in call'], featured: true, flag: 'Live in a week', best: 'anyone who is the whole business and loses jobs to a missed call', href: C.BOOK_URL, cta: 'Book a call' },
      ],
      note: `The monthly plan covers Flo's running costs, monitoring, support and one change a month. 250 answered call minutes a month are included. There is no per-minute charge on Solo: if you need more, extra minutes come in packs of 100 for ${P.assist_solo_pack}. Prefer to pay yearly? It is ${P.assist_solo_year} a year, two months free. Need more than one person on it? See Flo Team.`,
    },
    {
      type: 'steps', kicker: 'How it works', h2: 'Live in a week, supervised for a fortnight.',
      items: [
        { title: 'A 20-minute call', text: 'You tell us how the phone, email, diary and invoicing work today. We confirm Solo fits and book the setup.' },
        { title: 'Setup, three to five days', text: 'We connect your number, inbox, calendar, invoicing and customer list, load your prices and your usual answers, and teach Flo your tone from your own messages.' },
        { title: 'Supervised fortnight', text: 'Everything goes past you first. You correct it on your phone in a few words. By the end of two weeks Flo sounds like you.' },
        { title: 'Running', text: 'Flo keeps going. We look after it and make one change a month. You pay the plan and get on with the work.', meta: P.assist_solo_month },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Right for you if, and not if.',
      yes: { title: 'Right for you if', items: ['You are the business, perhaps with a partner or an apprentice', 'You miss calls because you are working', 'Quotes and invoices happen in the evening', 'You use a phone, email, a calendar and some invoicing software, however untidy', 'You can spend ten minutes a day approving for the first fortnight'] },
      no: { title: 'Not this if', items: ['You have office staff who already handle the phone: see Flo Team', 'You want to build it yourself and have the weekend to do it', 'You want no human check at all: see <a href="https://lead-signal.ai/" target="_blank" rel="noopener">LeadSignal</a>, our fully automatic assistant for enquiries', 'You take payments over the phone and want Flo to do that: it will not'] },
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'What sole traders ask us.',
      items: [
        { q: 'Does Flo sound like a robot?', a: 'Flo sounds like a calm, well-briefed assistant, and tells anyone who asks that it is automated. It does not pretend to be you or a person. Customers mostly care that someone picked up, took the details properly and booked them in. We will give you a number to ring so you can hear it before you decide.' },
        { q: 'Do I need a new phone number?', a: 'No. Flo answers on your existing number when you do not pick up, or after a set number of rings, whichever you prefer. You can switch it off for an afternoon from your phone.' },
        { q: 'What if a customer asks something Flo does not know?', a: 'Flo takes the details, says you will call back, and sends you a summary straight away. It is set up to say "I will check with him" rather than guess. You decide what it may answer alone, usually prices, areas, opening hours and availability.' },
        { q: 'Will it annoy my customers about invoices?', a: 'The reminders are written in your words, go at 7, 14 and 21 days by default, and stop the moment the invoice is marked paid. You see every one before it goes for the first fortnight, and you can exclude any customer. Most owners find they get paid faster and nobody complains.' },
        { q: 'I do not have a customer list or a CRM.', a: 'Most sole traders do not. A simple one is part of the package: name, number, job, quote, status, last contact. It lives on your phone and Flo keeps it up to date. If you already use something, we connect to that instead.' },
        { q: 'What does the monthly plan actually cover?', a: `${P.assist_solo_month} a month, excluding VAT, covers Flo's running costs, 250 call minutes, monitoring, support, and one change a month, for example a new price list or a new service. You can pay yearly for ${P.assist_solo_year} instead, two months free. Cancel any time. The accounts and the data are yours.` },
        { q: 'Where does my data go?', a: 'Flo reads your calls, email and invoices, so this matters. Every account is in your name, your data stays in your own tools, and the AI services behind it process it under business terms. You get a one-page note in plain English on what it can see, and you can disconnect anything in a minute.' },
        { q: 'Can I grow into the bigger packages?', a: 'Yes. When you take on staff, Flo Team adds everyone to Flo and shares the customer list. Whatever you have paid for Solo setup is credited against Team if you upgrade within a year.' },
      ],
    },
    {
      type: 'related', kicker: 'The other packages', h2: 'If you have staff, start here instead.',
      items: [
        { href: '/team/', icon: 'people', title: 'Flo Team', text: 'Two to ten staff. One assistant for everyone, with enquiries, numbers and marketing handled.', meta: P.assist_team_setup },
        { href: '/business/', icon: 'layers', title: 'Flo Business', text: 'Ten to forty staff. The back office runs itself, with a monthly review.', meta: P.assist_business_setup },
        { href: '/pricing/', icon: 'pound', title: 'All prices', text: 'Every package, add-on and running cost on one page.', meta: P.assist_solo_setup },
      ],
    },
    {
      type: 'cta', h2: 'Hear Flo answer a call before you decide.',
      text: 'Book a 20-minute call. We will give you a number to ring, talk through your week, and tell you honestly whether Solo is the right fit.',
      ctas: [{ label: 'Book a call', href: C.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: C.CONTACT_URL, style: 'ghost' }],
      note: `${P.assist_solo_setup} setup, ${P.assist_solo_month} a month, ex VAT. Live in about a week.`,
    },
  ],
};
