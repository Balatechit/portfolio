// ============================================================
// lib/data.ts  —  Balaji V Portfolio — Single Source of Truth
// ============================================================
// UPDATE INSTRUCTIONS:
//   Email / LinkedIn → personalInfo below
//   CV              → replace /public/Balaji_V_Resume.pdf
//                     (keep the exact filename — button auto-updates)
//   Add FEA study   → push a new object into feaProjects[]
//   Add CAD project → push a new object into cadProjects[]
// ============================================================

export const personalInfo = {
  name: "Balaji V",
  title: "Mechanical Design Engineer",
  subtitle: "FEA & Simulation Engineer",
  tagline: "Design • Validate • Optimize • Manufacture",
  valueProposition:
    "CSWP-certified Design Engineer with hands-on experience delivering production-ready railway coach components and water treatment equipment. Simulation-first approach — every design validated through SolidWorks FEA before sign-off.",
  email: "balatecit211@gmail.com",
  linkedin: "https://www.linkedin.com/in/balaji-v211",
  // CV: replace /public/Balaji_V_Resume.pdf with your actual CV file.
  // Keep the filename EXACTLY as below — the Download CV button reads this path.
  cvPath: "/Balaji_V_Resume.pdf",
  certifications: [
    {
      name: "CSWP",
      full: "Certified SolidWorks Professional",
      date: "December 16, 2025",
      issuer: "Dassault Systèmes",
    },
  ],
};

export const navLinks = [
  { label: "About",      href: "#about" },
  { label: "FEA Studies",href: "#fea"   },
  { label: "CAD Projects",href: "#cad"  },
  { label: "Skills",     href: "#skills"},
  { label: "Contact",    href: "#contact"},
];

export const skills = {
  software: [
    { name: "SolidWorks",            level: 95 },
    { name: "SolidWorks Simulation", level: 90 },
    { name: "CATIA",                 level: 70 },
    { name: "AutoCAD",               level: 75 },
  ],
  cae: [
    "Static Structural FEA",
    "Von Mises Stress Analysis",
    "Displacement Analysis",
    "Hydrostatic Pressure Loading",
    "Gravity Load Application",
    "Boundary Condition Setup",
    "Mesh Convergence Study",
    "Blended Curvature Meshing",
    "Factor of Safety Evaluation",
    "Contact Analysis",
    "Design Validation",
    "Failure Investigation",
    "Design Optimization",
  ],
  design: [
    "3D CAD Modelling",
    "Sheet Metal Design (Base-Flange)",
    "Pressure Vessel Design",
    "Welded Structure Design",
    "Assembly & Exploded Views",
    "Manufacturing Drawings",
    "GD&T",
    "DFM / DFA",
    "Reverse Engineering",
    "Machine Design",
    "Material Selection",
    "Tolerance Stack-up",
    "Bill of Materials",
  ],
  knowledge: [
    { label: "Stress Analysis",        icon: "σ"  },
    { label: "Statics & Dynamics",     icon: "Σ"  },
    { label: "Strength of Materials",  icon: "◈"  },
    { label: "Machine Design",         icon: "⚙"  },
    { label: "Pressure Vessel Design", icon: "⊙"  },
    { label: "Weld Design",            icon: "⌁"  },
    { label: "Failure Theories",       icon: "⚠"  },
    { label: "Material Behaviour",     icon: "◇"  },
    { label: "Buckling Theory",        icon: "↕"  },
    { label: "Thermal Expansion",      icon: "◻"  },
    { label: "Manufacturing Processes",icon: "⬡"  },
    { label: "GD&T",                   icon: "⊞"  },
    { label: "Tolerance Stack-up",     icon: "≡"  },
    { label: "DFM / DFA",              icon: "◎"  },
  ],
  standards: [
    "ASME Pressure Vessel Design",
    "Railway LHB Coach Standards",
    "Structural Weld Design",
  ],
};

// ─── FEA CASE STUDIES ────────────────────────────────────────
export const feaProjects = [
  {
    id: "fea-001",
    title: "25 KL Water Storage Tank",
    subtitle: "Static Structural FEA — SolidWorks Simulation",
    industry: "Water Treatment",
    material: "SS 304 (Stainless Steel)",
    weight: "~2,855 kg",
    status: "Completed",
    tags: ["Static FEA", "SS 304", "Hydrostatic Load", "Sheet Metal", "Structural Frame"],
    // Real simulation images — all in /public/projects/
    images: {
      stress:       "/projects/25kl-tank-stress.jpg",
      displacement: "/projects/25kl-tank-displacement.jpg",
      mesh:         "/projects/25kl-tank-mesh.jpg",
      strain:       "/projects/25kl-tank-strain.jpg",
    },
    problem:
      "Validate the structural integrity of a 25,000-litre water storage tank under full hydrostatic load and self-weight to identify critical stress zones before manufacturing.",
    objective:
      "Perform linear static FEA to determine maximum von Mises stress, displacement, and factor of safety under worst-case loading, and propose design improvements where stress exceeds yield.",
    construction: [
      "5 mm wall panels — Base-Flange sheet metal method",
      "35×35×5 mm Angle iron perimeter frame",
      "80×8 mm C-channel stiffeners",
    ],
    loads: [
      "Hydrostatic water pressure — full tank (worst case)",
      "Gravitational self-weight (~2,855 kg)",
    ],
    mesh: {
      study:    "Static Study 7 (Refined Mesh)",
      type:     "Blended Curvature-Based, High Quality",
      nodes:    "~3,800,000",
      elements: "~1,800,000",
    },
    results: {
      maxVonMises:    "380.9 MPa",
      maxDisplacement:"1.711 mm",
      yieldStrength:  "206.8 MPa",
    },
    finding:
      "Stress concentrations at frame-to-panel junctions exceed SS 304 yield strength (206.8 MPa). Max displacement of 1.711 mm is acceptable. Mesh-independent result confirmed by ~3.8M node refined mesh.",
    improvements: [
      "Add triangular gusset plates at angle iron–panel junctions",
      "Increase local panel thickness from 5 mm to 6 mm at high-stress zones",
      "Consider adding intermediate horizontal stiffener ring at mid-height",
    ],
    conclusion:
      "The refined-mesh static FEA revealed a stress concentration of 380.9 MPa at frame-panel junctions, exceeding SS 304 yield (206.8 MPa). Displacement is structurally acceptable. Recommended design changes: gusset reinforcement at junctions and local panel thickness increase to bring max stress below yield before manufacture.",
    solver: {
      type:     "SolidWorks Simulation (FFEPlus)",
      analysis: "Linear Static",
      material: "Linear Elastic Isotropic",
      criterion:"Von Mises",
    },
  },
];

// ─── CAD PROJECTS ─────────────────────────────────────────────
export const cadProjects = [
  {
    id: "cad-001",
    title: "LHB End Wall",
    partNo: "75415001",
    subtitle: "Railway Coach End Panel",
    industry: "Railway (LHB Coach)",
    material: "SS 304",
    category: "Sheet Metal / Structural",
    tags: ["SS 304", "Sheet Metal", "Railway", "LHB"],
    images: {
      main:    "/projects/end-wall.jpg",
      exploded:"/projects/end-wall-exploded.jpg",
    },
    description:
      "Arched-top end wall panel for LHB railway coach with central door opening, louvre grille ventilation, and internal structural frame with lightening holes for weight reduction.",
    features: [
      "Arched top profile for aerodynamic clearance",
      "Central door opening with reinforced surround",
      "Louvre grille for ventilation",
      "Inner structural frame with lightening holes",
    ],
    dfm: "Sheet metal Base-Flange method; lightening holes reduce weight without structural compromise.",
  },
  {
    id: "cad-002",
    title: "LHB Side Wall",
    partNo: "—",
    subtitle: "Railway Coach Side Panel",
    industry: "Railway (LHB Coach)",
    material: "SS 304",
    category: "Sheet Metal / Structural",
    tags: ["SS 304", "Sheet Metal", "Railway", "LHB"],
    images: {
      main:    "/projects/side-wall.jpg",
      exploded:"/projects/side-wall-exploded.jpg",
    },
    description:
      "Full-length side wall for LHB coach with five rectangular window cutouts, red exterior panel finish, grey bottom stiffener, and inner grid frame of channels and angles.",
    features: [
      "Five rectangular window cutouts with precision sizing",
      "Red outer panels with grey bottom stiffener",
      "Inner grid frame of channels and angles",
      "Structural rigidity maintained under coach body loads",
    ],
    dfm: "Inner grid designed for weld assembly; channels and angles sized for standard stock.",
  },
  {
    id: "cad-003",
    title: "1500L Fuel Tank",
    partNo: "—",
    subtitle: "Underframe Fuel Storage — LHB Coach",
    industry: "Railway (LHB Coach)",
    material: "SS 304",
    category: "Tank / Pressure Vessel",
    tags: ["SS 304", "Fuel Tank", "Anti-Surge", "Railway"],
    images: {
      main:    "/projects/fuel-tank.jpg",
      exploded:"/projects/fuel-tank-exploded.jpg",
    },
    description:
      "1,500-litre under-coach fuel tank with anti-slip top surface, internal perforated surge baffles, flanged manholes for inspection, and underframe corner mounting brackets.",
    features: [
      "Anti-slip chequered top surface",
      "Internal perforated surge baffles",
      "Flanged manholes for access and inspection",
      "Underframe corner mounting brackets",
    ],
    dfm: "Flanged connections enable field disassembly; baffles are perforated press-formed SS 304 sheet.",
  },
  {
    id: "cad-004",
    title: "450L Water Tank",
    partNo: "—",
    subtitle: "Horizontal Cylindrical Vessel — LHB Coach",
    industry: "Railway (LHB Coach)",
    material: "SS 316L",
    category: "Tank / Pressure Vessel",
    tags: ["SS 316L", "Cylindrical Vessel", "Dished Ends", "Railway"],
    images: {
      main:    "/projects/water-tank.jpg",
      exploded:"/projects/water-tank-exploded.jpg",
    },
    description:
      "Horizontal 450-litre water storage vessel in SS 316L with dished end caps, internal perforated strainer disc, and U-saddle clamp supports for under-coach mounting.",
    features: [
      "Horizontal cylindrical form with dished end caps",
      "Internal perforated strainer disc",
      "U-saddle clamp mounting system",
      "SS 316L for potable water corrosion resistance",
    ],
    dfm: "U-saddle allows shimmed alignment; strainer disc is removable for maintenance.",
  },
  {
    id: "cad-005",
    title: "Air Reservoir",
    partNo: "—",
    subtitle: "Pneumatic Brake Pressure Vessel — LHB Coach",
    industry: "Railway (LHB Coach)",
    material: "Mild Steel",
    category: "Pressure Vessel",
    tags: ["Mild Steel", "Pressure Vessel", "Pneumatic", "Brake System"],
    images: {
      main:    "/projects/air-reservoir.jpg",
      exploded:"/projects/air-reservoir-2.jpg",
    },
    description:
      "Horizontal cylindrical air reservoir for LHB coach pneumatic brake system. Mounted on U-saddle cradle brackets with triangular gusset reinforcements; threaded nozzle ports for brake line connections.",
    features: [
      "Horizontal cylindrical pressure vessel",
      "U-saddle cradle brackets with triangular gusset reinforcements",
      "Threaded nozzle ports for pneumatic lines",
      "Designed for cyclic pressure loading in brake systems",
    ],
    dfm: "Gusseted saddle brackets from flat plate; threaded ports machined after shell welding.",
  },
  {
    id: "cad-006",
    title: "3-Tier Berth System",
    partNo: "LS61214 / LS61216 / LS61217",
    subtitle: "Passenger Berth Assembly — LHB Coach",
    industry: "Railway (LHB Coach)",
    material: "SS 409M + Mild Steel",
    category: "Assembly / Mechanism",
    tags: ["SS 409M", "Assembly", "Mechanism", "Railway Seating"],
    images: {
      main:    "/projects/berth-1.jpg",
      gallery: [
        "/projects/berth-2.jpg",
        "/projects/berth-3.jpg",
        "/projects/berth-4.jpg",
        "/projects/berth-5.jpg",
        "/projects/berth-6.jpg",
        "/projects/berth-7.jpg",
        "/projects/berth-8.jpg",
        "/projects/berth-9.jpg",
        "/projects/berth-10.jpg",
      ],
    },
    description:
      "Complete 3-tier passenger berth for LHB sleeper coach. Lower berth (LS61214) with perimeter tube frame; middle berth (LS61216) with turnbuckle-adjustable legs; upper berth (LS61217) with gas strut folding mechanism. Full assembly includes vertical pole, grab rail/ladder, folding footrest, and luggage rack.",
    features: [
      "Lower berth: perimeter tube frame (LS61214)",
      "Middle berth: turnbuckle-adjustable legs (LS61216)",
      "Upper berth: gas strut folding mechanism (LS61217)",
      "Vertical support pole, grab rail, and ladder",
      "Folding footrest and overhead luggage rack",
    ],
    dfm: "Turnbuckle legs allow field-level adjustment; gas struts are standard railway-grade units.",
  },
  {
    id: "cad-007",
    title: "Filter Vessel (VSL 8-6)",
    partNo: "VSL 8-6",
    subtitle: "Vertical Pressure Filter — Water Treatment",
    industry: "Water Treatment",
    material: "Carbon Steel / MS",
    category: "Pressure Vessel / Piping",
    tags: ["Pressure Vessel", "Water Treatment", "Piping", "Filter"],
    images: {
      main: "/projects/filter-vessel.jpg",
    },
    description:
      "1500×2000mm vertical cylindrical filter pressure vessel with four support legs, manway with lifting lugs, internal underdrain laterals, and color-coded external piping (pink = influent, yellow = backwash, blue = effluent butterfly valves).",
    features: [
      "1500mm dia × 2000mm height vertical vessel",
      "Four structural support legs",
      "Manway with lifting lugs for maintenance",
      "Internal underdrain lateral system",
      "Color-coded external piping: pink / yellow / blue",
    ],
    dfm: "Legs anchor-bolt mounted; manway lifting lugs allow lid removal with standard chain block.",
  },
  {
    id: "cad-008",
    title: "6000 LPH RO Plant",
    partNo: "80-80-40 mm · 3-Layer",
    subtitle: "Reverse Osmosis Skid — Water Treatment",
    industry: "Water Treatment",
    material: "MS Structural Skid",
    category: "Plant & Piping Design",
    tags: ["RO Plant", "Skid Design", "Piping", "Water Treatment"],
    images: {
      main: "/projects/ro-plant.jpg",
    },
    description:
      "6,000 LPH RO plant on fabricated MS structural skid. Three-layer membrane array (80-80-40mm), vertical multistage high-pressure pump, skid-mounted control panel, and color-coded ball and butterfly valve piping.",
    features: [
      "6000 LPH design capacity",
      "Three-layer membrane array: 80-80-40mm",
      "Vertical multistage high-pressure pump",
      "Skid-mounted control panel",
      "Color-coded piping — ball and butterfly valves",
    ],
    dfm: "Fully pre-assembled skid for minimal site installation; membrane housings are standard off-the-shelf.",
  },
];
