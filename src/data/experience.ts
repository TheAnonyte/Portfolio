export interface ExperienceEntry {
  title: string;
  org: string;
  period: string;
  type: "freelance" | "education" | "project";
  description: string;
  highlights: string[];
  color: string;
}

export const experience: ExperienceEntry[] = [
  {
    title: "Freelance Developer & Automation Engineer",
    org: "Independent",
    period: "2022 – Present · 2+ Years",
    type: "freelance",
    description:
      "Building and deploying software for real clients across web development, automation, and backend systems.",
    highlights: [
      "Delivered 20+ Meta Ads landing pages for client campaigns",
      "Built custom Telegram bots and Flutter/Android applications",
      "Developed Firebase-integrated mobile apps with auth and data storage",
      "Engineered and deployed production workloads on Linux VPS infrastructure",
      "Designed and built a multi-session Telegram automation SaaS platform",
      "Earned income independently through software and automation development",
    ],
    color: "#e63946",
  },
  {
    title: "B.Tech — Computer Science & Engineering",
    org: "Lovely Professional University, Phagwara, Punjab",
    period: "2025 – 2029 · 2nd Year",
    type: "education",
    description: "Pursuing Computer Science with focus on software development, cybersecurity, and AI applications.",
    highlights: [
      "CGPA: 7.67",
      "Active project work alongside coursework",
      "Community engagement through TCTC initiative (250+ students reached)",
    ],
    color: "#f4d03f",
  },
  {
    title: "Class 12 — Science",
    org: "Gyan Educational Institution",
    period: "2024",
    type: "education",
    description: "Science stream with focus on Physics, Chemistry, and Mathematics.",
    highlights: [],
    color: "#8888aa",
  },
  {
    title: "Class 10",
    org: "St. Francis De Sales School",
    period: "2022",
    type: "education",
    description: "Secondary education completion.",
    highlights: [],
    color: "#8888aa",
  },
];
