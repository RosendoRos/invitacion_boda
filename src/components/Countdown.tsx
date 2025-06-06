import React from 'react';
import ReactCountdown from 'react-countdown';
import { motion } from 'framer-motion';

interface TimeProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const weddingDate = new Date('2025-12-13T16:00:00');
  
  const renderer = ({ days, hours, minutes, seconds, completed }: TimeProps & { completed: boolean }) => {
    if (completed) {
      return <span className="text-xl">¡Hoy es el gran día!</span>;
    } else {
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: days, label: 'Días' },
            { value: hours, label: 'Horas' },
            { value: minutes, label: 'Minutos' },
            { value: seconds, label: 'Segundos' }
          ].map((item, index) => (
            <motion.div 
              key={item.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-primary-cream p-4 md:p-6 rounded-md shadow-md w-full">
                <div className="text-3xl md:text-5xl font-serif text-primary-blue text-center">
                  {item.value}
                </div>
              </div>
              <p className="mt-2 text-sm md:text-base font-medium text-primary-brown">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      );
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-primary-light">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-10">Faltan</h2>
        <ReactCountdown 
          date={weddingDate} 
          renderer={renderer} 
        />
      </div>
    </section>
  );
};
