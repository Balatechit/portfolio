export default function Footer() {
  return (
    <footer
      style={{
        background:   "var(--bg-base)",
        borderTop:    "1px solid var(--border)",
        padding:      "28px 24px",
      }}
    >
      <div
        className="container"
        style={{
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          flexWrap:       "wrap",
          gap:            "12px",
        }}
      >
        <span
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 700,
            fontSize:   "15px",
            color:      "var(--text-primary)",
          }}
        >
          Balaji<span style={{ color: "var(--accent)" }}>.</span>V
        </span>
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize:   "11px",
            color:      "var(--text-muted)",
            letterSpacing: "0.05em",
          }}
        >
          Mechanical Design Engineer · CSWP Certified · 2025–2026
        </p>
      </div>
    </footer>
  );
}
