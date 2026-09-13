/* Draft nav + footer for the restructured AI offering (/newaisite/).
 *
 * Deliberately its OWN header and footer rather than the live site's
 * partials.js: this is a draft of a different offering structure, and it must
 * be possible to look at it without the live menu insisting the old structure
 * is still the truth. Nothing here touches the live site.
 *
 * The structure being drafted: one fixed-price entry product, one retained
 * service, one build service, everything priced in the open. Mount points are
 * <div id="nav"> and <div id="foot">.
 */
(function () {
  var BASE = '/newaisite';

  var SERVICES = [
    [BASE + '/ai-audit/', 'AI Opportunity Audit', 'Two weeks, fixed price, a written answer'],
    [BASE + '/embedded-ai-lead/', 'Embedded AI Lead', 'A senior AI lead inside your team, monthly'],
    [BASE + '/ai-build/', 'AI Build &amp; Integration', 'Fixed price, fixed date, wired into your CRM'],
    [BASE + '/ai-growth-systems/', 'AI Growth Systems', 'Find, nurture and create, as one machine'],
    [BASE + '/ai-governance/', 'Governance &amp; Compliance', 'What the AI may do, written down'],
  ];

  function nav(here) {
    var items = SERVICES.map(function (s) {
      return '<a href="' + s[0] + '"' + (here === s[0] ? ' aria-current="page"' : '') + '>' +
        '<b>' + s[1] + '</b><span>' + s[2] + '</span></a>';
    }).join('');
    return '' +
      '<div class="dnav-wrap"><header class="dnav">' +
        '<a class="dbrand" href="' + BASE + '/"><span class="dmk">R</span>REVIO</a>' +
        '<span class="dflex"></span>' +
        '<nav class="dlinks">' +
          '<span class="ddrop"><button type="button" class="dtop" id="dsrvbtn" aria-expanded="false">Services<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>' +
            '<div class="dmenu" id="dsrvmenu">' + items + '</div></span>' +
          '<a class="dtop" href="' + BASE + '/pricing/">Pricing</a>' +
          '<a class="dtop" href="' + BASE + '/work/">Proof</a>' +
        '</nav>' +
        '<a class="dbtn" href="' + BASE + '/contact/">Talk to us</a>' +
        '<button type="button" class="dburger" id="dburger" aria-label="Menu"><i></i><i></i><i></i></button>' +
      '</header>' +
      '<div class="ddrawer" id="ddrawer">' +
        SERVICES.map(function (s) { return '<a href="' + s[0] + '">' + s[1] + '</a>'; }).join('') +
        '<a href="' + BASE + '/pricing/">Pricing</a>' +
        '<a href="' + BASE + '/work/">Proof</a>' +
        '<a class="dbtn" href="' + BASE + '/contact/">Talk to us</a>' +
      '</div></div>' +
      '<div class="draftbar">DRAFT &mdash; a restructured offering, not linked from the live site. ' +
        '<a href="/">Back to revio.agency</a></div>';
  }

  function foot() {
    return '' +
      '<footer class="dfoot"><div class="dfwrap">' +
        '<div><b>REVIO</b><p>AI systems for businesses that already have a process ' +
          'worth automating. We find the one that pays, build it, and stay until it is used.</p></div>' +
        '<div><b>Services</b>' + SERVICES.map(function (s) {
          return '<a href="' + s[0] + '">' + s[1] + '</a>';
        }).join('') + '</div>' +
        '<div><b>Company</b>' +
          '<a href="' + BASE + '/pricing/">Pricing</a>' +
          '<a href="' + BASE + '/work/">Proof</a>' +
          '<a href="' + BASE + '/contact/">Contact</a>' +
          '<a href="/">The live site</a>' +
        '</div>' +
      '</div><div class="dfbot">Draft structure &middot; ' + new Date().getFullYear() + '</div></footer>';
  }

  function boot() {
    var here = location.pathname.replace(/index\.html$/, '');
    var n = document.getElementById('nav');
    if (n) n.innerHTML = nav(here);
    var f = document.getElementById('foot');
    if (f) f.innerHTML = foot();

    var btn = document.getElementById('dsrvbtn');
    var menu = document.getElementById('dsrvmenu');
    if (btn && menu) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    }
    var bg = document.getElementById('dburger');
    var dr = document.getElementById('ddrawer');
    if (bg && dr) bg.addEventListener('click', function () { dr.classList.toggle('open'); });

    /* Scroll-reveal, same idea as the live site: nothing moves for anyone who
       has asked the OS for less motion. */
    var els = document.querySelectorAll('.rv');
    var reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { reduce = false; }
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -60px 0px' });
      els.forEach(function (el) { io.observe(el); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
