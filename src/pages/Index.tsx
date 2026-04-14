import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTFStatsSection from "@/components/CTFStatsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TerminalSection from "@/components/TerminalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <SkillsSection />
      <ProjectsSection />
      <CTFStatsSection />
      <ExperienceSection />
      <TerminalSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
