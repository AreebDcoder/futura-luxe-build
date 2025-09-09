import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import OurWorkSection from '@/components/OurWorkSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="px-4 md:px-8 lg:px-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <OurWorkSection />
        <AchievementsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
