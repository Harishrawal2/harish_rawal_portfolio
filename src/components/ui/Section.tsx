import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  fullWidth = false,
}) => {
  return (
    <section
      id={id}
      className={`py-20 ${className}`}
    >
      {fullWidth ? (
        children
      ) : (
        <Container>{children}</Container>
      )}
    </section>
  );
};

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  mxAuto?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = '',
  centered = false,
  mxAuto = 'mx-auto'
}) => {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-gray-400 max-w-2xl ${mxAuto}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};