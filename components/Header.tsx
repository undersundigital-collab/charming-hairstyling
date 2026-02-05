import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

interface HeaderProps {
  businessName: string;
}

const Header: React.FC<HeaderProps> = ({ businessName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Testemunhos', href: '#testemunhos' },
    { name: 'Contactos', href: '#contactos' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 rounded-full transition-transform group-hover:rotate-12">
            <Scissors size={20} />
          </div>
          <span className={`text-xl font-serif font-bold tracking-tight ${scrolled ? 'text-primary' : 'text-primary'}`}>
            {businessName}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-accent transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg md:hidden flex flex-col p-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="py-3 text-slate-700 hover:text-accent font-medium border-b border-slate-50 last:border-none"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;