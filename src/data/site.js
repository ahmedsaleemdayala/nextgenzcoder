// Single source of truth for all portfolio content.
// Everything below comes from the CV, the old portfolio source, or details Ahmed gave directly.

export const SITE = {
  name: 'Ahmed Saleem',
  brand: 'NextGenzCoder',
  title: 'Accounts Manager | Full Stack Web & App Developer',
  tagline: 'Bridging Business, Finance & Technology Through Modern Web Solutions and Data-Driven Thinking.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nextgenzcoder.netlify.app',
  location: 'Karachi, Pakistan',
  email: 'ahmedsaleemdayala@gmail.com',
  phoneDisplay: '+92 333 3093878',
  phoneHref: 'tel:+923333093878',
  whatsapp: 'https://wa.me/923333093878',
  cv: '/Ahmed_Saleem_CV.pdf',
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/ahmedsaleemdayala', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-saleem-31100a382/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/asdayala/', icon: 'instagram' },
  { label: 'WhatsApp', href: 'https://wa.me/923333093878', icon: 'whatsapp' },
];

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'technology', label: 'Technology Ecosystem' },
  { id: 'statistics', label: 'Key Statistics' },
  { id: 'contact', label: 'Contact' },
];

export const EXPERIENCE = [
  {
    role: 'Accounts Manager',
    org: 'Zubaida Enterprises (Import & Export)',
    place: 'Karachi, Pakistan',
    period: 'Feb 2015 – Present',
    points: [
      'Oversee the business’s overall accounts and day-to-day financial matters.',
      'Manage the full accounting cycle: voucher entries, cash and bank books, general ledger, trial balance, profit & loss and balance sheet.',
      'Maintain records in accounting software and prepare reports and working sheets in Microsoft Excel.',
      'Track import/export transactions, payables, receivables and month-end closing.',
    ],
  },
  {
    role: 'Accountant (Part-Time)',
    org: 'Kutiyana Memon Model Academy',
    place: 'Karachi, Pakistan',
    period: 'Apr 2019 – Present',
    points: [
      'Handle student fee collection and maintain complete fee records.',
      'Prepare books of accounts in accounting software, from fee entries and expenses through to the balance sheet.',
    ],
  },
  {
    role: 'Web & App Developer (Freelance)',
    org: 'NextGenzCoder',
    place: 'Karachi, Pakistan (Remote)',
    period: 'Present',
    points: [
      'Build responsive websites and full-stack web applications, including dashboards and business portals.',
      'Develop React frontends and Node.js, Express and Supabase backends; deploy on Netlify and Vercel.',
      'Use AI-assisted development tools to plan, write, test and debug code.',
    ],
  },
  {
    role: 'Assistant Administrator',
    org: 'Nida Textile Mills (T) Ltd.',
    place: 'Dar es Salaam, Tanzania',
    period: 'Jun 2010 – Aug 2014',
    points: [
      'Supported day-to-day mill administration and maintained computers and the office network.',
      'Developed internal desktop applications in Visual Studio 2005: Payroll Management, Store, Sales Invoicing, Folding, and Passport & Visa Expiry Tracker.',
    ],
  },
  {
    role: 'Assistant Auditor',
    org: 'Dr. Ziauddin University Hospital',
    place: 'Karachi, Pakistan',
    period: 'Sep 2008 – Oct 2009',
    points: ['Assisted with internal audits of hospital accounts, vouchers and supporting documents.'],
  },
  {
    role: 'Audit Trainee',
    org: 'R.G. Dossa Associates (Chartered Accountants)',
    place: 'Karachi, Pakistan',
    period: 'Nov 2007 – Aug 2008',
    points: ['Participated in client account audits, vouching and verification of financial records.'],
  },
];

// Newest first.
export const EDUCATION = [
  { title: 'Web & App Development', org: 'Saylani Mass IT Training Program', year: '2026' },
  { title: 'B.Com, Commerce', org: 'University of Karachi', year: '2025' },
  { title: 'I.Com, Commerce', org: 'Board of Intermediate Education, Karachi', year: '2007' },
  { title: 'Matriculation', org: 'Board of Secondary Education, Karachi', year: '2005' },
];

export const COURSES = {
  completed: [
    { title: 'Power BI', note: 'Data Analytics' },
    { title: 'Python for Finance', note: 'Data Analytics' },
  ],
  learning: [{ title: 'Agentic AI', note: 'Currently learning' }],
};

export const FEATURED_PROJECTS = [
  {
    title: 'Burger House',
    description:
      'An online burger ordering platform where customers can explore burgers, select products and submit orders. Order details are sent directly to Burger House through WhatsApp for convenient order management.',
    tags: ['React', 'Tailwind CSS', 'Express', 'Supabase', 'WhatsApp ordering'],
    github: 'https://github.com/ahmedsaleemdayala/burger-house',
    live: 'https://burgerhouse32.netlify.app/',
  },
  {
    title: 'Waseel360',
    description:
      'An online home services marketplace connecting customers with professional service providers. Customers can hire electricians, plumbers, AC technicians, general maintenance professionals and carpenters to receive services at home according to their requirements.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Home services'],
    github: 'https://github.com/ahmedsaleemdayala/waseel360',
    live: 'https://waseel360.vercel.app/',
  },
  {
    title: 'Meridian Watch',
    description:
      'An elegant online watch store designed to showcase premium watches through a modern e-commerce shopping experience.',
    tags: ['E-commerce', 'Storefront design'],
    github: null,
    live: null,
  },
];

// Carried over from the existing portfolio (links and descriptions as listed there).
export const EARLIER_PROJECTS = [
  { title: 'SMIT Landing Page', description: 'A landing page for a fictional university built with React and Tailwind.', tags: ['React', 'Tailwind CSS'], github: 'https://github.com/ahmedsaleemdayala/SMIT-Landing-Page', live: 'https://saylanimitl.netlify.app/' },
  { title: 'Travel Landing Page', description: 'A landing page for a travel agency built with React and Tailwind.', tags: ['React', 'Tailwind CSS'], github: 'https://github.com/ahmedsaleemdayala/Landing-Page-Travel', live: 'https://travellandingpge.netlify.app/' },
  { title: 'Stitch by Stitch', description: 'A website for stitching enthusiasts.', tags: ['HTML', 'CSS'], github: 'https://github.com/ahmedsaleemdayala/stitch-by-Stitch', live: 'https://stitch-by-stitch.netlify.app' },
  { title: 'Caklora Cake', description: 'A bakery website showcasing cakes.', tags: ['HTML', 'CSS'], github: 'https://github.com/ahmedsaleemdayala/Cake-Landing-Page', live: 'https://caklora.netlify.app' },
  { title: 'Bykea Landing Page', description: 'A landing page for a ride-hailing service.', tags: ['HTML', 'CSS'], github: 'https://github.com/ahmedsaleemdayala/Bykea', live: 'https://bykea-page.netlify.app' },
  { title: 'Food Panda', description: 'A food delivery landing page.', tags: ['HTML', 'CSS'], github: 'https://github.com/ahmedsaleemdayala/Food-Panda', live: 'https://food-pandaa.netlify.app/' },
  { title: 'Al-Ghiza Talbeena', description: 'A site for healthy eating and recipes.', tags: ['HTML', 'CSS'], github: 'https://github.com/ahmedsaleemdayala/Al-Ghiza', live: 'https://al-ghiza.netlify.app/' },
  { title: 'SMIT Feedback Form', description: 'A feedback form for students.', tags: ['HTML', 'CSS'], github: 'https://github.com/ahmedsaleemdayala/Feedback', live: 'https://starlit-tanuki-5f9a23.netlify.app' },
];

export const TECH = [
  { title: 'Frontend Development', icon: 'layout', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'] },
  { title: 'Backend Development', icon: 'server', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Database & Deployment', icon: 'database', items: ['Supabase', 'SQL Server', 'Git', 'GitHub', 'Vercel', 'Netlify'] },
  { title: 'Accounting & Finance', icon: 'ledger', items: ['Accounting Software', 'Microsoft Excel', 'Financial Reporting', 'General Ledger', 'Bank Reconciliation', 'Trial Balance', 'Profit & Loss', 'Balance Sheet Preparation', 'Fee Management', 'Auditing'] },
  { title: 'Data Analytics', icon: 'chart', items: ['Power BI', 'Python for Finance', 'Data Analytics'] },
  { title: 'Artificial Intelligence', icon: 'ai', items: ['ChatGPT', 'Claude', 'Gemini', 'AI-Assisted Development', 'Automation'], learning: ['Agentic AI'] },
  { title: 'Professional Tools', icon: 'tools', items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft Outlook', 'Microsoft Access'] },
];

// Every number here is countable from the CV and this project list.
export const STATS = [
  { value: 15, suffix: '+', label: 'Years in accounts & finance', note: 'Audit, administration and accounts since 2007' },
  { value: FEATURED_PROJECTS.length + EARLIER_PROJECTS.length, suffix: '', label: 'Projects in the portfolio', note: 'Featured builds plus earlier work' },
  { value: EXPERIENCE.length, suffix: '', label: 'Professional roles', note: 'Accounts, audit, administration, development' },
  { value: 4, suffix: '', label: 'Industries worked in', note: 'Import/export, education, healthcare, textile' },
];

// Real testimonials only. Add entries like { quote, name, role } and they appear automatically.
export const TESTIMONIALS = [];
