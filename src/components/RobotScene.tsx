// import React, { useRef, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { useGLTF, OrbitControls, PerspectiveCamera, Float, SpotLight, useHelper } from '@react-three/drei';
// import { GLTF } from 'three-stdlib';
// import * as THREE from 'three';

// // Custom hook to create glowing eyes
// const useGlowingEyes = () => {
//     const material = new THREE.MeshBasicMaterial({
//         color: new THREE.Color('#ff3366'),
//         toneMapped: false,
//         emissive: new THREE.Color('#ff3366'),
//         emissiveIntensity: 5,
//     });

//     return material;
// };

// const Robot = () => {
//     const robotRef = useRef<THREE.Group>(null);
//     const armRef = useRef<THREE.Mesh>(null);
//     const spotLightRef = useRef<THREE.SpotLight>(null);
//     const glowMaterial = useGlowingEyes();

//     useFrame(({ clock }) => {
//         if (robotRef.current) {
//             // Smoother floating animation
//             robotRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
//             robotRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.15;
//         }

//         if (armRef.current) {
//             // Waving animation for the arm
//             const wave = Math.sin(clock.getElapsedTime() * 2) * 0.5;
//             armRef.current.rotation.z = wave - 0.5; // Offset to make it wave from a raised position
//         }
//     });

//     return (
//         <group ref={robotRef}>
//             {/* Main robot head */}
//             <mesh position={[0, 0, 0]} castShadow receiveShadow>
//                 <boxGeometry args={[1.2, 1.2, 1.2]} />
//                 <meshStandardMaterial
//                     color="#1a1a2e"
//                     metalness={0.9}
//                     roughness={0.1}
//                     envMapIntensity={2}
//                 />

//                 {/* Left eye */}
//                 <mesh position={[0.3, 0.2, 0.61]} castShadow>
//                     <sphereGeometry args={[0.12, 32, 32]} />
//                     <primitive object={glowMaterial} />
//                     <pointLight
//                         color="#ff3366"
//                         intensity={2}
//                         distance={3}
//                         decay={2}
//                         position={[0, 0, 0.2]}
//                     />
//                 </mesh>

//                 {/* Right eye */}
//                 <mesh position={[-0.3, 0.2, 0.61]} castShadow>
//                     <sphereGeometry args={[0.12, 32, 32]} />
//                     <primitive object={glowMaterial} />
//                     <pointLight
//                         color="#ff3366"
//                         intensity={2}
//                         distance={3}
//                         decay={2}
//                         position={[0, 0, 0.2]}
//                     />
//                 </mesh>
//             </mesh>

//             {/* Robot body */}
//             <mesh position={[0, -1, 0]} castShadow receiveShadow>
//                 <boxGeometry args={[1, 0.8, 0.8]} />
//                 <meshStandardMaterial
//                     color="#1a1a2e"
//                     metalness={0.9}
//                     roughness={0.1}
//                     envMapIntensity={2}
//                 />

//                 {/* Robot's right arm (waving) */}
//                 <group position={[0.6, 0.2, 0]} ref={armRef}>
//                     <mesh castShadow>
//                         <boxGeometry args={[0.2, 0.6, 0.2]} />
//                         <meshStandardMaterial
//                             color="#1a1a2e"
//                             metalness={0.9}
//                             roughness={0.1}
//                             envMapIntensity={2}
//                         />
//                     </mesh>
//                     {/* Hand */}
//                     <mesh position={[0, 0.35, 0]} castShadow>
//                         <boxGeometry args={[0.25, 0.15, 0.25]} />
//                         <meshStandardMaterial
//                             color="#1a1a2e"
//                             metalness={0.9}
//                             roughness={0.1}
//                             envMapIntensity={2}
//                         />
//                     </mesh>
//                 </group>

//                 {/* Robot's left arm (static) */}
//                 <mesh position={[-0.6, 0, 0]} castShadow>
//                     <boxGeometry args={[0.2, 0.6, 0.2]} />
//                     <meshStandardMaterial
//                         color="#1a1a2e"
//                         metalness={0.9}
//                         roughness={0.1}
//                         envMapIntensity={2}
//                     />
//                 </mesh>
//             </mesh>

//             {/* Additional robot head stacked */}
//             <mesh position={[0, 1.4, 0]} castShadow receiveShadow>
//                 <boxGeometry args={[1.1, 1.1, 1.1]} />
//                 <meshStandardMaterial
//                     color="#1a1a2e"
//                     metalness={0.9}
//                     roughness={0.1}
//                     envMapIntensity={2}
//                 />

//                 {/* Left eye */}
//                 <mesh position={[0.27, 0.2, 0.56]} castShadow>
//                     <sphereGeometry args={[0.11, 32, 32]} />
//                     <primitive object={glowMaterial} />
//                     <pointLight
//                         color="#ff3366"
//                         intensity={2}
//                         distance={3}
//                         decay={2}
//                         position={[0, 0, 0.2]}
//                     />
//                 </mesh>

//                 {/* Right eye */}
//                 <mesh position={[-0.27, 0.2, 0.56]} castShadow>
//                     <sphereGeometry args={[0.11, 32, 32]} />
//                     <primitive object={glowMaterial} />
//                     <pointLight
//                         color="#ff3366"
//                         intensity={2}
//                         distance={3}
//                         decay={2}
//                         position={[0, 0, 0.2]}
//                     />
//                 </mesh>
//             </mesh>

//             {/* Top robot head */}
//             <mesh position={[0, 2.7, 0]} castShadow receiveShadow>
//                 <boxGeometry args={[1, 1, 1]} />
//                 <meshStandardMaterial
//                     color="#1a1a2e"
//                     metalness={0.9}
//                     roughness={0.1}
//                     envMapIntensity={2}
//                 />

//                 {/* Left eye */}
//                 <mesh position={[0.25, 0.18, 0.51]} castShadow>
//                     <sphereGeometry args={[0.1, 32, 32]} />
//                     <primitive object={glowMaterial} />
//                     <pointLight
//                         color="#ff3366"
//                         intensity={2}
//                         distance={3}
//                         decay={2}
//                         position={[0, 0, 0.2]}
//                     />
//                 </mesh>

//                 {/* Right eye */}
//                 <mesh position={[-0.25, 0.18, 0.51]} castShadow>
//                     <sphereGeometry args={[0.1, 32, 32]} />
//                     <primitive object={glowMaterial} />
//                     <pointLight
//                         color="#ff3366"
//                         intensity={2}
//                         distance={3}
//                         decay={2}
//                         position={[0, 0, 0.2]}
//                     />
//                 </mesh>
//             </mesh>

//             {/* Add spotlight for dramatic lighting */}
//             <SpotLight
//                 ref={spotLightRef}
//                 position={[4, 4, 2]}
//                 angle={0.3}
//                 penumbra={1}
//                 intensity={2}
//                 distance={10}
//                 castShadow
//                 color="#ff3366"
//             />
//         </group>
//     );
// };

// const RobotScene: React.FC = () => {
//     return (
//         <div className="w-full h-full">
//             <Canvas
//                 shadows
//                 dpr={[1, 2]}
//                 camera={{ position: [0, 1, 6], fov: 45 }}
//                 gl={{ preserveDrawingBuffer: true }}
//             >
//                 {/* Environment setup */}
//                 <color attach="background" args={['#050A18']} />
//                 <fog attach="fog" args={['#050A18', 5, 15]} />

//                 {/* Lighting setup */}
//                 <ambientLight intensity={0.2} />
//                 <directionalLight
//                     position={[5, 5, 5]}
//                     intensity={0.5}
//                     castShadow
//                     shadow-mapSize={[1024, 1024]}
//                 />
//                 <pointLight position={[-5, 5, -2]} intensity={0.5} color="#bb33ff" />

//                 {/* Robot model with floating animation */}
//                 <Float
//                     speed={1}
//                     rotationIntensity={0.5}
//                     floatIntensity={0.5}
//                     floatingRange={[-0.1, 0.1]}
//                 >
//                     <Robot />
//                 </Float>

//                 {/* Camera controls */}
//                 <OrbitControls
//                     enableZoom={false}
//                     enablePan={false}
//                     minPolarAngle={Math.PI / 2.5}
//                     maxPolarAngle={Math.PI / 1.8}
//                     minAzimuthAngle={-Math.PI / 4}
//                     maxAzimuthAngle={Math.PI / 4}
//                     dampingFactor={0.05}
//                     rotateSpeed={0.5}
//                 />
//             </Canvas>
//         </div>
//     );
// };

// export default RobotScene;