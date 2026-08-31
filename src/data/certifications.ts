export interface Certification {
  name: string;
  issuer: string;
  year: string;
  category: "certification" | "hackathon" | "achievement" | "program";
  description: string;
  certificateUrl?: string;
  image?: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    name: "HackManthan — CraftMyPass",
    issuer: "HackManthan Hackathon",
    year: "2024",
    category: "hackathon",
    description:
      "Sole developer of Craft-My-Pass. Built a high-performance password generator with Have I Been Pwned API breach-checking integration.",
    image: "/images/certifications/hackmanthan.jpg",
    certificateUrl: "https://the-anonyte.vercel.app/Certifications/Hackmanthan.pdf",
    color: "#e63946",
  },
  {
    name: "Buildfolio Hackathon",
    issuer: "Manipal Institute of Technology (Unstop)",
    year: "2024",
    category: "hackathon",
    description:
      "Participated and engineered solutions at the Buildfolio Hackathon organized on the Unstop platform by Manipal Institute of Technology.",
    image: "/images/certifications/buildfolio-manipal.jpg",
    color: "#e63946",
  },
  {
    name: "Bootcamp on Artificial Intelligence",
    issuer: "AI Bootcamp Initiative",
    year: "2024",
    category: "certification",
    description:
      "Hands-on intensive bootcamp covering modern Artificial Intelligence algorithms, neural pipelines, and real-world ML workflows.",
    image: "/images/certifications/ai-bootcamp.jpg",
    color: "#2ecc71",
  },
  {
    name: "Introduction to Data Science",
    issuer: "Springboard",
    year: "2024",
    category: "certification",
    description:
      "Core principles of exploratory data analysis, statistics, Python data engineering pipelines, and machine learning models.",
    image: "/images/certifications/data-science.jpg",
    color: "#f4d03f",
  },
  {
    name: "Big Data Engineering Foundations",
    issuer: "Springboard / Big Data",
    year: "2024",
    category: "certification",
    description:
      "Architectural foundations of distributed big data processing, data lake structures, and large-scale data pipeline analytics.",
    image: "/images/certifications/big-data.jpg",
    color: "#f4d03f",
  },
  {
    name: "C Programming Masterclass",
    issuer: "Technical Certification",
    year: "2023",
    category: "certification",
    description:
      "Low-level memory management, pointers, data structures, and algorithmic optimization in C.",
    image: "/images/certifications/c-programming.jpg",
    color: "#e63946",
  },
  {
    name: "Community Leadership Fundamentals",
    issuer: "Lovely Professional University",
    year: "2024",
    category: "program",
    description:
      "Leadership principles, team coordination, and community engagement through the TCTC educational initiative.",
    image: "/images/certifications/lpu-leadership.jpg",
    color: "#2ecc71",
  },
  {
    name: "2+ Years Independent Freelance Income",
    issuer: "Self-Employed",
    year: "2022 – Present",
    category: "achievement",
    description:
      "Sustained income through independent software development, automation engineering, and client project delivery.",
    color: "#e63946",
  },
  {
    name: "50+ Session Telegram SaaS Platform",
    issuer: "Self-Built Production",
    year: "2024",
    category: "achievement",
    description:
      "Independently designed, developed, and deployed a production SaaS platform coordinating 50+ Telegram sessions on Linux VPS.",
    color: "#f4d03f",
  },
];
