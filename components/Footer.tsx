import React from 'react';
import { Scissors } from 'lucide-react';
import { Content } from '../types';

interface FooterProps {
  content: Content;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="text-accent">
              <Scissors size={20} />
            </div>
            <span className="text-lg font-serif font-bold text-white tracking-tight">
              {content.business.name}
            </span>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#inicio" className="hover:text-white transition-colors">Início</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#contactos" className="hover:text-white transition-colors">Contactos</a>
          </div>

          <div className="text-sm">
            &copy; {currentYear} {content.business.name}. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;