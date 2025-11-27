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
      className={`card-gradient rounded-lg border border-dark-border p-6 ${className}`}
      whileHover={hover ? { scale: 1.02, borderColor: '#9333EA' } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
