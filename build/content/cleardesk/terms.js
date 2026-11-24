const S = require('../../site');
const C = S.CLEARDESK;

/* DRAFT 24 Nov 2026, rewritten for the agents model: no setup fee, a price for
   each agent, three ways to pay, set up by the customer in My Flo. Not live
   until Rob has read it. Lines marked PROPOSED are legal judgement calls for
   the owner to confirm. */
const html = `
<p class="updated">Last updated: 24 November 2026</p>

<h2 id="service">1. What the service is</h2>
<p>Over to Flo is a team of AI agents that you set up and run by yourself. It is provided by Lead Signal AI Technologies Limited, a company registered in England and Wales, company number 17361862. Our registered office is 22 The Ridgeway, Flitwick, Bedford, MK45 1DH. Our main office is ${S.ADDRESS}.</p>
<p>The agents are Flo, Poppy, Bill, Paige, Finn and Lex. Each one does a job for your business, such as answering missed calls or writing your social posts. Every agent is automated, and it says so.</p>
<p>The <a href="/pricing/">pricing page</a> shows which agents are working today. An agent marked "Coming soon" is not part of the service until it opens, and we do not promise a date for it.</p>
<p>In these terms, "we" and "us" mean Lead Signal AI Technologies Limited. "You" means the person or business that holds the account.</p>

<h2 id="account">2. Your account</h2>
<p>You create your account and set up your agents yourself in My Flo. You sign in with a code we send to your mobile or your email.</p>
<p>The person who creates the account is the account owner. Only the account owner can switch an agent on, pause it or switch it off.</p>
<p>You confirm that what you tell us about your business is accurate, and that you are allowed to act for it.</p>

<h2 id="price">3. Prices and payment</h2>
<p>There is no setup fee. You pay for each agent, or for a bundle of agents, that you switch on. Prices are as published on our <a href="/pricing/">pricing page</a> when you switch the agent on.</p>
<p>You choose to pay monthly, every three months or yearly, in pounds, dollars or euros. Each payment is taken by card, in advance, for the period ahead. A renewal costs the same as your first payment, unless we have told you about a price change as set out below.</p>
<p>Your payments renew by themselves until you switch the agent off.</p>
<p>Card payments are handled by our payment provider. We do not see or keep your full card number.</p>
<p>Phone answering includes a number of call minutes each month, shown on the pricing page. If you need more, you can add minutes in blocks of 100 at the price shown there.</p>
<p>If a payment fails, we tell you, and you can change your card in My Flo. We may pause an agent until the payment is made.</p>
<p>If we change a price, we email you at least 30 days before it applies to you. The new price applies from your next renewal after that.</p>

<h2 id="cancel">4. No minimum term</h2>
<p>There is no minimum term. You can add an agent, pause one or switch one off at any time in My Flo.</p>
<p>A paused agent stops working but is still paid for until you switch it off.</p>
<p>Switching an agent off cancels it at the end of the period you have paid for, whether that is a month, three months or a year. The agent keeps working until that date, and you are not charged for it again. You can change your mind before that date and keep the agent.</p>
<!-- PROPOSED (owner to confirm): no refund for part of a period that has already been paid for. -->
<p>We do not refund part of a period that you have already paid for.</p>
<p>If you cannot get into My Flo, email <a href="mailto:${S.EMAIL}">${S.EMAIL}</a> and we will switch the agent off for you.</p>

<h2 id="charge">5. You stay in charge</h2>
<p>Every agent asks before it acts, until you choose otherwise. Anything that needs your approval appears in My Flo under "Waiting for your yes", and nothing goes out until you say yes.</p>
<p>The setting called "How much it does alone" lets you choose which things an agent may do without asking, where that agent offers it. You can change that setting at any time.</p>

<h2 id="wont">6. What the agents will not do</h2>
<p>The agents will not:</p>
<ul>
<li>take card payments from your customers or handle their payment details;</li>
<li>sign, accept or agree to anything on your behalf;</li>
<li>give legal, financial, tax, medical or other professional advice;</li>
<li>pretend to be a person. Flo tells callers it is an automated assistant.</li>
</ul>
<p>Where an agent drafts a document or explains one, that is a starting point for you to check. It is not professional advice.</p>

<h2 id="you">7. Your responsibilities</h2>
<p>You agree to:</p>
<ul>
<li>give the agents accurate details of your business, such as your prices, your opening hours and any rules they should follow, and keep them up to date in My Flo;</li>
<li>tell your own customers about call recording and automated handling where the law requires it;</li>
<li>use the service lawfully, and not to send spam, harass anyone or break anyone's rights;</li>
<li>keep your sign-in details secure, and tell us at once if you think someone else has got access.</li>
</ul>
<p>You are responsible for checking an agent's work before you say yes to it, for anything you post, send or publish, and for anything an agent does under a setting you have chosen.</p>

<h2 id="data">8. Your accounts and your data</h2>
<p>The accounts you connect to an agent stay in your name. That covers your phone line, your Google or Microsoft mailbox and calendar, your social media accounts, your accounting software and your website address. We do not own them. You give us permission to access and process them to provide the service, and you can withdraw it at any time by disconnecting. How we handle personal data is set out in our <a href="/privacy/">privacy policy</a>.</p>

<h2 id="availability">9. Availability and mistakes</h2>
<p>We work to keep the agents running, but we do not guarantee that the service will always be available or free of errors. An agent can make mistakes. It can mishear a caller, misread an email or write something wrongly. That is why it asks you first.</p>

<h2 id="liability">10. Liability</h2>
<!-- PROPOSED (legal judgement call, owner to confirm): the liability cap at fees paid in the previous 12 months. -->
<p>Nothing in these terms limits liability that the law does not allow to be limited, including liability for death or personal injury caused by negligence, or for fraud.</p>
<p>Subject to that, we are not liable for indirect or consequential loss, or for loss of profit or business, and our total liability to you in connection with the service is limited to the amount you paid us in the 12 months before the claim arose.</p>

<h2 id="thirdparty">11. Third-party services</h2>
<p>The agents work with services we do not control, such as phone networks, Google, Microsoft, social networks and your accounting software. They can change, or stop working with us, and we are not responsible for that. If a change affects what an agent can do, we will tell you and fix it where we reasonably can.</p>

<h2 id="ending">12. Ending the service and your data</h2>
<p>When an agent ends, we disconnect it from the accounts you connected for it and delete the stored sign-ins. Those accounts stay with you, untouched. We keep or delete other data as set out in the retention section of the <a href="/privacy/">privacy policy</a>. If you want a copy of your call summaries and settings first, ask before you switch off.</p>
<p>We may suspend or end the service if you break these terms or use it unlawfully. We will tell you why.</p>

<h2 id="changes">13. Changes to these terms</h2>
<p>We may update these terms. The latest version is always on this page. If a change matters, we email you at least 30 days before it applies. If you do not agree, you can switch off under section 4.</p>

<h2 id="law">14. Governing law</h2>
<!-- PROPOSED (legal judgement call, owner to confirm): English law and the courts of England and Wales. -->
<p>These terms are governed by the law of England and Wales. The courts of England and Wales have exclusive jurisdiction over any dispute arising from them.</p>

<h2 id="contact">15. Contact</h2>
<p>Email <a href="mailto:${S.EMAIL}">${S.EMAIL}</a> or write to Lead Signal AI Technologies Limited, ${S.ADDRESS}.</p>
`;

module.exports = {
  slug: 'cleardesk/terms',
  title: 'Terms of Service | Over to Flo by LeadSignal',
  description: 'The plain-English terms for Over to Flo by LeadSignal: prices and payment, no minimum term, how you stay in charge, what the agents will not do, and your data.',
  utility: true,
  art: 'doc',
  badge: 'Legal',
  h1: 'Terms of service.',
  sub: 'What you get, what it costs, what the agents will and will not do, and how to leave. No setup fee, no minimum term, and your accounts and data stay in your name.',
  ctas: [{ label: 'See every price', href: C.PRICING_URL, style: 'mint' }, { label: 'Read the privacy policy', href: '/privacy/', style: 'ghost' }],
  meetingRows: false,
  sections: [
    { type: 'prose', html },
    {
      type: 'faq', tone: 'wash', kicker: 'In short', h2: 'The short answers.',
      items: [
        { q: 'Is there a contract length?', a: 'No. Switch an agent off any time. It keeps working to the end of the period you have paid for, and you are not charged again.' },
        { q: 'Is there a setup fee?', a: 'No. You set it up yourself and pay only for the agents you switch on.' },
        { q: 'Who owns my accounts and data?', a: 'You do. Everything stays in your name, and we delete our stored sign-ins when an agent ends.' },
        { q: 'Can an agent sign things or take payments?', a: 'No. It will not take card payments from your customers, sign anything, give professional advice or pretend to be a person.' },
        { q: 'What if an agent gets something wrong?', a: 'Every agent asks before it acts, until you choose otherwise, so you see its work first. Liability is set out in section 10.' },
      ],
    },
    {
      type: 'cta', h2: 'Questions about the terms?',
      text: 'Email us and a person will reply.',
      ctas: [{ label: 'Email ' + S.EMAIL, href: 'mailto:' + S.EMAIL, style: 'mint' }, { label: 'See every price', href: C.PRICING_URL, style: 'ghost' }],
    },
  ],
};
