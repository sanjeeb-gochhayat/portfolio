import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#02050c] py-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Title */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-heading text-sm font-bold tracking-wider text-white">
              {portfolioData.personal.name}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs text-slate-500">Portfolio 2026</span>
          </div>
          <p className="text-xs text-slate-500 font-light">
            Designed with aesthetic balance • Engineered for scalable enterprise performance
          </p>
        </div>

        {/* Center: Live Time / Status */}
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Local Time:</span>
          <span className="text-slate-200 font-semibold">{timeStr || '10:50 AM'}</span>
        </div>

        {/* Right: Back to top button */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 text-cyan-400" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-600">
        <span>Built with React 19, Three.js &amp; Tailwind CSS</span>
        <span>© {new Date().getFullYear()} Sanjeeb Gochhayat. All rights reserved.</span>
      </div>
    </footer>
  );
};
