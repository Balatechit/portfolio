"use client";
import { useEffect, useRef } from "react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const pts = Array.from({length:90},()=>({
      x:Math.random()*canvas.width, y:Math.random()*canvas.height,
      vx:(Math.random()-0.5)*0.35, vy:(Math.random()-0.5)*0.35,
    }));
    let id:number;
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      pts.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>canvas.width) p.vx*=-1;
        if(p.y<0||p.y>canvas.height) p.vy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,1.6,0,Math.PI*2);
        ctx.fillStyle="rgba(14,165,233,0.55)"; ctx.fill();
      });
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<130){
          ctx.beginPath();
          ctx.strokeStyle=`rgba(14,165,233,${0.13*(1-d/130)})`;
          ctx.lineWidth=0.7;
          ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
          ctx.stroke();
        }
      }
      id=requestAnimationFrame(draw);
    };
    draw();
    return ()=>cancelAnimationFrame(id);
  },[]);

  return (
    <section id="hero" style={{
      position:"relative",minHeight:"100vh",
      display:"flex",alignItems:"center",
      background:"var(--bg-primary)",overflow:"hidden",
    }}>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.7}}/>
      <canvas ref={canvasRef} style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.75}}/>
      {/* Glow orbs */}
      <div style={{position:"absolute",top:"15%",left:"5%",width:"500px",height:"500px",borderRadius:"50%",
        background:"radial-gradient(circle,rgba(14,165,233,0.07) 0%,transparent 70%)",filter:"blur(50px)"}}/>
      <div style={{position:"absolute",bottom:"15%",right:"5%",width:"350px",height:"350px",borderRadius:"50%",
        background:"radial-gradient(circle,rgba(6,182,212,0.05) 0%,transparent 70%)",filter:"blur(40px)"}}/>

      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2,width:"100%"}}>
        <div style={{maxWidth:"840px"}}>

          {/* CSWP badge */}
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"2rem",flexWrap:"wrap"}}>
            <div style={{
              display:"flex",alignItems:"center",gap:"8px",
              background:"rgba(14,165,233,0.08)",border:"1px solid rgba(14,165,233,0.25)",
              borderRadius:"20px",padding:"6px 16px",
            }}>
              <span className="animate-pulse-dot" style={{
                display:"inline-block",width:"7px",height:"7px",
                borderRadius:"50%",background:"#0ea5e9",
              }}/>
              <span className="mono" style={{fontSize:"11px",fontWeight:"600",color:"#0ea5e9",letterSpacing:"0.1em"}}>
                CSWP CERTIFIED — DEC 2025
              </span>
            </div>
            <div style={{
              padding:"6px 14px",borderRadius:"20px",
              background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",
              fontSize:"11px",color:"#10b981",fontWeight:"600",letterSpacing:"0.06em",
            }}>DASSAULT SYSTÈMES</div>
          </div>

          {/* Name */}
          <h1 style={{
            fontSize:"clamp(2.8rem,6vw,5.2rem)",fontWeight:"900",
            letterSpacing:"-0.03em",lineHeight:1.04,color:"#f1f5f9",marginBottom:"0.6rem",
          }}>{personalInfo.name}</h1>

          {/* Title */}
          <div style={{marginBottom:"1.8rem"}}>
            <div style={{fontSize:"clamp(1.1rem,2.5vw,1.65rem)",fontWeight:"600",color:"#64748b",letterSpacing:"-0.01em"}}>
              {personalInfo.title}{" "}
              <span style={{background:"linear-gradient(135deg,#0ea5e9,#06b6d4)",
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                & {personalInfo.subtitle}
              </span>
            </div>
            {/* FEA stress contour accent */}
            <div style={{marginTop:"14px",display:"flex",alignItems:"center",gap:"14px"}}>
              <div className="stress-bar" style={{width:"180px",height:"3px",borderRadius:"2px"}}/>
              <span className="mono" style={{fontSize:"9px",color:"#334155",letterSpacing:"0.12em"}}>
                FEA STRESS CONTOUR
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="mono" style={{
            fontSize:"clamp(0.8rem,1.4vw,0.92rem)",color:"#475569",
            letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:"1.5rem",fontWeight:"500",
          }}>{personalInfo.tagline}</p>

          {/* Value prop */}
          <p style={{
            fontSize:"clamp(0.92rem,1.4vw,1.05rem)",color:"#94a3b8",
            lineHeight:1.8,maxWidth:"640px",marginBottom:"2.5rem",
          }}>{personalInfo.valueProposition}</p>

          {/* CTAs */}
          <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"}}>
            <a href="#fea" style={{
              display:"inline-flex",alignItems:"center",gap:"8px",
              background:"linear-gradient(135deg,#0ea5e9,#06b6d4)",
              color:"#fff",padding:"14px 28px",borderRadius:"8px",
              fontWeight:"700",fontSize:"14px",textDecoration:"none",
              boxShadow:"0 8px 32px rgba(14,165,233,0.28)",letterSpacing:"0.02em",
            }}>View FEA Case Studies →</a>

            <a href="#cad" style={{
              display:"inline-flex",alignItems:"center",gap:"8px",
              background:"transparent",border:"1px solid rgba(14,165,233,0.28)",
              color:"#94a3b8",padding:"14px 28px",borderRadius:"8px",
              fontWeight:"600",fontSize:"14px",textDecoration:"none",
            }}>Design Portfolio</a>

            {/* CV download — hero level */}
            <a href={personalInfo.cvPath} target="_blank" rel="noopener noreferrer"
              download="Balaji_V_Resume.pdf"
              style={{
                display:"inline-flex",alignItems:"center",gap:"8px",
                background:"rgba(245,158,11,0.08)",border:"1px solid rgba(245,158,11,0.3)",
                color:"#f59e0b",padding:"14px 28px",borderRadius:"8px",
                fontWeight:"700",fontSize:"14px",textDecoration:"none",letterSpacing:"0.02em",
              }}>↓ Download CV</a>
          </div>

          {/* Stats strip */}
          <div style={{
            marginTop:"4rem",display:"flex",gap:"3rem",flexWrap:"wrap",
            paddingTop:"2rem",borderTop:"1px solid rgba(14,165,233,0.08)",
          }}>
            {[
              {v:"8+",    l:"Production Components"},
              {v:"25 KL", l:"FEA Tank Validated"},
              {v:"3.8M",  l:"FEA Mesh Nodes"},
              {v:"CSWP",  l:"Certified Professional"},
            ].map(s=>(
              <div key={s.l}>
                <div className="mono" style={{fontSize:"1.7rem",fontWeight:"800",color:"#0ea5e9",letterSpacing:"-0.02em"}}>{s.v}</div>
                <div className="mono" style={{fontSize:"10px",color:"#334155",fontWeight:"500",letterSpacing:"0.07em",textTransform:"uppercase",marginTop:"3px"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{position:"absolute",bottom:"2rem",left:"50%",transform:"translateX(-50%)",
        display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"}}>
        <div style={{width:"1px",height:"40px",background:"linear-gradient(to bottom,transparent,#0ea5e9)"}}/>
        <span className="mono" style={{fontSize:"9px",color:"#334155",letterSpacing:"0.12em"}}>SCROLL</span>
      </div>
    </section>
  );
}
