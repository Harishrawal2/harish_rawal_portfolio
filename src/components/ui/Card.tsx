import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isHoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  isHoverable = false,
}) => {
  return (
    <div 
      className={`
        glass-card rounded-xl overflow-hidden
        ${isHoverable ? 'transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`p-6 pt-0 flex items-center ${className}`}>
      {children}
    </div>
  );
};