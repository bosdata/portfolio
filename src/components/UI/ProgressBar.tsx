import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  percentage: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  percentage, 
  className = '' 
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-cyan-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;