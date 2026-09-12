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

  var MEETING_URL = '/book-a-meeting-freelancer/';
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
    build:   ic('<path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="m4 7 8 4 8-4M12 11v10"/>'),
    data:    ic('<ellipse cx="12" cy="6" rx="7.5" ry="3"/>' +
                '<path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6"/>' +
                '<path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6"/>'),
    why:     ic('<circle cx="12" cy="8" r="3.4"/><path d="M5 19a7 7 0 0 1 14 0"/>'),
    work:    ic('<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M9 7V5h6v2"/>'),
    testi:   ic('<path d="M21 12a8 8 0 1 1-3.2-6.4"/><path d="m8 12 3 3 6-7"/>'),
    guides:  ic('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z"/>'),
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

  function brand(uid, withTag) {
    return '<a class="brand" href="/" aria-label="Revio — home">' +
      '<span class="mark" aria-hidden="true">' + markSVG(uid) + '</span>' +
      '<span><img class="word" src="' + LOGO + '" alt="Revio">' +
      (withTag ? '<span class="tag">AI &amp; HubSpot</span>' : '') +
      '</span></a>';
  }

  /* ---------- navigation ---------- */
  var NAV = [
    {
      label: 'AI Services', href: '/ai-services/', shape: 'cards',
      match: ['/ai-services/', '/ai-opportunity-audit/', '/ai-agents-automation/',
              '/ai-enablement/', '/ai-app-development/', '/ai-growth-systems/'],
      cards: [
        { href: '/ai-opportunity-audit/', icon: ICON.audit, title: 'AI Opportunity Audit',
          blurb: 'Two weeks to find where AI actually pays for itself in your business — before anyone builds a thing.',
          label: 'What you get',
          items: ['Ranked list with cost and payback', 'Yours to keep, whoever builds it'] },
        { href: '/ai-agents-automation/', icon: ICON.agents, title: 'AI Agents &amp; Automation',
          blurb: 'Agents that answer, qualify, chase and book. Workflows wired into the tools you already pay for.',
          label: 'Popular builds',
          items: ['Inbound DM &amp; email agents', 'CRM data &amp; handover automation'] },
        { href: '/ai-app-development/', icon: ICON.apps, title: 'AI Web &amp; App Development',
          blurb: 'Internal tools, portals and customer-facing apps, shipped in weeks rather than quarters.',
          label: 'How it works',
          items: ['Fixed price, fixed date', 'You own the code'] }
      ],
      links: [
        { href: '/ai-enablement/', label: 'Enablement &amp; Training' },
        { href: '/ai-growth-systems/', label: 'AI Growth Systems' },
        { href: '/lead-signal/', label: 'LeadSignal, our own product' }
      ]
    },
    {
      label: 'HubSpot', href: '/hubspot-agency/', shape: 'cards',
      match: ['/hubspot-agency/', '/hubspot-consultancy/', '/hubspot-audit/',
              '/hubspot-support-packages/', '/hubspot-sales-hub-implementation/',
              '/hubspot-marketing-hub-implementation/', '/hubspot-service-hub/',
              '/hubspot-integrations/', '/sales-enablement/'],
      cards: [
        { href: '/hubspot-consultancy/', icon: ICON.consult, title: 'Consultancy &amp; Audit',
          blurb: 'Where the portal is costing you money, and what to do about it. From a Solutions Partner who has done this for a decade.',
          label: 'Start here',
          items: ['Free portal health check', 'Strategy, not a feature tour'] },
        { href: '/hubspot-sales-hub-implementation/', icon: ICON.build, title: 'Hub Implementation',
          blurb: 'Sales, Marketing and Service Hub set up around the way your team actually sells, rather than the way the demo did.',
          label: 'What we set up',
          items: ['Sales &amp; Marketing Hub', 'Service Hub, tickets &amp; CSAT'] },
        { href: '/sales-enablement/', icon: ICON.data, title: 'RevOps, Data &amp; Support',
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
      label: 'Growth', href: '/services/', shape: 'rows',
      match: ['/services/', '/lead-generation/', '/paid-search-social/', '/work/'],
      rows: [
        { href: '/ai-growth-systems/', icon: ICON.growth, title: 'AI Growth Systems',
          desc: 'Find, nurture and create, wired as one' },
        { href: '/lead-generation/', icon: ICON.audit, title: 'Lead Generation',
          desc: 'SEO and content that fills the funnel' },
        { href: '/paid-search-social/', icon: ICON.work, title: 'Paid Search &amp; Social',
          desc: 'PPC and paid social that converts' },
        { href: '/work/', icon: ICON.work, title: 'Our Work',
          desc: 'Case studies and results' }
      ]
    },
    {
      label: 'Company', href: '/about/', shape: 'rows',
      match: ['/about/', '/testimonials/', '/guides/', '/resources/'],
      rows: [
        { href: '/about/', icon: ICON.why, title: 'Why Revio', desc: 'Who we are and how we work' },
        { href: '/testimonials/', icon: ICON.testi, title: 'Testimonials', desc: 'What clients actually say' },
        { href: '/guides/', icon: ICON.guides, title: 'Free Guides', desc: 'Playbooks and resources' },
        { href: '/resources/', icon: ICON.news, title: 'Insights &amp; News', desc: 'Articles, guides and updates' },
        { href: MEETING_URL, icon: ICON.book, title: 'Book a Meeting', desc: 'Talk to us before you commit' }
      ]
    },
    { label: 'Pricing', href: '/pricing/', match: ['/pricing/'] },
    { label: 'LeadSignal', href: '/lead-signal/', match: ['/lead-signal/'], live: true }
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
      '<header class="topbar">' + brand('revioMarkNav', true) +
      '<span class="sp"></span>' +
      '<nav class="mainnav" aria-label="Main">' + items + '</nav>' +
      '<a class="navlogin" href="' + MEETING_URL + '">Talk to us</a>' +
      '<button class="themebtn" type="button" data-theme-toggle aria-label="Switch colour theme">' +
      '<svg class="moon" viewBox="0 0 24 24"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5"/></svg>' +
      '<svg class="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/></svg>' +
      '</button>' +
      '<a class="btn btn-primary" href="' + AUDIT_URL + '">Book an audit' +
      '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
      '<button class="burger" type="button" id="revio-burger" aria-label="Open menu" aria-expanded="false">' +
      '<i></i><i></i><i></i></button>' +
      '</header>' +
      '<nav class="drawer" id="revio-drawer" aria-label="Mobile">' + drawerLinks.join('') +
      '<a class="btn btn-primary" href="' + AUDIT_URL + '">Book an audit</a></nav>' +
      '</div>';
  }

  /* ---------- footer ---------- */
  var FOOT_COLS = [
    { h: 'AI Services', links: [
      ['/ai-opportunity-audit/', 'Opportunity Audit'],
      ['/ai-agents-automation/', 'Agents &amp; Automation'],
      ['/ai-enablement/', 'Enablement &amp; Training'],
      ['/ai-app-development/', 'Web &amp; App Development'],
      ['/ai-growth-systems/', 'AI Growth Systems']
    ] },
    { h: 'HubSpot', links: [
      ['/hubspot-agency/', 'Overview'],
      ['/hubspot-consultancy/', 'Consultancy'],
      ['/hubspot-sales-hub-implementation/', 'Implementation'],
      ['/hubspot-audit/', 'Free Audit'],
      ['/hubspot-support-packages/', 'Support Packages']
    ] },
    { h: 'Growth', links: [
      ['/lead-generation/', 'Lead Generation'],
      ['/paid-search-social/', 'Paid Search &amp; Social'],
      ['/sales-enablement/', 'Sales Enablement'],
      ['/work/', 'Our Work'],
      ['/pricing/', 'Pricing']
    ] },
    { h: 'Company', links: [
      ['/about/', 'About Revio'],
      ['/testimonials/', 'Testimonials'],
      ['/guides/', 'Free Guides'],
      ['/resources/', 'Insights &amp; News'],
      [MEETING_URL, 'Contact']
    ] }
  ];

  var SOCIAL = [
    ['https://www.linkedin.com/company/revio-agency/', 'LinkedIn',
     '<path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21h-4z"/>'],
    ['https://www.instagram.com/', 'Instagram',
     '<path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm8.4-11.16a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0z"/>'],
    ['https://x.com/', 'X',
     '<path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.9-6.4L5.1 21H2l7.3-8.3L2.5 3h6.4l4.4 5.8zM16.4 19.2h1.7L7.7 4.7H5.9z"/>'],
    ['https://www.youtube.com/', 'YouTube',
     '<path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.78 2 12 2 12s0 3.22.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.22 22 12 22 12s0-3.22-.4-4.8zM10 15.1V8.9l5.2 3.1z"/>']
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
      '<div class="fbrand">' + brand('revioMarkFoot', false) +
      '<p class="fblurb">AI consultancy, build and enablement, on top of a decade of HubSpot ' +
      'and RevOps work. We build and run our own AI product.</p>' +
      '<div class="fcontact"><span>Imperial Place, 4 Maxwell Rd,</span>' +
      '<span>Borehamwood, WD6 1JN, United Kingdom</span>' +
      '<a href="tel:+447590977397">+44 7590 977397</a></div>' +
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
