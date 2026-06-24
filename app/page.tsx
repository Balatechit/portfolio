import Navbar  from "@/components/Navbar";
import Hero    from "@/components/Hero";
import About   from "@/components/About";
import FEASection from "@/components/FEASection";
import CADSection from "@/components/CADSection";
import Skills  from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer  from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FEASection />
      <CADSection />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
