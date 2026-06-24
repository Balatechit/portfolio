"use client";
import { feaProjects } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";

function ResultCard({ label, value, unit, status }:
  { label:string; value:string; unit?:string; status?:"warning"|"ok"|"neutral" }) {
  const c = status==="warning" ? "#ef4444" : status==="ok" ? "#10b981" : "#0ea5e9";
  const bg = status==="warning" ? "239,68,68" : status==="ok" ? "16,185,129" : "14,165,233";
  return (
    <div style={{
      padding:"0.9rem 1.1rem",borderRadius:"8px",
      background:`rgba(${bg},0.06)`,border:`1px solid rgba(${bg},0.2)`,
    }}>
      <div className="mono" style={{fontSize:"9px",color:"#475569",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"4px"}}>{label}</div>
      <div className="mono" style={{fontSize:"1.25rem",fontWeight:"800",color:c,letterSpacing:"-0.02em"}}>
        {value}{unit && <span style={{fontSize:"0.7rem",fontWeight:"500",color:"#64748b",marginLeft:"3px"}}>{unit}</span>}
      </div>
    </div>
  );
}

function ImgTab({ src, label }: { src:string; label:string }) {
  return (
    <div style={{borderRadius:"8px",overflow:"hidden",border:"1px solid rgba(14,165,233,0.15)"}}>
      <div style={{position:"relative",width:"100%",height:"220px",background:"#050810"}}>
        <Image src={src} alt={label} fill style={{objectFit:"contain"}} sizes="(max-width:768px) 100vw, 50vw"/>
      </div>
      <div className="mono" style={{
        padding:"6px 12px",background:"rgba(14,165,233,0.05)",
        fontSize:"9px",color:"#475569",letterSpacing:"0.1em",textTransform:"uppercase",
      }}>{label}</div>
    </div>
  );
}

export default function FEASection() {
  const [expanded, setExpanded] = useState(false);
  const p = feaProjects[0];

  return (
    <section id="fea" style={{padding:"7rem 0",background:"var(--bg-primary)",position:"relative"}}>
      <div className="grid-bg" style={{position:"absolute",inset:0}}/>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2}}>

        {/* Header */}
        <div style={{marginBottom:"4rem"}}>
          <span className="mono" style={{fontSize:"11px",color:"#0ea5e9",letterSpacing:"0.15em",textTransform:"uppercase"}}>
            02 / FEA Case Studies
          </span>
          <h2 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:"800",color:"#f1f5f9",letterSpacing:"-0.02em",marginTop:"0.5rem"}}>
            Engineering Simulation Portfolio
          </h2>
          <p style={{color:"#64748b",marginTop:"0.75rem",maxWidth:"560px",fontSize:"0.93rem",lineHeight:1.75}}>
            Full-cycle structural FEA — problem definition, mesh strategy, analysis, and design recommendations.
          </p>
          <div style={{marginTop:"1.2rem",maxWidth:"200px",height:"1px",
            background:"linear-gradient(90deg,transparent,#0ea5e9,transparent)"}}/>
        </div>

        {/* Case study card */}
        <div className="glass-card" style={{borderRadius:"14px",overflow:"hidden",
          boxShadow:"0 0 40px rgba(14,165,233,0.08)"}}>
          <div className="stress-bar" style={{height:"3px"}}/>
          <div style={{padding:"2.5rem"}}>

            {/* Card header */}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem",marginBottom:"2rem"}}>
              <div>
                <div style={{display:"flex",gap:"7px",flexWrap:"wrap",marginBottom:"0.7rem"}}>
                  {p.tags.map(t=>(
                    <span key={t} style={{
                      display:"inline-flex",alignItems:"center",padding:"2px 9px",borderRadius:"4px",
                      fontSize:"8px",fontWeight:"700",letterSpacing:"0.08em",textTransform:"uppercase",
                      border:"1px solid rgba(14,165,233,0.25)",color:"#06b6d4",
                      background:"rgba(6,182,212,0.07)",
                    }}>{t}</span>
                  ))}
                </div>
                <h3 style={{fontSize:"1.6rem",fontWeight:"800",color:"#f1f5f9",letterSpacing:"-0.02em"}}>{p.title}</h3>
                <p className="mono" style={{color:"#475569",fontSize:"11px",marginTop:"4px"}}>{p.subtitle}</p>
              </div>
              <div style={{
                padding:"7px 16px",borderRadius:"20px",
                background:"rgba(14,165,233,0.07)",border:"1px solid rgba(14,165,233,0.2)",
                fontSize:"12px",color:"#0ea5e9",fontWeight:"600",whiteSpace:"nowrap",
              }}>{p.industry}</div>
            </div>

            {/* ── REAL SIMULATION IMAGES ── */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}} className="img-grid">
              <ImgTab src={p.images.stress}       label="Von Mises Stress Plot"/>
              <ImgTab src={p.images.displacement} label="Displacement Plot"/>
              <ImgTab src={p.images.mesh}         label="Mesh — Blended Curvature"/>
              <ImgTab src={p.images.strain}       label="Strain Plot"/>
            </div>

            {/* Results */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(165px,1fr))",gap:"0.9rem",marginTop:"2rem"}}>
              <ResultCard label="Max Von Mises Stress"  value="380.9" unit="MPa" status="warning"/>
              <ResultCard label="Max Displacement"      value="1.711" unit="mm"  status="ok"/>
              <ResultCard label="SS 304 Yield Strength" value="206.8" unit="MPa" status="neutral"/>
              <ResultCard label="Mesh Nodes"  value="~3.8M"  status="neutral"/>
              <ResultCard label="Mesh Elements" value="~1.8M" status="neutral"/>
              <ResultCard label="Study"       value="Static 7" status="neutral"/>
            </div>

            {/* Expand toggle */}
            <div style={{marginTop:"2rem"}}>
              <button onClick={()=>setExpanded(!expanded)} style={{
                background:"none",border:"1px solid rgba(14,165,233,0.22)",
                color:"#0ea5e9",padding:"10px 20px",borderRadius:"6px",
                fontSize:"13px",fontWeight:"600",cursor:"pointer",letterSpacing:"0.04em",
              }}>
                {expanded ? "▲ Collapse Case Study" : "▼ Full Engineering Case Study"}
              </button>
            </div>

            {expanded && (
              <div style={{marginTop:"2rem",display:"flex",flexDirection:"column",gap:"2rem"}}>
                <hr style={{border:"none",height:"1px",background:"rgba(14,165,233,0.08)"}}/>

                <Block title="Problem Statement" icon="⚠">
                  <P>{p.problem}</P>
                </Block>

                <Block title="Design Objective" icon="◎">
                  <P>{p.objective}</P>
                </Block>

                <Block title="Construction & Material" icon="◈">
                  <div style={{display:"flex",gap:"1.5rem",flexWrap:"wrap",marginBottom:"10px"}}>
                    <Pill k="Material" v={p.material}/>
                    <Pill k="Total Weight" v={p.weight}/>
                  </div>
                  {p.construction.map(c=><Row key={c} text={c} color="#0ea5e9"/>)}
                </Block>

                <Block title="Loads & Boundary Conditions" icon="⬡">
                  {p.loads.map(l=><Row key={l} text={l} color="#f59e0b"/>)}
                </Block>

                <Block title="Mesh Strategy" icon="⊞">
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.7rem"}}>
                    <Pill k="Study"    v={p.mesh.study}/>
                    <Pill k="Type"     v={p.mesh.type}/>
                    <Pill k="Nodes"    v={p.mesh.nodes}/>
                    <Pill k="Elements" v={p.mesh.elements}/>
                  </div>
                </Block>

                <Block title="Key Findings" icon="✦">
                  <div style={{
                    padding:"1rem 1.2rem",borderRadius:"8px",marginBottom:"0.8rem",
                    background:"rgba(239,68,68,0.05)",border:"1px solid rgba(239,68,68,0.18)",
                  }}>
                    <div className="mono" style={{fontSize:"10px",color:"#ef4444",marginBottom:"5px"}}>CRITICAL FINDING</div>
                    <P>Maximum von Mises stress of <strong style={{color:"#ef4444"}}>380.9 MPa</strong> at frame-to-panel junctions exceeds SS 304 yield strength of <strong style={{color:"#0ea5e9"}}>206.8 MPa</strong>. Plastic deformation risk identified at angle iron–panel junctions under full hydrostatic load.</P>
                  </div>
                  <P>Maximum displacement of <strong style={{color:"#10b981"}}>1.711 mm</strong> is structurally acceptable for a vessel of this scale. Result confirmed mesh-independent by ~3.8M node refined mesh.</P>
                </Block>

                <Block title="Design Recommendations" icon="↗">
                  {p.improvements.map((imp,i)=>(
                    <div key={i} style={{display:"flex",gap:"10px",marginBottom:"6px",alignItems:"flex-start"}}>
                      <span style={{
                        minWidth:"20px",height:"20px",borderRadius:"50%",
                        background:"rgba(14,165,233,0.12)",color:"#0ea5e9",
                        fontSize:"10px",fontWeight:"700",
                        display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
                      }}>{i+1}</span>
                      <span style={{color:"#94a3b8",fontSize:"0.87rem",lineHeight:1.65}}>{imp}</span>
                    </div>
                  ))}
                </Block>

                <Block title="Engineering Conclusion" icon="✓">
                  <P>{p.conclusion}</P>
                </Block>

                {/* Solver strip */}
                <div style={{
                  padding:"1rem 1.5rem",borderRadius:"8px",
                  background:"rgba(14,165,233,0.03)",border:"1px solid rgba(14,165,233,0.08)",
                  display:"flex",gap:"2rem",flexWrap:"wrap",
                }}>
                  {[
                    {k:"Solver",      v:p.solver.type},
                    {k:"Analysis",    v:p.solver.analysis},
                    {k:"Material Model",v:p.solver.material},
                    {k:"Criterion",   v:p.solver.criterion},
                  ].map(({k,v})=>(
                    <div key={k}>
                      <div className="mono" style={{fontSize:"9px",color:"#334155",textTransform:"uppercase",letterSpacing:"0.08em"}}>{k}</div>
                      <div style={{fontSize:"12px",color:"#94a3b8",fontWeight:"500",marginTop:"2px"}}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Coming soon */}
        <div style={{
          marginTop:"1.5rem",padding:"1.8rem",borderRadius:"12px",
          border:"1px dashed rgba(14,165,233,0.18)",textAlign:"center",
          background:"rgba(14,165,233,0.02)",
        }}>
          <div className="mono" style={{fontSize:"10px",color:"#334155",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"6px"}}>
            Additional Studies — In Progress
          </div>
          <p style={{color:"#334155",fontSize:"0.83rem"}}>
            Buckling · Modal · Fatigue · Thermal FEA studies to be added as completed
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width:640px){.img-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  );
}

function Block({title,icon,children}:{title:string;icon:string;children:React.ReactNode}){
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"0.75rem"}}>
        <span style={{color:"#0ea5e9",fontSize:"14px"}}>{icon}</span>
        <h4 style={{fontWeight:"700",color:"#f1f5f9",fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.07em"}}>{title}</h4>
      </div>
      {children}
    </div>
  );
}
function P({children}:{children:React.ReactNode}){
  return <p style={{color:"#94a3b8",lineHeight:1.8,fontSize:"0.88rem"}}>{children}</p>;
}
function Row({text,color}:{text:string;color:string}){
  return (
    <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"5px"}}>
      <span style={{color,fontSize:"11px"}}>›</span>
      <span style={{color:"#94a3b8",fontSize:"0.87rem"}}>{text}</span>
    </div>
  );
}
function Pill({k,v}:{k:string;v:string}){
  return (
    <div style={{padding:"6px 12px",borderRadius:"6px",
      background:"rgba(14,165,233,0.05)",border:"1px solid rgba(14,165,233,0.1)"}}>
      <div className="mono" style={{fontSize:"9px",color:"#334155",textTransform:"uppercase",letterSpacing:"0.08em"}}>{k}</div>
      <div style={{fontSize:"12px",color:"#94a3b8",fontWeight:"600",marginTop:"2px"}}>{v}</div>
    </div>
  );
}
