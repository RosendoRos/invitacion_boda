import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const RsvpForm: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 px-4 bg-primary-brown" id="rsvp">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Confirma tu Asistencia</h2>
          <div className="w-24 h-[2px] bg-primary-cream mx-auto"></div>
          <p className="mt-6 text-primary-light max-w-2xl mx-auto">
            Por favor, confirma tu asistencia antes del 15 de octubre, 2025. 
            Esperamos compartir este día tan especial contigo.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="p-0"> {/* Eliminé el padding interno para que el iframe ocupe todo el espacio */}
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScHQqooECXXnB8o5guTe6XAgMox0985jy-u8B-XvRMWX8iHyA/viewform?embedded=true" 
              width="100%" 
              height="1269" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="min-h-[1269px] w-full"
            >
              Cargando…
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};