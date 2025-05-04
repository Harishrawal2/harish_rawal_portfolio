import React, { useEffect, useState } from 'react';

interface MeteorProps {
  number?: number;
  className?: string;
}

const MeteorEffect: React.FC<MeteorProps> = ({ 
  number = 20,
  className = ''
}) => {
  const [meteors, setMeteors] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const meteorArray = [];
    for (let i = 0; i < number; i++) {
      const randomLeft = Math.floor(Math.random() * 100);
      const randomTop = Math.floor(Math.random() * 100);
      const randomDelay = Math.random() * 1000;
      const randomDuration = Math.random() * 1000 + 3000; // 3-4s
      
      meteorArray.push(
        <span
          key={`meteor-${i}`}
          className="meteor-effect"
          style={{
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
            animationDelay: `${randomDelay}ms`,
            animationDuration: `${randomDuration}ms`,
            opacity: 0,
            animation: 'meteor linear infinite',
            '--delay': `${randomDelay}ms`,
          } as React.CSSProperties}
        />
      );
    }
    setMeteors(meteorArray);
  }, [number]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {meteors}
    </div>
  );
};

export default MeteorEffect;