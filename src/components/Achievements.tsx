"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { certifications, type Certification } from "@/data/certifications";
import SpotlightCard from "./ui/SpotlightCard";
import { Award, Trophy, Star, Briefcase, ExternalLink, Maximize2, X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const categoryIcon: Record<string, React.ReactNode> = {
  certification: <Award size={18} />,
  hackathon: <Trophy size={18} />,
  achievement: <Star size={18} />,
  program: <Briefcase size={18} />,
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSnippet, setActiveSnippet] = useState<{ title: string; image: string } | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section id="achievements" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#f4d03f]/10 border border-[#f4d03f]/30">
            <Trophy size={14} className="text-[#f4d03f]" />
            <span className="font-mono text-xs tracking-widest text-[#f4d03f]">06 // RECOGNITION & CERTS</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-[#f4d03f]/30 via-white/[0.05] to-transparent" />
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#f0f0f5]">
            AWARDS & <span className="text-gradient-gold">CREDENTIALS</span>
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#8888aa] mt-3">
            Industry certifications, hackathon recognitions, and competitive milestones.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const hasImage = cert.image && !imageErrors[cert.name];

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
              >
                <SpotlightCard
                  className="p-6 md:p-8 h-full flex flex-col justify-between group border-white/[0.08] hover:border-white/[0.2]"
                  borderColor={cert.color + "60"}
                  spotlightColor={cert.color + "12"}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                        style={{
                          background: `${cert.color}15`,
                          color: cert.color,
                          border: `1px solid ${cert.color}30`,
                        }}
                      >
                        {categoryIcon[cert.category] || <Award size={18} />}
                      </div>

                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[#8888aa]">
                        {cert.year}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white uppercase mb-1 leading-snug group-hover:text-white transition-colors">
                      {cert.name}
                    </h3>
                    <div className="font-mono text-xs font-semibold mb-4" style={{ color: cert.color }}>
                      {cert.issuer}
                    </div>
                    <p className="font-mono text-xs leading-relaxed text-[#a0a0b5] mb-5">
                      {cert.description}
                    </p>

                    {/* Certificate Thumbnail Preview if uploaded */}
                    {hasImage && (
                      <div
                        onClick={() => setActiveSnippet({ title: cert.name, image: cert.image! })}
                        className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.1] bg-black/60 cursor-pointer group/thumb mb-4"
                      >
                        <Image
                          src={cert.image!}
                          alt={cert.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 350px"
                          className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                          onError={() => setImageErrors((prev) => ({ ...prev, [cert.name]: true }))}
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs">
                          <Maximize2 size={14} className="text-[#f4d03f]" />
                          <span>VIEW CERTIFICATE</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-2 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#8888aa] uppercase">
                      STATUS: VERIFIED
                    </span>

                    {cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold transition-all"
                        style={{ color: cert.color }}
                      >
                        <span>LINK</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal Zoom Viewer */}
      <AnimatePresence>
        {activeSnippet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveSnippet(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-6 flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/[0.15] bg-[#0c0c14] shadow-2xl p-4">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.1]">
                <span className="font-mono text-xs text-white font-bold">{activeSnippet.title} // VERIFIED CREDENTIAL</span>
                <button className="p-1 rounded-md text-[#8888aa] hover:text-white">
                  <X size={18} />
                </button>
              </div>
              <div className="relative w-full h-[65vh] rounded-xl overflow-hidden">
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
