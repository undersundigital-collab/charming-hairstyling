import React from 'react';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Content } from '../types';

interface ContactProps {
  content: Content;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const { contact, business } = content;

  return (
    <section id="contactos" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info & Map */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{contact.title}</h2>
              <p className="text-slate-400 text-lg">{contact.subtitle}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-full text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Morada</h3>
                  <p className="text-slate-300 mb-2">{business.address}</p>
                  <a 
                    href={business.mapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                  >
                    Como chegar <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-full text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefone</h3>
                  <p className="text-slate-300 mb-2">Ligue para marcações rápidas.</p>
                  <a 
                    href={`tel:${business.phone}`} 
                    className="text-xl font-bold text-white hover:text-accent transition-colors"
                  >
                    {business.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-full text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Horário</h3>
                  <div className="space-y-1 text-slate-300">
                    <p>{business.hours.weekdays}</p>
                    <p>{business.hours.saturday}</p>
                    <p className="text-rose-400">{business.hours.sunday}</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">*Confirmar horários no Google</p>
                </div>
              </div>
            </div>

            {/* Embed Map - Lazy loaded */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.045612345678!2d-8.1032097!3d37.0676756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab5538f7381d5%3A0xa3cfef5d15460857!2sCabeleireiro%20Charming!5e0!3m2!1sen!2spt!4v1625000000000!5m2!1sen!2spt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Mapa Cabeleireiro Charming"
                aria-label="Mapa Cabeleireiro Charming"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            
            {/* Netlify Form Setup */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required 
                  placeholder={contact.form.namePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  required 
                  placeholder={contact.form.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  required
                  placeholder={contact.form.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-accent-hover transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              >
                {contact.form.buttonText}
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-4 text-center">
              Ao enviar, concorda em ser contactado para agendamento.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;