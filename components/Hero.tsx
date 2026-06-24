"use client";
import { useEffect, useRef } from "react";
import { personal } from "@/lib/data";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* subtle grid + particle canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* draw engineering grid */
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(36,45,64,0.6)";
      ctx.lineWidth   = 0.5;
      const step = 60;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }
      /* crosshair accent */
      const cx = canvas.width * 0.72;
      const cy = canvas.height * 0.42;
      ctx.strokeStyle = "rgba(245,158,11,0.15)";
      ctx.lineWidth   = 1;
      ctx.beginPath(); ctx.moveTo(cx - 30, cy); ctx.lineTo(cx + 30, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy - 30); ctx.lineTo(cx, cy + 30); ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(245,158,11,0.1)";
      ctx.stroke();
    };
    draw();
    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", draw);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position:   "relative",
        minHeight:  "100vh",
        display:    "flex",
        alignItems: "center",
        overflow:   "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      {/* amber gradient blob */}
      <div
        style={{
          position:   "absolute",
          top:        "20%",
          right:      "10%",
          width:      "500px",
          height:     "500px",
          background: "radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)",
          zIndex:     0,
        }}
      />

      <div
        className="container"
        style={{ position: "relative", zIndex: 1, paddingTop: "100px" }}
      >
        {/* eyebrow */}
        <p className="eyebrow" style={{ marginBottom: "20px" }}>
          Mechanical Design Engineer — CSWP Certified
        </p>

        {/* name */}
        <h1
          style={{
            fontFamily:  "Space Grotesk, sans-serif",
            fontSize:    "clamp(48px, 8vw, 88px)",
            fontWeight:  700,
            lineHeight:  1.05,
            color:       "var(--text-primary)",
            marginBottom: "8px",
          }}
        >
          {personal.name.split(" ")[0]}{" "}
          <span style={{ color: "var(--accent)" }}>
            {personal.name.split(" ")[1]}
          </span>
        </h1>

        {/* subtitle */}
        <p
          style={{
            fontFamily:   "Space Grotesk, sans-serif",
            fontSize:     "clamp(18px, 2.5vw, 26px)",
            color:        "var(--text-secondary)",
            marginBottom: "16px",
            fontWeight:   400,
          }}
        >
          FEA · CAD · Railway Components · Water Treatment
        </p>

        {/* stat bar */}
        <div
          style={{
            display:       "flex",
            gap:           "32px",
            marginBottom:  "40px",
            flexWrap:      "wrap",
          }}
        >
          {[
            { val: "~70%", label: "FEA / Simulation" },
            { val: "~20%", label: "Mechanical Design" },
            { val: "8+",   label: "CAD Projects" },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize:   "32px",
                  fontWeight: 700,
                  color:      "var(--accent)",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color:    "var(--text-muted)",
                  marginTop: "4px",
                  fontFamily: "JetBrains Mono, monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#fea"
            style={{
              padding:        "14px 32px",
              background:     "var(--accent)",
              color:          "#0B0E14",
              fontFamily:     "Space Grotesk, sans-serif",
              fontWeight:     700,
              fontSize:       "14px",
              textDecoration: "none",
              borderRadius:   "4px",
              letterSpacing:  "0.04em",
            }}
          >
            View FEA Work
          </a>
          <a
            href="#projects"
            style={{
              padding:        "14px 32px",
              background:     "transparent",
              color:          "var(--text-primary)",
              fontFamily:     "Space Grotesk, sans-serif",
              fontWeight:     600,
              fontSize:       "14px",
              textDecoration: "none",
              borderRadius:   "4px",
              border:         "1px solid var(--border-light)",
              letterSpacing:  "0.04em",
            }}
          >
            Browse Projects
          </a>
          <a
            href={personal.resumeFile}
            download
            style={{
              padding:        "14px 32px",
              background:     "transparent",
              color:          "var(--accent)",
              fontFamily:     "Space Grotesk, sans-serif",
              fontWeight:     600,
              fontSize:       "14px",
              textDecoration: "none",
              borderRadius:   "4px",
              border:         "1px solid rgba(245,158,11,0.3)",
              letterSpacing:  "0.04em",
            }}
          >
            Download Resume ↓
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div
        style={{
          position:  "absolute",
          bottom:    "32px",
          left:      "50%",
          transform: "translateX(-50%)",
          display:   "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           "6px",
          opacity:       0.4,
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize:   "10px",
            letterSpacing: "0.12em",
            color:      "var(--text-muted)",
          }}
        >
          SCROLL
        </div>
        <div
          style={{
            width:        "1px",
            height:       "40px",
            background:   "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </div>
    </section>
  );
}
