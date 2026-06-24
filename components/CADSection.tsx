"use client";
import { cadProjects } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";

type Project = typeof import("@/lib/data").cadProjects[0];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const [imgIdx, setImgIdx]     = useState(0);

  // Build image list
  const imgs: string[] = [];
  if (project.images.main) imgs.push(project.images.main);
  if ("exploded" in project.images && project.images.exploded)
    imgs.push(project.images.exploded as string);
  if ("gallery" in project.images && Array.isArray(project.images.gallery))
    imgs.push(...(project.images.gallery as string[]));

  const hasMultiple = imgs.length > 1;

  return (
    <div
      className="glass-card"
      style={{
        borderRadius: "12px", overflow: "hidden",
        border: expanded ? "1px solid rgba(14,165,233,0.35)" : "1px solid rgba(14,165,233,0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        display: "flex", flexDirection: "column",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {/* Top accent */}
      <div style={{ height: "2px", background: "linear-gradient(90deg,#0ea5e9,#06b6d4)", flexShrink: 0 }} />

      {/* Image viewer */}
      <div style={{ position: "relative", width: "100%", height: "200px", background: "#050810", flexShrink: 0 }}>
        {imgs.length > 0 ? (
          <Image
            src={imgs[imgIdx]}
            alt={`${project.title} — image ${imgIdx + 1}`}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width:768px) 100vw, 400px"
          />
        ) : (
          <div style={{
            width: "100%", height: "100%", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#1e293b", fontSize: "13px", fontFamily: "JetBrains Mono, monospace" }}>
              No image
            </span>
          </div>
        )}

        {/* Prev / Next arrows — only if multiple */}
        {hasMultiple && (
          <>
            <button
              onClick={e => { e.stopPropagation(); setImgIdx(i => (i - 1 + imgs.length) % imgs.length); }}
              style={{
                position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)",
                background: "rgba(5,8,16,0.75)", border: "1px solid rgba(14,165,233,0.25)",
                color: "#0ea5e9", borderRadius: "50%", width: "28px", height: "28px",
                cursor: "pointer", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center",
              }}>‹</button>
            <button
              onClick={e => { e.stopPropagation(); setImgIdx(i => (i + 1) % imgs.length); }}
              style={{
                position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)",
                background: "rgba(5,8,16,0.75)", border: "1px solid rgba(14,165,233,0.25)",
                color: "#0ea5e9", borderRadius: "50%", width: "28px", height: "28px",
                cursor: "pointer", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center",
              }}>›</button>

            {/* Dot indicators */}
            <div style={{
              position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)",
              display: "flex", gap: "5px",
            }}>
              {imgs.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setImgIdx(i); }}
                  style={{
                    width: i === imgIdx ? "16px" : "6px", height: "6px",
                    borderRadius: "3px", border: "none", cursor: "pointer",
                    background: i === imgIdx ? "#0ea5e9" : "rgba(14,165,233,0.3)",
                    transition: "all 0.2s", padding: 0,
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* Image counter badge */}
        {hasMultiple && (
          <div style={{
            position: "absolute", top: "8px", right: "8px",
            background: "rgba(5,8,16,0.8)", border: "1px solid rgba(14,165,233,0.2)",
            padding: "2px 8px", borderRadius: "10px",
            fontSize: "10px", color: "#64748b", fontFamily: "JetBrains Mono, monospace",
          }}>
            {imgIdx + 1} / {imgs.length}
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: "1.2rem 1.3rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontWeight: "700", color: "#f1f5f9", fontSize: "0.97rem", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
              {project.title}
            </h3>
            <p style={{ color: "#475569", fontSize: "11px", marginTop: "2px" }}>{project.subtitle}</p>
          </div>
          <span style={{
            fontSize: "9px", fontWeight: "700", color: "#0ea5e9", whiteSpace: "nowrap",
            background: "rgba(14,165,233,0.07)", border: "1px solid rgba(14,165,233,0.18)",
            padding: "3px 8px", borderRadius: "4px", letterSpacing: "0.05em", textTransform: "uppercase",
          }}>{project.material}</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginTop: "10px" }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              display: "inline-flex", alignItems: "center", padding: "2px 8px",
              borderRadius: "4px", fontSize: "8px", fontWeight: "600",
              letterSpacing: "0.07em", textTransform: "uppercase",
              border: "1px solid rgba(14,165,233,0.2)", color: "#06b6d4",
              background: "rgba(6,182,212,0.06)",
            }}>{tag}</span>
          ))}
        </div>

        {/* Expand */}
        {expanded && (
          <div style={{ marginTop: "1.2rem", paddingTop: "1.1rem", borderTop: "1px solid rgba(14,165,233,0.08)" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.75, marginBottom: "1rem" }}>
              {project.description}
            </p>

            <div style={{ marginBottom: "0.9rem" }}>
              <div style={{
                fontSize: "9px", color: "#334155", textTransform: "uppercase",
                letterSpacing: "0.1em", fontFamily: "JetBrains Mono, monospace", marginBottom: "7px",
              }}>Key Features</div>
              {project.features.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "7px", marginBottom: "4px" }}>
                  <span style={{ color: "#0ea5e9", fontSize: "10px", marginTop: "3px", flexShrink: 0 }}>›</span>
                  <span style={{ color: "#64748b", fontSize: "12px", lineHeight: 1.55 }}>{f}</span>
                </div>
              ))}
            </div>

            <div style={{
              padding: "8px 12px", borderRadius: "6px",
              background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.1)",
            }}>
              <div style={{
                fontSize: "9px", color: "#334155", textTransform: "uppercase",
                letterSpacing: "0.1em", fontFamily: "JetBrains Mono, monospace", marginBottom: "3px",
              }}>DFM Note</div>
              <p style={{ color: "#64748b", fontSize: "11.5px", lineHeight: 1.6 }}>{project.dfm}</p>
            </div>

            {project.partNo && project.partNo !== "—" && (
              <div style={{
                marginTop: "8px", fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px", color: "#334155",
              }}>
                Part No: <span style={{ color: "#0ea5e9" }}>{project.partNo}</span>
              </div>
            )}
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: "auto", paddingTop: "10px",
            background: "none", border: "none", cursor: "pointer",
            color: "#334155", fontSize: "11px",
            fontFamily: "JetBrains Mono, monospace",
            letterSpacing: "0.05em", textAlign: "right",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#0ea5e9")}
          onMouseLeave={e => (e.currentTarget.style.color = "#334155")}
        >
          {expanded ? "▲ Collapse" : "▼ View Details"}
        </button>
      </div>
    </div>
  );
}

export default function CADSection() {
  const [filter, setFilter] = useState("All");
  const industries = ["All", "Railway (LHB Coach)", "Water Treatment"];

  const filtered = filter === "All"
    ? cadProjects
    : cadProjects.filter(p => p.industry === filter);

  return (
    <section id="cad" style={{ padding: "7rem 0", background: "var(--bg-secondary)", position: "relative" }}>
      <div className="mesh-overlay" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <span style={{
            fontFamily: "JetBrains Mono, monospace", fontSize: "11px",
            color: "#0ea5e9", letterSpacing: "0.15em", textTransform: "uppercase",
          }}>03 / Mechanical Design</span>
          <h2 style={{
            fontSize: "clamp(2rem,4vw,3rem)", fontWeight: "800",
            color: "#f1f5f9", letterSpacing: "-0.02em", marginTop: "0.5rem",
          }}>CAD Design Portfolio</h2>
          <p style={{ color: "#64748b", marginTop: "0.75rem", maxWidth: "540px", fontSize: "0.93rem", lineHeight: 1.75 }}>
            Production components for railway and water treatment — designed independently in SolidWorks with full DFM/DFA consideration.
          </p>
          <div style={{ marginTop: "1.2rem", maxWidth: "200px", height: "1px", background: "linear-gradient(90deg,transparent,#0ea5e9,transparent)" }} />
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "2.5rem", flexWrap: "wrap" }}>
          {industries.map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                padding: "7px 18px", borderRadius: "6px", fontSize: "12px",
                fontWeight: "600", cursor: "pointer", letterSpacing: "0.04em",
                transition: "all 0.2s",
                background: filter === tab ? "linear-gradient(135deg,#0ea5e9,#06b6d4)" : "transparent",
                border: filter === tab ? "1px solid transparent" : "1px solid rgba(14,165,233,0.22)",
                color: filter === tab ? "#fff" : "#64748b",
              }}
            >{tab}</button>
          ))}
          <span style={{
            marginLeft: "auto", alignSelf: "center",
            fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "#334155",
          }}>
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
