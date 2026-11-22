const S = require('../../site');
const C = S.CLEARDESK;

const html = `
<p class="updated">Last updated: 21 November 2026</p>

<h2 id="service">1. What the service is</h2>
<p>Over to Flo is a done-for-you assistant service run by REVIO, of ${S.ADDRESS}. The assistant is called Flo. Flo is automated, and it says so.</p>
<p>With your permission, Flo connects to your phone line (missed calls are forwarded to a number we provide), your Google or Microsoft mailbox and calendar, and your invoicing software. It answers calls, sorts email, drafts replies for your approval, books diary slots, chases unpaid invoices and texts you summaries.</p>
<p>In these terms, "we" and "us" mean REVIO, and "you" means the business that signs up.</p>

<h2 id="price">2. Fees and payment</h2>
<p>There is a one-off setup fee and a monthly plan. Prices are as published on our <a href="/pricing/">pricing page</a> when you sign up, and they exclude VAT.</p>
<p>Your plan includes a call minute allowance. If you use more, top-up packs or overage apply, as set out on the <a href="/pricing/">pricing page</a>.</p>
<p>We invoice the monthly plan in advance. If we change a price, existing clients get at least 30 days' notice by email before it applies to them.</p>

<h2 id="cancel">3. No minimum term</h2>
<p>There is no minimum term. You can cancel at any time by emailing <a href="mailto:${S.EMAIL}">${S.EMAIL}</a>. Cancellation takes effect at the end of the month you have already paid for. The setup fee is not refundable once setup work has started.</p>

<h2 id="supervised">4. The supervised first fortnight</h2>
<p>For the first two weeks, Flo sends nothing to anyone without your approval. Afterwards, you decide which kinds of message Flo may send on its own, such as appointment confirmations or invoice reminders. You can change or withdraw that at any time.</p>

<h2 id="wont">5. What Flo will not do</h2>
<p>Flo will not:</p>
<ul>
<li>take card payments or handle payment details;</li>
<li>sign, accept or agree to anything on your behalf;</li>
<li>give legal, financial, medical or other professional advice;</li>
<li>pretend to be a person. It tells callers it is an automated assistant.</li>
</ul>

<h2 id="you">6. Your responsibilities</h2>
<p>You agree to:</p>
<ul>
<li>give us an accurate price list, opening hours and any rules Flo should follow, and tell us when they change;</li>
<li>tell your own customers about call recording and automated handling where the law requires it, using the wording we give you;</li>
<li>use the service lawfully, and not to send spam, harass anyone or break anyone's rights;</li>
<li>keep your accounts and sign-ins secure, and tell us at once if you think someone else has got access.</li>
</ul>
<p>You are responsible for checking drafts before you approve them, and for anything Flo sends under an approval you have given.</p>

<h2 id="data">7. Your accounts and your data</h2>
<p>Your phone line, mailbox, calendar, invoicing account and data stay in your name. We do not own them. You give us permission to access and process them to provide the service, and you can withdraw it at any time by disconnecting. How we handle personal data is set out in our <a href="/privacy/">privacy policy</a>.</p>

<h2 id="availability">8. Availability and mistakes</h2>
<p>We work to keep Flo running, but we do not guarantee that the service will always be available or free of errors. Flo can make mistakes. It can mishear a caller, misread an email or draft something wrongly. That is why you approve what it sends.</p>

<h2 id="liability">9. Liability</h2>
<!-- PROPOSED (legal judgement call, owner to confirm): the liability cap at fees paid in the previous 12 months. -->
<p>Nothing in these terms limits liability that the law does not allow to be limited, including liability for death or personal injury caused by negligence, or for fraud.</p>
<p>Subject to that, we are not liable for indirect or consequential loss, or for loss of profit or business, and our total liability to you in connection with the service is limited to the fees you paid us in the 12 months before the claim arose.</p>

<h2 id="thirdparty">10. Third-party services</h2>
<p>Flo works with services we do not control, such as phone networks, Google, Microsoft and your invoicing software. They can change, or stop working with us, and we are not responsible for that. If a change affects what Flo can do, we will tell you and fix it where we reasonably can.</p>

<h2 id="ending">11. Ending the service and your data</h2>
<p>When the service ends, we disconnect Flo from your phone, email, calendar and invoicing accounts and delete the stored sign-ins. Your phone line, mailbox, calendar and invoicing account stay with you, untouched. We keep or delete other data as set out in the retention section of the <a href="/privacy/">privacy policy</a>. If you want a copy of your call summaries and settings first, ask before you cancel.</p>
<p>We may suspend or end the service if you break these terms or use it unlawfully. We will tell you why.</p>

<h2 id="changes">12. Changes to these terms</h2>
<p>We may update these terms. The latest version is always on this page. If a change matters, we email you at least 30 days before it applies. If you do not agree, you can cancel under section 3.</p>

<h2 id="law">13. Governing law</h2>
<!-- PROPOSED (legal judgement call, owner to confirm): English law and the courts of England and Wales. -->
<p>These terms are governed by the law of England and Wales. The courts of England and Wales have exclusive jurisdiction over any dispute arising from them.</p>

<h2 id="contact">14. Contact</h2>
<p>Email <a href="mailto:${S.EMAIL}">${S.EMAIL}</a> or write to REVIO, ${S.ADDRESS}.</p>
`;

module.exports = {
  slug: 'cleardesk/terms',
  title: 'Terms of Service | Over to Flo by REVIO',
  description: 'The plain-English terms for Over to Flo by REVIO: fees, no minimum term, the supervised first fortnight, what Flo will not do, your data and liability.',
  utility: true,
  art: 'doc',
  badge: 'Legal',
  h1: 'Terms of service.',
  sub: 'What you get, what it costs, what Flo will and will not do, and how to leave. No minimum term, and your accounts and data stay in your name.',
  ctas: [{ label: 'See every price', href: C.PRICING_URL, style: 'mint' }, { label: 'Read the privacy policy', href: '/privacy/', style: 'ghost' }],
  meetingRows: false,
  sections: [
    { type: 'prose', html },
    {
      type: 'faq', tone: 'wash', kicker: 'In short', h2: 'The short answers.',
      items: [
        { q: 'Is there a contract length?', a: 'No. Cancel any time and it ends at the close of the month you have paid for.' },
        { q: 'Who owns my accounts and data?', a: 'You do. Everything stays in your name, and we delete our stored sign-ins when you leave.' },
        { q: 'Can Flo sign things or take payments?', a: 'No. It will not take card payments, sign anything, give professional advice or pretend to be a person.' },
        { q: 'What if Flo gets something wrong?', a: 'You approve what it sends, especially in the first fortnight. Liability is set out in section 9.' },
      ],
    },
    {
      type: 'cta', h2: 'Questions about the terms?',
      text: 'Email us and a person will reply.',
      ctas: [{ label: 'Email ' + S.EMAIL, href: 'mailto:' + S.EMAIL, style: 'mint' }, { label: 'See every price', href: C.PRICING_URL, style: 'ghost' }],
    },
  ],
};
