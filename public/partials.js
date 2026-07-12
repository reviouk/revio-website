/* ============================================================
   REVIO — shared header + footer partials
   Injects identical nav/footer on every page, handles the
   desktop dropdowns, mobile accordion drawer, active nav
   state, and scroll-reveal animations.
   ============================================================ */
(function () {
  'use strict';

  var MEETING_URL = '/book-a-meeting-freelancer/';
  var QUOTE_URL = '/start-growing/';
  /* Pure-white Revio wordmark. The nav bar and footer are both dark, so
     it renders white in place on each. */
  var LOGO_LIGHT = 'https://leadsignal.revio.agency/revio-logo-white.png';
  var LOGO_WHITE = 'https://revio.agency/wp-content/uploads/2022/06/LogoWhite-e1654540193495.png';

  /* Inline line-icons for the dropdown mega-menus (mirrors the
     icon menu on revio.agency). Stroke uses currentColor so each
     row tints on hover. */
  function ic(paths) {
    return '<svg class="nav-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      paths + '</svg>';
  }
  var ICON = {
    lead:    ic('<path d="M3 4h18"/><path d="M6 4v6a6 6 0 0 0 12 0V4"/><path d="M12 16v4"/><path d="M9 20h6"/>'),
    paid:    ic('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
    sales:   ic('<path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/>'),
    consult: ic('<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>'),
    audit:   ic('<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>'),
    support: ic('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M5.6 5.6l3.3 3.3M15.1 15.1l3.3 3.3M18.4 5.6l-3.3 3.3M8.9 15.1l-3.3 3.3"/>'),
    build:   ic('<path d="M12 2l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/>'),
    why:     ic('<path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/>'),
    work:    ic('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),
    testi:   ic('<path d="M8 9h8M8 13h5"/><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z"/>'),
    guides:  ic('<path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 0-2 2z"/><path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 1 2 2z"/>')
  };

  /* Real menu icon artwork from revio.agency (used as <img> so the
     HubSpot sprocket and service icons match the live site exactly). */
  var ICON_IMG = {
    lead:    'https://revio.agency/wp-content/uploads/2021/01/lead-gen.svg',
    paid:    'https://revio.agency/wp-content/uploads/2021/01/paid-1.svg',
    sales:   'https://revio.agency/wp-content/uploads/2021/01/sales-enablement.svg',
    hubspot: 'https://revio.agency/wp-content/uploads/2021/01/hubspot.svg'
  };

  /* Main navigation — mirrors revio.agency's live menu.
     `match` lists page filenames that light the top-level item
     up as current (sub-pages roll up to their parent).
     Each dropdown child carries an icon + one-line description
     so the panel renders as revio.agency's icon menu. */
  var NAV = [
    { label: 'LeadSignal', href: '/lead-signal/', match: ['/lead-signal/'], dot: true },
    {
      label: 'Services', href: '/services/',
      match: ['/services/', '/lead-generation/', '/paid-search-social/', '/sales-enablement/', '/gohighlevel-crm-implementation/'],
      children: [
        { href: '/lead-generation/', label: 'Inbound Lead Generation', iconImg: ICON_IMG.lead, desc: 'SEO &amp; content that fills the funnel' },
        { href: '/paid-search-social/', label: 'Paid Search &amp; Social', iconImg: ICON_IMG.paid, desc: 'PPC &amp; paid social that converts' },
        { href: '/sales-enablement/', label: 'Sales Enablement', iconImg: ICON_IMG.sales, desc: 'RevOps &amp; automation to close faster' },
        { href: '/gohighlevel-crm-implementation/', label: 'GoHighLevel CRM Implementation', icon: ICON.build, desc: 'Set up, automate &amp; migrate GoHighLevel' }
      ]
    },
    {
      label: 'HubSpot', href: '/hubspot-agency/', wide: true, iconImg: ICON_IMG.hubspot,
      match: ['/hubspot-agency/', '/hubspot-consultancy/', '/hubspot-audit/', '/hubspot-support-packages/', '/hubspot-sales-hub-implementation/', '/hubspot-marketing-hub-implementation/', '/hubspot-service-hub/'],
      children: [
        { href: '/hubspot-consultancy/', label: 'HubSpot Consultancy', iconImg: ICON_IMG.hubspot, desc: 'Strategy from a Solutions Partner' },
        { href: '/hubspot-audit/', label: 'HubSpot Audit', iconImg: ICON_IMG.hubspot, desc: 'Free health check of your portal' },
        { href: '/hubspot-support-packages/', label: 'HubSpot Support Packages', iconImg: ICON_IMG.hubspot, desc: 'Ongoing admin &amp; dev retainers' },
        { href: '/hubspot-sales-hub-implementation/', label: 'Sales Hub Implementation', iconImg: ICON_IMG.hubspot, desc: 'Set up Sales Hub around your process' },
        { href: '/hubspot-marketing-hub-implementation/', label: 'Marketing Hub Implementation', iconImg: ICON_IMG.hubspot, desc: 'Launch campaigns &amp; automation' },
        { href: '/hubspot-service-hub/', label: 'Service Hub Implementation', iconImg: ICON_IMG.hubspot, desc: 'Tickets, knowledge base &amp; CSAT' }
      ]
    },
    { label: 'AI Consultancy', href: '/ai-enablement/', match: ['/ai-enablement/'] },
    {
      label: 'About', href: '/about/',
      match: ['/about/', '/work/', '/testimonials/', '/guides/', '/resources/'],
      children: [
        { href: '/testimonials/', label: 'Testimonials', icon: ICON.testi, desc: 'What our clients say' },
        { href: '/work/', label: 'Our Work', icon: ICON.work, desc: 'Case studies &amp; results' },
        { href: '/about/', label: 'Why Revio?', icon: ICON.why, desc: 'Who we are &amp; how we work' },
        { href: '/guides/', label: 'Free Guides', icon: ICON.guides, desc: 'Playbooks &amp; resources' },
        { href: '/resources/', label: 'Insights &amp; News', icon: ICON.testi, desc: 'Articles, guides &amp; updates' }
      ]
    },
    { label: 'Pricing', href: '/pricing/', match: ['/pricing/'] }
  ];

  var CHEV = '<svg class="chev" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg>';

  /* Render one dropdown child as an icon row (icon + label + desc). */
  function childRow(child, page) {
    var iconHTML = '';
    if (child.iconImg) {
      iconHTML = '<span class="nav-ic-wrap nav-ic-wrap-img">' +
        '<img class="nav-ic-img" src="' + child.iconImg + '" alt="" loading="lazy"></span>';
    } else if (child.icon) {
      iconHTML = '<span class="nav-ic-wrap">' + child.icon + '</span>';
    }
    return '<a href="' + child.href + '"' +
      (child.href === page ? ' aria-current="page"' : '') + '>' +
      iconHTML +
      '<span class="nav-txt"><span class="nav-lbl">' + child.label + '</span>' +
      (child.desc ? '<span class="nav-desc">' + child.desc + '</span>' : '') +
      '</span></a>';
  }

  /* "Overview" row for a dropdown — skipped when the parent page
     already appears among the children (e.g. About → Why Revio). */
  function overviewLink(item, page) {
    var dupe = item.children.some(function (c) { return c.href === item.href; });
    if (dupe) return '';
    var icon = item.iconImg
      ? '<span class="nav-ic-wrap nav-ic-wrap-img"><img class="nav-ic-img" src="' + item.iconImg + '" alt="" loading="lazy"></span>'
      : '';
    return '<a href="' + item.href + '"' +
      (item.href === page ? ' aria-current="page"' : '') +
      '>' + icon + '<span class="nav-txt"><span class="nav-lbl">' + item.label + ' Overview</span></span></a>';
  }

  function currentPage() {
    var p = window.location.pathname.replace(/index\.html$/, '');
    if (p.charAt(p.length - 1) !== '/') p += '/';
    return p;
  }

  function desktopNav(page) {
    return NAV.map(function (item) {
      var isCurrent = item.match.indexOf(page) !== -1;
      var dot = item.dot ? '<span class="nav-dot" aria-hidden="true"></span>' : '';
      if (!item.children) {
        return '<div class="nav-item">' +
          '<a class="nav-top" href="' + item.href + '"' +
          (isCurrent ? ' aria-current="page"' : '') +
          '>' + dot + item.label + '</a></div>';
      }
      var panelId = 'nav-panel-' + item.label.toLowerCase().replace(/[^a-z]/g, '');
      var links = item.children.map(function (child) {
        return childRow(child, page);
      }).join('');
      return '<div class="nav-item">' +
        '<button class="nav-top' + (isCurrent ? ' is-active' : '') + '" type="button" ' +
          'aria-expanded="false" aria-haspopup="true" aria-controls="' + panelId + '">' +
          item.label + CHEV +
        '</button>' +
        '<div class="nav-dropdown nav-mega' + (item.wide ? ' nav-mega-wide' : '') + '" id="' + panelId + '">' +
          overviewLink(item, page) +
          links +
        '</div>' +
      '</div>';
    }).join('');
  }

  function mobileNav(page) {
    return NAV.map(function (item) {
      var isCurrent = item.match.indexOf(page) !== -1;
      if (!item.children) {
        return '<a href="' + item.href + '"' +
          (isCurrent ? ' aria-current="page"' : '') +
          '>' + (item.dot ? '<span class="nav-dot" aria-hidden="true"></span>' : '') + item.label + '</a>';
      }
      var subId = 'm-sub-' + item.label.toLowerCase().replace(/[^a-z]/g, '');
      var links = item.children.map(function (child) {
        return childRow(child, page);
      }).join('');
      return '<div class="m-group">' +
        '<button class="m-group-btn' + (isCurrent ? ' is-active' : '') + '" type="button" ' +
          'aria-expanded="' + (isCurrent ? 'true' : 'false') + '" aria-controls="' + subId + '">' +
          item.label + CHEV +
        '</button>' +
        '<div class="m-sub" id="' + subId + '">' +
          overviewLink(item, page) +
          links +
        '</div>' +
      '</div>';
    }).join('');
  }

  function themeToggleHTML(extraClass) {
    return '<button class="theme-toggle' + (extraClass ? ' ' + extraClass : '') + '" type="button" ' +
      'data-theme-toggle aria-label="Switch colour theme">' +
      '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>' +
      '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' +
      '</button>';
  }

  function initTheme() {
    var root = document.documentElement;
    function current() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
    function apply(t) {
      root.setAttribute('data-theme', t);
      document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
        b.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
      });
    }
    /* Head script may have set this already; fall back to stored/system pref. */
    var stored;
    try { stored = localStorage.getItem('revio-theme-v2'); } catch (e) {}
    if (!root.getAttribute('data-theme')) {
      apply(stored || 'light');
    } else {
      apply(current());
    }
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = current() === 'dark' ? 'light' : 'dark';
        apply(next);
        try { localStorage.setItem('revio-theme-v2', next); } catch (e) {}
      });
    });
  }

  function headerHTML() {
    var page = currentPage();
    return '' +
      '<header class="site-header">' +
        '<div class="nav-in">' +
          '<a class="brand" href="/" aria-label="Revio — home">' +
            '<img src="' + LOGO_LIGHT + '" alt="Revio">' +
          '</a>' +
          '<span class="nav-sp"></span>' +
          '<nav class="nav-links" aria-label="Main navigation">' + desktopNav(page) + '</nav>' +
          '<a class="btn btn-ghost-dark btn-sm nav-quote" href="' + QUOTE_URL + '">Request a Quote</a>' +
          '<a class="btn btn-mint btn-sm nav-book" href="' + MEETING_URL + '">Book a Meeting</a>' +
          '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">' +
            '<span class="nb-line nb-l1"></span><span class="nb-line nb-l2"></span><span class="nb-line nb-l3"></span>' +
          '</button>' +
        '</div>' +
        '<nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">' +
          mobileNav(page) +
          '<a class="btn btn-ghost-dark" href="' + QUOTE_URL + '">Request a Quote</a>' +
          '<a class="btn btn-mint" href="' + MEETING_URL + '">Book a Meeting</a>' +
          '<div class="mobile-theme"><span>Dark mode</span>' + themeToggleHTML('mobile-theme-btn') + '</div>' +
        '</nav>' +
      '</header>';
  }

  function footerHTML() {
    var year = new Date().getFullYear();
    return '' +
      '<footer class="site-footer">' +
        '<div class="wrap">' +
          '<div class="footer-main">' +
            '<div>' +
              '<a class="brand" href="/" aria-label="Revio — home">' +
                '<img src="' + LOGO_WHITE + '" alt="Revio">' +
              '</a>' +
              '<p class="footer-blurb">UK inbound growth agency and HubSpot Solutions Partner. More traffic, better leads, faster deals.</p>' +
              '<div class="footer-contact">' +
                '<a href="mailto:grow@revio.agency">grow@revio.agency</a>' +
                '<a href="tel:+447590977397">+44 7590 977397</a>' +
                '<span class="addr">Imperial Place, 4 Maxwell Rd,<br>Borehamwood, WD6 1JN, UK</span>' +
              '</div>' +
              '<div class="footer-hubspot">' +
                '<svg class="hs-mark" viewBox="0 0 24 24" fill="#fff" aria-label="HubSpot" role="img">' +
                  '<path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.194v.067a2.196 2.196 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 1 0 3.3 6.024l-.014-.007 7.696 5.99a6.176 6.176 0 0 0-1.038 3.446c0 1.343.425 2.588 1.147 3.606l-.013-.019-2.342 2.343a1.968 1.968 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033v-.002a1.978 1.978 0 0 0-.095-.58l.005.016 2.317-2.317a6.223 6.223 0 1 0 4.982-11.163l-.056-.017zm-1.755 9.353a3.195 3.195 0 1 1 .001-6.39 3.195 3.195 0 0 1-.001 6.39z"/>' +
                '</svg>' +
                '<span>HubSpot<br><b>Solutions Partner</b></span>' +
              '</div>' +
            '</div>' +
            '<div class="footer-col">' +
              '<h4>Services</h4>' +
              '<ul>' +
                '<li><a href="/lead-generation/">Inbound Lead Generation</a></li>' +
                '<li><a href="/paid-search-social/">Paid Search &amp; Social</a></li>' +
                '<li><a href="/sales-enablement/">Sales Enablement &amp; RevOps</a></li>' +
                '<li><a href="/ai-enablement/">AI Enablement</a></li>' +
                '<li><a href="/lead-signal/">LeadSignal Platform</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="footer-col">' +
              '<h4>HubSpot</h4>' +
              '<ul>' +
                '<li><a href="/hubspot-agency/">HubSpot Overview</a></li>' +
                '<li><a href="/hubspot-consultancy/">Consultancy</a></li>' +
                '<li><a href="/hubspot-sales-hub-implementation/">Implementation</a></li>' +
                '<li><a href="/hubspot-audit/">Free Audit</a></li>' +
                '<li><a href="/hubspot-support-packages/">Support Packages</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="footer-col">' +
              '<h4>Company</h4>' +
              '<ul>' +
                '<li><a href="/about/">About Revio</a></li>' +
                '<li><a href="/work/">Our Work</a></li>' +
                '<li><a href="/testimonials/">Testimonials</a></li>' +
                '<li><a href="/guides/">Guides</a></li>' +
                '<li><a href="/pricing/">Pricing</a></li>' +
                '<li><a href="/book-a-call/">Contact</a></li>' +
                '<li><a href="/start-growing/">Request a Quote</a></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<span>&copy; ' + year + ' Revio. All rights reserved.</span>' +
            '<span class="sp"></span>' +
            '<a href="/privacy/">Privacy Policy</a>' +
            '<a href="/terms/">Terms of Service</a>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  function closeAllDropdowns(except) {
    document.querySelectorAll('.nav-item.open').forEach(function (el) {
      if (el === except) return;
      el.classList.remove('open');
      var btn = el.querySelector('.nav-top[aria-expanded]');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  function mount() {
    var headerMount = document.getElementById('site-header');
    var footerMount = document.getElementById('site-footer');
    if (headerMount) headerMount.outerHTML = headerHTML();
    if (footerMount) footerMount.outerHTML = footerHTML();

    initTheme();

    /* Desktop dropdowns: click/tap toggles, hover + focus-within
       handled by CSS. Escape and outside-click close. */
    document.querySelectorAll('.nav-item > button.nav-top').forEach(function (btn) {
      var item = btn.parentNode;
      btn.addEventListener('click', function () {
        var open = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        closeAllDropdowns(item);
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-item')) closeAllDropdowns(null);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var open = document.querySelector('.nav-item.open');
        closeAllDropdowns(null);
        if (open) {
          var btn = open.querySelector('.nav-top');
          if (btn) btn.focus();
        }
      }
    });

    /* Mobile menu toggle */
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('mobile-menu');
    if (toggle && menu) {
      var setOpen = function (open) {
        menu.classList.toggle('open', open);
        document.body.classList.toggle('menu-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      };
      toggle.addEventListener('click', function () {
        setOpen(!menu.classList.contains('open'));
      });
      menu.addEventListener('click', function (e) {
        if (e.target.closest('a')) setOpen(false);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
          setOpen(false);
          toggle.focus();
        }
      });
      /* Mobile accordion groups */
      menu.querySelectorAll('.m-group-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var open = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        });
      });
    }

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
