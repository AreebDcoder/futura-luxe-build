import { useEffect, useRef } from 'react';
import { Trophy, Star, Target, Users } from 'lucide-react';

const AchievementsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.fade-in-up, .scale-in');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Trophy,
      number: '40+',
      label: 'Years in Construction',
      description: 'Four decades of building excellence and trust'
    },
    {
      icon: Target,
      number: '70+',
      label: 'Premium Projects',
      description: 'Successfully delivered across major cities'
    },
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      description: 'Satisfied customers who trust our quality'
    },
    {
      icon: Star,
      number: '25+',
      label: 'Awards Won',
      description: 'Recognition for architectural excellence'
    }
  ];

  return (
    <section ref={sectionRef} id="achievements" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider fade-in-up">
              Our Achievements
            </span>
          </div>
          <h2 className="heading-lg text-foreground fade-in-up" style={{ animationDelay: '0.1s' }}>
            Numbers That 
            <span className="gradient-text"> Define Excellence</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our journey of excellence is measured not just in years, but in the trust of our clients, 
            the quality of our projects, and the recognition we've earned in the industry.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={achievement.label}
                className="text-center space-y-6 scale-in group"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Icon Container */}
                <div className="relative inline-block">
                  <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-premium transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 rounded-2xl animate-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Number */}
                <div>
                  <div className="text-5xl lg:text-6xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                </div>

                {/* Label & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {achievement.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto shadow-card">
            <div className="space-y-6">
              <h3 className="heading-md text-foreground">
                Ready to Build Your 
                <span className="gradient-text"> Dream Project?</span>
              </h3>
              <p className="body-md max-w-2xl mx-auto">
                Join the ranks of satisfied clients who have trusted Jeedaar Builders 
                for their premium construction needs. Let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 gradient-primary text-primary-foreground font-semibold rounded-lg hover:shadow-premium hover:scale-105 transition-all duration-300">
                  Start Your Project
                </button>
                <button className="px-8 py-3 glass border-2 border-primary/30 text-primary font-semibold rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;