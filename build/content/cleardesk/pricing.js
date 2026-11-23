const S = require('../../site');
const P = S.PRICE;
const C = S.CLEARDESK;

/* Small business AI pricing. DRAFT 2026-11-19. One ladder, every price. */
module.exports = {
  slug: 'cleardesk/pricing',
  title: 'Over to Flo Pricing: Every Price Published | by LeadSignal',
  description: 'Every Over to Flo price on one page: Flo Solo from £295 setup and £99 a month, Team from £1,950, Business from £4,500. Add-ons and running costs too.',
  keywords: ['ai assistant pricing uk', 'small business ai cost', 'ai receptionist price uk', 'how much does ai automation cost small business', 'ai setup fee monthly plan'],
  art: 'layers',
  heroImage: { src: '/img/flo/flo.webp', alt: 'Flo, your AI assistant', say: 'Every price is on this page.' },
  badge: 'Over to Flo pricing',
  h1: 'Simple, <em class="mint">clear pricing.</em>',
  sub: 'One fee to set Flo up, then a monthly plan to keep it running. Every price is on this page.',
  ctas: [
    { label: 'Book a 20-minute call', href: C.BOOK_URL, style: 'mint' },
    { label: 'Back to the packages', href: '/', style: 'ghost' },
  ],
  heroProof: ['Setup fee once, monthly plan after', 'Every extra priced in advance', 'Cancel the monthly plan any time'],
  service: { name: 'Over to Flo', type: 'Pricing', price: P.assist_solo_setup_num },
  sections: [
    {
      type: 'intro', kicker: 'How the pricing works',
      h2: 'One fee to set it up, one plan to keep it running, nothing else hidden.',
      body: [
        'Every package has two numbers. The setup fee pays for us to connect Flo to your phone, diary, invoicing, customer list and inbox, teach it your tone and your prices, write the rules for what it may do alone, train you or your team, and supervise the first fortnight. The monthly plan pays for Flo\'s running costs, monitoring, support, and changes as your business shifts.',
        'Prices are "from" because a ten-person company on three sites is more work than a sole trader with one phone. We give you the exact figure on the first call and it does not move during the setup. There is no day rate, no minimum term on the plan, and every account, licence and line of code is in your name from day one.',
      ],
    },
    {
      type: 'tiers', kicker: 'The three packages', h2: 'Pick the size of business.',
      items: [
        { name: 'Flo Solo', price: P.assist_solo_setup, per: 'setup', cadence: `then ${P.assist_solo_month} a month`, text: 'Sole traders and owner-operators. Live in about a week.', includes: ['Phone answered, jobs booked', 'Inbox sorted, replies drafted', 'Invoices chased until paid', 'Quotes drafted from calls', 'Diary kept, reminders sent', 'Simple customer list', 'One hour training, one-page guide', 'Plan: 250 call minutes, monitoring, one change a month'], best: 'one person, perhaps an apprentice or a partner', href: '/solo/', cta: 'See Solo' },
        { name: 'Flo Team', price: P.assist_team_setup, per: 'setup', cadence: `then ${P.assist_team_month} a month`, text: 'Two to ten staff. Includes two people, then £35 a person a month. Live in two to three weeks.', includes: ['Everything in Solo, plus email, for each person', 'Shared enquiry inbox answered in minutes', 'Forms and social messages connected', 'CRM connected or set up', 'Monday numbers', 'Monthly marketing drafts', 'Two-hour team session', 'Plan: 300 call minutes, up to three changes a month, 90-day review'], featured: true, flag: 'Most popular', best: 'a 2 to 10 person business', href: '/team/', cta: 'See Team' },
        { name: 'Flo Business', price: P.assist_business_setup, per: 'setup', cadence: `then ${P.assist_business_month} a month`, text: 'Ten to forty staff. Includes ten people, then £30 a person a month. Live in three to four weeks.', includes: ['Everything in Team, for each person', 'Enquiry to quote to invoice, end to end', 'Customer answers 24/7', 'Staff answers from your policies', 'Rules, access policy, audit trail', 'Half-day training', 'Plan: 800 call minutes, up to six small changes a month', 'Monthly review and roadmap'], best: 'a 10 to 40 person business', href: '/business/', cta: 'See Business' },
      ],
      note: 'Setup fees are credited against the next package up if you upgrade within a year. Solo is one person, and can be paid yearly: £990 a year, two months free. Team includes two people and Business ten; each extra person is priced below.',
    },
    {
      type: 'table', tone: 'wash', kicker: 'Add-ons', h2: 'Things that cost extra, priced in advance.',
      head: ['Add-on', 'Price', 'What it is'],
      rows: [
        ['Extra automated job', P.assist_job, 'A new job Flo takes on outside the package, for example stock reordering or a tender tracker. Scoped and fixed before we start.'],
        ['Team training, half day', P.training_half, 'For teams that want more than the session included, or a refresher when new people join.'],
        ['Team training, full day', P.training_day, 'A full day on site, usually for Business clients rolling out to several sites.'],
        ['Extra person on Team', `${P.assist_team_person} a month, ${P.assist_team_person_setup} at setup`, 'Team includes two people. Each extra person gets their own inbox sorted, replies drafted and a place in the rules, up to ten people. A ten-person Team is £525 a month.'],
        ['Extra person on Business', `${P.assist_business_person} a month, ${P.assist_business_person_setup} at setup`, 'Business includes ten people. Each extra person up to forty. A forty-person Business is £1,495 a month, still less than one part-time administrator.'],
        ['Solo yearly option', `${P.assist_solo_year} a year`, 'Instead of the monthly plan: two months free. The setup fee is separate.'],
        ['Extra call minutes on Solo', `${P.assist_solo_pack} for 100`, 'Solo includes 250 answered call minutes a month. If you need more, you buy packs of 100 for £15. There is no per-minute charge on Solo.'],
        ['Extra call minutes on Team and Business', `${P.assist_overage} a minute`, 'Team includes 300 answered call minutes a month and Business 800. Above that, minutes are itemised on the invoice at a flat 15p. Most clients never reach the allowance.'],
      ],
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
        ['Flo Solo', `${P.assist_solo_setup} then ${P.assist_solo_month.replace('From', 'from')} a month`, 'Phone, inbox, invoices, quotes and diary handled, you approve'],
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
        { q: 'Is the setup fee really the whole cost to get started?', a: 'Yes. The setup fee covers everything to go live: connections, training Flo, writing the rules, training you, and the supervised fortnight. The only other cost is the monthly plan, which starts when you go live. There is no day rate and no "discovery" fee.' },
        { q: 'Why is every price "from"?', a: 'Because a sole trader with one phone and a forty-person company with three sites are not the same job, and we would rather say so than publish a single number and add surprises later. We give you the exact figure on the first call. That figure is fixed for the setup and does not move.' },
        { q: 'Can I pay the setup fee monthly?', a: 'Solo is paid up front. Team and Business can be split in two: half to start, half on go-live. We do not offer longer finance; the point of these packages is that they are affordable without it.' },
        { q: 'What happens if I cancel the monthly plan?', a: 'You keep every account, the data, the written guide and the rules. Flo keeps working for as long as you keep paying the underlying tools yourself. What stops is our monitoring, support and changes. Most people who cancel do so because they have moved to the next package up.' },
        { q: 'Are there any usage charges?', a: 'Two, both published. Each plan includes a monthly allowance of answered call minutes: 250 on Solo, 300 on Team, 800 on Business. On Solo, extra minutes come in packs of 100 for £15; on Team and Business they are itemised at 15p each. And Team and Business are priced per person beyond the people included: £35 a month each on Team after the first two, £30 on Business after the first ten. Email, invoicing and diary work carry no usage charge, however busy you are.' },
        { q: 'Why per person on Team and Business, but not Solo?', a: 'Because the running cost follows the people. Every extra person is another inbox sorted, another set of replies drafted and another share of the phone. Solo is one person and one phone, and a sole trader with an apprentice is still one phone. The moment there are two inboxes to sort, that is Team.' },
        { q: 'Is there a guarantee?', a: 'The supervised fortnight is the guarantee that matters: nothing goes to a customer that you have not seen until you are happy. If during setup it becomes clear the package will not do what we said on the first call, we stop and refund the balance. We do not promise a number of hours saved, because that depends on your week, but we show you the before and after in the 30-day check-in.' },
      ],
    },
    {
      type: 'related', kicker: 'The packages', h2: 'Read the one that fits.',
      items: [
        { href: '/solo/', icon: 'phone', title: 'Flo Solo', text: 'For anyone who is the whole business. Phone, inbox, invoices, quotes, diary.', meta: P.assist_solo_setup },
        { href: '/team/', icon: 'people', title: 'Flo Team', text: 'Two to ten staff. Enquiries, numbers and marketing handled.', meta: P.assist_team_setup },
        { href: '/business/', icon: 'layers', title: 'Flo Business', text: 'Ten to forty staff. Enquiry to cash, end to end, with a monthly review.', meta: P.assist_business_setup },
      ],
    },
    {
      type: 'cta', h2: 'Get the exact figure in 20 minutes.',
      text: 'Tell us the size of the business and how the phone, inbox and invoicing work today. We will tell you the package, the exact setup fee and the monthly plan on the call.',
      ctas: [{ label: 'Book a call', href: C.BOOK_URL, style: 'mint' }, { label: 'See the packages', href: '/', style: 'ghost' }],
      note: 'Cancel the monthly plan any time.',
    },
  ],
};
