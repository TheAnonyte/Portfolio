"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/experience";
import SpotlightCard from "./ui/SpotlightCard";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#e63946]/10 border border-[#e63946]/30">
            <Briefcase size={14} className="text-[#e63946]" />
            <span className="font-mono text-xs tracking-widest text-[#e63946]">05 // CAREER TIMELINE</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-[#e63946]/30 via-white/[0.05] to-transparent" />
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#f0f0f5]">
            EXPERIENCE & <span className="text-gradient-red">MILESTONES</span>
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#8888aa] mt-3">
            Track record of freelance delivery, client automation systems, and academic foundation.
          </p>
        </motion.div>

        {/* Circuit Timeline */}
        <div className="relative">
          {/* Vertical Glowing Circuit Line */}
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e63946] via-[#f4d03f] to-[#2ecc71]/20"
            style={{
              boxShadow: "0 0 15px rgba(230,57,70,0.5)",
            }}
          />

          <div className="space-y-10">
            {experience.map((entry, i) => (
              <motion.div
                key={entry.title + entry.org}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Glowing Node */}
                <div
                  className="absolute left-2.5 md:left-6.5 top-6 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 flex items-center justify-center"
                  style={{
                    backgroundColor: "#050508",
                    borderColor: entry.color,
                    boxShadow: `0 0 16px ${entry.color}`,
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                </div>

                <SpotlightCard
                  className="p-6 md:p-8"
                  borderColor={entry.color + "50"}
                  spotlightColor={entry.color + "10"}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 mb-4 border-b border-white/[0.08]">
                    <div>
                      <span
                        className="inline-block font-mono text-[10px] px-2.5 py-0.5 rounded uppercase font-bold mb-2"
                        style={{
                          background: `${entry.color}15`,
                          color: entry.color,
                          border: `1px solid ${entry.color}30`,
                        }}
                      >
                        {entry.type.toUpperCase()}
                      </span>
                      <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                        {entry.title}
                      </h3>
                      <div className="font-mono text-sm font-semibold mt-1" style={{ color: entry.color }}>
                        {entry.org}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-[#8888aa] shrink-0 self-start">
                      <Calendar size={13} className="text-[#e63946]" />
                      <span>{entry.period}</span>
                    </div>
                  </div>

                  <p className="font-mono text-sm leading-relaxed text-[#a0a0b5] mb-5">
                    {entry.description}
                  </p>

                  {entry.highlights.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                      {entry.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2.5 font-mono text-xs text-[#8888aa]">
                          <CheckCircle2 size={14} className="text-[#2ecc71] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
