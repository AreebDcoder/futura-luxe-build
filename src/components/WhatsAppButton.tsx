import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const phoneNumber = '+923009564514';
  const message = 'Hello! I would like to inquire about your construction services.';
  
  useEffect(() => {
    // Show button after 5 seconds with popup animation
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
      setShowPopup(true);
      
      // Hide popup after 8 seconds but keep button visible
      setTimeout(() => {
        setShowPopup(false);
      }, 8000);
      
      // Stop pulsing animation after 15 seconds
      setTimeout(() => {
        setIsAnimating(false);
      }, 15000);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleClosePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 group ${
          isAnimating ? 'animate-pulse' : ''
        } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Ripple Effect */}
        {isAnimating && (
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
        )}
      </button>

      {/* Popup Message */}
      {showPopup && (
        <div 
          className={`fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-4 max-w-sm border border-gray-200 transition-all duration-500 ${
            showPopup ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={handleClosePopup}
            className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
          
          {/* Popup Content */}
          <div className="flex items-start space-x-3 pr-6">
            <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Chat with us!</h4>
              <p className="text-sm text-gray-600 mb-3">
                Need help with your construction project? We're here to assist you!
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Start Chat
              </button>
            </div>
          </div>
          
          {/* Arrow pointing to button */}
          <div className="absolute bottom-0 right-8 transform translate-y-full">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
