const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'knowledge-hub',
  title: 'Knowledge Hub: AI &amp; CRM Guides for UK SMEs | Revio',
  description: 'Every AI, CRM, HubSpot and RevOps guide we have published, sorted into four pillars: strategy, implementation, industry and training. Start where you are.',
  keywords: ['ai knowledge hub', 'ai guides for uk smes', 'ai implementation guides', 'crm guides uk', 'hubspot guides', 'revops guides'],
  crumbs: [],
  crumbLabel: 'Knowledge Hub',
  art: 'layers',
  badge: 'Knowledge Hub',
  h1: 'Everything we have written about AI and CRM, <em class="mint">sorted so you can use it</em>.',
  sub: 'Years of guides on AI, CRM, HubSpot and RevOps, most of it written for the same problem: a business that knows AI matters and cannot find the hour to work out where it pays. Four pillars, real articles, no gated forms.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'Start with the audit', href: S.AUDIT_URL, style: 'ghost' },
  ],
  heroProof: ['60+ guides, all free to read', 'Written by the team that builds the systems', 'No email required to read a single page'],
  sections: [
    {
      type: 'intro', kicker: 'Why this page exists',
      h2: 'Most AI content is written to sell a course. This is written to answer a question.',
      body: [
        'Search "AI for small business" and you get the same six hundred words rewritten by forty agencies, none of whom have shipped anything. Everything linked from this page was written by people who built the thing it describes: a CRM lead-scoring model, a document-reading agent, a DM inbox that qualifies and books. Some of it is about our own product, LeadSignal, because it is the system we know best and the one we run every day. Most of it is not.',
        'The hub is split into four pillars. Strategy is for the "where do we even start" question — RevOps, attribution, scoring, the shape of the decision before any tool gets chosen. Implementation is for once you have decided and need the CRM, the integration or the automation actually built and wired in. Industry is comparison and buying material — CRM platforms, pricing, what a fair contract looks like. Training is for the team that has to live with what gets built: reporting, adoption, accountability, the habits that make a system stick.',
      ],
    },
    {
      type: 'pillars', kicker: 'Four pillars', h2: 'Pick the shelf that matches your question.',
      lede: 'Every link goes to a real, published article on this site.',
      items: [
        {
          icon: 'target', title: 'Strategy',
          text: 'The thinking that has to happen before you buy or build anything: where AI pays, how attribution and RevOps fit together, and what "good" looks like.',
          links: [
            { href: '/ai-crm-software-guide/', label: 'AI CRM Software Explained: What an AI-Powered CRM Actually Does (2026 Guide)' },
            { href: '/what-is-revops-revenue-operations/', label: 'What Is RevOps and Why Every Growing Business Needs It' },
            { href: '/revops-small-teams-hubspot/', label: 'RevOps for Small Teams: How to Align Sales and Marketing When You’re Wearing Every Hat' },
            { href: '/crm-revenue-attribution-social/', label: 'CRM Revenue Attribution: Tracking Every Lead from First DM to Closed Revenue' },
            { href: '/closing-the-loop-ad-spend-revenue-attribution/', label: 'Closing the Loop: Why Most Businesses Can’t Connect Their Ad Spend to Actual Revenue' },
            { href: '/ai-call-analysis-sales-marketing-attribution/', label: 'How AI Call Analysis Is Changing Sales and Marketing Attribution Forever' },
            { href: '/hubspot-account-based-marketing-abm-strategy-setup/', label: 'Hubspot Account Based Marketing (ABM) Strategy &amp; Setup Guide' },
          ],
        },
        {
          icon: 'build', title: 'Implementation',
          text: 'Once the decision is made, this is how the CRM, the integration or the automation actually gets built and kept clean.',
          links: [
            { href: '/hubspot-custom-integrations-guide/', label: 'The Complete Guide to HubSpot Custom Integrations for Growing Businesses' },
            { href: '/hubspot-single-source-of-truth/', label: 'How to Build a Single Source of Truth with HubSpot (Even on Starter)' },
            { href: '/hubspot-crm-data-hygiene-cleanup/', label: 'CRM Data Hygiene: How to Clean Up Your HubSpot and Keep It That Way' },
            { href: '/crm-workflow-automation-guide/', label: 'CRM Workflow Automation: 7 Automations Every Sales Team Should Run' },
            { href: '/multiple-deal-pipelines-custom-objects/', label: 'Multiple Deal Pipelines and Custom Objects: Structuring Your CRM as You Grow' },
            { href: '/crm-email-sequences-follow-up/', label: 'CRM Email Sequences: How to Build Follow-Up That Runs Until the Lead Replies' },
            { href: '/ai-crm-data-entry-ai-properties/', label: 'AI Properties: How LeadSignal CRM Ends Manual Data Entry for Good' },
            { href: '/crm-ai-agent-connected-inbox/', label: 'The CRM AI Agent: Auto-Logged Email, Drafted Replies and Inbox Zero for Sales Teams' },
          ],
        },
        {
          icon: 'chart', title: 'Industry',
          text: 'Platform comparisons and buying guides, written to be checked rather than believed: what things actually cost and where they fall down.',
          links: [
            { href: '/hubspot-vs-salesforce-dynamics-zoho-crm-comparison/', label: 'HubSpot vs Salesforce vs Dynamics 365 vs Zoho: The Honest CRM Comparison for Growing Businesses' },
            { href: '/leadsignal-crm-vs-hubspot/', label: 'LeadSignal CRM vs HubSpot: An Honest Comparison for Small and Mid-Sized Teams' },
            { href: '/best-crm-for-small-business/', label: 'The Best CRM for Small Business in 2026: What to Look For (and What to Avoid)' },
            { href: '/how-much-does-a-crm-cost/', label: 'How Much Does a CRM Cost in 2026? Real Pricing, Hidden Fees and a Sanity Check' },
            { href: '/how-to-choose-a-crm-free-trial/', label: 'How to Choose a CRM: A 14-Day Free-Trial Evaluation Plan That Actually Works' },
            { href: '/instagram-facebook-dm-crm/', label: 'Instagram &amp; Facebook DMs in Your CRM: How to Stop Losing Leads in the Inbox' },
            { href: '/crm-with-unlimited-users/', label: 'CRM with Unlimited Users: Why Flat-Price Beats Per-Seat for Growing Teams' },
          ],
        },
        {
          icon: 'training', title: 'Training',
          text: 'For the team that has to live with the system day to day: the reports worth running, the habits that hold, the adoption problem nobody plans for.',
          links: [
            { href: '/crm-reports-dashboards-guide/', label: 'CRM Reports and Dashboards: The 5 Reports Every Sales Team Should Run Weekly' },
            { href: '/hubspot-starter-sales-reports/', label: 'Sales Reporting in HubSpot Starter: 5 Reports You Can Build Today' },
            { href: '/advanced-hubspot-reporting/', label: 'Advanced Hubspot Reporting: Building Reports for Insights' },
            { href: '/sales-accountability-crm-hubspot/', label: 'How to Hold Sales Accountable Using CRM Data (Without Micromanaging)' },
            { href: '/lead-handoff-process-hubspot/', label: 'How to Build a Lead Handoff Process That Sales Will Actually Follow' },
            { href: '/crm-lead-scoring-guide/', label: 'CRM Lead Scoring Explained: From 0–100 Scores to a Priority List Your Team Trusts' },
            { href: '/how-to-implement-hubspot-scoring-a-comprehensive-guide/', label: 'How to Implement HubSpot Scoring: A Comprehensive Guide for HubSpot Consultants' },
            { href: '/hubspots-new-ai-tools-breeze-co-pilot/', label: 'HubSpot’s New AI Tools &amp; Breeze Co-Pilot' },
          ],
        },
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'Start here', h2: 'New to this? Read these three first.',
      lede: 'If you read nothing else on this page, these three cover the shape of the decision.',
      cols: 3,
      items: [
        { icon: 'chart', title: 'What an AI CRM actually does', text: 'The plain-English version of AI properties, agents and automation actions, before anyone tries to sell you a demo.', href: '/ai-crm-software-guide/' },
        { icon: 'target', title: 'Where AI pays in a small business', text: 'RevOps for teams without a RevOps department: four changes you can make in a week with the tools you already own.', href: '/revops-small-teams-hubspot/' },
        { icon: 'search', title: 'What it should cost', text: 'Real 2026 pricing for CRM and AI add-ons, hidden fees included, so the next quote you get can be checked against something.', href: '/how-much-does-a-crm-cost/' },
      ],
    },
    {
      type: 'faq', kicker: 'Before you book a call', h2: 'Questions people ask before working with an AI consultancy.',
      items: [
        { q: 'How much does AI consultancy cost for a small business?', a: `Ours starts at ${P.audit} for a two-week AI Opportunity Audit that tells you where AI pays and what it would cost to build. Ongoing work runs from ${P.lead_1} a month for an embedded lead, or ${P.build_from} for a single fixed-price build. Every figure is published; there is no day-rate quote that changes once you are through the door.` },
        { q: 'How long does an AI implementation take?', a: 'A single automation is usually two to four weeks from a clear brief. A connected system that touches your CRM and a few tools runs six to ten weeks. We build in fortnights and ship each piece as it is ready, rather than holding everything for one big launch.' },
        { q: 'What happens to our data?', a: 'It stays in your systems, in your name. We do not train models on client data, and any AI vendor we introduce is written into a data-flow map before it is switched on, so you can see exactly what it can see and do. Tooling licences transfer to you at the end of an engagement.' },
        { q: 'How do we measure ROI on an AI project?', a: 'Before anything is built we agree the number that will move: hours returned, replies answered, leads booked, days off a debtor cycle. That number is reported monthly against a baseline, so "did it work" has an answer rather than an opinion.' },
        { q: 'Which AI model should we use, Claude, ChatGPT or Copilot?', a: 'It depends on where your team already works and what the task needs, not which one is loudest this month. We are agnostic and have shipped production systems on all three; the AI Opportunity Audit includes a recommendation with the reasoning shown, not asserted.' },
        { q: 'Do we need a CRM before we can use AI?', a: 'Usually yes, in some form. Most of the automations that pay — enquiry triage, scoring, follow-up, reporting — need one system of record to write to. If you do not have one, or the one you have is unreliable, that is often the first thing the audit flags, and it is a smaller job than people expect.' },
      ],
    },
    {
      type: 'related', kicker: 'Where to go next', h2: 'The three pages this hub points back to.',
      items: [
        { href: S.AUDIT_URL, icon: 'audit', title: 'AI Opportunity Audit', text: 'Two weeks, fixed fee, a ranked list of where AI pays in your business.', meta: P.audit },
        { href: S.LEAD_URL, icon: 'lead', title: 'Embedded AI Lead', text: 'A senior AI lead inside your team, part-time, building from the backlog every month.', meta: P.lead_1 },
        { href: S.PRICING_URL, icon: 'pound', title: 'Pricing', text: 'Every service on this site, with a published price and nothing held back for a call.' },
      ],
    },
    {
      type: 'cta', h2: 'Read enough. Talk about your own backlog.',
      text: 'A 30-minute call to look at what you already have and tell you honestly whether AI is the next move or not.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
