import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.fade-in-up, .scale-in');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/buildingdimensions-cZ4iZYLXddVK6l99MTJ236nM/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 space-y-8">
        
        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="heading-xl fade-in-up">
            Jeedaar Builders
          </h1>
          <h2 className="heading-lg text-foreground fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building the Future
          </h2>
        </div>

        {/* Subtitle */}
        <p className="body-lg max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.4s' }}>
          With 40+ years of excellence, we deliver premium construction, 
          modern architecture, and sustainable building solutions that define tomorrow's skylines.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="premium" size="xl" className="group">
            Get Started Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="hero" size="xl" className="group">
            <Play className="mr-2 w-5 h-5" />
            Watch Our Story
          </Button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;