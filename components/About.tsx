import { personal } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="container">
        <p className="eyebrow">Profile</p>
        <span className="accent-bar" />

        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "64px",
            alignItems:          "start",
          }}
          className="about-grid"
        >
          {/* left — bio */}
          <div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: "20px" }}>
              Engineering precision,<br />
              <span style={{ color: "var(--accent)" }}>validated by simulation.</span>
            </h2>
            <p
              style={{
                color:        "var(--text-secondary)",
                lineHeight:   1.8,
                fontSize:     "15px",
                whiteSpace:   "pre-line",
              }}
            >
              {personal.about}
            </p>

            {/* cert badge */}
            <div
              style={{
                marginTop:    "28px",
                display:      "inline-flex",
                alignItems:   "center",
                gap:          "12px",
                padding:      "12px 20px",
                background:   "var(--accent-dim)",
                border:       "1px solid rgba(245,158,11,0.2)",
                borderRadius: "6px",
              }}
            >
              <span style={{ fontSize: "22px" }}>🏅</span>
              <div>
                <div
                  style={{
                    fontFamily:   "Space Grotesk, sans-serif",
                    fontWeight:   600,
                    fontSize:     "14px",
                    color:        "var(--accent)",
                  }}
                >
                  {personal.certifications[0].name}
                </div>
                <div
                  style={{
                    fontSize:  "11px",
                    color:     "var(--text-muted)",
                    marginTop: "2px",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {personal.certifications[0].date}
                </div>
              </div>
            </div>
          </div>

          {/* right — focus bars */}
          <div>
            <h3
              style={{
                fontFamily:   "Space Grotesk, sans-serif",
                fontSize:     "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color:         "var(--text-muted)",
                marginBottom:  "24px",
              }}
            >
              Work Distribution
            </h3>

            {[
              { label: "FEA / Simulation",   pct: 70, color: "var(--accent)"  },
              { label: "Mechanical Design",   pct: 20, color: "var(--blue)"    },
              { label: "Personal Projects",   pct: 10, color: "var(--green)"   },
            ].map((b) => (
              <div key={b.label} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display:        "flex",
                    justifyContent: "space-between",
                    marginBottom:   "6px",
                  }}
                >
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                    {b.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize:   "12px",
                      color:      b.color,
                    }}
                  >
                    {b.pct}%
                  </span>
                </div>
                <div
                  style={{
                    height:     "4px",
                    background: "var(--border)",
                    borderRadius: "2px",
                    overflow:   "hidden",
                  }}
                >
                  <div
                    style={{
                      height:       "100%",
                      width:        `${b.pct}%`,
                      background:   b.color,
                      borderRadius: "2px",
                    }}
                  />
                </div>
              </div>
            ))}

            {/* tools */}
            <div style={{ marginTop: "36px" }}>
              <h3
                style={{
                  fontFamily:    "Space Grotesk, sans-serif",
                  fontSize:      "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color:         "var(--text-muted)",
                  marginBottom:  "14px",
                }}
              >
                Tools & Software
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {personal.skills.software.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
                {personal.skills.standards.map((s) => (
                  <span
                    key={s}
                    className="tag"
                    style={{ background: "rgba(59,130,246,0.1)", color: "var(--blue)", borderColor: "rgba(59,130,246,0.2)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
