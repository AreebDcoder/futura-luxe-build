import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsAnimating(false);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-all duration-500 ${
      !isAnimating ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-24 h-24 gradient-primary rounded-2xl flex items-center justify-center shadow-premium animate-pulse-subtle mx-auto">
            <span className="text-primary-foreground font-bold text-4xl">J</span>
          </div>
          <div className="absolute inset-0 w-24 h-24 rounded-2xl animate-glow mx-auto"></div>
        </div>

        {/* Company Name */}
        <div className="space-y-2">
          <h1 className="heading-lg gradient-text animate-fade-in-up">
            Jeedaar Builders
          </h1>
          <p className="body-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building Excellence Since 1984
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full gradient-primary transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-sm text-muted-foreground animate-pulse">
          Preparing your premium experience...
        </p>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary/3 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/4 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;