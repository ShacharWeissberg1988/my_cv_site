import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'cyan' | 'metallic';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  className = ''
}) => {
  const variants = {
    purple: 'bg-primary-purple/20 text-primary-purple border-primary-purple',
    cyan: 'bg-primary-cyan/20 text-primary-cyan border-primary-cyan',
    metallic: 'bg-metallic-silver/20 text-metallic-silver border-metallic-silver',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
