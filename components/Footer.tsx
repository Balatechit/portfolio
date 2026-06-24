"use client";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg-primary)",
      borderTop: "1px solid rgba(14,165,233,0.07)",
      padding: "2.5rem 2rem",
    }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "1.5rem",
      }}>
        {/* Identity */}
        <div>
          <div style={{ fontWeight: "800", color: "#f1f5f9", fontSize: "14px", letterSpacing: "-0.01em" }}>
            {personalInfo.name}
          </div>
          <div style={{ color: "#334155", fontSize: "11px", marginTop: "2px" }}>
            Mechanical Design & FEA Simulation Engineer
          </div>
        </div>

        {/* Nav */}
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{
              color: "#334155", fontSize: "12px", textDecoration: "none",
              letterSpacing: "0.03em", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#0ea5e9")}
              onMouseLeave={e => (e.currentTarget.style.color = "#334155")}
            >{l.label}</a>
          ))}
        </div>

        {/* Stack badge */}
        <div style={{
          fontFamily: "JetBrains Mono,monospace", fontSize: "10px", color: "#1e293b",
          letterSpacing: "0.06em",
        }}>
          CSWP · SolidWorks · FEA · CATIA · GD&T
        </div>
      </div>
    </footer>
  );
}
