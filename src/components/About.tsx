"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Cpu, Globe, Lock, Code2, Server, Award, Sparkles, Check, Copy } from "lucide-react";
import Image from "next/image";
import SpotlightCard from "./ui/SpotlightCard";

const telemetryMetrics = [
  { value: "2+", label: "Years Freelance", detail: "Active Client Engineering", color: "#e63946" },
  { value: "20+", label: "Systems Deployed", detail: "Automation & Web Platforms", color: "#f4d03f" },
  { value: "50+", label: "Telegram Bots & Daemons", detail: "24/7 Linux VPS Hosting", color: "#2ecc71" },
  { value: "7.67", label: "CGPA (B.Tech CSE)", detail: "Lovely Professional University", color: "#e63946" },
];

const pillars = [
  { icon: Terminal, title: "Autonomous Automation", desc: "Pyrogram, Telethon, & asynchronous background workers running resilient daemon workloads." },
  { icon: Globe, title: "Full-Stack Web Systems", desc: "Next.js 15, FastAPI, modern React architectures with sub-second API response times." },
  { icon: Lock, title: "Cybersecurity & Pentesting", desc: "Breach-checking algorithms (HIBP), reverse engineering (APKTool/JADX), & secure access controls." },
  { icon: Server, title: "Cloud & Linux Infrastructure", desc: "Linux VPS optimization, systemd service management, Docker containerization, & zero-downtime." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("meankitkumar53@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Identifier Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#e63946]/10 border border-[#e63946]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63946] animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-[#e63946]">01 // IDENTITY MATRIX</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-[#e63946]/30 via-white/[0.05] to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#f0f0f5]">
            WHO IS <span className="text-gradient-red">ANONYTE</span>?
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#8888aa] mt-3 max-w-2xl">
            Computer Science Engineer by education. Systems builder, automation architect, and security enthusiast by obsession.
          </p>
        </motion.div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bento Card 1: Avatar Holographic Deck (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <SpotlightCard
              className="h-full p-6 md:p-8 flex flex-col justify-between"
              borderColor="rgba(230, 57, 70, 0.4)"
              spotlightColor="rgba(230, 57, 70, 0.1)"
            >
              <div>
                {/* Holographic Header */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2ecc71] shadow-[0_0_8px_#2ecc71]" />
                    <span className="font-mono text-xs font-bold text-[#f0f0f5]">BIOMETRIC_PROFILE.RAW</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#8888aa]">CSE_2ND_YEAR</span>
                </div>

                {/* Avatar Frame with Cyber Glow */}
                <div className="relative mx-auto w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white/[0.12] shadow-[0_0_40px_rgba(0,0,0,0.8)] group mb-6">
                  {/* Glowing corner HUD brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#e63946] z-20" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#e63946] z-20" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#e63946] z-20" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#e63946] z-20" />

                  {/* Image */}
                  <Image
                    src="/images/avator.png"
                    alt="Ankit Kumar — ANONYTE"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                    priority
                  />

                  {/* Dark gradient base overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />

                  {/* Scanline sweep */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e63946]/15 to-transparent h-12 w-full animate-scan-line pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* On-image badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/[0.1]">
                    <div className="font-mono text-xs font-bold text-white flex items-center justify-between">
                      <span>ANKIT KUMAR</span>
                      <span className="text-[#e63946]">ANONYTE</span>
                    </div>
                    <div className="font-mono text-[10px] text-[#8888aa] mt-0.5">
                      LPU B.Tech CSE // CGPA 7.67
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <div className="font-mono text-[11px] text-[#8888aa]">
                  IDENTITY: <span className="text-[#f0f0f5]">VERIFIED</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] hover:border-[#e63946]/50 hover:bg-[#e63946]/10 font-mono text-[10px] text-[#f0f0f5] flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-[#2ecc71]" />
                      <span className="text-[#2ecc71]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} className="text-[#8888aa]" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 2: Narrative & Engineering Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Upper Narrative Card */}
            <SpotlightCard
              className="p-6 md:p-8 flex-1"
              borderColor="rgba(244, 208, 63, 0.3)"
              spotlightColor="rgba(244, 208, 63, 0.06)"
            >
              <div className="flex items-center gap-2 mb-5 font-mono text-xs text-[#f4d03f]">
                <Sparkles size={14} />
                <span>CORE_PHILOSOPHY.MD</span>
              </div>

              <div className="space-y-4 text-sm md:text-base leading-relaxed text-[#a0a0b5]">
                <p>
                  While most students write code purely for assignments, I&apos;ve spent the last 2+ years
                  engineering <span className="text-white font-semibold">real-world systems</span> — autonomous Telegram automation engines, AI-powered career accelerators, and high-performance web applications running 24/7 on remote Linux VPS clusters.
                </p>
                <p>
                  I operate under the digital moniker <span className="text-[#e63946] font-bold">ANONYTE</span> — someone who takes complex architectures, dissects how they fail, and reconstructs them stronger, faster, and fully automated.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap gap-2">
                {["Production First", "Zero Downtime", "Cybersecurity Mindset", "Autonomous Pipelines"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-[#f0f0f5]"
                  >
                    # {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>

            {/* Lower 4-Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {telemetryMetrics.map((metric, idx) => (
                <SpotlightCard
                  key={metric.label}
                  className="p-4 text-center flex flex-col justify-center items-center"
                  borderColor={metric.color + "50"}
                  spotlightColor={metric.color + "12"}
                >
                  <div
                    className="font-display font-black text-2xl sm:text-3xl mb-1"
                    style={{ color: metric.color }}
                  >
                    {metric.value}
                  </div>
                  <div className="font-mono text-xs font-bold text-[#f0f0f5] leading-tight">
                    {metric.label}
                  </div>
                  <div className="font-mono text-[9px] text-[#8888aa] mt-1">
                    {metric.detail}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4 Engineering Pillars Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
        >
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <SpotlightCard
                key={p.title}
                className="p-5"
                borderColor="rgba(255, 255, 255, 0.15)"
                spotlightColor="rgba(255, 255, 255, 0.04)"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#e63946] mb-4 shadow-[0_0_15px_rgba(230,57,70,0.2)]">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-bold text-base text-[#f0f0f5] mb-2 uppercase">
                  {p.title}
                </h3>
                <p className="font-mono text-xs text-[#8888aa] leading-relaxed">
                  {p.desc}
                </p>
              </SpotlightCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
