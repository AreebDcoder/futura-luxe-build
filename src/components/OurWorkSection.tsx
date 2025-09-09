import { useEffect, useRef } from 'react';
import { Play, Film } from 'lucide-react';

const OurWorkSection = () => {
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

  const constructionVideos = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      description: 'Premium apartments with modern amenities',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop&crop=building',
      duration: '2:45'
    },
    {
      id: 2,
      title: 'Commercial Plaza Construction',
      description: 'State-of-the-art office complex development',
      thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=450&fit=crop&crop=building',
      duration: '3:20'
    },
    {
      id: 3,
      title: 'Infrastructure Development',
      description: 'Modern road and bridge construction',
      thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=450&fit=crop&crop=building',
      duration: '4:15'
    },
    {
      id: 4,
      title: 'Industrial Facility',
      description: 'Large-scale manufacturing plant construction',
      thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=450&fit=crop&crop=building',
      duration: '5:30'
    }
  ];

  return (
    <section ref={sectionRef} id="our-work" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/6 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider fade-in-up">
              Our Work
            </span>
          </div>
          <h2 className="heading-lg text-foreground fade-in-up" style={{ animationDelay: '0.1s' }}>
            See Our Projects in 
            <span className="gradient-text"> Action</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            Watch our construction projects come to life. From initial groundbreaking to final completion, 
            witness the precision and excellence that defines Jeedaar Builders.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {constructionVideos.map((video, index) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-xl glass-card hover:shadow-card transition-all duration-500 scale-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                    <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-sm font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <Film className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurWorkSection;