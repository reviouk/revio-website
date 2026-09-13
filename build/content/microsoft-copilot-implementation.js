const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'microsoft-copilot-implementation',
  title: 'Microsoft 365 Copilot Implementation UK | Revio',
  description: 'Microsoft 365 Copilot rollout for UK businesses: fixing SharePoint oversharing first, then licensing, Copilot Studio agents and measured adoption.',
  keywords: ['microsoft copilot implementation uk', 'copilot consultant uk', 'microsoft 365 copilot rollout', 'copilot studio agents'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'Microsoft Copilot Implementation',
  art: 'network',
  badge: 'Microsoft Copilot Implementation',
  h1: 'Copilot works on what your files already say <em class="mint">it can see</em>.',
  sub: 'Microsoft 365 Copilot reads whatever your permissions already allow, which is why the first job is finding out what that actually is. We run a readiness check, fix the oversharing it turns up, then licence, roll out and build the Copilot Studio agents worth having. Training from £1,200 a day, readiness check at the audit price.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the readiness check', href: '#readiness', style: 'ghost' },
  ],
  heroProof: ['Permissions checked before Copilot goes live', 'Copilot Studio agents built for real Teams and Outlook use cases', 'Adoption measured against the per-user licence cost'],
  service: { name: 'Microsoft Copilot Implementation', type: 'Microsoft 365 Copilot rollout and agent development', price: P.build_from_num },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'Copilot is not the risk. What it finds already sitting in SharePoint is.',
      body: [
        'Microsoft 365 Copilot does not have its own idea of what you should see. It reads with your existing permissions, at speed, across every site and every old share it can reach. Most SharePoint estates that have grown for a decade have folders shared "with everyone in the company" that nobody remembers opening up, and Copilot will happily summarise them for the first person who asks the right question.',
        'A proper rollout starts by finding that oversharing and closing it, then licenses the tool per user, and only after that builds the Copilot Studio agents and Teams or Outlook habits that make the licence worth paying for.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What we do', h2: 'Permissions first, then the rollout that sits on top of them.',
      lede: 'The Copilot add-on is billed per user, on top of an existing Microsoft 365 licence, so the cost is visible from day one.',
      items: [
        { icon: 'search', title: 'A readiness check', text: 'We review SharePoint and Teams permissions for the oversharing Copilot would otherwise surface, and hand over a fixed list of what to close before any licence goes live.' },
        { icon: 'shield', title: 'Fixing the oversharing', text: 'Site by site, the shares that should never have been open are locked down, so Copilot answers from what people should see rather than everything technically reachable.' },
        { icon: 'people', title: 'Licensing and rollout', text: 'The Copilot add-on assigned by role rather than blanket-purchased, so the spend matches who will actually use it.' },
        { icon: 'agent', title: 'Copilot Studio agents', text: 'Purpose-built agents inside Copilot Studio for a specific job, an IT helpdesk triage, a policy lookup, a meeting-follow-up drafter, rather than the general assistant left to find its own uses.' },
        { icon: 'mail', title: 'Teams and Outlook use cases', text: 'Meeting summaries, email drafting and document search set up around real work, with a short session so people know when Copilot is actually the fastest route.' },
        { icon: 'chart', title: 'Adoption measured', text: 'Usage checked against the per-user cost at 30, 60 and 90 days, so unused licences are found and reassigned rather than quietly renewed.' },
      ],
    },
    {
      type: 'steps', kicker: 'How a rollout runs', h2: 'Permissions fixed before the licence goes live.',
      items: [
        { title: 'Readiness check', text: 'A structured review of SharePoint and Teams sharing, producing a fixed list of what needs closing down before Copilot can see it.', meta: 'Week 1–2' },
        { title: 'Fix the sharing', text: 'The list is worked through with whoever owns IT or the Microsoft tenant, typically your existing provider rather than us.', meta: 'Week 2–3' },
        { title: 'Licence and roll out', text: 'Seats assigned by role, admin settings configured, and a short training session for each department.', meta: 'Week 3–4' },
        { title: 'Build the agents worth having', text: 'One or two Copilot Studio agents built for a defined job, tested, and handed over documented.', meta: 'Week 4 onward' },
      ],
    },
    {
      type: 'split', tone: 'wash', art: 'network', id: 'readiness', kicker: 'Why permissions come first', h2: 'A readiness check finds the folder before Copilot does.',
      body: ['Every SharePoint estate we have reviewed has had at least one site shared more widely than anyone intended. Copilot does not create that risk, it just makes it fast to find, which is exactly why the check has to happen first, not after the first awkward question in a meeting.'],
      bullets: ['Site and library permissions audited against who should actually have access', 'Old "everyone" links and stale guest access identified', 'A fixed remediation list, not a vague warning', 'Re-checked before Copilot is switched on for the business'],
      ctas: [{ label: 'Talk about a readiness check', href: S.BOOK_URL, style: 'dark' }],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and who it is not.',
      yes: { title: 'A good fit', items: ['A UK business already on Microsoft 365, considering or holding unused Copilot licences', 'A SharePoint estate that has grown for years without a permissions review', 'A director who wants a defined use case per department, not a blanket rollout', 'Interest in Copilot Studio agents for a specific job'] },
      no: { title: 'Not this, yet', items: ['You are not on Microsoft 365, this is specific to that ecosystem', 'You want a customer-facing chatbot, that sits under AI Chatbot instead', 'Nobody will own the Copilot Studio agents once built'] },
    },
    {
      type: 'table', kicker: 'Where it earns its cost', h2: 'The uses worth the per-user licence.',
      head: ['', 'Usually worth it', 'Often not'],
      rows: [
        ['Meetings', 'Summaries and action points from Teams calls', 'Meetings nobody rereads notes from anyway'],
        ['Email', 'Drafting replies from a known context in Outlook', 'Short internal messages faster to type directly'],
        ['Document search', 'Finding and summarising across a tidy, permissioned SharePoint', 'A SharePoint estate too messy to trust the answer'],
        ['Custom agents', 'A defined job in Copilot Studio with a clear owner', 'A general assistant with no specific task'],
      ],
      note: 'This is our honest read from rollouts we have run, not a guarantee. A messy SharePoint estate is the single biggest reason Copilot disappoints.',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'What does Copilot actually cost?', a: 'Microsoft 365 Copilot is billed as a per-user add-on on top of an existing Microsoft 365 licence. The exact rate is set by Microsoft and changes; we help you decide how many seats to buy and for whom, not what Microsoft charges.' },
        { q: 'What is the oversharing problem, exactly?', a: 'Copilot reads with the permissions each user already has. Where SharePoint sites or Teams have been shared more widely than intended, over years, Copilot can surface that content quickly and clearly, which is why we check permissions before it goes live.' },
        { q: 'Do you fix our SharePoint permissions yourselves?', a: 'We produce the fixed list from the readiness check and work through it with whoever administers your Microsoft tenant, usually your existing IT provider. Where nobody internal can do it, we can carry that work as part of the rollout.' },
        { q: 'What is a Copilot Studio agent?', a: 'A purpose-built agent inside Microsoft\'s Copilot Studio, scoped to one job such as an IT helpdesk lookup or a policy question, rather than the general Copilot assistant left to find its own uses.' },
        { q: 'How is adoption measured?', a: 'We agree the tasks the rollout targets, then check usage against the per-user cost at 30, 60 and 90 days, so licences nobody is using get found and reassigned rather than renewed automatically.' },
        { q: 'How is this priced?', a: 'A Copilot readiness check is priced as our standard audit, from £1,500. Rollout and training are billed by the day, from £1,200. A Copilot Studio agent build starts from £4,500.' },
        { q: 'We already use ChatGPT or Claude, why also Copilot?', a: 'Copilot\'s advantage is depth inside Microsoft 365, Teams, Outlook and SharePoint specifically. Many businesses run it alongside another model for general work; we help decide which tool does which job.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'A two-week audit that includes a Copilot readiness check where Microsoft 365 is already in place.', meta: P.audit },
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'The register, the policy and the audit trail, as a standalone piece of work.', meta: P.governance },
        { href: '/ai-enablement/', icon: 'people', title: 'AI Enablement & Training', text: 'A training programme with adoption measured at 30, 60 and 90 days.', meta: P.training_half },
      ],
    },
    {
      type: 'cta', h2: 'Check what Copilot would find before you switch it on.',
      text: 'A 30-minute call on your current Microsoft 365 setup and whether a readiness check should come before any licences are bought.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
