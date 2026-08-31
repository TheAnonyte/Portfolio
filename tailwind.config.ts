import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#050508",
          100: "#0a0a0f",
          200: "#0f0f18",
          300: "#141420",
        },
        surface: {
          DEFAULT: "#111118",
          100: "#1a1a24",
          200: "#222230",
        },
        accent: {
          red: {
            DEFAULT: "#e63946",
            dim: "#b02a35",
            glow: "rgba(230,57,70,0.15)",
          },
          green: {
            DEFAULT: "#2ecc71",
            dim: "#27ae60",
            glow: "rgba(46,204,113,0.15)",
          },
          yellow: {
            DEFAULT: "#f4d03f",
            dim: "#d4ac0d",
            glow: "rgba(244,208,63,0.15)",
          },
        },
        ink: {
          DEFAULT: "#f0f0f5",
          muted: "#8888aa",
          faint: "#3a3a55",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "grid-fine": `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
        "radial-glow": "radial-gradient(ellipse at center, var(--tw-gradient-from) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
        "grid-md": "80px 80px",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "10%": { transform: "translate(-2px, 1px)" },
          "30%": { transform: "translate(2px, -1px)" },
          "50%": { transform: "translate(-1px, 2px)" },
          "70%": { transform: "translate(1px, -2px)" },
          "90%": { transform: "translate(-2px, 0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "blink-cursor": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "typing": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "appear": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flicker: "flicker 3s ease-in-out infinite",
        glitch: "glitch 0.5s ease-in-out infinite",
        "pulse-ring": "pulse-ring 1.5s ease-out infinite",
        "scan-line": "scan-line 4s linear infinite",
        float: "float 6s ease-in-out infinite",
        "blink-cursor": "blink-cursor 1s step-end infinite",
        appear: "appear 0.6s ease forwards",
      },
      boxShadow: {
        "glow-red": "0 0 20px rgba(230,57,70,0.4), 0 0 60px rgba(230,57,70,0.1)",
        "glow-green": "0 0 20px rgba(46,204,113,0.4), 0 0 60px rgba(46,204,113,0.1)",
        "glow-yellow": "0 0 20px rgba(244,208,63,0.4), 0 0 60px rgba(244,208,63,0.1)",
        "card": "0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(230,57,70,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
