/* ============================================================
   REVIO — shared header + footer partials (2026 shell)

   Injects the floating pill header and the gradient footer into
   every page via the <div id="site-header"> / <div id="site-footer">
   mount points, and handles the dropdowns, the mobile drawer, the
   theme toggle, scheduled blog posts and scroll-reveal.

   The dropdown panels come in two shapes:
     cards — three rich cards (icon, blurb, two proof points, CTA),
             used by AI Services and HubSpot
     rows  — a three-column grid of icon rows, used by Company
   A `links` array renders a secondary row underneath a card panel so
   pages that did not earn a card are still reachable.
   ============================================================ */
(function () {
  'use strict';

  var MEETING_URL = '/book-a-meeting/';   /* Microsoft Bookings, rob@revio.agency (Teams) */
  var AUDIT_URL = '/ai-opportunity-audit/';
  var LOGO = '/assets/revio-logo-white.png';

  /* ---------- icon helpers ---------- */
  function ic(paths) {
    return '<svg viewBox="0 0 24 24">' + paths + '</svg>';
  }
  var TICK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L19 7"/></svg>';
  var GO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px">' +
    '<path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  var ICON = {
    audit:   ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    agents:  ic('<rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 8V4"/>' +
                '<circle cx="9" cy="13" r="1.1"/><circle cx="15" cy="13" r="1.1"/>'),
    apps:    ic('<path d="m9 8-5 4 5 4"/><path d="m15 8 5 4-5 4"/>'),
    growth:  ic('<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>'),
    consult: ic('<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"/>'),
    /* HubSpot's sprocket, so the HubSpot panel is recognisably theirs. */
    hubspot: ic('<circle cx="12" cy="13.2" r="3.4"/><path d="M12 9.8V5.2"/>' + '<path d="M15.1 11.4 19 9.1"/><path d="m14.5 15.7 3.1 3.1"/>' + '<circle cx="12" cy="4" r="1.5"/><circle cx="20" cy="8.4" r="1.5"/>' + '<circle cx="18.6" cy="19.7" r="1.5"/>'),
    build:   ic('<path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="m4 7 8 4 8-4M12 11v10"/>'),
    data:    ic('<ellipse cx="12" cy="6" rx="7.5" ry="3"/>' +
                '<path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6"/>' +
                '<path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6"/>'),
    why:     ic('<circle cx="12" cy="8" r="3.4"/><path d="M5 19a7 7 0 0 1 14 0"/>'),
    work:    ic('<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M9 7V5h6v2"/>'),
    testi:   ic('<path d="M21 12a8 8 0 1 1-3.2-6.4"/><path d="m8 12 3 3 6-7"/>'),
    news:    ic('<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7 9h10M7 13h7"/>'),
    book:    ic('<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 11h18"/>')
  };

  /* ---------- the brand mark ----------
     The O from the wordmark: a solid disc with the chart wave knocked out of
     it and the arrow breaking out of the top right through a notch. The mask
     channel is cut wider than the visible arrow, which is what leaves the gap
     between disc and arrow in the original artwork. */
  function markSVG(uid) {
    return '<svg viewBox="0 0 32 32" role="img">' +
      '<defs><mask id="' + uid + '" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">' +
      '<rect width="32" height="32" fill="#000"/>' +
      '<circle cx="14" cy="18" r="12.8" fill="#fff"/>' +
      '<path d="M5.2 19.8 10.8 14.4 14.9 18.7 27.6 5.6" fill="none" stroke="#000" ' +
      'stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M20.6 2.2 31 1.1 29.9 11.5z" fill="#000" stroke="#000" stroke-width="3.4" ' +
      'stroke-linejoin="round"/></mask></defs>' +
      '<circle cx="14" cy="18" r="12.8" fill="#fff" mask="url(#' + uid + ')"/>' +
      '<path d="M21.4 11.8 26.9 6.3" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M22.8 3.4 29.6 2.7 28.9 9.5z" fill="#fff" stroke="#fff" stroke-width="1.6" ' +
      'stroke-linejoin="round"/></svg>';
  }

  function brand(uid) {
    return '<a class="brand" href="/" aria-label="Revio — home">' +
      '<span class="mark" aria-hidden="true">' + markSVG(uid) + '</span>' +
      '<img class="word" src="' + LOGO + '" alt="Revio">' +
      '</a>';
  }

  /* ---------- navigation ---------- */
  var NAV = [
    {
      label: 'AI Services', href: '/ai-services/', shape: 'cards',
      match: ['/ai-services/', '/ai-opportunity-audit/', '/embedded-ai-lead/', '/ai-implementation/',
              '/ai-strategy/', '/ai-agents-automation/', '/ai-workflow-automation/', '/ai-chatbot/',
              '/voice-ai/', '/claude-implementation/', '/chatgpt-implementation/',
              '/microsoft-copilot-implementation/', '/ai-enablement/', '/private-ai/',
              '/ai-governance-compliance/', '/ai-app-rescue/', '/ai-app-diagnostic-audit/',
              '/legacy-modernisation/', '/funded-ai-projects/', '/ai-for-smes/',
              '/enterprise-ai-consultancy/', '/ai-consultancy-london/', '/ai-app-development/'],
      cards: [
        { href: '/ai-opportunity-audit/', icon: ICON.audit, title: 'AI Opportunity Audit',
          blurb: 'Two weeks to find where AI actually pays for itself in your business, before anyone builds a thing.',
          label: 'Start here',
          items: ['Ranked list with cost and payback', 'From &pound;1,500, credited against a build'] },
        { href: '/embedded-ai-lead/', icon: ICON.why, title: 'Embedded AI Lead',
          blurb: 'A senior AI lead inside your team one to three days a week. One backlog, the work delivered, your people trained.',
          label: 'The retained service',
          items: ['From &pound;3,500 a month', 'Quarterly review, no lock-in'] },
        { href: '/ai-implementation/', icon: ICON.build, title: 'AI Build &amp; Implementation',
          blurb: 'A defined system built to a fixed price and date, wired into the CRM you already run, supervised before it acts alone.',
          label: 'Fixed price',
          items: ['Agents, automations, apps from &pound;4,500', 'Code and accounts in your name'] }
      ],
      links: [
        { href: '/ai-agents-automation/', label: 'Agents &amp; automation' },
        { href: '/ai-workflow-automation/', label: 'Workflow automation' },
        { href: '/ai-chatbot/', label: 'AI chatbots' },
        { href: '/voice-ai/', label: 'Voice AI' },
        { href: '/claude-implementation/', label: 'Claude' },
        { href: '/chatgpt-implementation/', label: 'ChatGPT' },
        { href: '/microsoft-copilot-implementation/', label: 'Copilot' },
        { href: '/ai-enablement/', label: 'Training' },
        { href: '/private-ai/', label: 'Private AI' },
        { href: '/ai-governance-compliance/', label: 'Governance' },
        { href: '/ai-app-rescue/', label: 'App rescue' },
        { href: '/legacy-modernisation/', label: 'Legacy modernisation' },
        { href: '/ai-services/', label: 'All AI services' }
      ]
    },
    {
      label: 'Industries', href: '/industries/', shape: 'rows',
      match: ['/industries/', '/industries/healthcare-dental/', '/industries/logistics-transport/',
              '/industries/financial-services/', '/industries/professional-services/',
              '/industries/recruitment/', '/industries/ecommerce-retail/', '/industries/smes/'],
      rows: [
        { href: '/industries/healthcare-dental/', icon: ICON.testi, title: 'Healthcare &amp; Dental', desc: 'Enquiries, bookings, recalls, letters' },
        { href: '/industries/logistics-transport/', icon: ICON.growth, title: 'Logistics &amp; Transport', desc: 'Quotes, PODs, driver and customer comms' },
        { href: '/industries/financial-services/', icon: ICON.data, title: 'Financial Services', desc: 'Onboarding, fact-finds, Consumer Duty' },
        { href: '/industries/professional-services/', icon: ICON.news, title: 'Professional Services', desc: 'Documents, intake, proposals, knowledge' },
        { href: '/industries/recruitment/', icon: ICON.why, title: 'Recruitment', desc: 'Screening, matching, candidate comms' },
        { href: '/industries/ecommerce-retail/', icon: ICON.work, title: 'Ecommerce &amp; Retail', desc: 'Service, returns, content, flows' },
        { href: '/industries/smes/', icon: ICON.consult, title: 'Owner-managed SMEs', desc: 'Missed enquiries, quoting, admin' },
        { href: '/industries/', icon: ICON.audit, title: 'All industries', desc: 'The same method, applied to your sector' },
        { href: '/ai-roi-calculator/', icon: ICON.growth, title: 'AI ROI calculator', desc: 'What it would return in your business' }
      ]
    },
    {
      label: 'HubSpot', href: '/hubspot-agency/', shape: 'cards',
      match: ['/hubspot-agency/', '/hubspot-consultancy/', '/hubspot-audit/',
              '/hubspot-support-packages/', '/hubspot-sales-hub-implementation/',
              '/hubspot-marketing-hub-implementation/', '/hubspot-service-hub/',
              '/hubspot-integrations/', '/sales-enablement/'],
      cards: [
        { href: '/hubspot-consultancy/', icon: ICON.hubspot, title: 'Consultancy &amp; Audit',
          blurb: 'Where the portal is costing you money, and what to do about it. From a Solutions Partner who has done this for a decade.',
          label: 'Start here',
          items: ['Free portal health check', 'Strategy, not a feature tour'] },
        { href: '/hubspot-sales-hub-implementation/', icon: ICON.hubspot, title: 'Hub Implementation',
          blurb: 'Sales, Marketing and Service Hub set up around the way your team actually sells, rather than the way the demo did.',
          label: 'What we set up',
          items: ['Sales &amp; Marketing Hub', 'Service Hub, tickets &amp; CSAT'] },
        { href: '/sales-enablement/', icon: ICON.hubspot, title: 'RevOps, Data &amp; Support',
          blurb: 'Clean pipelines, honest attribution and someone on the end of the phone. The groundwork every AI build depends on.',
          label: 'Ongoing',
          items: ['Data hygiene &amp; migrations', 'Admin &amp; dev retainers'] }
      ],
      links: [
        { href: '/hubspot-audit/', label: 'Free HubSpot Audit' },
        { href: '/hubspot-support-packages/', label: 'Support Packages' },
        { href: '/hubspot-marketing-hub-implementation/', label: 'Marketing Hub' },
        { href: '/hubspot-service-hub/', label: 'Service Hub' },
        { href: '/hubspot-agency/', label: 'Everything HubSpot' }
      ]
    },
    {
      label: 'Growth', href: '/services/', shape: 'cards',
      match: ['/services/', '/lead-generation/', '/paid-search-social/', '/ai-growth-systems/'],
      cards: [
        { href: '/ai-growth-systems/', icon: ICON.growth, title: 'AI Growth Systems',
          blurb: 'Finding the right people, chasing them until they answer, and making the assets that give them a reason to.',
          label: 'How it is priced',
          items: ['Setup, then monthly', 'You own every licence'] },
        { href: '/lead-generation/', icon: ICON.audit, title: 'Lead Generation',
          blurb: 'SEO and content that fills the funnel with people who were already looking for what you sell.',
          label: 'What it covers',
          items: ['Search and content strategy', 'Landing pages that convert'] },
        { href: '/paid-search-social/', icon: ICON.work, title: 'Paid Search &amp; Social',
          blurb: 'Google and Meta run against pipeline rather than clicks, with the spend answerable to revenue.',
          label: 'What it covers',
          items: ['Search, social and retargeting', 'Attribution back to closed deals'] }
      ],
      links: [
        { href: '/sales-enablement/', label: 'Sales Enablement' },
        { href: '/services/', label: 'Everything we do' }
      ]
    },
    {
      label: 'Company', href: '/about/', shape: 'rows',
      match: ['/about/', '/work/', '/testimonials/', '/resources/', '/knowledge-hub/', '/contact/'],
      rows: [
        { href: '/about/', icon: ICON.why, title: 'Why Revio', desc: 'Who we are and how we work' },
        { href: '/work/', icon: ICON.work, title: 'Our Work', desc: 'Case studies, including the AI platform we built' },
        { href: '/testimonials/', icon: ICON.testi, title: 'Testimonials', desc: 'What clients actually say' },
        { href: '/knowledge-hub/', icon: ICON.news, title: 'Knowledge Hub', desc: 'Guides on strategy, implementation and training' },
        { href: '/resources/', icon: ICON.news, title: 'Insights &amp; News', desc: 'Articles, guides and updates' },
        { href: '/contact/', icon: ICON.book, title: 'Contact', desc: 'A person replies within a working day' }
      ]
    },
    { label: 'Pricing', href: '/pricing/', match: ['/pricing/', '/ai-roi-calculator/'] },
    /* Clients only, so it is a plain menu label rather than a button competing
       with the calls to action. /login/ is the stable address: the portal
       itself can move without this link changing. */
    { label: 'Login', href: '/login/', match: ['/login/'] }
  ];

  var CHEV = '<svg class="chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>';

  function currentPage() {
    var p = window.location.pathname.replace(/index\.html$/, '');
    if (p.charAt(p.length - 1) !== '/') p += '/';
    return p;
  }

  function isCurrent(item, page) {
    return (item.match || []).some(function (m) { return m === page; });
  }

  function cardHTML(c) {
    return '<a class="mcard" href="' + c.href + '">' +
      '<span class="mi">' + c.icon + '</span>' +
      '<h4>' + c.title + '</h4><p>' + c.blurb + '</p>' +
      '<span class="flab">' + c.label + '</span><ul>' +
      c.items.map(function (i) { return '<li>' + TICK + i + '</li>'; }).join('') +
      '</ul><span class="more">Learn more ' + GO + '</span></a>';
  }

  function rowHTML(r) {
    return '<a class="mrow" href="' + r.href + '"><span class="mi">' + r.icon + '</span>' +
      '<span><b>' + r.title + '</b><span>' + r.desc + '</span></span></a>';
  }

  function megaHTML(item) {
    if (item.shape === 'cards') {
      return '<div class="mega"><div class="mega-cards">' +
        item.cards.map(cardHTML).join('') + '</div>' +
        (item.links ? '<div class="mega-links">' + item.links.map(function (l) {
          return '<a href="' + l.href + '">' + l.label + '</a>';
        }).join('') + '</div>' : '') + '</div>';
    }
    return '<div class="mega"><div class="mega-grid">' +
      item.rows.map(rowHTML).join('') + '</div></div>';
  }

  function headerHTML(page) {
    var items = NAV.map(function (item) {
      var cur = isCurrent(item, page) ? ' aria-current="page"' : '';
      var dot = item.live ? '<span class="live"></span>' : '';
      if (!item.cards && !item.rows) {
        return '<div class="navitem"><a class="navtop" href="' + item.href + '"' + cur + '>' +
          dot + item.label + '</a></div>';
      }
      return '<div class="navitem"><a class="navtop" href="' + item.href + '"' + cur + '>' +
        dot + item.label + CHEV + '</a>' + megaHTML(item) + '</div>';
    }).join('');

    var drawerLinks = [];
    NAV.forEach(function (item) {
      drawerLinks.push('<a href="' + item.href + '">' + item.label + '</a>');
      (item.cards || []).forEach(function (c) {
        drawerLinks.push('<a class="sub" href="' + c.href + '">' + c.title + '</a>');
      });
      (item.rows || []).forEach(function (r) {
        drawerLinks.push('<a class="sub" href="' + r.href + '">' + r.title + '</a>');
      });
    });

    return '<div class="topwrap">' +
      '<header class="topbar">' + brand('revioMarkNav') +
      '<span class="sp"></span>' +
      '<nav class="mainnav" aria-label="Main">' + items + '</nav>' +
      '<a class="btn btn-mint navtalk" href="' + MEETING_URL + '">Book a meeting</a>' +
            '<a class="btn btn-primary" href="' + AUDIT_URL + '">Book an audit' +
      '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
      '<button class="themebtn" type="button" data-theme-toggle aria-label="Switch colour theme">' +
      '<svg class="moon" viewBox="0 0 24 24"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5"/></svg>' +
      '<svg class="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/></svg>' +
      '</button>' +
      '<button class="burger" type="button" id="revio-burger" aria-label="Open menu" aria-expanded="false">' +
      '<i></i><i></i><i></i></button>' +
      '</header>' +
      '<nav class="drawer" id="revio-drawer" aria-label="Mobile">' + drawerLinks.join('') +
      '<a class="btn btn-primary" href="' + AUDIT_URL + '">Book an audit</a>' +
      '<button class="drawer-theme" type="button" data-theme-toggle>Switch light / dark</button>' +
      '</nav>' +
      '</div>';
  }

  /* ---------- footer ---------- */
  var FOOT_COLS = [
    { h: 'AI Services', links: [
      ['/ai-opportunity-audit/', 'AI Opportunity Audit'],
      ['/embedded-ai-lead/', 'Embedded AI Lead'],
      ['/ai-implementation/', 'AI Build &amp; Implementation'],
      ['/ai-agents-automation/', 'Agents &amp; Automation'],
      ['/ai-chatbot/', 'AI Chatbots'],
      ['/voice-ai/', 'Voice AI'],
      ['/ai-enablement/', 'Training &amp; Enablement'],
      ['/ai-governance-compliance/', 'Governance &amp; Compliance'],
      ['/ai-services/', 'All AI services']
    ] },
    { h: 'Industries', links: [
      ['/industries/healthcare-dental/', 'Healthcare &amp; Dental'],
      ['/industries/logistics-transport/', 'Logistics &amp; Transport'],
      ['/industries/financial-services/', 'Financial Services'],
      ['/industries/professional-services/', 'Professional Services'],
      ['/industries/recruitment/', 'Recruitment'],
      ['/industries/ecommerce-retail/', 'Ecommerce &amp; Retail'],
      ['/industries/smes/', 'Owner-managed SMEs'],
      ['/ai-consultancy-london/', 'AI Consultancy London']
    ] },
    { h: 'HubSpot &amp; Growth', links: [
      ['/hubspot-agency/', 'HubSpot Overview'],
      ['/hubspot-consultancy/', 'HubSpot Consultancy'],
      ['/hubspot-sales-hub-implementation/', 'Hub Implementation'],
      ['/hubspot-support-packages/', 'Support Packages'],
      ['/freelance-hubspot-consultant-london/', 'Freelance Consultant'],
      ['/ai-growth-systems/', 'AI Growth Systems'],
      ['/lead-generation/', 'Lead Generation'],
      ['/paid-search-social/', 'Paid Search &amp; Social']
    ] },
    { h: 'Company', links: [
      ['/about/', 'About Revio'],
      ['/work/', 'Our Work'],
      ['/testimonials/', 'Testimonials'],
      ['/knowledge-hub/', 'Knowledge Hub'],
      ['/resources/', 'Insights &amp; News'],
      ['/pricing/', 'Pricing'],
      ['/ai-roi-calculator/', 'AI ROI Calculator'],
      ['/contact/', 'Contact'],
      [MEETING_URL, 'Book a Meeting'],
      ['/login/', 'Client login']
    ] }
  ];

  var SOCIAL = [
    ['https://www.linkedin.com/company/revio-agency/', 'LinkedIn',
     '<path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21h-4z"/>']
  ];

  function footerHTML() {
    var cols = FOOT_COLS.map(function (c) {
      return '<div><h4>' + c.h + '</h4><ul>' + c.links.map(function (l) {
        return '<li><a href="' + l[0] + '">' + l[1] + '</a></li>';
      }).join('') + '</ul></div>';
    }).join('');

    var social = SOCIAL.map(function (s) {
      return '<a href="' + s[0] + '" target="_blank" rel="noopener" aria-label="Revio on ' +
        s[1] + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + s[2] + '</svg></a>';
    }).join('');

    return '<footer class="foot"><div class="fwrap"><div class="fgrid">' +
      '<div class="fbrand">' + brand('revioMarkFoot') +
      '<p class="fblurb">AI audit, build and embedded AI leadership for UK businesses, on top of a decade ' +
      'of HubSpot and RevOps work. Every price published.</p>' +
      '<div class="fcontact"><span>Imperial Place, 4 Maxwell Rd,</span>' +
      '<span>Borehamwood, WD6 1JN, United Kingdom</span>' +
      '</div>' +
      '<div class="flabel">Ask or email us</div>' +
      '<a class="fmail" href="mailto:grow@revio.agency">grow@revio.agency</a>' +
      '<div class="fsocial">' + social + '</div>' +
      '<div class="fbadges"><span class="fbadge"><i></i>HubSpot Solutions Partner</span>' +
      '<span class="fbadge"><i></i>Meta approved integration</span></div></div>' +
      cols + '</div></div>' +
      '<div class="fbot"><span>&copy; <span id="revio-yr">2026</span> Revio. All rights reserved.</span>' +
      '<span class="sp"></span><a href="/privacy/">Privacy Policy</a>' +
      '<a href="/terms/">Terms of Service</a></div>' +
      '<div class="fmark" aria-hidden="true">REVIO</div></footer>';
  }

  /* ---------- theme ---------- */
  function initTheme() {
    var root = document.documentElement;
    try {
      var saved = localStorage.getItem('revio-theme-v2');
      if (saved) root.setAttribute('data-theme', saved);
    } catch (e) { /* private mode */ }

    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('revio-theme-v2', next); } catch (e) { /* ignore */ }
      });
    });
  }

  /* ---------- mount ---------- */
  function mount() {
    var page = currentPage();

    var h = document.getElementById('site-header');
    if (h) h.innerHTML = headerHTML(page);

    var f = document.getElementById('site-footer');
    if (f) f.innerHTML = footerHTML();

    var yr = document.getElementById('revio-yr');
    if (yr) yr.textContent = new Date().getFullYear();

    initTheme();

    var burger = document.getElementById('revio-burger');
    var drawer = document.getElementById('revio-drawer');
    if (burger && drawer) {
      burger.addEventListener('click', function () {
        var open = drawer.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
      drawer.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
          drawer.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
          drawer.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          burger.focus();
        }
      });
    }

    /* Scheduled posts — cards carrying data-publish stay hidden until their
       publish date, so the blog drip-feeds one article a day. */
    document.querySelectorAll('[data-publish]').forEach(function (el) {
      var d = new Date(el.getAttribute('data-publish') + 'T00:00:00');
      if (!isNaN(d) && d.getTime() > Date.now()) el.remove();
    });

    /* Scroll-reveal */
    var revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length && 'IntersectionObserver' in window &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in'); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
