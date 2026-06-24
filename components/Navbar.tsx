"use client";
import { useState, useEffect } from "react";
import { personal } from "@/lib/data";

const links = [
  { label: "About",    href: "#about"    },
  { label: "FEA",      href: "#fea"      },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position:        "fixed",
        top:             0,
        left:            0,
        right:           0,
        zIndex:          100,
        background:      scrolled ? "rgba(11,14,20,0.95)" : "transparent",
        borderBottom:    scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter:  scrolled ? "blur(12px)" : "none",
        transition:      "all 0.3s",
        padding:         "0 24px",
      }}
    >
      <div
        style={{
          maxWidth:       "1200px",
          margin:         "0 auto",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          height:         "60px",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily:   "Space Grotesk, sans-serif",
            fontWeight:   700,
            fontSize:     "16px",
            color:        "var(--text-primary)",
            letterSpacing: "0.02em",
          }}
        >
          Balaji<span style={{ color: "var(--accent)" }}>.</span>V
        </span>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}
             className="desktop-nav">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color:          "var(--text-secondary)",
                textDecoration: "none",
                fontSize:       "13px",
                fontWeight:     500,
                letterSpacing:  "0.03em",
                transition:     "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-secondary)")
              }
            >
              {l.label}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href={personal.resumeFile}
            download
            style={{
              padding:        "7px 18px",
              background:     "var(--accent)",
              color:          "#0B0E14",
              fontFamily:     "Space Grotesk, sans-serif",
              fontWeight:     600,
              fontSize:       "12px",
              letterSpacing:  "0.05em",
              textTransform:  "uppercase",
              textDecoration: "none",
              borderRadius:   "4px",
              transition:     "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.opacity = "1")
            }
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display:     "none",
            background:  "none",
            border:      "none",
            cursor:      "pointer",
            color:       "var(--text-primary)",
            fontSize:    "20px",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background:   "var(--bg-surface)",
            borderTop:    "1px solid var(--border)",
            padding:      "16px 24px 24px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display:        "block",
                color:          "var(--text-secondary)",
                textDecoration: "none",
                padding:        "10px 0",
                fontSize:       "15px",
                borderBottom:   "1px solid var(--border)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={personal.resumeFile}
            download
            style={{
              display:        "inline-block",
              marginTop:      "16px",
              padding:        "10px 24px",
              background:     "var(--accent)",
              color:          "#0B0E14",
              fontWeight:     700,
              fontSize:       "13px",
              textDecoration: "none",
              borderRadius:   "4px",
            }}
          >
            Download Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
