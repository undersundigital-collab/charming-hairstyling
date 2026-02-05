import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

interface StickyCallButtonProps {
  phone: string;
}

const StickyCallButton: React.FC<StickyCallButtonProps> = ({ phone }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approx 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const trackCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click', {
        'event_category': 'lead',
        'event_label': 'sticky_mobile'
      });
    }
  };

  return (
    <a
      href={`tel:${phone}`}
      onClick={trackCall}
      className="md:hidden fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl animate-bounce-in flex items-center gap-2 hover:bg-green-600 transition-colors"
      aria-label="Ligar agora"
    >
      <Phone size={24} fill="currentColor" />
      <span className="font-bold">Ligar</span>
    </a>
  );
};

export default StickyCallButton;