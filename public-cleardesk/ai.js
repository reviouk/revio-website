/* REVIO — behaviour for the generated AI pages.
 * Count-up stats, native form posting to the delivery dashboard, the ROI
 * calculator, and the booking embed fallback. partials.js already handles
 * the header, footer, theme and scroll-reveal; this only adds what those
 * pages need on top. No dependencies. */
(function () {
  'use strict';

  /* Where the forms go. The delivery dashboard (admin.revio.agency) exposes a
     public intake endpoint that is origin-checked and rate-limited; there is
     no key in this file on purpose. */
  var INTAKE_URL = 'https://admin.revio.agency/api/intake/public';

  var reduce = false;
  try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { reduce = false; }

  /* ---------- count-up ---------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = (String(target).split('.')[1] || '').length;
    if (reduce) { el.textContent = prefix + target.toLocaleString('en-GB') + suffix; return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var t = Math.min(1, (ts - start) / dur);
      var e = 1 - Math.pow(1 - t, 3);
      var v = target * e;
      el.textContent = prefix + (decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-GB')) + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); io.unobserve(en.target); } });
      }, { threshold: .4 });
      counters.forEach(function (c) { io.observe(c); });
    } else counters.forEach(countUp);
  }

  /* ---------- steps: reveal the accent bar when the card reveals ---------- */
  document.querySelectorAll('.ai-step.reveal').forEach(function (s) {
    var mo = new MutationObserver(function () { if (s.classList.contains('in')) { s.classList.add('in'); mo.disconnect(); } });
    mo.observe(s, { attributes: true, attributeFilter: ['class'] });
  });

  /* ---------- forms ---------- */
  function serialize(form) {
    var out = {};
    var fd = new FormData(form);
    fd.forEach(function (v, k) {
      if (k.slice(-2) === '[]') { var kk = k.slice(0, -2); (out[kk] = out[kk] || []).push(v); }
      else out[k] = v;
    });
    return out;
  }
  document.querySelectorAll('form.ai-form').forEach(function (form) {
    var status = form.querySelector('.ai-form-status');
    var started = Date.now();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (status) { status.className = 'ai-form-status'; status.textContent = ''; }
      var data = serialize(form);
      if (data.website_url) return; /* honeypot */
      data.form_id = form.getAttribute('data-form-id') || 'contact';
      data.page = location.pathname;
      data.referrer = document.referrer || '';
      data.elapsed_ms = Date.now() - started;
      try {
        var utm = {};
        new URLSearchParams(location.search).forEach(function (v, k) { if (/^utm_|^gclid|^fbclid/.test(k)) utm[k] = v; });
        data.utm = utm;
      } catch (err) { /* ignore */ }
      var btn = form.querySelector('button[type=submit]');
      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = 'Sending…'; }
      fetch(INTAKE_URL, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
        .then(function () {
          var done = document.createElement('div');
          done.className = 'ai-form-done';
          done.innerHTML = '<div class="tick"><svg viewBox="0 0 24 24"><path d="m5 12 5 5L19 7"/></svg></div>' +
            '<h3>Thank you, that has landed with us.</h3>' +
            '<p class="ai-form-sub">We reply to every enquiry within one working day. If it is urgent, ' +
            '<a href="' + (form.getAttribute('data-book') || '/book-a-meeting/') + '" style="color:var(--purple);font-weight:600">book a slot in the diary</a> now.</p>';
          form.replaceWith(done);
          try { if (window.dataLayer) window.dataLayer.push({ event: 'revio_enquiry', form_id: data.form_id }); } catch (err) { /* ignore */ }
          try { if (window.gtag) window.gtag('event', 'generate_lead', { form_id: data.form_id }); } catch (err) { /* ignore */ }
        })
        .catch(function () {
          if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label; }
          if (status) {
            status.className = 'ai-form-status err';
            status.innerHTML = 'That did not send. Email us at <a href="mailto:grow@revio.agency" style="font-weight:600">grow@revio.agency</a> and we will pick it up.';
          }
        });
    });
  });

  /* ---------- ROI calculator ---------- */
  var calc = document.getElementById('roi-calc');
  if (calc) {
    var $ = function (id) { return calc.querySelector('#' + id); };
    var fmt = function (n) { return '£' + Math.round(n).toLocaleString('en-GB'); };
    var ins = {
      people: $('c-people'), hours: $('c-hours'), rate: $('c-rate'), share: $('c-share'),
      enq: $('c-enq'), missed: $('c-missed'), value: $('c-value'), close: $('c-close'),
    };
    var outs = {
      annual: $('o-annual'), monthly: $('o-monthly'), hours: $('o-hours'), revenue: $('o-revenue'),
      payback: $('o-payback'), fit: $('o-fit'), fitText: $('o-fit-text'), fitLink: $('o-fit-link'),
      bAdmin: $('b-admin'), bAI: $('b-ai'), bAdminV: $('b-admin-v'), bAIV: $('b-ai-v'),
      bMissed: $('b-missed'), bMissedV: $('b-missed-v'), bWon: $('b-won'), bWonV: $('b-won-v'),
    };
    function num(el) { return parseFloat(el.value) || 0; }
    function run() {
      var people = num(ins.people), hours = num(ins.hours), rate = num(ins.rate), share = num(ins.share) / 100;
      var enq = num(ins.enq), missed = num(ins.missed) / 100, value = num(ins.value), close = num(ins.close) / 100;
      /* labour: hours a week on repetitive work × the share AI can take × loaded hourly cost */
      var weeklyHoursBack = people * hours * share;
      var labourAnnual = weeklyHoursBack * rate * 46;
      /* revenue: enquiries missed or answered late × a recovery of 60% × close rate × value */
      var recovered = enq * missed * 0.6;
      var revenueAnnual = recovered * close * value * 12;
      var annual = labourAnnual + revenueAnnual;
      var monthly = annual / 12;
      /* fit + payback against the published ladder */
      var buildCost, buildLabel, buildHref;
      if (annual < 12000) { buildCost = 1500; buildLabel = 'AI Opportunity Audit'; buildHref = '/ai-opportunity-audit/'; }
      else if (annual < 40000) { buildCost = 4500; buildLabel = 'one agent or automation (from £4,500)'; buildHref = '/ai-implementation/'; }
      else if (annual < 110000) { buildCost = 12000; buildLabel = 'a connected build (£12,000) or the Advisor tier of an Embedded AI Lead'; buildHref = '/embedded-ai-lead/'; }
      else { buildCost = 6500 * 6; buildLabel = 'an Embedded AI Lead at the Operating Lead tier (£6,500 a month)'; buildHref = '/embedded-ai-lead/'; }
      var payback = monthly > 0 ? buildCost / monthly : Infinity;
      outs.annual.textContent = fmt(annual);
      outs.monthly.textContent = fmt(monthly) + ' a month';
      outs.hours.textContent = Math.round(weeklyHoursBack).toLocaleString('en-GB') + ' hrs';
      outs.revenue.textContent = fmt(revenueAnnual);
      outs.payback.textContent = !isFinite(payback) ? '—' : payback < 1 ? 'Under a month' : Math.round(payback * 10) / 10 + ' months';
      outs.fit.textContent = buildLabel.charAt(0).toUpperCase() + buildLabel.slice(1);
      outs.fitText.textContent = annual < 12000
        ? 'At this size the audit alone is usually the right spend: two weeks, and a written answer on whether any build is worth it.'
        : 'Based on the published ladder. The audit comes first either way and its fee is credited against the build.';
      outs.fitLink.setAttribute('href', buildHref);
      /* bars */
      var adminNow = people * hours * rate * 46;
      var max = Math.max(adminNow, 1);
      outs.bAdmin.style.width = '100%'; outs.bAdminV.textContent = fmt(adminNow);
      outs.bAI.style.width = Math.min(100, labourAnnual / max * 100) + '%'; outs.bAIV.textContent = fmt(labourAnnual);
      var missedNow = enq * missed * close * value * 12;
      var max2 = Math.max(missedNow, 1);
      outs.bMissed.style.width = '100%'; outs.bMissedV.textContent = fmt(missedNow);
      outs.bWon.style.width = Math.min(100, revenueAnnual / max2 * 100) + '%'; outs.bWonV.textContent = fmt(revenueAnnual);
      /* live labels */
      calc.querySelectorAll('output[for]').forEach(function (o) {
        var src = $(o.getAttribute('for'));
        if (!src) return;
        var v = num(src);
        var kind = o.getAttribute('data-kind');
        o.textContent = kind === 'money' ? fmt(v) : kind === 'pct' ? v + '%' : kind === 'hrs' ? v + ' hrs' : v.toLocaleString('en-GB');
      });
      /* carry the numbers into the enquiry form, if it is on the page */
      var carry = document.getElementById('calc-carry');
      if (carry) carry.value = 'Calculator: ' + fmt(annual) + ' a year (' + Math.round(weeklyHoursBack) + ' hrs/wk back, ' + fmt(revenueAnnual) + ' revenue). Fit: ' + buildLabel + '.';
    }
    Object.keys(ins).forEach(function (k) { if (ins[k]) ins[k].addEventListener('input', run); });
    run();
  }

  /* ---------- booking embed ---------- */
  var book = document.querySelector('.ai-book[data-src]');
  if (book) {
    var src = book.getAttribute('data-src');
    if (src && /^https:\/\//.test(src)) {
      var f = document.createElement('iframe');
      f.src = src; f.title = 'Book a meeting with Revio'; f.loading = 'lazy';
      f.setAttribute('allow', 'clipboard-write');
      book.innerHTML = ''; book.appendChild(f);
    }
  }
})();
