const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-chatbot',
  title: 'AI Chatbot for Business UK, Built on Your Data | Revio',
  description: 'AI chatbots for your website, WhatsApp and Instagram DMs, trained on your own material, GDPR-first, handing to a human and writing to your CRM. From £3,000.',
  keywords: ['ai chatbot for business uk', 'ai chatbot development', 'website chatbot uk', 'whatsapp chatbot for business', 'instagram dm automation uk', 'customer service chatbot uk'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'AI Chatbot',
  art: 'chat',
  badge: 'AI Chatbot',
  h1: 'A chatbot that answers properly, <em class="mint">then hands over</em>.',
  sub: 'Web chat, WhatsApp and Instagram or Facebook DMs, answered in your voice from your own material. It qualifies, books the meeting, writes the record into your CRM, and passes anything it should not touch to a named person. From £3,000, built in your own accounts.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the three options', href: '#tiers', style: 'ghost' },
  ],
  heroProof: ['Trained on your documents, not the open web', 'Hands to a human on rules you set', 'UK GDPR handled before it goes live'],
  service: { name: 'AI Chatbot Build', type: 'Conversational AI', price: 3000 },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'Most business chatbots are a search box with a personality.',
      body: [
        'You have probably met the two failure modes. The old kind is a decision tree: four buttons, none of which is what the customer wanted, and a dead end that says please email us. The new kind is a general model bolted to a website, answering confidently about a product you stopped selling in 2023 and quoting a price you never published.',
        'A chatbot earns its place when it knows only what your business actually says, admits when it does not know, and moves the conversation somewhere useful. That means a booked meeting, a ticket with the right details in it, or a person. We build the third kind: a narrow agent on your own material, wired into the systems you already run, with a written rule for everything it is not allowed to do.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What it does', h2: 'The jobs a chatbot should be given, and can hold.',
      lede: 'Every one of these is measurable, which is how you know whether it is working.',
      cols: 3,
      items: [
        { icon: 'chat', title: 'Answers from your own material', text: 'Your site, price list, terms, product sheets, past tickets and the answers your team gives every week. Retrieval from those documents only, so an answer either exists in your material or the bot says it will find out.' },
        { icon: 'target', title: 'Qualifies before it books', text: 'Sector, size, timescale, budget band, whatever actually predicts a good enquiry for you. Asked one question at a time in a normal conversation, not as a nine-field form pretending to be a chat.' },
        { icon: 'calendar', title: 'Books the meeting', text: 'Live availability from Microsoft 365, Google Calendar or your booking tool, held and confirmed in the conversation. No back-and-forth email, no link that goes to a page nobody fills in.' },
        { icon: 'handshake', title: 'Hands to a human', text: 'On complaint language, legal or clinical questions, an angry tone, a named account, or simply the third time it cannot answer. The handover carries the transcript so nobody has to start again.' },
        { icon: 'data', title: 'Writes to the CRM', text: 'Contact created or matched, source and campaign attributed, transcript on the timeline, deal or ticket raised with the right owner. HubSpot, Dynamics, Salesforce, Pipedrive or whatever you run.' },
        { icon: 'eye', title: 'Shows you every conversation', text: 'A reviewable log with what was asked, what was answered, where it handed over and where it failed. That log is how the bot improves each month rather than drifting.' },
      ],
    },
    {
      type: 'tiers', kicker: 'Three ways to buy it', h2: 'Priced by how much of your business it has to understand.',
      lede: 'All prices exclude VAT. Model and messaging costs are billed in your own accounts, typically £20 to £200 a month depending on volume.',
      items: [
        { name: 'Off-the-shelf, configured', price: P.chatbot, cadence: 'Two to three weeks', text: 'A proven platform set up properly on one channel, usually your website, with your content, your tone and your booking link.', includes: ['One channel, web chat or WhatsApp', 'Content ingested from your site and documents', 'Tone and refusal rules written with you', 'Booking link and email handover', 'Two weeks of supervised tuning', 'Runbook and admin training'], best: 'businesses that want a good answer bot live this month', href: S.BOOK_URL, cta: 'Talk about this' },
        { name: 'Custom, on your own data', price: P.build_mid, cadence: 'Four to six weeks', text: 'Built rather than configured. Retrieval over your real documents, your qualification logic, and a CRM write-back that survives your edge cases.', includes: ['Everything in the configured build', 'Retrieval over your document set, refreshed on a schedule', 'Qualification questions scored to your criteria', 'Two-way CRM write-back and attribution', 'Human handover rules and routing', 'Evaluation set so changes are tested, not hoped for'], best: 'firms where the answer has to be right, not merely fast', featured: true, flag: 'Most chosen', href: S.BOOK_URL, cta: 'Talk about custom' },
        { name: 'Multi-channel with CRM and booking', price: P.build_big, cadence: 'Six to ten weeks', text: 'One agent, one brain, several front doors: website, WhatsApp, Instagram and Facebook DMs, and email, with booking and reporting across all of them.', includes: ['Everything in the custom build', 'Web, WhatsApp, Instagram and Facebook DM channels', 'Meta app review and number provisioning handled', 'Calendar booking with live availability', 'Routing, out-of-hours and escalation rules per channel', 'Reporting on answered, qualified, booked and handed over'], best: 'brands whose enquiries arrive in four places at once', href: S.BOOK_URL, cta: 'Talk about multi-channel' },
      ],
      note: 'Support and iteration afterwards is ' + P.run + ' a month and is optional. Everything is built in accounts in your own name, so you can take it in-house at any point.',
    },
    {
      type: 'steps', kicker: 'How we build it', h2: 'Five weeks from first call to answering on its own.',
      items: [
        { title: 'Read what you already answer', text: 'We take your last few hundred real enquiries, the answers your team gives, and your published material. That is the training ground. It also tells us honestly how many questions a bot could have handled.', meta: 'Week 1' },
        { title: 'Write the rules before the code', text: 'What it may say, what it must never say, when it hands over, what it stores and for how long. This is a short document you sign off, and it is what makes the GDPR position defensible later.', meta: 'Week 1' },
        { title: 'Build and test against real questions', text: 'The bot is graded against a set of your actual enquiries with known right answers, so we can prove a change made it better rather than merely different.', meta: 'Weeks 2–3' },
        { title: 'Supervised go-live', text: 'It drafts, a person approves, for a fortnight. You see exactly what it would have said before a customer does. Approval rates tell us when to take the stabilisers off.', meta: 'Week 4' },
        { title: 'Hand over and keep score', text: 'Runbook, admin access, and a monthly number: conversations answered, meetings booked, handovers, and the questions it still cannot answer. That last list is next month’s work.', meta: 'Week 5 onward' },
      ],
    },
    {
      type: 'split', tone: 'wash', art: 'network', kicker: 'Channels', h2: 'The same agent, wherever the customer starts.',
      body: [
        'Businesses rarely get to choose where an enquiry lands. Somebody messages the Instagram account at nine on a Sunday, somebody else uses the website form, a third person replies to an ad on WhatsApp because that is the button they saw. Running a different tool per channel gives you three tones of voice and no single record of the customer.',
        'We build one agent with one set of rules and one memory, then connect the channels you actually use. Revio designed, built and runs LeadSignal, a production DM agent with an approved Meta app handling Instagram, Facebook, WhatsApp and SMS for paying customers, so the channel plumbing is not new ground for us.',
      ],
      bullets: ['Website chat that matches your site rather than sitting on top of it', 'WhatsApp Business with a number in your own name', 'Instagram and Facebook DMs, including comment replies', 'Email and web forms answered by the same brain', 'One CRM record per person, whichever door they came through'],
      ctas: [{ label: 'See what we have built', href: '/work/leadsignal/', style: 'dark' }],
    },
    {
      type: 'checks', kicker: 'Scope', h2: 'What is included, and what is not.',
      groups: [
        { title: 'Included in every build', items: ['Content ingestion and refresh from your material', 'Tone of voice written with you and tested', 'Refusal and escalation rules in writing', 'Human handover with the transcript attached', 'CRM contact creation, matching and attribution', 'Cookie and consent behaviour set for UK GDPR', 'Admin training and a written runbook', 'Two weeks of supervised tuning after launch'] },
        { title: 'Not included', items: ['Model and messaging usage, billed in your own accounts', 'A promise that it will answer every question, which no honest supplier can make', 'Outbound cold messaging, which we do not build', 'Replacing your helpdesk or CRM', 'Translation into other languages unless specified', 'Voice calls, which are a separate build'] },
      ],
    },
    {
      type: 'compare', tone: 'wash', kicker: 'Fit', h2: 'When a chatbot pays, and when it does not.',
      yes: { title: 'Worth building', items: ['More than about 150 enquiries or messages a month', 'The same twenty questions asked over and over', 'Enquiries arriving outside office hours you currently lose', 'A booking or a qualified handover is the obvious next step', 'Documented answers already exist somewhere in the business'] },
      no: { title: 'Not yet', items: ['Low volume where a person can simply reply faster', 'Regulated advice that must come from a qualified human', 'Complaints and safeguarding, which should go straight to a person', 'Nobody has written down what the right answer is', 'The real problem is that your website does not say the price'] },
    },
    {
      type: 'quote',
      text: 'The hard part of a chatbot is not the answering. It is deciding what it is not allowed to say, and building the handover so that the moment it stops being useful, a person is already reading the conversation.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they build one.',
      items: [
        { q: 'Will it make things up?', a: 'It answers from your material rather than from general knowledge, and it is told to say it does not know and offer a person when the material does not cover the question. It is graded against a fixed set of your real enquiries before launch and after every change, so accuracy is measured rather than assumed. No supplier can promise zero errors; we can promise they are visible in the log and fixed.' },
        { q: 'How does this sit with UK GDPR?', a: 'Before it goes live you get a written record of what personal data the bot collects, where it is stored, how long it is kept and which processors touch it, which feeds straight into your Article 30 record. Chat opens with a clear notice that it is an AI assistant, transcripts are retained for a period you choose, and deletion requests are handled. If the deployment needs a DPIA we say so.' },
        { q: 'Can customers tell it is AI?', a: 'Yes, and they should. The bot introduces itself as an assistant, never claims to be a named member of staff, and offers a human on request. Beyond being the decent thing, it is where disclosure rules in the UK and the EU AI Act are heading, and it improves trust in the handover.' },
        { q: 'What does it cost to run?', a: 'Model usage for a typical SME is £20 to £200 a month depending on conversation volume and length, billed in your own account so you see the meter. WhatsApp Business messaging is charged per conversation by Meta. Optional support and iteration from us is ' + P.run + ' a month; plenty of clients take the runbook and manage it themselves.' },
        { q: 'Do we need to replace our helpdesk or CRM?', a: 'No. The bot writes into what you already run. We have wired agents into HubSpot, Dynamics and Pipedrive; the requirement is an API and somebody who can grant access. If your CRM is the problem, that is a separate conversation and usually a cheaper one than you fear.' },
        { q: 'How long before it is answering on its own?', a: 'A configured single-channel build is usually live in two to three weeks and unsupervised by week five. A custom build on your own documents is four to six weeks to launch. Multi-channel with WhatsApp and Meta review takes six to ten weeks, mostly because app review is not on our clock.' },
        { q: 'What happens when it cannot answer?', a: 'It says so, offers a person, and creates the record. Nothing dead-ends. The unanswered questions collect in a list you see every month, and that list is the roadmap: either the answer gets written down and added, or the question is one a human should always take.' },
        { q: 'Can it speak in our tone of voice?', a: 'Yes, and it is tuned against your own past replies rather than a description of your brand. We take real examples of how your team writes, agree what to keep and what to lose, and test the output side by side with human answers before launch.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where this leads.',
      items: [
        { href: '/voice-ai/', icon: 'voice', title: 'Voice AI', text: 'The same idea on the phone: inbound calls answered, out-of-hours cover, bookings taken and notes into the CRM.', meta: P.voice },
        { href: '/ai-workflow-automation/', icon: 'flow', title: 'AI Workflow Automation', text: 'Once the enquiry is captured, automate what happens next: triage, quoting, documents and reporting.', meta: P.build_from },
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your business before you commit to a build.', meta: P.audit },
      ],
    },
    {
      type: 'cta', h2: 'Bring us your last month of enquiries.',
      text: 'Thirty minutes and a look at your real messages is enough to tell you what proportion a chatbot could handle, and whether the number justifies building one. If it does not, we will say so.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'See all AI services', href: S.SERVICES_URL, style: 'ghost' }],
      note: 'Prices exclude VAT. Every account, number and licence is created in your own name.',
    },
  ],
};
