"use client";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const roles = [
    "Mechanical Design Engineer",
    "FEA / CAE Engineer",
    "Simulation Engineer",
    "Design Validation Engineer",
    "Product Design Engineer",
    "R&D Engineer",
  ];

  return (
    <section id="contact" style={{ padding: "7rem 0", background: "var(--bg-secondary)", position: "relative" }}>
      <div className="mesh-overlay" style={{ position: "absolute", inset: 0, opacity: 0.35 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>

          <span style={{
            fontFamily: "JetBrains Mono,monospace", fontSize: "11px",
            color: "#0ea5e9", letterSpacing: "0.15em", textTransform: "uppercase",
          }}>05 / Contact</span>

          <h2 style={{
            fontSize: "clamp(2rem,4vw,3rem)", fontWeight: "800",
            color: "#f1f5f9", letterSpacing: "-0.02em",
            marginTop: "0.5rem", marginBottom: "1rem",
          }}>Open to Opportunities</h2>

          <p style={{ color: "#64748b", fontSize: "0.93rem", lineHeight: 1.85, marginBottom: "2.5rem" }}>
            Actively seeking roles in Mechanical Design, FEA/CAE Simulation, and Design Validation.
            Available for full-time positions, contract projects, and consulting engagements.
          </p>

          {/* Role targets */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "3rem" }}>
            {roles.map(role => (
              <span key={role} style={{
                padding: "6px 15px", borderRadius: "20px",
                background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.18)",
                fontSize: "12px", color: "#94a3b8", fontWeight: "500",
              }}>{role}</span>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(135deg,#0ea5e9,#06b6d4)",
                color: "#fff", padding: "14px 28px", borderRadius: "8px",
                fontWeight: "700", fontSize: "14px", textDecoration: "none",
                boxShadow: "0 8px 32px rgba(14,165,233,0.25)",
              }}
            >✉ Send Email</a>

            <a
              href={personalInfo.linkedin}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "transparent", border: "1px solid rgba(14,165,233,0.28)",
                color: "#94a3b8", padding: "14px 28px", borderRadius: "8px",
                fontWeight: "600", fontSize: "14px", textDecoration: "none",
              }}
            >LinkedIn Profile ↗</a>
          </div>

          {/* ── CV DOWNLOAD SECTION ── */}
          <div style={{
            padding: "2rem", borderRadius: "12px",
            background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.18)",
          }}>
            <div style={{
              fontSize: "10px", color: "#92400e", textTransform: "uppercase",
              letterSpacing: "0.12em", fontFamily: "JetBrains Mono,monospace", marginBottom: "8px",
            }}>Curriculum Vitae</div>
            <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              Download my CV for a full overview of my experience, skills, and project history.
              The file is always current — I update it regularly.
            </p>
            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              download="Balaji_V_Resume.pdf"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.35)",
                color: "#f59e0b", padding: "12px 24px", borderRadius: "8px",
                fontWeight: "700", fontSize: "14px", textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.18)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(245,158,11,0.15)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              ↓ Download CV — Balaji V
            </a>

            {/* How to update CV note */}
            <div style={{
              marginTop: "1.2rem", padding: "0.8rem 1rem", borderRadius: "6px",
              background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.1)",
              textAlign: "left",
            }}>
              <div style={{
                fontSize: "9px", color: "#334155", textTransform: "uppercase",
                letterSpacing: "0.1em", fontFamily: "JetBrains Mono,monospace", marginBottom: "5px",
              }}>How to update your CV in future</div>
              <p style={{ color: "#475569", fontSize: "11.5px", lineHeight: 1.65 }}>
                Replace the file at <code style={{ color: "#0ea5e9", background: "rgba(14,165,233,0.08)", padding: "1px 5px", borderRadius: "3px" }}>
                  /public/Balaji_V_Resume.pdf
                </code> with your new CV — keep the exact same filename.
                Push to GitHub and redeploy on Vercel. The download button will automatically serve the updated file.
                No code changes needed.
              </p>
            </div>
          </div>

          {/* Email display */}
          <div style={{ marginTop: "2rem" }}>
            <a href={`mailto:${personalInfo.email}`} style={{
              color: "#475569", fontSize: "13px", textDecoration: "none",
              fontFamily: "JetBrains Mono,monospace", letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#0ea5e9")}
              onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
            >{personalInfo.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
