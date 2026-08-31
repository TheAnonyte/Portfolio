"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, GitBranch, Maximize2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: Props) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!project) notFound();

  const hasImage = project.image && !imageError;

  return (
    <main className="min-h-screen relative" style={{ background: "#050508", color: "#f0f0f5" }}>
      {/* Fine grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Back */}
        <Link
          href="/#work"
          id="project-back"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-12 text-[#8888aa] hover:text-[#e63946] transition-colors"
        >
          <ArrowLeft size={14} />
          BACK TO SYSTEMS
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="font-mono text-xs tracking-widest uppercase px-2.5 py-1 rounded"
              style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
            >
              {project.category.toUpperCase()}
            </span>
            <span
              className="font-mono text-xs"
              style={{ color: project.status === "live" ? "#2ecc71" : "#8888aa" }}
            >
              {project.status === "live" ? "● LIVE IN PRODUCTION" : "✓ COMPLETED"}
            </span>
          </div>

          <h1
            className="font-display font-black text-5xl md:text-7xl uppercase mb-3 text-white"
            style={{ lineHeight: 0.95 }}
          >
            {project.title}
          </h1>
          <p className="font-mono text-lg" style={{ color: project.color }}>{project.tagline}</p>
        </div>

        {/* Project Screenshot / Snippet Banner if uploaded */}
        {hasImage && (
          <div
            onClick={() => setZoomOpen(true)}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.12] bg-black/60 shadow-2xl mb-12 group cursor-pointer"
          >
            <Image
              src={project.image!}
              alt={project.title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
              priority
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs">
              <Maximize2 size={16} className="text-[#e63946]" />
              <span>CLICK TO EXPAND SNIPPET</span>
            </div>
          </div>
        )}

        {/* Color bar */}
        <div className="h-0.5 mb-12" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

        {/* CTA links */}
        <div className="flex flex-wrap gap-3 mb-14">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" id="proj-live-link"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase font-bold text-black rounded-xl"
              style={{ background: project.color, boxShadow: `0 0 20px ${project.color}50` }}>
              <ExternalLink size={14} /> LIVE DEPLOYMENT
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" id="proj-github-link"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase rounded-xl border border-white/[0.1] bg-white/[0.04] text-white hover:border-white/[0.3]">
              <GitBranch size={14} /> REPOSITORY
            </a>
          )}
        </div>

        {/* Content sections */}
        <div className="space-y-12">
          {/* Description */}
          <section>
            <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: project.color }}>
              01 // OVERVIEW
            </h2>
            <p className="text-base leading-relaxed text-[#a0a0b5] font-mono">{project.description}</p>
          </section>

          {/* Problem / Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0e0e16]/80">
              <h3 className="font-mono text-xs tracking-widest uppercase mb-3 text-[#e63946]">THE PROBLEM</h3>
              <p className="text-sm leading-relaxed text-[#a0a0b5] font-mono">{project.problem}</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0e0e16]/80">
              <h3 className="font-mono text-xs tracking-widest uppercase mb-3 text-[#2ecc71]">THE SOLUTION</h3>
              <p className="text-sm leading-relaxed text-[#a0a0b5] font-mono">{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <section>
            <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: project.color }}>
              02 // KEY FEATURES & CAPABILITIES
            </h2>
            <ul className="space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 font-mono text-sm text-[#a0a0b5]">
                  <span style={{ color: project.color }}>›</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* Tech stack */}
          <section>
            <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: project.color }}>
              03 // TECH STACK ARCHITECTURE
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs px-3.5 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] text-white">
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges + Learnings */}
          <div className="grid md:grid-cols-2 gap-6">
            <section className="p-6 rounded-2xl border border-white/[0.08] bg-[#0e0e16]/80">
              <h2 className="font-mono text-xs tracking-widest uppercase mb-3 text-[#f4d03f]">CHALLENGES & OVERCOMING THEM</h2>
              <p className="text-sm leading-relaxed text-[#a0a0b5] font-mono">{project.challenges}</p>
            </section>
            <section className="p-6 rounded-2xl border border-white/[0.08] bg-[#0e0e16]/80">
              <h2 className="font-mono text-xs tracking-widest uppercase mb-3 text-[#2ecc71]">KEY ENGINEERING LEARNINGS</h2>
              <p className="text-sm leading-relaxed text-[#a0a0b5] font-mono">{project.learnings}</p>
            </section>
          </div>
        </div>

        {/* Back footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <Link href="/" id="proj-back-home"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#8888aa] hover:text-[#e63946] transition-colors">
            <ArrowLeft size={14} />
            BACK TO ANONYTE IDENTITY
          </Link>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {zoomOpen && hasImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-6 flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-white/[0.15] bg-[#0c0c14] shadow-2xl p-4">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.1]">
                <span className="font-mono text-xs text-white font-bold">{project.title} // FULL SNIPPET</span>
                <button className="p-1 rounded-md text-[#8888aa] hover:text-white">
                  <X size={18} />
                </button>
              </div>
              <div className="relative w-full h-[70vh] rounded-xl overflow-hidden">
                <Image
                  src={project.image!}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
