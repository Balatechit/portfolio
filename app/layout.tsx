import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balaji V — Mechanical Design & FEA Simulation Engineer",
  description:
    "Portfolio of Balaji V, CSWP-certified Mechanical Design and FEA Simulation Engineer. Structural analysis, pressure vessel design, railway coach components, water treatment equipment.",
  keywords: [
    "Mechanical Design Engineer","FEA Engineer","SolidWorks Simulation",
    "CAE Engineer","Structural Analysis","Pressure Vessel Design",
    "CSWP","Railway Components","Water Treatment","Design Validation","GD&T",
  ],
  authors: [{ name: "Balaji V" }],
  openGraph: {
    title: "Balaji V — Mechanical Design & FEA Simulation Engineer",
    description: "CSWP-certified engineer specializing in FEA, structural analysis, and precision mechanical design.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
