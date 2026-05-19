import { About } from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import { Contact } from "@/components/Contact";
import { CustomCursor } from "@/components/CustomCursor";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { SectionProgress } from "@/components/SectionProgress";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <BackToTop />
      <SectionProgress />
      <Navbar />
      <main className="relative overflow-x-hidden bg-background text-foreground">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
