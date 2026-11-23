/* Over to Flo pricing. Rewritten 2026-11-23 for the agents model.
   Prices agreed 23 Nov 2026. ONE table of prices lives in `data` below: the page, the
   switches and the script all read from it. Monthly list price in each currency.
   Three months: Math.floor(m * 27 / 10), which is 10% less, rounded down. Yearly: m * 10. */
const START = 'https://app.overtoflo.ai/my/';
module.exports = {
  slug: 'cleardesk/pricing',
  meetingRows: false,
  title: 'Over to Flo Pricing: From £15 a Month | by LeadSignal',
  description: 'Over to Flo prices for every agent, in pounds, dollars or euros. Pay monthly, every three months or yearly. No setup fee, and you can cancel any time.',
  keywords: ['over to flo pricing', 'ai agents pricing uk', 'ai phone answering price', 'ai social media posts price', 'ai assistant small business cost'],
  art: 'calc',
  crumbLabel: 'Pricing',
  badge: 'Over to Flo pricing',
  h1: 'Simple prices. <em class="mint">Pick your agents.</em>',
  sub: 'Every agent has its own price. Choose how you pay and your currency, and every price on the page changes with you. There is no setup fee.',
  ctas: [
    { label: 'Get started', href: START, style: 'mint' },
    { label: 'Meet the agents', href: '/#agents', style: 'ghost' },
  ],
  heroProof: ['No setup fee', 'Pay monthly, every three months or yearly', 'Cancel any time'],
  sections: [
    {
      type: 'prices', kicker: 'The prices', h2: 'One price for each agent.',
      lede: 'Two agents are working today. The others are coming soon, and each row says which is which. Pick how you pay and your currency below.',
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
          { key: 'flo_phone', name: 'Flo, phone answering', href: '/agents/phone-answering/', status: 'live', text: 'Answers your missed calls and texts you a summary. Includes 100 minutes of calls a month.', price: { gbp: 39, usd: 49, eur: 45 } },
          { key: 'poppy', name: 'Poppy, marketing', href: '/agents/marketing/', status: 'live', text: 'Writes a week of social posts every Monday in your voice.', price: { gbp: 19, usd: 25, eur: 22 } },
          { key: 'flo_assistant', name: 'Flo, assistant', href: '/agents/assistant/', status: 'soon', text: 'Will look after your inbox, write replies in your voice and keep your diary.', price: { gbp: 19, usd: 25, eur: 22 } },
          { key: 'bill', name: 'Bill, accounts', href: '/agents/accounts/', status: 'soon', text: 'Will send an invoice when you text it, then remind the customer.', price: { gbp: 19, usd: 25, eur: 22 } },
          { key: 'finn', name: 'Finn, search and AI answers', href: '/agents/search/', status: 'soon', text: 'Will lay the groundwork so people can find you in local search and in AI answers.', price: { gbp: 19, usd: 25, eur: 22 } },
          { key: 'paige', name: 'Paige, website', href: '/agents/website/', status: 'soon', text: 'Will build you a one-page website on your own domain.', price: { gbp: 15, usd: 19, eur: 18 } },
          { key: 'lex', name: 'Lex, legal', href: '/agents/legal/', status: 'soon', text: 'Will draft simple agreements and explain contracts in plain English.', price: { gbp: 15, usd: 19, eur: 18 } },
        ],
        bundlesTitle: 'Bundles, for a lower price together',
        bundlesText: 'Each bundle opens when all of its agents are working.',
        bundles: [
          { key: 'solo', name: 'Solo', text: 'The everyday basics, in one bundle.', includes: ['Flo, phone answering', 'Flo, assistant', 'Bill, accounts', '100 minutes of calls a month'], note: 'Opens when its agents are working.', price: { gbp: 59, usd: 79, eur: 69 } },
          { key: 'team', name: 'Team', text: 'Solo, plus your marketing and your search.', includes: ['Everything in Solo', 'Poppy, marketing', 'Finn, search and AI answers', '200 minutes of calls a month'], note: 'Opens when its agents are working.', price: { gbp: 89, usd: 119, eur: 105 } },
          { key: 'business', name: 'Business', text: 'The whole team of agents.', includes: ['All seven agents', 'Paige, website', 'Lex, legal', '300 minutes of calls a month'], note: 'Opens when its agents are working.', price: { gbp: 119, usd: 155, eur: 139 } },
        ],
        extraLabel: 'Extra phone minutes',
        extraPer: 'for each extra 100 minutes',
        extra: { gbp: 20, usd: 25, eur: 23 },
      },
    },
    {
      type: 'cards', tone: 'wash', kicker: 'With every agent', h2: 'What you get with every price.', cols: 3,
      items: [
        { icon: 'tick', title: 'No setup fee', text: 'You set everything up yourself, in a few minutes. There is nothing to pay before you start.' },
        { icon: 'shield', title: 'You stay in charge', text: 'Every agent asks before it acts, until you choose otherwise. You decide how much each one does alone.' },
        { icon: 'people', title: 'Change your team any time', text: 'Add an agent or remove one whenever you like. Cancel any time.' },
      ],
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
        { q: 'What are the phone minutes?', a: 'They are the minutes of calls that Flo answers for you each month. Flo, phone answering, includes 100 minutes a month. If you need more, you can add extra minutes in blocks of 100. The price for each block is shown under the bundles.' },
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
