const S = require('../../site');
const P = S.PRICE;
const C = S.CLEARDESK;

/* The Over to Flo booking page: a short, friendly demo with a person. Same
   Microsoft Bookings diary as the main site, no links back to it. */
module.exports = {
  slug: 'cleardesk/book',
  title: 'Book a Demo of Over to Flo | Over to Flo by LeadSignal',
  description: 'Book a short, friendly demo of Over to Flo with a real person. See the agents working today, ask anything, and decide in your own time. No pressure.',
  keywords: ['book over to flo demo', 'ai assistant demo uk', 'ai agents for small business demo'],
  utility: true,
  art: 'clock',
  heroImage: { src: '/img/flo/flo.webp', alt: 'Flo, your AI assistant', say: 'Come and have a look. I&rsquo;ll be listening in.' },
  badge: 'Book a demo',
  h1: 'A friendly look at Flo, <em class="mint">with a person.</em>',
  sub: 'Would you like to see it before you sign up? Pick a time and we will show you the agents working today, answer your questions and tell you what is coming.',
  ctas: [
    { label: 'Pick a time below', href: '#diary', style: 'mint' },
  ],
  heroProof: ['Microsoft Teams or a phone call, your choice', 'Free, no obligation', 'With a real person'],
  meetingRows: false,
  sections: [
    { type: 'booking', kicker: 'The diary', h2: 'Choose a slot.', lede: 'Times are shown in your own time zone. The invitation arrives by email the moment you book.' },
    {
      type: 'cards', kicker: 'In the demo', h2: 'What we will show you.', cols: 3,
      items: [
        { icon: 'phone', title: 'The agents working today', text: 'Flo answering a call, and Poppy writing a week of posts in your own voice.' },
        { icon: 'clock', title: 'What is coming', text: 'Sal, Bill, Rev, Paige, Finn, Dot and Lex, and what is next for Flo and Poppy.' },
        { icon: 'tick', title: 'You stay in charge', text: 'How "How much it does alone" and "Waiting for your yes" work on your phone.' },
      ],
    },
    {
      type: 'steps', tone: 'wash', kicker: 'How it goes', h2: 'Three easy steps.',
      items: [
        { title: 'Pick a time', text: 'Choose a slot in the diary. The invitation arrives by email.' },
        { title: 'Have a look', text: 'We show you the agents and answer your questions. Bring anything you like.' },
        { title: 'Decide in your own time', text: 'If you like it, sign up and set it up yourself in a few minutes. If not, no problem.' },
      ],
    },
    {
      type: 'faq', kicker: 'Practical', h2: 'About the demo.',
      items: [
        { q: 'Who will I be talking to?', a: 'A real person from the Over to Flo team, who can answer your questions about what the agents do today.' },
        { q: 'Is it really free?', a: 'Yes. No charge and no obligation.' },
        { q: 'Can I ask about an agent that is coming soon?', a: 'Yes. Say which one when you book and we will tell you what we can, and let you know when it is ready.' },
        { q: 'What if I need to move it?', a: 'The booking email has a reschedule link. Use it as often as you need.' },
      ],
    },
    {
      type: 'cta', h2: 'Rather read the prices first?',
      text: 'See pricing, or meet the agents. No form to fill in.',
      ctas: [{ label: 'See pricing', href: C.PRICING_URL, style: 'mint' }, { label: 'Meet the agents', href: '/#agents', style: 'ghost' }],
      note: 'Cancel any time.',
    },
  ],
};
