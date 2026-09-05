import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Float, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const AssemblingCards: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  // Layer offsets
  const zOffset = isExpanded ? 0.7 : 0.28;

  return (
    <group ref={groupRef}>
      {/* Base Layer: Architecture & Logic */}
      <group position={[0, -0.2, -zOffset * 1.5]}>
        <RoundedBox args={[3.2, 2.0, 0.05]} radius={0.06} smoothness={4}>
          <meshStandardMaterial
            color="#090d16"
            metalness={0.8}
            roughness={0.2}
            emissive="#1e1b4b"
            emissiveIntensity={0.3}
          />
        </RoundedBox>
        <Text
          position={[-1.3, 0.65, 0.04]}
          fontSize={0.11}
          color="#818cf8"
          anchorX="left"
        >
          // 01. State & Logic Engine
        </Text>
        <Text
          position={[-1.3, 0.35, 0.04]}
          fontSize={0.09}
          color="#94a3b8"
          anchorX="left"
          maxWidth={2.6}
        >
          const [state, dispatch] = useReducer(reducer);
        </Text>
      </group>

      {/* Mid Layer: UI Component Tree */}
      <group position={[0.1, 0, 0]}>
        <RoundedBox args={[3.2, 2.0, 0.05]} radius={0.06} smoothness={4}>
          <meshPhysicalMaterial
            color="#0f172a"
            transparent
            opacity={0.7}
            roughness={0.1}
            metalness={0.3}
            transmission={0.5}
            thickness={0.2}
          />
        </RoundedBox>
        <Text
          position={[-1.3, 0.65, 0.04]}
          fontSize={0.11}
          color="#38bdf8"
          anchorX="left"
        >
          &lt;ComponentTree /&gt;
        </Text>
        <Text
          position={[-1.3, 0.35, 0.04]}
          fontSize={0.09}
          color="#e2e8f0"
          anchorX="left"
        >
          return &lt;DesignSystem.Provider value=tokens&gt;
        </Text>
      </group>

      {/* Front Layer: Visual Aesthetics & Glassmorphism */}
      <group position={[-0.1, 0.2, zOffset * 1.5]}>
        <RoundedBox args={[3.2, 2.0, 0.05]} radius={0.06} smoothness={4}>
          <meshPhysicalMaterial
            color="#0284c7"
            transparent
            opacity={0.4}
            roughness={0.05}
            metalness={0.1}
            transmission={0.8}
            thickness={0.3}
          />
        </RoundedBox>
        <Text
          position={[-1.3, 0.65, 0.04]}
          fontSize={0.11}
          color="#34d399"
          anchorX="left"
        >
          // 03. Visual Polish & Physics
        </Text>
        <Text
          position={[-1.3, 0.35, 0.04]}
          fontSize={0.09}
          color="#f8fafc"
          anchorX="left"
        >
          motion.div: spring(stiffness: 280, damping: 25)
        </Text>
      </group>
    </group>
  );
};

export const AboutAssembler: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative h-[380px] w-full rounded-2xl border border-slate-800/80 bg-slate-950/40 p-2 overflow-hidden shadow-2xl backdrop-blur-md"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="font-mono text-xs text-slate-300">
          {isExpanded ? 'Architecture: Exploded View' : 'Architecture: Assembled View'}
        </span>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-mono text-[11px] text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/40 hover:bg-cyan-900/80 transition-colors cursor-pointer"
        >
          {isExpanded ? 'Collapse' : 'Explode View'}
        </button>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <span className="font-mono text-[11px] text-slate-500 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800 hidden sm:inline-block">
          Drag to rotate • Hover / Click to expand
        </span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.8} color="#38bdf8" />
        <directionalLight position={[-5, -4, -3]} intensity={1.2} color="#c084fc" />

        <PresentationControls
          global={false}
          cursor={true}
          snap={true}
          speed={1.5}
          zoom={1}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 3, Math.PI / 3]}
        >
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
            <AssemblingCards isExpanded={isExpanded} />
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
