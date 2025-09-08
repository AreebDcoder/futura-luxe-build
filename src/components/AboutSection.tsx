import { useEffect, useRef } from 'react';
import { Award, Users, Zap, Leaf } from 'lucide-react';
import heroConstruction from '@/assets/hero-construction.jpg';

const AboutSection = () => {
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

  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'Uncompromising standards in every project we undertake'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology and modern construction methods'
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Four decades of reliability and client satisfaction'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Eco-friendly practices for a greener tomorrow'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider fade-in-up">
                  About Jeedaar Builders
                </span>
              </div>
              <h2 className="heading-lg text-foreground fade-in-up" style={{ animationDelay: '0.1s' }}>
                Four Decades of 
                <span className="gradient-text"> Excellence</span>
              </h2>
            </div>

            <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="body-lg">
                Since 1984, Jeedaar Builders has been at the forefront of premium construction, 
                creating architectural marvels that define modern skylines across India. Our legacy 
                is built on unwavering commitment to quality, innovation, and client satisfaction.
              </p>
              <p className="body-md">
                We specialize in luxury residential towers, commercial complexes, and sustainable 
                infrastructure projects that not only meet today's needs but anticipate tomorrow's 
                requirements. Every project we undertake reflects our dedication to excellence and 
                our vision of building a better future.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={value.title}
                    className="glass-card p-6 rounded-xl hover:shadow-card transition-all duration-300 group"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img 
                src={heroConstruction} 
                alt="Jeedaar Builders Construction Excellence" 
                className="w-full h-[600px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-primary/10"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-xl shadow-card">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold gradient-text">PKR 500+ Cr</div>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
            </div>

            {/* Floating Award Card */}
            <div className="absolute -top-8 -right-8 glass-card p-4 rounded-xl shadow-card">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-foreground">ISO Certified</div>
                  <div className="text-xs text-muted-foreground">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;