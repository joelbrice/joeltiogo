// Single source of truth for the facts shown on the site.
//
// Every statement here comes from Joël's own earlier versions of this
// website (git history 2022–2026), from details he has provided directly
// (e.g. Yemba as his mother tongue), or is visible in his photos. The
// "source" notes say where. Please don't add titles, numbers, dates or
// achievements that Joël hasn't confirmed.

export const contact = {
  email: 'tiogojoel@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joeltiogo',
  github: 'https://github.com/joelbrice',
};

export const identity = {
  fullName: 'Joël Brice Voumo Tiogo',
  name: 'Joël Tiogo',
  role: 'Business Development Manager',
  employer: 'AVL Analytical Technologies', // source: About page, Apr 2026
  // source: his own tagline, Dec 2024 version of the home page
  tagline: 'Engineer by trade. MBA by choice. Data scientist by passion.',
  languages: ['Yemba', 'French', 'English', 'German'],
};

// Opening of the About page. Source: his own words on the Apr 2022 home
// page ("What if I told you…", "I got to South Africa late…", "I do not
// tolerate sitting doing nothing").
export const prologue = [
  'What if I told you that my engineering story began with Physics? I grew up speaking Yemba, studied at a technical lycée in Dschang, and completed a first year of Physics in Cameroon before leaving for South Africa to study engineering.',
  'I got to South Africa late — and because I don’t tolerate sitting around doing nothing, I started a distance-learning degree in Applied Mathematics & Computer Science before going on to study Electrical Engineering. That set the pattern for everything that followed: keep learning, keep building.',
];

// Career story, told as chapters rather than dated entries because exact
// dates were never published on the site.
export const journey = [
  {
    id: 'roots',
    place: 'Douala & Dschang, Cameroon',
    title: 'Where it starts',
    // source: About (Apr 2026), home page (Apr 2022), Yemba from Joël
    body:
      'Born in Douala, with Yemba as my mother tongue. I earned a Baccalauréat d’Enseignement Technique (Série F3) at Lycée Technique de Dschang and completed a first year of Physics before moving to South Africa to study engineering.',
  },
  {
    id: 'engineering',
    place: 'Johannesburg, South Africa',
    title: 'A late arrival, no time wasted',
    // source: home page (Apr 2022), terminal home page (Jan 2025), blog (Aug 2022), photos
    body:
      'I studied Applied Mathematics & Computer Science through distance learning at the University of South Africa (UNISA), then earned a Bachelor of Technology in Electrical Engineering at the University of Johannesburg. On campus I was a student ambassador in Intel’s developer community — an experience that helped me learn how to code better.',
    photo: {
      src: '/images/web/developer-zone.jpg',
      alt: 'Joël at a laptop wearing an Intel Developer Zone t-shirt',
      caption: 'Student ambassador days',
    },
  },
  {
    id: 'energy',
    place: 'Johannesburg, South Africa',
    title: 'Hard hats on',
    // source: About (Jul 2023, Jan 2025, Apr 2026), tech stack (Aug 2022), photos
    body:
      'My career started in the energy sector. I worked as an electrical engineer with practical experience in solar energy — out on site in a hard hat, and at the desk with tools such as DIgSILENT PowerFactory, PVsyst, PV*SOL, HelioScope and AutoCAD.',
    photo: {
      src: '/images/web/substation.jpg',
      alt: 'Joël in a red hard hat standing in front of an electrical substation',
      caption: 'Site work at an electrical substation',
    },
  },
  {
    id: 'software',
    place: 'Software',
    title: 'From circuits to code',
    // source: About (Jul 2023, Jan 2025), home page (Aug 2022), photo
    body:
      'I moved into the software industry and worked as a full-stack developer, building with C#/ASP.NET, Angular, React, Node.js and Python. Hackathons have been part of my life since university — including pitching at the hackathon of the 4th WRC Symposium of South Africa’s Water Research Commission.',
  },
  {
    id: 'founder',
    place: 'Entrepreneurship',
    title: 'Building my own company',
    // source: home page (Apr & Aug 2022), portfolio (Jul 2023), Expertise (Apr 2026)
    body:
      'I founded my own tech start-up, Expotech Industries, and led it as Founder, CEO & Lead Engineer, offering consulting in electrical engineering, software engineering and skills development in Fourth Industrial Revolution (4IR) technologies. Building it deepened my understanding of the interplay between technology and business value.',
  },
  {
    id: 'germany',
    place: 'Frankfurt am Main, Germany',
    title: 'Learning the language of business',
    // source: About (Jul 2023, Apr 2026), terminal home page (Jan 2025)
    body:
      'In Germany I completed an MBA at Frankfurt School of Finance & Management and trained in data science and AI at Le Wagon. At Syenah I spearheaded new business development, combining my technical background with ESG: data sourcing, strategic alliances and close work with ESG taxonomies and frameworks.',
  },
  {
    id: 'today',
    place: 'Today',
    title: 'Where engineering meets the market',
    // source: About + Expertise (Apr 2026)
    body:
      'As Business Development Manager at AVL Analytical Technologies, I lead cloud solutions for automotive, electrification and other industries, with a current focus on transparency and compliance solutions in the battery ecosystem.',
  },
];

// Closing of the About page. Source: "Driven by curiosity and empathy"
// (Apr 2026), "an MBA's strategic acumen" (Dec 2024), start-up quote above.
export const epilogue =
  'Engineering gave me the foundations. Software and data gave me the tools. My start-up showed me the interplay between technology and business value, and the MBA added strategic acumen. What connects every chapter is what has driven me from the start: curiosity and empathy.';

// The short version of the story, used on the home page.
export const storyTeaser = [
  { step: 'Dschang', text: 'Technical lycée, Yemba at home' },
  { step: 'Johannesburg', text: 'Maths, code & electrical engineering' },
  { step: 'Hard hats', text: 'Energy sector & solar' },
  { step: 'Code & company', text: 'Full-stack developer, then founder' },
  { step: 'Frankfurt → AVL', text: 'MBA, ESG & business development' },
];

// Every language marks a chapter. Yemba facts: Bamileke language of the
// Dschang area (West Region, Cameroon); ISO 639-3 "ybb"; speaker estimates
// range from 300,000 (SIL, 1992) to about 500,000 (2023).
export const languageStory = [
  {
    code: 'ybb',
    name: 'Yemba',
    role: 'Home',
    body: 'My mother tongue — a Bamileke language of the Dschang area in Cameroon’s West Region, spoken by more than 300,000 people. It’s where my story starts.',
  },
  {
    code: 'fr',
    name: 'Français',
    role: 'School',
    body: 'The language of my schooling in Cameroon, all the way to the Baccalauréat at Lycée Technique de Dschang.',
  },
  {
    code: 'en',
    name: 'English',
    role: 'Engineering',
    body: 'The language of my engineering studies and the start of my career in Johannesburg.',
  },
  {
    code: 'de',
    name: 'Deutsch',
    role: 'Germany',
    body: 'My fourth language — and the language of my chapter in Germany.',
  },
];

// Short "proof of work" highlights for the home page.
export const highlights = [
  {
    label: 'Founder',
    title: 'Expotech Industries',
    body: 'Founded and led a tech start-up as CEO & Lead Engineer, consulting in electrical engineering, software and 4IR skills.',
  },
  {
    label: 'IoT',
    title: 'Smart Air',
    // source: portfolio (Jul 2023)
    body: 'An IoT solution that detects air quality in a given environment and sends the data to a dashboard.',
  },
  {
    label: 'Field engineering',
    title: 'From substations to solar',
    body: 'Started out as an electrical engineer in the energy sector, with hands-on experience in solar.',
  },
  {
    label: 'Hackathons',
    title: 'Builder since university',
    body: 'Hackathons since university days, including a pitch at the 4th WRC Symposium hackathon.',
  },
];

// Toolkit, as listed across earlier versions of the site (2022–2025).
export const toolkit = [
  { group: 'Languages', items: ['Python', 'C#', 'JavaScript', 'SQL'] },
  {
    group: 'Web & APIs',
    items: ['React', 'Angular', 'Node.js', 'Express.js', 'ASP.NET', 'FastAPI', 'MongoDB'],
  },
  {
    group: 'AI & Data',
    items: ['TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'pandas', 'NumPy', 'scikit-learn', 'MLflow', 'Prefect'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['GCP', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Linux', 'Git', 'CI/CD'],
  },
  {
    group: 'Energy engineering',
    items: ['DIgSILENT PowerFactory', 'PVsyst', 'PV*SOL', 'HelioScope', 'AutoCAD'],
  },
  {
    group: 'Ways of working',
    items: ['Go-to-market', 'Partnerships', 'Product & project management', 'Agile / Scrum', 'ESG frameworks'],
  },
];

export const education = [
  { title: 'MBA', school: 'Frankfurt School of Finance & Management', place: 'Germany' },
  { title: 'Bachelor of Technology, Electrical Engineering', school: 'University of Johannesburg', place: 'South Africa' },
  { title: 'Data Science & AI Bootcamp', school: 'Le Wagon', place: 'Online' },
  { title: 'Studies in Applied Mathematics & Computer Science', school: 'University of South Africa (UNISA)', place: 'Distance learning' },
  { title: 'Baccalauréat d’Enseignement Technique, Série F3', school: 'Lycée Technique de Dschang', place: 'Cameroon' },
];

// Things Joël does for fun (source: home page Aug 2022, About Apr 2026).
export const offDuty = [
  { icon: '♟', label: 'Chess', note: 'Strategic thinking, anticipation, adaptability' },
  { icon: '⚽', label: 'Football', note: 'Playing with the local community' },
  { icon: '📚', label: 'Reading', note: 'Business, science, philosophy, economics' },
  { icon: '🔌', label: 'Embedded systems', note: 'Developing them as a hobby' },
];
