import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FireworkProps {
  x: number;
  y: number;
  color: string;
  size: number;
  delay: number;
}

const Firework: React.FC<FireworkProps> = ({ x, y, color, size, delay }) => {
  const particles = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    return {
      x: Math.cos(angle) * 50,
      y: Math.sin(angle) * 50,
      opacity: Math.random() * 0.5 + 0.5,
      size: Math.random() * 4 + 2,
    };
  });

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        times: [0, 0.1, 1],
      }}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            opacity: particle.opacity,
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: delay + 0.1,
            times: [0, 0.2, 1],
          }}
        />
      ))}
    </motion.div>
  );
};

export const Fireworks: React.FC = () => {
  const [fireworks, setFireworks] = useState<Array<FireworkProps>>([]);
  
  const colors = ['#FFD700', '#FFDD33', '#AA8A71', '#E6C200', '#FFF4B3'];
  
  useEffect(() => {
    // Create initial fireworks
    const initialFireworks = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 50 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
    }));
    
    setFireworks(initialFireworks);
    
    // Add more fireworks every second
    const interval = setInterval(() => {
      setFireworks(prev => [
        ...prev,
        ...Array.from({ length: 5 }, (_, i) => ({
          id: prev.length + i,
          x: Math.random() * 80 + 10,
          y: Math.random() * 50 + 10,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 4 + 2,
          delay: Math.random() * 0.5,
        })),
      ]);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {fireworks.map((fw, i) => (
        <Firework
          key={i}
          x={fw.x}
          y={fw.y}
          color={fw.color}
          size={fw.size}
          delay={fw.delay}
        />
      ))}
    </div>
  );
};