'use client'; // Next.js ko batata hai ki yeh Client Component hai

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Grid } from '@react-three/drei';

function TechGrid1() {
  return (
    <Grid
      renderOrder={-1}
      position={[0, -1.5, 0]}
      infiniteGrid
      cellSize={1.0}
      cellThickness={1}
      sectionSize={3}
      sectionThickness={1.5}
      sectionColor="#ff4433"
      fadeDistance={25}
    />
  );
}



// 2. Main Scene Component
export default function TechGrid() {
  return (
    // Canvas: Yeh 3D world ka container hai
    <div className='relative' style={{ height: '100%', width: 'full', background: '#1a1a1a00' }}>
      <Canvas className='absolute  bg-transparent'>
        {/* Lights: Bina light ke 3D object kaala dikhega */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        {/* Humara Cube */}
 
        <TechGrid1 position={[0, 0, 0]} />

        {/* OrbitControls: Mouse se scene ko ghumane/zoom karne ke liye */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}