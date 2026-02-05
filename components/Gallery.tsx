import React from 'react';

const Gallery: React.FC = () => {
  // Static gallery images
  const images = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
    '/images/gallery-6.jpg',
    '/images/gallery-7.jpg',
    '/images/gallery-8.jpg'
  ];

  return (
    <section id="galeria" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">A Nossa Galeria</h2>
            <p className="text-slate-600">Espreite alguns dos nossos trabalhos recentes.</p>
          </div>
          <a href="https://www.instagram.com/explore/locations/776282859/cabeleireiro-charming/" target="_blank" rel="noreferrer" className="text-accent font-medium hover:text-primary transition-colors">
            Ver mais no Instagram →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-xl group ${idx === 0 || idx === 7 ? 'col-span-2 row-span-2' : 'col-span-1'
                }`}
            >
              <img
                src={src}
                alt={`Trabalho realizado no salão Charming ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;