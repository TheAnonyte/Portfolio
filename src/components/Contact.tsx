"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, GitBranch, Link2, ArrowRight, Send, Copy, Check, Radio, Terminal } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

const socials = [
  {
    icon: Mail,
    label: "DIRECT TRANSMISSION",
    value: "meankitkumar53@gmail.com",
    href: "mailto:meankitkumar53@gmail.com",
    color: "#e63946",
    id: "contact-email",
  },
  {
    icon: GitBranch,
    label: "SOURCE REPOSITORY",
    value: "github.com/TheAnonyte",
    href: "https://github.com/TheAnonyte",
    color: "#f0f0f5",
    id: "contact-github",
  },
  {
    icon: Link2,
    label: "PROFESSIONAL NETWORK",
    value: "linkedin.com/in/theanonyte",
    href: "https://linkedin.com/in/theanonyte",
    color: "#0077b5",
    id: "contact-linkedin",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("meankitkumar53@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden min-h-[90vh] flex items-center" ref={ref}>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-10 justify-center"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e63946]/30 to-transparent" />
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e63946]/10 border border-[#e63946]/30 font-mono text-xs text-[#e63946] tracking-widest uppercase">
            <Radio size={13} className="animate-pulse" />
            <span>08 // SECURE TRANSMISSION</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e63946]/30 to-transparent" />
        </motion.div>

        {/* Transmission Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SpotlightCard
            className="p-8 sm:p-14 border-white/[0.12] shadow-[0_25px_80px_rgba(0,0,0,0.95)] relative"
            borderColor="rgba(230, 57, 70, 0.5)"
            spotlightColor="rgba(230, 57, 70, 0.08)"
          >
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="font-display font-black uppercase text-4xl sm:text-6xl md:text-7xl leading-none text-white tracking-tight">
                READY TO <span className="text-gradient-red">BUILD</span>?
              </h2>

              <p className="font-mono text-sm sm:text-base text-[#a0a0b5] leading-relaxed">
                Whether you need a robust automated platform, custom Telegram bots, full-stack web applications, or technical problem solving — let&apos;s engineer something remarkable.
              </p>

              {/* Action Buttons Group */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:meankitkumar53@gmail.com"
                  id="contact-cta-start"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs font-bold tracking-widest uppercase text-white bg-gradient-to-r from-[#e63946] to-[#b02a35] shadow-[0_0_35px_rgba(230,57,70,0.5)] hover:shadow-[0_0_60px_rgba(230,57,70,0.9)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  <span>START A CONVERSATION</span>
                  <ArrowRight size={15} />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl font-mono text-xs font-bold tracking-widest uppercase border border-white/[0.12] bg-white/[0.04] text-white hover:border-[#e63946]/50 hover:bg-[#e63946]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={15} className="text-[#2ecc71]" />
                      <span className="text-[#2ecc71]">EMAIL COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} className="text-[#8888aa]" />
                      <span>COPY EMAIL ADDRESS</span>
                    </>
                  )}
                </button>
              </div>

              {/* Channel Grid */}
              <div className="pt-10 mt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socials.map(({ icon: Icon, label, value, href, color, id }) => (
                  <a
                    key={id}
                    href={href}
                    id={id}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.2] hover:bg-white/[0.06] transition-all text-left group flex items-center gap-3 cursor-pointer"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${color}15`,
                        color: color,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-mono text-[10px] text-[#8888aa] tracking-widest uppercase truncate">
                        {label}
                      </div>
                      <div className="font-mono text-xs font-bold text-white group-hover:text-[#e63946] transition-colors truncate">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
