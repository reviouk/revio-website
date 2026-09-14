const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'legacy-modernisation',
  title: 'Legacy Software Modernisation with AI | Revio',
  description: 'Replace an Access database, a spreadsheet operation or a dead SaaS tool. Discovery from £2,500, credited against the build, run alongside the old system.',
  keywords: ['legacy software modernisation uk', 'replace access database', 'replace excel with app', 'legacy system replacement smes', 'modernise old software'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'Legacy Modernisation',
  art: 'layers',
  badge: 'Legacy Modernisation',
  h1: 'The Access database from 2011 is still <em class="mint">running the business.</em>',
  sub: 'One person understands the spreadsheet. The supplier of the software you rely on shut down two years ago. Nobody wants to touch any of it in case it breaks. We replace it properly, run the old and new systems in parallel while your data moves across, and leave you with something the next person can actually maintain.',
  ctas: [
    { label: 'Book a discovery call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See how builds are priced', href: '/ai-app-development/', style: 'ghost' },
  ],
  heroProof: ['Discovery sprint from £2,500, credited against the build', 'Old and new systems run side by side until data matches', 'Built in your name, documented, no single point of failure'],
  service: { name: 'Legacy Modernisation', type: 'Discovery, migration and rebuild' },
  sections: [
    {
      type: 'intro', kicker: 'The pattern we keep meeting',
      h2: 'It was built for a much smaller business, a long time ago.',
      body: [
        'Somewhere in most businesses over about fifteen years old there is a system nobody would choose again: an Access database with the design decisions of the person who wrote it in 2009 still baked in, a spreadsheet passed between three people with macros nobody dares edit, or a piece of bought software from a vendor who has since gone quiet, stopped updating it, or shut down entirely. It works, in the way that a car with 200,000 miles works, until the day it does not.',
        'The risk is rarely the software itself. It is what sits behind it: one person who understands the whole thing, no real backup, no way to add a feature without breaking three others, and a growing business that has outgrown a tool built for a much smaller one. Modernising it is not really an IT project. It is removing a single point of failure from the business.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What we typically replace', h2: 'Four shapes of the same problem.',
      items: [
        { icon: 'data', title: 'Access & desktop databases', text: 'Single-user or fragile multi-user databases holding stock, orders, members or cases, usually on one machine, with no real audit trail or remote access.' },
        { icon: 'doc', title: 'Spreadsheet operations', text: 'A workflow run entirely in Excel or Google Sheets: quoting, scheduling, stock, payroll prep, with formulas only one person fully understands and no history of who changed what.' },
        { icon: 'warn', title: 'Discontinued SaaS', text: 'A subscription tool the vendor has stopped developing or supporting, still holding years of operational data with no clear export or migration path.' },
        { icon: 'layers', title: 'Ageing bespoke web apps', text: 'A custom system built ten or more years ago on a stack nobody maintains any more, too central to switch off, too fragile to extend with confidence.' },
      ],
    },
    {
      type: 'steps', kicker: 'How it runs', h2: 'Understand it before you touch it.',
      items: [
        { title: 'Discovery sprint', text: 'We map exactly what the current system does, including the undocumented parts: every report it produces, every workaround staff have built around it, and every place its data feeds into. Fee credited against the build.', meta: P.legacy_discovery },
        { title: 'Design', text: 'A plan for the replacement, sized honestly to what the business needs now, not a rebuild of every quirk of the old system out of habit.', meta: 'Weeks 2-3' },
        { title: 'Build', text: 'The new system built to a fixed price and date, in your own environment, with the data model designed to hold the volume you actually have.', meta: 'Weeks 3 onward' },
        { title: 'Migrate', text: 'Historical data moved and checked field by field, with the old and new systems run in parallel until every report matches and the team trusts the new one.', meta: 'Final weeks' },
        { title: 'Switch off the old one', text: 'Only once the parallel run has proven itself, on a date the business chooses, not one forced by a supplier closing down.', meta: 'Go-live' },
      ],
    },
    {
      type: 'tiers', kicker: 'Sized by scope', h2: 'Priced by what is actually being replaced.',
      lede: 'Every build follows a discovery sprint, so the price reflects the real system rather than a guess.',
      items: [
        { name: 'Single system', price: P.build_mid, per: 'one-off', text: 'One database or spreadsheet operation replaced with a proper connected app: one team, one core workflow.', includes: ['Discovery sprint included', 'Data migration and validation', 'Staff training on go-live', 'Documentation and handover'], href: S.BOOK_URL, cta: 'Talk about this' },
        { name: 'Multi-team platform', price: P.build_big, per: 'from', text: 'A discontinued tool or ageing bespoke app replaced across several teams, integrated with the CRM or finance system you already run.', includes: ['Everything in Single system', 'Integration with existing CRM or finance tools', 'Phased rollout across teams', 'Governance and access control built in'], best: 'businesses replacing a system several departments depend on', featured: true, href: S.BOOK_URL, cta: 'Talk about this' },
      ],
      note: 'Every price excludes VAT. The discovery fee is credited in full against whichever tier the build turns out to be.',
    },
    {
      type: 'split', tone: 'wash', art: 'layers', kicker: 'Why parallel running matters', h2: 'The old system does not get switched off on faith.',
      body: ['The riskiest moment in any migration is the day the old system is turned off. We do not schedule that day until the new system has been run alongside the old one long enough to prove every report, every total and every edge case matches. Staff use the new system for real work while the old one keeps running quietly behind it, so a discrepancy is caught before it costs anything.'],
      bullets: ['Every migrated record checked against the original, not sampled', 'Reports run from both systems and reconciled before cutover', 'A rollback plan in writing, even though it is rarely needed', 'Staff trained on the new system before the old one disappears'],
      ctas: [{ label: 'Book a discovery call', href: S.BOOK_URL, style: 'dark' }],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and who it is not.',
      yes: { title: 'A good fit', items: ['A core system that is fifteen or more years old, or built on discontinued software', 'One person is the only one who understands how it works', 'The vendor has stopped supporting the tool you depend on', 'Growth is now limited by what the old system can hold or do'] },
      no: { title: 'Not this, yet', items: ['You want a brand new product with no existing system to replace, see AI App Development', 'The current system was built recently on a stack you can still hire for', 'Nobody can commit time to validate the migrated data'] },
    },
    {
      type: 'quote', tone: 'wash',
      text: 'The businesses most at risk are not the ones with no systems. They are the ones with one system, understood by one person, that everything else quietly depends on.',
      who: 'Revio', role: 'The team that builds and runs the work',
    },
    {
      type: 'checks', kicker: 'What is included', h2: 'What comes with a modernisation build.',
      groups: [
        { title: 'Included', items: ['Discovery sprint mapping the current system fully', 'A rebuilt system in your own environment and name', 'Field-by-field data migration and validation', 'Documentation and staff training'] },
        { title: 'Not included', items: ['Ongoing support beyond the agreed handover, available separately from £450 a month', 'New scope discovered after the build starts, quoted as a change'] },
      ],
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'What if we do not fully understand our own old system?', a: 'That is normal, and it is exactly what the discovery sprint is for. Most of the work in that phase is uncovering the undocumented logic, workarounds and reports that only exist in someone\'s head.' },
        { q: 'Do we have to migrate every field of historical data?', a: 'No. We agree with you what needs to move in full, what can be archived as read-only, and what is no longer relevant. Moving everything by default usually just carries old mess into the new system.' },
        { q: 'How long does the old and new system run in parallel?', a: 'Typically two to four weeks, long enough to cover a full reporting cycle. It ends when every check reconciles, not on a fixed date.' },
        { q: 'What happens if the vendor of our current tool has already shut down?', a: 'We work from whatever export or database access still exists. The sooner this starts after a shutdown notice, the more of the original data and configuration we can recover.' },
        { q: 'Will the new system look like the old one?', a: 'Only where that helps. We rebuild the workflow to how the business actually runs today, not a pixel copy of a screen designed in 2011.' },
        { q: 'Can this connect to our CRM or accounting system?', a: 'Yes, that is usually the point. Most legacy replacements are also the moment a business finally gets its core data talking to the CRM and finance tools it already runs.' },
        { q: 'What does support look like afterwards?', a: `Run and support is available from ${P.run} a month, or the system can be handed over fully documented with no ongoing contract, whichever suits you.` },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: '/ai-app-development/', icon: 'code', title: 'AI Web & App Development', text: 'The build methodology behind every modernisation, for teams that already know what they want.', meta: P.build_from },
        { href: '/ai-opportunity-audit/', icon: 'audit', title: 'AI Opportunity Audit', text: 'If the legacy system is one of several problems, the audit ranks where to start.', meta: P.audit },
        { href: '/ai-governance-compliance/', icon: 'shield', title: 'AI Governance & Compliance', text: 'For regulated businesses that need the data handling documented alongside the rebuild.', meta: P.governance },
      ],
    },
    {
      type: 'cta', h2: 'Find out what it would take to finally replace it.',
      text: 'A discovery call costs nothing to book. If a full modernisation is not the right next step, we will say so.',
      ctas: [{ label: 'Book a discovery call', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
