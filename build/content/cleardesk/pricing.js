/* Over to Flo pricing. Rewritten 2026-11-23 for the agents model.
   Prices agreed 23 Nov 2026. One Flo at 49 / 65 / 57 and Poppy with video agreed 24 Nov 2026. ONE table of prices lives in `data` below: the page, the
   switches and the script all read from it. Monthly list price in each currency.
   Three months: Math.floor(m * 27 / 10), which is 10% less, rounded down. Yearly: m * 10. */
/* Sign-up is switched off for now, so Get started leads to the demo page.
   Put the My Flo address (https://app.overtoflo.ai/my/) back when sign-up opens. */
const START = '/book/';
/* Every bundle holds every agent (Rob, 24 Nov 2026). They differ by use.
   Nine since Sal, Rev and Tally were added; bundle prices were agreed for six. */
const ALL_FACES = ['flo', 'poppy', 'sal', 'bill', 'rev', 'paige', 'finn', 'tally', 'lex'];
module.exports = {
  slug: 'cleardesk/pricing',
  meetingRows: false,
  title: 'Over to Flo Pricing: From £15 a Month | by LeadSignal',
  description: 'Over to Flo prices for every agent, in pounds, dollars or euros. Pay monthly, every three months or yearly. No setup fee, and you can cancel any time.',
  keywords: ['over to flo pricing', 'ai agents pricing uk', 'ai phone answering price', 'ai social media posts price', 'ai assistant small business cost'],
  art: 'calc',
  heroCompact: true,
  crumbLabel: 'Pricing',
  badge: 'Over to Flo pricing',
  h1: 'Simple prices. <em class="mint">Pick your agents.</em>',
  sub: 'Take a bundle, or one agent on its own. Choose how you pay and your currency, and every price on the page changes with you.',
  ctas: [
    { label: 'Get started', href: START, style: 'mint' },
    { label: 'Meet the agents', href: '/#agents', style: 'ghost' },
  ],
  heroProof: ['No setup fee', 'Pay monthly, every three months or yearly', 'Cancel any time'],
  sections: [
    {
      type: 'prices', tight: true,
      note: 'Every price is what you pay each time. A renewal costs the same as the first payment.',
      data: {
        startUrl: START,
        currencies: [
          { id: 'gbp', sym: '£', label: '£' },
          { id: 'usd', sym: '$', label: '$' },
          { id: 'eur', sym: '€', label: '€' },
        ],
        terms: [
          { id: 'month', label: 'Monthly', per: 'a month' },
          { id: 'quarter', label: 'Every three months', per: 'every three months' },
          { id: 'year', label: 'Yearly', per: 'a year' },
        ],
        agents: [
          { key: 'flo', name: 'Flo, assistant', href: '/agents/flo/', status: 'live', text: 'Answers your missed calls and texts you a summary, with 100 minutes of calls a month. Soon it will look after your inbox and your diary too, at the same price.', price: { gbp: 49, usd: 65, eur: 57 } },
          { key: 'poppy', name: 'Poppy, marketing manager', href: '/agents/marketing/', status: 'live', text: 'Writes a week of social posts every Monday in your voice.', price: { gbp: 19, usd: 25, eur: 22 } },
          { key: 'poppy_video', name: 'Poppy, marketing manager with video', href: '/agents/marketing/', status: 'soon', text: 'Everything Poppy does, and it will make 8 short videos a month for your posts.', price: { gbp: 49, usd: 65, eur: 57 } },
          { key: 'sal', name: 'Sal, sales manager', href: '/agents/sales/', status: 'soon', text: 'Will write your quotes and follow-ups, and help you win the job.', price: { gbp: 19, usd: 25, eur: 22 } },
          { key: 'bill', name: 'Bill, accounts', href: '/agents/accounts/', status: 'soon', text: 'Will send an invoice when you text it, then remind the customer.', price: { gbp: 19, usd: 25, eur: 22 } },
          { key: 'rev', name: 'Rev, revenue operations', href: '/agents/revops/', status: 'soon', text: 'Will keep track of every enquiry and quote so you can see where the money is.', price: { gbp: 19, usd: 25, eur: 22 } },
          { key: 'paige', name: 'Paige, website', href: '/agents/website/', status: 'soon', text: 'Will build you a website of up to five pages on your own domain.', price: { gbp: 15, usd: 19, eur: 18 } },
          { key: 'finn', name: 'Finn, SEO specialist', href: '/agents/search/', status: 'soon', text: 'Will check your website every week, fix what it finds and show which searches bring people to you.', price: { gbp: 19, usd: 25, eur: 22 } },
          { key: 'tally', name: 'Tally, data analyst', href: '/agents/data/', status: 'soon', text: 'Will tell you what visitors do on your website, with a plain report every Monday.', price: { gbp: 19, usd: 25, eur: 22 } },
          { key: 'lex', name: 'Lex, legal', href: '/agents/legal/', status: 'soon', text: 'Will draft simple agreements and explain contracts in plain English.', price: { gbp: 15, usd: 19, eur: 18 } },
        ],
        bundlesTitle: 'Bundles: the whole team in every one',
        bundlesText: 'Every bundle includes all nine agents. They differ by how much you use: the minutes of calls Flo answers and the texts your agents send to your customers. Each bundle opens when all of its agents are working.',
        includedTitle: 'Included with every agent',
        included: [
          { icon: 'rocket', title: 'Set up by yourself', text: 'In a few minutes, on your phone or computer.' },
          { icon: 'shield', title: 'Asks before it acts', text: 'You choose how much each agent does alone.' },
          { icon: 'people', title: 'Add or remove agents', text: 'Change your team whenever you like.' },
          { icon: 'calendar', title: 'Three ways to pay', text: 'Monthly, every three months or yearly.' },
          { icon: 'pound', title: 'Three currencies', text: 'Pounds, dollars or euros.' },
          { icon: 'chat', title: 'Help chat', text: 'Ask a question any time.' },
        ],
        singleTitle: 'Or take one agent on its own.',
        singleText: 'Two agents are working today. The others are coming soon, and each row says which is which.',
        bundles: [
          { key: 'solo', name: 'Solo', faces: ALL_FACES, text: 'The whole team, for lighter use.', includes: ['All nine agents', '100 minutes of calls a month', '50 texts to your customers a month'], note: 'Opens when its agents are working.', price: { gbp: 59, usd: 79, eur: 69 } },
          { key: 'team', name: 'Team', featured: true, faces: ALL_FACES, text: 'The whole team, with more calls and texts.', includes: ['All nine agents', '200 minutes of calls a month', '150 texts to your customers a month', 'Poppy&rsquo;s videos can be added'], note: 'Opens when its agents are working.', price: { gbp: 89, usd: 119, eur: 105 } },
          { key: 'business', name: 'Business', faces: ALL_FACES, text: 'The whole team, for a busy business.', includes: ['All nine agents', '300 minutes of calls a month', '400 texts to your customers a month', 'Poppy&rsquo;s videos can be added'], note: 'Opens when its agents are working.', price: { gbp: 119, usd: 155, eur: 139 } },
        ],
        extraLabel: 'Extra phone minutes',
        extraPer: 'for each extra 100 minutes',
        extra: { gbp: 20, usd: 25, eur: 23 },
      },
    },
    {
      /* Reviews from real customers go here, each with the person's name and their
         permission: { text, who, role, lead }. The section is not drawn while this is empty. */
      type: 'reviews', kicker: 'In their own words', h2: 'What customers say about Flo.',
      items: [],
    },
    {
      type: 'promise',
      stepsTitle: 'Up and running by yourself, in a few minutes.',
      steps: [
        { title: 'Sign up', text: 'Create your login with your mobile number or email.' },
        { title: 'Tell Flo about your business', text: 'What you do, where you work and how you like to sound.' },
        { title: 'Switch on an agent', text: 'Pick the agent you want and pay for it by card.' },
        { title: 'Say yes', text: 'The agent shows you its work, and it goes out when you say yes.' },
      ],
      image: { src: '/img/flo/flo.webp', alt: 'Flo' },
      h2: 'Everything stays in your hands.',
      items: [
        { icon: 'shield', title: 'You stay in charge', text: 'Every agent asks before it acts, until you choose otherwise.' },
        { icon: 'tick', title: 'No setup fee', text: 'There is nothing to pay before you start.' },
        { icon: 'people', title: 'Change your team any time', text: 'Add an agent or remove one whenever you like. Cancel any time.' },
      ],
      ctas: [{ label: 'Get started', href: START, style: 'mint' }],
    },
    {
      type: 'table', kicker: 'Three ways to pay', h2: 'Pay monthly, every three months or yearly.',
      head: ['How you pay', 'What you pay', 'What it means'],
      rows: [
        ['Monthly', 'The monthly price, each month', 'The simplest way to pay. Nothing is paid in advance.'],
        ['Every three months', 'One payment, 10% less than three months', 'You pay once every three months and save a tenth.'],
        ['Yearly', 'One payment for ten months', 'You pay once a year and use all twelve months.'],
      ],
      note: 'Use the switches at the top of the prices to see each amount in your currency.',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions about pricing.',
      items: [
        { q: 'What is included in the price?', a: 'Each price covers one agent, ready to use. There is no setup fee, because you set it up yourself in a few minutes. Every agent asks before it acts, until you choose otherwise.' },
        { q: 'How do the three ways to pay work?', a: 'Monthly is the listed price, paid each month. Every three months is one payment that is 10% less than three monthly payments. Yearly is one payment for ten months, and you use all twelve. Use the switch at the top of the prices to see every amount.' },
        { q: 'What happens at renewal?', a: 'A renewal costs the same as your first payment, whichever way you pay.' },
        { q: 'What are the phone minutes?', a: 'They are the minutes of calls that Flo answers for you each month. Flo includes 100 minutes a month. If you need more, you can add extra minutes in blocks of 100. The price for each block is shown under the bundles.' },
        { q: 'What is the difference between the bundles?', a: 'Every bundle includes all nine agents. They differ by use: the minutes of calls Flo answers each month, and the texts your agents send to your customers, such as an invoice reminder from Bill. Poppy&rsquo;s videos can be added to Team and Business.' },
        { q: 'Can I change my agents later?', a: 'Yes. You can add an agent or remove one whenever you like. Agents marked "Coming soon" open when they are working, and the bundles open when all of their agents are working.' },
        { q: 'Can I cancel?', a: 'Yes. You can cancel any time.' },
      ],
    },
    {
      type: 'intro', narrow: true, tone: 'wash',
      body: ['Over to Flo is made for individuals and small businesses. Larger companies are looked after by <a href="https://revio.agency/" target="_blank" rel="noopener">REVIO</a>.'],
    },
    {
      type: 'cta', h2: 'Ready to hand something over?',
      text: 'Start with one agent. Set it up yourself in a few minutes, and add the others when you are ready.',
      ctas: [{ label: 'Get started', href: START, style: 'mint' }, { label: 'Book a demo', href: '/book/', style: 'ghost' }],
    },
  ],
};
