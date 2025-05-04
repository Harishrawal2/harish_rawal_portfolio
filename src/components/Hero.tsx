import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { ArrowDown } from 'lucide-react';

const techLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
];

const RotatingLogos = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {techLogos.map((logo, index) => {
        const angle = (360 / techLogos.length) * index;
        const radius = 150;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={logo.alt}
            className="absolute w-12 h-12 rounded-full bg-dark-800/50 backdrop-blur-sm p-2"
            initial={{ x, y }}
            animate={{
              x: [x, -y, -x, y, x],
              y: [y, x, -y, -x, y],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

const CenterSphere = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#6366f1"
          roughness={0.5}
          metalness={0.8}
          emissive="#4338ca"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_65%)]"></div>
      </div>

      <Container className="relative z-10 flex flex-col h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8 items-center min-h-[calc(100vh-80px)]">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
                Software Engineer
              </span>
            </motion.div>

            <motion.h1
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Building <span className="text-gradient">digital experiences</span> that matter
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-gray-400 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button className="gradient-border" size="lg">
                Get Resume
              </Button>
              <Button variant="outline" size="lg">
                Hire Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[400px] lg:h-[500px]"
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <CenterSphere />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
            <RotatingLogos />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;