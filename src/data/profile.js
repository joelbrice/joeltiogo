// Single source of truth for the facts shown on the site.
//
// Every statement comes from Joël's own earlier versions of this website
// (git history 2022–2026), details he has provided directly, a third-party
// source linked below, or what is visible in his photos. Please don't add
// titles, numbers, dates or achievements that Joël hasn't confirmed.

export const contact = {
  email: 'tiogojoel@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joeltiogo',
  github: 'https://github.com/joelbrice',
};

export const identity = {
  fullName: 'Joël Brice Voumo Tiogo',
  name: 'Joël Tiogo',
  role: 'Business Development Manager',
  employer: 'AVL Analytical Technologies',
  // His own tagline (Dec 2024 home page) — used only in the engineer block.
  tagline: 'Engineer by trade. MBA by choice.',
};

// Current focus (provided by Joël, Nov 2026).
export const focusAreas = [
  {
    title: 'Strategy & Innovation',
    body: 'Shaping where to play and how to win, using structured problem solving and design thinking.',
  },
  {
    title: 'Business Development & Partnerships',
    body: 'Identifying new opportunities and building long-term partnerships with clients and industry partners.',
  },
  {
    title: 'Go-to-Market & Sales',
    body: 'Crafting and executing go-to-market strategies that accelerate commercial success.',
  },
  {
    title: 'Business Solutions Architecture',
    body: 'Translating customer needs into solutions that work both technically and commercially.',
  },
];

// Experience, most recent first. No dates: they were never published.
export const experience = [
  {
    role: 'Business Development Manager',
    org: 'AVL Analytical Technologies',
    note: 'Cloud solutions for automotive, electrification and other industries, with a focus on transparency and compliance in the battery ecosystem.',
  },
  {
    role: 'New Business Development',
    org: 'Syenah',
    note: 'ESG platform: strategic alliances, data sourcing and ESG taxonomies and frameworks.',
  },
  {
    role: 'Founder, CEO & Lead Engineer',
    org: 'Expotech Industries',
    note: 'Built and led a consultancy in electrical engineering, software and 4IR skills development.',
    // Independent source naming Joël as founder (Belgium Campus, Oct 2019).
    link: {
      href: 'https://www.belgiumcampus.ac.za/2019/10/16/bcmusketeers-participate-in-wrc-symposium-hackathon/',
      label: 'In the news',
    },
  },
  {
    role: 'Full-Stack Software Developer',
    org: 'Software industry',
    note: 'Built web applications end to end.',
  },
  {
    role: 'Electrical Engineer',
    org: 'Energy sector, Johannesburg',
    note: 'Energy and solar projects, on site and with power-system and PV design tools.',
  },
];

export const credentials = [
  { title: 'MBA', school: 'Frankfurt School of Finance & Management' },
  { title: 'McKinsey Forward Program', school: 'McKinsey & Company · Graduate' },
  { title: 'Design Thinking and Innovation', school: 'Harvard Business School Online · In progress' },
  { title: 'B.Tech, Electrical Engineering', school: 'University of Johannesburg' },
  { title: 'Data Science & AI Bootcamp', school: 'Le Wagon' },
];

export const languages = ['English', 'French', 'German'];
export const motherTongue = 'Yemba';

export const markets = ['Europe', 'Africa', 'Asia', 'North America'];

// The engineer behind the strategist — kept short on purpose.
export const toolkit = [
  ['engineering', 'Electrical · energy & solar · IoT'],
  ['software', 'Python · C# · JavaScript · React · Node.js'],
  ['data & cloud', 'SQL · pandas · PyTorch · Docker · AWS · Azure · GCP'],
];

export const interests = ['Chess', 'Football', 'Reading', 'Embedded systems'];

export const fieldPhotos = [
  {
    src: '/images/web/substation.jpg',
    alt: 'Joël in a red hard hat in front of an electrical substation',
    caption: 'Electrical engineering, South Africa',
    pos: '50% 35%',
  },
  {
    src: '/images/web/uj-lab.jpg',
    alt: 'Joël presenting at the front of a University of Johannesburg computer lab',
    caption: 'Presenting at the University of Johannesburg',
    pos: '50% 30%',
  },
  {
    src: '/images/web/wrc-pitch.jpg',
    alt: 'Joël pitching with a microphone at the 4th WRC Symposium',
    caption: 'Pitching at the WRC Symposium hackathon, 2019',
    pos: '20% center',
    link: 'https://www.belgiumcampus.ac.za/2019/10/16/bcmusketeers-participate-in-wrc-symposium-hackathon/',
  },
];
