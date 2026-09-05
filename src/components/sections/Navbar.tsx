import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'journey', label: 'Experience' },
  { id: 'creative', label: 'Creative' },
  { id: 'dsa', label: 'DSA' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll spy
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 group cursor-pointer bg-transparent border-none p-0 text-left"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/80 group-hover:border-cyan-400/80 transition-all duration-300 shadow-md">
              <span className="font-heading font-bold text-sm tracking-wider text-cyan-400 group-hover:scale-105 transition-transform">
                SG
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading text-xs font-semibold tracking-wider text-slate-200 group-hover:text-white transition-colors">
                SANJEEB GOCHHAYAT
              </span>
              <span className="font-mono text-[10px] text-cyan-400/80">
                Frontend Engineer
              </span>
            </div>
          </button>

          {/* Floating Pill Navigation for Desktop */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/70 px-4 py-1.5 backdrop-blur-xl shadow-2xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  type="button"
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/25 to-indigo-500/25 border border-cyan-400/40 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Availability badge & Talk CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 text-[11px] font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{portfolioData.personal.status}</span>
            </div>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/30 px-3.5 py-1.5 text-xs font-medium text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.15)]"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-slate-800 bg-slate-950/95 p-6 backdrop-blur-2xl shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    type="button"
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="h-4 w-4 text-cyan-400" />}
                  </button>
                );
              })}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for work</span>
                </div>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-cyan-500/20"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
