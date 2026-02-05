import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Content } from '../types';

interface HeroProps {
  content: Content;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const { hero, business } = content;

  const trackCall = () => {
    // Basic tracking placeholder
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click', {
        'event_category': 'lead',
        'event_label': 'hero_button'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen pt-24 pb-12 flex items-center bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up z-10">
            <div className="inline-block px-3 py-1 bg-rose-100 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-2">
              Quarteira, Algarve
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
              {hero.title}
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${business.phone}`} 
                onClick={trackCall}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-transform hover:scale-105 shadow-lg shadow-slate-200"
              >
                <Phone size={18} />
                {hero.ctaPrimary}
              </a>
              <a 
                href="#contactos" 
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-colors"
              >
                {hero.ctaSecondary}
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="pt-4 border-t border-slate-200/60">
              <p className="text-sm text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Aberto hoje: <span className="font-semibold text-slate-700">{business.hours.weekdays.split(':')[1]}</span>
              </p>
              <p className="text-sm text-slate-400 mt-1">{business.address}</p>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="https://picsum.photos/800/1000?grayscale" 
              alt="Interior do Cabeleireiro Charming" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs">
              <p className="font-serif italic text-slate-800">"{business.tagline}"</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;