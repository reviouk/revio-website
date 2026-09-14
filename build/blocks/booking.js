/* Microsoft Bookings embed for rob@revio.agency (Teams meetings). The page
 * URL lives in one place: SITE.BOOKINGS_EMBED. Until it is set the block
 * shows the enquiry form route instead, so the page is never a dead end. */
module.exports = function booking(s, SITE, u) {
  const { rich, esc, head2, secCls } = u;
  const src = SITE.BOOKINGS_EMBED || '';
  const fallback = `<div class="ai-book-fallback"><h3>The diary is being connected.</h3><p>Send a note with two or three times that suit you and Rob will confirm one by email within a working day.</p><a class="btn btn-purple" href="${SITE.CONTACT_URL}">Suggest a time</a></div>`;
  return `<section class="${secCls(s)}" id="diary"><div class="wrap wrap-narrow">${head2(s)}
<div class="ai-book mt-lg reveal" data-src="${esc(src)}">${src ? '<noscript>' + fallback + '</noscript>' : fallback}</div>
<p class="micro" style="text-align:center">Meetings are on Microsoft Teams. You will get a calendar invitation with the link the moment you book. Prefer email? <a href="mailto:${SITE.EMAIL}" style="color:var(--purple);font-weight:600">${SITE.EMAIL}</a></p>
</div></section>`;
};
