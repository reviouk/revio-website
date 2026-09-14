# Writing a page for revio.agency (AI services rebuild, September 2026)

Each page is ONE CommonJS file in `build/content/<slug>.js` exporting a plain
object. The renderer (`build/render.js`) turns it into HTML. Copy the shape of
`build/content/embedded-ai-lead.js` exactly. Do not invent new section types.

## Who Revio is (facts you may use)
- Revio: UK agency, Borehamwood (Hertfordshire, London edge). Founder Rob Wells.
  Small senior team. A decade of HubSpot / RevOps / CRM work. Since 2024 an AI consultancy: audit, build, embedded lead, training.
- Proof: Revio designed, built and runs its own multi-tenant AI product,
  **LeadSignal** (AI setter for Instagram / Facebook / WhatsApp / SMS DMs:
  answers, qualifies, scores, books, attributes). Built in eight weeks, has an
  approved Meta app, live payments, paying customers. Mention it as *a case
  study / something we built and run* – NEVER as the headline of a page.
  LeadSignal is a client and case study, not the product being sold.
- Clients / case studies you may name: Mintec (leads up 28%, £1.5M deals
  attributed in nine months), London South Bank University (paid campaigns at
  institutional scale), Intelligencia Training (national pipeline, long cycles),
  UKV International, Extension Architecture (London architects, SEO + paid),
  Flowers by Flourish (seasonal paid social), PS Contracts (leads + CRM
  foundations), TLPI (pensions/financial services firm: HubSpot, AI properties,
  connected inbox). Do not invent other client names or numbers.
- Method: find the one process where AI pays (audit), build it, wire it into
  the CRM the client already runs, run it supervised, then let it act alone,
  stay until the team uses it. Every price published. No day rate. Tooling in
  the client's own name. Documentation with every build.
- Office: Imperial Place, 4 Maxwell Rd, Borehamwood WD6 1JN. Email
  grow@revio.agency. Booking: S.BOOK_URL (Microsoft Teams calendar).

## Prices (read from `S.PRICE`, never hard-code a figure that is in there)
audit From £1,500 (2 weeks) · Embedded AI Lead £3,500 / £6,500 / £9,500 a month
(1/2/3 days a week) · builds £4,500 one tool or one agent, £12,000 connected
app, from £25,000 platform · scoping £600 half day · Run/support from £450 a
month · training £1,200 a day, £700 half day · adoption programme from £950 a
month · governance from £2,500 · data configuration £1,500–£6,000 · AI app
diagnostic £495 · chatbot from £3,000 · voice AI from £6,000 · private AI from
£4,500 · legacy modernisation discovery from £2,500. All exclude VAT.

## Voice
British English. Plain, direct, specific, a little dry. Short sentences.
Concrete nouns, real numbers, no hype ("cutting-edge", "unlock", "supercharge",
"revolutionise", "seamless", "leverage" are banned). Talk about the client's
Monday morning, not the technology. Say what is NOT included and when AI is
the wrong answer. No emoji. No exclamation marks. Never call any AI "she".
Headlines end with a full stop. `<em class="mint">…</em>` marks the one phrase
in an h1 to colour. `&pound;` or `£` both fine. Use `&amp;` in text for "&".

## SEO
- `title`: ≤ 65 chars incl. " | Revio", primary keyword first.
- `description`: 140–160 chars, keyword + benefit + a price or timeframe.
- `keywords`: 4–8 target phrases (reference only, not rendered).
- One h1. Each section h2 should read as a real heading. Answer the FAQs
  fully (they become FAQPage schema). Link to at least three other site
  pages via `related` and `ctas`. Use these URLs only:
  /ai-services/ /ai-opportunity-audit/ /embedded-ai-lead/ /ai-implementation/
  /ai-strategy/ /ai-agents-automation/ /ai-workflow-automation/ /ai-chatbot/
  /voice-ai/ /claude-implementation/ /chatgpt-implementation/
  /microsoft-copilot-implementation/ /ai-enablement/ /private-ai/
  /ai-governance-compliance/ /ai-app-rescue/ /ai-app-diagnostic-audit/
  /legacy-modernisation/ /funded-ai-projects/ /ai-for-smes/
  /enterprise-ai-consultancy/ /ai-consultancy-london/ /ai-app-development/
  /industries/ /industries/healthcare-dental/ /industries/logistics-transport/
  /industries/financial-services/ /industries/professional-services/
  /industries/recruitment/ /industries/ecommerce-retail/ /industries/smes/
  /pricing/ /ai-roi-calculator/ /work/ /work/leadsignal/ /about/ /contact/
  /hubspot-agency/ /ai-growth-systems/ /knowledge-hub/ and S.BOOK_URL.

## Page object
```js
const S = require('../site'); const P = S.PRICE;
module.exports = {
  slug, title, description, keywords,
  crumbs: [{label, href}],          // parents only; page itself is added
  crumbLabel,                        // short name for the breadcrumb
  art,                               // hero art key, one of:
                                     // network pipeline chat chart shield clock
                                     // voice code lead layers calc
  badge, h1, sub,                    // hero
  ctas: [{label, href, style:'mint'|'ghost'|'primary'|'dark'}],
  heroProof: ['three', 'short', 'proof lines'],
  heroNote,                          // optional one-liner under the buttons
  service: { name, type, price },    // price = number (from P.*_num) or omit
  sections: [ ... ]                  // 8–12 sections, in a sensible order
};
```

## Section types (all accept `tone: 'wash'|'deep'`, `kicker`, `h2`, `lede`)
- `intro` — `body: [para, para]`, optional `ctas`. The "problem" section.
- `cards` — `cols: 2|3|4`, `items: [{icon, title, text, when?, meta?, href?, bullets?}]`.
  Icons: audit lead build agent chat voice flow shield lock code chart clock doc
  data people spark target eye rocket handshake pound calendar mail phone tick
  cross warn book globe layers truck health bank brief cart search repair server
  cpu grant training.
- `steps` — `items: [{title, text, meta?}]` numbered process. `narrow: true` ok.
- `tiers` — `items: [{name, price, per?, cadence?, text, includes:[], best?, featured?, flag?, href?, cta?}]`, `note`.
- `table` — `head: []`, `rows: [[...]]`, `note`. First column is the row label.
- `stats` — `items: [{n:'38%', count: 38, suffix:'%', prefix:'', label}]` (3 or 4). count animates.
- `split` — `art` OR `mock` (html), `body: []`, `bullets: []`, `ctas`, `reverse: true`.
- `compare` — `yes: {title, items}`, `no: {title, items}`. Fit / not-fit.
- `quote` — `text, who, role`.
- `faq` — `items: [{q, a}]` 6–9 items, answers 40–90 words, a may be an array of paragraphs.
- `related` — `items: [{href, icon, title, text, meta}]` three links.
- `cta` — `h2, text, ctas, note`. Always the last section.
- `checks` — `groups: [{title, items:[]}]` included / not included style.
- `timeline` — `items: [{when, title, text}]`.
- `cases` — `items: [{href, kicker, title, result, text}]`.
- `pillars` — `items: [{icon, title, text, links:[{href,label}]}]`.
- `prose` — `body: []` long-form paragraphs (use sparingly).
- `band` — `h2, text, ctas` dark strip mid-page.

Every page: intro → 2–3 substance sections (cards/steps/tiers/table/split)
→ compare or checks → quote (optional) → faq → related → cta.
Aim for 900–1,400 words of copy per page. Prices in `tiers`/`related`/`meta`
come from `P`. Run `node build/build.js --check <slug>` to validate.
