const S = require('../site');

module.exports = {
  slug: 'contact',
  title: 'Contact Revio: AI Consultancy in Borehamwood and London | Revio',
  description: 'Tell us what is eating your team’s time or which enquiries you keep missing. One reply from a person within a working day, or book a Teams meeting.',
  keywords: ['contact ai consultancy uk', 'revio agency contact', 'ai consultancy borehamwood', 'talk to an ai consultant'],
  crumbLabel: 'Contact',
  art: 'chat',
  badge: 'Contact',
  h1: 'Tell us what is going on. <em class="mint">A person replies</em>.',
  sub: 'Two or three sentences about the job that eats the most time, or the enquiry you keep missing, is plenty. A person reads every message and replies within one working day. If you would rather talk, the diary is open.',
  ctas: [
    { label: 'Book a Teams meeting', href: S.BOOK_URL, style: 'mint' },
    { label: 'Write to us below', href: '#form', style: 'ghost' },
  ],
  heroProof: ['Reply within one working day', 'No sales sequence', 'Honest about fit, including when it is not us'],
  sections: [
    { type: 'form', variant: 'contact', formId: 'contact', kicker: 'Write to us', h2: 'What would you like to be true in three months?', lede: 'Say where the time goes today and what you have already tried. The tick-boxes help us route it; the text box is the part we actually read.' },
    {
      type: 'cards', tone: 'wash', kicker: 'Other ways in', h2: 'Pick whichever suits.', cols: 3,
      items: [
        { icon: 'calendar', title: 'Book a meeting', text: 'Thirty minutes on Microsoft Teams with a senior consultant. Pick a slot and the invitation arrives with the link.', href: S.BOOK_URL, meta: 'Open the diary' },
        { icon: 'mail', title: 'Email', text: S.EMAIL + '. Goes to a person, not a ticketing queue.', href: 'mailto:' + S.EMAIL, meta: 'Send an email' },
        { icon: 'pound', title: 'Work out the return first', text: 'Two minutes with the calculator and you arrive knowing roughly what the answer is worth.', href: S.CALC_URL, meta: 'AI ROI calculator' },
      ],
    },
    {
      type: 'split', art: 'network', kicker: 'Where we are', h2: 'Borehamwood, on the edge of London.',
      body: ['Imperial Place, 4 Maxwell Road, Borehamwood WD6 1JN. Twenty minutes from St Pancras on Thameslink to Elstree &amp; Borehamwood, and a mile from junction 23 of the M25. Most work is remote; on-site days are by arrangement across London and the Home Counties.'],
      bullets: ['Registered in England and Wales', 'A decade of HubSpot and RevOps work', 'Meeting invitations come from rob@revio.agency'],
    },
    {
      type: 'faq', kicker: 'Before you write', h2: 'Things people ask at this point.',
      items: [
        { q: 'How quickly will I hear back?', a: 'Within one working day, from a person, by email. If the message arrives on a Friday afternoon it is Monday morning.' },
        { q: 'Do I need to know what I want yet?', a: 'No. "Our quoting takes forever and I do not know if AI helps" is a perfectly good message. Finding out is what the audit is for.' },
        { q: 'Will I be added to a mailing list?', a: 'No. The form goes into our delivery system, a reply comes from a person, and that is the extent of it.' },
        { q: 'Is the first call free?', a: 'Yes. Thirty minutes on Teams, no charge and no obligation. If there is nothing worth building, we say so on the call.' },
        { q: 'What happens to what I send?', a: 'It is stored in our own delivery dashboard so that whoever picks it up has the context, and deleted on request. Nothing is shared with a third party. See the privacy policy for the detail.' },
        { q: 'Can you work outside the UK?', a: 'Yes, remotely, for English-speaking businesses in Europe and North America. Prices are in pounds; VAT is reverse-charged where eligible.' },
      ],
    },
    {
      type: 'cta', h2: 'Or skip the form and pick a time.',
      text: 'Thirty minutes on Microsoft Teams, straight into the diary.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'See every price first', href: S.PRICING_URL, style: 'ghost' }],
    },
  ],
};
