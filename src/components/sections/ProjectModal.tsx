import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, ShieldAlert, Cpu, Sparkles, Layers } from 'lucide-react';
import type { ProjectItem } from '../../data/projectsData';
import { GithubIcon } from '../ui/SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030712]/80 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700/80 bg-slate-950 p-6 sm:p-10 shadow-2xl z-10 custom-scrollbar"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="font-mono text-xs text-slate-500">Case Study</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-1">
              {project.title}
            </h2>
            <p className="font-mono text-xs text-cyan-400 font-medium mb-2">
              {project.company}
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-light">
              {project.subtitle}
            </p>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-slate-950 font-medium text-xs hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/20"
                >
                  <span>Live Experience</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium text-xs hover:text-white hover:border-slate-700 transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Case Study Body Sections */}
          <div className="space-y-8">
            {/* Overview */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800">
              <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>Executive Summary</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Problem & Impact 2-column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20">
                <h4 className="font-heading text-sm font-semibold text-rose-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-rose-400" />
                  <span>The Core Problem</span>
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
                <h4 className="font-heading text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Measured Result &amp; Impact</span>
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.impactResult}
                </p>
              </div>
            </div>

            {/* My Contribution */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="font-heading text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-cyan-400" />
                <span>Engineering Contribution</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.myContribution}
              </p>
            </div>

            {/* Key Technical Challenge */}
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/20">
              <h4 className="font-heading text-sm font-semibold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-amber-400" />
                <span>Key Technical Challenge &amp; Solution</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.keyChallenge}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="h-4 w-4 text-indigo-400" />
                <span>Architectural Patterns Implemented</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.architectureHighlights.map((arch, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    <span className="text-cyan-400 block mb-1">Pattern #{i + 1}</span>
                    {arch}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
                Stack Applied
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
