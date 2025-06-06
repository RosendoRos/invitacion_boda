import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/img/img1.jpeg';
import img2 from '../assets/img/img2.jpeg';
import img3 from '../assets/img/img3.jpeg';
import img4 from '../assets/img/img4.jpeg';
import img5 from '../assets/img/img5.jpeg';
import img6 from '../assets/img/img6.jpeg';

export const OurStory: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample images from Pexels (replace with your actual photos)
  const photos = [
    {
      src: img1,
      alt: "Couple holding hands"
    },
    {
      src: img2,
      alt: "Couple at sunset"
    },
    {
      src: img3,
      alt: "Couple hugging"
    },
    {
      src: img4,  
      alt: "Couple walking",
      caption: "Aventuras juntos"
    },
    {
      src: img5,
      alt: "Couple laughing",
      caption: "Momentos felices"
    },
    {
      src: img6,
      alt: "Couple at the beach"
    }
  ];

  const storyEvents = [
    {
      date: "Enero 2020",
      title: "Nuestro primer encuentro",
      description: "Nos conocimos en la fiesta de un amigo en común. Lo que comenzó como una simple conversación se convirtió en una noche llena de risas."
    },
    {
      date: "Junio 2021",
      title: "Primer viaje juntos",
      description: "Escapamos a la playa por un fin de semana. Fue durante esos días cuando supimos que habíamos encontrado algo especial."
    },
    {
      date: "Diciembre 2023",
      title: "La propuesta",
      description: "Durante una cena."
    },    
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-primary-cream" id="story">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-4">Nuestra Historia</h2>
          <div className="w-24 h-[2px] bg-primary-brown mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-10">
              {storyEvents.map((event, index) => (
                <motion.div 
                  key={index} 
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                >
                  <div className="mr-4">
                    <div className="w-px h-full bg-primary-brown mx-auto"></div>
                    <div className="w-3 h-3 rounded-full bg-primary-brown"></div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary-blue">{event.date}</span>
                    <h3 className="text-xl font-serif text-primary-dark mt-1">{event.title}</h3>
                    <p className="mt-2 text-primary-dark leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="shadow-xl">
              <Carousel 
                showArrows={true}
                showStatus={false}
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                interval={5000}
                className="rounded-lg overflow-hidden"
              >
                {photos.map((photo, index) => (
                  <div key={index} className="relative h-[400px]">
                    <img src={photo.src} alt={photo.alt} className="object-cover h-full w-full" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-left">
                      <p className="text-white font-serif text-xl">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
