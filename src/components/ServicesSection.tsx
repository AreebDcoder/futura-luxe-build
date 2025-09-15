import { useEffect, useRef } from 'react';
import { Wrench, Building, Palette, Construction, Home, TreePine, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
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

  const services = [
    {
      icon: Wrench,
      title: 'Renovation',
      description: 'Complete renovation services for residential and commercial properties.',
      features: [
        'Home Renovations',
        'Office Makeovers',
        'Structural Modifications',
        'Modern Upgrades',
        'Heritage Restorations'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building,
      title: 'Construction',
      description: 'Comprehensive construction services from residential to large-scale projects.',
      features: [
        'Houses & Villas',
        'Farm Houses',
        'Commercial Buildings',
        'Industrial Facilities',
        'Multi-story Complexes'
      ],
      color: 'from-green-500 to-green-600',
      subServices: [
        { icon: Home, name: 'Houses' },
        { icon: TreePine, name: 'Farm Houses' },
        { icon: Building2, name: 'Buildings' }
      ]
    },
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Professional interior design services that transform spaces into beautiful environments.',
      features: [
        'Space Planning',
        'Custom Furniture',
        'Lighting Design',
        'Color Consultation',
        'Complete Furnishing'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Construction,
      title: 'Roads & Infrastructure',
      description: 'Infrastructure development including roads, drainage, and utility systems.',
      features: [
        'Road Construction',
        'Drainage Systems',
        'Utility Installation',
        'Site Development',
        'Infrastructure Planning'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider fade-in-up">
              Our Services
            </span>
          </div>
          <h2 className="heading-lg text-foreground fade-in-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive Construction 
            <span className="gradient-text"> Solutions</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            From concept to completion, we offer a full range of construction and design services 
            to bring your vision to life with exceptional quality and craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group glass-card p-8 rounded-2xl hover:shadow-premium transition-all duration-500 scale-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Sub-services for Construction */}
                {service.subServices && (
                  <div className="flex items-center space-x-6 mb-6 p-4 bg-primary/5 rounded-lg">
                    {service.subServices.map((subService, subIndex) => {
                      const SubIcon = subService.icon;
                      return (
                        <div key={subIndex} className="flex items-center space-x-2 text-sm font-medium text-primary">
                          <SubIcon className="w-4 h-4" />
                          <span>{subService.name}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;