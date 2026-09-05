import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Cpu, Sparkles, CheckCircle2, ShieldCheck, Globe, Building2, Award } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="h-5 w-5 text-cyan-400" />,
    Palette: <Palette className="h-5 w-5 text-purple-400" />,
    Cpu: <Cpu className="h-5 w-5 text-emerald-400" />,
    Sparkles: <Sparkles className="h-5 w-5 text-amber-400" />,
  };

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[130px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
          Core Engineering Philosophy
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          A developer who thinks in both code and pixels.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
          Frontend Engineer with 4.5+ years of experience building scalable, high-performance web applications using React.js. Specialized in developing pixel-perfect, WCAG-compliant user interfaces for enterprise banking and project management applications. Strong focus on clean architecture, reusable component design, and performance optimization.
        </p>
      </div>

      {/* 4 Core Pillars in Balanced 4-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {portfolioData.about.pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card-interactive p-6 rounded-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                  {iconMap[pillar.icon]}
                </div>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-800">
                  {pillar.badge}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="font-mono text-xs text-slate-400 mb-3">
                {pillar.subtitle}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                {pillar.description}
              </p>
            </div>

            {/* Bullet details */}
            <ul className="space-y-2 pt-4 border-t border-slate-800/60">
              {pillar.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2 text-[12px] text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Enterprise Qualifications Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <span className="font-heading text-sm font-bold text-white block">
              Infosys &amp; Incture
            </span>
            <span className="font-mono text-xs text-slate-400">
              Enterprise Frontend Delivery
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 shrink-0">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <span className="font-heading text-sm font-bold text-white block">
              WCAG &amp; ARIA Compliant
            </span>
            <span className="font-mono text-xs text-slate-400">
              100% Accessible Architecture
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-400 shrink-0">
            <Globe className="h-6 w-6" />
          </div>
          <div>
            <span className="font-heading text-sm font-bold text-white block">
              i18next Internationalization
            </span>
            <span className="font-mono text-xs text-slate-400">
              Global Multi-Locale Systems
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-amber-950/60 border border-amber-500/30 text-amber-400 shrink-0">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <span className="font-heading text-sm font-bold text-white block">
              Value Card Recognized
            </span>
            <span className="font-mono text-xs text-slate-400">
              Department Director Award
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
