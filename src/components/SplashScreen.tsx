"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATUS_MESSAGES = [
  { text: "INITIALIZING IDENTITY MATRIX", color: "#e63946" },
  { text: "LOADING PROJECT DATABASE", color: "#8888aa" },
  { text: "SYNCING EXPERIENCE NODES", color: "#8888aa" },
  { text: "CALIBRATING SKILL VECTORS", color: "#8888aa" },
  { text: "ESTABLISHING SECURE INTERFACE", color: "#8888aa" },
  { text: "DIGITAL IDENTITY ONLINE", color: "#2ecc71" },
];

// Glitch text hook
function useGlitch(text: string, active: boolean) {
  const [glitched, setGlitched] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@%&*!";

  useEffect(() => {
    if (!active) { setGlitched(text); return; }
    let frame = 0;
    const interval = setInterval(() => {
      if (frame > 12) { setGlitched(text); clearInterval(interval); return; }
      setGlitched(
        text.split("").map((c, i) =>
          i < frame ? c : (c === " " ? " " : chars[Math.floor(Math.random() * chars.length)])
        ).join("")
      );
      frame++;
    }, 60);
    return () => clearInterval(interval);
  }, [active, text]);

  return glitched;
}

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  const [phase, setPhase] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [glitchActive, setGlitchActive] = useState(false);
  const [ringPulse, setRingPulse] = useState(false);
  const [exitFlash, setExitFlash] = useState(false);

  const anonyte = useGlitch("ANONYTE", glitchActive);

  // ─── Canvas: particles + grid ───────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cx = () => canvas.width / 2;
    const cy = () => canvas.height / 2;

    interface P {
      x: number; y: number; tx: number; ty: number;
      vx: number; vy: number;
      color: string; size: number; alpha: number;
      trail: { x: number; y: number }[];
    }

    const COLORS = ["#e63946", "#2ecc71", "#f4d03f", "#ffffff"];
    const makeParticle = (): P => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 350 + Math.random() * 500;
      const spread = 60;
      return {
        x: cx() + Math.cos(angle) * dist,
        y: cy() + Math.sin(angle) * dist,
        tx: cx() + (Math.random() - 0.5) * spread,
        ty: cy() + (Math.random() - 0.5) * spread,
        vx: 0, vy: 0,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 2.2 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        trail: [],
      };
    };

    const particles: P[] = Array.from({ length: 180 }, makeParticle);
    let startTs = 0;
    let phaseLocal = 0; // mirrors React phase without closure issues

    const onMouseMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMouseMove);

    const draw = (ts: number) => {
      if (!startTs) startTs = ts;
      const elapsed = (ts - startTs) / 1000;
      const convergeProgress = Math.min(elapsed / 0.9, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw fine grid (fades in at phase 1)
      if (elapsed > 0.5) {
        const gridAlpha = Math.min((elapsed - 0.5) / 0.8, 1) * 0.06;
        ctx.strokeStyle = `rgba(230,57,70,${gridAlpha})`;
        ctx.lineWidth = 0.5;
        const spacing = 60;
        for (let x = 0; x < canvas.width; x += spacing) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += spacing) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
        }
      }

      // HUD crosshair lines from center (phase 1+)
      if (elapsed > 0.7) {
        const hudAlpha = Math.min((elapsed - 0.7) / 0.5, 1) * 0.12;
        ctx.strokeStyle = `rgba(230,57,70,${hudAlpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.beginPath(); ctx.moveTo(0, cy()); ctx.lineTo(canvas.width, cy()); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx(), 0); ctx.lineTo(cx(), canvas.height); ctx.stroke();
        ctx.setLineDash([]);
      }

      // Particles
      particles.forEach((p) => {
        // Save trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 8) p.trail.shift();

        // Converge toward center
        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        p.vx += dx * 0.04 * convergeProgress;
        p.vy += dy * 0.04 * convergeProgress;

        // Mouse repel
        const mx = mouseRef.current.x - p.x;
        const my = mouseRef.current.y - p.y;
        const md = Math.sqrt(mx * mx + my * my);
        if (md < 100) {
          const f = (100 - md) / 100;
          p.vx -= (mx / md) * f * 0.6;
          p.vy -= (my / md) * f * 0.6;
        }

        // Slight orbit once converged
        if (convergeProgress >= 1 && elapsed > 2) {
          const orbitR = Math.sqrt((p.x - cx()) ** 2 + (p.y - cy()) ** 2);
          if (orbitR < 80) {
            p.vx += (Math.random() - 0.5) * 0.3;
            p.vy += (Math.random() - 0.5) * 0.3;
          }
        }

        p.vx *= 0.9; p.vy *= 0.9;
        p.x += p.vx; p.y += p.vy;

        // Draw trail
        p.trail.forEach((pt, i) => {
          const trailAlpha = (i / p.trail.length) * p.alpha * 0.3;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color + Math.round(trailAlpha * 255).toString(16).padStart(2, "0");
          ctx.fill();
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();

        // Glow for red particles
        if (p.color === "#e63946" && p.alpha > 0.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(230,57,70,0.04)`;
          ctx.fill();
        }
      });

      // Pulsing energy rings (phase 3+)
      if (elapsed > 2.3) {
        const ringProgress = Math.min((elapsed - 2.3) / 0.4, 1);
        const time = elapsed * 1.5;
        [120, 160, 200].forEach((baseR, i) => {
          const r = baseR + Math.sin(time + i) * 4;
          const alpha = ringProgress * (0.15 - i * 0.04);
          ctx.beginPath();
          ctx.arc(cx(), cy(), r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(230,57,70,${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });

        // Rotating dashes ring
        ctx.save();
        ctx.translate(cx(), cy());
        ctx.rotate(elapsed * 0.4);
        ctx.beginPath();
        ctx.arc(0, 0, 140, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(244,208,63,${ringProgress * 0.2})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([6, 20]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // Counter-rotating ring
        ctx.save();
        ctx.translate(cx(), cy());
        ctx.rotate(-elapsed * 0.25);
        ctx.beginPath();
        ctx.arc(0, 0, 175, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(46,204,113,${ringProgress * 0.15})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 30]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }

      // Energy bar at bottom of center (phase 3)
      if (elapsed > 2.5) {
        const barProgress = Math.min((elapsed - 2.5) / 0.6, 1);
        const barW = 200 * barProgress;
        const barY = cy() + 110;

        // Glow behind bar
        const grd = ctx.createLinearGradient(cx() - barW / 2, 0, cx() + barW / 2, 0);
        grd.addColorStop(0, "rgba(230,57,70,0)");
        grd.addColorStop(0.3, "rgba(230,57,70,0.4)");
        grd.addColorStop(0.5, "rgba(244,208,63,0.4)");
        grd.addColorStop(0.7, "rgba(46,204,113,0.4)");
        grd.addColorStop(1, "rgba(46,204,113,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(cx() - barW / 2, barY - 4, barW, 8);

        // Crisp bar line
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.fillRect(cx() - barW / 2, barY - 1, barW, 2);
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // ─── Phase sequencing ────────────────────────────────────────────────────────
  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = [];

    // Phase 1: Logo appears (700ms)
    t.push(setTimeout(() => setPhase(1), 700));

    // Glitch effect on logo reveal
    t.push(setTimeout(() => setGlitchActive(true), 800));
    t.push(setTimeout(() => setGlitchActive(false), 1400));

    // Phase 2: Status messages (1500ms)
    t.push(setTimeout(() => {
      setPhase(2);
      STATUS_MESSAGES.forEach((_, i) => {
        t.push(setTimeout(() => setVisibleMessages(prev => [...prev, i]), i * 160));
      });
    }, 1500));

    // Phase 3: System ready (2500ms)
    t.push(setTimeout(() => {
      setPhase(3);
      setRingPulse(true);
    }, 2500));

    // Second glitch at system ready
    t.push(setTimeout(() => setGlitchActive(true), 2600));
    t.push(setTimeout(() => setGlitchActive(false), 3000));

    // Phase 4: Exit flash (3300ms)
    t.push(setTimeout(() => {
      setPhase(4);
      setExitFlash(true);
    }, 3300));

    // Complete (4000ms)
    t.push(setTimeout(() => onComplete(), 4000));

    return () => t.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9998] flex items-center justify-center overflow-hidden"
          style={{ background: "#050508" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
        >
          {/* Canvas layer */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Scanlines overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)",
              zIndex: 1,
            }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
              zIndex: 1,
            }}
          />

          {/* ── CENTRAL CONTENT ── */}
          <div className="relative z-10 flex flex-col items-center" style={{ userSelect: "none" }}>

            {/* HUD top bar */}
            {phase >= 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute font-mono text-xs tracking-widest flex items-center gap-6"
                style={{ top: -80, color: "#3a3a55" }}
              >
                <span style={{ color: "#e63946" }}>◈</span>
                SYS_BOOT_SEQUENCE
                <span>■ ■ ■ ■ ■</span>
                <span style={{ color: "#e63946" }}>◈</span>
              </motion.div>
            )}

            {/* Main logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative text-center"
            >
              {/* Glitch layers */}
              {phase >= 1 && (
                <>
                  <div
                    className="absolute font-display font-black uppercase select-none pointer-events-none"
                    style={{
                      fontSize: "clamp(3.5rem, 12vw, 9rem)",
                      lineHeight: 1,
                      letterSpacing: "0.18em",
                      color: "#e63946",
                      opacity: glitchActive ? 0.4 : 0,
                      transform: "translate(-3px, 1px)",
                      filter: "blur(1px)",
                    }}
                  >
                    {anonyte}
                  </div>
                  <div
                    className="absolute font-display font-black uppercase select-none pointer-events-none"
                    style={{
                      fontSize: "clamp(3.5rem, 12vw, 9rem)",
                      lineHeight: 1,
                      letterSpacing: "0.18em",
                      color: "#2ecc71",
                      opacity: glitchActive ? 0.3 : 0,
                      transform: "translate(3px, -1px)",
                      filter: "blur(1px)",
                    }}
                  >
                    {anonyte}
                  </div>
                </>
              )}

              {/* Main text */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: phase >= 1 ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative font-display font-black uppercase"
                style={{
                  fontSize: "clamp(3.5rem, 12vw, 9rem)",
                  lineHeight: 1,
                  letterSpacing: "0.18em",
                  color: "#f0f0f5",
                  textShadow: phase >= 3
                    ? "0 0 40px rgba(230,57,70,0.9), 0 0 80px rgba(230,57,70,0.4), 0 0 120px rgba(230,57,70,0.15)"
                    : "0 0 20px rgba(230,57,70,0.5)",
                }}
              >
                {anonyte}
              </motion.div>

              {/* Underline bar */}
              {phase >= 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  style={{
                    height: 1,
                    marginTop: 8,
                    background: "linear-gradient(90deg, transparent, #e63946, #f4d03f, #2ecc71, transparent)",
                    boxShadow: "0 0 12px rgba(230,57,70,0.5)",
                  }}
                />
              )}

              {/* ANKIT KUMAR sub-label */}
              {phase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-center gap-4 mt-4"
                >
                  <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
                  <span className="font-mono text-xs tracking-[0.5em] uppercase" style={{ color: "#8888aa" }}>
                    ANKIT KUMAR
                  </span>
                  <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
                </motion.div>
              )}
            </motion.div>

            {/* SYSTEM READY badge (phase 3) */}
            {phase >= 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-8 font-mono text-sm tracking-widest uppercase flex items-center gap-3"
                style={{ color: "#2ecc71" }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#2ecc71", boxShadow: "0 0 10px #2ecc71" }}
                />
                DIGITAL IDENTITY ONLINE
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#2ecc71", boxShadow: "0 0 10px #2ecc71" }}
                />
              </motion.div>
            )}
          </div>

          {/* ── STATUS MESSAGES (bottom left) ── */}
          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-16 left-8 md:left-16 z-10 space-y-1.5"
              style={{ maxWidth: 340 }}
            >
              {STATUS_MESSAGES.map((msg, i) => (
                visibleMessages.includes(i) && (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 font-mono text-xs"
                  >
                    <span style={{ color: i === STATUS_MESSAGES.length - 1 ? "#2ecc71" : "#e63946" }}>
                      {i === visibleMessages[visibleMessages.length - 1] ? "▶" : "✓"}
                    </span>
                    <span style={{ color: msg.color }}>
                      {msg.text}
                    </span>
                    {i === visibleMessages[visibleMessages.length - 1] && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6 }}
                        className="inline-block w-1.5 h-3"
                        style={{ background: "#e63946" }}
                      />
                    )}
                  </motion.div>
                )
              ))}
            </motion.div>
          )}

          {/* ── HUD CORNERS ── */}
          {phase >= 1 && (
            <>
              {/* TL */}
              <motion.div
                initial={{ opacity: 0, x: -10, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 left-6 z-10 font-mono text-xs"
                style={{ color: "#3a3a55" }}
              >
                <div style={{ color: "#e63946", marginBottom: 4 }}>╔ ANONYTE SYS</div>
                <div>BOOT &gt; {phase >= 3 ? "100%" : phase >= 2 ? "67%" : "33%"}</div>
                <div style={{ color: phase >= 3 ? "#2ecc71" : "#3a3a55" }}>STATUS: {phase >= 3 ? "READY" : "LOADING"}</div>
              </motion.div>

              {/* TR */}
              <motion.div
                initial={{ opacity: 0, x: 10, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.35 }}
                className="absolute top-6 right-6 z-10 font-mono text-xs text-right"
                style={{ color: "#3a3a55" }}
              >
                <div style={{ color: "#e63946", marginBottom: 4 }}>SYS_INIT ╗</div>
                <div>NODE: ACTIVE</div>
                <div>VER: 2.0.25</div>
              </motion.div>

              {/* BL */}
              <motion.div
                initial={{ opacity: 0, x: -10, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 z-10 font-mono text-xs"
                style={{ color: "#3a3a55" }}
              >
                ╚ ANONYTE.IN
              </motion.div>

              {/* BR */}
              <motion.div
                initial={{ opacity: 0, x: 10, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 right-6 z-10 font-mono text-xs text-right"
                style={{ color: phase >= 3 ? "#2ecc71" : "#3a3a55" }}
              >
                {phase >= 3 ? "● ONLINE ╝" : "○ LOADING ╝"}
              </motion.div>
            </>
          )}

          {/* Exit flash */}
          <AnimatePresence>
            {exitFlash && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.9, 0] }}
                transition={{ duration: 0.7, times: [0, 0.3, 1] }}
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(230,57,70,0.3) 0%, rgba(5,5,8,0.95) 80%)" }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
