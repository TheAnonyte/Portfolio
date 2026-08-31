"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills, skillCategories, type Skill } from "@/data/skills";
import SpotlightCard from "./ui/SpotlightCard";
import { Sparkles, Layers, Cpu } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const filtered = activeCategory === "ALL"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const levelLabel = (l: number) => {
    if (l >= 5) return "Production Master";
    if (l >= 4) return "Advanced Heavy Use";
    if (l >= 3) return "Proficient Systems";
    return "Exploring / Active";
  };

  return (
    <section id="skills" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#f4d03f]/10 border border-[#f4d03f]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f4d03f] animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-[#f4d03f]">02 // TECH ARSENAL</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-[#f4d03f]/30 via-white/[0.05] to-transparent" />
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#f0f0f5]">
            ENGINEERED <span className="text-gradient-gold">STACK</span>
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#8888aa] mt-3">
            Interactive breakdown of programming languages, frameworks, automation tools, and infrastructure.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#e63946] text-white font-bold shadow-[0_0_20px_rgba(230,57,70,0.5)] border border-[#e63946]"
                  : "bg-white/[0.03] text-[#8888aa] border border-white/[0.08] hover:border-white/[0.2] hover:text-[#f0f0f5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid + Live Inspector Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Grid (8 cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
              {filtered.map((skill, idx) => {
                const isHovered = hoveredSkill?.name === skill.name;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: idx * 0.02 }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="cursor-pointer"
                  >
                    <SpotlightCard
                      className={`p-4 transition-all duration-300 ${
                        isHovered ? "scale-[1.03] -translate-y-1" : ""
                      }`}
                      borderColor={skill.color + "60"}
                      spotlightColor={skill.color + "15"}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span
                          className="font-mono text-[9px] px-1.5 py-0.5 rounded uppercase font-bold"
                          style={{
                            background: skill.color + "15",
                            color: skill.color,
                            border: `1px solid ${skill.color}30`,
                          }}
                        >
                          L{skill.level}
                        </span>
                      </div>

                      <div className="font-mono text-xs font-bold text-[#f0f0f5] mb-2 truncate">
                        {skill.name}
                      </div>

                      {/* Power Cell Level Gauge */}
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, d) => (
                          <div
                            key={d}
                            className="h-1 flex-1 rounded-full transition-all duration-300"
                            style={{
                              background: d < skill.level ? skill.color : "rgba(255,255,255,0.08)",
                              boxShadow: d < skill.level ? `0 0 6px ${skill.color}` : "none",
                            }}
                          />
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Live Inspector Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <SpotlightCard
              className="p-6 md:p-8 h-full sticky top-28"
              borderColor={hoveredSkill ? hoveredSkill.color + "50" : "rgba(255,255,255,0.1)"}
              spotlightColor={hoveredSkill ? hoveredSkill.color + "10" : "rgba(255,255,255,0.02)"}
            >
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl p-3 rounded-2xl bg-white/[0.05] border border-white/[0.1]">
                      {hoveredSkill.icon}
                    </span>
                    <div>
                      <div
                        className="font-display font-black text-2xl"
                        style={{ color: hoveredSkill.color }}
                      >
                        {hoveredSkill.name}
                      </div>
                      <div className="font-mono text-xs text-[#8888aa] uppercase tracking-wider">
                        {hoveredSkill.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] font-mono text-xs text-[#d4d4dc] leading-relaxed">
                    {hoveredSkill.description}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-xs">
                      <span className="text-[#8888aa]">PROFICIENCY LEVEL:</span>
                      <span style={{ color: hoveredSkill.color }} className="font-bold">
                        {levelLabel(hoveredSkill.level)} ({hoveredSkill.level}/5)
                      </span>
                    </div>

                    <div className="h-2 w-full rounded-full bg-white/[0.08] overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(hoveredSkill.level / 5) * 100}%` }}
                        transition={{ duration: 0.4 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${hoveredSkill.color}90, ${hoveredSkill.color})`,
                          boxShadow: `0 0 10px ${hoveredSkill.color}`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 font-mono text-[11px] text-[#2ecc71]">
                    <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
                    <span>PRODUCTION VERIFIED IN ANONYTE WORK</span>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[260px] text-[#8888aa] space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#e63946] animate-pulse">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-[#f0f0f5] uppercase tracking-wider">
                      INTERACTIVE TELEMETRY
                    </div>
                    <p className="font-mono text-[11px] text-[#8888aa] mt-1 max-w-[200px]">
                      Hover over any technology node to inspect live proficiency and architecture notes.
                    </p>
                  </div>
                </div>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
