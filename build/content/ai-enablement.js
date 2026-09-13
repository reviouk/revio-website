const S = require('../site');
const P = S.PRICE;

module.exports = {
  slug: 'ai-enablement',
  title: 'AI Enablement & Training for Teams UK | Revio',
  description: 'AI training built as a programme, not a workshop: sessions on your own work, recorded, adoption measured at 30, 60 and 90 days. From £700 a half day.',
  keywords: ['ai training for teams uk', 'chatgpt training for staff', 'ai enablement programme', 'ai adoption training uk'],
  crumbs: [{ label: 'AI Services', href: S.SERVICES_URL }],
  crumbLabel: 'AI Enablement',
  art: 'chart',
  badge: 'AI Enablement',
  h1: 'Training that survives <em class="mint">the month after the session</em>.',
  sub: 'A single AI workshop is usually forgotten within a month. AI enablement is sold as a programme instead: sessions built on your team\'s own work, recorded, followed up in writing, with adoption checked at 30, 60 and 90 days. A day\'s training from £1,200, a half day from £700, the ongoing adoption programme from £950 a month.',
  ctas: [
    { label: 'Book a 30-minute call', href: S.BOOK_URL, style: 'mint' },
    { label: 'See the adoption programme', href: '#programme', style: 'ghost' },
  ],
  heroProof: ['Sessions built on your team\'s real work, not generic slides', 'Every session recorded with written follow-up', 'Adoption measured at 30, 60 and 90 days'],
  service: { name: 'AI Enablement & Training', type: 'AI adoption training programme' },
  sections: [
    {
      type: 'intro', kicker: 'The problem this solves',
      h2: 'The workshop got good feedback. Nobody uses it now.',
      body: [
        'A one-off AI workshop is easy to book and easy to forget. The feedback forms score well on the day, three people go back to their desks and try something, and within a month the habit has faded and the licence is quietly unused. The problem was never the content. It was treating a change in how people work as a single afternoon.',
        'We sell AI enablement as a programme because that is what changes behaviour: sessions built on documents and tasks the team already has, a recording and a written follow-up so nobody has to remember everything on the day, and a check-in schedule that catches the drop-off before it becomes permanent.',
      ],
    },
    {
      type: 'cards', tone: 'wash', kicker: 'What a programme includes', h2: 'Built on your work, followed up in writing, measured on a schedule.',
      lede: 'The mechanics that make training stick are unglamorous. They are also the part most workshops skip.',
      items: [
        { icon: 'doc', title: 'Built on your own work', text: 'Sessions use real documents, real enquiries and real reports from your business, not a generic demo dataset nobody recognises.' },
        { icon: 'code', title: 'Recorded, every time', text: 'Every session is recorded and shared, so someone on leave that day, or who just needs a reminder, is not left behind.' },
        { icon: 'mail', title: 'Written follow-up', text: 'A short written summary and prompt library after each session, so the habit does not depend on memory a week later.' },
        { icon: 'chart', title: 'Adoption measured', text: 'Usage checked at 30, 60 and 90 days against the tasks the training targeted, so drop-off is caught while it is still one conversation to fix.' },
        { icon: 'brief', title: 'Department playbooks', text: 'A short written playbook per department covering the tools, the prompts and the rules for that team specifically, kept as a live document rather than a one-time handout.' },
        { icon: 'people', title: 'A named point of contact', text: 'Questions between sessions go to one person who knows the business, rather than a generic support inbox.' },
      ],
    },
    {
      type: 'tiers', kicker: 'How it is bought', h2: 'A single session or an ongoing programme, priced plainly.', id: 'programme',
      lede: 'Every price excludes VAT.',
      items: [
        { name: 'Half day', price: P.training_half, per: '', cadence: 'Half a day, one team', text: 'For a single department that needs a focused session on one or two tools, with a recording and a prompt library to keep.', includes: ['One department, one focused topic', 'Recording and written summary', 'Short prompt library left behind'], best: 'a single team with a defined need', href: S.BOOK_URL, cta: 'Talk about a half day' },
        { name: 'Full day', price: P.training_day, per: '', cadence: 'A full day, multiple teams', text: 'For businesses rolling out across several departments in one visit, or a single team that needs deeper, hands-on time.', includes: ['Multiple sessions across the day', 'Recording and written summary per session', 'Department-specific prompt libraries'], best: 'a wider rollout in one visit', href: S.BOOK_URL, cta: 'Talk about a full day' },
        { name: 'Adoption programme', price: P.programme, per: 'a month', cadence: 'Ongoing', text: 'For businesses that want training to keep going rather than end after the first sessions, with adoption tracked and acted on.', includes: ['Regular sessions on a rolling schedule', 'Adoption checked at 30, 60 and 90 days', 'Department playbooks kept up to date', 'A named point of contact between sessions'], best: 'businesses treating AI adoption as ongoing, not one-off', featured: true, flag: 'Most chosen', href: S.BOOK_URL, cta: 'Talk about the programme' },
      ],
      note: 'A single session can be booked on its own. The programme is the version built to make the habit last.',
    },
    {
      type: 'steps', kicker: 'How a programme runs', h2: 'From first session to a habit that shows up in the numbers.',
      items: [
        { title: 'Scope the departments', text: 'A short call on who needs training, on which tools, and what they are already doing informally.', meta: 'Week 1' },
        { title: 'Run the first sessions', text: 'Built on the team\'s own documents and tasks, recorded, with a written summary and prompt library the same week.', meta: 'Weeks 1–2' },
        { title: 'Check adoption at 30 days', text: 'Usage reviewed against the tasks the training targeted. Anyone who has drifted back to old habits gets a short follow-up rather than being left.', meta: 'Day 30' },
        { title: 'Review again at 60 and 90 days', text: 'The playbooks are updated, new sessions scheduled where a gap has opened, and a short report goes to whoever is sponsoring the programme.', meta: 'Days 60–90' },
      ],
    },
    {
      type: 'compare', kicker: 'Fit', h2: 'Who this is for, and who it is not.',
      yes: { title: 'A good fit', items: ['A UK business that has bought AI tools and had a workshop already fade', 'Several departments with different, specific needs', 'A sponsor willing to see a 30-day adoption number, good or bad', 'A team that learns better on its own documents than a generic demo'] },
      no: { title: 'Not this, yet', items: ['You want a single, one-off session with no follow-up, that is the half day on its own', 'Nobody will look at the adoption numbers once produced', 'The real need is a build or an agent, not training, that sits under AI Build'] },
    },
    {
      type: 'table', tone: 'wash', kicker: 'Workshop vs programme', h2: 'Why a single session tends not to stick.',
      head: ['', 'One-off workshop', 'Enablement programme'],
      rows: [
        ['Content', 'Generic examples', 'Built on your own documents and tasks'],
        ['Record of the session', 'Rarely kept', 'Recorded and summarised every time'],
        ['Follow-up', 'None', 'Written, plus a named point of contact'],
        ['Measured', 'Feedback form on the day', 'Usage checked at 30, 60 and 90 days'],
        ['Typical result after 3 months', 'Mostly forgotten', 'Built into the department playbook'],
      ],
    },
    {
      type: 'quote', tone: 'wash',
      text: 'We measure our own AI features the same way we ask clients to measure training: not by whether the demo went well, but by whether anyone was still using it a quarter later. Training that is not checked at 30 days is a guess dressed up as a plan.',
      who: 'Rob Wells', role: 'Founder, Revio',
    },
    {
      type: 'faq', kicker: 'Straight answers', h2: 'Questions people ask before they book.',
      items: [
        { q: 'What is actually different from a normal workshop?', a: 'The content is built on your own documents rather than generic examples, every session is recorded, a written summary and prompt library follow within days, and we come back at 30, 60 and 90 days to check whether it stuck.' },
        { q: 'Can we book a single session without the ongoing programme?', a: 'Yes. A half day or a full day can be booked on its own. The adoption programme is for businesses that want the follow-up and measurement built in as well.' },
        { q: 'How do you measure adoption?', a: 'We agree the specific tasks the training targets, then check tool usage and a short set of outcomes against them at 30, 60 and 90 days, reporting plainly where it has and has not landed.' },
        { q: 'Which tools do you train on?', a: 'Whichever your business already runs or is rolling out, most often ChatGPT, Claude or Microsoft Copilot, alongside any agents or automations we or others have built for you.' },
        { q: 'Who runs the sessions?', a: 'Revio\'s own team, not a rotating bench of trainers, so the same person who scoped the programme is usually the one delivering it.' },
        { q: 'What is a department playbook?', a: 'A short, living document per department covering the tools, prompts and rules that apply to their work specifically, kept up to date rather than handed out once and forgotten.' },
        { q: 'How does this fit with an Embedded AI Lead?', a: 'The Embedded AI Lead includes training as part of a wider monthly engagement. Enablement on its own is the right fit where training, not building, is the immediate need.' },
      ],
    },
    {
      type: 'related', kicker: 'Related services', h2: 'The other ways in.',
      items: [
        { href: S.LEAD_URL, icon: 'lead', title: 'Embedded AI Lead', text: 'A senior AI lead inside the business each week, training included alongside the build work.', meta: P.lead_1 },
        { href: '/claude-implementation/', icon: 'layers', title: 'Claude Implementation', text: 'Rollout and training for Anthropic\'s Claude, including agents built on the API.', meta: P.training_day },
        { href: '/chatgpt-implementation/', icon: 'chat', title: 'ChatGPT Implementation', text: 'Workspace setup, custom GPTs and training for OpenAI\'s ChatGPT.', meta: P.training_day },
      ],
    },
    {
      type: 'cta', h2: 'Book the session that gets checked in a month, not forgotten in one.',
      text: 'A 30-minute call on which departments need training and what a first 90 days would look like.',
      ctas: [{ label: 'Book a meeting', href: S.BOOK_URL, style: 'mint' }, { label: 'Ask a question first', href: S.CONTACT_URL, style: 'ghost' }],
    },
  ],
};
