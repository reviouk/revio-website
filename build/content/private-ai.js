const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'private-ai',
  title: 'Private AI Deployment UK: Your Tenant, Your Data | Revio',
  description: 'Private AI for UK regulated firms: Azure OpenAI in your own tenant, AWS Bedrock or on-premises open models, with private document Q&A. From £4,500 plus hosting.',
  keywords: ['private ai deployment uk', 'on premise ai for law firms', 'private llm uk', 'secure ai for accountants', 'azure openai private tenant', 'confidential ai document q&a'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'Private AI',
  art: 'shield',
  badge: 'Private AI',
  h1: 'AI that never leaves <em class="mint">your four walls</em>.',
  sub: 'For solicitors, accountants, IFAs and clinics who cannot put client files into somebody else’s product. Azure OpenAI inside your own tenant, AWS Bedrock in your own account, or open models on hardware you own, with private document search and drafting on top. From £4,500 plus hosting in your name.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'Read the straight answers', href: '#faq', style: 'ghost' },
  ],
  heroProof: ['Your tenant, your subscription, your keys', 'No training on your data, contractually', 'Built with the audit trail your regulator will ask for'],
  service: { name: 'Private AI Deployment', type: 'Private AI infrastructure', price: 4500 },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'Your staff are already pasting client files into a chat window.',
      body: [
        'Every regulated firm we walk into has the same quiet problem. The partners have not approved an AI tool, so there is no policy, so people use their own accounts. A completion statement goes into a free chatbot to be summarised. A client’s suitability report gets rewritten by a consumer app on somebody’s phone. Nobody is being reckless; they are being efficient, and the firm has no record that any of it happened.',
        'Banning it does not work and has never worked. The alternative is to give people a good tool inside a boundary you control, where the data stays in your tenant, the vendor has no right to train on it, every prompt and response is logged, and the answer is grounded in your own files rather than the open internet. That is what a private AI deployment is, and for most professional firms it costs less than one junior’s monthly salary to stand up.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'The options', h2: 'Three shapes of private, depending on what you must prove.',
      cols: 3,
      items: [
        { icon: 'server', title: 'Azure OpenAI in your own tenant', text: 'The most common answer for Microsoft 365 firms. Frontier models running inside your Azure subscription, in a UK region, with your Entra identities, your network rules and your retention. No data used for training, and your existing Microsoft data processing terms already cover it.', meta: 'Usually the right call' },
        { icon: 'cpu', title: 'AWS Bedrock in your own account', text: 'The same principle on AWS: several model families behind one API, in a UK or EU region, inside your VPC with private endpoints, logged to your own CloudWatch and S3. Suits firms whose estate is already AWS or whose software vendor builds there.' },
        { icon: 'lock', title: 'Open models on hardware you own', text: 'Llama, Mistral or Qwen class models on a server in your office or a colocation rack, with no outbound connection at all. The strictest answer, for data that genuinely may not touch a third party. Real hardware, real running costs, and worth it only when the constraint is real.' },
      ],
      note: 'We will tell you which of the three you need, and we say "none of them, your standard enterprise agreement already covers this" more often than you might expect.',
    },
    {
      type: 'split', kicker: 'What gets built on top', h2: 'Private infrastructure is the floor, not the product.',
      body: [
        'A private endpoint on its own gives your firm a chat box with better terms. The value arrives when it is pointed at your own material: the matter files, the precedent bank, the policy library, ten years of advice letters, the fee scales, the technical bulletins your team searches by hand.',
        'We build private document question-answering over that material with permissions respected, so a paralegal sees what a paralegal may see and a partner sees more. Answers cite the source document and paragraph, because an answer a professional cannot check is an answer they cannot use.',
      ],
      bullets: ['Private document Q&A across matters, precedents and policies', 'Permission-aware retrieval that honours your existing access rules', 'Citations to the source file and paragraph on every answer', 'Drafting from your own precedent rather than a generic template', 'Full prompt and response logging for supervision and audit', 'Redaction and data-minimisation rules where files carry special category data'],
      art: 'code',
      ctas: [{ label: 'See the governance work', href: '/ai-governance-compliance/', style: 'dark' }],
    },
    {
      type: 'steps', kicker: 'How it runs', h2: 'From decision to a tool your team trusts.',
      items: [
        { title: 'Establish what the constraint actually is', text: 'Client confidentiality, an SRA or FCA expectation, a professional indemnity insurer, a client contract clause, a sector code, or a partner who is simply not comfortable. Each points at a different answer and only one of them needs hardware.', meta: 'Week 1' },
        { title: 'Stand up the environment', text: 'Subscription, region, network, identity, key management, logging and retention, all in your name with your finance team on the invoice. Documented as an architecture note your IT provider can read.', meta: 'Weeks 1–2' },
        { title: 'Connect your material safely', text: 'Document set chosen, permissions mapped, indexing built, refresh scheduled. The awkward part is not the model, it is deciding which files the tool may see and proving that rule holds.', meta: 'Weeks 2–4' },
        { title: 'Pilot with one team', text: 'One department, real work, supervised, with the logs reviewed weekly. Accuracy and usefulness are judged by the professionals who will be held responsible for the output.', meta: 'Weeks 5–6' },
        { title: 'Roll out with policy and training', text: 'The AI register entry, the acceptable-use policy, the supervision rules and a training session per team. A tool nobody was taught to use is a licence bill, not a capability.', meta: 'Week 7 onward' },
      ],
    },
    {
      type: 'compare', tone: 'wash', kicker: 'The honest test', h2: 'When private AI is worth it, and when it is not.',
      yes: { title: 'Worth the extra cost', items: ['Client files under legal professional privilege or equivalent duties', 'Special category data: health records, criminal matters, safeguarding files', 'A client contract or tender that bans third-party processing outright', 'A regulator, insurer or parent group that requires data residency you can evidence', 'Material volumes of confidential documents you want searchable in one place', 'A firm that has already had the "who pasted what into a chatbot" conversation'] },
      no: { title: 'A normal enterprise agreement is enough', items: ['Marketing copy, internal notes, meeting summaries and general drafting', 'You are on Microsoft 365 or Google Workspace business tiers, where enterprise terms already prohibit training on your content', 'The concern is reputational rather than contractual, and a written policy would settle it', 'Fewer than about twenty regular users, where per-seat enterprise licences are far cheaper', 'Nobody can point at the specific clause, regulation or client requirement driving it'] },
      note: 'On-premises hardware is the answer roughly one time in ten. If the constraint turns out to be a policy question rather than a technical one, the governance work is a quarter of the cost and solves it properly.',
    },
    {
      type: 'checks', kicker: 'Scope', h2: 'What the engagement covers.',
      groups: [
        { title: 'Included', items: ['Requirements session with the partner or director who owns the risk', 'Environment build in your own subscription, UK or EU region', 'Identity, network, key management and retention configured', 'Private document Q&A over an agreed document set', 'Permission-aware retrieval and citation of sources', 'Prompt and response logging for supervision', 'Architecture note, runbook and handover to your IT provider', 'Acceptable-use policy and training for the pilot team'] },
        { title: 'Not included', items: ['Hosting, compute and model usage, billed in your own accounts', 'Hardware purchase for on-premises deployments', 'Your regulator’s or insurer’s approval, which is yours to obtain', 'A penetration test or formal security audit, which we will help you commission', 'Migration of your document management system', 'Any claim that a private deployment removes the need for supervision of professional work'] },
      ],
    },
    {
      type: 'table', kicker: 'Running costs', h2: 'What the three options actually cost to keep on.',
      head: ['', 'Azure OpenAI, your tenant', 'AWS Bedrock, your account', 'Open models, your hardware'],
      rows: [
        ['Build, from', P.private_ai, P.private_ai, 'From £12,000, scoped case by case'],
        ['Typical monthly running cost', '£150 to £900 on usage', '£150 to £900 on usage', '£400 to £1,500 in hosting, power and support'],
        ['Hardware', 'None', 'None', 'A GPU server, from about £8,000, yours to buy'],
        ['Where the data sits', 'Your Azure subscription, UK region', 'Your AWS account, UK or EU region', 'Your premises or colocation rack'],
        ['Model quality', 'Frontier models', 'Several frontier and open families', 'Strong open models, a step behind frontier'],
        ['Best when', 'You are a Microsoft 365 firm, which is most firms', 'Your estate or your software is already on AWS', 'Nothing may leave the building, and you can prove why'],
      ],
      note: 'Build fees exclude VAT and exclude hosting, which is contracted in your own name so you keep the relationship and the commercial terms.',
    },
    {
      type: 'quote',
      text: 'The firms that get this right do not start with the model. They start by writing down which files the tool may see, and who is accountable for what it produces. The infrastructure is the easy half.',
      who: 'Rob Wells', role: 'Founder, Revio',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions professional firms ask.',
      items: [
        { q: 'Does a private deployment mean our data trains the model?', a: 'No. In Azure OpenAI and AWS Bedrock your prompts and documents are not used to train the underlying models, and that sits in the contractual terms rather than in a marketing claim. With open models on your own hardware the question does not arise, because nothing leaves the machine. We put the relevant clause references in the documentation so your compliance officer can cite them.' },
        { q: 'Is this the same as ChatGPT Enterprise or Microsoft Copilot?', a: 'Not quite. Those are products with good terms, and for many firms they are the right answer. A private deployment is infrastructure you control: your subscription, your region, your network rules, your logs, your retention, and an application built to your permission model. The difference matters when you have to evidence where data sits rather than assert it.' },
        { q: 'Where does the data physically sit?', a: 'In a UK region by default, or an EU region where a client contract calls for it, and you can evidence that from your own subscription rather than a vendor statement. For on-premises builds it sits on hardware at an address you control. Data residency is written into the architecture note for your Article 30 record.' },
        { q: 'What does it cost to run each month?', a: 'A cloud private deployment for a firm of twenty to fifty fee earners typically runs £150 to £900 a month in usage, billed in your own account. On-premises is £400 to £1,500 a month in hosting, power and support after the hardware is bought. The build starts at ' + P.private_ai + ' and is quoted fixed once the constraint is clear.' },
        { q: 'Will it be as good as the public tools?', a: 'On Azure or Bedrock, yes, because it is the same class of model. On your own hardware, open models are a visible step behind the frontier on hard reasoning, though for document search, summarising and drafting from precedent the gap is small. We will be specific about what your team will and will not notice before you commit.' },
        { q: 'How do we stop it seeing files people should not see?', a: 'Retrieval honours your existing permissions rather than inventing new ones, so the tool can only surface what that user could already open. The document set is agreed explicitly, indexing is scoped, and access is tested with real accounts at the pilot stage. Where files carry special category data we apply redaction rules before indexing.' },
        { q: 'What will our regulator or insurer want to see?', a: 'In practice: what the system is, what data it touches, where that data sits, who supervises the output, what is logged, and what happens when it is wrong. All six come out of this engagement as documents. Approval itself is yours to seek, and we will sit in the meeting if that helps.' },
        { q: 'How long does it take?', a: 'Six to eight weeks for a cloud deployment with private document Q&A and a supervised pilot. On-premises adds the hardware lead time, typically four to six weeks, and a longer testing period. Neither goes firm-wide until one team has used it on real work and the logs have been read.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'Where this leads.',
      items: [
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'The register, the policy, the data-flow map and the audit trail. Often the cheaper answer, and always bought alongside.', meta: P.governance },
        { href: '/industries/professional-services/', icon: 'brief', title: 'Professional services', text: 'How this lands in solicitors, accountants and advisory firms, with the supervision question answered.', meta: 'Sector page' },
        { href: '/industries/financial-services/', icon: 'bank', title: 'Financial services', text: 'IFAs, wealth and pensions firms, where suitability files and consumer duty shape what AI may touch.', meta: 'Sector page' },
      ],
    },
    {
      type: 'cta', h2: 'Tell us which clause is driving this.',
      text: 'Thirty minutes with the partner or director who owns the risk is usually enough to decide between a private deployment, an enterprise agreement, and a written policy. Two of those three are cheaper than this page.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
      note: 'Prices exclude VAT and exclude hosting, which is contracted in your own name.',
    },
  ],
};
