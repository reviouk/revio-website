/* Site-wide constants shared by the generator and the content files.
 * One place for every URL the copy links to, so a change of booking page or
 * form is one edit rather than forty. */
module.exports = {
  ORIGIN: 'https://revio.agency',
  BRAND: 'Revio',
  BOOK_URL: '/book-a-meeting/',          // Microsoft Bookings, rob@revio.agency (Teams)
  /* The Microsoft Bookings page for rob@revio.agency. Empty until Rob pastes
     it (Bookings > Booking page > 'Copy link'); the booking block shows the
     enquiry route meanwhile. */
  BOOKINGS_EMBED: 'https://outlook.office.com/book/REVIO1@revio.agency/',
  AUDIT_URL: '/ai-opportunity-audit/',
  CONTACT_URL: '/contact/',
  CALC_URL: '/ai-roi-calculator/',
  PRICING_URL: '/pricing/',
  SERVICES_URL: '/ai-services/',
  INDUSTRIES_URL: '/industries/',
  WORK_URL: '/work/',
  LEAD_URL: '/embedded-ai-lead/',
  EMAIL: 'grow@revio.agency',
  /* The contained Clear Desk site. Pages under build/content/cleardesk/
     build into public-cleardesk/ with these overrides and no links back
     to the corporate site (Rob, 20 Nov 2026). */
  CLEARDESK: {
    ORIGIN: 'https://cleardesk.revio.agency',
    SITE_NAME: 'Clear Desk by REVIO',
    BOOK_URL: '/book/',
    CONTACT_URL: '/book/',
    PRICING_URL: '/pricing/',
    SERVICES_URL: '/',
    AUDIT_URL: '/book/',
    CALC_URL: '/pricing/',
  },
  ADDRESS: 'Imperial Place, 4 Maxwell Rd, Borehamwood, WD6 1JN, United Kingdom',

  /* Published prices. Every page reads these, so a price change is one edit.
     Figures marked (proposal) were set in the 2026-09-13 rebuild and need
     Rob's confirmation; the rest were already live. */
  PRICE: {
    audit: 'From £1,500',            // live
    audit_num: 1500,
    lead_1: 'From £3,500',           // proposal: one day a week
    lead_1_num: 3500,
    lead_2: '£6,500',                // proposal: two days a week
    lead_2_num: 6500,
    lead_3: '£9,500',                // proposal: three days a week
    lead_3_num: 9500,
    build_from: 'From £4,500',       // live: one tool or one agent
    build_from_num: 4500,
    build_mid: '£12,000',            // live: connected app
    build_big: 'From £25,000',       // live: platform
    scoping: '£600',                 // proposal: half-day scoping
    run: 'From £450',                // proposal: support & iteration, per month
    run_num: 450,
    training_day: '£1,200',          // live
    training_half: '£700',           // live
    programme: 'From £950',          // proposal: adoption programme, per month
    governance: 'From £2,500',       // proposal
    data: '£1,500 – £6,000',         // live: data configuration range
    diagnostic: '£495',              // proposal: AI app diagnostic audit
    chatbot: 'From £3,000',          // proposal
    voice: 'From £6,000',            // proposal
    private_ai: 'From £4,500',       // proposal
    legacy_discovery: 'From £2,500', // proposal
    /* REVIO AI Assist (Clear Desk packages), confirmed by Rob 2026-11-19 */
    assist_solo_setup: 'From £495',
    assist_solo_setup_num: 495,
    assist_solo_month: 'From £125',
    assist_team_setup: 'From £1,950',
    assist_team_setup_num: 1950,
    assist_team_month: 'From £245',
    assist_business_setup: 'From £4,500',
    assist_business_setup_num: 4500,
    assist_business_month: 'From £595',
    assist_team_person: '£35',      // per extra person a month, Team (2 included)
    assist_team_person_setup: '£95', // per extra person at setup, Team
    assist_business_person: '£30',  // per extra person a month, Business (10 included)
    assist_business_person_setup: '£75',
    assist_overage: '15p',           // per call minute above the allowance (150/300/800)
    assist_check: '£295',             // 90-minute Health Check, credited
    assist_job: 'From £750',          // one extra automated job
  },
};
