import React, { useState } from 'react';
import { Phone, MapPin, Clock, ExternalLink, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Content } from '../types';

interface ContactProps {
  content: Content;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const { contact, business } = content;
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as { [key: string]: string };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });

      if (response.ok) {
        setFormState('success');

        // Google Analytics tracking
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            'event_category': 'form',
            'event_label': 'contact_message'
          });
        }
      } else {
        throw new Error('Form submission failed');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('error');
    }
  };

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
            {formState === 'success' ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-800">Mensagem Enviada!</h4>
                <p className="text-slate-600">
                  Obrigado pelo seu contacto. Responderemos o mais breve possível.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-6 text-accent font-medium hover:text-primary transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                name="contact"
                className="space-y-4"
                onSubmit={handleSubmit}
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

                {formState === 'error' && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm">
                    <AlertCircle size={16} />
                    <span>Ocorreu um erro ao enviar. Por favor tente novamente ou ligue-nos.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-accent-hover transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      A enviar...
                    </>
                  ) : contact.form.buttonText}
                </button>
              </form>
            )}
            {formState !== 'success' && (
              <p className="text-xs text-slate-400 mt-4 text-center">
                Ao enviar, concorda em ser contactado para agendamento.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;