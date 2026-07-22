# Revio — redesigned marketing site (static)

Redesigned multi-page static website for [revio.agency](https://revio.agency).
Pure HTML/CSS/JS — **no build step, no frameworks**. Deploy to Render as a
static site with the publish directory set to `public`.

## Architecture

- `public/styles.css` — the entire design system (shared by every page):
  brand tokens (purple `#382294`, deep `#1a1148`, mint `#74e8cb`), Satoshi
  headings + Inter body, buttons, cards, heroes, pricing, forms, footer.
- `public/partials.js` — injects the shared sticky header (nav + mobile
  hamburger drawer) and footer into every page via the
  `<div id="site-header">` / `<div id="site-footer">` mount points; also
  handles active-nav highlighting and scroll-reveal animations.
- External requests: Google Fonts (Inter) and Satoshi woff2 files hosted on
  revio.agency. Nothing else.

## Pages

| File | Page |
|---|---|
| `index.html` | Home — hero, logo strip, growth framework, services, LeadSignal highlight, case teasers, testimonial, CTA |
| `about.html` | About / Why Revio — story, values, team, stats |
| `services.html` | Services overview (links to all service pages) |
| `lead-generation.html` | Inbound lead generation |
| `paid-search-social.html` | Paid search & social (PPC) |
| `sales-enablement.html` | Sales enablement / RevOps |
| `hubspot.html` | HubSpot overview (Solutions Partner) |
| `hubspot-consultancy.html` | HubSpot consultancy |
| `hubspot-audit.html` | Free HubSpot audit |
| `hubspot-support.html` | HubSpot support packages |
| `hubspot-implementation.html` | Sales / Marketing / Service Hub implementation |
| `ai-consultancy.html` | AI enablement / consultancy |
| `leadsignal.html` | LeadSignal product page (Pro $280 / Enterprise $450) |
| `work.html` | Case studies / portfolio grid |
| `pricing.html` | Pricing / engagement models + quote CTA |
| `contact.html` | Contact details + mailto-based contact form |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms of service |
| `thankyou.html` | Post-submission thank-you page |

Primary CTAs point to the live absolute URLs:
`https://revio.agency/start-growing/` and `https://revio.agency/meeting/`.
LeadSignal's "See the platform" links to `https://lead-signal.ai`.
