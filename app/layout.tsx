import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balaji V — Mechanical Design Engineer",
  description:
    "Portfolio of Balaji V — CSWP-certified Mechanical Design Engineer specialising in FEA, railway coach components, and water treatment equipment.",
  keywords:
    "FEA Engineer, CAE Engineer, Mechanical Design Engineer, SolidWorks, CSWP, Railway Components, Pressure Vessel, Water Treatment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
