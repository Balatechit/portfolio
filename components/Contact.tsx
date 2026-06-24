import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="container">
        <p className="eyebrow">Get in Touch</p>
        <span className="accent-bar" />

        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "56px",
            alignItems:          "center",
          }}
          className="contact-grid"
        >
          {/* left */}
          <div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", marginBottom: "16px" }}>
              Open to opportunities<br />
              <span style={{ color: "var(--accent)" }}>in FEA & design roles.</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "15px" }}>
              Looking for FEA Engineer, CAE Engineer, Design Validation Engineer,
              or Mechanical Design Engineer positions. Feel free to reach out via
              email or LinkedIn.
            </p>
          </div>

          {/* right — contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* email */}
            <a
              href={`mailto:${personal.email}`}
              style={{
                display:        "flex",
                alignItems:     "center",
                gap:            "16px",
                padding:        "20px 24px",
                background:     "var(--bg-card)",
                border:         "1px solid var(--border)",
                borderRadius:   "10px",
                textDecoration: "none",
                transition:     "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
              }
            >
              <div
                style={{
                  width:        "40px",
                  height:       "40px",
                  borderRadius: "8px",
                  background:   "var(--accent-dim)",
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                  fontSize:     "18px",
                  flexShrink:   0,
                }}
              >
                ✉
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "2px", fontFamily: "JetBrains Mono, monospace" }}>EMAIL</p>
                <p style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 500 }}>{personal.email}</p>
              </div>
            </a>

            {/* linkedin */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:        "flex",
                alignItems:     "center",
                gap:            "16px",
                padding:        "20px 24px",
                background:     "var(--bg-card)",
                border:         "1px solid var(--border)",
                borderRadius:   "10px",
                textDecoration: "none",
                transition:     "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
              }
            >
              <div
                style={{
                  width:        "40px",
                  height:       "40px",
                  borderRadius: "8px",
                  background:   "rgba(59,130,246,0.1)",
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                  fontSize:     "18px",
                  flexShrink:   0,
                }}
              >
                in
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "2px", fontFamily: "JetBrains Mono, monospace" }}>LINKEDIN</p>
                <p style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 500 }}>balaji-v211</p>
              </div>
            </a>

            {/* resume download */}
            <a
              href={personal.resumeFile}
              download
              style={{
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                gap:            "10px",
                padding:        "16px 24px",
                background:     "var(--accent)",
                color:          "#0B0E14",
                fontFamily:     "Space Grotesk, sans-serif",
                fontWeight:     700,
                fontSize:       "14px",
                letterSpacing:  "0.05em",
                textDecoration: "none",
                borderRadius:   "8px",
                transition:     "opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.88")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              ↓ Download Resume
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
