/* Over to Flo integrations. Draft 2026-11-23. Honest list: working today, coming next. */
module.exports = {
  slug: 'cleardesk/integrations',
  meetingRows: false,
  title: 'Integrations: What Over to Flo Works With',
  description: 'See what Over to Flo works with today and what is coming next: your phone number, social networks and website now, email, calendars and accounting soon.',
  keywords: ['over to flo integrations', 'ai assistant integrations small business', 'ai agents that work with google and microsoft', 'ai social posts facebook instagram linkedin'],
  art: 'layers',
  crumbLabel: 'Integrations',
  badge: 'Integrations',
  h1: 'What Flo works with, <em class="mint">today and next.</em>',
  sub: 'Here is the honest list. Some connections are working now. Others are coming, and we switch each one on as the platform approves it. Nothing on this page is claimed before it works.',
  ctas: [
    { label: 'Get started', href: 'https://app.overtoflo.ai/my/', style: 'mint' },
    { label: 'Meet the agents', href: '/#agents', style: 'ghost' },
  ],
  heroProof: ['Working today: phone, social networks, website', 'Coming next: email, calendars, accounting', 'Each connection built and checked by us'],
  sections: [
    {
      type: 'cards', kicker: 'Working today', h2: 'Connections that work now.', cols: 3,
      items: [
        { icon: 'phone', title: 'Your existing phone number', text: 'Forward the calls you miss and Flo answers on the number you already have. You keep your number.' },
        { icon: 'globe', title: 'Facebook, Instagram, LinkedIn and Google Business Profile', text: 'Poppy writes your posts and you copy and post them to these networks. Posting by itself is not switched on yet.' },
        { icon: 'search', title: 'Your website', text: 'Flo reads your website to learn about your business, so you tell it about yourself once and every agent uses it.' },
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Coming next', h2: 'Connections we are building.', cols: 2,
      items: [
        { icon: 'mail', title: 'Google and Microsoft email and calendars', text: 'For the Flo assistant, so it can sort your inbox, draft replies and keep your diary.' },
        { icon: 'pound', title: 'Accounting software', text: 'Xero, QuickBooks, FreeAgent and Sage, for Bill, so invoices and reminders work from the numbers you already keep.' },
        { icon: 'code', title: 'Website builders', text: 'WordPress, Wix, Squarespace and Shopify, for Paige, so a website can sit alongside the one you have.' },
        { icon: 'spark', title: 'Posting to the social networks by itself', text: 'Poppy will post for you, one network at a time, once each network approves it.' },
      ],
    },
    {
      type: 'cards', kicker: 'How we connect', h2: 'Built by us, checked by us.', cols: 3,
      items: [
        { icon: 'lock', title: 'No third-party connector', text: 'Each connection is built and checked by us. It does not run through someone else\'s connector service.' },
        { icon: 'tick', title: 'Switched on as the platform approves it', text: 'Some connections need the other platform\'s approval first. We switch each one on when that comes, and not before.' },
        { icon: 'shield', title: 'You stay in charge', text: 'Every agent has a setting "How much it does alone". Work that needs a yes waits under "Waiting for your yes" on your phone.' },
      ],
    },
    {
      type: 'steps', tone: 'wash', kicker: 'Using a connection', h2: 'How a connection starts.',
      items: [
        { title: 'Sign up', text: 'You create your account and set it up yourself.' },
        { title: 'Tell Flo about you, once', text: 'Flo can read your website. Every agent uses what it learns.' },
        { title: 'Pick an agent', text: 'Choose one at a time. Each agent uses the connections it needs.' },
        { title: 'Connect what it needs', text: 'For phone answering, that is forwarding your missed calls. Other connections will be added here as they are ready.' },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions about connections.',
      items: [
        { q: 'Does Over to Flo work with everything I use?', a: 'No, and we will not say it does. The list on this page is what works today and what we are building next. If your tool is not on it, ask us.' },
        { q: 'Why are some connections not working yet?', a: 'Each one is built and checked by us, and some need approval from the other platform. We switch each one on once it is ready.' },
        { q: 'Will Poppy post to my social pages?', a: 'Not yet. Today Poppy writes the posts, you approve them, and you copy and post them. Posting by itself is coming later, one network at a time.' },
        { q: 'Do I need a new phone number?', a: 'No. Flo answers on your existing number. You forward the calls you miss.' },
        { q: 'Which email and calendars will Flo work with?', a: 'Google and Microsoft email and calendars first. They are coming next, with the Flo assistant.' },
        { q: 'Can I ask for a connection?', a: 'Yes. Book a demo and tell us what you use. We cannot promise it, but we will listen.' },
      ],
    },
    {
      type: 'cta', h2: 'Start with what works today.',
      text: 'Sign up, tell Flo about your business and pick an agent. Or book a short demo with a person and ask about a connection.',
      ctas: [{ label: 'Get started', href: 'https://app.overtoflo.ai/my/', style: 'mint' }, { label: 'Book a demo', href: '/book/', style: 'ghost' }],
      note: 'Cancel any time.',
    },
  ],
};
