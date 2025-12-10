"use client"; // Essential for Next.js to treat this as a client-side component

import { Canvas,useFrame}from '@react-three/fiber'  
import { Points, OrbitControls, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'
import { useState,useRef } from 'react';

function Stars(props:any){
    const ref = useRef<any>(null)

    // Generate random points in 3D space
    const [sphere] = useState(()=>random.inSphere(new Float32Array(5000),{radius:1.2    }))

    useFrame((state,delta)=>{
        ref.current.rotation.x -= delta/10
        ref.current.rotation.y -= delta/15
    })
    return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#8884d8" // A nice AI purple
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function HeroBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <Stars />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}