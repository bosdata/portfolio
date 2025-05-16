import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverEffect ? 'transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;