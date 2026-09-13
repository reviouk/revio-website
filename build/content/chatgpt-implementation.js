const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'chatgpt-implementation',
  title: 'ChatGPT Implementation for UK Businesses | Revio',
  description: 'ChatGPT Team or Enterprise rollout for UK businesses: workspace setup, custom GPTs, data controls and adoption you can measure. From £1,200 a day.',
  keywords: ['chatgpt implementation uk', 'chatgpt for business uk', 'chatgpt enterprise consultant', 'custom gpt development'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'ChatGPT Implementation',
  art: 'chat',
  badge: 'ChatGPT Implementation',
  h1: 'ChatGPT rolled out with a plan, <em class="mint">not a link in Slack</em>.',
  sub: 'Most businesses already have someone using ChatGPT informally. Implementation is the work of turning that into a managed workspace: the right plan, custom GPTs built on your own material, data controls set deliberately, and a way of knowing whether it is actually being used. From £1,200 a day, builds from £4,500.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the custom GPT work', href: '#gpts', style: 'ghost' },
  ],
  heroProof: ['Workspace, GPTs and data controls set up together', 'Usage policy your team can actually follow', 'Adoption measured, not assumed'],
  service: { name: 'ChatGPT Implementation', type: 'AI model rollout and custom GPT development', price: P.build_from_num },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'Half the business already uses ChatGPT on a personal account.',
      body: [
        'By the time a director asks about "doing ChatGPT properly", most of the team is already using it, often on personal logins, often pasting in things that should not leave the building. The informal version got the business this far. It will not survive a client asking where their data went, or a board asking what the return has been.',
        'ChatGPT implementation moves the business onto Team or Enterprise, sets out what the tool may see, builds custom GPTs on the company\'s own material so answers are useful rather than generic, and puts a number on adoption instead of a guess.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What we set up', h2: 'A managed workspace, not a shared password.',
      lede: 'The rollout work happens once. The habit it creates lasts.',
      items: [
        { icon: 'people', title: 'Workspace setup', text: 'Team or Enterprise, sized to headcount, with an admin console, SSO where it matters, and seats assigned by role rather than handed out on request.' },
        { icon: 'agent', title: 'Custom GPTs', text: 'Built on your own material, an onboarding GPT, a proposal-writing GPT, a support-reply GPT, so people get a useful answer in your voice rather than a blank chat box.' },
        { icon: 'shield', title: 'Data controls', text: 'Training opt-out and retention settings decided and written down, not left on default, so a client or auditor gets a straight answer.' },
        { icon: 'doc', title: 'A usage policy', text: 'One page on what may and may not be pasted into ChatGPT, agreed with the people who will actually use it, not a legal document nobody reads.' },
        { icon: 'brief', title: 'A prompt library per department', text: 'Sales, support and operations each get a short set of prompts built on their real tasks, so the tool earns its place in week one.' },
        { icon: 'chart', title: 'Adoption measured', text: 'Usage reviewed at 30, 60 and 90 days against the tasks it was rolled out to help with, so a licence is not mistaken for a result.' },
      ],
    },
    {
      type: 'steps', kicker: 'How a rollout runs', h2: 'From workspace to habit in a few weeks.',
      items: [
        { title: 'Audit current use', text: 'What people are already doing with ChatGPT, on what accounts, with what data. This usually surfaces the first thing to fix.', meta: 'Week 1' },
        { title: 'Move to a managed workspace', text: 'Team or Enterprise set up, seats assigned, data controls agreed and documented.', meta: 'Week 1–2' },
        { title: 'Build the department GPTs', text: 'A small number of custom GPTs built on real company material, tested by the people who will use them.', meta: 'Week 2–3' },
        { title: 'Train and measure', text: 'A working session per department, a usage policy signed off, and a first adoption check at 30 days.', meta: 'Week 3 onward' },
      ],
    },
    {
      type: 'split', tone: 'wash', art: 'code', kicker: 'Custom GPTs', id: 'gpts', h2: 'A GPT is only useful once it knows your business.',
      body: ['Out of the box, ChatGPT answers from the general internet. A custom GPT is scoped to a task and given your own documents as reference, so a proposal draft reads like your business and a support reply uses your actual policies.'],
      bullets: ['Proposal and quote drafting from past won work', 'Support replies grounded in your real policies and FAQs', 'Onboarding and internal FAQ answering for new starters', 'API-level builds where a GPT alone is not enough'],
      ctas: [{ label: 'See what we have built before', href: S.WORK_URL, style: 'dark' }],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and who it is not.',
      yes: { title: 'A good fit', items: ['A UK business where ChatGPT is already used informally', 'Repeated writing tasks: proposals, replies, reports', 'A director who wants data handling written down', 'Willingness to spend a session training the team properly'] },
      no: { title: 'Not this, yet', items: ['You need a customer-facing chatbot on your own website, that is a different build', 'Nobody will own the workspace once it is set up', 'The real need is a full agent wired into your CRM, which is an AI build rather than a rollout'] },
    },
    {
      type: 'table', kicker: 'Plans compared', h2: 'Which plan actually fits.',
      head: ['', 'ChatGPT Team', 'ChatGPT Enterprise'],
      rows: [
        ['Fits', 'Under roughly 150 seats', 'Larger or regulated businesses'],
        ['Admin controls', 'Basic admin console', 'Full SSO, domain verification, audit logs'],
        ['Data handling', 'Training opt-out available', 'Training opt-out by default, higher retention control'],
        ['Custom GPTs', 'Yes, shared within workspace', 'Yes, with wider access controls'],
      ],
      note: 'We size the plan to the business during scoping rather than defaulting to the larger, more expensive option.',
    },
    {
      type: 'quote', tone: 'wash',
      text: 'The businesses that get value from ChatGPT are not the ones with the most seats. They are the ones where someone decided what it was for, built two or three GPTs on real material, and checked back in a month later.',
      who: 'Rob Wells', role: 'Founder, Revio',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'Is our data used to train OpenAI\'s models?', a: 'On Team and Enterprise plans, business content is excluded from training by default, and we confirm and document the setting during rollout rather than assuming it.' },
        { q: 'What is a custom GPT, in plain terms?', a: 'A version of ChatGPT scoped to one task, given your own documents and instructions as reference, so it answers in your voice rather than generically. It lives inside your workspace, not on the public GPT store.' },
        { q: 'How is adoption actually measured?', a: 'We agree the tasks the rollout is meant to help with, then check workspace usage against them at 30, 60 and 90 days. A licence with no logins is a flag to fix, not a number we hide.' },
        { q: 'Do you write the usage policy for us?', a: 'We draft it with the people who will follow it, covering what may and may not be pasted in, then hand it over as a one-page document rather than a lengthy policy nobody reads.' },
        { q: 'Can ChatGPT connect to our CRM or other systems?', a: 'Custom GPTs work well for drafting and answering from documents. A live connection into your CRM or another system is API-level work, scoped separately as an AI Build.' },
        { q: 'What does this cost?', a: 'Rollout, GPT building and training are billed by the day, from £1,200. A connected build using the API starts from £4,500. The Embedded AI Lead covers ongoing work of both kinds under one monthly fee.' },
        { q: 'Do you also work with Claude or Copilot?', a: 'Yes. We recommend whichever model fits your systems and use case, and implement Claude and Microsoft Copilot as well as ChatGPT.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: '/claude-implementation/', icon: 'layers', title: 'Claude Implementation', text: 'The same rollout discipline for Anthropic\'s Claude, including agents built on the API.', meta: P.training_day },
        { href: '/ai-chatbot/', icon: 'chat', title: 'AI Chatbot', text: 'A customer-facing chatbot built for your own website and channels, not a general assistant.', meta: P.chatbot },
        { href: '/ai-enablement/', icon: 'people', title: 'AI Enablement & Training', text: 'A training programme with adoption measured at 30, 60 and 90 days.', meta: P.training_half },
      ],
    },
    {
      type: 'cta', h2: 'Turn the informal habit into a managed one.',
      text: 'A 30-minute call on how ChatGPT is already used in your business, and what a proper rollout would change. If it would not change much, we will say so.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
