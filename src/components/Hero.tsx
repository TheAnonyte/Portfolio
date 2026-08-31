"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, Terminal, Shield, Cpu, Zap, Activity, Copy, Check } from "lucide-react";
import ParticleField from "./ui/ParticleField";
import SpotlightCard from "./ui/SpotlightCard";

const roles = [
  { title: "Automation Architect", color: "#e63946", icon: Zap },
  { title: "Full-Stack Engineer", color: "#f4d03f", icon: Cpu },
  { title: "Security Researcher", color: "#2ecc71", icon: Shield },
  { title: "Systems Builder", color: "#e63946", icon: Terminal },
];

const terminalTabs = [
  {
    id: "telemetry",
    title: "telemetry.sh",
    content: `[00:01:04] SYS_DAEMON: online (PID: 8042)
[00:01:05] TELEGRAM_ROUTER: 50+ sessions active on Linux VPS
[00:01:06] API_LATENCY: 18ms (FastAPI + AsyncIO)
[00:01:07] SECURITY_AUDIT: All endpoints verified & patched
[00:01:08] IDENTITY_NODE: Ankit Kumar // ANONYTE ready for production`,
  },
  {
    id: "stack",
    title: "core_stack.json",
    content: `{
  "core_languages": ["Python", "TypeScript", "JavaScript"],
  "automation": ["Pyrogram", "Telethon", "FastAPI", "Docker"],
  "web_systems": ["Next.js 15", "React", "TailwindCSS"],
  "infrastructure": ["Linux VPS", "MongoDB", "MySQL", "Git"]
}`,
  },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setLightPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("meankitkumar53@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const CurrentIcon = roles[roleIdx].icon;

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-20 px-6"
      id="hero"
    >
      {/* Dynamic Background Particle Field */}
      <ParticleField count={110} interactive />

      {/* Reactive Dynamic Flashlight Beam */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(800px circle at ${lightPos.x}% ${lightPos.y}%, rgba(230, 57, 70, 0.08) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center">
        {/* Top Floating Cyber Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(230,57,70,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ecc71] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2ecc71]" />
          </span>
          <span className="font-mono text-xs tracking-widest text-[#d4d4dc]">
            DIGITAL IDENTITY // <span className="text-[#2ecc71] font-bold">AVAILABLE FOR WORK</span>
          </span>
        </motion.div>

        {/* Main Giant Cybernetic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6"
        >
          <h1 className="font-display font-black tracking-tighter leading-[0.9] select-none text-[3.6rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9rem]">
            <span className="text-gradient-silver block drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
              ANKIT
            </span>
            <span className="text-gradient-red block drop-shadow-[0_0_45px_rgba(230,57,70,0.4)]">
              KUMAR
            </span>
          </h1>

          {/* Holographic Watermark behind name */}
          <div
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-display font-black text-[7rem] sm:text-[11rem] md:text-[14rem] text-white/[0.015] tracking-widest uppercase -z-10 select-none"
          >
            ANONYTE
          </div>
        </motion.div>

        {/* Dynamic Interactive Role Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm md:text-base font-mono"
        >
          <span className="text-[#8888aa]">OPERATING AS</span>
          <span className="px-3 py-1 rounded-lg bg-[#e63946]/15 border border-[#e63946]/30 text-[#e63946] font-bold tracking-widest">
            ANONYTE
          </span>
          <span className="text-[#3a3a55]">/ /</span>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] min-w-[230px] justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 font-bold"
                style={{ color: roles[roleIdx].color }}
              >
                <CurrentIcon size={15} />
                <span>{roles[roleIdx].title}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA Buttons with Neon Shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full max-w-md justify-center"
        >
          {/* Primary Button */}
          <button
            onClick={scrollToWork}
            id="hero-cta-explore"
            className="relative group w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs font-bold tracking-widest uppercase overflow-hidden text-white bg-gradient-to-r from-[#e63946] to-[#b02a35] shadow-[0_0_30px_rgba(230,57,70,0.4)] hover:shadow-[0_0_50px_rgba(230,57,70,0.8)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>EXPLORE SYSTEMS</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Secondary Button */}
          <button
            onClick={handleCopyEmail}
            id="hero-cta-contact"
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-mono text-xs font-bold tracking-widest uppercase border border-white/[0.12] bg-white/[0.03] backdrop-blur-md text-[#f0f0f5] hover:border-[#e63946]/60 hover:bg-[#e63946]/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={15} className="text-[#2ecc71]" />
                <span className="text-[#2ecc71]">COPIED EMAIL!</span>
              </>
            ) : (
              <>
                <Copy size={15} className="text-[#8888aa]" />
                <span>COPY TRANSMISSION</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Live Interactive Telemetry Console / Terminal Deck */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full max-w-3xl"
        >
          <SpotlightCard
            className="border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            borderColor="rgba(230, 57, 70, 0.4)"
            spotlightColor="rgba(230, 57, 70, 0.08)"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-black/40">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e63946] shadow-[0_0_6px_#e63946]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f4d03f] shadow-[0_0_6px_#f4d03f]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] shadow-[0_0_6px_#2ecc71]" />
                <span className="ml-2 font-mono text-[11px] text-[#8888aa]">anonyte@systems-node:~</span>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1">
                {terminalTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1 rounded-md font-mono text-[10px] tracking-wider transition-all ${
                      activeTab === idx
                        ? "bg-white/[0.08] text-[#f0f0f5] border border-white/[0.1]"
                        : "text-[#8888aa] hover:text-[#f0f0f5]"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-5 text-left font-mono text-xs md:text-[13px] leading-relaxed bg-[#07070d]/90 overflow-x-auto">
              <pre className="text-[#8888aa] whitespace-pre-wrap">
                {terminalTabs[activeTab].content}
              </pre>
              <div className="mt-3 flex items-center gap-2 text-[#e63946]">
                <span>root@anonyte:~#</span>
                <span className="w-2 h-4 bg-[#e63946] animate-pulse inline-block" />
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="px-4 py-2.5 border-t border-white/[0.05] bg-black/50 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-[#8888aa]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-[#2ecc71]">
                  <Activity size={12} /> HOST: LINUX VPS (24/7)
                </span>
                <span className="hidden sm:inline">|</span>
                <span className="hidden sm:inline">DAEMON: PYROGRAM V2</span>
              </div>
              <span className="text-[#f4d03f]">UPTIME: 99.98%</span>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
