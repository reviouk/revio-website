const S = require('../../site');
const P = S.PRICE;

module.exports = {
  slug: 'industries/healthcare-dental',
  title: 'AI for Dental Practices & Private Clinics UK | Revio',
  description: 'AI for dental practices and private clinics: enquiry handling, recall, treatment letters and reviews, built around UK GDPR special-category data. From £1,500.',
  keywords: ['ai for dental practices uk', 'ai for private clinics', 'ai receptionist dental', 'healthcare ai consultancy uk'],
  crumbs: [{ label: 'Industries', href: S.INDUSTRIES_URL }],
  crumbLabel: 'Healthcare & Dental',
  art: 'chat',
  badge: 'Healthcare & Dental',
  h1: 'AI for dental practices and private clinics that <em class="mint">never touches the clinical decision</em>.',
  sub: 'Enquiries answered out of hours, recalls that actually go out, treatment-plan letters drafted from the notes, insurance paperwork chased. The dentist or clinician still decides. From £1,500 for the two-week audit that tells you which one to build first.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['No AI near a diagnosis or a clinical decision', 'Built around UK GDPR special-category data', 'Every price published, nothing hidden in a day rate'],
  service: { name: 'AI for Healthcare & Dental', type: 'Industry page', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'Where this fits',
      h2: 'Four jobs eat the time in a clinic, and none of them require a clinician.',
      body: [
        'A private clinic or dental practice loses hours a week to work that has nothing to do with treating anyone: answering the phone at 7pm about an enquiry, chasing a patient who has not booked their six-month check, typing up a treatment-plan letter that follows the same three paragraphs every time, and copying the same details into an insurer\'s portal. AI does well at exactly these four jobs, enquiry and booking handling, recall and reminders, treatment-plan and referral letters, and insurance or referral paperwork, because they are repetitive, text-heavy and do not involve deciding what is wrong with a patient.',
        'What AI should not do is obvious once you say it out loud: it does not diagnose, it does not recommend a treatment, and it does not touch a clinical record without a clinician\'s sign-off built into the workflow. Patient data is special-category under UK GDPR, so where it sits, who can see it and how long it is kept matters more here than in most sectors we work with. The build reflects that from the first week, not as an afterthought.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Where AI pays', h2: 'Six places clinics see the automation earn its keep.',
      lede: 'Not a platform. Each of these is a defined, working thing on your own systems.',
      items: [
        { icon: 'chat', title: 'Enquiry and booking handling', text: 'A new-patient enquiry on WhatsApp, the website form or the phone answered within minutes, questions answered from your actual price list and availability, and a slot booked into the diary you already use.' },
        { icon: 'calendar', title: 'Recall and reminders', text: 'Six-month check-ups, hygiene appointments and reviews chased automatically, in your voice, with a working link to rebook, so recall lists stop being a spreadsheet nobody has time to work.' },
        { icon: 'doc', title: 'Treatment-plan letters', text: 'A first draft of the patient letter or referral, pulled from the clinician\'s notes and your existing templates, checked and signed off by the clinician before it goes anywhere.' },
        { icon: 'brief', title: 'Insurance and referral paperwork', text: 'Claim forms, referral letters and pre-authorisation requests drafted from the record, with the fields an insurer or specialist actually asks for, ready for a human to check and submit.' },
        { icon: 'search', title: 'Review requests and reputation', text: 'A short, well-timed request for a Google review after a good appointment, and a flag to a human whenever a review reads as a complaint, so nothing negative goes unanswered.' },
        { icon: 'health', title: 'Waitlist and cancellation fill', text: 'When a slot cancels, the waitlist is worked automatically in priority order, by message rather than by someone scrolling a paper list between patients.' },
      ],
    },
    {
      type: 'steps', kicker: 'First 90 days', h2: 'What actually happens if you start.',
      items: [
        { title: 'Audit the enquiry and recall flow', text: 'Two weeks watching how enquiries actually arrive and where recalls fall through, ending in a ranked list of what to build first and what it should cost.', meta: 'Weeks 1–2' },
        { title: 'Build the first automation', text: 'Usually enquiry handling or recall, wired into the practice management system you already run, tested on real messages before it goes live.', meta: 'Weeks 3–6' },
        { title: 'Supervised launch', text: 'The automation runs with a human checking every message for two to three weeks, so mistakes are caught before a patient ever sees one.', meta: 'Weeks 6–9' },
        { title: 'Hand to the team', text: 'Front-of-house staff trained on the exceptions it flags, a short runbook left behind, and a second use case scoped if the first has paid for itself.', meta: 'Weeks 9–13' },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and where we say wait.',
      yes: { title: 'A good fit', items: ['Private dental practices, clinics and aesthetics businesses with a booking diary', 'A practice management system already in use, however basic', 'Front-of-house staff who will use what gets built', 'Enquiry volume high enough that missed messages cost real revenue'] },
      no: { title: 'Not this, yet', items: ['You want AI to make or suggest a clinical decision', 'There is no digital record system to connect to at all', 'The practice is a single clinician with no admin bottleneck', 'You need this live in days rather than weeks'] },
    },
    {
      type: 'table', tone: 'wash', kicker: 'What it costs', h2: 'A typical first project.',
      head: ['Use case', 'What it replaces', 'Typical build', 'Price from'],
      rows: [
        ['Enquiry and booking handling', 'A receptionist answering messages after hours or between patients', 'One AI agent wired into your booking diary', P.build_from],
        ['Recall and reminders', 'A recall spreadsheet worked by hand once a month', 'Automated recall flow with rebooking link', P.build_from],
        ['Treatment-plan letters', 'A clinician or admin typing the same letter from scratch', 'Document draft tool tied to your templates', P.build_from],
        ['Insurance and referral paperwork', 'Manual re-keying into insurer or specialist portals', 'Document extraction and form-fill tool', P.data],
        ['Full enquiry-to-recall system', 'Several of the above, wired together', 'A connected app across the patient lifecycle', P.build_mid],
      ],
      note: 'All prices exclude VAT. The audit above is the usual first step and its fee comes off the first build.',
    },
    {
      type: 'quote', tone: 'wash',
      text: 'We do not let an AI anywhere near a diagnosis, a treatment recommendation, or a clinical record without a clinician in the loop. The value in a clinic is in the hours around the appointment, not the appointment itself.',
      who: 'Rob Wells', role: 'Founder, Revio',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions clinics ask before they start.',
      items: [
        { q: 'Will an AI ever make a clinical decision?', a: 'No. Every build we do for a clinic stops short of diagnosis, treatment recommendation or anything that requires a clinician\'s judgement. It drafts, chases and books; a person decides and signs off anything clinical.' },
        { q: 'How is patient data handled under UK GDPR?', a: 'Health data is special-category, so it needs a clear lawful basis, minimal retention and tight access control. We map exactly what a system may see and for how long before it is switched on, and document it so your practice can show it to an inspector.' },
        { q: 'Does this replace our front-of-house team?', a: 'No. It takes the repetitive first pass, the after-hours enquiry, the recall chase, the letter draft, so the team spends their time on patients in the room rather than the phone. Every automation escalates to a person when it should.' },
        { q: 'Can it connect to our practice management system?', a: 'Most UK dental and clinic software has an API or an export we can work with. We check this in the audit before quoting anything, so there are no surprises once a build starts.' },
        { q: 'What about a patient complaint or a clinical query in a message?', a: 'The system is built to recognise anything that reads as a clinical question or a complaint and hand it straight to a person, rather than attempt an answer.' },
        { q: 'How quickly could we see something working?', a: 'A first automation, usually enquiry handling or recall, is typically live within six weeks of the audit finishing, and running unsupervised within nine.' },
        { q: 'Do you work with multi-site practice groups?', a: 'Yes. The same approach scales across sites; the audit is where we decide whether to build once and roll out, or tailor per site.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where to start.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your practice.', meta: P.audit },
        { href: '/ai-chatbot/', icon: 'chat', title: 'AI Chatbot', text: 'The enquiry and booking agent, built and supported as a standalone product.', meta: P.chatbot },
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'The data map and policy a healthcare business needs before anything goes live.', meta: P.governance },
      ],
    },
    {
      type: 'cta', h2: 'Find the one process where AI pays in your practice.',
      text: 'A 30-minute call on how enquiries, recalls and letters actually flow today. If AI is not the right answer for one of them, we will say so.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
