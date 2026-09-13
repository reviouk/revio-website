const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-roi-calculator',
  title: 'AI ROI Calculator for UK Businesses: Hours and Revenue Back | Revio',
  description: 'Work out what AI would return in your business in two minutes: hours back each week, enquiries recovered, payback on the first build, and which price fits.',
  keywords: ['ai roi calculator', 'ai savings calculator uk', 'ai automation roi', 'how much can ai save my business', 'ai cost benefit calculator'],
  crumbLabel: 'AI ROI calculator',
  art: 'calc',
  badge: 'Calculator',
  h1: 'What would AI actually <em class="mint">return in your business</em>?',
  sub: 'Eight sliders, no email gate. Put in how many people do repetitive work, what it costs, and how many enquiries slip. The calculator shows hours back, revenue recovered, payback on the first build, and which of our published prices fits the size of the answer.',
  ctas: [
    { label: 'Go to the calculator', href: '#calculator', style: 'mint' },
    { label: 'See every price', href: S.PRICING_URL, style: 'ghost' },
  ],
  heroProof: ['Nothing stored until you choose to send it', 'Conservative defaults', 'Maps onto real prices, not a quote'],
  sections: [
    {
      type: 'calculator', kicker: 'The calculator', h2: 'Move the sliders. The answer updates as you go.',
      lede: 'Defaults are a four-person office team with a modest enquiry flow. Change everything.',
    },
    {
      type: 'intro', tone: 'wash', kicker: 'How the maths works', h2: 'Two numbers, added together, with the optimism taken out.',
      body: [
        'The first number is labour. People, multiplied by the hours each spends a week on repetitive work, multiplied by the share AI can realistically take, multiplied by loaded hourly cost, over 46 working weeks. We see 40 to 70 per cent on the jobs that make an audit shortlist; the default is 50.',
        'The second is revenue. Enquiries a month, multiplied by the share missed or answered late, with only 60 per cent of those treated as recoverable even with instant answers, multiplied by your close rate and the first-year value of a customer. Nothing is counted for quality, staff retention, growth or the things people say AI will do but nobody measures.',
        'Payback divides the price of the first sensible step from our published ladder by the monthly return. Under about £12,000 a year the honest suggestion is the audit alone. Above about £110,000 the fit is usually an Embedded AI Lead rather than a one-off build, because at that size the backlog does not stop at one item.',
      ],
    },
    {
      type: 'cards', kicker: 'What the answer means', h2: 'Three results, and what we would say to each.', cols: 3,
      items: [
        { icon: 'audit', title: 'Under £12,000 a year', text: 'Do the audit, ' + P.audit + '. It may find one thing worth automating, or it may say do two small things yourself and keep your money. Both are good outcomes.' },
        { icon: 'build', title: '£12,000 to £110,000', text: 'One or two builds, ' + P.build_from + ' to ' + P.build_mid + ' each, in order of payback. Usually enquiry handling first, then whichever document or quoting job is eating the most skilled hours.' },
        { icon: 'lead', title: 'Over £110,000', text: 'An Embedded AI Lead, ' + P.lead_1 + ' to ' + P.lead_3 + ' a month. At this size the list is long enough that it needs an owner, and the return pays for the seat several times over.' },
      ],
    },
    {
      type: 'form', tone: 'wash', variant: 'contact', formId: 'calculator', carry: true, kicker: 'Send the numbers',
      h2: 'Want Rob to sanity-check the result?', lede: 'The calculator figures come with the form. You get a reply within one working day saying whether the number looks right for your kind of business, and what we would do first.',
      points: ['Your slider values travel with the message', 'One reply from a person', 'No sequence, no follow-up bot'],
    },
    {
      type: 'faq', kicker: 'About the numbers', h2: 'Questions about the calculator.',
      items: [
        { q: 'Where do the default percentages come from?', a: 'From audits we have run and the systems we operate. On the processes that make a shortlist, AI typically takes 40 to 70 per cent of the hours, because the remaining share is judgement, exceptions and conversations that should stay human. The recovery rate on missed enquiries is capped at 60 per cent because some of those people were never going to buy.' },
        { q: 'Why does it not count quality or growth?', a: 'Because nobody can measure them in advance, and a calculator that counts them is a sales tool. Hours and enquiries are things you can check against your own payroll and inbox.' },
        { q: 'Is the payback figure a quote?', a: 'No. It divides a published starting price by your monthly return, to show the order of magnitude. A real price comes after the audit or a scoping session, and is fixed before any work starts.' },
        { q: 'What loaded hourly cost should I use?', a: 'Salary plus employer National Insurance, pension and overhead, divided by about 1,600 working hours a year. A £35,000 salary lands near £26 an hour loaded; £50,000 near £37; a director at £90,000 near £66.' },
        { q: 'Does the calculator store anything?', a: 'Nothing, unless you send the form. The sliders run entirely in your browser. If you send the form, the values go with the message so we can talk about the same numbers.' },
        { q: 'My result is small. Is AI not for us?', a: 'Possibly, and that is a fine answer. Small results usually mean the repetitive work is already thin or the enquiry flow is low. The audit can still be worth it if you suspect the sliders are hiding something, but we would not push it.' },
      ],
    },
    {
      type: 'related', kicker: 'Next', h2: 'What the sizes point to.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks to a ranked list with real pounds against each item.', meta: P.audit },
        { href: '/ai-implementation/', icon: 'build', title: 'AI Build & Implementation', text: 'Fixed price, fixed date, wired into the CRM you already run.', meta: P.build_from },
        { href: S.LEAD_URL, icon: 'lead', title: 'Embedded AI Lead', text: 'A senior AI lead inside your team, one to three days a week.', meta: P.lead_1 + ' a month' },
      ],
    },
    {
      type: 'cta', h2: 'Rather talk it through?',
      text: 'Thirty minutes on Teams. Bring the calculator result and we will tell you whether it looks right.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Every price', href: S.PRICING_URL, style: 'ghost' }],
    },
  ],
};
