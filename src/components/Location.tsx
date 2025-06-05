import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Location: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const eventDetails = [
    {
      icon: <Calendar className="w-5 h-5 text-primary-brown" />,
      title: "Fecha",
      details: "15 de Noviembre, 2025"
    },
    {
      icon: <Clock className="w-5 h-5 text-primary-brown" />,
      title: "Hora",
      details: "4:00 PM - Ceremonia\n6:00 PM - Recepción"
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary-brown" />,
      title: "Lugar",
      details: "Centro de Eventos Elegantes\nAv. Paseo de la Reforma 296\nCiudad de México"
    }
  ];

  // Reemplaza este iframe con el que obtuviste de Google Maps
  const MapEmbed = () => (
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8887340510226!2d-99.13539892433894!3d19.43260778180838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b75aa014d%3A0x17e9660f483c8e6e!2sPaseo%20de%20la%20Reforma%20296%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1717719192525!5m2!1ses-419!2smx" 
      width="100%" 
      height="400" 
      style={{ border: 0 }} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg"
    ></iframe>
  );

  return (
    <section className="py-16 md:py-24 px-4 bg-primary-light" id="location">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-4">Ubicación</h2>
          <div className="w-24 h-[2px] bg-primary-brown mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <motion.div 
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {eventDetails.map((detail, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-primary-cream p-3 rounded-full mr-4">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-lg font-serif text-primary-dark">{detail.title}</h3>
                  <p className="mt-1 text-primary-dark whitespace-pre-line">{detail.details}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <a 
                href="https://maps.google.com/?q=19.432608,-99.133209" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary-blue text-white font-medium text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
              >
                Ver en Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-3 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MapEmbed />
          </motion.div>
        </div>
      </div>
    </section>
  );
};