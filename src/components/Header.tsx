import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-4"
        >
          <p className="text-primary-cream font-serif italic text-xl md:text-2xl">Nos casamos</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mb-8"
        >
          <h1 className="text-primary-light font-serif text-5xl md:text-7xl mb-4">
            JENNI & JORGE
          </h1>
          <div className="flex justify-center items-center">
            <div className="h-[1px] w-16 md:w-24 bg-primary-cream"></div>
            <Heart className="mx-4 text-primary-cream w-6 h-6" />
            <div className="h-[1px] w-16 md:w-24 bg-primary-cream"></div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <p className="text-primary-light font-serif text-xl md:text-2xl">
            13 de Diciembre, 2025
          </p>
          <p className="text-primary-cream font-sans mt-2">
            Centro de Eventos | Ciudad de México
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="mt-12"
        >
          <a 
            href="#rsvp" 
            className="inline-block px-8 py-3 border-2 border-primary-cream text-primary-cream font-sans font-medium tracking-wide uppercase text-sm hover:bg-primary-cream hover:text-primary-dark transition-all duration-300"
          >
            Confirmar Asistencia
          </a>
        </motion.div>
      </div>
    </header>
  );
};