import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { useTransform } from 'framer-motion';
import * as THREE from 'three';

// Elegant floating abstract sphere with distortion
function AbstractMesh({ scrollYProgress }) {
  const meshRef = useRef();
  const innerRef = useRef();

  const posY = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const rot  = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 3]);
  const sc   = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1.15, 0.7]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!meshRef.current) return;

    // Gentle autonomous rotation + scroll-driven rotation
    meshRef.current.rotation.y = rot.get() + t * 0.08;
    meshRef.current.rotation.x = t * 0.04;
    meshRef.current.position.y = posY.get() + Math.sin(t * 0.6) * 0.2;

    const s = sc.get();
    meshRef.current.scale.set(s, s, s);

    // Pulsating inner ring
    if (innerRef.current) {
      innerRef.current.rotation.z = t * 0.3;
      innerRef.current.rotation.x = t * 0.15;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main sphere — ivory cream */}
      <mesh>
        <icosahedronGeometry args={[1.2, 4]} />
        <meshStandardMaterial
          color="#f5f0e6"
          metalness={0.05}
          roughness={0.55}
          wireframe={false}
          emissive="#1a1612"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Outer wireframe — terracotta */}
      <mesh>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshStandardMaterial
          color="#c9604f"
          metalness={0.4}
          roughness={0.2}
          wireframe={true}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Orbiting ring — ivory */}
      <mesh ref={innerRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.1, 0.015, 8, 120]} />
        <meshStandardMaterial
          color="#f5f0e6"
          metalness={0.1}
          roughness={0.4}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

export default function FloatingObject({ scrollYProgress }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '55vw',
      height: '100vh',
      zIndex: 1,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Lighting to match Ivory on Obsidian palette */}
        <ambientLight intensity={0.25} color="#f5f0e6" />
        <directionalLight position={[3, 5, 5]} intensity={1.2} color="#fff8f0" />
        <directionalLight position={[-4, -2, -4]} intensity={0.4} color="#c9604f" />
        <pointLight position={[0, 0, 4]} intensity={0.6} color="#f5f0e6" />

        <AbstractMesh scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
