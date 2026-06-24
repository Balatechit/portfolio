"use client";
import { useState } from "react";
import { feaProject } from "@/lib/data";

export default function FEASection() {
  const [activeImg, setActiveImg] = useState(0);
  const [activeLeakImg, setActiveLeakImg] = useState(0);

  return (
    <section id="fea" className="section" style={{ background: "var(--bg-base)" }}>
      <div className="container">
        <p className="eyebrow">Finite Element Analysis</p>
        <span className="accent-bar" />

        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "56px",
            alignItems:          "start",
            marginBottom:        "64px",
          }}
          className="fea-top-grid"
        >
          {/* ── Left: project info ── */}
          <div>
            <h2
              style={{
                fontFamily:   "Space Grotesk, sans-serif",
                fontSize:     "clamp(24px, 3vw, 36px)",
                marginBottom: "8px",
              }}
            >
              {feaProject.title}
            </h2>
            <p
              style={{
                fontFamily:   "JetBrains Mono, monospace",
                fontSize:     "12px",
                color:        "var(--accent)",
                letterSpacing: "0.08em",
                marginBottom: "24px",
              }}
            >
              {feaProject.subtitle}
            </p>

            {/* spec table */}
            <div
              style={{
                border:       "1px solid var(--border)",
                borderRadius: "8px",
                overflow:     "hidden",
                marginBottom: "28px",
              }}
            >
              {feaProject.specs.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    display:     "grid",
                    gridTemplateColumns: "140px 1fr",
                    padding:     "10px 16px",
                    background:  i % 2 === 0 ? "var(--bg-card)" : "var(--bg-elevated)",
                    borderBottom: i < feaProject.specs.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize:   "11px",
                      color:      "var(--text-muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s.label}
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            {/* result cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {feaProject.results.map((r) => (
                <div
                  key={r.label}
                  style={{
                    padding:      "14px 16px",
                    background:   "var(--bg-card)",
                    border:       "1px solid var(--border)",
                    borderRadius: "8px",
                    borderLeft:   "3px solid var(--accent)",
                  }}
                >
                  <div
                    style={{
                      display:        "flex",
                      justifyContent: "space-between",
                      alignItems:     "center",
                      marginBottom:   "4px",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                      {r.label}
                    </span>
                    <span
                      className="result-badge"
                      style={{ color: "var(--accent)" }}
                    >
                      {r.value}
                    </span>
                  </div>
                  {r.note && (
                    <p
                      style={{
                        fontSize:  "11px",
                        color:     "var(--text-muted)",
                        fontStyle: "italic",
                      }}
                    >
                      {r.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: FEA simulation images ── */}
          <div>
            {/* main viewer */}
            <div
              style={{
                position:     "relative",
                borderRadius: "10px",
                overflow:     "hidden",
                border:       "1px solid var(--border)",
                marginBottom: "12px",
                aspectRatio:  "4/3",
                background:   "var(--bg-card)",
              }}
            >
              <img
                src={feaProject.images[activeImg].src}
                alt={feaProject.images[activeImg].alt}
                style={{
                  width:      "100%",
                  height:     "100%",
                  objectFit:  "cover",
                  display:    "block",
                }}
              />
              {/* caption */}
              <div
                style={{
                  position:   "absolute",
                  bottom:     0,
                  left:       0,
                  right:      0,
                  padding:    "12px 16px",
                  background: "linear-gradient(to top, rgba(11,14,20,0.92), transparent)",
                }}
              >
                <p
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize:   "11px",
                    color:      "var(--accent)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {feaProject.images[activeImg].caption}
                </p>
              </div>
            </div>

            {/* thumbnail strip */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
              {feaProject.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    padding:    0,
                    border:     i === activeImg
                                  ? "2px solid var(--accent)"
                                  : "2px solid var(--border)",
                    borderRadius: "6px",
                    overflow:   "hidden",
                    cursor:     "pointer",
                    background: "none",
                    aspectRatio: "4/3",
                    transition: "border-color 0.2s",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width:     "100%",
                      height:    "100%",
                      objectFit: "cover",
                      display:   "block",
                      opacity:   i === activeImg ? 1 : 0.55,
                      transition: "opacity 0.2s",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            LEAK TEST SECTION
        ════════════════════════════════════════════════════════ */}
        <div
          style={{
            borderTop:  "1px solid var(--border)",
            paddingTop: "56px",
          }}
        >
          {/* heading */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <span
                style={{
                  padding:      "3px 10px",
                  background:   "rgba(16,185,129,0.1)",
                  color:        "var(--green)",
                  fontFamily:   "JetBrains Mono, monospace",
                  fontSize:     "10px",
                  letterSpacing: "0.12em",
                  borderRadius: "3px",
                  border:       "1px solid rgba(16,185,129,0.2)",
                }}
              >
                ✓ PASSED
              </span>
              <span className="eyebrow" style={{ color: "var(--text-muted)" }}>
                June 2026
              </span>
            </div>
            <h3
              style={{
                fontFamily:   "Space Grotesk, sans-serif",
                fontSize:     "clamp(20px, 2.5vw, 28px)",
                marginBottom: "12px",
              }}
            >
              Hydrostatic Leak Test
            </h3>
            <p
              style={{
                color:     "var(--text-secondary)",
                fontSize:  "14px",
                maxWidth:  "680px",
                lineHeight: 1.75,
              }}
            >
              {feaProject.leakTestSummary}
            </p>
          </div>

          {/* leak test image grid — 2×2 */}
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "1fr 1fr",
              gap:                 "16px",
            }}
            className="leak-grid"
          >
            {feaProject.leakTestImages.map((img, i) => (
              <div
                key={i}
                className="group"
                style={{
                  position:     "relative",
                  borderRadius: "10px",
                  overflow:     "hidden",
                  border:       "1px solid var(--border)",
                  cursor:       "pointer",
                  aspectRatio:  i === 0 || i === 1 ? "16/10" : "16/10",
                  background:   "var(--bg-card)",
                }}
                onClick={() => setActiveLeakImg(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width:      "100%",
                    height:     "100%",
                    objectFit:  "cover",
                    display:    "block",
                    transition: "transform 0.35s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.transform = "scale(1.04)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.transform = "scale(1)")
                  }
                />
                {/* gradient caption */}
                <div
                  style={{
                    position:   "absolute",
                    bottom:     0,
                    left:       0,
                    right:      0,
                    padding:    "20px 16px 12px",
                    background: "linear-gradient(to top, rgba(11,14,20,0.9) 0%, transparent 100%)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize:   "11px",
                      color:      "var(--text-secondary)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .fea-top-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .leak-grid    { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
