import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, Sparkles, Building2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Journey: React.FC = () => {
  const [activeExpIdx, setActiveExpIdx] = useState(0);
  const activeExp = portfolioData.experiences[activeExpIdx];

  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
          Career Track Record
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Experience &amp; Background
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
          4.5+ years of enterprise engineering experience delivering pixel-perfect, scalable web applications for banking and workflow automation.
        </p>
      </div>

      {/* Work Experience Interactive Station */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Column: Company Switcher (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-1">
            Work Experience
          </span>
          {portfolioData.experiences.map((exp, idx) => {
            const isSelected = activeExpIdx === idx;
            return (
              <button
                key={exp.id}
                type="button"
                onClick={() => setActiveExpIdx(idx)}
                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/40 text-white shadow-lg shadow-cyan-500/10 scale-[1.02]'
                    : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading text-lg font-bold text-white flex items-center gap-2">
                    <Building2 className={`h-4 w-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                    {exp.company}
                  </span>
                  {exp.isCurrent && (
                    <span className="font-mono text-[10px] text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      Present
                    </span>
                  )}
                </div>

                <p className="font-mono text-xs text-cyan-300/90 font-medium mb-1">
                  {exp.role}
                </p>

                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Experience Card (8 cols) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-1">
                      {activeExp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-cyan-400 font-mono">
                      <span>{activeExp.company}</span>
                      <span>•</span>
                      <span>{activeExp.location}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                    {activeExp.period}
                  </span>
                </div>

                {/* Key Deliverables Bullet Points */}
                <ul className="space-y-4 mb-8">
                  {activeExp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block mb-2">
                  Stack &amp; Core Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeExp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Education & Certifications 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Education (5 cols) */}
        <div className="md:col-span-5">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block">
                    Education
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">
                    Bachelor of Computer Application (BCA)
                  </h3>
                </div>
              </div>

              <div className="mb-4">
                <p className="font-heading text-sm text-cyan-300 font-medium">
                  {portfolioData.education[0].institution}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                  <span>{portfolioData.education[0].location}</span>
                  <span>•</span>
                  <span>{portfolioData.education[0].period}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block mb-2">
                  Relevant Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {portfolioData.education[0].courses.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 font-mono text-[11px] text-slate-500">
              Computer Science &amp; Software Foundations
            </div>
          </div>
        </div>

        {/* Acknowledgements & Certifications (7 cols) */}
        <div className="md:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-xl bg-amber-950 border border-amber-500/30 text-amber-400">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-amber-400 uppercase tracking-wider block">
                    Honors &amp; Accreditation
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">
                    Acknowledgements &amp; Certifications
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {portfolioData.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-heading text-sm font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                        {cert.title}
                      </h4>
                      <span className="font-mono text-[10px] text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-full">
                        {cert.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400 mb-2">
                      <span className="text-cyan-300">{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
