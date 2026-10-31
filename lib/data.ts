import type {
  EducationItem,
  ExperienceItem,
  KeyStat,
  NavItem,
  PersonalInfo,
  ProjectItem,
  SkillCategory,
  SocialLink,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Sahil Shankar Naik",
  role: "Software Developer | Backend Development",
  email: "sn220222@gmail.com",
  phone: "+91 9022377468",
  github: "/sahilsnaik",
  linkedin: "/sahil-naik-003658125/",
  intro:
    "Software Developer experienced in building web applications, developing REST APIs, integrating payment workflows, and working with databases to deliver reliable software solutions.",
  resumeUrl: "/Sahil-Shankar-Naik-Resume.pdf",
};

export const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
  },
  {
    label: "GitHub",
    value: personalInfo.github,
    href: `https://github.com${personalInfo.github}`,
  },
  {
    label: "LinkedIn",
    value: personalInfo.linkedin,
    href: `https://www.linkedin.com/in${personalInfo.linkedin}`,
  },
];

export const aboutCopy = [
  "I'm a Software Developer with experience in backend development and web application development. My work involves building and maintaining APIs, implementing application logic, integrating payment workflows, and working with databases.",
  "I primarily work with PHP, Laravel, JavaScript, and MySQL, with experience across frontend technologies and modern development tools. I enjoy solving technical problems, improving existing applications, and writing maintainable code.",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript", "Python", "PHP", "SQL", "NoSQL", "HTML5", "CSS3"],
    coreItems: ["JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["Laravel", "React.js", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS"],
    coreItems: ["Laravel", "Node.js"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "CI/CD", "AWS S3", "Jira", "Bitbucket", "Composer"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
    coreItems: ["MySQL"],
  },
  {
    title: "AI",
    items: ["Gemini API", "Generative AI", "Prompt Engineering"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer (Backend)",
    company: "Wholewave Elements Pvt Ltd",
    location: "Chennai",
    period: "June 2025 - Present",
    type: "Full-time",
    highlights: [
      "Develop and maintain backend functionality using PHP and Laravel, following established application architecture and coding practices.",
      "Build and maintain REST APIs, including request validation, authentication, and integration with other application components.",
      "Work on payment workflows, business logic, and data processing within application modules.",
      "Optimize database queries and application logic to improve performance and maintainability.",
      "Collaborate with team members to implement features, troubleshoot issues, and maintain existing functionality.",
    ],
    currentFocus: [
      "Laravel APIs for product and payment workflows",
      "Query optimization and operational reliability",
      "Release-ready backend changes inside Agile delivery cycles",
    ],
    dailyStack: ["Laravel", "JavaScript", "MySQL", "JWT", "AWS S3", "Bitbucket", "Postman", "Jira"],
  },
];

export const keyStats: KeyStat[] = [
  { label: "Current Focus", value: "Backend APIs" },
  { label: "Highlighted Projects", value: "04" },
  { label: "Core Strength", value: "Reliable Systems" },
  { label: "Delivery Style", value: "Production Ready" },
];

export const projects: ProjectItem[] = [
  {
    title: "WegoFin",
    summary:
      "Fintech operations platform with admin and merchant workflows for merchant accounts, payouts, wallet activity, transaction reconciliation, and reports.",
    stack: ["Laravel 10", "PHP 8.1", "MySQL", "REST APIs", "Backpack CRUD"],
    problem:
      "Payment operations require admin tools to review merchant and KYC information, manage payout and wallet records, reconcile transactions, and prepare reports.",
    solution:
      "The Laravel application provides admin modules for merchants, KYC, payouts, wallets, reconciliation, roles, and reports, alongside Artisan commands for payout checks, reprocessing, and reconciliation tasks.",
    role: "Contributed to backend development for payment and payout workflows, API integrations, database-backed features, and maintenance of existing application functionality.",
    outcome:
      "Provides operational screens and scheduled command workflows for reviewing payout activity, resolving pending transactions, reconciling records, and exporting operational data.",
    highlights: [
      "Admin modules for merchants, KYC, roles, and reports",
      "Payout, wallet, and transaction management workflows",
      "Reconciliation commands and downloadable reports",
    ],
    visualLabel: "Payments Infrastructure",
    demoNote: "Demo available on request due to private company workflows and credentials.",
  },
  {
    title: "AI-Powered Marketing Content & Campaign Assistant",
    summary:
      "AI web app that generates digital marketing content and ad campaigns from product and audience inputs, with campaign management features.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "Gemini API"],
    codeUrl: "https://github.com/sahilsnaik",
    problem:
      "Marketers need ad copy, captions, and campaign variations quickly, and doing this by hand is slow and inconsistent.",
    solution:
      "Built a React + Express app that uses the Gemini API to generate ad copy, social captions, CTAs, keywords, and campaign variations from product and target-audience inputs, with a MySQL-backed layer to create, edit, store, and manage the generated content.",
    role: "Built the full stack: React UI, Express REST APIs, MySQL storage, and Gemini API prompt integration.",
    outcome:
      "Turns a product and audience brief into ready-to-use campaign assets that can be edited and managed in one place.",
    highlights: [
      "AI-generated ad copy, captions, CTAs, keywords",
      "Campaign variations from audience inputs",
      "Create, edit, and store campaign content via REST APIs",
    ],
    visualLabel: "Generative AI Product",
    demoNote: "Demo available on request.",
  },
  {
    title: "MERN Stack Real Estate Platform",
    summary:
      "Full-stack real estate platform with Google OAuth, protected listing management, Firebase image uploads, advanced search filters, and paginated property browsing.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit"],
    problem:
      "The product needed a complete property workflow where users could authenticate securely, create and manage listings, upload images, and filter homes quickly across rent and sale flows.",
    solution:
      "Built a MERN application with JWT-based auth, Google sign-in, protected routes, Firebase-backed image uploads, listing CRUD flows, and query-driven search with filters for type, offer, parking, furnishing, and sort order.",
    role: "Built full-stack application logic, search flows, authentication features, and listing management experience.",
    outcome:
      "Delivered an end-to-end real estate experience with smoother onboarding, self-serve listing operations, and faster property discovery through practical filtering and pagination.",
    highlights: [
      "Google OAuth and JWT cookie authentication",
      "Create, update, and delete listing workflows",
      "Firebase image uploads with advanced search and show-more pagination",
    ],
    visualLabel: "Full-Stack Product",
    demoNote: "Project includes private-route flows, listing CRUD, and Firebase image handling; demo details can be shared on request.",
  },
  {
    title: "Smart RFID Livestock Management System",
    summary:
      "IoT-based monitoring platform using ESP8266, RFID tags, MQTT protocol, and PostgreSQL for real-time health, weight, and vaccine tracking for farmers.",
    stack: ["ESP8266", "RFID", "MQTT", "PostgreSQL", "IoT"],
    problem:
      "Farmers needed a practical way to monitor livestock health records, weights, and vaccine status in real time without manual tracking overhead.",
    solution:
      "Engineered an RFID and MQTT-driven monitoring system backed by PostgreSQL to collect and surface livestock activity and health data.",
    role: "Worked on IoT integration, backend data handling, and real-time monitoring flow design.",
    outcome:
      "Enabled faster livestock record visibility and more reliable tracking for operational farm health workflows.",
    highlights: [
      "RFID + MQTT device communication",
      "PostgreSQL-backed health records",
      "Real-time livestock monitoring",
    ],
    visualLabel: "IoT Monitoring",
    demoNote: "System walkthrough and demo notes available on request.",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications",
    institution: "R.V. College of Engineering, Bengaluru",
    meta: "CGPA 7.91 (2022-2024)",
    coursework: ["Data Structures", "DBMS", "Computer Networks", "Cloud Computing"],
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Vidyalankar School of IT, Mumbai",
    meta: "CGPA 8.72 (2019-2022)",
    coursework: ["Web Development", "Software Engineering", "Operating Systems", "Java"],
  },
];
