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
  role: "Software Developer (Backend)",
  email: "sn220222@gmail.com",
  phone: "+91 9022377468",
  github: "/sahilsnaik",
  linkedin: "/sahil-naik-003658125/",
  intro:
    "Backend-focused developer designing resilient APIs, scalable systems, and delivery-ready products with clean architecture and strong execution discipline.",
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
  "I build backend systems that stay dependable under real usage, from payment workflows and authentication layers to data-heavy product features.",
  "My work centers on Laravel, Node.js, SQL systems, and the practical engineering choices that keep products fast, maintainable, and shippable.",
  "I enjoy taking ownership of messy product edges, the places where integrations, data design, and release quality matter more than hype.",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript", "Python", "PHP", "SQL", "NoSQL", "HTML5", "CSS3"],
    primaryItems: ["JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["Laravel", "React.js", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS"],
    primaryItems: ["Laravel", "Node.js", "React.js"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "CI/CD", "AWS S3", "Jira", "Bitbucket"],
    primaryItems: ["Docker", "CI/CD"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
    primaryItems: ["MySQL"],
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
      "Building backend systems with a focus on scalable APIs, maintainable architecture, and dependable delivery.",
      "Working across payment integrations, operational workflows, and data handling with performance and reliability in mind.",
      "Collaborating closely with product and engineering teams to ship stable features that support real business use.",
    ],
    currentFocus: [
      "Laravel APIs for product and payment workflows",
      "Query performance, caching, and operational reliability",
      "Release-ready backend changes inside Agile delivery cycles",
    ],
    dailyStack: ["Laravel", "JavaScript", "MySQL", "JWT", "AWS S3", "Bitbucket", "Postman", "Jira"],
  },
];

export const keyStats: KeyStat[] = [
  { label: "Current Focus", value: "Backend APIs" },
  { label: "Highlighted Projects", value: "03" },
  { label: "Core Strength", value: "Reliable Systems" },
  { label: "Delivery Style", value: "Production Ready" },
];

export const projects: ProjectItem[] = [
  {
    title: "WegoFin",
    summary:
      "Custom fintech platform with admin and merchant workflows for secure payments, payment links, QR codes, refunds, payouts, settlements, reports, and real-time transaction tracking.",
    stack: ["Laravel 8", "PHP", "MySQL", "REST APIs", "Backpack Admin"],
    problem:
      "The platform needed both merchant-facing payment tools and admin-facing operations controls to manage online payments, refunds, payouts, settlements, KYC, reports, tickets, roles, and transaction visibility securely.",
    solution:
      "Designed and implemented Laravel REST APIs, gateway callback/status flows, API credential checks, scheduled jobs, and Backpack admin modules for merchants, dashboards, KYC, transactions, refunds, payouts, reports, tickets, roles, and settlements.",
    role: "Built backend payment APIs, refund and settlement workflow logic, real-time tracking behavior, and performance-focused improvements in collaboration with cross-functional teams.",
    outcome:
      "Delivered a more dependable financial operations system with clearer visibility for merchants and admins, stronger data security, scalable API integrations, and cleaner handling of payments, refunds, payouts, reports, and settlements.",
    highlights: [
      "Admin dashboards, roles, KYC, tickets, and reports",
      "Merchant payment links, QR codes, and API flows",
      "Refund, payout, settlement, and status tracking",
    ],
    visualLabel: "Payments Infrastructure",
    demoNote: "Demo available on request due to private company workflows and credentials.",
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
