import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import type { ProjectItem } from '../../data/projectsData';
import { TiltCard } from '../ui/TiltCard';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from '../ui/SocialIcons';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Render bespoke interactive preview for each project
  const renderProjectVisual = (project: ProjectItem) => {
    switch (project.previewType) {
      case 'interactive-ui':
        return (
          <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-[10px] text-cyan-400">@aura/primitives v2.4</span>
            </div>

            <div className="flex items-center justify-center gap-3 py-2">
              <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                &lt;SpringButton /&gt;
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-mono backdrop-blur-md">
                backdrop-blur(16px)
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/60 pt-2">
              <span>Token: cyan-glass</span>
              <span className="text-emerald-400">FPS: 60 (smooth)</span>
            </div>
          </div>
        );

      case 'dashboard':
        return (
          <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                STREAMING TELEMETRY
              </span>
              <span className="font-mono text-[10px] text-slate-500">15,000 nodes/sec</span>
            </div>

            <div className="flex items-end justify-between gap-1.5 h-20 px-2">
              {[40, 65, 25, 80, 55, 95, 45, 70, 85, 30, 90, 60, 75, 50, 85].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h}%`, `${(h * 1.3) % 100}%`, `${h}%`] }}
                  transition={{ repeat: Infinity, duration: 1.5 + (i % 3) * 0.4, ease: 'easeInOut' }}
                  className="w-full rounded-t-sm bg-gradient-to-t from-emerald-600 to-cyan-400 opacity-80"
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/60 pt-2">
              <span>Virtual List: 0 dropped frames</span>
              <span className="text-cyan-400">rAF Batched</span>
            </div>
          </div>
        );

      case '3d-canvas':
        return (
          <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-purple-400">WEBGL SHADER CANVAS</span>
              <span className="font-mono text-[10px] text-slate-500">Draw Calls: 1</span>
            </div>

            <div className="flex items-center justify-center my-auto">
              <div className="relative h-20 w-20 flex items-center justify-center animate-spin [animation-duration:12s]">
                <div className="absolute inset-0 border border-purple-500/50 rounded-lg rotate-45" />
                <div className="absolute inset-2 border border-cyan-400/60 rounded-lg -rotate-12" />
                <div className="h-4 w-4 bg-purple-500 rounded-full shadow-[0_0_15px_#c084fc]" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/60 pt-2">
              <span>Procedural Material</span>
              <span className="text-purple-400">Adaptive DPR: 2.0</span>
            </div>
          </div>
        );

      case 'algorithmic':
        return (
          <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-amber-400">AST RUNTIME ENGINE</span>
              <span className="font-mono text-[10px] text-slate-500">Complexity: O(log n)</span>
            </div>

            <div className="flex items-center justify-center gap-2 py-4 max-w-full overflow-x-auto">
              {[12, 24, 37, 49, 61, 78, 92].map((num, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center w-8 h-12 rounded-lg border font-mono text-xs font-bold shrink-0 ${
                    i === 3
                      ? 'border-amber-400 bg-amber-400/20 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.4)]'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400'
                  }`}
                >
                  <span>{num}</span>
                  <span className="text-[8px] text-slate-500">i={i}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/60 pt-2">
              <span>Target: 49 found in 2 steps</span>
              <span className="text-amber-400">Generator fn*</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-cyan-500/5 rounded-full blur-[160px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
          Centerpiece
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Cinematic Project Showcase
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
          Engineered product case studies combining technical rigor, custom frontend architectures, performance optimizations, and design elegance.
        </p>
      </div>

      {/* Project Cards Grid with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <TiltCard
              maxTilt={6}
              className="h-full cursor-pointer group"
              onClick={() => setActiveProject(project)}
            >
              <div className="h-full rounded-2xl border border-slate-800/90 bg-slate-950/70 overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.2)]">
                {/* Visual Preview Frame */}
                {renderProjectVisual(project)}

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded-full">
                          <Sparkles className="h-3 w-3" />
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-cyan-400 font-medium mb-1">
                      {project.company}
                    </p>
                    <p className="font-heading text-xs text-slate-400 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Impact Chip */}
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-6">
                      <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block mb-1">
                        Impact &amp; Architecture
                      </span>
                      <p className="text-xs text-slate-300 font-medium">
                        {project.impactResult}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform cursor-pointer bg-transparent border-none p-0"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
