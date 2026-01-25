'use client'; // Next.js ko batata hai ki yeh Client Component hai

import  { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';


function TechSphere1({line}) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, line]} /> {/* 1 means less triangles for 'low-poly' look */}
      <meshStandardMaterial 
        color="#b6f5df" 
        wireframe // Sirf lines dikhayega, jo techy lagta hai
      />
    </mesh>
  );
}


// 2. Main Scene Component
export default function TechSphere({line}) {
  return (
    // Canvas: Yeh 3D world ka container hai
    <div className='relative' style={{ height: '30vh', width: '30vh', background: '#1a1a1a00' }}>
      <Canvas className='absolute  bg-transparent'>
        {/* Lights: Bina light ke 3D object kaala dikhega */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        {/* Humara Cube */}
 
        <TechSphere1 position={[0, 0, 0]} line={line}/>
   {/* OrbitControls: Mouse se scene ko ghumane/zoom karne ke liye */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}