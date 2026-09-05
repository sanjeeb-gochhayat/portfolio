import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const PulsingOrbMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.15;
    }

    if (outerWireRef.current) {
      outerWireRef.current.rotation.y -= delta * 0.2;
      outerWireRef.current.rotation.z += delta * 0.1;
    }

    // React to pointer
    const pointer = state.pointer;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, pointer.x * 0.8, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, pointer.y * 0.6, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group>
        {/* Core glowing sphere */}
        <Sphere ref={meshRef} args={[1.2, 48, 48]}>
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#38bdf8"
            emissiveIntensity={0.8}
            roughness={0.15}
            metalness={0.9}
          />
        </Sphere>

        {/* Outer wireframe geodesic shield */}
        <Sphere ref={outerWireRef} args={[1.55, 24, 24]}>
          <meshStandardMaterial
            color="#c084fc"
            wireframe
            transparent
            opacity={0.35}
            emissive="#818cf8"
            emissiveIntensity={0.6}
          />
        </Sphere>

        {/* Orbiting particles */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.9, 0.015, 16, 80]} />
          <meshBasicMaterial color="#34d399" transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

export const ContactOrb: React.FC = () => {
  return (
    <div className="h-[320px] w-full max-w-[320px] mx-auto select-none pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color="#38bdf8" />
        <pointLight position={[-5, -5, -5]} intensity={1.8} color="#a855f7" />
        <PulsingOrbMesh />
      </Canvas>
    </div>
  );
};
