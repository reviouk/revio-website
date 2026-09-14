const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'claude-implementation',
  title: 'Claude Implementation for UK Businesses | Revio',
  description: 'Rolling out Anthropic Claude for a UK business: Team or Enterprise, Projects, and agents built on the API. From £1,200 a day, builds from £4,500.',
  keywords: ['claude implementation uk', 'claude consultant uk', 'anthropic claude for business', 'claude enterprise rollout', 'claude for work'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'Claude Implementation',
  art: 'layers',
  badge: 'Claude Implementation',
  h1: 'Claude, rolled out properly, <em class="mint">not just switched on</em>.',
  sub: 'Anthropic Claude is a strong choice for long documents, careful writing and coding, and it is what we build most of our own agents on. We set up the workspace, decide what data it can see, train the people who will use it, and build the agents that plug into your systems. Training from £1,200 a day, builds from £4,500.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See what we build', href: '#build', style: 'ghost' },
  ],
  heroProof: ['Anthropic Claude is what we build our own agents on', 'Data-handling settings decided before rollout, not after', 'Training and builds priced and published'],
  service: { name: 'Claude Implementation', type: 'AI model rollout and agent development', price: P.build_from_num },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'Somebody bought Claude seats. Nobody decided what it is for.',
      body: [
        'A director reads that Claude is good at reasoning through long documents and writes tight code, buys a batch of Team seats, and sends a link round the business. Three months later, adoption is patchy: a few people use it well, most have gone back to whatever they used before, and nobody has decided what it is and is not allowed to see.',
        'Claude implementation is the work of turning a licence into a habit: the right plan, a data-handling policy that survives a client asking about it, training built on the team\'s own documents, and, where the value is software rather than a chat window, agents built on the Claude API inside the systems people already use.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What we set up', h2: 'The workspace, the knowledge, and the guardrails.',
      lede: 'Most of the value in a Claude rollout is decided before anyone opens a chat window.',
      items: [
        { icon: 'people', title: 'The right plan', text: 'Team for a department needing shared billing and admin controls, Enterprise where single sign-on and audit logs matter. Sized to the business, not sold as one size.' },
        { icon: 'doc', title: 'Projects and shared knowledge', text: 'Claude\'s Projects hold a team\'s documents, style guides and past work as a fixed reference, so answers reflect how your business writes rather than the general internet.' },
        { icon: 'code', title: 'Claude via the API', text: 'Where the work belongs inside a system rather than a chat window, we call the Claude API directly from your CRM or document store, so it runs unattended on a schedule or an event.' },
        { icon: 'agent', title: 'Agents built on the API', text: 'A defined agent that reads incoming documents, drafts a reply, checks a contract against a set of rules, or triages a queue, using Claude\'s tool-use loop against your own data.' },
        { icon: 'shield', title: 'Data-handling settings', text: 'What Claude may retain and who inside the business can see what, set explicitly rather than left on the vendor default.' },
        { icon: 'training', title: 'Training on real work', text: 'Sessions built around documents your team has this week, not a generic demo, with a written prompt library left behind.' },
      ],
    },
    {
      type: 'steps', kicker: 'How a rollout runs', h2: 'From licence to habit in a few weeks.',
      items: [
        { title: 'Scope the use cases', text: 'A short session on where long documents, writing or code cost your team time. If Claude is not the right tool, we say so.', meta: 'Week 1' },
        { title: 'Set up the workspace', text: 'Plan chosen, billing configured, data-handling settings written down, Projects seeded with the team\'s own reference material.', meta: 'Week 1–2' },
        { title: 'Train the team', text: 'A session per department on the tasks they actually do, recorded, with a prompt library left behind rather than a slide deck.', meta: 'Week 2–3' },
        { title: 'Build what needs building', text: 'Where the value is an agent rather than a habit, we scope and build it separately as a fixed-price project.', meta: 'Ongoing' },
      ],
    },
    {
      type: 'split', tone: 'wash', art: 'code', kicker: 'Agents on the API', id: 'build', h2: 'The chat window is the smallest part of what Claude can do for you.',
      body: ['We run our own AI product, LeadSignal, and build client agents the same way: Claude called through the API, given a defined set of tools, and set to work inside the systems you already run rather than a browser tab someone has to remember to open.'],
      bullets: ['Document review against a fixed set of rules or a contract playbook', 'Long-document summarising and drafting inside your CRM', 'Coding assistance wired into your existing workflow', 'A customer or staff-facing agent, scoped narrowly and supervised before it acts alone'],
      ctas: [{ label: 'See what we have built before', href: S.WORK_URL, style: 'dark' }],
    },
    {
      type: 'table', kicker: 'When Claude is the right call', h2: 'Where it tends to win, and where it does not.',
      head: ['', 'Claude is usually the right fit', 'Look elsewhere'],
      rows: [
        ['Long documents', 'Contracts, reports, transcripts read in full and reasoned over', 'Short, high-volume lookups better served by search'],
        ['Careful writing', 'Client-facing copy, policy documents, anything that has to read as considered', 'Bulk low-stakes copy where speed matters more than tone'],
        ['Coding', 'Reviewing, refactoring and writing code with an eye on correctness', 'A team already fully committed to a different coding assistant'],
        ['Agents', 'A defined task with clear tools, run inside your own systems', 'An open-ended "do everything" assistant with no scoped task'],
        ['Data sensitivity', 'A business that needs written data-handling controls it can show a client', 'None. This applies everywhere, whichever model you choose'],
      ],
      note: 'Our honest read of where Claude tends to fit best, not a claim it is the only model worth using.',
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and who it is not.',
      yes: { title: 'A good fit', items: ['A UK business that has bought or is considering Claude Team or Enterprise seats', 'Work that involves long documents, careful writing or code', 'A director who wants data-handling decided and written down, not assumed', 'A team willing to spend a session learning it properly'] },
      no: { title: 'Not this, yet', items: ['You want us to pick a model for you with no use case in mind, that is a shorter conversation', 'The work is really about building a customer-facing agent from scratch, which sits under an AI build', 'Nobody in the business will own the workspace once we leave'] },
    },
    {
      type: 'quote', tone: 'wash',
      text: 'We build our own agents on Claude because it holds up over long documents and does not need constant correcting on tone. Rolling it out for a client is mostly the same job: decide what it can see, teach people to use it on real work, then build the bit that should not need a human at all.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'Do we need Claude Enterprise or is Team enough?', a: 'Team covers most businesses under a few hundred seats: shared billing, an admin console and a workspace. Enterprise adds single sign-on and audit logs, and matters more once IT or compliance need to see activity centrally.' },
        { q: 'Does Claude train on our data?', a: 'Business plans are configured not to train on your conversations by default, and we set and document that explicitly during rollout rather than leaving it on whatever the account defaulted to.' },
        { q: 'What is a Project inside Claude?', a: 'A fixed space where you attach your own documents and past work as reference. Every conversation inside it can draw on that material, so answers reflect how your business writes rather than a generic reply.' },
        { q: 'Can Claude read our contracts or long reports?', a: 'Yes, that is one of the things it does best. We build workflows that put the right document in front of it, with a defined prompt, rather than relying on someone pasting text in each time.' },
        { q: 'Do you only work with Claude?', a: 'No. We also implement ChatGPT and Microsoft Copilot, and recommend whichever model fits your systems. We build most of our own agents on Claude, which is why we know it well.' },
        { q: 'How is this priced?', a: 'Rollout and training are billed by the day, from £1,200. An agent or integration built on the API is scoped as an AI Build, from £4,500. Unsure which you need? The Embedded AI Lead covers both under one monthly fee.' },
        { q: 'What happens to the setup if we stop working with you?', a: 'The workspace, the Projects and any agents built on the API are all in your name from day one. Nothing depends on us staying involved.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: '/chatgpt-implementation/', icon: 'chat', title: 'ChatGPT Implementation', text: 'The same rollout discipline for OpenAI\'s ChatGPT, including custom GPTs on your own material.', meta: P.training_day },
        { href: '/ai-agents-automation/', icon: 'agent', title: 'AI Agents & Automation', text: 'Agents built to do a defined job unattended, on Claude or another model, wired into your systems.', meta: P.build_from },
        { href: '/ai-enablement/', icon: 'people', title: 'AI Enablement & Training', text: 'A training programme rather than a one-off session, with adoption measured at 30, 60 and 90 days.', meta: P.training_half },
      ],
    },
    {
      type: 'cta', h2: 'Get Claude used properly, not just paid for.',
      text: 'A 30-minute call on where long documents, writing or code cost your team time, and whether Claude is the right answer. If it is not, we will tell you what is.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
