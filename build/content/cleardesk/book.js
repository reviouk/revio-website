const S = require('../../site');
const P = S.PRICE;
const C = S.CLEARDESK;

/* The Over to Flo booking page: the 20-minute call. Same Microsoft Bookings
   diary as the main site, no links back to it. */
module.exports = {
  slug: 'cleardesk/book',
  title: 'Book a 20-Minute Call About Flo | Over to Flo by LeadSignal',
  description: 'Pick a 20-minute slot. Tell us how your phone, inbox and invoicing work today and we will tell you which Flo package fits and exactly what it costs. No pitch.',
  keywords: ['book ai assistant call', 'over to flo call', 'ai receptionist demo uk'],
  utility: true,
  art: 'clock',
  heroImage: { src: '/img/flo/flo.webp', alt: 'Flo, your AI assistant', say: 'Twenty minutes. I&rsquo;ll be listening in.' },
  badge: 'Book a call',
  h1: 'Twenty minutes, <em class="mint">straight into the diary.</em>',
  sub: 'No pitch and no deck. Tell us how the phone, the inbox and the invoicing work today. You leave knowing which package fits, what it costs to the pound, and what Flo would take off you first. If it is not for you, we will say so.',
  ctas: [
    { label: 'Pick a time below', href: '#diary', style: 'mint' },
    { label: 'Or ask us to call you', href: '#form', style: 'ghost' },
  ],
  heroProof: ['Microsoft Teams or a phone call, your choice', 'Free, no obligation', 'With the person who sets Flo up'],
  meetingRows: false,
  sections: [
    { type: 'booking', kicker: 'The diary', h2: 'Choose a slot.', lede: 'Times are shown in your own time zone. The invitation arrives by email the moment you book.' },
    { type: 'form', tone: 'wash', variant: 'cleardesk', formId: 'cleardesk-book', kicker: 'No time that suits?', h2: 'Rather we called you?', lede: 'Seven quick questions. We ring back within one working day, at a time that suits, and you get the same 20 minutes.' },
    {
      type: 'cards', kicker: 'Make the most of it', h2: 'Three things worth having to hand.', cols: 3,
      items: [
        { icon: 'phone', title: 'How many calls you miss', text: 'A rough number for a normal week, and what happens to them. This is the number that decides whether Solo pays for itself.' },
        { icon: 'mail', title: 'What you use today', text: 'Your email, calendar, invoicing software and any customer list, however untidy. We connect to what you have.' },
        { icon: 'pound', title: 'What is owed to you', text: 'Roughly how much is past its date right now. Invoice chasing is usually the first visible win.' },
      ],
    },
    {
      type: 'faq', kicker: 'Practical', h2: 'About the call.',
      items: [
        { q: 'Who will I be talking to?', a: 'The person who would set Flo up for you, not a salesperson. The same person runs the setup and the supervised fortnight.' },
        { q: 'Is it really free?', a: `Yes. Twenty minutes, no charge, no obligation. You get the exact price for your business on the call.` },
        { q: 'Can I hear Flo first?', a: 'Yes. Ask on the call and we will give you a number to ring and send you a recording of Flo answering, booking and chasing.' },
        { q: 'What if I need to move it?', a: 'The confirmation email has a reschedule link. Use it as often as you need.' },
      ],
    },
    {
      type: 'cta', h2: 'Rather read the prices first?',
      text: 'Every package, add-on and running cost is on one page. No form to fill in to see it.',
      ctas: [{ label: 'See every price', href: C.PRICING_URL, style: 'mint' }, { label: 'Back to the packages', href: '/', style: 'ghost' }],
      note: 'Cancel the monthly plan any time.',
    },
  ],
};
