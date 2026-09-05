import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Wand2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';

export const CreativeGallery: React.FC = () => {
  const [activePhotoshopLayer, setActivePhotoshopLayer] = useState<number>(3); // all layers active

  const psLayers = [
    { id: 0, name: 'Background Matte & Grid', opacity: '100%', blend: 'Normal' },
    { id: 1, name: '3D Ambient Occlusion & Diffuse', opacity: '90%', blend: 'Multiply' },
    { id: 2, name: 'Volumetric Light & Glow Ray', opacity: '75%', blend: 'Screen' },
    { id: 3, name: 'Color Grade & Curve Balance', opacity: '100%', blend: 'Color' },
  ];

  return (
    <section id="creative" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[160px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
          Visual Craft
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Code Meets Creativity.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
          Engineering gives web applications structure and speed; visual design, Photoshop compositing, and storytelling give them emotional impact and soul.
        </p>
      </div>

      {/* Visual Creative Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {portfolioData.creativeWorks.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <TiltCard maxTilt={5} className="h-full">
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-purple-500/40 transition-colors">
                {/* Visual Art Canvas mockup */}
                <div
                  className="h-44 w-full rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-slate-800/80"
                  style={{
                    background: `radial-gradient(circle at 60% 40%, ${item.accentColor}20, #030712 90%)`
                  }}
                >
                  {/* Decorative Geometric Art */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className="h-28 w-28 rounded-full border border-dashed opacity-40 animate-spin [animation-duration:25s]"
                      style={{ borderColor: item.accentColor }}
                    />
                    <div
                      className="absolute h-20 w-20 rounded-2xl border backdrop-blur-sm -rotate-12 transition-transform group-hover:rotate-0 duration-500"
                      style={{ borderColor: `${item.accentColor}60`, backgroundColor: `${item.accentColor}10` }}
                    />
                    <div
                      className="absolute h-10 w-10 rounded-full shadow-lg"
                      style={{ backgroundColor: item.accentColor, boxShadow: `0 0 25px ${item.accentColor}` }}
                    />
                  </div>

                  <span className="absolute top-3 left-3 font-mono text-[10px] text-slate-400 px-2.5 py-0.5 rounded bg-slate-900/80 border border-slate-800">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Interactive Photoshop Layer Compositing Studio */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div>
            <span className="font-mono text-xs text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Wand2 className="h-4 w-4" />
              <span>Interactive Photoshop Layer Stack</span>
            </span>
            <h3 className="font-heading text-2xl font-bold text-white mt-1">
              Multi-Pass Digital Compositing
            </h3>
          </div>
          <span className="font-mono text-xs text-slate-400">
            Click layers to toggle pass visibility
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Photoshop Layers list (5 cols) */}
          <div className="md:col-span-5 space-y-2">
            {psLayers.map((layer) => {
              const isActive = activePhotoshopLayer >= layer.id;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActivePhotoshopLayer(layer.id)}
                  className={`w-full p-3.5 rounded-xl text-left border flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? 'border-purple-500/50 bg-purple-950/20 text-white shadow-md'
                      : 'border-slate-800 bg-slate-900/30 text-slate-500 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Eye className={`h-4 w-4 ${isActive ? 'text-purple-400' : 'text-slate-600'}`} />
                    <div>
                      <p className="font-mono text-xs font-semibold">{layer.name}</p>
                      <span className="text-[10px] text-slate-500">Mode: {layer.blend}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-400">{layer.opacity}</span>
                </button>
              );
            })}
          </div>

          {/* Canvas Live Composite Preview (7 cols) */}
          <div className="md:col-span-7 h-64 rounded-2xl border border-slate-800 bg-slate-950 relative overflow-hidden flex items-center justify-center p-6">
            {/* Layer 0: Grid background */}
            <div className={`absolute inset-0 bg-grid-pattern transition-opacity duration-300 ${activePhotoshopLayer >= 0 ? 'opacity-40' : 'opacity-0'}`} />

            {/* Layer 1: 3D Geometry */}
            <div className={`relative transition-all duration-300 ${activePhotoshopLayer >= 1 ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <div className="h-32 w-32 rounded-3xl border border-slate-700 bg-slate-900/90 shadow-2xl flex items-center justify-center rotate-12">
                <span className="font-mono text-xs text-slate-400">Geometry Pass</span>
              </div>
            </div>

            {/* Layer 2: Volumetric Lighting */}
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
                activePhotoshopLayer >= 2 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 60%)'
              }}
            />

            {/* Layer 3: Color Grade & Contrast */}
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
                activePhotoshopLayer >= 3 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                boxShadow: 'inset 0 0 100px rgba(56, 189, 248, 0.25)'
              }}
            />

            <div className="absolute bottom-3 right-3 font-mono text-[10px] text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
              Active Passes: {activePhotoshopLayer + 1}/4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
