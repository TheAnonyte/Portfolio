"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Volume2, VolumeX, Sparkles } from "lucide-react";

const navLinks = [
  { href: "#about", label: "01 // IDENTITY" },
  { href: "#skills", label: "02 // TECH" },
  { href: "#work", label: "03 // PROJECTS" },
  { href: "#lab", label: "04 // LAB" },
  { href: "#experience", label: "05 // TIMELINE" },
  { href: "#contact", label: "06 // TRANSMIT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25 }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const playClickSound = () => {
    if (!audioEnabled || typeof window === "undefined") return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {}
  };

  const handleNavClick = (href: string) => {
    playClickSound();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-6 transition-all duration-500">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-6xl rounded-2xl transition-all duration-500 px-4 md:px-6 py-3 flex items-center justify-between ${
            scrolled
              ? "bg-[#090912]/80 backdrop-blur-xl border border-white/[0.1] shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(230,57,70,0.08)]"
              : "bg-transparent border border-white/[0.04]"
          }`}
        >
          {/* Logo / Digital Identity Tag */}
          <button
            onClick={() => {
              playClickSound();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-3 cursor-pointer"
            id="nav-logo"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#e63946]/30 to-[#e63946]/10 border border-[#e63946]/40 text-[#f0f0f5] group-hover:border-[#e63946] group-hover:shadow-[0_0_15px_rgba(230,57,70,0.5)] transition-all duration-300">
              <span className="font-display font-black text-sm text-[#e63946]">A</span>
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#2ecc71] shadow-[0_0_6px_#2ecc71]" />
            </div>

            <div className="text-left">
              <div className="font-display font-bold text-sm tracking-[0.2em] text-[#f0f0f5] group-hover:text-[#e63946] transition-colors">
                ANONYTE
              </div>
              <div className="font-mono text-[9px] text-[#8888aa] tracking-widest uppercase">
                ANKIT KUMAR
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-xl border border-white/[0.05]">
            {navLinks.map(({ href, label }) => {
              const sectionId = href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`relative px-3.5 py-1.5 rounded-lg font-mono text-[11px] tracking-wider transition-all duration-300 ${
                    isActive ? "text-[#ffffff] font-semibold" : "text-[#8888aa] hover:text-[#f0f0f5]"
                  }`}
                  id={`nav-${sectionId}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#e63946]/25 to-[#e63946]/10 border border-[#e63946]/50 shadow-[0_0_15px_rgba(230,57,70,0.3)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Actions: Sound Toggle + Terminal Trigger + Status */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                setAudioEnabled(!audioEnabled);
                if (!audioEnabled) {
                  setTimeout(playClickSound, 50);
                }
              }}
              title={audioEnabled ? "Disable UI SFX" : "Enable Cyber SFX"}
              className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#8888aa] hover:text-[#f0f0f5] hover:border-white/[0.2] transition-all"
            >
              {audioEnabled ? (
                <Volume2 size={14} className="text-[#2ecc71] animate-pulse" />
              ) : (
                <VolumeX size={14} />
              )}
            </button>

            {/* Live Telemetry Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#2ecc71]/10 border border-[#2ecc71]/25">
              <span className="w-2 h-2 rounded-full bg-[#2ecc71] shadow-[0_0_8px_#2ecc71] animate-pulse" />
              <span className="font-mono text-[10px] font-semibold tracking-wider text-[#2ecc71]">
                ONLINE // V2.5
              </span>
            </div>

            {/* Mobile menu trigger */}
            <button
              className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[#f0f0f5]"
              onClick={() => setMenuOpen(!menuOpen)}
              id="nav-mobile-toggle"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-[#050508]/95 flex flex-col justify-center px-8"
          >
            <div className="max-w-md mx-auto w-full space-y-4">
              <div className="mb-8 text-center">
                <div className="font-display font-black text-3xl tracking-widest text-[#f0f0f5]">
                  ANONYTE
                </div>
                <div className="font-mono text-xs text-[#8888aa] mt-1">
                  DIGITAL INTERFACE // ANKIT KUMAR
                </div>
              </div>

              {navLinks.map(({ href, label }, idx) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavClick(href)}
                  className="w-full text-left py-3.5 px-5 rounded-xl border border-white/[0.08] bg-white/[0.02] font-mono text-sm tracking-widest hover:border-[#e63946]/50 hover:bg-[#e63946]/10 hover:text-[#e63946] transition-all flex items-center justify-between text-[#f0f0f5]"
                >
                  <span>{label}</span>
                  <span className="text-xs text-[#e63946]">→</span>
                </motion.button>
              ))}

              <div className="pt-6 border-t border-white/[0.1] flex items-center justify-between text-xs font-mono text-[#8888aa]">
                <span>STATUS: READY TO DEPLOY</span>
                <span className="text-[#2ecc71]">● ONLINE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
