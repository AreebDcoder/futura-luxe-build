import { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Home, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Get form data from navigation state
  const formData = location.state?.formData;
  const submissionTime = location.state?.submissionTime || new Date().toISOString();

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setAnimationComplete(true), 100);
    
    // If no form data, redirect to home after 3 seconds
    if (!formData) {
      setTimeout(() => navigate('/'), 3000);
    }
  }, [formData, navigate]);

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Success Icon with Animation */}
        <div className={`mb-8 transform transition-all duration-1000 ${animationComplete ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <div className="relative">
            <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center mx-auto shadow-premium animate-pulse-subtle">
              <CheckCircle className="w-16 h-16 text-primary-foreground" />
            </div>
            {/* Ripple Effect */}
            <div className="absolute inset-0 w-32 h-32 border-4 border-primary/30 rounded-full animate-ping mx-auto"></div>
            <div className="absolute inset-0 w-32 h-32 border-2 border-primary/20 rounded-full animate-ping mx-auto" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Success Message */}
        <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${animationComplete ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="heading-xl gradient-text">
            Message Sent Successfully!
          </h1>
          
          <p className="body-lg text-muted-foreground max-w-lg mx-auto">
            Thank you for reaching out to Jeedaar Builders. We've received your inquiry and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Submission Details */}
        {formData && (
          <div className={`mt-8 glass-card p-6 rounded-2xl shadow-card text-left max-w-md mx-auto transform transition-all duration-1000 delay-500 ${animationComplete ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="font-semibold text-foreground mb-4 text-center">Submission Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span className="font-medium text-foreground">{formData.firstName} {formData.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email:</span>
                <span className="font-medium text-foreground">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phone:</span>
                <span className="font-medium text-foreground">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Submitted:</span>
                <span className="font-medium text-foreground">{formatTime(submissionTime)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className={`mt-10 space-y-4 transform transition-all duration-1000 delay-700 ${animationComplete ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="premium" 
              size="lg" 
              onClick={() => navigate('/')}
              className="group"
            >
              <Home className="mr-2 w-5 h-5" />
              Back to Home
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => navigate('/#contact')}
              className="group"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Send Another Message
            </Button>
          </div>
          
          {/* Emergency Contact */}
          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground mb-2">Need immediate assistance?</p>
            <div className="flex items-center justify-center space-x-2 text-primary font-medium">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>

        {/* Timeline Information */}
        <div className={`mt-12 transform transition-all duration-1000 delay-900 ${animationComplete ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="font-semibold text-foreground mb-6">What Happens Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Review',
                description: 'Our team reviews your project requirements',
                time: 'Within 2 hours'
              },
              {
                step: '2', 
                title: 'Contact',
                description: 'We reach out to discuss your project in detail',
                time: 'Within 24 hours'
              },
              {
                step: '3',
                title: 'Proposal',
                description: 'Receive a customized project proposal',
                time: 'Within 3-5 days'
              }
            ].map((item, index) => (
              <div key={item.step} className="text-center" style={{ animationDelay: `${1 + index * 0.2}s` }}>
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold shadow-card">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                <span className="text-xs text-primary font-medium">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
