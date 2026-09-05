import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Eye, Check } from 'lucide-react';
import { skillsData, skillCategories } from '../../data/skillsData';
import type { SkillNode } from '../../data/skillsData';
import { SkillConstellation3D } from '../3d/SkillConstellation3D';
import { CanvasLoader } from '../3d/CanvasLoader';
import { WebGLErrorBoundary } from '../3d/WebGLErrorBoundary';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(skillsData[0]); // default to JS

  const filteredSkills = skillsData.filter((skill) =>
    selectedCategory === 'all' ? true : skill.category === selectedCategory
  );

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
          Interactive Topology
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          3D Skill Constellation
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
          Engineering capabilities arranged as an interconnected constellation around a central Frontend Engineering nucleus. Hover or rotate to inspect depth.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`rounded-full px-4 py-1.5 text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Constellation Canvas + Real-Time Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left 3D View (7 cols) */}
        <div className="lg:col-span-7">
          <WebGLErrorBoundary fallbackTitle="3D Skill Constellation">
            <Suspense fallback={<CanvasLoader />}>
              <SkillConstellation3D
                activeSkill={hoveredSkill}
                onHoverSkill={setHoveredSkill}
                selectedCategory={selectedCategory}
              />
            </Suspense>
          </WebGLErrorBoundary>
        </div>

        {/* Right Detail Card / Inspector (5 cols) */}
        <div className="lg:col-span-5">
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 shadow-2xl relative min-h-[440px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-3.5 w-3.5 rounded-full shadow-md"
                          style={{ backgroundColor: hoveredSkill.color, boxShadow: `0 0 10px ${hoveredSkill.color}` }}
                        />
                        <h3 className="font-heading text-2xl font-bold text-white">
                          {hoveredSkill.name}
                        </h3>
                      </div>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400">
                        {hoveredSkill.level}
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="font-heading text-sm text-slate-300 font-medium mb-3 italic">
                      "{hoveredSkill.highlight}"
                    </p>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {hoveredSkill.description}
                    </p>

                    {/* Competency Tags */}
                    <div className="mb-6">
                      <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block mb-2">
                        Key Competencies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {hoveredSkill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
                          >
                            <Check className="h-3 w-3 text-cyan-400" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Inspector footer prompt */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>Node ID: {hoveredSkill.id}</span>
                    <span className="text-cyan-400/80">Vector: [{hoveredSkill.coords.join(', ')}]</span>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <Eye className="h-10 w-10 text-slate-600 mb-3 animate-pulse" />
                  <p className="font-heading text-slate-300 text-sm mb-1">
                    Hover over any 3D node
                  </p>
                  <p className="text-xs text-slate-500 font-mono max-w-xs">
                    Inspect technical depth, core competencies, and practical application.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Grid of All Skills below for instant accessibility / keyboard users */}
      <div className="mt-12">
        <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          <span>Quick Skill Directory ({filteredSkills.length})</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill?.id === skill.id;
            return (
              <button
                key={skill.id}
                type="button"
                onMouseEnter={() => setHoveredSkill(skill)}
                onClick={() => setHoveredSkill(skill)}
                className={`p-3 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                  isHovered
                    ? 'border-cyan-400 bg-cyan-950/30 text-white shadow-lg shadow-cyan-500/10'
                    : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="font-heading font-semibold text-xs truncate">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500 block truncate">
                  {skill.level}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
