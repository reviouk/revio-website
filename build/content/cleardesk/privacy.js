const S = require('../../site');

/* Over to Flo privacy policy. Footer link only, not in the main nav.
   Legal details reused from the main site's public/privacy page: trading name,
   Borehamwood address, grow@revio.agency, ICO complaints route. The main site
   publishes no company number or ICO registration number, so none is given. */
const html = `
<p class="updated">Last updated: 21 November 2026</p>

<h2 id="who">1. Who we are</h2>
<p>Over to Flo is a service run by REVIO, a business registered in England and Wales. Our address is ${S.ADDRESS}.</p>
<p>To ask a question about this policy or your data, email <a href="mailto:${S.EMAIL}">${S.EMAIL}</a>. It goes to a person.</p>
<p>Over to Flo gives small businesses a done-for-you AI assistant, Flo. Flo is an automated assistant, not a person. It answers calls, sorts email, drafts replies, books diary slots and chases unpaid invoices for the business that signs up. We call that business <strong>the client</strong>.</p>

<h2 id="roles">2. Our two roles</h2>
<p>We act in two different roles, and the rules differ for each.</p>
<ul>
<li><strong>Processor.</strong> When Flo handles the client's calls, email, calendar and invoices, it handles personal data about the client's customers, suppliers and contacts. The client decides why and how that data is used. We process it only on the client's instructions. The client is the controller.</li>
<li><strong>Controller.</strong> For the client's own account details, billing records and our dealings with the client, we decide how the data is used. We are the controller.</li>
</ul>
<p>If you are a customer or caller of one of our clients and want to use your rights, please ask that business first. We will help them answer you.</p>

<h2 id="data">3. What data we process</h2>
<h3>Calls</h3>
<ul>
<li>The caller's number, the time and length of the call.</li>
<li>A recording of the call and a written transcript.</li>
<li>A summary and any details the caller gives, such as name, address, job and preferred time.</li>
</ul>
<h3>Email</h3>
<ul>
<li>Messages, drafts and attachments in the mailboxes the client connects, including senders, recipients, subjects and content.</li>
<li>Labels or categories Flo adds when it sorts the inbox.</li>
</ul>
<h3>Calendar</h3>
<ul>
<li>Events, times, attendees and locations in the calendars the client connects.</li>
</ul>
<h3>Invoices</h3>
<ul>
<li>Invoice numbers, amounts, due dates, payment status and customer contact details from the client's invoicing software.</li>
<li>Reminders Flo sends and the replies to them.</li>
</ul>
<h3>Account and billing</h3>
<ul>
<li>The client's name, business name, address, email, phone number and the people they add to the account.</li>
<li>Their price list, opening hours and preferences, which tell Flo how to behave.</li>
<li>Plan, invoices and payment records. We do not store full card numbers.</li>
</ul>
<h3>Special category data</h3>
<p>Flo is not built to collect health or other special category data. Callers or emails may mention it anyway, for example a customer saying why they need an appointment. We treat it with the same care and use it only to deal with the call or message.</p>

<h2 id="why">4. Why we use data, and our lawful bases</h2>
<p>Under UK GDPR we need a lawful basis for each use.</p>
<ul>
<li><strong>Client customer data (we are the processor).</strong> The client is responsible for its own lawful basis, usually legitimate interests or contract, for example answering a customer's call or chasing an invoice that is owed. We use the data only to provide the service.</li>
<li><strong>Account and service data (we are the controller).</strong> We rely on <em>contract</em> to set up and run the service, and on <em>legitimate interests</em> to keep it secure, prevent misuse and improve it.</li>
<li><strong>Billing records.</strong> We rely on <em>legal obligation</em> to keep accounting records.</li>
<li><strong>Marketing to businesses.</strong> We rely on <em>legitimate interests</em> or <em>consent</em>, depending on the channel. You can opt out at any time.</li>
</ul>

<h2 id="recordings">5. Call recording</h2>
<p>Calls answered by Flo are recorded and transcribed. Flo tells every caller at the start of the call that it is an automated assistant and that the call is recorded. The client is responsible for any wider notice to its own customers, and we give the client wording to use.</p>
<p>We record to take accurate messages, book the right slot, resolve disagreements about what was said and check that Flo is working well.</p>

<h2 id="ai">6. How we use AI</h2>
<p>Flo uses artificial intelligence. The content of calls, emails and invoices is processed by AI model providers to sort, summarise and draft. They act for us under business terms that restrict how they use the data.</p>
<ul>
<li>Your content is not used to train their models.</li>
<li>During the supervised first fortnight, nothing is sent to anyone without the client's approval. After that, Flo sends alone only the kinds of message the client has approved.</li>
<li>Flo does not make decisions that have a legal or similarly significant effect on a person. The client stays in charge.</li>
</ul>
<p><strong>The chat on this website.</strong> The chat is answered by Flo, an AI assistant. What you type is processed by an AI model provider on the same terms, and is stored so our team can read it and follow up. If you give an email address or a phone number, we use it to reply to your enquiry. Please do not put card or bank details in the chat.</p>

<h2 id="google">7. Google user data</h2>
<p>This section applies when the client connects a Google account to Over to Flo.</p>
<h3>What we access</h3>
<p>Gmail messages and drafts, and Google Calendar events. We access them only for the accounts the client chooses to connect.</p>
<h3>How we use it</h3>
<p>We use Google data only to provide the features the client can see and use:</p>
<ul>
<li>sorting the inbox;</li>
<li>drafting replies, and sending the replies the client approves;</li>
<li>finding free time and booking diary slots.</li>
</ul>
<h3>What we do not do</h3>
<ul>
<li>We do not sell Google user data.</li>
<li>We do not use it for advertising, including retargeting or interest-based advertising.</li>
<li>We do not use it to develop, improve or train generalised AI or machine learning models.</li>
<li>We do not transfer it to others, except as needed to provide or improve these user-facing features, to comply with applicable law, or as part of a merger, acquisition or sale of assets where the user has given consent.</li>
<li>Our staff do not read it unless the user gives permission for a specific support request, it is needed for security purposes such as investigating abuse, or the law requires it.</li>
</ul>
<h3>Compliance statement</h3>
<p>Over to Flo's use and transfer of information received from Google APIs to any other app will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
<h3>Disconnecting</h3>
<p>The client can disconnect Google at any time by asking us. We do it the same working day and delete the stored sign-in. The client can also remove our access at <a href="https://myaccount.google.com/permissions" rel="noopener">myaccount.google.com/permissions</a>. To have previously stored Google data deleted, email <a href="mailto:${S.EMAIL}">${S.EMAIL}</a>.</p>

<h2 id="microsoft">8. Microsoft account data</h2>
<p>When the client connects a Microsoft mailbox and calendar, we access the messages, drafts and calendar events in that account only. We use them only for the same user-facing features: sorting the inbox, drafting and sending replies the client approves, finding free time and booking.</p>
<p>We do not sell this data, use it for advertising or use it to train generalised AI or machine learning models. Our staff do not read it unless the user gives permission for support, it is needed for security, or the law requires it. The client can disconnect at any time from the Over to Flo app, and we then delete the stored sign-in. They can also remove access from their Microsoft account's app permissions page.</p>

<h2 id="sharing">9. Who we share data with</h2>
<p>We do not sell personal data. We share it only with the following categories of provider, under written terms, so that the service works.</p>
<ul>
<li><strong>Hosting and storage</strong> for the Over to Flo app and its data.</li>
<li><strong>Telephony</strong>, to carry calls and send text messages.</li>
<li><strong>Voice</strong>, to turn speech into text and text into speech.</li>
<li><strong>AI model providers</strong>, to sort, summarise and draft.</li>
<li><strong>Email and calendar providers the client connects</strong>, which are Google and Microsoft.</li>
</ul>
<p>The current list of named providers is available on request. Email <a href="mailto:${S.EMAIL}">${S.EMAIL}</a>.</p>
<p>We may also disclose data where the law requires it, or to protect our rights, and to professional advisers under confidentiality.</p>

<h2 id="transfers">10. International transfers</h2>
<p>Some providers process data outside the UK. Where they do, we make sure it is protected by an adequacy decision, the UK International Data Transfer Agreement or the UK Addendum to the EU standard contractual clauses, or another safeguard that UK law allows. Ask us if you would like details.</p>

<h2 id="retention">11. How long we keep data</h2>
<!-- PROPOSED retention periods (owner to confirm each before publishing):
     PROPOSED call recordings 90 days;
     PROPOSED transcripts and summaries 12 months;
     PROPOSED email content only as long as needed to process, plus drafts until sent or discarded;
     PROPOSED account data for the life of the contract;
     PROPOSED billing records 6 years after the contract ends. -->
<ul>
<li><strong>Call recordings:</strong> 90 days, then deleted.</li>
<li><strong>Call transcripts and summaries:</strong> 12 months, then deleted.</li>
<li><strong>Email content:</strong> only as long as needed to process it. Drafts are kept until they are sent or discarded.</li>
<li><strong>Account data:</strong> for the life of the contract.</li>
<li><strong>Billing records:</strong> for 6 years after the contract ends, as tax and accounting law expects.</li>
</ul>
<p>When the service ends, we delete the client's connected sign-ins straight away. A client can ask for earlier deletion at any time, and we will do it unless the law requires us to keep something.</p>

<h2 id="security">12. Security</h2>
<ul>
<li>Sign-in tokens for connected accounts are encrypted at rest.</li>
<li>Access to client data is limited to named members of staff who need it.</li>
<li>Data is encrypted in transit.</li>
<li>We tell the client without undue delay if we find a breach affecting their data, so they can meet their own duties.</li>
</ul>

<h2 id="rights">13. Your rights</h2>
<p>Under UK GDPR you can ask to:</p>
<ul>
<li>see the personal data held about you;</li>
<li>have it corrected or erased;</li>
<li>restrict or object to its use;</li>
<li>receive it in a portable form;</li>
<li>withdraw consent, where we rely on it.</li>
</ul>
<p>Clients can exercise these rights over their own account data by emailing <a href="mailto:${S.EMAIL}">${S.EMAIL}</a>. Callers and customers of a client should contact that business. If you contact us instead, we will pass your request to them without delay. We reply within one month.</p>

<h2 id="complaints">14. Complaints</h2>
<p>Tell us first and we will try to put it right. You can also complain to the Information Commissioner's Office at <a href="https://ico.org.uk" rel="noopener">ico.org.uk</a>.</p>

<h2 id="changes">15. Changes to this policy</h2>
<p>We may update this policy. The latest version is always on this page, with the date at the top. If a change matters to clients, we tell them by email before it takes effect.</p>
`;

module.exports = {
  slug: 'cleardesk/privacy',
  title: 'Privacy Policy | Over to Flo by REVIO',
  description: 'How Over to Flo by REVIO handles calls, email, calendar and invoice data, including Google user data, AI use, retention and your rights under UK GDPR.',
  utility: true,
  art: 'shield',
  badge: 'Legal',
  h1: 'Privacy policy.',
  sub: 'What Flo does with calls, email, calendars and invoices, who sees them, how long we keep them and how to use your rights. Plain English, no small print.',
  ctas: [{ label: 'Email us a question', href: 'mailto:' + S.EMAIL, style: 'mint' }, { label: 'Read the terms', href: '/terms/', style: 'ghost' }],
  meetingRows: false,
  sections: [
    { type: 'prose', html },
    {
      type: 'faq', tone: 'wash', kicker: 'In short', h2: 'The short answers.',
      items: [
        { q: 'Do you sell my data?', a: 'No. We never sell data and we do not use it for advertising.' },
        { q: 'Is my data used to train AI?', a: 'No. AI model providers process content only to sort, summarise and draft for you, under business terms. It is not used to train their models.' },
        { q: 'Does Flo send things without asking?', a: 'Not in the supervised first fortnight. After that it sends alone only what you have approved.' },
        { q: 'How do I ask for my data to be deleted?', a: `Email <a href="mailto:${S.EMAIL}">${S.EMAIL}</a>. If you are a customer of one of our clients, ask that business and we will help them act on it.` },
      ],
    },
    {
      type: 'cta', h2: 'A question we have not answered?',
      text: 'Email us and a person will reply.',
      ctas: [{ label: 'Email ' + S.EMAIL, href: 'mailto:' + S.EMAIL, style: 'mint' }, { label: 'Back to Over to Flo', href: '/', style: 'ghost' }],
    },
  ],
};
