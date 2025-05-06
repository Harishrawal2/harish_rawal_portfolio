import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { Code, Database, Globe, Layout, Server, Cpu } from 'lucide-react';

interface Skill {
    name: string;
    icon: React.ReactNode;
    color: string;
}

const skills: Skill[] = [
    { name: 'Frontend', icon: <Code size={24} />, color: '#6366f1' },
    { name: 'Backend', icon: <Server size={24} />, color: '#8b5cf6' },
    { name: 'Database', icon: <Database size={24} />, color: '#6366f1' },
    { name: 'UI/UX', icon: <Layout size={24} />, color: '#8b5cf6' },
    { name: 'DevOps', icon: <Cpu size={24} />, color: '#6366f1' },
    { name: 'Web', icon: <Globe size={24} />, color: '#8b5cf6' },
];

const Icon3D = ({ color }: { color: string }) => {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.8}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    );
};

const SkillsSlider: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = containerRef.current;
        if (!scrollContainer) return;

        let scrollPos = 0;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        const animate = () => {
            if (!scrollContainer) return;

            scrollPos += 1;
            if (scrollPos >= maxScroll) {
                scrollPos = 0;
            }

            scrollContainer.scrollLeft = scrollPos;
            requestAnimationFrame(animate);
        };

        const animation = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animation);
    }, []);

    return (
        <div className="relative w-full bg-dark-950 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_80%)]" />

            <div
                ref={containerRef}
                className="flex gap-8 overflow-hidden whitespace-nowrap"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
                {[...skills, ...skills].map((skill, index) => (
                    <motion.div
                        key={`${skill.name}-${index}`}
                        className="inline-flex flex-col items-center min-w-[200px] p-6 glass-card rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="w-24 h-24 mb-4">
                            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                                <ambientLight intensity={0.5} />
                                <pointLight position={[10, 10, 10]} intensity={1} />
                                <Icon3D color={skill.color} />
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    autoRotate
                                    autoRotateSpeed={2}
                                />
                            </Canvas>
                        </div>
                        <div className="flex items-center gap-2">
                            {skill.icon}
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSlider;