"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, ArrowRight, CheckCircle2, Maximize2, X, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import SpotlightCard from "./ui/SpotlightCard";

const categoryLabel: Record<string, string> = {
  web: "WEB APPLICATION",
  automation: "TELEGRAM AUTOMATION",
  ai: "AI PLATFORM",
  hardware: "HARDWARE / EMBEDDED",
  security: "CYBERSECURITY",
  saas: "SAAS PLATFORM",
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const featured = projects.filter((p) => p.featured);
  const [activeSnippet, setActiveSnippet] = useState<{ title: string; image: string } | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section id="work" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Tag Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#e63946]/10 border border-[#e63946]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63946] animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-[#e63946]">03 // FLAGSHIP PRODUCTION</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-[#e63946]/30 via-white/[0.05] to-transparent" />
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#f0f0f5]">
              FEATURED <span className="text-gradient-red">SYSTEMS</span>
            </h2>
            <p className="font-mono text-sm sm:text-base text-[#8888aa] mt-3 max-w-xl">
              Production-grade platforms, high-throughput automation daemons, and security tools built from scratch.
            </p>
          </div>

          <div className="font-mono text-xs text-[#8888aa] bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-xl flex items-center gap-2">
            <span className="text-[#2ecc71]">●</span>
            <span>{featured.length} VERIFIED PRODUCTION BUILDS</span>
          </div>
        </motion.div>

        {/* Project Cards Stack */}
        <div className="space-y-8">
          {featured.map((project, i) => {
            const hasImage = project.image && !imageErrors[project.slug];

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <SpotlightCard
                  className="group p-0 border-white/[0.1] hover:border-white/[0.2] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  borderColor={project.color + "60"}
                  spotlightColor={project.color + "10"}
                >
                  {/* Simulated macOS Window Header */}
                  <div className="px-6 py-3.5 border-b border-white/[0.08] bg-black/40 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#e63946] shadow-[0_0_6px_#e63946]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#f4d03f] shadow-[0_0_6px_#f4d03f]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] shadow-[0_0_6px_#2ecc71]" />
                      <span className="ml-3 font-mono text-xs text-[#8888aa]">
                        ~/systems/{project.slug}.sh
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-[10px] px-2.5 py-1 rounded-md uppercase font-bold"
                        style={{
                          background: `${project.color}15`,
                          color: project.color,
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        {categoryLabel[project.category] || project.category.toUpperCase()}
                      </span>

                      <span className="hidden sm:inline-flex font-mono text-[10px] items-center gap-1.5 text-[#2ecc71]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71] animate-pulse" />
                        {project.status === "live" ? "PRODUCTION LIVE" : "DEPLOYED"}
                      </span>
                    </div>
                  </div>

                  {/* Project Body */}
                  <div className="p-6 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Left Details (7 cols) */}
                      <div className="lg:col-span-7 space-y-5">
                        <div>
                          <div className="font-mono text-xs tracking-wider mb-2" style={{ color: project.color }}>
                            {project.tagline}
                          </div>
                          <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase group-hover:text-white transition-colors">
                            {project.title}
                          </h3>
                        </div>

                        <p className="font-mono text-sm leading-relaxed text-[#a0a0b5]">
                          {project.description}
                        </p>

                        {/* Feature Bullet Points */}
                        <div className="space-y-2 pt-2">
                          {project.features.slice(0, 3).map((f) => (
                            <div key={f} className="flex items-start gap-2.5 font-mono text-xs text-[#8888aa]">
                              <CheckCircle2 size={15} className="text-[#2ecc71] shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-2 pt-3">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-[#f0f0f5]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="px-6 py-3 rounded-xl font-mono text-xs font-bold tracking-wider uppercase text-black flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg"
                            style={{
                              background: project.color,
                              boxShadow: `0 0 25px ${project.color}50`,
                            }}
                          >
                            <span>VIEW ARCHITECTURE</span>
                            <ArrowRight size={14} />
                          </Link>

                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-[#2ecc71]/50 hover:bg-[#2ecc71]/10 font-mono text-xs text-[#2ecc71] flex items-center gap-2 transition-all"
                            >
                              <ExternalLink size={14} />
                              <span>LIVE DEPLOYMENT</span>
                            </a>
                          )}

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-white/[0.3] hover:text-white font-mono text-xs text-[#8888aa] flex items-center gap-2 transition-all"
                            >
                              <GitBranch size={14} />
                              <span>SOURCE REPO</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right: Interactive Snippet Preview / Telemetry Deck (5 cols) */}
                      <div className="lg:col-span-5">
                        {hasImage ? (
                          <div
                            onClick={() => setActiveSnippet({ title: project.title, image: project.image! })}
                            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/[0.1] bg-black/60 cursor-pointer group/img shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                          >
                            <Image
                              src={project.image!}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 450px"
                              className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                              onError={() => setImageErrors((prev) => ({ ...prev, [project.slug]: true }))}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4 justify-between">
                              <span className="font-mono text-xs text-white flex items-center gap-1.5">
                                <Maximize2 size={13} className="text-[#e63946]" /> CLICK TO EXPAND
                              </span>
                              <span className="font-mono text-[10px] text-[#8888aa]">PREVIEW.PNG</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-black/40 border border-white/[0.06] text-center space-y-4 min-h-[220px]">
                            <div
                              className="font-display font-black text-6xl md:text-7xl select-none leading-none"
                              style={{
                                color: `${project.color}25`,
                                textShadow: `0 0 40px ${project.color}15`,
                              }}
                            >
                              0{i + 1}
                            </div>

                            <div className="font-mono text-xs text-[#8888aa] border-t border-white/[0.06] pt-4 w-full">
                              <div className="text-[#f0f0f5] font-bold mb-1">SYSTEM SNIPPET READY</div>
                              <div className="text-[10px] text-[#8888aa]">
                                Upload to: <code className="text-white/70">public/images/projects/{project.slug}.png</code>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Snippet Modal Zoom Viewer */}
      <AnimatePresence>
        {activeSnippet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveSnippet(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-6 flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-white/[0.15] bg-[#0c0c14] shadow-2xl p-4">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.1]">
                <span className="font-mono text-xs text-white font-bold">{activeSnippet.title} // FULL SNIPPET</span>
                <button className="p-1 rounded-md text-[#8888aa] hover:text-white">
                  <X size={18} />
                </button>
              </div>
              <div className="relative w-full h-[70vh] rounded-xl overflow-hidden">
                <Image
                  src={activeSnippet.image}
                  alt={activeSnippet.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
