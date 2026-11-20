const S = require('../site');
const P = S.PRICE;

/* Small business AI pricing. DRAFT 2026-11-19. One ladder, every price. */
module.exports = {
  slug: 'small-business-ai-pricing',
  title: 'Small Business AI Pricing UK: Every Price Published | Revio',
  description: 'Every REVIO AI Assist price on one page: Clear Desk Solo from £495 setup and £75 a month, Team from £1,950, Business from £4,500. Add-ons and running costs too.',
  keywords: ['ai assistant pricing uk', 'small business ai cost', 'ai receptionist price uk', 'how much does ai automation cost small business', 'ai setup fee monthly plan'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }, { label: 'AI Assist', href: '/ai-assist/' }],
  crumbLabel: 'Pricing',
  art: 'layers',
  badge: 'REVIO AI Assist pricing',
  h1: 'Every price, <em class="mint">on one page.</em>',
  sub: 'Flo, the assistant in every Clear Desk package, answers your phone, sorts your inbox and chases your invoices. Most UK agencies selling AI to small businesses hide their prices. Fewer than half publish any. We publish all of ours, including the running costs and the things that cost extra, because a business owner should be able to work out the sum before a sales call.',
  ctas: [
    { label: 'Book a 20-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'Back to the packages', href: '/ai-assist/', style: 'ghost' },
  ],
  heroProof: ['Setup fee once, monthly plan after', 'All prices exclude VAT', 'Cancel the monthly plan any time'],
  service: { name: 'REVIO AI Assist', type: 'Pricing', price: P.assist_solo_setup_num },
  sections: [
    {
      type: 'intro', kicker: 'How the pricing works',
      h2: 'One fee to set it up, one plan to keep it running, nothing else hidden.',
      body: [
        'Every Clear Desk package has two numbers. The setup fee pays for us to connect Flo to your phone, inbox, diary, invoicing and customer list, teach it your tone and your prices, write the rules for what it may do alone, train you or your team, and supervise the first fortnight. The monthly plan pays for Flo\'s running costs, monitoring so we know when something breaks before you do, fixes, and changes as your business shifts.',
        'Prices are "from" because a ten-person firm on three sites is more work than a sole trader with one phone. We give you the exact figure on the first call and it does not move during the setup. There is no day rate, no minimum term on the plan, and every account, licence and line of code is in your name from day one.',
      ],
    },
    {
      type: 'tiers', kicker: 'The three packages', h2: 'Pick the size of business.',
      items: [
        { name: 'Clear Desk Solo', price: P.assist_solo_setup, per: 'setup', cadence: `then ${P.assist_solo_month} a month`, text: 'Sole traders and owner-operators. Live in about a week.', includes: ['Phone answered, jobs booked', 'Inbox sorted, replies drafted', 'Invoices chased until paid', 'Quotes drafted from calls', 'Diary kept, reminders sent', 'Simple customer list', 'One hour training, one-page guide', 'Plan: running costs, monitoring, one change a month'], best: 'one person, perhaps an apprentice or a partner', href: '/ai-assist/clear-desk-solo/', cta: 'See Solo' },
        { name: 'Clear Desk Team', price: P.assist_team_setup, per: 'setup', cadence: `then ${P.assist_team_month} a month`, text: 'Two to ten staff. Live in two to three weeks.', includes: ['Everything in Solo, for each person', 'Shared enquiry inbox answered in minutes', 'Forms and social messages connected', 'CRM connected or set up', 'Monday numbers', 'Monthly marketing drafts', 'Two-hour team session', 'Plan: up to three changes a month, 90-day review'], featured: true, flag: 'Most popular', best: 'a 2 to 10 person business', href: '/ai-assist/clear-desk-team/', cta: 'See Team' },
        { name: 'Clear Desk Business', price: P.assist_business_setup, per: 'setup', cadence: `then ${P.assist_business_month} a month`, text: 'Ten to forty staff. Live in three to four weeks.', includes: ['Everything in Team, for each person', 'Enquiry to quote to invoice, end to end', 'Customer answers 24/7', 'Staff answers from your policies', 'Rules, access policy, audit trail', 'Half-day training', 'Plan: unlimited small changes', 'Monthly review and roadmap'], best: 'a 10 to 40 person business', href: '/ai-assist/clear-desk-business/', cta: 'See Business' },
      ],
      note: 'All exclude VAT. Setup fees are credited against the next package up if you upgrade within a year.',
    },
    {
      type: 'table', tone: 'wash', kicker: 'Add-ons', h2: 'Things that cost extra, priced in advance.',
      head: ['Add-on', 'Price', 'What it is'],
      rows: [
        ['Health Check', P.assist_check, '90 minutes with you, a list of the ten jobs to hand over first and which package fits. Credited against any package booked within 60 days.'],
        ['Extra automated job', P.assist_job, 'A new job Flo takes on outside the package, for example stock reordering or a tender tracker. Scoped and fixed before we start.'],
        ['Team training, half day', P.training_half, 'For teams that want more than the session included, or a refresher when new people join.'],
        ['Team training, full day', P.training_day, 'A full day on site, usually for Business clients rolling out to several sites.'],
        ['Extra call minutes', 'At cost', 'Each plan includes a normal volume of answered calls for its size. Beyond that, minutes are passed through at cost and shown on the invoice.'],
        ['Extra users on a plan', 'Quoted', 'Team covers up to ten people, Business up to about forty. Beyond that we quote, or move you to the next package.'],
      ],
      note: 'If something is not on this page, it is not something we charge for.',
    },
    {
      type: 'table', kicker: 'Running costs', h2: 'What you pay other people, shown honestly.',
      head: ['Cost', 'Typical range', 'Who you pay'],
      rows: [
        ['Flo (the assistant)', 'Included in your monthly plan', 'Us. The plan covers Flo\'s running costs at normal volume.'],
        ['Phone line or number', 'Usually what you already pay', 'Your existing provider. We answer on your existing number.'],
        ['Email, calendar, invoicing, CRM', 'Usually what you already pay', 'Your existing providers. We connect to what you have.'],
        ['Simple customer list, if you have none', 'Included', 'Us. Set up as part of Solo and Team if you have nothing.'],
        ['Automation tooling', '£0 to about £20 a month', 'The tool, in your name. Only when a package needs it. We say so on the first call.'],
      ],
      note: 'Every account is in your name. If you stop the plan you keep the accounts, the data and the written guide. Flo keeps working for as long as you keep paying the underlying tools yourself.',
    },
    {
      type: 'checks', tone: 'wash', kicker: 'Included and not', h2: 'What every package includes, and what none of them does.',
      groups: [
        { title: 'Every package includes', items: ['Setup done by us, not a kit', 'Your tone learned from your own messages', 'Written rules for what Flo does alone and what you approve', 'A supervised first fortnight', 'A written guide and training', 'A 30-day check-in', 'Accounts, data and code in your name'] },
        { title: 'No package includes', items: ['Taking or refunding payments', 'Signing anything on your behalf', 'A fully unattended setup with no human check', 'Flo pretending to be a human colleague', 'Bespoke software beyond the package: see AI Build if you need it'] },
      ],
    },
    {
      type: 'table', kicker: 'Compared', h2: 'What this costs against the alternatives.',
      head: ['Option', 'Typical cost', 'What you get'],
      rows: [
        ['Clear Desk Solo', `${P.assist_solo_setup} then ${P.assist_solo_month} a month`, 'Phone, inbox, invoices, quotes and diary handled, you approve'],
        ['Part-time administrator, two days a week', 'About £1,000 to £1,400 a month', 'Two days of cover, holidays and sickness, no evenings or weekends'],
        ['Call answering service', '£50 to £250 a month', 'Messages taken, nothing booked, no inbox or invoices'],
        ['Typical UK AI agency monthly plan', 'About £250 a month, setup rarely published', 'Varies. Fewer than half publish a price at all'],
        ['Doing it yourself', 'Your weekends', 'A useful chat tool, usually not connected to your phone, invoicing or diary'],
      ],
      note: 'Administrator cost is an estimate from UK job adverts for part-time office roles. Agency figures from a 2026 survey of 277 UK AI agencies.',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions about the money.',
      items: [
        { q: 'Is the setup fee really the whole cost to get started?', a: 'Yes. The setup fee covers everything to go live: connections, training Flo, writing the rules, training you, and the supervised fortnight. The only other cost is the monthly plan, which starts when you go live. There is no day rate and no "discovery" fee. The Health Check is optional and is credited if you go ahead.' },
        { q: 'Why is every price "from"?', a: 'Because a sole trader with one phone and a forty-person firm with three sites are not the same job, and we would rather say so than publish a single number and add surprises later. We give you the exact figure on the first call. That figure is fixed for the setup and does not move.' },
        { q: 'Can I pay the setup fee monthly?', a: 'Solo is paid up front. Team and Business can be split in two: half to start, half on go-live. We do not offer longer finance; the point of these packages is that they are affordable without it.' },
        { q: 'What happens if I cancel the monthly plan?', a: 'You keep every account, the data, the written guide and the rules. Flo keeps working for as long as you keep paying the underlying tools yourself. What stops is our monitoring, fixes and changes. Most people who cancel do so because they have moved to the next package up.' },
        { q: 'Are there any usage charges?', a: 'Each plan includes a normal volume of answered calls and messages for its size. If your phone volume is unusually high, call minutes above that are passed through at cost and itemised on the invoice. We tell you on the first call if we think you will hit it. Email, invoicing and diary work carry no usage charge.' },
        { q: 'Do you charge VAT?', a: 'Yes. Every price on this page excludes VAT, which is added at the standard rate. If you are VAT registered you reclaim it as usual.' },
        { q: 'Is there a guarantee?', a: 'The supervised fortnight is the guarantee that matters: nothing goes to a customer that you have not seen until you are happy. If during setup it becomes clear the package will not do what we said on the first call, we stop and refund the balance. We do not promise a number of hours saved, because that depends on your week, but we show you the before and after in the 30-day check-in.' },
      ],
    },
    {
      type: 'related', kicker: 'Bigger businesses', h2: 'If you are past forty staff.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks to find where AI pays across departments. The right first step for larger firms.', meta: P.audit },
        { href: '/ai-implementation/', icon: 'build', title: 'AI Build & Implementation', text: 'A defined system built to a fixed price and date, for jobs outside the packages.', meta: P.build_from },
        { href: S.PRICING_URL, icon: 'pound', title: 'All Revio pricing', text: 'Every consultancy, build and retained price on the site.', meta: P.audit },
      ],
    },
    {
      type: 'cta', h2: 'Get the exact figure in 20 minutes.',
      text: 'Tell us the size of the business and how the phone, inbox and invoicing work today. We will tell you the package, the exact setup fee and the monthly plan on the call.',
      ctas: [{ label: 'Book a call', href: S.BOOK_URL, style: 'mint' }, { label: 'See the packages', href: '/ai-assist/', style: 'ghost' }],
      note: 'All prices exclude VAT. Cancel the monthly plan any time.',
    },
  ],
};
