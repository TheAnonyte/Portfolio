"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AmbientLighting() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top Center Ruby Red Glow */}
      <motion.div
        animate={{
          x: (mousePos.x - 0.5) * 60,
          y: (mousePos.y - 0.5) * 60,
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 0.5, ease: "easeOut" },
          y: { duration: 0.5, ease: "easeOut" },
        }}
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(230, 57, 70, 0.12) 0%, rgba(230, 57, 70, 0.03) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Mid Left Emerald Cyber Glow */}
      <motion.div
        animate={{
          x: (mousePos.x - 0.5) * -40,
          y: (mousePos.y - 0.5) * -40,
          scale: [1, 1.15, 1],
        }}
        transition={{
          scale: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 0.6, ease: "easeOut" },
          y: { duration: 0.6, ease: "easeOut" },
        }}
        className="absolute top-[35%] -left-[150px] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(46, 204, 113, 0.08) 0%, rgba(46, 204, 113, 0.01) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Mid Right Amber Gold Cyber Glow */}
      <motion.div
        animate={{
          x: (mousePos.x - 0.5) * 50,
          y: (mousePos.y - 0.5) * 50,
          scale: [1, 1.2, 1],
        }}
        transition={{
          scale: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 0.7, ease: "easeOut" },
          y: { duration: 0.7, ease: "easeOut" },
        }}
        className="absolute top-[60%] -right-[150px] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(244, 208, 63, 0.07) 0%, rgba(244, 208, 63, 0.01) 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Deep Bottom Crimson Glow */}
      <div
        className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(230, 57, 70, 0.09) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Futuristic Cyber Mesh Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
