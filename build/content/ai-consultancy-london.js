const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-consultancy-london',
  title: 'AI Consultancy in London & Hertfordshire | Revio',
  description: 'AI consultants based in Borehamwood, on-site across London and Hertfordshire. Audit from £1,500, builds from £4,500. Same senior team, every meeting.',
  keywords: ['ai consultancy london', 'ai consultants london', 'ai agency london', 'ai consultancy hertfordshire', 'ai consulting borehamwood'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'London & Hertfordshire',
  art: 'network',
  badge: 'AI Consultancy, London & Hertfordshire',
  h1: 'Based on the London edge, <em class="mint">in your office when it matters.</em>',
  sub: 'Our office is in Borehamwood, a Thameslink ride from St Pancras and minutes from the M25 at Junction 23. We work on-site across London and Hertfordshire for the workshops and go-lives that need it, and remotely the rest of the time, with the same senior person throughout.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the AI Opportunity Audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['Office at Imperial Place, Borehamwood WD6 1JN', 'On St Pancras Thameslink and by the M25 at J23', 'On-site for kick-offs, workshops and go-lives across London'],
  service: { name: 'AI Consultancy', type: 'Audit, build and embedded leadership', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'Where we work from',
      h2: 'Close enough to be in the room, based somewhere that keeps prices sane.',
      body: [
        'Revio is based at Imperial Place, 4 Maxwell Rd, Borehamwood WD6 1JN, on the Hertfordshire side of the M25 and a short Thameslink ride into St Pancras. That means we can be at a client\'s office in central London inside forty minutes, or drive the M25 to a site in Hertfordshire, Bedfordshire or the wider home counties, without carrying the office rents and overheads of a Zone 1 postcode into every price on this page.',
        'Most of an engagement runs remotely, because most of the work is building and testing software, not sitting in meetings. But the AI Opportunity Audit kick-off, key workshops, and every go-live are done in person where the client wants that, because governance and adoption conversations go better face to face than over a call.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'How the location works for you', h2: 'What being based here actually means.',
      items: [
        { icon: 'globe', title: 'Thameslink to St Pancras', text: 'Direct trains from Elstree & Borehamwood station into central London in around twenty-five minutes, so a morning workshop in the City is a normal Tuesday.' },
        { icon: 'truck', title: 'M25 Junction 23', text: 'Minutes from the office, meaning sites across Hertfordshire, north London, Bedfordshire and the wider home counties are a straightforward drive rather than a day trip.' },
        { icon: 'pound', title: 'Hertfordshire overheads, not Zone 1', text: 'The prices on this site reflect where we are based. The same senior work at a central London consultancy\'s address would cost meaningfully more.' },
        { icon: 'people', title: 'A small team, not a satellite office', text: 'There is no junior team fielding local enquiries while the senior people work elsewhere. Whoever you speak to on the call is who turns up.' },
      ],
    },
    {
      type: 'cases', kicker: 'Who we have already done this for', h2: 'London and Hertfordshire businesses we have worked with.',
      items: [
        { href: '/work/', kicker: 'Higher education, London', title: 'London South Bank University', result: 'Paid campaigns at institutional scale', text: 'Marketing systems and paid campaign management run for a London university at real institutional volume.' },
        { href: '/work/', kicker: 'Architecture, London', title: 'Extension Architecture', result: 'SEO and paid working together', text: 'A London architecture practice with enquiry handling and marketing finally connected.' },
        { href: '/work/', kicker: 'Financial services, Hertfordshire', title: 'TLPI', result: 'HubSpot, AI properties and a connected inbox', text: 'A pensions and financial services firm with its CRM, AI-scored records and inbox wired together.' },
      ],
    },
    {
      type: 'steps', kicker: 'How an engagement runs from here', h2: 'On-site where it matters, remote for the rest.',
      items: [
        { title: 'First call', text: 'A video call, wherever you are, to establish whether this is the right shape of work before anyone travels anywhere.', meta: 'Week 0' },
        { title: 'Kick-off, in person', text: 'The audit or discovery kick-off run at your office where that helps, particularly for governance and stakeholder conversations.', meta: 'Week 1' },
        { title: 'Build, remote', text: 'Development, testing and most working sessions run remotely, because that is where the actual building happens.', meta: 'Ongoing' },
        { title: 'Go-live, in person', text: 'Launches and training sessions run on-site by default, so the team learns the new system with someone in the room.', meta: 'Launch' },
      ],
    },
    {
      type: 'table', tone: 'wash', kicker: 'The services, unchanged by location', h2: 'The same prices whether the meeting is in Borehamwood or the City.',
      head: ['Service', 'Price'],
      rows: [
        ['AI Opportunity Audit', P.audit],
        ['AI Build & Implementation', `${P.build_from} - ${P.build_big}`],
        ['Embedded AI Lead', `${P.lead_1} - ${P.lead_3} a month`],
        ['AI App Diagnostic Audit', P.diagnostic],
        ['Legacy Software Modernisation', P.legacy_discovery],
      ],
      note: 'Every price excludes VAT and is the same regardless of where the work happens. Location changes travel arrangements, not the fee.',
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and who it is not.',
      yes: { title: 'A good fit', items: ['A business in London, Hertfordshire or the wider home counties', 'You want in-person workshops and go-lives without a Zone 1 price tag', 'You value a short, easy journey for the meetings that matter', 'You are happy for most delivery work to run remotely'] },
      no: { title: 'Not this, yet', items: ['You need daily on-site presence rather than key meetings in person', 'Your business is outside the UK and needs a locally based team for compliance reasons', 'You need a large in-person team for a multi-site rollout, see Enterprise AI Consultancy'] },
    },
    {
      type: 'quote', tone: 'wash',
      text: 'Being on the edge of London rather than in the middle of it is a deliberate choice. It keeps the fee honest and it still gets us into a client\'s office inside forty minutes when that is what the work needs.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'checks', kicker: 'What to expect', h2: 'What is in person, what is not.',
      groups: [
        { title: 'Usually in person', items: ['Audit and discovery kick-offs', 'Governance and board-facing workshops', 'Go-lives and staff training sessions'] },
        { title: 'Usually remote', items: ['Day-to-day build and development work', 'Regular check-ins and progress reviews', 'Support and iteration after launch'] },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'Where exactly are you based?', a: 'Imperial Place, 4 Maxwell Rd, Borehamwood, WD6 1JN. That is Hertfordshire, just outside the M25, on the Thameslink line into St Pancras.' },
        { q: 'Do you work with businesses in central London?', a: 'Yes, regularly. Extension Architecture and London South Bank University are both London clients, and central London is a short Thameslink ride from our office.' },
        { q: 'Will someone come on-site, or is it all remote?', a: 'Both. Kick-offs, key workshops and go-lives are usually in person if you want that; the build work in between is typically remote, because that is where the time is best spent.' },
        { q: 'Do you cover Hertfordshire towns outside Borehamwood?', a: 'Yes, Junction 23 of the M25 puts most of Hertfordshire and the wider home counties within an easy drive, and we work with clients across the county.' },
        { q: 'Does being outside central London affect the price?', a: 'It keeps it lower. The prices on this site reflect Hertfordshire overheads, not a Zone 1 office, and are the same regardless of where the client is based.' },
        { q: 'Can we meet before committing to anything?', a: 'Yes, the first call is a free thirty minutes, by video or in person if that is easier for you, with no obligation either way.' },
        { q: 'Do you only work with London and Hertfordshire clients?', a: 'No, we work UK-wide and remotely with clients further afield. This is simply where being close makes the in-person parts of the work easier.' },
      ],
    },
    {
      type: 'related', kicker: 'Related pages', h2: 'The other ways in.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'The usual starting point, kicked off in person where it helps.', meta: P.audit },
        { href: '/embedded-ai-lead/', icon: 'lead', title: 'Embedded AI Lead', text: 'On-site days by agreement for London and Hertfordshire clients.', meta: P.lead_1 },
        { href: S.WORK_URL, icon: 'brief', title: 'Our work', text: 'Case studies including London and Hertfordshire clients named above.', meta: 'Case studies' },
      ],
    },
    {
      type: 'cta', h2: 'Book the call, then decide if a visit is worth it.',
      text: 'A 30-minute call costs nothing and needs no travel. If an on-site kick-off makes sense afterwards, we will arrange it.',
      ctas: [{ label: 'Book a call', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
