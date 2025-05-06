import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Html, Line } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface StarFieldProps {
    count: number;
}

const StarField: React.FC<StarFieldProps> = ({ count }) => {
    const stars = useMemo(() => {
        const temp = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            temp[i * 3] = (Math.random() - 0.5) * 200;
            temp[i * 3 + 1] = (Math.random() - 0.5) * 200;
            temp[i * 3 + 2] = (Math.random() - 0.5) * 200;
        }
        return temp;
    }, [count]);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={stars.length / 3}
                    array={stars}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.2} color="#ffffff" sizeAttenuation transparent />
        </points>
    );
};

const OrbitLine: React.FC<{ radius: number }> = ({ radius }) => {
    const points = useMemo(() => {
        const temp = [];
        for (let i = 0; i <= 128; i++) {
            const angle = (i / 128) * Math.PI * 2;
            temp.push(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
        }
        return temp;
    }, [radius]);

    return (
        <Line
            points={points}
            color="#ffffff"
            opacity={0.3}
            transparent
            lineWidth={1.5}
        />
    );
};

interface PlanetProps {
    position: [number, number, number];
    color: string;
    size: number;
    orbitRadius: number;
    orbitSpeed: number;
    name: string;
    details?: string;
}

const Planet: React.FC<PlanetProps> = ({ position, color, size, orbitRadius, orbitSpeed, name, details }) => {
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
            <OrbitLine radius={orbitRadius} />
            <Sphere
                ref={planetRef}
                args={[size, 32, 32]}
                position={position}
                onPointerOver={() => setIsHovered(true)}
                onPointerOut={() => setIsHovered(false)}
            >
                <meshPhongMaterial
                    color={color}
                    shininess={100}
                    specular={new THREE.Color(0x444444)}
                />
            </Sphere>
            {isHovered && (
                <Html position={[position[0], position[1] + size + 0.5, position[2]]}>
                    <div className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-lg shadow-lg backdrop-blur-sm">
                        <p className="text-sm font-bold">{name}</p>
                        {details && <p className="text-xs mt-1">{details}</p>}
                    </div>
                </Html>
            )}
        </>
    );
};

const Sun: React.FC = () => {
    const sunRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (sunRef.current) {
            sunRef.current.rotation.y += 0.002;
        }
    });

    return (
        <group>
            <pointLight intensity={2} distance={100} decay={2} />
            <Sphere ref={sunRef} args={[4, 64, 64]} position={[0, 0, 0]}>
                <meshStandardMaterial
                    color="#ff4400"
                    emissive="#ff4400"
                    emissiveIntensity={2.5}
                    roughness={1}
                    metalness={0}
                />
            </Sphere>
            <pointLight position={[0, 0, 0]} intensity={5} distance={100} decay={2} />
            {/* Glow effect */}
            <Sphere args={[4.2, 32, 32]} position={[0, 0, 0]}>
                <meshBasicMaterial color="#ff440033" transparent opacity={0.3} />
            </Sphere>
        </group>
    );
};

const EarthSections: React.FC = () => {
    const planets = [
        { name: 'Mercury', color: '#A0522D', size: 0.8, orbitRadius: 8, orbitSpeed: 0.8, details: 'HTML/CSS' },
        { name: 'Venus', color: '#DEB887', size: 1.2, orbitRadius: 12, orbitSpeed: 0.7, details: 'JavaScript' },
        { name: 'Earth', color: '#4169E1', size: 1.4, orbitRadius: 16, orbitSpeed: 0.6, details: 'React' },
        { name: 'Mars', color: '#CD5C5C', size: 1.0, orbitRadius: 20, orbitSpeed: 0.5, details: 'TypeScript' },
        { name: 'Jupiter', color: '#DAA520', size: 2.5, orbitRadius: 26, orbitSpeed: 0.4, details: 'Node.js' },
        { name: 'Saturn', color: '#F4A460', size: 2.2, orbitRadius: 32, orbitSpeed: 0.3, details: 'Three.js' },
        { name: 'Uranus', color: '#87CEEB', size: 1.8, orbitRadius: 38, orbitSpeed: 0.2, details: 'Next.js' },
        { name: 'Neptune', color: '#1E90FF', size: 1.8, orbitRadius: 44, orbitSpeed: 0.1, details: 'TailwindCSS' },
    ];

    return (
        <section className="h-screen bg-black relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
            >
                <Canvas camera={{ position: [0, 40, 70], fov: 60 }}>
                    <color attach="background" args={['black']} />
                    <ambientLight intensity={0.2} />
                    <Sun />
                    {planets.map((planet, index) => (
                        <Planet
                            key={index}
                            position={[planet.orbitRadius, 0, 0]}
                            {...planet}
                        />
                    ))}
                    <StarField count={8000} />
                    <OrbitControls
                        enableZoom={true}
                        minDistance={30}
                        maxDistance={100}
                        enablePan={false}
                        maxPolarAngle={Math.PI / 3}
                        minPolarAngle={Math.PI / 6}
                    />
                </Canvas>
            </motion.div>
        </section>
    );
};

export default EarthSections;