import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCallButton from './components/StickyCallButton';
import { Content } from './types';

const App: React.FC = () => {
  const [content, setContent] = useState<Content | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('./content.json')
      .then(response => {
        if (!response.ok) {
           throw new Error(`Failed to load content: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setContent(data))
      .catch((err) => {
        console.error("Failed to load content.json:", err);
        setError("Não foi possível carregar o conteúdo do site.");
      });
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-800">
        <p>{error}</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-800"></div>
      </div>
    );
  }

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-rose-200 selection:text-slate-900">
      <Header businessName={content.business.name} />
      
      <main>
        <Hero content={content} />
        <Services services={content.services} />
        <Gallery />
        <Testimonials testimonials={content.testimonials} mapsLink={content.business.mapsLink} />
        <Contact content={content} />
      </main>

      <Footer content={content} />
      <StickyCallButton phone={content.business.phone} />
    </div>
  );
};

export default App;