const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'voice-ai',
  title: 'Voice AI for Business UK: AI Phone Answering | Revio',
  description: 'AI phone answering for UK businesses: inbound calls picked up, out-of-hours cover, appointments booked, calls qualified and written into your CRM. From £6,000.',
  keywords: ['voice ai for business uk', 'ai phone answering uk', 'ai receptionist uk', 'ai call handling', 'ai appointment booking phone', 'call transcription crm uk'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'Voice AI',
  art: 'voice',
  badge: 'Voice AI',
  h1: 'The phone gets answered, <em class="mint">at half past seven on a Sunday</em>.',
  sub: 'Voice AI that picks up when your people cannot: inbound calls answered in your voice, appointments booked into the real diary, calls qualified and routed, and every conversation transcribed into your CRM. From £6,000, with a written list of the calls it must never take.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'Read the straight answers', href: '#faq', style: 'ghost' },
  ],
  heroProof: ['Answers in under two rings, every hour of the week', 'Books into your live calendar, not a callback list', 'Transcript and summary on the CRM record'],
  service: { name: 'Voice AI Build', type: 'Conversational voice AI', price: 6000 },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'The calls you never hear about are the expensive ones.',
      body: [
        'Nobody tracks the enquiry that rang for twenty seconds and hung up. For a trade, a clinic, a lettings agency or a garage, that call was a job worth several hundred pounds and it went to whoever answered next. Most businesses we look at miss somewhere between fifteen and thirty per cent of inbound calls: lunchtimes, site visits, school runs, the hour after five, the whole weekend.',
        'The usual answers are an answering service that takes a message you still have to act on, or a voicemail nobody rings back fast enough. Voice AI is a third option: a system that answers on the second ring, knows what you do and what you charge, asks the questions your booking process needs, puts the appointment in the actual diary, and tells you within seconds what was said. It is not right for every call, and a good part of the build is deciding which calls it must hand straight to a person.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What it does', h2: 'Five jobs on the phone, done consistently.',
      cols: 3,
      items: [
        { icon: 'phone', title: 'Answers inbound calls', text: 'Picks up in under two rings with your greeting, handles the common questions about services, areas covered, opening hours and price ranges, and never leaves a caller in a queue listening to a loop.' },
        { icon: 'clock', title: 'Covers out of hours', text: 'Evenings, weekends, bank holidays and the three weeks a year your receptionist is away. The same system, a different script, with a clear rule about what waits until Monday and what pages a person now.' },
        { icon: 'calendar', title: 'Books appointments', text: 'Reads live availability from Microsoft 365, Google Calendar or your practice or job management system, offers real slots, takes the booking and sends the confirmation and reminder.' },
        { icon: 'target', title: 'Qualifies and routes', text: 'Postcode, job type, urgency, whether they are an existing customer, budget band where that is appropriate. Then it routes: warm transfer to the right person, a callback task, or a booking.' },
        { icon: 'doc', title: 'Writes up the call', text: 'Transcript, a short summary, the caller’s details and the outcome, on the CRM record before anyone picks the phone back up. No note-taking, no "what did they say" on Monday morning.' },
        { icon: 'chart', title: 'Tells you what calls are about', text: 'Once every call is transcribed you can finally see the pattern: which services people ring about, what they ask before buying, where the price objection lands, and which hours you were losing.' },
      ],
    },
    {
      type: 'table', kicker: 'The economics', h2: 'Voice AI against an answering service, and against doing nothing.',
      head: ['', 'Voice AI', 'Answering service', 'Missed calls'],
      rows: [
        ['Typical cost', 'From £6,000 to build, then usage of roughly £0.08 to £0.20 a minute', '£1 to £2 a call, commonly £200 to £600 a month', 'Nothing to run, everything to lose'],
        ['Hours covered', 'Every hour, every day', 'Usually extended hours, premium for 24/7', 'Only when somebody is free'],
        ['Knows your business', 'Trained on your services, areas, prices and rules', 'Reads a short brief, takes a message', 'Not applicable'],
        ['Books in the diary', 'Yes, live availability', 'Rarely, and usually as a request', 'No'],
        ['What you get back', 'Booking, transcript, summary, CRM record', 'A message to action', 'A voicemail, sometimes'],
        ['Cost of one lost job', 'Avoided', 'Partly avoided', 'A trade or clinic loses £300 to £2,000 per lost job'],
      ],
      note: 'Usage rates are 2026 market rates for speech-to-speech models plus telephony, billed in your own accounts. A single recovered job a month covers the running cost for most trades, clinics and agencies; the build pays back over the first quarter rather than the first week.',
    },
    {
      type: 'steps', kicker: 'How we build it', h2: 'Six weeks, and it never goes live unsupervised.',
      items: [
        { title: 'Listen to your calls', text: 'We take a sample of real recordings and your call handling notes. That tells us the ten questions that make up most of your inbound, and where a script would have annoyed someone.', meta: 'Week 1' },
        { title: 'Draw the line', text: 'A written list of calls the system must not attempt: complaints, clinical or regulated questions, safeguarding, chasing payment, anything from a named account. Those transfer immediately.', meta: 'Week 1' },
        { title: 'Build, connect, and test by phone', text: 'Numbers, routing, calendar, CRM. Then we ring it. Accents, bad signal, people talking over it, background noise on a building site. Voice fails in ways text does not, so it is tested out loud.', meta: 'Weeks 2–4' },
        { title: 'Shadow mode', text: 'It takes the overflow and the out-of-hours calls first, while your team keeps the daytime line. You listen to recordings each morning for a fortnight before it takes anything in business hours.', meta: 'Week 5' },
        { title: 'Live, with a monthly review', text: 'Calls answered, booked, transferred and abandoned, plus the ones it handled badly. We keep the tuning loop running or hand you the controls, whichever you prefer.', meta: 'Week 6 onward' },
      ],
    },
    {
      type: 'split', tone: 'wash', art: 'pipeline', reverse: true, kicker: 'Call analysis', h2: 'The transcript is worth as much as the answer.',
      body: [
        'Even where a person still takes most calls, putting every conversation through transcription and analysis changes what a management meeting can discuss. You stop arguing about whether customers ask for weekend appointments and start reading how many did last month.',
        'We wire the output into the CRM you already run, so a call becomes a record rather than a recording: who rang, about what, what was promised, and what the next step is. Sales managers get coaching material, operations get demand patterns, and marketing finally learns which campaign produced the phone call.',
      ],
      bullets: ['Every call transcribed and summarised onto the contact record', 'Outcomes and next steps captured without anybody typing them', 'Demand by service, hour and postcode, reported monthly', 'Objections and repeated questions surfaced for the website and the sales team', 'Call recording consent and retention set up properly'],
      ctas: [{ label: 'See the workflow side of this', href: '/ai-workflow-automation/', style: 'dark' }],
    },
    {
      type: 'compare', kicker: 'Honesty', h2: 'Where voice AI is right, and where it is plainly wrong.',
      yes: { title: 'Right for this', items: ['High volume of repetitive inbound: bookings, availability, opening hours, quotes', 'Businesses losing calls out of hours or during site work', 'Appointment-led operations: clinics, garages, lettings, trades, salons', 'First-line triage in front of a small team', 'Any business that cannot say what its callers ask about'] },
      no: { title: 'Wrong for this', items: ['Complaints. A person, quickly, with the authority to fix it', 'Regulated advice: clinical, legal, financial. Route to a qualified human', 'Safeguarding or vulnerability signals, which must escalate immediately', 'Debt collection and anything with a duty of care attached', 'Complex negotiation or a long-standing account relationship', 'Emergency lines, where a fallback to a human must be instant'] },
      note: 'These exclusions are written into the build as transfer rules, not left to the model’s judgement. If your call mix is mostly the right-hand column, we will tell you not to buy this.',
    },
    {
      type: 'checks', tone: 'wash', kicker: 'Scope', h2: 'What the build includes.',
      groups: [
        { title: 'Included', items: ['Number provisioning or porting, in your own name', 'Greeting, script and tone tuned on your real calls', 'Live calendar booking with confirmations and reminders', 'Transfer and escalation rules, tested by phone', 'CRM write-back with transcript and summary', 'Consent, recording notice and retention configured', 'Shadow-mode launch and a fortnight of supervised tuning', 'Runbook, admin training and a monthly report'] },
        { title: 'Not included', items: ['Telephony and model usage, billed in your own accounts', 'Outbound cold calling, which we do not build', 'Replacing a switchboard for a large contact centre', 'Languages beyond English unless specified at scoping', 'A guarantee that no caller will ever ask for a person, which is a feature rather than a fault'] },
      ],
    },
    {
      type: 'quote',
      text: 'We tell clients to judge voice AI on the calls it transfers, not the calls it handles. A system that knows when to stop is the only kind you can safely leave answering the phone on a Sunday.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they put it on the line.',
      items: [
        { q: 'Does it sound like a robot?', a: 'Current speech-to-speech models are close to natural, with interruptions handled and a response gap of well under a second. Most callers do not comment on it. That said, the system tells people it is an automated assistant at the start of the call, because pretending otherwise is both wrong and increasingly a compliance problem.' },
        { q: 'What if the caller wants a person?', a: 'They get one. Asking for a human is an immediate transfer during working hours, and out of hours it takes the details and raises an urgent callback with the priority set by the rules you agreed. There is no maze and no attempt to keep the caller in the system.' },
        { q: 'How much does it cost to run?', a: 'Telephony plus model usage is roughly £0.08 to £0.20 a minute in 2026, billed in your own accounts. A business taking 400 calls a month averaging three minutes is in the region of £100 to £250 a month. Optional support and iteration from us is ' + P.run + ' a month.' },
        { q: 'Can it handle strong accents and background noise?', a: 'Mostly, and it is tested against exactly that before launch: regional accents, a phone on speaker in a van, a caller in a busy reception. Where confidence is low it repeats back what it heard rather than guessing, and repeated low confidence is a trigger to transfer.' },
        { q: 'What about call recording consent?', a: 'The opening line states that the call is handled by an automated assistant and recorded, retention is set to a period you choose, and the lawful basis and processors are documented for your Article 30 record. If you take card details by phone, we route that away from the AI rather than trying to make it PCI-compliant.' },
        { q: 'Will it book into our real diary?', a: 'Yes. It reads live availability and writes the booking, so double-booking is not possible. We have connected Microsoft 365 and Google Calendar most often, plus practice and job management systems where an API exists. If yours has no API, the honest answer is that you get a callback task rather than a booking.' },
        { q: 'How long does it take to build?', a: 'Six weeks is typical: a week listening to calls and writing the rules, three weeks building and testing by phone, a fortnight in shadow mode taking overflow and out-of-hours only. It does not take daytime calls until you have listened to recordings and said you are happy.' },
        { q: 'We already have a receptionist. Does this replace them?', a: 'In every deployment we have built, no. It takes the overflow, the evenings and the weekends, and the twentieth call about opening hours, which is the work nobody wanted. The receptionist gets the calls that need a person, which is usually the reason they were hired.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where this leads.',
      items: [
        { href: '/ai-chatbot/', icon: 'chat', title: 'AI Chatbot', text: 'The same agent on web chat, WhatsApp and Instagram DMs, answering, qualifying and booking.', meta: P.chatbot },
        { href: '/industries/healthcare-dental/', icon: 'health', title: 'Healthcare and dental', text: 'Where phone bookings, cancellations and recalls are the whole operation, and the compliance line matters.', meta: 'Sector page' },
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks and a ranked list, including how many calls you actually miss and what they were worth.', meta: P.audit },
      ],
    },
    {
      type: 'cta', h2: 'Find out how many calls you are losing.',
      text: 'Bring us a month of call data and a handful of recordings. We will tell you what proportion voice AI could take, what it would cost to run, and which calls must always go to a person.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Work out the return first', href: S.CALC_URL, style: 'ghost' }],
      note: 'Prices exclude VAT. Numbers, telephony and model accounts are all created in your own name.',
    },
  ],
};
