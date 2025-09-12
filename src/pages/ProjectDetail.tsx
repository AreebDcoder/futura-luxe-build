import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Building, 
  Users, 
  Clock, 
  IndianRupee, 
  Award,
  CheckCircle,
  Lightbulb,
  Target,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjectById, projects } from '@/data/projects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState(getProjectById(Number(id)));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [relatedProjects, setRelatedProjects] = useState(projects.slice(0, 3));

  useEffect(() => {
    if (id) {
      const foundProject = getProjectById(Number(id));
      setProject(foundProject);
      
      if (foundProject) {
        // Get related projects from same category
        const related = projects
          .filter(p => p.id !== foundProject.id && p.category === foundProject.category)
          .slice(0, 3);
        
        // If not enough related projects, fill with others
        if (related.length < 3) {
          const others = projects
            .filter(p => p.id !== foundProject.id && p.category !== foundProject.category)
            .slice(0, 3 - related.length);
          setRelatedProjects([...related, ...others]);
        } else {
          setRelatedProjects(related);
        }
      }
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Building className="w-8 h-8 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Project Not Found</h2>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/projects')} variant="premium">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'upcoming':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{project.title}</span>
          </div>

          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/projects')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </Button>

          {/* Project Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/90 text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full">
                  {project.category}
                </span>
                <span className={`text-sm font-semibold px-4 py-2 rounded-full border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <h1 className="heading-xl gradient-text mb-6">
                {project.title}
              </h1>
              
              <p className="body-lg text-muted-foreground mb-8">
                {project.fullDescription}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: MapPin, label: 'Location', value: project.location },
                  { icon: Calendar, label: 'Year', value: project.year },
                  { icon: Building, label: 'Area', value: project.area },
                  { icon: Users, label: 'Client', value: project.client }
                ].map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-semibold text-foreground">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-premium">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover"
                />
                
                {/* Image Navigation */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">Project Overview</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Clock, label: 'Duration', value: project.duration },
                    { icon: IndianRupee, label: 'Investment', value: project.cost },
                    { icon: Users, label: 'Architect', value: project.architect },
                    { icon: Building, label: 'Floors', value: project.specifications.floors.toString() }
                  ].map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{detail.label}</div>
                          <div className="font-semibold text-foreground">{detail.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Features */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{project.specifications.floors}</div>
                      <div className="text-sm text-muted-foreground">Floors</div>
                    </div>
                    {project.specifications.units && (
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{project.specifications.units}</div>
                        <div className="text-sm text-muted-foreground">Units</div>
                      </div>
                    )}
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{project.specifications.parking}</div>
                      <div className="text-sm text-muted-foreground">Parking Spaces</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Amenities</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.specifications.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              {project.challenges && project.solutions && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass-card p-6 rounded-2xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <Target className="w-6 h-6 text-orange-500" />
                      <h3 className="text-lg font-semibold text-foreground">Challenges</h3>
                    </div>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="glass-card p-6 rounded-2xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <Lightbulb className="w-6 h-6 text-blue-500" />
                      <h3 className="text-lg font-semibold text-foreground">Solutions</h3>
                    </div>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Awards */}
              {project.awards && (
                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-lg font-semibold text-foreground">Awards</h3>
                  </div>
                  <div className="space-y-3">
                    {project.awards.map((award, index) => (
                      <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="text-sm font-medium text-yellow-800">{award}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact CTA */}
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Interested in Similar Project?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Contact us to discuss your project requirements and get a customized proposal.
                </p>
                <div className="space-y-3">
                  <Link to="/contact">
                    <Button variant="premium" className="w-full">
                      <Mail className="mr-2 w-4 h-4" />
                      Get Quote
                    </Button>
                  </Link>
                  <Button variant="hero" className="w-full">
                    <Phone className="mr-2 w-4 h-4" />
                    Call Now
                  </Button>
                </div>
              </div>

              {/* Project Navigation */}
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Related Projects</h3>
                <div className="space-y-3">
                  {relatedProjects.map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      to={`/projects/${relatedProject.id}`}
                      className="block group"
                    >
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                            {relatedProject.title}
                          </div>
                          <div className="text-xs text-muted-foreground">{relatedProject.location}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
