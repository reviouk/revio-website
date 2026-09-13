const S = require('../site');

module.exports = {
  slug: 'book-a-meeting',
  title: 'Book a Meeting with Rob at Revio: 30 Minutes on Teams | Revio',
  description: 'Pick a 30-minute slot with Rob Wells on Microsoft Teams. No pitch: an honest look at where AI would pay in your business, your CRM, and what to do first.',
  keywords: ['book ai consultation uk', 'book a meeting ai consultant', 'free ai consultation uk', 'talk to an ai consultant'],
  crumbLabel: 'Book a meeting',
  utility: true,
  art: 'clock',
  badge: 'Book a meeting',
  h1: 'Thirty minutes with Rob, <em class="mint">straight into the diary</em>.',
  sub: 'No pitch and no deck. Bring the job that eats the most time or the enquiry you keep missing, and leave knowing whether it is worth building, roughly what it costs, and what we would do first. If the honest answer is "not yet", you get that too.',
  ctas: [
    { label: 'Pick a time below', href: '#diary', style: 'mint' },
    { label: 'Write instead', href: S.CONTACT_URL, style: 'ghost' },
  ],
  heroProof: ['Microsoft Teams, invitation sent instantly', 'Free, no obligation', 'With the person who would do the work'],
  sections: [
    { type: 'booking', kicker: 'The diary', h2: 'Choose a slot.', lede: 'Times are shown in your own time zone. The invitation, with the Teams link, arrives by email the moment you book.' },
    {
      type: 'cards', tone: 'wash', kicker: 'Make the most of it', h2: 'Three things worth bringing.', cols: 3,
      items: [
        { icon: 'clock', title: 'Where the time goes', text: 'The one job people complain about most. Quoting, inbox, keying data, chasing, reporting. Rough hours a week is enough.' },
        { icon: 'data', title: 'What you run today', text: 'Your CRM, inbox, phone system and any automation already in place, including the half-finished experiments.' },
        { icon: 'pound', title: 'A number', text: 'Run the calculator first and bring the result. It makes the conversation about whether the number is right, which is the useful conversation.', href: S.CALC_URL, meta: 'AI ROI calculator' },
      ],
    },
    {
      type: 'faq', kicker: 'Practical', h2: 'About the meeting.',
      items: [
        { q: 'Who will I be talking to?', a: 'Rob Wells, Revio’s founder, who leads every engagement. Not a sales development rep, and not somebody who hands you to somebody else afterwards.' },
        { q: 'Is it really free?', a: 'Yes. Thirty minutes, no charge, no obligation. Paid work starts with the audit or a scoping session, and only if the call suggests it is worth it.' },
        { q: 'Can I bring colleagues?', a: 'Please do. Forward the invitation. The best calls have the person who owns the budget and the person who does the work both in the room.' },
        { q: 'What if I need to move it?', a: 'The confirmation email has a reschedule link. Use it as often as you need.' },
        { q: 'Do you do in-person meetings?', a: 'Yes, in Borehamwood or across London, by arrangement after a first call on Teams.' },
      ],
    },
    {
      type: 'cta', h2: 'Rather see the numbers first?',
      text: 'Every price we charge is published, and the calculator shows what the return looks like against them.',
      ctas: [{ label: 'See pricing', href: S.PRICING_URL, style: 'mint' }, { label: 'Try the calculator', href: S.CALC_URL, style: 'ghost' }],
    },
  ],
};
