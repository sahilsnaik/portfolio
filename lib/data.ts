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
  resumeUrl: "/Sahil-Shankar-Naik-Resume.txt",
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
  "My work centers on Laravel, Node.js, SQL and NoSQL systems, and the practical engineering choices that keep products fast, maintainable, and shippable.",
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
    items: ["Git", "GitHub", "Docker", "Postman", "CI/CD"],
    primaryItems: ["Docker", "CI/CD"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
    primaryItems: ["PostgreSQL", "MySQL"],
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
    dailyStack: ["Laravel", "PHP", "MySQL", "JWT", "AWS S3", "Bitbucket", "Postman"],
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
    title: "WEGOFIN",
    summary:
      "Custom payment integration system with RESTful APIs, real-time tracking, refunds and settlements, and support for multiple payment methods.",
    stack: ["Laravel", "REST APIs", "Payments", "Tracking", "Refunds"],
    codeUrl: `https://github.com${personalInfo.github}`,
    problem:
      "The platform needed a secure way to manage payment workflows, refunds, settlements, and multiple payment methods without creating operational bottlenecks.",
    solution:
      "Built a custom backend integration layer with reliable REST APIs, transaction tracking, and settlement-aware flows that kept payment operations traceable and stable.",
    role: "Designed and delivered backend APIs, payment workflow logic, and operational tracking behavior.",
    outcome:
      "Created a dependable payment backbone that improved transaction visibility and supported cleaner refund and settlement handling.",
    highlights: [
      "Multi-method payment integration",
      "Refund and settlement workflow support",
      "Real-time transaction tracking",
    ],
    visualLabel: "Payments Infrastructure",
    demoNote: "Demo available on request due to private company workflows and credentials.",
  },
  {
    title: "MERN Stack Real Estate Platform",
    summary:
      "Full-stack property platform with Google OAuth, listing management, image uploads, advanced search, Redux Toolkit, and Tailwind CSS.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit"],
    codeUrl: `https://github.com${personalInfo.github}`,
    problem:
      "The product needed a modern property platform with secure sign-in, rich listing flows, search usability, and media management across devices.",
    solution:
      "Developed a MERN stack application combining Google OAuth, listing workflows, advanced search, and state management with a responsive frontend.",
    role: "Built full-stack application logic, search flows, authentication features, and listing management experience.",
    outcome:
      "Delivered a complete real estate product flow with better user access, smoother listing operations, and responsive browsing.",
    highlights: [
      "Google OAuth authentication",
      "Image upload and listing workflows",
      "Advanced search with Redux Toolkit",
    ],
    visualLabel: "Full-Stack Product",
    demoNote: "Live demo available on request while the code remains the primary public artifact.",
  },
  {
    title: "Smart RFID Livestock Management System",
    summary:
      "IoT-based monitoring platform using ESP8266, RFID tags, MQTT protocol, and PostgreSQL for real-time health, weight, and vaccine tracking for farmers.",
    stack: ["ESP8266", "RFID", "MQTT", "PostgreSQL", "IoT"],
    codeUrl: `https://github.com${personalInfo.github}`,
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
