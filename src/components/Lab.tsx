"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { labProjects } from "@/data/projects";
import SpotlightCard from "./ui/SpotlightCard";
import { FlaskConical, Radio, ArrowUpRight } from "lucide-react";

const LAB_CATEGORIES = ["ALL", "WEB", "AUTOMATION", "SECURITY", "AI", "HARDWARE"];

const categoryColors: Record<string, string> = {
  WEB: "#f4d03f",
  AUTOMATION: "#e63946",
  SECURITY: "#e63946",
  AI: "#2ecc71",
  HARDWARE: "#f4d03f",
};

export default function Lab() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered = activeCategory === "ALL"
    ? labProjects
    : labProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="lab" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#2ecc71]/10 border border-[#2ecc71]/30">
            <FlaskConical size={14} className="text-[#2ecc71]" />
            <span className="font-mono text-xs tracking-widest text-[#2ecc71]">04 // EXPERIMENTAL LAB</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-[#2ecc71]/30 via-white/[0.05] to-transparent" />
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#f0f0f5]">
              ANONYTE <span className="text-gradient-emerald">LAB</span>
            </h2>
            <p className="font-mono text-sm sm:text-base text-[#8888aa] mt-3 max-w-xl">
              Internal research, client automation scripts, pentesting utilities, and ongoing hardware experiments.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-[#8888aa]">
            <Radio size={14} className="text-[#2ecc71] animate-pulse" />
            <span>LAB TELEMETRY: ACTIVE ({labProjects.length} ENTRIES)</span>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {LAB_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#2ecc71] text-black font-bold shadow-[0_0_15px_rgba(46,204,113,0.4)] border border-[#2ecc71]"
                  : "bg-white/[0.03] text-[#8888aa] border border-white/[0.08] hover:border-white/[0.2] hover:text-[#f0f0f5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lab Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => {
            const color = categoryColors[project.category] ?? "#8888aa";
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 }}
              >
                <SpotlightCard
                  className="p-6 h-full flex flex-col justify-between group border-white/[0.08] hover:border-white/[0.2]"
                  borderColor={color + "50"}
                  spotlightColor={color + "10"}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-mono text-[10px] px-2 py-0.5 rounded uppercase font-bold"
                        style={{
                          background: `${color}15`,
                          color: color,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="font-mono text-xs flex items-center gap-1.5 text-[#2ecc71]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71] animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#f0f0f5] mb-2 uppercase group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs leading-relaxed text-[#8888aa] mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] font-mono text-[10px] text-[#8888aa]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
