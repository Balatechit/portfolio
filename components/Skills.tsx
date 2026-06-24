import { personal } from "@/lib/data";

const softwareLevels: Record<string, number> = {
  SolidWorks:             95,
  "SolidWorks Simulation": 90,
  CATIA:                  75,
  AutoCAD:                80,
};

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--bg-base)" }}>
      <div className="container">
        <p className="eyebrow">Capabilities</p>
        <span className="accent-bar" />

        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "56px",
          }}
          className="skills-grid"
        >
          {/* left — software bars */}
          <div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", marginBottom: "32px" }}>
              Software Proficiency
            </h2>

            {personal.skills.software.map((s) => (
              <div key={s} style={{ marginBottom: "22px" }}>
                <div
                  style={{
                    display:        "flex",
                    justifyContent: "space-between",
                    marginBottom:   "7px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 500,
                      fontSize:   "14px",
                      color:      "var(--text-primary)",
                    }}
                  >
                    {s}
                  </span>
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize:   "12px",
                      color:      "var(--accent)",
                    }}
                  >
                    {softwareLevels[s]}%
                  </span>
                </div>
                <div
                  style={{
                    height:       "5px",
                    background:   "var(--border)",
                    borderRadius: "3px",
                    overflow:     "hidden",
                  }}
                >
                  <div
                    style={{
                      height:     "100%",
                      width:      `${softwareLevels[s]}%`,
                      background: "linear-gradient(to right, var(--accent), rgba(245,158,11,0.5))",
                      borderRadius: "3px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* right — domain tags */}
          <div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", marginBottom: "32px" }}>
              Domains & Methods
            </h2>

            {[
              { heading: "Standards & Codes", items: personal.skills.standards, color: "var(--blue)", dim: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.2)" },
              { heading: "Methods",           items: personal.skills.methods,   color: "var(--green)", dim: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)" },
              { heading: "Industry Domains",  items: personal.skills.domains,   color: "var(--accent)", dim: "var(--accent-dim)", border: "rgba(245,158,11,0.2)" },
            ].map((group) => (
              <div key={group.heading} style={{ marginBottom: "28px" }}>
                <p
                  style={{
                    fontFamily:    "JetBrains Mono, monospace",
                    fontSize:      "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color:         "var(--text-muted)",
                    marginBottom:  "10px",
                  }}
                >
                  {group.heading}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding:      "4px 12px",
                        borderRadius: "3px",
                        fontFamily:   "JetBrains Mono, monospace",
                        fontSize:     "11px",
                        background:   group.dim,
                        color:        group.color,
                        border:       `1px solid ${group.border}`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
