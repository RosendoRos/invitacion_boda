import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-primary-dark text-primary-light">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <div className="h-[1px] w-16 md:w-24 bg-primary-cream"></div>
          <Heart className="mx-4 text-primary-cream w-5 h-5" />
          <div className="h-[1px] w-16 md:w-24 bg-primary-cream"></div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-serif mb-8">JENNI & JORGE</h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="mb-8 text-primary-cream leading-relaxed">
            Queremos expresar nuestro más sincero agradecimiento a todos nuestros familiares y amigos
            que nos han acompañado en este camino. Su amor y apoyo incondicional han hecho de este
            viaje algo inolvidable. Estamos emocionados de compartir este día tan especial con todos ustedes.
          </p>
          
          <p className="text-primary-cream font-serif italic">
            Con amor,
          </p>
          <p className="text-primary-cream mt-1">
            JENNI & JORGE
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-blue text-sm text-primary-cream opacity-80">
          <p>© {new Date().getFullYear()} | JENNI & JORGE</p>
        </div>
      </div>
    </footer>
  );
};