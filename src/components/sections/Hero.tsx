import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Code2, Layers, Cpu, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { HeroScene } from '../3d/HeroScene';
import { CanvasLoader } from '../3d/CanvasLoader';
import { WebGLErrorBoundary } from '../3d/WebGLErrorBoundary';
import { MagneticButton } from '../ui/MagneticButton';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* 3D WebGL Background Canvas with Error Boundary */}
      <WebGLErrorBoundary fallbackTitle="Hero 3D Background">
        <Suspense fallback={<CanvasLoader />}>
          <HeroScene />
        </Suspense>
      </WebGLErrorBoundary>

      {/* Subtle radial lighting overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/30 to-[#030712] z-1" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] z-1" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle greeting beacon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/70 px-4 py-1.5 backdrop-blur-md mb-6 shadow-lg shadow-black/40"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          <span className="font-mono text-xs text-slate-300">
            Frontend Engineer • 4.5+ Years Experience • Infosys
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-4 uppercase"
        >
          <span className="text-gradient-cyan">
            {portfolioData.personal.name}
          </span>
        </motion.h1>

        {/* Primary Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-slate-200 max-w-3xl leading-snug mb-4"
        >
          Frontend Engineer <br className="hidden sm:inline" />
          <span className="text-cyan-300 font-semibold">building scalable, high-performance web applications.</span>
        </motion.h2>

        {/* Supporting Tech Stack Pills from Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-slate-400 mb-6"
        >
          <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-slate-300">React.js</span>
          <span className="text-cyan-400">•</span>
          <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-slate-300">JavaScript</span>
          <span className="text-cyan-400">•</span>
          <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-slate-300">TypeScript</span>
          <span className="text-cyan-400">•</span>
          <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-slate-300">Redux</span>
          <span className="text-cyan-400">•</span>
          <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-slate-300">WCAG &amp; i18n</span>
        </motion.div>

        {/* Short Personal Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="max-w-2xl text-slate-400 text-base sm:text-lg font-light leading-relaxed mb-10"
        >
          "{portfolioData.personal.intro}"
        </motion.p>

        {/* Magnetic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
        >
          <MagneticButton
            onClick={() => scrollTo('projects')}
            variant="primary"
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold tracking-wide"
          >
            <span>Explore my work</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollTo('contact')}
            variant="secondary"
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium"
          >
            <span>Let's talk</span>
            <ArrowRight className="h-4 w-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
        </motion.div>

        {/* Engineering Value Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl w-full"
        >
          <div className="glass-card p-3.5 rounded-xl text-left border border-white/5 flex items-center gap-3">
            <Code2 className="h-5 w-5 text-cyan-400 shrink-0" />
            <div>
              <p className="font-heading text-xs font-semibold text-white">Component Systems</p>
              <p className="font-mono text-[11px] text-slate-400">Modular &amp; Scalable</p>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-xl text-left border border-white/5 flex items-center gap-3">
            <Layers className="h-5 w-5 text-indigo-400 shrink-0" />
            <div>
              <p className="font-heading text-xs font-semibold text-white">Design Fidelity</p>
              <p className="font-mono text-[11px] text-slate-400">Pixel-level Polish</p>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-xl text-left border border-white/5 flex items-center gap-3">
            <Cpu className="h-5 w-5 text-emerald-400 shrink-0" />
            <div>
              <p className="font-heading text-xs font-semibold text-white">Peak Performance</p>
              <p className="font-mono text-[11px] text-slate-400">Render Optimized</p>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-xl text-left border border-white/5 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-purple-400 shrink-0" />
            <div>
              <p className="font-heading text-xs font-semibold text-white">CS Fundamentals</p>
              <p className="font-mono text-[11px] text-slate-400">DSA &amp; Clean Logic</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator prompt */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-none p-0"
        aria-label="Scroll down to about section"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </motion.button>
    </section>
  );
};
