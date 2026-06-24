"use client";
import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg = scrolled
    ? "rgba(5,8,16,0.94)"
    : "transparent";

  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,
      background: navBg,
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(14,165,233,0.1)" : "none",
      transition:"all 0.3s ease",
    }}>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"0 2rem"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",height:"68px"}}>

          {/* Logo */}
          <a href="#hero" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:"10px"}}>
            <div style={{
              width:"34px",height:"34px",borderRadius:"7px",
              background:"linear-gradient(135deg,#0ea5e9,#06b6d4)",
              display:"flex",alignItems:"center",justifyContent:"center",
              fontFamily:"JetBrains Mono,monospace",fontSize:"15px",fontWeight:"800",color:"#fff",
            }}>B</div>
            <div>
              <div style={{color:"#f1f5f9",fontWeight:"800",fontSize:"14px",letterSpacing:"-0.02em",lineHeight:1}}>
                {personalInfo.name}
              </div>
              <div style={{color:"#475569",fontSize:"10px",letterSpacing:"0.06em",marginTop:"1px"}}>
                Design & FEA Engineer
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div style={{display:"flex",gap:"2rem",alignItems:"center"}} className="desk-nav">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} style={{
                color:"#64748b",fontSize:"13px",fontWeight:"500",
                textDecoration:"none",letterSpacing:"0.03em",transition:"color 0.2s",
              }}
                onMouseEnter={e=>(e.currentTarget.style.color="#0ea5e9")}
                onMouseLeave={e=>(e.currentTarget.style.color="#64748b")}
              >{l.label}</a>
            ))}
            {/* CV Download button */}
            <a href={personalInfo.cvPath} target="_blank" rel="noopener noreferrer"
              download="Balaji_V_Resume.pdf"
              style={{
                display:"inline-flex",alignItems:"center",gap:"6px",
                background:"rgba(14,165,233,0.1)",border:"1px solid rgba(14,165,233,0.3)",
                color:"#0ea5e9",padding:"7px 16px",borderRadius:"6px",
                fontSize:"12px",fontWeight:"700",textDecoration:"none",letterSpacing:"0.04em",
                transition:"all 0.2s",
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(14,165,233,0.18)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(14,165,233,0.1)";}}
            >
              ↓ CV
            </a>
            <a href="#contact" style={{
              background:"linear-gradient(135deg,#0ea5e9,#06b6d4)",
              color:"#fff",padding:"8px 20px",borderRadius:"6px",
              fontSize:"13px",fontWeight:"700",textDecoration:"none",
            }}>Hire Me</a>
          </div>

          {/* Mobile burger */}
          <button onClick={()=>setMenuOpen(!menuOpen)}
            className="mob-btn"
            style={{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:"22px",display:"none"}}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div style={{
            padding:"1rem 0 1.5rem",
            borderTop:"1px solid rgba(14,165,233,0.1)",
            display:"flex",flexDirection:"column",gap:"1rem",
          }}>
            {navLinks.map(l=>(
              <a key={l.href} href={l.href} onClick={()=>setMenuOpen(false)}
                style={{color:"#94a3b8",fontSize:"15px",textDecoration:"none"}}>
                {l.label}
              </a>
            ))}
            <a href={personalInfo.cvPath} target="_blank" rel="noopener noreferrer"
              download="Balaji_V_Resume.pdf"
              style={{color:"#0ea5e9",fontSize:"15px",textDecoration:"none",fontWeight:"700"}}>
              ↓ Download CV
            </a>
          </div>
        )}
      </div>
      <style>{`
        @media(max-width:768px){
          .desk-nav{display:none!important;}
          .mob-btn{display:block!important;}
        }
      `}</style>
    </nav>
  );
}
