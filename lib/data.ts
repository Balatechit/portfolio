// ═══════════════════════════════════════════════════════════════
//  lib/data.ts  —  Single source of truth for all portfolio data
//  Edit this file to update any content on the website
// ═══════════════════════════════════════════════════════════════

export const personal = {
  name:       "Balaji V",
  title:      "Mechanical Design Engineer",
  subtitle:   "FEA · CAD · Railway Components · Water Treatment Equipment",
  email:      "balatecit211@gmail.com",
  linkedin:   "https://www.linkedin.com/in/balaji-v211",
  resumeFile: "/Balaji_V_Resume.pdf",
  certifications: [
    { name: "CSWP — Certified SolidWorks Professional", date: "December 16, 2025" },
  ],
  about: `Mechanical Design Engineer with hands-on experience designing structural and interior
components for Indian Railways LHB coaches, and fabricated pressure vessels and skid systems
for water treatment applications. Proficient in SolidWorks, SolidWorks Simulation (FEA),
CATIA, AutoCAD, and GD&T. CSWP-certified since December 2025.

Primary focus: finite element analysis and design validation (~70% of daily work),
mechanical component design (~20%), and personal engineering projects (~10%).`,
  skills: {
    software:  ["SolidWorks", "SolidWorks Simulation", "CATIA", "AutoCAD"],
    standards: ["GD&T", "IS 2062", "ASME B31.3", "IS 456"],
    methods:   ["Static Structural FEA", "Mesh Convergence Study", "Hand Calculations", "Design Validation"],
    domains:   ["Railway Coach Components", "Pressure Vessels", "Skid Systems", "Sheet Metal Design"],
  },
};

// ─── FEA PROJECT ────────────────────────────────────────────────
export const feaProject = {
  id:       "fea-25kl-water-tank",
  title:    "25 KL Water Storage Tank",
  subtitle: "Static Structural FEA — SolidWorks Simulation",
  material: "SS 304",
  capacity: "25,000 Litres",
  specs: [
    { label: "Material",          value: "Stainless Steel 304" },
    { label: "Wall Panels",       value: "5 mm Base-Flange" },
    { label: "Frame",             value: "Angle Iron 35×35×5 mm" },
    { label: "Stiffener",         value: "C Channel 80×8 mm" },
    { label: "Total Mass",        value: "~2,855.32 kg" },
    { label: "Mesh",              value: "~3.8M nodes / ~1.8M elements (Curvature-based)" },
    { label: "Study",             value: "Static Study 7 — Refined Mesh (Authoritative)" },
  ],
  results: [
    { label: "Max von Mises Stress", value: "380.9 MPa", note: "Exceeds SS304 yield (206.8 MPa) — stress concentration at frame-panel junctions" },
    { label: "Max Displacement",     value: "1.711 mm",  note: "Peak at unsupported wall mid-span" },
    { label: "Yield Strength",       value: "206.8 MPa", note: "SS 304 reference value" },
  ],
  // FEA result images
  images: [
    { src: "/projects/25kl-tank-stress.jpg",       alt: "Von Mises stress plot — 25 KL SS304 tank",       caption: "Von Mises Stress — Max 380.9 MPa" },
    { src: "/projects/25kl-tank-displacement.jpg", alt: "Displacement plot — 25 KL SS304 tank",           caption: "Resultant Displacement — Max 1.711 mm" },
    { src: "/projects/25kl-tank-mesh.jpg",         alt: "Curvature-based mesh — 25 KL SS304 tank",        caption: "Refined Mesh — ~3.8M Nodes" },
    { src: "/projects/25kl-tank-strain.jpg",       alt: "Equivalent strain plot — 25 KL SS304 tank",      caption: "Equivalent Strain Distribution" },
  ],
  // Hydrostatic leak test images (June 2026)
  leakTestImages: [
    { src: "/projects/25kl-tank-leak-test-01.jpg", alt: "25 KL SS304 tank front elevation — hydrostatic leak test June 2026", caption: "Front elevation — hydrostatic test in progress" },
    { src: "/projects/25kl-tank-leak-test-02.jpg", alt: "25 KL SS304 tank corner view — welded panel and angle iron frame under test", caption: "Corner view — welded panel seams and angle iron frame" },
    { src: "/projects/25kl-tank-leak-test-03.jpg", alt: "25 KL SS304 tank interior — water surface and internal baffle plate", caption: "Interior — baffle plate and water surface at full capacity" },
    { src: "/projects/25kl-tank-leak-test-04.jpg", alt: "25 KL SS304 tank — top manhole hatch open, tank fully filled", caption: "Top manhole hatch — zero leakage confirmed" },
  ],
  leakTestSummary: `Following fabrication, the tank was filled to its full capacity of 25,000 litres 
and subjected to a hydrostatic leak test (June 2026). All welded seam joints, panel-to-frame 
junctions, and nozzle connections were inspected under full hydrostatic load. The internal baffle 
plate was visually verified through the top manhole access hatch. Result: Zero leakage — 
weld integrity confirmed prior to site deployment.`,
};

// ─── CAD PROJECTS ───────────────────────────────────────────────
export const cadProjects = [
  // ── RAILWAY ──
  {
    id:       "lhb-end-wall",
    category: "Railway",
    title:    "LHB End Wall",
    pn:       "PN 75415001",
    material: "SS 304",
    desc:     "Structural end wall panel for LHB coach. Fully modelled in SolidWorks with GD&T annotations.",
    tags:     ["SS 304", "Sheet Metal", "LHB Coach", "GD&T"],
    gallery:  [
      { src: "/projects/end-wall.jpg",          alt: "LHB End Wall — assembled view" },
      { src: "/projects/end-wall-exploded.jpg", alt: "LHB End Wall — exploded view" },
    ],
  },
  {
    id:       "lhb-side-wall",
    category: "Railway",
    title:    "LHB Side Wall",
    pn:       "",
    material: "SS 304",
    desc:     "Side wall panel with five window cutouts. Red accent panels over grey stiffener structure.",
    tags:     ["SS 304", "Sheet Metal", "LHB Coach", "5× Window Cutouts"],
    gallery:  [
      { src: "/projects/side-wall.jpg",          alt: "LHB Side Wall — assembled view" },
      { src: "/projects/side-wall-exploded.jpg", alt: "LHB Side Wall — exploded view" },
    ],
  },
  {
    id:       "fuel-tank-1500l",
    category: "Railway",
    title:    "1500 L Fuel Tank",
    pn:       "",
    material: "SS 304",
    desc:     "1500-litre onboard fuel tank for LHB coaches. Anti-slip top surface, internal surge baffles for dynamic load management.",
    tags:     ["SS 304", "1500 L", "Anti-slip", "Surge Baffles"],
    gallery:  [
      { src: "/projects/fuel-tank.jpg",          alt: "1500 L Fuel Tank — assembled view" },
      { src: "/projects/fuel-tank-exploded.jpg", alt: "1500 L Fuel Tank — exploded view" },
    ],
  },
  {
    id:       "water-tank-450l",
    category: "Railway",
    title:    "450 L Water Tank",
    pn:       "",
    material: "SS 316L",
    desc:     "Horizontal cylindrical potable water tank. Mounted with U-saddle clamps for vibration isolation.",
    tags:     ["SS 316L", "450 L", "Horizontal Cylinder", "U-Saddle Clamps"],
    gallery:  [
      { src: "/projects/water-tank.jpg",          alt: "450 L Water Tank — assembled view" },
      { src: "/projects/water-tank-exploded.jpg", alt: "450 L Water Tank — exploded view" },
    ],
  },
  {
    id:       "air-reservoir",
    category: "Railway",
    title:    "Air Reservoir",
    pn:       "",
    material: "Mild Steel",
    desc:     "Pneumatic brake system air reservoir. Mounted on saddle cradle brackets with triangular gussets for structural rigidity.",
    tags:     ["Mild Steel", "Pneumatic Brake", "Saddle Cradle", "Triangular Gussets"],
    gallery:  [
      { src: "/projects/air-reservoir.jpg",   alt: "Air Reservoir — front view" },
      { src: "/projects/air-reservoir-2.jpg", alt: "Air Reservoir — bracket detail" },
    ],
  },
  {
    id:       "3-tier-berth",
    category: "Railway",
    title:    "3-Tier Berth System",
    pn:       "PN LS61214 / LS61216 / LS61217",
    material: "SS 409M + MS",
    desc:     "Full 3-tier berth assembly for LHB sleeper coaches. Upper berth with gas strut assisted lift; middle berth with turnbuckle adjustment.",
    tags:     ["SS 409M", "MS", "Gas Strut", "Turnbuckle", "LHB Sleeper"],
    gallery:  [
      { src: "/projects/berth-1.jpg",  alt: "3-Tier Berth — view 1" },
      { src: "/projects/berth-2.jpg",  alt: "3-Tier Berth — view 2" },
      { src: "/projects/berth-3.jpg",  alt: "3-Tier Berth — view 3" },
      { src: "/projects/berth-4.jpg",  alt: "3-Tier Berth — view 4" },
      { src: "/projects/berth-5.jpg",  alt: "3-Tier Berth — view 5" },
      { src: "/projects/berth-6.jpg",  alt: "3-Tier Berth — view 6" },
      { src: "/projects/berth-7.jpg",  alt: "3-Tier Berth — view 7" },
      { src: "/projects/berth-8.jpg",  alt: "3-Tier Berth — view 8" },
      { src: "/projects/berth-9.jpg",  alt: "3-Tier Berth — view 9" },
      { src: "/projects/berth-10.jpg", alt: "3-Tier Berth — view 10" },
    ],
  },
  // ── WATER TREATMENT ──
  {
    id:       "filter-vessel",
    category: "Water Treatment",
    title:    "Filter Vessel — VSL 8-6",
    pn:       "VSL 8-6",
    material: "MS / SS",
    desc:     "1500×2000 mm vertical pressure vessel for water filtration. Color-coded external piping for inlet, outlet, backwash, and drain lines.",
    tags:     ["VSL 8-6", "1500×2000 mm", "Pressure Vessel", "Color-coded Piping"],
    gallery:  [
      { src: "/projects/filter-vessel.jpg", alt: "Filter Vessel VSL 8-6 — full assembly" },
    ],
  },
  {
    id:       "ro-plant-6000lph",
    category: "Water Treatment",
    title:    "6000 LPH RO Plant",
    pn:       "",
    material: "MS Skid",
    desc:     "6000 litres-per-hour reverse osmosis plant on MS skid. 80-80-40 mm three-layer membrane array, multistage high-pressure pump, color-coded piping.",
    tags:     ["6000 LPH", "RO Plant", "MS Skid", "80-80-40 Array", "High-Pressure Pump"],
    gallery:  [
      { src: "/projects/ro-plant.jpg", alt: "6000 LPH RO Plant — skid assembly" },
    ],
  },
];
