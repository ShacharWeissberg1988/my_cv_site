import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`card-gradient rounded-lg border border-dark-border p-6 transition-shadow ${className}`}
      whileHover={hover ? {
        scale: 1.02,
        borderColor: '#9333EA',
        boxShadow: '0 20px 50px -12px rgba(147, 51, 234, 0.3), 0 0 30px -5px rgba(6, 182, 212, 0.2)',
      } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
