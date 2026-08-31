"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  whoami      — Identity lookup
  projects    — List all projects
  skills      — Show tech stack
  contact     — Get contact info
  clear       — Clear terminal
  exit        — Close terminal`,
  whoami: `> IDENTITY: Ankit Kumar / ANONYTE
> ROLE: Freelance Developer & Automation Engineer
> LOCATION: Punjab, India
> STATUS: Building things. Breaking limits. Learning always.`,
  projects: `> PATHWISE_AI       [AI]        ● LIVE
> TELEGRAM_SAAS     [AUTOMATION] ✓ COMPLETED
> CRAFT_MY_PASS     [SECURITY]   ● LIVE
> MEMBER_BOT        [AUTOMATION] ✓ COMPLETED
> DOOR_LOCK         [HARDWARE]   ✓ COMPLETED`,
  skills: `> Python · TypeScript · React · FastAPI
> Pyrogram · Telegram · Docker · Linux/VPS
> MongoDB · MySQL · Firebase · Gemini API
> Kali Linux · APKTool · JADX · Arduino`,
  contact: `> EMAIL:    meankitkumar53@gmail.com
> GITHUB:   github.com/TheAnonyte
> LINKEDIN: linkedin.com/in/theanonyte
> SITE:     anonyte.in`,
};

export default function EasterEggs() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [konamiActive, setKonamiActive] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<{ cmd: string; output: string }[]>([
    { cmd: "", output: "> ANONYTE TERMINAL v1.0\n> Type 'help' for available commands." },
  ]);

  // Konami code listener
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const key = e.key;

      // Terminal shortcut: Ctrl+` or type /anonyte
      if (e.ctrlKey && e.key === "`") {
        setTerminalOpen((t) => !t);
        return;
      }

      if (key === KONAMI[konamiIndex]) {
        const next = konamiIndex + 1;
        setKonamiIndex(next);
        if (next === KONAMI.length) {
          setKonamiActive(true);
          setKonamiIndex(0);
          setTimeout(() => setKonamiActive(false), 4000);
        }
      } else {
        setKonamiIndex(0);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [konamiIndex]);

  // Secret text input watcher for /anonyte
  useEffect(() => {
    let buffer = "";
    const handleKey = (e: KeyboardEvent) => {
      buffer += e.key;
      if (buffer.length > 10) buffer = buffer.slice(-10);
      if (buffer.includes("/anonyte")) {
        setTerminalOpen(true);
        buffer = "";
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setTerminalHistory([{ cmd: "", output: "> Terminal cleared." }]);
    } else if (cmd === "exit") {
      setTerminalOpen(false);
    } else {
      const output = TERMINAL_COMMANDS[cmd] ?? `> Command not found: '${cmd}'. Type 'help' for commands.`;
      setTerminalHistory((h) => [...h, { cmd, output }]);
    }
    setTerminalInput("");
  };

  return (
    <>
      {/* Konami mode overlay */}
      <AnimatePresence>
        {konamiActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9990] pointer-events-none flex items-center justify-center"
            style={{ background: "rgba(230,57,70,0.05)" }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              className="text-center"
            >
              <div className="font-display font-black text-6xl md:text-9xl uppercase" style={{ color: "#e63946", textShadow: "0 0 60px rgba(230,57,70,0.8)" }}>
                ANONYTE
              </div>
              <div className="font-mono text-sm mt-4 tracking-widest" style={{ color: "#f4d03f" }}>
                ⚡ YOU FOUND THE SECRET ⚡
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terminal */}
      <AnimatePresence>
        {terminalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[9985] w-full max-w-md"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            <div
              className="rounded overflow-hidden"
              style={{ border: "1px solid rgba(230,57,70,0.3)", background: "rgba(5,5,8,0.97)", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center justify-between px-4 py-2"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(17,17,24,0.8)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#e63946" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#f4d03f" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#2ecc71" }} />
                </div>
                <span className="font-mono text-xs" style={{ color: "#3a3a55" }}>anonyte@terminal</span>
                <button onClick={() => setTerminalOpen(false)} style={{ color: "#3a3a55" }}>
                  <X size={14} />
                </button>
              </div>

              {/* Terminal output */}
              <div className="p-4 h-64 overflow-y-auto space-y-3" style={{ color: "#8888aa" }}>
                {terminalHistory.map((entry, i) => (
                  <div key={i}>
                    {entry.cmd && (
                      <div className="font-mono text-xs mb-1">
                        <span style={{ color: "#e63946" }}>anon@anonyte</span>
                        <span style={{ color: "#3a3a55" }}>:~$ </span>
                        <span style={{ color: "#f0f0f5" }}>{entry.cmd}</span>
                      </div>
                    )}
                    <pre className="font-mono text-xs whitespace-pre-wrap leading-relaxed" style={{ color: "#8888aa" }}>
                      {entry.output}
                    </pre>
                  </div>
                ))}
              </div>

              {/* Terminal input */}
              <form
                onSubmit={handleTerminalSubmit}
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span style={{ color: "#e63946" }} className="font-mono text-xs">›</span>
                <input
                  autoFocus
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="flex-1 bg-transparent font-mono text-xs outline-none"
                  style={{ color: "#f0f0f5" }}
                  placeholder="type a command..."
                  id="terminal-input"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
