"use client";
import { skills } from "@/lib/data";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
        <span style={{ color: "#94a3b8", fontSize: "13px", fontWeight: "500" }}>{name}</span>
        <span style={{ color: "#0ea5e9", fontSize: "11px", fontFamily: "JetBrains Mono,monospace", fontWeight: "600" }}>{level}%</span>
      </div>
      <div style={{ height: "4px", background: "rgba(14,165,233,0.1)", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{
          height: "100%", width: `${level}%`,
          background: "linear-gradient(90deg,#0ea5e9,#06b6d4)",
          borderRadius: "2px", transition: "width 1s ease",
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "7rem 0", background: "var(--bg-primary)", position: "relative" }}>
      <div className="grid-bg" style={{ position: "absolute", inset: 0 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>

        <div style={{ marginBottom: "4rem" }}>
          <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "11px", color: "#0ea5e9", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            04 / Skills
          </span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: "800", color: "#f1f5f9", letterSpacing: "-0.02em", marginTop: "0.5rem" }}>
            Technical Competencies
          </h2>
          <div style={{ marginTop: "1.2rem", maxWidth: "200px", height: "1px", background: "linear-gradient(90deg,transparent,#0ea5e9,transparent)" }} />
        </div>

        {/* 3-column main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", alignItems: "start" }} className="skills-grid">

          {/* Software */}
          <div className="glass-card" style={{ padding: "2rem", borderRadius: "12px" }}>
            <h3 style={{
              fontSize: "10px", fontWeight: "700", color: "#0ea5e9",
              textTransform: "uppercase", letterSpacing: "0.12em",
              marginBottom: "1.5rem", fontFamily: "JetBrains Mono,monospace",
            }}>Software Proficiency</h3>

            {skills.software.map(s => <SkillBar key={s.name} name={s.name} level={s.level} />)}

            <div style={{ marginTop: "1.5rem", paddingTop: "1.4rem", borderTop: "1px solid rgba(14,165,233,0.08)" }}>
              <div style={{
                fontSize: "9px", color: "#334155", textTransform: "uppercase",
                letterSpacing: "0.1em", fontFamily: "JetBrains Mono,monospace", marginBottom: "10px",
              }}>Certification</div>
              <div style={{
                padding: "10px 14px", borderRadius: "8px",
                background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.18)",
              }}>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#f1f5f9" }}>CSWP</div>
                <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>Certified SolidWorks Professional</div>
                <div style={{
                  fontSize: "10px", color: "#0ea5e9", marginTop: "5px",
                  fontFamily: "JetBrains Mono,monospace",
                }}>Dec 16, 2025 · Dassault Systèmes</div>
              </div>
            </div>
          </div>

          {/* FEA & Simulation */}
          <div className="glass-card" style={{ padding: "2rem", borderRadius: "12px" }}>
            <h3 style={{
              fontSize: "10px", fontWeight: "700", color: "#0ea5e9",
              textTransform: "uppercase", letterSpacing: "0.12em",
              marginBottom: "1.5rem", fontFamily: "JetBrains Mono,monospace",
            }}>FEA & Simulation</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {skills.cae.map(s => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#0ea5e9", flexShrink: 0 }} />
                  <span style={{ color: "#94a3b8", fontSize: "12.5px" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mechanical Design */}
          <div className="glass-card" style={{ padding: "2rem", borderRadius: "12px" }}>
            <h3 style={{
              fontSize: "10px", fontWeight: "700", color: "#0ea5e9",
              textTransform: "uppercase", letterSpacing: "0.12em",
              marginBottom: "1.5rem", fontFamily: "JetBrains Mono,monospace",
            }}>Mechanical Design</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {skills.design.map(s => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#06b6d4", flexShrink: 0 }} />
                  <span style={{ color: "#94a3b8", fontSize: "12.5px" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Knowledge areas */}
        <div style={{ marginTop: "2.5rem" }}>
          <div style={{
            fontSize: "10px", color: "#334155", textTransform: "uppercase",
            letterSpacing: "0.12em", fontFamily: "JetBrains Mono,monospace", marginBottom: "1.2rem",
          }}>Engineering Knowledge Areas</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "10px" }}>
            {skills.knowledge.map(k => (
              <div
                key={k.label}
                className="glass-card"
                style={{
                  padding: "11px 14px", borderRadius: "8px",
                  display: "flex", alignItems: "center", gap: "10px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(14,165,233,0.35)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(14,165,233,0.13)")}
              >
                <span style={{ fontSize: "14px", color: "#0ea5e9", fontFamily: "JetBrains Mono,monospace", minWidth: "18px" }}>{k.icon}</span>
                <span style={{ color: "#94a3b8", fontSize: "12px", fontWeight: "500" }}>{k.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Standards */}
        <div style={{
          marginTop: "2rem", padding: "1.4rem 2rem",
          background: "rgba(14,165,233,0.03)", border: "1px solid rgba(14,165,233,0.08)",
          borderRadius: "10px",
        }}>
          <div style={{
            fontSize: "9px", color: "#334155", textTransform: "uppercase",
            letterSpacing: "0.12em", fontFamily: "JetBrains Mono,monospace", marginBottom: "10px",
          }}>Standards & Frameworks</div>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {skills.standards.map(s => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f59e0b", flexShrink: 0 }} />
                <span style={{ color: "#94a3b8", fontSize: "13px" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){.skills-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
