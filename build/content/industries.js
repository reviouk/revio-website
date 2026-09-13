const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'industries',
  title: 'AI Consultancy by Industry UK | Revio',
  description: 'The same audit-first method applied across seven UK sectors: healthcare, logistics, financial services, professional services, recruitment, retail and SMEs.',
  keywords: ['ai consultancy by industry uk', 'industry ai solutions uk'],
  crumbLabel: 'Industries',
  art: 'network',
  badge: 'Industries',
  h1: 'One method, applied to <em class="mint">the sector you actually run</em>.',
  sub: 'The audit finds the process, the build ships it, the training makes it stick, the same as every other Revio engagement. What changes by sector is the data, the regulation, and the job that eats the most time. Pick yours below.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['Seven sectors, the same fixed-price audit', 'Regulation and data handling built in per sector', 'Every price published, nothing hidden in a day rate'],
  service: { name: 'AI by Industry', type: 'Industry hub', price: P.audit_num },
  sections: [
    {
      type: 'intro', kicker: 'Why sector matters',
      h2: 'The method is fixed. The starting point is not.',
      body: [
        'Every engagement we run starts the same way: find the one process where AI pays, build it, wire it into the systems the client already uses, run it supervised, then let it act alone. What differs from one business to the next is not the method, it is three things. The data is different, a dental patient record and a haulage POD are both documents an AI can read, but they carry different obligations. The regulation is different, Consumer Duty and the Equality Act do not apply to a florist, but GDPR special-category rules apply hard to a clinic. And the job that eats the most time is different in every sector, a recruiter loses hours to CV screening, a haulier loses hours to quoting.',
        'That is why we have built a page for each of the sectors we work in most, so before the first call you can see the jobs we already know are worth automating there, and the ones we would tell you to leave alone. If your business does not fit neatly into one of the seven below, the audit still works the same way, it just starts from a blank sheet rather than a sector we have already mapped.',
      ],
    },
    {
      type: 'cards', kicker: 'Pick your sector', h2: 'Seven industries, the same starting point.', cols: 3,
      items: [
        { icon: 'health', title: 'Healthcare & Dental', text: 'Enquiries, recall, treatment letters and reviews, with UK GDPR special-category data handled properly.', href: '/industries/healthcare-dental/' },
        { icon: 'truck', title: 'Logistics & Transport', text: 'Quoting, POD extraction, driver comms and compliance paperwork, wired into your TMS.', href: '/industries/logistics-transport/' },
        { icon: 'bank', title: 'Financial Services', text: 'Onboarding, fact-finds, meeting notes and Consumer Duty evidence, with the FCA in mind.', href: '/industries/financial-services/' },
        { icon: 'doc', title: 'Professional Services', text: 'Drafting from precedent, intake, time capture and proposals, with confidentiality first.', href: '/industries/professional-services/' },
        { icon: 'people', title: 'Recruitment', text: 'CV parsing, screening, job ads and scheduling, with the Equality Act treated seriously.', href: '/industries/recruitment/' },
        { icon: 'cart', title: 'Ecommerce & Retail', text: 'Customer service across channels, orders, returns and post-purchase flows.', href: '/industries/ecommerce-retail/' },
        { icon: 'clock', title: 'SMEs', text: 'Missed enquiries, quoting, admin and chasing invoices, starting with the audit.', href: '/industries/smes/' },
      ],
    },
    {
      type: 'steps', kicker: 'How a first project is chosen', h2: 'The same audit, whichever sector you are in.',
      items: [
        { title: 'A call on how the business actually runs', text: 'Thirty minutes on where the time goes today and what has already been tried, so we know whether the sector page above is really your shape or not.', meta: 'Week 0' },
        { title: 'The two-week audit', text: 'We watch the real processes, enquiries, documents, admin, whatever eats the time in your sector, and score each candidate on impact, effort and risk.', meta: 'Weeks 1–2' },
        { title: 'A ranked list with prices attached', text: 'The audit ends with a short report: what to build first, roughly what it costs, and what regulation or data handling it needs to respect.', meta: 'End of week 2' },
        { title: 'Build the first one, prove it, then decide', text: 'One process built and supervised before it runs alone. The decision to build a second, or bring in an Embedded AI Lead, comes after the first has paid for itself.', meta: 'Weeks 3 onward' },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask about sector-specific AI work.',
      items: [
        { q: 'What if my business does not fit one of these seven pages?', a: 'The method does not depend on the page. The audit starts from your actual processes rather than a template, so a business outside these seven sectors gets the same rigour, just without a page written about it yet.' },
        { q: 'Do you specialise in one sector?', a: 'No. We are an AI consultancy with an audit-first method that works across sectors, plus growing experience in the seven above. If a sector needs expertise we do not have, such as clinical or legal advice, we say so and stay in our lane.' },
        { q: 'Does sector experience change the price?', a: 'No, pricing is the same published rate regardless of sector: the audit is a fixed £1,500, and builds are quoted the same way whatever the industry.' },
        { q: 'Will you understand our regulation?', a: 'We map the regulation that applies to your build, UK GDPR, FCA Consumer Duty, the Equality Act, whichever is relevant, and build around it. We are not a substitute for your own compliance or legal advice.' },
        { q: 'How is data handled differently by sector?', a: 'Special-category health data, financial and pension data, and general commercial data all carry different obligations. This is mapped in the audit, before anything is built, specific to your sector and your actual systems.' },
        { q: 'Can two sectors overlap, such as a healthcare business that also sells retail products?', a: 'Yes, and it is common. The audit looks at your actual business rather than forcing you into one category, so a mixed business gets a mixed set of recommendations.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your business, whatever the sector.', meta: P.audit },
        { href: '/embedded-ai-lead/', icon: 'lead', title: 'Embedded AI Lead', text: 'A senior AI lead inside your team once the first process is proven, from one day a week.', meta: P.lead_1 },
        { href: '/ai-implementation/', icon: 'build', title: 'AI Build & Implementation', text: 'A defined system built to a fixed price and date, when you already know what you want.', meta: P.build_from },
      ],
    },
    {
      type: 'cta', h2: 'Find the one process where AI pays in your sector.',
      text: 'A 30-minute call on how your business actually runs. If AI is not the right answer yet, we will say so.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
