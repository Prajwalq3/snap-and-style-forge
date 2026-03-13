import HeroSection from "@/components/HeroSection";
import TaglineSection from "@/components/TaglineSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import SpeakersSection from "@/components/SpeakersSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TaglineSection />
      <AboutSection />
      <VisionSection />
      <SpeakersSection />
      <SponsorsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
