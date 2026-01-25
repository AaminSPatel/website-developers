'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function PyramidStructure() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[2, 3, 4]} />
      <meshBasicMaterial
        color="#8b5cf6"
        wireframe
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

export default function Pyramid() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <PyramidStructure />
      </Canvas>
    </div>
  );
}