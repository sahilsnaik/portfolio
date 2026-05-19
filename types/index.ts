export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  value: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
  primaryItems?: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  highlights: string[];
  currentFocus?: string[];
  dailyStack?: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  stack: string[];
  codeUrl: string;
  problem: string;
  solution: string;
  role: string;
  outcome: string;
  highlights: string[];
  visualLabel: string;
  demoUrl?: string;
  demoLabel?: string;
  demoNote?: string;
};

export type KeyStat = {
  label: string;
  value: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  meta: string;
  coursework?: string[];
};

export type PersonalInfo = {
  name: string;
  role: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  intro: string;
  resumeUrl: string;
};
