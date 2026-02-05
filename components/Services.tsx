import React from 'react';
import { Scissors, Wind, Layers, Sun, Palette, Sparkles, Brush } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  services: Service[];
}

const iconMap: Record<string, React.ReactNode> = {
  scissors: <Scissors size={24} />,
  wind: <Wind size={24} />,
  layers: <Layers size={24} />,
  sun: <Sun size={24} />,
  palette: <Palette size={24} />,
  sparkles: <Sparkles size={24} />,
  brush: <Brush size={24} />,
};

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">O que fazemos</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Serviços de Cabeleireiro</h3>
          <p className="text-slate-600">
            Oferecemos uma gama completa de cuidados capilares com produtos de qualidade e preços acessíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-rose-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white group-hover:bg-accent text-accent group-hover:text-white flex items-center justify-center mb-6 shadow-sm transition-colors duration-300">
                {iconMap[service.icon] || <Scissors size={24} />}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-accent transition-colors">
                Sob Consulta
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;