import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../../data/portfolioData';
import { ContactOrb } from '../3d/ContactOrb';
import { CanvasLoader } from '../3d/CanvasLoader';
import { WebGLErrorBoundary } from '../3d/WebGLErrorBoundary';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#818cf8', '#34d399', '#c084fc']
    });
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
          Get in Touch
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
          Have something interesting to build?
        </h2>
        <p className="font-heading text-xl sm:text-2xl text-cyan-300 font-light max-w-2xl mx-auto">
          Let's create something worth remembering.
        </p>
      </div>

      {/* Center 3D Glowing Reactive Orb */}
      <div className="mb-12 flex justify-center">
        <WebGLErrorBoundary fallbackTitle="Interactive 3D Energy Orb">
          <Suspense fallback={<CanvasLoader />}>
            <ContactOrb />
          </Suspense>
        </WebGLErrorBoundary>
      </div>

      {/* Contact Interactive Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Left Column: Direct Links & Email Copy (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div>
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
                Direct Contact
              </span>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Whether you're looking for a dedicated frontend engineer, need architectural consulting, or want to collaborate on a spatial 3D interface:
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="truncate">
                    <span className="font-mono text-[10px] text-slate-500 block">Email Address</span>
                    <span className="font-mono text-xs text-slate-200 truncate block">
                      {portfolioData.personal.contact.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {copiedEmail && (
                <p className="font-mono text-[11px] text-emerald-400 mt-2 text-right">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Social Channels */}
            <div>
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-3">
                Social Profiles &amp; Code
              </span>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={portfolioData.personal.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white hover:border-slate-700 transition-colors group"
                >
                  <GithubIcon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                  <span className="font-mono text-[10px]">GitHub</span>
                </a>

                <a
                  href={portfolioData.personal.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors group"
                >
                  <LinkedinIcon className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[10px]">LinkedIn</span>
                </a>

                <a
                  href={portfolioData.personal.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white hover:border-purple-500/50 transition-colors group"
                >
                  <TwitterIcon className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[10px]">X</span>
                </a>
              </div>
            </div>

            <div className="pt-2 text-center">
              <span className="font-mono text-xs text-slate-500">
                {portfolioData.personal.location}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="h-16 w-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. I'll review your note and get back to you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading text-lg font-bold text-white">
                    Start a Conversation
                  </span>
                  <span className="font-mono text-[11px] text-cyan-400 flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Quick Dispatch
                  </span>
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-400 block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-400 block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-400 block mb-1.5">
                    Project / Message Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product, engineering vision, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
