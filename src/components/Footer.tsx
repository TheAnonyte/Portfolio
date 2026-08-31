"use client";

import { GitBranch, Link2, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative py-10 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#050508" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <div className="font-display font-black text-lg tracking-widest uppercase" style={{ color: "#f0f0f5", letterSpacing: "0.2em" }}>
            ANONYTE
          </div>
          <div className="font-mono text-xs mt-1" style={{ color: "#3a3a55" }}>
            © 2025 · Made by Ankit Kumar
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/TheAnonyte", icon: GitBranch, id: "footer-github" },
            { href: "https://linkedin.com/in/theanonyte", icon: Link2, id: "footer-linkedin" },
            { href: "mailto:meankitkumar53@gmail.com", icon: Mail, id: "footer-email" },
          ].map(({ href, icon: Icon, id }) => (
            <a
              key={id}
              href={href}
              id={id}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="p-2 rounded transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.06)", color: "#3a3a55" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#e63946";
                el.style.borderColor = "rgba(230,57,70,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#3a3a55";
                el.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          id="footer-back-to-top"
          className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors"
          style={{ color: "#3a3a55" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#e63946"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#3a3a55"; }}
        >
          BACK TO TOP
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
