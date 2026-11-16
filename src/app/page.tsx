import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import WorksGallery from "@/components/WorksGallery";
import GitHubSection from "@/components/GitHubSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const MARQUEE_ITEMS = [
  "3D Visualization",
  "Architectural Rendering",
  "Interior Design",
  "Hard Surface Modeling",
  "Machine Learning",
  "Web Engineering",
  "Blender · Cycles",
  "Next.js · TypeScript",
  "3D Visualization",
  "Architectural Rendering",
  "Interior Design",
  "Hard Surface Modeling",
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest"
      >
        Lompat ke konten
      </a>

      <Navbar />

      <main id="konten">
        <HeroSection />
        <Marquee items={MARQUEE_ITEMS} />
        <AboutSection />
        <WorksGallery />
        <GitHubSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
