export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  challenges: string;
  learnings: string;
  category: "web" | "automation" | "ai" | "hardware" | "security" | "saas";
  featured: boolean;
  status: "live" | "development" | "completed";
  color: string;
}

export const projects: Project[] = [
  {
    slug: "pathwise-ai",
    title: "PathWise AI",
    tagline: "AI Resume & Career Guidance Platform",
    description:
      "An AI-powered platform that extracts resume text from PDFs, analyzes it against a target job role using Gemini, and generates a match score, skill gaps, and a personalized learning pathway. Features a mock interview chatbot.",
    problem:
      "Job seekers struggle to understand exactly why their resume isn't landing interviews, and have no structured way to identify skill gaps for specific roles.",
    solution:
      "Built an end-to-end AI pipeline: PDF parsing → Gemini analysis → structured gap report + personalized roadmap. A mock interview chatbot lets users practice before the real thing.",
    features: [
      "PDF resume extraction and parsing",
      "Gemini-powered job role match scoring",
      "Skill gap identification and learning pathway generation",
      "Mock interview chatbot with role-specific evaluation",
      "30–40 user beta test",
    ],
    tech: ["Python", "FastAPI", "Gemini API", "Vite", "Tailwind CSS", "PDF processing"],
    live: "https://pathwise-ai-three.vercel.app",
    image: "/images/projects/pathwise-ai.png",
    challenges:
      "Ensuring Gemini output was structured and consistent across different resume formats required careful prompt engineering and output validation.",
    learnings:
      "Learned how to design AI pipelines that produce reliable structured output, and how to build production-grade FastAPI backends with async PDF processing.",
    category: "ai",
    featured: true,
    status: "live",
    color: "#f4d03f",
  },
  {
    slug: "telegram-automation-saas",
    title: "Telegram Automation SaaS",
    tagline: "24/7 Multi-Session Automation Platform",
    description:
      "A full-scale SaaS platform engineered to coordinate 50+ simultaneous Telegram sessions 24/7 using Pyrogram, deployed on a 16 GB Rocky Linux VPS. Includes subscription management, proxy support, and real-time event automation.",
    problem:
      "Managing dozens of Telegram accounts simultaneously — reactions, voice chat participation, session health — requires infrastructure that doesn't exist off-the-shelf.",
    solution:
      "Built a centralized event-driven architecture where each session runs independently, coordinated through a single admin layer with subscription controls, proxy rotation, and real-time triggers.",
    features: [
      "50+ concurrent Telegram sessions via Pyrogram",
      "Real-time post listeners with auto-reactions",
      "Voice chat participation workflows",
      "Admin panel: subscription plans, session lifecycle, proxy management",
      "Account status monitoring and channel management",
      "Deployed 24/7 on 16 GB Rocky Linux VPS",
    ],
    tech: ["Python", "Pyrogram", "Linux VPS", "Rocky Linux", "Session management", "Proxy integration"],
    image: "/images/projects/telegram-saas.png",
    challenges:
      "Handling session state for 50+ accounts simultaneously without memory leaks or race conditions required careful async architecture design.",
    learnings:
      "Deep understanding of Pyrogram internals, Linux process management, and building production SaaS admin systems from scratch.",
    category: "automation",
    featured: true,
    status: "completed",
    color: "#e63946",
  },
  {
    slug: "craft-my-pass",
    title: "Craft-My-Pass",
    tagline: "Password Security Web Tool",
    description:
      "A sleek, minimal, neon-themed password generator built during HackManthan hackathon. Integrates the Have I Been Pwned API to check whether generated passwords have appeared in known data breaches.",
    problem:
      "Most password generators don't check if the generated password pattern has been seen in breach databases, leaving users with a false sense of security.",
    solution:
      "Combined real-time password generation with HIBP API breach checking, custom text-based generation, and a minimal dark-neon UI focused on usability.",
    features: [
      "Instant secure password generation",
      "Customizable length, symbols, numbers, letters",
      "Have I Been Pwned API breach check integration",
      "Custom text-based password generation",
      "One-click clipboard copy",
      "Mobile + desktop responsive",
    ],
    tech: ["React.js", "TypeScript", "Tailwind CSS", "HIBP API", "Vercel"],
    github: "https://github.com/TheAnonyte/craft-my-pass",
    live: "https://craftmypass.vercel.app",
    image: "/images/projects/craft-my-pass.png",
    challenges:
      "Integrating HIBP's k-anonymity model correctly — hashing passwords, sending only the prefix, and matching locally — without ever transmitting the full password.",
    learnings:
      "Learned about k-anonymity for API security and how to build security-focused UX that teaches users about password hygiene without overwhelming them.",
    category: "security",
    featured: true,
    status: "live",
    color: "#2ecc71",
  },
  {
    slug: "telegram-member-bot",
    title: "Telegram Member Management Bot",
    tagline: "Auto-moderation & Community Bot",
    description:
      "A full-featured Telegram bot that auto-accepts join requests, sends customizable welcome and goodbye messages, supports admin broadcast functionality, and stores 20,000+ user records in MongoDB.",
    problem:
      "Telegram group admins spend significant time on repetitive moderation tasks — approving joins, welcoming members, sending announcements.",
    solution:
      "Automated the entire member lifecycle: auto-approval, personalized welcome flows, admin broadcast system, and persistent user data storage at scale.",
    features: [
      "Auto-accept join requests",
      "Customizable welcome/goodbye messages",
      "Admin broadcast system",
      "20K+ user record storage in MongoDB",
      "Role-based command access",
    ],
    tech: ["Python", "Pyrogram", "MongoDB", "Linux"],
    image: "/images/projects/member-bot.png",
    challenges:
      "Handling MongoDB writes efficiently at scale without hitting rate limits while keeping the bot responsive to real-time events.",
    learnings:
      "Production database design for high-volume write workloads, and building robust Telegram bot state machines.",
    category: "automation",
    featured: true,
    status: "completed",
    color: "#e63946",
  },
  {
    slug: "automated-door-lock",
    title: "Automated Door Lock System",
    tagline: "Arduino × Wi-Fi × Telegram Integration",
    description:
      "An IoT door lock system combining Arduino-based hardware control with real-time Telegram bot alerts over Wi-Fi. Responsible for the full Telegram integration layer connecting physical hardware to digital notifications.",
    problem:
      "Traditional door locks provide no digital awareness — you can't know remotely whether a door was opened or locked.",
    solution:
      "Integrated a Telegram bot with Arduino hardware over Wi-Fi so that every lock/unlock event triggers an instant notification, with optional remote control.",
    features: [
      "Arduino-based physical lock control",
      "Wi-Fi connectivity for remote communication",
      "Real-time Telegram bot alerts on lock/unlock",
      "Remote lock control via Telegram commands",
    ],
    tech: ["Arduino", "Wi-Fi", "Telegram Bot API", "Python", "IoT"],
    image: "/images/projects/door-lock.png",
    challenges:
      "Bridging the gap between the physical Arduino serial output and the Telegram API layer reliably without packet loss.",
    learnings:
      "Hands-on experience with IoT-to-cloud integration patterns and the challenges of real-time hardware event propagation.",
    category: "hardware",
    featured: false,
    status: "completed",
    color: "#f4d03f",
  },
];

export const labProjects = [
  {
    title: "Meta Ads Landing Pages",
    description: "20+ high-converting landing pages for client Meta Ads campaigns.",
    category: "WEB",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Delivered",
  },
  {
    title: "Firebase Flutter Apps",
    description: "Flutter applications with Firebase auth and user-data storage for client projects.",
    category: "AUTOMATION",
    tech: ["Flutter", "Firebase", "Dart"],
    status: "Delivered",
  },
  {
    title: "Reverse Engineering Experiments",
    description: "APK analysis using APKTool and JADX; exploring app internals and security patterns.",
    category: "SECURITY",
    tech: ["Kali Linux", "APKTool", "JADX"],
    status: "Ongoing",
  },
  {
    title: "Linux VPS Infrastructure",
    description: "Production deployment and maintenance of workloads on Rocky Linux VPS infrastructure.",
    category: "AUTOMATION",
    tech: ["Linux", "Docker", "Bash"],
    status: "Active",
  },
  {
    title: "TCTC Community Outreach",
    description: "LPU community project: reached 250+ students to promote critical thinking via Times Foundation.",
    category: "WEB",
    tech: ["Community", "Outreach"],
    status: "Completed",
  },
];
