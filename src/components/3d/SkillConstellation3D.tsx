import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Float, Line, Html } from '@react-three/drei';
import * as THREE from 'three';
import { skillsData } from '../../data/skillsData';
import type { SkillNode } from '../../data/skillsData';

interface ConstellationProps {
  activeSkill: SkillNode | null;
  onHoverSkill: (skill: SkillNode | null) => void;
  selectedCategory: string;
}

const ConstellationMesh: React.FC<ConstellationProps> = ({
  activeSkill,
  onHoverSkill,
  selectedCategory,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  const centerPos: [number, number, number] = [0, 0, 0];

  return (
    <group ref={groupRef}>
      {/* Central Core: "Frontend Engineering" */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={centerPos}>
          <sphereGeometry args={[0.65, 32, 32]} />
          <meshStandardMaterial
            color="#0284c7"
            emissive="#38bdf8"
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        {/* Core Halo */}
        <mesh position={centerPos}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.15}
            wireframe
          />
        </mesh>
        {/* Central 3D HTML label */}
        <Html position={[0, 1.1, 0]} center distanceFactor={8} zIndexRange={[10, 0]}>
          <div className="pointer-events-none select-none rounded-full border border-cyan-400/40 bg-slate-950/80 px-3 py-1 text-center font-heading text-xs font-semibold text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.4)] backdrop-blur-md whitespace-nowrap">
            Frontend Engineering Core
          </div>
        </Html>
      </Float>

      {/* Orbiting Skill Nodes */}
      {skillsData.map((skill) => {
        const isSelected = activeSkill?.id === skill.id;
        const isDimmed =
          selectedCategory !== 'all' && skill.category !== selectedCategory;

        return (
          <React.Fragment key={skill.id}>
            <Line
              points={[centerPos, skill.coords]}
              color={isSelected ? '#38bdf8' : isDimmed ? '#1e293b' : '#334155'}
              lineWidth={isSelected ? 2 : 0.8}
              transparent
              opacity={isSelected ? 0.9 : isDimmed ? 0.15 : 0.4}
            />

            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
              <group position={skill.coords}>
                <mesh
                  onPointerOver={(e) => {
                    e.stopPropagation();
                    onHoverSkill(skill);
                  }}
                  onPointerOut={() => onHoverSkill(null)}
                  scale={isSelected ? 1.4 : isDimmed ? 0.7 : 1}
                >
                  <sphereGeometry args={[0.26, 24, 24]} />
                  <meshStandardMaterial
                    color={skill.color}
                    emissive={skill.color}
                    emissiveIntensity={isSelected ? 1.5 : 0.5}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={isDimmed ? 0.3 : 1}
                  />
                </mesh>

                {isSelected && (
                  <mesh>
                    <ringGeometry args={[0.38, 0.44, 32]} />
                    <meshBasicMaterial
                      color="#ffffff"
                      side={THREE.DoubleSide}
                      transparent
                      opacity={0.8}
                    />
                  </mesh>
                )}

                <Html
                  position={[0, 0.45, 0]}
                  center
                  distanceFactor={9}
                  zIndexRange={[20, 0]}
                >
                  <button
                    type="button"
                    onClick={() => onHoverSkill(skill)}
                    className={`cursor-pointer select-none rounded-md px-2 py-0.5 font-mono text-[11px] font-medium transition-all duration-200 whitespace-nowrap border ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-950/90 text-cyan-200 shadow-[0_0_12px_rgba(56,189,248,0.6)] scale-110'
                        : isDimmed
                        ? 'border-slate-800 bg-slate-950/40 text-slate-500 opacity-40'
                        : 'border-slate-700/60 bg-slate-900/80 text-slate-200 hover:border-cyan-500/60 hover:text-white'
                    }`}
                  >
                    {skill.name}
                  </button>
                </Html>
              </group>
            </Float>
          </React.Fragment>
        );
      })}
    </group>
  );
};

export const SkillConstellation3D: React.FC<ConstellationProps> = (props) => {
  return (
    <div className="relative h-[480px] w-full rounded-2xl border border-slate-800/80 bg-slate-950/50 p-2 overflow-hidden shadow-2xl backdrop-blur-md">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-mono text-xs text-slate-400">
          3D Skill Galaxy • Interactive WebGL
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <span className="font-mono text-[11px] text-slate-400 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800">
          Drag to explore • Hover to inspect skill
        </span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 0, 2]} intensity={2.5} color="#38bdf8" />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#818cf8" />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#34d399" />

        <PresentationControls
          global={false}
          cursor={true}
          snap={false}
          speed={1.4}
          zoom={0.9}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI, Math.PI]}
        >
          <ConstellationMesh {...props} />
        </PresentationControls>
      </Canvas>
    </div>
  );
};
