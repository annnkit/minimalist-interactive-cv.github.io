
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ThemeObserver } from "@/components/theme-observer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <ThemeObserver />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <section id="hero">
            <HeroSection />
          </section>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
