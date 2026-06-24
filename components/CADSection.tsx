"use client";
import { useState } from "react";
import { cadProjects } from "@/lib/data";

type Category = "All" | "Railway" | "Water Treatment";

function ProjectCard({ project }: { project: (typeof cadProjects)[0] }) {
  const [imgIdx, setImgIdx] = useState(0);
  const hasMultiple = project.gallery.length > 1;

  return (
    <div className="card">
      {/* image area */}
      <div
        style={{
          position:   "relative",
          aspectRatio: "16/10",
          overflow:   "hidden",
          background: "var(--bg-base)",
        }}
      >
        <img
          src={project.gallery[imgIdx].src}
          alt={project.gallery[imgIdx].alt}
          style={{
            width:      "100%",
            height:     "100%",
            objectFit:  "cover",
            display:    "block",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.transform = "scale(1.04)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.transform = "scale(1)")
          }
        />

        {/* category badge */}
        <div
          style={{
            position:   "absolute",
            top:        "12px",
            left:       "12px",
            padding:    "3px 10px",
            background: "rgba(11,14,20,0.75)",
            borderRadius: "3px",
            fontFamily: "JetBrains Mono, monospace",
            fontSize:   "10px",
            color:      "var(--text-muted)",
            letterSpacing: "0.08em",
            backdropFilter: "blur(4px)",
          }}
        >
          {project.category}
        </div>

        {/* carousel arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={() =>
                setImgIdx((p) => (p - 1 + project.gallery.length) % project.gallery.length)
              }
              style={{
                position:   "absolute",
                left:       "8px",
                top:        "50%",
                transform:  "translateY(-50%)",
                background: "rgba(11,14,20,0.7)",
                border:     "1px solid var(--border)",
                color:      "var(--text-primary)",
                width:      "30px",
                height:     "30px",
                borderRadius: "50%",
                cursor:     "pointer",
                fontSize:   "14px",
                display:    "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ‹
            </button>
            <button
              onClick={() =>
                setImgIdx((p) => (p + 1) % project.gallery.length)
              }
              style={{
                position:   "absolute",
                right:      "8px",
                top:        "50%",
                transform:  "translateY(-50%)",
                background: "rgba(11,14,20,0.7)",
                border:     "1px solid var(--border)",
                color:      "var(--text-primary)",
                width:      "30px",
                height:     "30px",
                borderRadius: "50%",
                cursor:     "pointer",
                fontSize:   "14px",
                display:    "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ›
            </button>

            {/* dot indicator */}
            <div
              style={{
                position:       "absolute",
                bottom:         "8px",
                left:           "50%",
                transform:      "translateX(-50%)",
                display:        "flex",
                gap:            "5px",
              }}
            >
              {project.gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  style={{
                    width:        i === imgIdx ? "18px" : "6px",
                    height:       "6px",
                    borderRadius: "3px",
                    background:   i === imgIdx ? "var(--accent)" : "rgba(255,255,255,0.3)",
                    border:       "none",
                    cursor:       "pointer",
                    padding:      0,
                    transition:   "width 0.2s, background 0.2s",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* card body */}
      <div style={{ padding: "20px" }}>
        <div
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "flex-start",
            marginBottom:   "8px",
          }}
        >
          <h3
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize:   "16px",
              fontWeight: 600,
              color:      "var(--text-primary)",
            }}
          >
            {project.title}
          </h3>
          {project.pn && (
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize:   "10px",
                color:      "var(--text-muted)",
                whiteSpace: "nowrap",
                marginLeft: "8px",
              }}
            >
              {project.pn}
            </span>
          )}
        </div>

        <p
          style={{
            fontSize:     "13px",
            color:        "var(--text-secondary)",
            lineHeight:   1.65,
            marginBottom: "14px",
          }}
        >
          {project.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CADSection() {
  const [filter, setFilter] = useState<Category>("All");

  const filtered =
    filter === "All"
      ? cadProjects
      : cadProjects.filter((p) => p.category === filter);

  const categories: Category[] = ["All", "Railway", "Water Treatment"];

  return (
    <section id="projects" className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="container">
        <p className="eyebrow">CAD Projects</p>
        <span className="accent-bar" />

        <div
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "flex-end",
            marginBottom:   "36px",
            flexWrap:       "wrap",
            gap:            "16px",
          }}
        >
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
            Designed in SolidWorks
          </h2>

          {/* filter tabs */}
          <div
            style={{
              display:      "flex",
              gap:          "4px",
              background:   "var(--bg-card)",
              padding:      "4px",
              borderRadius: "6px",
              border:       "1px solid var(--border)",
            }}
          >
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  padding:      "6px 16px",
                  borderRadius: "4px",
                  border:       "none",
                  cursor:       "pointer",
                  fontFamily:   "Space Grotesk, sans-serif",
                  fontSize:     "12px",
                  fontWeight:   600,
                  letterSpacing: "0.04em",
                  background:   filter === c ? "var(--accent)" : "transparent",
                  color:        filter === c ? "#0B0E14"          : "var(--text-muted)",
                  transition:   "all 0.2s",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* project grid */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:                 "20px",
          }}
          className="cad-grid"
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .cad-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .cad-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
