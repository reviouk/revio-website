/* ============================================================
   REVIO — shared header + footer partials
   Injects identical nav/footer on every page, handles the
   desktop dropdowns, mobile accordion drawer, active nav
   state, and scroll-reveal animations.
   ============================================================ */
(function () {
  'use strict';

  var MEETING_URL = 'https://revio.agency/meeting/';
  var QUOTE_URL = 'https://revio.agency/start-growing/';
  var LOGO_LIGHT = 'https://revio.agency/wp-content/uploads/2024/09/reviomenulogo.75x.png';
  var LOGO_WHITE = 'https://revio.agency/wp-content/uploads/2022/06/LogoWhite-e1654540193495.png';

  /* Main navigation — mirrors revio.agency's live menu.
     `match` lists page filenames that light the top-level item
     up as current (sub-pages roll up to their parent). */
  var NAV = [
    {
      label: 'Services', href: 'services.html',
      match: ['services.html', 'lead-generation.html', 'paid-search-social.html', 'sales-enablement.html'],
      children: [
        { href: 'lead-generation.html', label: 'Lead Generation' },
        { href: 'paid-search-social.html', label: 'Paid Search &amp; Social' },
        { href: 'sales-enablement.html', label: 'Sales Enablement' }
      ]
    },
    {
      label: 'HubSpot', href: 'hubspot.html',
      match: ['hubspot.html', 'hubspot-consultancy.html', 'hubspot-audit.html', 'hubspot-support.html', 'hubspot-implementation.html'],
      children: [
        { href: 'hubspot-consultancy.html', label: 'HubSpot Consultancy' },
        { href: 'hubspot-audit.html', label: 'HubSpot Audit' },
        { href: 'hubspot-support.html', label: 'Support Packages' },
        { href: 'hubspot-implementation.html', label: 'Hub Implementation' }
      ]
    },
    { label: 'AI', href: 'ai-consultancy.html', match: ['ai-consultancy.html'] },
    { label: 'LeadSignal', href: 'leadsignal.html', match: ['leadsignal.html'] },
    {
      label: 'About', href: 'about.html',
      match: ['about.html', 'work.html', 'testimonials.html', 'guides.html'],
      children: [
        { href: 'about.html', label: 'Why Revio' },
        { href: 'work.html', label: 'Our Work' },
        { href: 'testimonials.html', label: 'Testimonials' },
        { href: 'guides.html', label: 'Guides' }
      ]
    },
    { label: 'Pricing', href: 'pricing.html', match: ['pricing.html'] }
  ];

  var CHEV = '<svg class="chev" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg>';

  /* "Overview" row for a dropdown — skipped when the parent page
     already appears among the children (e.g. About → Why Revio). */
  function overviewLink(item, page) {
    var dupe = item.children.some(function (c) { return c.href === item.href; });
    if (dupe) return '';
    return '<a href="' + item.href + '"' +
      (item.href === page ? ' aria-current="page"' : '') +
      '>' + item.label + ' Overview</a>';
  }

  function currentPage() {
    var path = window.location.pathname;
    var file = path.substring(path.lastIndexOf('/') + 1);
    return file === '' ? 'index.html' : file;
  }

  function desktopNav(page) {
    return NAV.map(function (item) {
      var isCurrent = item.match.indexOf(page) !== -1;
      if (!item.children) {
        return '<div class="nav-item">' +
          '<a class="nav-top" href="' + item.href + '"' +
          (isCurrent ? ' aria-current="page"' : '') +
          '>' + item.label + '</a></div>';
      }
      var panelId = 'nav-panel-' + item.label.toLowerCase().replace(/[^a-z]/g, '');
      var links = item.children.map(function (child) {
        return '<a href="' + child.href + '"' +
          (child.href === page ? ' aria-current="page"' : '') +
          '>' + child.label + '</a>';
      }).join('');
      return '<div class="nav-item">' +
        '<button class="nav-top' + (isCurrent ? ' is-active' : '') + '" type="button" ' +
          'aria-expanded="false" aria-haspopup="true" aria-controls="' + panelId + '">' +
          item.label + CHEV +
        '</button>' +
        '<div class="nav-dropdown" id="' + panelId + '">' +
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
          '>' + item.label + '</a>';
      }
      var subId = 'm-sub-' + item.label.toLowerCase().replace(/[^a-z]/g, '');
      var links = item.children.map(function (child) {
        return '<a href="' + child.href + '"' +
          (child.href === page ? ' aria-current="page"' : '') +
          '>' + child.label + '</a>';
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

  function headerHTML() {
    var page = currentPage();
    return '' +
      '<header class="site-header">' +
        '<div class="nav-in">' +
          '<a class="brand" href="index.html" aria-label="Revio — home">' +
            '<img src="' + LOGO_LIGHT + '" alt="Revio">' +
          '</a>' +
          '<span class="nav-sp"></span>' +
          '<nav class="nav-links" aria-label="Main navigation">' + desktopNav(page) + '</nav>' +
          '<a class="btn btn-ghost-dark btn-sm nav-quote" href="' + QUOTE_URL + '">Request a Quote</a>' +
          '<a class="btn btn-mint btn-sm nav-book" href="' + MEETING_URL + '">Book a Meeting</a>' +
          '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">' +
            '<svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
            '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
          '</button>' +
        '</div>' +
        '<nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">' +
          mobileNav(page) +
          '<a class="btn btn-ghost-dark" href="' + QUOTE_URL + '">Request a Quote</a>' +
          '<a class="btn btn-mint" href="' + MEETING_URL + '">Book a Meeting</a>' +
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
              '<a class="brand" href="index.html" aria-label="Revio — home">' +
                '<img src="' + LOGO_WHITE + '" alt="Revio">' +
              '</a>' +
              '<p class="footer-blurb">UK inbound growth agency and HubSpot Solutions Partner. More traffic, better leads, faster deals.</p>' +
              '<div class="footer-contact">' +
                '<a href="mailto:grow@revio.agency">grow@revio.agency</a>' +
                '<a href="tel:+447590977397">+44 7590 977397</a>' +
                '<span class="addr">Imperial Place, 4 Maxwell Rd,<br>Borehamwood, WD6 1JN, UK</span>' +
              '</div>' +
              '<span class="footer-badge">HubSpot Solutions Partner</span>' +
            '</div>' +
            '<div class="footer-col">' +
              '<h4>Services</h4>' +
              '<ul>' +
                '<li><a href="lead-generation.html">Inbound Lead Generation</a></li>' +
                '<li><a href="paid-search-social.html">Paid Search &amp; Social</a></li>' +
                '<li><a href="sales-enablement.html">Sales Enablement &amp; RevOps</a></li>' +
                '<li><a href="ai-consultancy.html">AI Enablement</a></li>' +
                '<li><a href="leadsignal.html">LeadSignal Platform</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="footer-col">' +
              '<h4>HubSpot</h4>' +
              '<ul>' +
                '<li><a href="hubspot.html">HubSpot Overview</a></li>' +
                '<li><a href="hubspot-consultancy.html">Consultancy</a></li>' +
                '<li><a href="hubspot-implementation.html">Implementation</a></li>' +
                '<li><a href="hubspot-audit.html">Free Audit</a></li>' +
                '<li><a href="hubspot-support.html">Support Packages</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="footer-col">' +
              '<h4>Company</h4>' +
              '<ul>' +
                '<li><a href="about.html">About Revio</a></li>' +
                '<li><a href="work.html">Our Work</a></li>' +
                '<li><a href="testimonials.html">Testimonials</a></li>' +
                '<li><a href="guides.html">Guides</a></li>' +
                '<li><a href="pricing.html">Pricing</a></li>' +
                '<li><a href="contact.html">Contact</a></li>' +
                '<li><a href="https://revio.agency/start-growing/">Start Growing</a></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<span>&copy; ' + year + ' Revio. All rights reserved.</span>' +
            '<span class="sp"></span>' +
            '<a href="privacy.html">Privacy Policy</a>' +
            '<a href="terms.html">Terms of Service</a>' +
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
      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
      menu.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
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
