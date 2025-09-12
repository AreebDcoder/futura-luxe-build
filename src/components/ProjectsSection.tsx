import { useEffect, useRef } from 'react';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
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

  // Display first 3 projects on homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='1'%3E%3Cpath d='M0 0h100v1H0zM0 20h100v1H0zM0 40h100v1H0zM0 60h100v1H0zM0 80h100v1H0z'/%3E%3Cpath d='M0 0v100h1V0zM20 0v100h1V0zM40 0v100h1V0zM60 0v100h1V0zM80 0v100h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider fade-in-up">
              Our Portfolio
            </span>
          </div>
          <h2 className="heading-lg text-foreground fade-in-up" style={{ animationDelay: '0.1s' }}>
            Premium 
            <span className="gradient-text"> Projects</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our portfolio of exceptional projects that showcase our commitment to architectural 
            excellence, innovative design, and superior construction quality.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group scale-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <Link to={`/projects/${project.id}`}>
                        <Button variant="hero" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <Link to={`/projects/${project.id}`}>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Meta */}
                  <div className="space-y-2 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-primary">{project.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link to="/projects">
            <Button variant="premium" size="lg">
              View All Projects
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;