"use client";
export default function About() {
  const focusAreas = [
    {
      icon:"⬡",color:"#0ea5e9",title:"Structural FEA",
      items:["Von Mises stress analysis","Hydrostatic & gravity loading","Mesh convergence studies","3.8M+ node refined meshes"],
    },
    {
      icon:"◈",color:"#06b6d4",title:"Mechanical & Pressure Vessel Design",
      items:["LHB Railway coach components","Cylindrical & vertical pressure vessels","Sheet metal (Base-Flange method)","Weld frame & stiffener design"],
    },
    {
      icon:"⊞",color:"#f59e0b",title:"Manufacturing & Documentation",
      items:["GD&T","DFM / DFA","Manufacturing drawings","Bill of Materials"],
    },
  ];

  return (
    <section id="about" style={{padding:"7rem 0",background:"var(--bg-secondary)",position:"relative"}}>
      <div className="mesh-overlay" style={{position:"absolute",inset:0,opacity:0.35}}/>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2}}>

        <div style={{marginBottom:"4rem"}}>
          <span className="mono" style={{fontSize:"11px",color:"#0ea5e9",letterSpacing:"0.15em",textTransform:"uppercase"}}>
            01 / About
          </span>
          <h2 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:"800",color:"#f1f5f9",letterSpacing:"-0.02em",marginTop:"0.5rem"}}>
            Engineering Profile
          </h2>
          <div style={{marginTop:"1rem",maxWidth:"200px",height:"1px",
            background:"linear-gradient(90deg,transparent,#0ea5e9,transparent)"}}/>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"start"}} className="about-grid">

          {/* Bio */}
          <div>
            <h3 style={{fontSize:"1.35rem",fontWeight:"700",color:"#f1f5f9",marginBottom:"1.2rem",lineHeight:1.3}}>
              Design Engineer with a Simulation-First Mindset
            </h3>
            {[
              "I am a Mechanical Design Engineer with hands-on experience designing and validating production components for the railway and water treatment industries. My work spans the full product development cycle — from initial 3D modelling and DFM analysis through to FEA simulation and manufacturing documentation.",
              "My engineering approach is simulation-first: every structural design is validated using SolidWorks Simulation before sign-off. This has allowed me to identify critical stress concentrations, propose geometry optimizations, and reduce the risk of field failures in pressure vessels, sheet metal frames, and mechanical assemblies.",
              "I hold the CSWP (Certified SolidWorks Professional) certification and work daily with SolidWorks for modelling and SolidWorks Simulation for static structural FEA. My design experience covers SS 304, SS 316L, SS 409M, and Mild Steel across a range of industrial applications.",
            ].map((p,i)=>(
              <p key={i} style={{color:"#94a3b8",lineHeight:1.85,fontSize:"0.93rem",marginBottom:"1rem"}}>{p}</p>
            ))}

            {/* CSWP card */}
            <div style={{
              marginTop:"1.5rem",padding:"1.2rem 1.4rem",
              background:"rgba(14,165,233,0.05)",border:"1px solid rgba(14,165,233,0.2)",
              borderRadius:"10px",display:"flex",alignItems:"center",gap:"1rem",
            }}>
              <div style={{
                width:"42px",height:"42px",borderRadius:"8px",flexShrink:0,
                background:"linear-gradient(135deg,#0ea5e9,#06b6d4)",
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:"18px",color:"#fff",fontWeight:"900",
              }}>✓</div>
              <div>
                <div style={{fontWeight:"700",color:"#f1f5f9",fontSize:"0.88rem"}}>
                  Certified SolidWorks Professional (CSWP)
                </div>
                <div className="mono" style={{fontSize:"11px",color:"#64748b",marginTop:"3px"}}>
                  Dassault Systèmes · December 16, 2025
                </div>
              </div>
            </div>
          </div>

          {/* Focus areas */}
          <div style={{display:"flex",flexDirection:"column",gap:"1.2rem"}}>
            {focusAreas.map(a=>(
              <div key={a.title} className="glass-card" style={{padding:"1.4rem 1.6rem",borderRadius:"10px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"0.8rem"}}>
                  <span style={{fontSize:"16px",color:a.color}}>{a.icon}</span>
                  <h4 style={{fontWeight:"700",color:"#f1f5f9",fontSize:"0.88rem"}}>{a.title}</h4>
                </div>
                <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"4px"}}>
                  {a.items.map(it=>(
                    <li key={it} style={{fontSize:"12px",color:"#64748b",display:"flex",alignItems:"center",gap:"8px"}}>
                      <span style={{width:"4px",height:"4px",borderRadius:"50%",background:a.color,flexShrink:0,display:"inline-block"}}/>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Industry strip */}
        <div style={{
          marginTop:"3rem",padding:"1.4rem 2rem",
          background:"rgba(14,165,233,0.03)",border:"1px solid rgba(14,165,233,0.08)",
          borderRadius:"10px",display:"flex",alignItems:"center",gap:"3rem",flexWrap:"wrap",
        }}>
          <span className="mono" style={{fontSize:"10px",color:"#334155",letterSpacing:"0.12em",textTransform:"uppercase"}}>Industries</span>
          {["Railway (LHB Coach Components)","Water Treatment & Filtration","Pneumatic Systems","Structural Fabrication"].map(ind=>(
            <div key={ind} style={{display:"flex",alignItems:"center",gap:"8px"}}>
              <div style={{width:"5px",height:"5px",borderRadius:"50%",background:"#0ea5e9"}}/>
              <span style={{color:"#94a3b8",fontSize:"13px",fontWeight:"500"}}>{ind}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
