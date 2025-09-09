import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      subDetails: 'Mon-Sat: 9AM - 6PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@jeedaar.com',
      subDetails: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Corporate Office',
      subDetails: 'Mumbai, Maharashtra'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider fade-in-up">
              Get In Touch
            </span>
          </div>
          <h2 className="heading-lg text-foreground fade-in-up" style={{ animationDelay: '0.1s' }}>
            Let's Build Something 
            <span className="gradient-text"> Extraordinary</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="heading-md text-foreground mb-6">
                Contact Information
              </h3>
              <p className="body-md mb-8">
                Our team of construction experts is here to help you bring your vision to life. 
                Whether it's a residential, commercial, or industrial project, we have the expertise 
                and experience to deliver excellence.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={info.title}
                    className="glass-card p-6 rounded-xl hover:shadow-card transition-all duration-300 group fade-in-up"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-lg text-primary font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subDetails}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="fade-in-up pt-8" style={{ animationDelay: '0.7s' }}>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                  <button 
                    key={social}
                    className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all duration-300 group"
                  >
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                      {social[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="glass-card p-8 rounded-2xl shadow-card">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="lg" 
                    className="w-full group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto animate-pulse-subtle">
                    <CheckCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your interest. Our team will contact you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;