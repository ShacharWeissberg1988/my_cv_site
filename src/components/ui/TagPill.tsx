import React from 'react';

interface TagPillProps {
  children: React.ReactNode;
  className?: string;
}

export const TagPill: React.FC<TagPillProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs bg-dark-bg-tertiary text-gray-300 ${className}`}>
      {children}
    </span>
  );
};
