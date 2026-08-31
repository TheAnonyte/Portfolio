export interface Skill {
  name: string;
  category: string;
  description: string;
  level: number; // 1-5
  icon: string;
  color: string;
}

export const skillCategories = [
  "ALL",
  "PROGRAMMING",
  "WEB",
  "BACKEND & AI",
  "AUTOMATION",
  "DATABASES",
  "SECURITY",
  "INFRASTRUCTURE",
  "IoT",
];

export const skills: Skill[] = [
  // Programming
  { name: "Python", category: "PROGRAMMING", description: "Primary language for automation, bots, AI pipelines, and backend services.", level: 5, icon: "🐍", color: "#f4d03f" },
  { name: "JavaScript", category: "PROGRAMMING", description: "Full-stack JS for web apps, APIs, and interactive interfaces.", level: 4, icon: "⚡", color: "#f4d03f" },
  { name: "TypeScript", category: "PROGRAMMING", description: "Type-safe JS development — used in CraftMyPass and modern web projects.", level: 4, icon: "🔷", color: "#3178c6" },
  { name: "C", category: "PROGRAMMING", description: "Systems programming and low-level understanding from university curriculum.", level: 3, icon: "⚙️", color: "#8888aa" },

  // Web
  { name: "React.js", category: "WEB", description: "Component-based UIs — used in CraftMyPass and PathWise AI frontend.", level: 4, icon: "⚛️", color: "#61dafb" },
  { name: "Next.js", category: "WEB", description: "Full-stack React framework with SSR, routing, and API routes.", level: 4, icon: "▲", color: "#f0f0f5" },
  { name: "Tailwind CSS", category: "WEB", description: "Utility-first CSS — primary styling tool for all web projects.", level: 5, icon: "🎨", color: "#38bdf8" },
  { name: "HTML / CSS", category: "WEB", description: "Foundation — 20+ landing pages and custom web tools built.", level: 5, icon: "🌐", color: "#e34c26" },
  { name: "Vite", category: "WEB", description: "Build tool of choice for fast frontend development.", level: 4, icon: "⚡", color: "#646cff" },
  { name: "Flutter", category: "WEB", description: "Cross-platform mobile apps with Firebase integration for clients.", level: 3, icon: "📱", color: "#54c5f8" },

  // Backend & AI
  { name: "FastAPI", category: "BACKEND & AI", description: "Python backend for AI pipelines — used in PathWise AI.", level: 4, icon: "🚀", color: "#009688" },
  { name: "Firebase", category: "BACKEND & AI", description: "Auth, Firestore, and realtime database for Flutter client apps.", level: 4, icon: "🔥", color: "#ffa000" },
  { name: "Gemini API", category: "BACKEND & AI", description: "AI model integration for resume analysis, interview bots, and intelligent processing.", level: 4, icon: "🤖", color: "#f4d03f" },

  // Automation
  { name: "Pyrogram", category: "AUTOMATION", description: "Telegram MTProto client — foundation of the 50+ session SaaS platform.", level: 5, icon: "🤖", color: "#e63946" },
  { name: "Telegram Bot API", category: "AUTOMATION", description: "Bot development — member management, door lock integration, admin tools.", level: 5, icon: "📨", color: "#2ca5e0" },
  { name: "Git / GitHub", category: "AUTOMATION", description: "Version control and collaboration — all projects tracked on GitHub.", level: 4, icon: "🐙", color: "#8888aa" },

  // Databases
  { name: "MongoDB", category: "DATABASES", description: "NoSQL storage — 20K+ user records in the Member Management Bot.", level: 4, icon: "🍃", color: "#2ecc71" },
  { name: "MySQL / SQL", category: "DATABASES", description: "Relational databases for structured data and university projects.", level: 3, icon: "🗃️", color: "#4479a1" },

  // Security
  { name: "Kali Linux", category: "SECURITY", description: "Primary security research environment — tools, reconnaissance, analysis.", level: 4, icon: "🛡️", color: "#e63946" },
  { name: "APKTool / JADX", category: "SECURITY", description: "Android APK reverse engineering — decompiling and analyzing app internals.", level: 3, icon: "🔍", color: "#8888aa" },
  { name: "Cybersecurity", category: "SECURITY", description: "Beginner MITM concepts, packet analysis, network security fundamentals.", level: 3, icon: "🔐", color: "#e63946" },

  // Infrastructure
  { name: "Linux / VPS", category: "INFRASTRUCTURE", description: "Production server management — Rocky Linux VPS for the Telegram SaaS platform.", level: 4, icon: "🐧", color: "#f4d03f" },
  { name: "Docker", category: "INFRASTRUCTURE", description: "Containerization for consistent deployment environments.", level: 3, icon: "🐳", color: "#2496ed" },
  { name: "Vercel", category: "INFRASTRUCTURE", description: "Deployment platform — CraftMyPass, PathWise AI live on Vercel.", level: 4, icon: "▲", color: "#f0f0f5" },

  // IoT
  { name: "Arduino", category: "IoT", description: "Hardware control for the automated door lock system project.", level: 3, icon: "🔧", color: "#00979d" },
  { name: "IoT Integration", category: "IoT", description: "Bridging physical hardware with cloud/messaging services via Wi-Fi.", level: 3, icon: "📡", color: "#2ecc71" },
];
