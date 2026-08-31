"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, ExternalLink, Code2, Star, GitFork, ShieldCheck } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

const repos = [
  {
    name: "craft-my-pass",
    description: "Next-gen password generator & strength auditor integrated with HaveIBeenPwned breach verification API.",
    lang: "TypeScript",
    langColor: "#3178c6",
    url: "https://github.com/TheAnonyte/craft-my-pass",
    live: "https://craftmypass.vercel.app",
  },
  {
    name: "TheAnonyte",
    description: "Core digital persona blueprint & master automation registry for the ANONYTE identity loop.",
    lang: "Markdown",
    langColor: "#8888aa",
    url: "https://github.com/TheAnonyte/TheAnonyte",
  },
];

const langStats = [
  { lang: "Python", pct: 45, color: "#f4d03f" },
  { lang: "TypeScript", pct: 25, color: "#3178c6" },
  { lang: "JavaScript", pct: 15, color: "#f4d03f" },
  { lang: "HTML / CSS", pct: 10, color: "#e63946" },
  { lang: "Shell / Bash", pct: 5, color: "#2ecc71" },
];

export default function GitHub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#e63946]/10 border border-[#e63946]/30">
            <GitBranch size={14} className="text-[#e63946]" />
            <span className="font-mono text-xs tracking-widest text-[#e63946]">07 // SOURCE TELEMETRY</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-[#e63946]/30 via-white/[0.05] to-transparent" />
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#f0f0f5] mb-14"
        >
          CODE & <span className="text-gradient-red">COMMITS</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* GitHub Identity Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5"
          >
            <SpotlightCard
              className="p-6 md:p-8 h-full flex flex-col justify-between"
              borderColor="rgba(230, 57, 70, 0.4)"
              spotlightColor="rgba(230, 57, 70, 0.08)"
            >
              <div>
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e63946]/20 to-[#e63946]/5 border-2 border-[#e63946]/40 flex items-center justify-center font-display font-black text-xl text-[#e63946] shadow-[0_0_20px_rgba(230,57,70,0.3)]">
                    AK
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl text-white">TheAnonyte</div>
                    <div className="font-mono text-xs text-[#8888aa]">Ankit Kumar // Core Dev</div>
                  </div>
                </div>

                <p className="font-mono text-xs leading-relaxed text-[#a0a0b5] mb-6">
                  &ldquo;Building Things, Breaking Limits, Learning Always.&rdquo; Dedicated to continuous open-source architecture and high-throughput automation.
                </p>

                {/* Language Spectrum Bar */}
                <div className="mb-6">
                  <div className="flex justify-between font-mono text-[11px] text-[#8888aa] mb-2 font-bold">
                    <span>CODEBASE DISTRIBUTION</span>
                    <span className="text-[#e63946]">POLYGLOT</span>
                  </div>

                  <div className="flex h-2.5 rounded-full overflow-hidden gap-1 p-0.5 bg-white/[0.05] border border-white/[0.08] mb-3">
                    {langStats.map((l) => (
                      <div
                        key={l.lang}
                        style={{ width: `${l.pct}%`, backgroundColor: l.color }}
                        className="rounded-full h-full"
                      />
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {langStats.map((l) => (
                      <div key={l.lang} className="flex items-center gap-1.5 font-mono text-[11px] text-[#d4d4dc]">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
                        <span>{l.lang}</span>
                        <span className="text-[#8888aa]">({l.pct}%)</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <a
                  href="https://github.com/TheAnonyte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] hover:border-[#e63946]/60 hover:bg-[#e63946]/10 font-mono text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <GitBranch size={14} className="text-[#e63946]" />
                  <span>EXPLORE GITHUB REPOSITORIES</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Repositories + Confidentiality Notice (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1 }}
              >
                <SpotlightCard
                  className="p-6 border-white/[0.08] hover:border-white/[0.2] transition-all group"
                  borderColor="rgba(255, 255, 255, 0.2)"
                  spotlightColor="rgba(255, 255, 255, 0.03)"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white">
                        <GitBranch size={16} />
                      </div>
                      <span className="font-display font-bold text-lg text-white group-hover:text-[#e63946] transition-colors">
                        {repo.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#8888aa] hover:text-white hover:border-white/[0.2] transition-all"
                        title="GitHub Repo"
                      >
                        <GitBranch size={14} />
                      </a>
                      {repo.live && (
                        <a
                          href={repo.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#2ecc71]/10 border border-[#2ecc71]/20 text-[#2ecc71] hover:bg-[#2ecc71]/20 transition-all"
                          title="Live App"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="font-mono text-xs leading-relaxed text-[#a0a0b5] mb-4">
                    {repo.description}
                  </p>

                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#8888aa]">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                    <span>{repo.lang}</span>
                    <span>•</span>
                    <span className="text-[#2ecc71]">PUBLIC SPEC</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}

            {/* Confidential Systems Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
            >
              <SpotlightCard
                className="p-6 border-[#2ecc71]/20 bg-[#2ecc71]/[0.02]"
                borderColor="rgba(46, 204, 113, 0.4)"
                spotlightColor="rgba(46, 204, 113, 0.08)"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#2ecc71]/15 border border-[#2ecc71]/30 text-[#2ecc71] shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-1">
                      PROPRIETARY & CLIENT CONFIDENTIAL ARCHITECTURES
                    </h4>
                    <p className="font-mono text-xs leading-relaxed text-[#8888aa]">
                      Major high-throughput systems (Telegram SaaS clusters, PathWise AI backend pipelines, and private client bots) operate in private repositories under NDA to preserve client security and proprietary automation algorithms.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
