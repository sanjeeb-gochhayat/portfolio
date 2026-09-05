import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Html } from '@react-three/drei';
import * as THREE from 'three';

// Deterministically pre-calculated stardust coordinates for 0 impurity and smooth performance
const PARTICLES_COUNT = 450;
const DUST_POSITIONS = new Float32Array(PARTICLES_COUNT * 3);
for (let i = 0; i < PARTICLES_COUNT; i++) {
  const theta = (i / PARTICLES_COUNT) * Math.PI * 2 * 19;
  const phi = Math.acos(2 * ((i / PARTICLES_COUNT) - 0.5));
  const radius = 4.5 + ((i * 17) % 35) * 0.15;
  DUST_POSITIONS[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
  DUST_POSITIONS[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
  DUST_POSITIONS[i * 3 + 2] = radius * Math.cos(phi) - 1.5;
}

// Floating geometric shapes with subtle reactive motion
const FloatingGeometry: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Smooth idle rotation
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.25;
      ringRef1.current.rotation.z += delta * 0.15;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y += delta * 0.2;
      ringRef2.current.rotation.z -= delta * 0.18;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y += delta * 0.3;
      octaRef.current.rotation.x += delta * 0.15;
    }

    // Gentle pointer & scroll camera dampening
    const pointer = state.pointer;
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const scrollFactor = Math.min(scrollY / 1000, 1.5);

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      pointer.x * 0.65,
      0.05
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      pointer.y * 0.45 - scrollFactor * 0.7,
      0.05
    );
    state.camera.lookAt(0, -scrollFactor * 0.25, 0);
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Icosahedron Wireframe with glowing inner core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.35}
            emissive="#0284c7"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Inner solid glowing core */}
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#0ea5e9"
            roughness={0.2}
            metalness={0.9}
            emissive="#38bdf8"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>

      {/* Outer Gyroscopic Ring 1 */}
      <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#818cf8"
          roughness={0.1}
          metalness={0.9}
          emissive="#6366f1"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Outer Gyroscopic Ring 2 */}
      <mesh ref={ringRef2} rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.7, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          roughness={0.1}
          metalness={0.9}
          emissive="#0284c7"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Floating Spatial Code & UI Fragments */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1.2}>
        <group position={[2.5, 1.3, -0.6]}>
          <mesh ref={octaRef}>
            <octahedronGeometry args={[0.35, 0]} />
            <meshStandardMaterial
              color="#a855f7"
              roughness={0.3}
              metalness={0.8}
              emissive="#7c3aed"
              emissiveIntensity={0.6}
            />
          </mesh>
          <Html position={[0.4, 0, 0]} center distanceFactor={10}>
            <div className="pointer-events-none select-none rounded-lg border border-purple-500/40 bg-slate-950/80 px-2.5 py-1 font-mono text-[10px] text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)] backdrop-blur-md whitespace-nowrap">
              &lt;App /&gt; Scalable UI
            </div>
          </Html>
        </group>
      </Float>

      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={1}>
        <group position={[-2.6, -1.2, 0.5]}>
          <mesh position={[0, 0, 0]}>
            <dodecahedronGeometry args={[0.32, 0]} />
            <meshStandardMaterial
              color="#34d399"
              roughness={0.3}
              metalness={0.8}
              emissive="#059669"
              emissiveIntensity={0.5}
            />
          </mesh>
          <Html position={[-0.4, 0, 0]} center distanceFactor={10}>
            <div className="pointer-events-none select-none rounded-lg border border-emerald-500/40 bg-slate-950/80 px-2.5 py-1 font-mono text-[10px] text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.3)] backdrop-blur-md whitespace-nowrap">
              useState(Engine)
            </div>
          </Html>
        </group>
      </Float>

      {/* Floating Syntax Plane 1 */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.9}>
        <group position={[2.4, -1.4, -0.3]} rotation={[0.2, -0.3, 0.1]}>
          <mesh>
            <boxGeometry args={[1.7, 0.95, 0.04]} />
            <meshPhysicalMaterial
              color="#0f172a"
              transparent
              opacity={0.65}
              roughness={0.1}
              metalness={0.2}
              transmission={0.6}
              thickness={0.2}
            />
          </mesh>
          <Html position={[0, 0, 0.05]} center distanceFactor={11}>
            <div className="pointer-events-none select-none p-2 font-mono text-[9px] text-cyan-300/90 whitespace-nowrap">
              <div>const render = rAF();</div>
              <div className="text-slate-500">memoize(pureTree)</div>
            </div>
          </Html>
        </group>
      </Float>

      {/* Floating Syntax Plane 2 */}
      <Float speed={2.0} rotationIntensity={0.25} floatIntensity={0.8}>
        <group position={[-2.5, 1.5, -0.4]} rotation={[-0.1, 0.4, -0.1]}>
          <mesh>
            <boxGeometry args={[1.7, 0.95, 0.04]} />
            <meshPhysicalMaterial
              color="#0f172a"
              transparent
              opacity={0.65}
              roughness={0.1}
              metalness={0.2}
              transmission={0.6}
              thickness={0.2}
            />
          </mesh>
          <Html position={[0, 0, 0.05]} center distanceFactor={11}>
            <div className="pointer-events-none select-none p-2 font-mono text-[9px] text-indigo-300/90 whitespace-nowrap">
              <div>// O(1) Architecture</div>
              <div className="text-slate-500">tokens.get('spatial')</div>
            </div>
          </Html>
        </group>
      </Float>
    </group>
  );
};

// Subtle Star dust / ambient space field with pre-calculated buffer
const BackgroundDust: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[DUST_POSITIONS, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#38bdf8"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none select-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38bdf8" />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#a855f7" />
        <pointLight position={[0, 0, 2]} intensity={2} color="#38bdf8" distance={5} />

        <FloatingGeometry />
        <BackgroundDust />

        <Sparkles
          count={60}
          scale={7}
          size={1.5}
          speed={0.4}
          opacity={0.4}
          color="#38bdf8"
        />
      </Canvas>
    </div>
  );
};
