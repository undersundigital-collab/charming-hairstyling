import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
  mapsLink: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, mapsLink }) => {
  return (
    <section id="testemunhos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">O que dizem os clientes</h2>
          <div className="flex justify-center items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-slate-600">Classificação média excelente no Google</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-cream p-8 rounded-2xl relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-rose-200">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.272 15.65 15.272C16.85 15.272 17.74 16.07 17.74 17.543C17.74 18.843 19.055 19.912 20.222 19.912C21.786 19.912 23 18.17 23 16.637C23 14.545 20.69 11.235 17.152 11.235C15.271 11.235 13.9 12.036 12.984 12.393L13.006 11.139C13.056 9.697 14.693 5.488 19.782 2L20.457 3.518C16.635 6.425 15.176 9.531 15.109 11.196C15.42 11.18 15.753 11.168 16.095 11.168C19.865 11.168 23 13.37 23 16.592C23 19.704 20.817 22 18.067 22C15.698 22 14.017 21 14.017 21ZM6.017 21L6.017 18C6.017 16.896 6.321 15.272 7.65 15.272C8.85 15.272 9.74 16.07 9.74 17.543C9.74 18.843 11.055 19.912 12.222 19.912C13.786 19.912 15 18.17 15 16.637C15 14.545 12.69 11.235 9.152 11.235C7.271 11.235 5.9 12.036 4.984 12.393L5.006 11.139C5.056 9.697 6.693 5.488 11.782 2L12.457 3.518C8.635 6.425 7.176 9.531 7.109 11.196C7.42 11.18 7.753 11.168 8.095 11.168C11.865 11.168 15 13.37 15 16.592C15 19.704 12.817 22 10.067 22C7.698 22 6.017 21 6.017 21Z" />
                </svg>
              </div>
              
              <p className="text-slate-700 mb-6 relative z-10 italic">"{t.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-200 flex items-center justify-center text-accent font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">{t.name}</h5>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href={mapsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-slate-500 border-b border-slate-300 hover:text-accent hover:border-accent transition-colors pb-1"
          >
            Ver mais reviews no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;