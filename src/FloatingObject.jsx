import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, TorusKnot, Float } from '@react-three/drei';
import * as THREE from 'three';

// The animated 3D object that responds to scroll
function ScrollMesh({ scrollYProgress }) {
  const meshRef = useRef();
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]);
  const positionY = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1.3, 0.6]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Gentle autonomous float
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = rotationY.get() + time * 0.15;
    meshRef.current.position.y = positionY.get() + Math.sin(time * 0.5) * 0.15;
    const s = scale.get();
    meshRef.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 200, 32, 2, 3]} />
      <meshStandardMaterial
        color="#c9604f"
        metalness={0.8}
        roughness={0.1}
        wireframe={false}
        emissive="#3a1a14"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function FloatingObject({ scrollYProgress }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '50vw',
      height: '100vh',
      zIndex: 1,
      pointerEvents: 'none',
      opacity: 0.85
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.4} color="#f5f0e6" />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#f5f0e6" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#c9604f" />
        <spotLight position={[0, 10, 0]} intensity={1} color="#fff8f0" />
        <ScrollMesh scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
