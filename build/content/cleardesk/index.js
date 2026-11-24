/* Over to Flo home page. Rewritten 2026-11-23 for the agents model: pick an agent, set it up yourself.
   No price is stated here: prices are on /pricing/. No vendor or tool is named. */
module.exports = {
  slug: 'cleardesk/index',
  meetingRows: false,
  title: 'Over to Flo: AI Agents You Set Up Yourself | by LeadSignal',
  description: 'Over to Flo is a team of AI agents for your business, your job or your home. Pick the ones you need, set them up yourself and stay in charge from your phone.',
  keywords: ['ai agents for small business uk', 'ai assistant you set up yourself', 'over to flo', 'ai phone answering', 'ai social media posts small business', 'ai agents for sole traders', 'leadsignal'],
  art: 'clock',
  heroImage: { src: '/img/flo/flo.webp', alt: 'Flo, who leads your team of AI agents', say: 'Hi, it&rsquo;s Flo. Shall I take that call?' },
  badge: 'Over to Flo by LeadSignal',
  h1: 'Hand it over. <em class="mint">Over to Flo.</em>',
  sub: 'Over to Flo is a team of AI agents that take work off your hands. Pick the agents you need, set them up yourself in a few minutes, and stay in charge from your phone.',
  ctas: [
    { label: 'Get started', href: '/book/', style: 'mint' },
    { label: 'Meet the agents', href: '#agents', style: 'ghost' },
  ],
  heroProof: ['Set up by you, in minutes', 'Every agent asks before it acts, until you say otherwise', 'Cancel any time'],
  sections: [
    {
      type: 'cards', id: 'agents', kicker: 'The agents', h2: 'Meet the team. Pick one, or pick several.', cols: 3,
      lede: 'Two agents are working today. The others are coming soon, and each card says which is which.',
      items: [
        { icon: 'phone', when: 'Working today', title: 'Flo, phone answering', text: 'Answers your missed calls on the number you already have, takes the name, the job and the address, and texts you a summary.', href: '/agents/phone-answering/', meta: 'See Flo' },
        { icon: 'spark', when: 'Working today', title: 'Poppy, marketing', text: 'Writes a week of social posts every Monday in your voice. Each one waits for your yes, then you copy it and post it.', href: '/agents/marketing/', meta: 'See Poppy' },
        { icon: 'mail', when: 'Coming soon', title: 'Flo, assistant', text: 'Will look after your inbox, write replies in your voice, keep your diary and set your reminders.', href: '/agents/assistant/', meta: 'See the plan' },
        { icon: 'pound', when: 'Coming soon', title: 'Bill, accounts', text: 'Will send an invoice when you text it, then remind the customer at 7, 14 and 21 days.', href: '/agents/accounts/', meta: 'See the plan' },
        { icon: 'globe', when: 'Coming soon', title: 'Paige, website', text: 'Will build you a one-page website on your own domain.', href: '/agents/website/', meta: 'See the plan' },
        { icon: 'search', when: 'Coming soon', title: 'Finn, search and AI answers', text: 'Will lay the groundwork so people can find you in local search and in AI answers. It promises no rankings.', href: '/agents/search/', meta: 'See the plan' },
        { icon: 'doc', when: 'Coming soon', title: 'Lex, legal', text: 'Will draft simple agreements and explain contracts in plain English. Lex is not a solicitor.', href: '/agents/legal/', meta: 'See the plan' },
      ],
    },
    {
      type: 'steps', tone: 'wash', kicker: 'How it works', h2: 'Four steps, all done by you.',
      items: [
        { title: 'Tell Flo about you', text: 'Tell Flo about yourself once. It can read your website to save you typing. Every agent uses what it learns.' },
        { title: 'Pick your agents', text: 'Choose the agents you want, one at a time. Add another whenever you like.' },
        { title: 'Decide how much each does alone', text: 'Every agent has a setting called "How much it does alone". You choose it agent by agent.' },
        { title: 'Say yes from your phone', text: 'When an agent needs your yes, it waits for you on your phone. One tap and it carries on.' },
      ],
    },
    {
      type: 'cards', kicker: 'You stay in charge', h2: 'You decide how much each agent does alone.', cols: 3,
      lede: 'Each agent has the same setting, with three choices. Change it whenever you like.',
      items: [
        { icon: 'tick', title: 'Asks me first', text: 'The agent does the work, then waits for your yes before anything goes out.' },
        { icon: 'target', title: 'Acts within my limits', text: 'The agent gets on with the jobs you have allowed. Anything outside your limits comes to you.' },
        { icon: 'rocket', title: 'Acts on its own', text: 'The agent handles the job from start to finish and tells you what it did.' },
      ],
    },
    {
      type: 'split', reverse: true,
      kicker: 'Waiting for your yes',
      h2: 'Anything that needs you waits in one place.',
      body: [
        'When an agent has something that needs your yes, it appears under "Waiting for your yes" on your phone. A post from Poppy is one example.',
        'Read it, say yes, or ask for a change. If you would rather an agent did not ask, change its setting. If you have a question, there is a help chat, and a real person can be asked.',
      ],
      bullets: ['One list, on your phone', 'Say yes, or ask for a change', 'A help chat, and a real person if you need one'],
      art: 'shield',
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Who it is for', h2: 'For your business, your job or your home.', cols: 3,
      items: [
        { icon: 'brief', title: 'For your business', text: 'All seven agents suit a business: the phone, the posts, the invoices, the website and the paperwork.', bullets: ['Flo, phone answering', 'Poppy, marketing', 'Flo, assistant', 'Bill, accounts', 'Paige, website', 'Finn, search and AI answers', 'Lex, legal'] },
        { icon: 'people', title: 'For your job', text: 'Working for yourself or building a name in a job? These agents suit you.', bullets: ['Flo, assistant', 'Poppy, marketing', 'Lex, legal'] },
        { icon: 'book', title: 'For your home', text: 'Home life has admin too. Two agents suit it.', bullets: ['Flo, assistant', 'Lex, legal'] },
      ],
    },
    {
      type: 'split',
      kicker: 'Try before you sign up',
      h2: 'Meet your team before you sign up.',
      body: [
        'When you start, you meet your team first. You also see a real post that Poppy has written for you.',
        'You see all of it before you are asked for your contact details. Look first, then decide.',
      ],
      bullets: ['See your team', 'Read a real post written for you', 'No contact details asked until you have seen it'],
      ctas: [{ label: 'Get started', href: '/book/', style: 'mint' }],
      art: 'network',
    },
    {
      type: 'intro', tone: 'wash', kicker: 'Works with what you use', h2: 'Built to fit around what you already have.',
      body: [
        'Flo answers on the phone number you already have. Poppy writes posts for the social networks you use, and Flo can read your website to learn about you. More connections are on the way, and each is switched on when it is ready.',
        'The integrations page lists what works today and what is coming next.',
      ],
      ctas: [{ label: 'See the integrations', href: '/integrations/', style: 'ghost' }],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they start.',
      items: [
        { q: 'What is Over to Flo?', a: 'Over to Flo is a team of AI agents. Each one takes a job off your hands, such as answering your missed calls or writing your social posts. You pick the agents you want, set them up yourself in a few minutes, and stay in charge from your phone.' },
        { q: 'Do I need to be technical?', a: 'No. You sign up, tell Flo about yourself once, and pick an agent. Flo can read your website so you do not have to type it all out. If you get stuck, there is a help chat, and a real person can be asked.' },
        { q: 'Which agents work today?', a: 'Two work today. Flo answers your missed calls on your existing number and texts you a summary. Poppy writes a week of social posts every Monday in your voice. Flo as an assistant, Bill, Paige, Finn and Lex are coming soon.' },
        { q: 'What does it cost?', a: 'Prices are on the <a href="/pricing/">pricing page</a>. There is no setup fee, and nobody needs to call you before you start. You set it up yourself.' },
        { q: 'Can I stop whenever I want?', a: 'Yes. You can cancel any time. You can also switch an agent to "Asks me first" whenever you like, so it waits for your yes before it does anything.' },
        { q: 'Will an agent ever act without asking me?', a: 'Only if you choose that. Every agent has a setting called "How much it does alone", with three choices: "Asks me first", "Acts within my limits" and "Acts on its own". Anything that needs a yes waits under "Waiting for your yes" on your phone.' },
        { q: 'Who is behind it?', a: 'Over to Flo is made by LeadSignal. You can read how we look after your information and the terms of the service on the <a href="/privacy/">privacy page</a> and the <a href="/terms/">terms page</a>.' },
        { q: 'What if we are a larger company?', a: 'Over to Flo is made for individuals and small businesses. For a larger company, <a href="https://revio.agency/" target="_blank" rel="noopener">REVIO</a> would be glad to help.' },
      ],
    },
    {
      type: 'cta', h2: 'Ready to hand something over?',
      text: 'Start with one agent. Set it up yourself in a few minutes, and add the others when you are ready.',
      ctas: [{ label: 'Get started', href: '/book/', style: 'mint' }, { label: 'Book a demo', href: '/book/', style: 'ghost' }],
    },
  ],
};
