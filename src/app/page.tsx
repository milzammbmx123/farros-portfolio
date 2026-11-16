import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WorksGallery from "@/components/WorksGallery";
import GitHubSection from "@/components/GitHubSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const MARQUEE_ITEMS = [
  "3D Visualization",
  "Architectural Rendering",
  "UI/UX Design",
  "Figma Prototyping",
  "IT Support",
  "Machine Learning",
  "Web Engineering",
  "Blender · Cycles",
  "Next.js · TypeScript",
  "Photography · Lightroom",
  "3D Visualization",
  "Architectural Rendering",
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
        <ExperienceSection />
        <CaseStudiesSection />
        <WorksGallery />
        <GitHubSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
