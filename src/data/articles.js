// Insights articles.
//
// Written in Joël's voice from his documented background (see profile.js).
// They contain opinions and general, publicly verifiable facts only — no
// invented anecdotes, clients, numbers or results. Review before publishing
// changes, and keep the regulatory facts in line with the official texts.

export const articles = [
  {
    slug: 'battery-passports',
    tag: 'battery-passports',
    title: 'The Strategic Value of Digital Battery Passports: Beyond Compliance',
    summary:
      'How battery passports can become a tool for competitive advantage, new business models and genuine circularity in the automotive sector.',
    disclaimer:
      'This article reflects my personal views and is not legal advice. For specific obligations, refer to Regulation (EU) 2023/1542 and qualified counsel.',
    blocks: [
      {
        p: 'From 18 February 2027, the EU Batteries Regulation — Regulation (EU) 2023/1542 — requires a digital battery passport for every electric-vehicle battery, every battery for light means of transport such as e-bikes and e-scooters, and every industrial battery above 2 kWh placed on the EU market. For many companies, that date sits on a compliance roadmap next to other reporting obligations.',
      },
      {
        p: 'I think treating the passport only as a compliance exercise misses the bigger opportunity. Compliance sets the floor. Strategy decides how high you build on it.',
      },
      { h2: 'What the passport actually is' },
      {
        p: 'The battery passport is an electronic record linked to a unique identifier for each individual battery and reached through a QR code on the battery itself. It brings together information about the battery model and the specific unit, including:',
      },
      {
        ul: [
          'General information about the manufacturer and the battery',
          'Material composition and hazardous substances',
          'Carbon footprint information',
          'Recycled content and responsible sourcing (due diligence) information',
          'Performance and durability parameters',
          'Information that helps with repair, repurposing, dismantling and recycling',
        ],
      },
      {
        p: 'Not everything is public. The regulation distinguishes between information for the general public, information for people with a legitimate interest — such as repairers, remanufacturers and recyclers — and information for authorities. That access model matters as much as the data itself.',
      },
      { h2: 'Four ways the passport creates value' },
      { h3: '1. Trust becomes a product feature' },
      {
        p: 'Verifiable data on carbon footprint and sourcing helps customers with their own sustainability reporting and purchasing decisions. When two batteries perform similarly, the one with credible, accessible data is easier to buy — and easier to finance.',
      },
      { h3: '2. Second life and residual value' },
      {
        p: 'The biggest unknown in a used battery is its condition. Reliable information on state of health and usage history reduces that uncertainty. That supports better residual-value estimates for fleets, leasing companies and insurers, and makes repurposing — for example, from vehicle to stationary storage — far easier to assess.',
      },
      { h3: '3. Closing the material loop' },
      {
        p: 'Recyclers work better when they know what is inside a battery and how to take it apart safely. At the same time, the regulation sets minimum shares of recycled cobalt, lead, lithium and nickel in new batteries, starting in 2031. Companies that build reliable data flows with recyclers now will be better placed when those targets apply.',
      },
      { h3: '4. Data as a platform' },
      {
        p: 'Once battery data flows reliably across the value chain, new services become possible: battery analytics, smarter warranty models, fleet optimisation and trusted marketplaces for used batteries. The passport is the starting point for these services, not the end product.',
      },
      { h2: 'The engineering behind it' },
      {
        p: 'As an engineer, I find the hard part is not the QR code. It is everything behind it:',
      },
      {
        ul: [
          'Unique identifiers that stay with the battery through its whole life',
          'Data that has to come from many parties — cell makers, pack assemblers, vehicle manufacturers, service networks and recyclers',
          'Battery management system data that has to be trustworthy and up to date',
          'Access control that matches the regulation’s different audiences',
          'Interoperability with the EU’s wider Digital Product Passport framework under the Ecodesign for Sustainable Products Regulation',
          'Cloud infrastructure that is secure and can scale to millions of batteries',
        ],
      },
      {
        p: 'Getting this right takes business and engineering teams working together from day one.',
      },
      { h2: 'Where to start' },
      {
        ul: [
          'Map the data you already have — and who in the value chain holds the rest',
          'Treat the passport as a product, with users, not just as a report',
          'Talk to partners early: suppliers, customers and recyclers all hold part of the picture',
          'Design for access rights and data quality from the start',
          'Pilot with one battery line before you scale',
        ],
      },
      {
        p: 'The deadline is fixed. What companies build on top of it is a choice. The ones that treat transparency as a strategy, not a burden, will turn a regulatory requirement into an advantage.',
      },
    ],
  },
  {
    slug: 'chess-business',
    tag: 'chess',
    title: 'What Chess Taught Me About Business Development and Negotiation',
    summary:
      'How strategic thinking, anticipation and adaptability from the chessboard translate into successful partnerships and high-stakes negotiations.',
    blocks: [
      {
        p: 'Chess is one of my favourite ways to switch off. It is also, I have come to realise, a very good training ground for business development. Both reward preparation, patience and the ability to see the board from the other side.',
      },
      { h2: 'Preparation is your opening' },
      {
        p: 'Strong players do not improvise their openings; they prepare them. In business development, preparation means understanding the other side’s goals, constraints and decision process before the first meeting. The questions you ask in the first ten minutes often decide the next ten months.',
      },
      { h2: 'Think in plans, not moves' },
      {
        p: 'A single good move rarely wins a game. A coherent plan does. The same is true of partnerships: one successful deal matters less than a clear idea of where the relationship should be in two or three years, and what each step contributes to it.',
      },
      { h2: 'Ask what the other side wants' },
      {
        p: 'Chess players call it prophylaxis: before making your own move, ask what your opponent is trying to do. In negotiation, this is the habit of anticipating objections, concerns and needs before they are raised. It turns a negotiation from a reaction into a conversation.',
      },
      { h2: 'Timing and initiative matter' },
      {
        p: 'A move that is strong now can be useless three moves later. Following up quickly, bringing the right people in at the right moment and knowing when to wait are all part of keeping the initiative in a deal.',
      },
      { h2: 'Know the value of what you trade' },
      {
        p: 'In chess, an exchange is good or bad depending on the position, not on the piece values alone. In negotiation, the best concessions cost you little and mean a lot to the other side. Understanding that difference creates room for agreement.',
      },
      { h2: 'Games are won in the endgame' },
      {
        p: 'Many promising positions are lost through careless technique at the end. In business, the endgame is contracting, onboarding and delivery. A partnership is only as good as its execution.',
      },
      { h2: 'Where the analogy ends' },
      {
        p: 'Chess is zero-sum: one player’s win is the other’s loss. Good business is not. The strongest partnerships I aim for are the ones where both sides leave the table better off. That is where empathy matters as much as strategy — and where the chessboard stops being a perfect model.',
      },
      { h2: 'Review every game' },
      {
        p: 'Serious players analyse their games, especially the losses. The same discipline pays off after important meetings and deals: what worked, what was missed, and what would you do differently next time? Strategy improves through reflection, not just repetition.',
      },
    ],
  },
  {
    slug: 'digital-transformation',
    tag: 'digital-transformation',
    title: 'Why Most Digital Transformation Initiatives Fail — And How to Succeed',
    summary:
      'Lessons from my journey as an engineer, developer and founder on aligning technology adoption with real business value and ESG goals.',
    blocks: [
      {
        p: 'Research by consultancies such as BCG and McKinsey has repeatedly found that the majority of digital transformation programmes fall short of their objectives. I have seen technology change from several sides — as an engineer, as a developer, as a founder and now in business development — and the reasons are rarely about the technology itself.',
      },
      { h2: 'Why transformations fail' },
      { h3: 'Technology first, problem second' },
      {
        p: 'Too many initiatives start with a tool — a platform, an AI model, a cloud migration — and only later look for the problem it should solve. Without a clear business outcome, it is impossible to know whether the project is succeeding.',
      },
      { h3: 'People and processes are left behind' },
      {
        p: 'New systems change how people work. If the people affected are not involved early, adoption stalls and old workarounds survive alongside the new tools.',
      },
      { h3: 'Data foundations are ignored' },
      {
        p: 'Analytics and AI are only as good as the data underneath. Poor data quality, unclear ownership and disconnected systems undermine even the best-designed solution.',
      },
      { h3: 'Big-bang programmes' },
      {
        p: 'Multi-year programmes that deliver value only at the end are fragile. Priorities change, sponsors move on and budgets are cut before anyone sees results.',
      },
      { h3: 'Value is never measured' },
      {
        p: 'If success is defined as “go-live” rather than a business outcome, nobody can tell whether the investment paid off.',
      },
      { h3: 'Sustainability is bolted on' },
      {
        p: 'ESG requirements are increasingly built into regulation and customer expectations. Treating them as an afterthought means rebuilding systems later — usually at a higher cost.',
      },
      { h2: 'How to succeed' },
      {
        ul: [
          'Start with the business problem and a measurable outcome, then choose the technology',
          'Involve the people who will use the solution from the first workshop',
          'Invest in data quality and ownership before advanced analytics',
          'Deliver in small, valuable steps — and learn from each one',
          'Measure value continuously, not just at go-live',
          'Design for ESG from the start, including the data you will need for reporting',
          'Put leaders in charge who can speak both the language of business and the language of technology',
        ],
      },
      { h2: 'The translator role' },
      {
        p: 'That last point is personal. I believe many projects stall in the gap between the boardroom and the engineering team. Engineers need to understand why a feature matters commercially; executives need to understand what is technically realistic. Bridging that gap is one of the most valuable roles in any transformation — and it is exactly where my mix of engineering and business experience sits.',
      },
      {
        p: 'Digital transformation is not a technology project. It is a business change that technology makes possible.',
      },
    ],
  },
  {
    slug: 'global-perspective',
    tag: 'global-perspective',
    title: 'Bridging Technology and Sustainability: Lessons from a Global Trotter',
    summary:
      'What living and working across Africa and Europe has taught me about cross-cultural collaboration and sustainable innovation.',
    blocks: [
      {
        p: 'My path has taken me from Douala and Dschang in Cameroon to Johannesburg in South Africa and on to Frankfurt in Germany. Along the way, Yemba, French, English and German have each become part of my life. Each move taught me something about technology, sustainability and people that I could not have learned in one place.',
      },
      { h2: 'Language is respect' },
      {
        p: 'Speaking someone’s language — even imperfectly — changes the conversation. It shows that you are willing to meet people where they are. Living across four languages has taught me that being understood is not the same as connecting, and that trust often starts with the effort to understand.',
      },
      { h2: 'Context beats copy-paste' },
      {
        p: 'A solution that works in one market can fail in another. Infrastructure, regulation, costs and culture all differ. My time as an electrical engineer in South Africa’s energy sector reinforced a simple lesson: good engineering designs for the conditions you actually have — not the ones in a textbook or another country.',
      },
      { h2: 'Constraints spark innovation' },
      {
        p: 'Some of the most creative work I have seen happened under tight constraints — at hackathons, for example, where teams have a short time to turn an idea into something that works. When I pitched at the hackathon of the 4th WRC Symposium of South Africa’s Water Research Commission, the banner behind me read “Innovation in every drop”. Scarcity, whether of water, energy or time, forces you to focus on what really matters.',
      },
      { h2: 'Sustainability is local and global at once' },
      {
        p: 'Supply chains connect continents. European rules on batteries, for example, include due-diligence obligations for raw materials such as cobalt, lithium, nickel and natural graphite — obligations that reach all the way to mining regions far from Europe. Sustainable innovation needs people who understand both ends of that chain.',
      },
      { h2: 'Trust takes time' },
      {
        p: 'Technology can scale quickly. Trust cannot. The strongest partnerships are built on consistent, honest relationships over time. Empathy is not a soft skill in international business; it is a strategic one.',
      },
      {
        p: 'Bridging technology and sustainability across cultures is not about having all the answers. It is about asking good questions, listening carefully, and building solutions together with the people who will use them.',
      },
    ],
  },
];

export const articleBySlug = (slug) => articles.find((a) => a.slug === slug);

// Rough reading time at ~220 words per minute.
export const readingMinutes = (article) => {
  const text = article.blocks
    .map((b) => b.p || b.h2 || b.h3 || (b.ul ? b.ul.join(' ') : ''))
    .join(' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
};
