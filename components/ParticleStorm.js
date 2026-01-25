'use client'; // Next.js ko batata hai ki yeh Client Component hai

import  { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';


function ParticleStorm1() {
  const ref = useRef();
  // 5000 points generate karega ek sphere ke andar
  const sphere = random.inSphere(new Float32Array(5000), { radius: 4 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 3]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#55a5ff"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}




// 2. Main Scene Component
export default function ParticleStorm() {
  return (
    // Canvas: Yeh 3D world ka container hai
    <div className='relative' style={{ height: '100%', width: '110%', background: '#1a1a1a00' }}>
      <Canvas className='absolute  bg-transparent'>
        {/* Lights: Bina light ke 3D object kaala dikhega */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        {/* Humara Cube */}
        <ParticleStorm1 position={[0, 0, 0]} />

        {/* OrbitControls: Mouse se scene ko ghumane/zoom karne ke liye */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}