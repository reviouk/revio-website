const S = require('../../site');
const P = S.PRICE;

module.exports = {
  slug: 'industries/ecommerce-retail',
  title: 'AI for Ecommerce & Retail Brands UK | Revio',
  description: 'AI for DTC brands and retailers: customer service on WhatsApp and Instagram, order and returns handling, and post-purchase flows. From £1,500.',
  keywords: ['ai for ecommerce uk', 'ai customer service ecommerce', 'shopify ai automation uk', 'ai for retailers'],
  crumbs: [{ label: 'Industries', href: S.INDUSTRIES_URL }],
  crumbLabel: 'Ecommerce & Retail',
  art: 'chart',
  badge: 'Ecommerce & Retail',
  h1: 'AI for DTC brands and retailers, <em class="mint">built around the messages you already get</em>.',
  sub: 'Customer service answered on WhatsApp, Instagram and email, orders and returns handled without a ticket queue, product content and reviews kept up, abandoned carts followed up properly. From £1,500 for the audit.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['Wired into Shopify or the platform you already run', 'Refund and goodwill limits set by you, never guessed by the AI', 'Every price published, nothing hidden in a day rate'],
  service: { name: 'AI for Ecommerce & Retail', type: 'Industry page', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'Where this fits',
      h2: 'The messages arrive on five channels. The team is on one.',
      body: [
        'A DTC brand or retailer gets asked the same handful of questions on WhatsApp, Instagram, email and the website chat, where is my order, can I return this, does it come in another size, and the answer sits in Shopify or the order system the whole time. Customer service across channels, order and returns handling, product content, review handling, and abandoned-cart or post-purchase flows are the jobs AI does well here, because the information already exists, it just needs to reach the customer faster than a person checking five inboxes can manage.',
        'What stays a human decision is anything involving money outside the rules you set, a refund above a threshold, a goodwill gesture, a genuinely angry customer. The AI answers the routine questions correctly and fast, and hands over the exceptions with the order history already pulled up, rather than making a judgement call it was never asked to make.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Where AI pays', h2: 'Six places ecommerce brands see it earn its keep.',
      lede: 'Not a platform. Each of these is a defined, working thing on your own systems.',
      items: [
        { icon: 'chat', title: 'Customer service across channels', text: 'WhatsApp, Instagram DMs, email and website chat answered from your real order data and policies, in your brand\'s voice, with a human handed anything outside the rules.' },
        { icon: 'cart', title: 'Order and returns handling', text: 'Where is my order, how do I return this, and can I exchange this size, answered instantly from live order status rather than a ticket someone gets to tomorrow.' },
        { icon: 'doc', title: 'Product content', text: 'Product descriptions, size guides and FAQ answers drafted from your existing copy and spec sheets, so new lines go live with content rather than a placeholder.' },
        { icon: 'search', title: 'Review handling', text: 'Reviews read and triaged automatically, a thank-you for the good ones, a flagged escalation for anything that reads as a real complaint, so nothing sits unanswered for a week.' },
        { icon: 'mail', title: 'Abandoned cart and post-purchase flows', text: 'Cart-abandonment and post-purchase messages that reference the actual product left in the basket or bought, not a generic template, sent on a schedule you set.' },
        { icon: 'data', title: 'Packaging and EPR data', text: 'Packaging weight and material data pulled together into the format your Extended Producer Responsibility reporting needs, instead of assembled by hand once a year.' },
      ],
    },
    {
      type: 'steps', kicker: 'First 90 days', h2: 'What actually happens if you start.',
      items: [
        { title: 'Audit the customer-service flow', text: 'Two weeks watching how questions actually arrive across channels and how long they take to answer, ending in a ranked list of what to build first.', meta: 'Weeks 1–2' },
        { title: 'Build the first automation', text: 'Usually customer service or returns, wired into Shopify or your platform, tested on real conversations before it goes live.', meta: 'Weeks 3–6' },
        { title: 'Supervised launch', text: 'A team member checks every reply for two to three weeks, so tone and accuracy are right before it runs unsupervised.', meta: 'Weeks 6–9' },
        { title: 'Hand to the team', text: 'Customer service staff trained on the exceptions it flags, a runbook left behind, and a second use case scoped once the first is paying for itself.', meta: 'Weeks 9–13' },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and where we say wait.',
      yes: { title: 'A good fit', items: ['DTC brands and retailers on Shopify or a similar platform', 'Enough order and message volume that a queue genuinely builds up', 'A brand voice worth protecting on customer-facing replies', 'A team happy to set clear limits and let the AI handle within them'] },
      no: { title: 'Not this, yet', items: ['You want AI to approve refunds with no limit or oversight', 'Order volume is low enough that a person answers everything same-day already', 'There is no platform or order system to connect to at all', 'You need this live in days rather than weeks'] },
    },
    {
      type: 'table', tone: 'wash', kicker: 'What it costs', h2: 'A typical first project.',
      head: ['Use case', 'What it replaces', 'Typical build', 'Price from'],
      rows: [
        ['Customer service across channels', 'A team checking five inboxes by hand', 'An AI agent wired into Shopify and your channels', P.build_from],
        ['Order and returns handling', 'A support ticket queue answered manually', 'Order-status and returns automation', P.build_from],
        ['Abandoned cart and post-purchase flows', 'Generic template emails sent to everyone the same way', 'Personalised flow built from order data', P.build_from],
        ['Review handling', 'Reviews checked and replied to when someone has time', 'Automated triage and reply tool', P.data],
        ['Full customer-service system', 'Several of the above, wired together', 'A connected app across the customer lifecycle', P.build_mid],
      ],
      note: 'All prices exclude VAT. The audit above is the usual first step and its fee comes off the first build.',
    },
    {
      type: 'cases', kicker: 'A brand we work with', h2: 'Flowers by Flourish, seasonal DTC.',
      items: [
        { href: S.WORK_URL, kicker: 'DTC retail', title: 'Flowers by Flourish', result: 'Seasonal paid social built around peak demand', text: 'A seasonal flowers brand where we run the paid social that drives demand around key dates, the same rhythm we bring to the customer-service automation that handles what happens after the order lands.' },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions ecommerce brands ask before they start.',
      items: [
        { q: 'Can this handle refunds on its own?', a: 'Within limits you set, yes, a straightforward return within policy can be approved automatically. Anything above a threshold or outside the rules is handed to a person with the order already pulled up.' },
        { q: 'Will it sound like a bot?', a: 'It is built from your actual brand voice and past replies, not a generic template. Most customers do not notice the difference until they need something the automation cannot do, at which point a person takes over.' },
        { q: 'Does it work across WhatsApp, Instagram and email at once?', a: 'Yes, that is usually the point. One system reading the same order and customer data, replying consistently whichever channel the message arrives on.' },
        { q: 'What about a genuinely angry customer?', a: 'The system is built to recognise frustration and escalate rather than attempt to talk someone down. A person handles it, with full context already assembled.' },
        { q: 'Can this connect to Shopify?', a: 'Yes, Shopify and most major ecommerce platforms have an API we work with directly. Custom-built platforms are checked in the audit.' },
        { q: 'Will it help with EPR packaging reporting?', a: 'It can pull together the packaging data your reporting needs from existing product records, though the reporting submission itself remains a compliance task you or your accountant owns.' },
        { q: 'How quickly could a first automation be live?', a: 'A first build, usually customer service or returns, is typically live within six weeks of the audit finishing, running unsupervised within nine.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where to start.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your store.', meta: P.audit },
        { href: '/ai-chatbot/', icon: 'chat', title: 'AI Chatbot', text: 'The customer-service agent, built and supported as a standalone product.', meta: P.chatbot },
        { href: '/ai-workflow-automation/', icon: 'flow', title: 'AI Workflow Automation', text: 'Order, returns and post-purchase flows, wired into your platform.', meta: P.build_from },
      ],
    },
    {
      type: 'cta', h2: 'Find the one process where AI pays in your store.',
      text: 'A 30-minute call on how customer service and orders actually flow today. If AI is not the right answer for one of them, we will say so.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
