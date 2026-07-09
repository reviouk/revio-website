/* ============================================================
   REVIO — shared header + footer partials
   Injects identical nav/footer on every page, handles the
   mobile menu, active nav state, and scroll-reveal animations.
   ============================================================ */
(function () {
  'use strict';

  var MEETING_URL = 'https://revio.agency/meeting/';

  /* Main navigation. `match` lists page filenames that should
     light this item up as current (sub-pages roll up to parents). */
  var NAV = [
    { href: 'index.html', label: 'Home', match: ['index.html', ''] },
    { href: 'services.html', label: 'Services', match: ['services.html', 'lead-generation.html', 'paid-search-social.html', 'sales-enablement.html'] },
    { href: 'hubspot.html', label: 'HubSpot', match: ['hubspot.html', 'hubspot-consultancy.html', 'hubspot-audit.html', 'hubspot-support.html', 'hubspot-implementation.html'] },
    { href: 'ai-consultancy.html', label: 'AI', match: ['ai-consultancy.html'] },
    { href: 'leadsignal.html', label: 'LeadSignal', match: ['leadsignal.html'] },
    { href: 'work.html', label: 'Work', match: ['work.html'] },
    { href: 'pricing.html', label: 'Pricing', match: ['pricing.html'] },
    { href: 'about.html', label: 'About', match: ['about.html'] },
    { href: 'contact.html', label: 'Contact', match: ['contact.html', 'thankyou.html'] }
  ];

  function currentPage() {
    var path = window.location.pathname;
    var file = path.substring(path.lastIndexOf('/') + 1);
    return file === '' ? 'index.html' : file;
  }

  function navLinks(page, extraClass) {
    return NAV.map(function (item) {
      var isCurrent = item.match.indexOf(page) !== -1;
      return '<a href="' + item.href + '"' +
        (isCurrent ? ' aria-current="page"' : '') +
        (extraClass ? ' class="' + extraClass + '"' : '') +
        '>' + item.label + '</a>';
    }).join('');
  }

  function headerHTML() {
    var page = currentPage();
    return '' +
      '<header class="site-header">' +
        '<div class="nav-in">' +
          '<a class="brand" href="index.html" aria-label="Revio — home">REVIO<span class="dot">.</span><small>Growth Agency</small></a>' +
          '<span class="nav-sp"></span>' +
          '<nav class="nav-links" aria-label="Main navigation">' + navLinks(page) + '</nav>' +
          '<a class="btn btn-mint btn-sm nav-book" href="' + MEETING_URL + '">Book a Meeting</a>' +
          '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">' +
            '<svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
            '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
          '</button>' +
        '</div>' +
        '<nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">' +
          navLinks(page) +
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
              '<a class="brand" href="index.html">REVIO<span class="dot">.</span></a>' +
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

  function mount() {
    var headerMount = document.getElementById('site-header');
    var footerMount = document.getElementById('site-footer');
    if (headerMount) headerMount.outerHTML = headerHTML();
    if (footerMount) footerMount.outerHTML = footerHTML();

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
