import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface StarProps {
    position: [number, number, number];
}

const Star: React.FC<StarProps> = ({ position }) => {
    return (
        <Sphere args={[0.02, 24, 24]} position={position}>
            <meshBasicMaterial color="white" />
        </Sphere>
    );
};

const Stars: React.FC<{ count: number }> = ({ count }) => {
    const stars = useMemo(() => {
        const tempStars: StarProps[] = [];

        for (let i = 0; i < count; i++) {
            const x = THREE.MathUtils.randFloatSpread(20);
            const y = THREE.MathUtils.randFloatSpread(20);
            const z = THREE.MathUtils.randFloatSpread(20);
            tempStars.push({ position: [x, y, z] });
        }

        return tempStars;
    }, [count]);

    return <>{stars.map((star, index) => <Star key={index} position={star.position} />)}</>;
};

interface TechPlanetProps {
    position: [number, number, number];
    color: string;
    size: number;
    orbitSpeed: number;
    orbitRadius: number;
    name: string;
    experience: string;
}

const TechPlanet: React.FC<TechPlanetProps> = ({ position, color, size, orbitSpeed, orbitRadius, name, experience }) => {
    const planetRef = useRef<THREE.Mesh>(null);
    const [isHovered, setIsHovered] = React.useState(false);

    useFrame(({ clock }) => {
        if (planetRef.current) {
            const time = clock.getElapsedTime();
            planetRef.current.position.x = Math.cos(time * orbitSpeed) * orbitRadius;
            planetRef.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius;
            planetRef.current.rotation.y += 0.01;
        }
    });

    return (
        <>
            <Sphere
                ref={planetRef}
                args={[size, 32, 32]}
                position={position}
                onPointerOver={() => setIsHovered(true)}
                onPointerOut={() => setIsHovered(false)}
            >
                <meshStandardMaterial color={color} roughness={0.5} metalness={0.5} />
            </Sphere>
            {isHovered && (
                <Html position={[position[0], position[1] + 1, position[2]]}>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
                        <p className="text-sm font-bold">{name}</p>
                        <p className="text-xs">{experience}</p>
                    </div>
                </Html>
            )}
        </>
    );
};

const Earth: React.FC = () => {
    const earthRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.001;
        }
    });

    return (
        <Sphere ref={earthRef} args={[2, 64, 64]}>
            <meshStandardMaterial
                color="#4B9CD3"
                roughness={0.7}
                metalness={0.3}
            />
        </Sphere>
    );
};

const EarthSection: React.FC = () => {
    const techPlanets = [
        { name: 'React', color: '#61DAFB', size: 0.5, orbitSpeed: 0.5, orbitRadius: 4, experience: '5 years' },
        { name: 'TypeScript', color: '#3178C6', size: 0.4, orbitSpeed: 0.7, orbitRadius: 5, experience: '4 years' },
        { name: 'Node.js', color: '#339933', size: 0.45, orbitSpeed: 0.3, orbitRadius: 6, experience: '4 years' },
        { name: 'Tailwind', color: '#38B2AC', size: 0.35, orbitSpeed: 0.6, orbitRadius: 7, experience: '3 years' },
        { name: 'GitHub', color: '#181717', size: 0.4, orbitSpeed: 0.4, orbitRadius: 8, experience: '5 years' },
    ];

    return (
        <section className="h-screen relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
            >
                <Canvas camera={{ position: [0, 5, 15] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Earth />
                    {techPlanets.map((planet, index) => (
                        <TechPlanet
                            key={planet.name}
                            position={[planet.orbitRadius, 0, 0]}
                            {...planet}
                        />
                    ))}
                    <OrbitControls enableZoom={false} />
                    <Stars count={1000} />
                </Canvas>
            </motion.div>
        </section>
    );
};

export default EarthSection;