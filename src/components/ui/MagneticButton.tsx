import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  strength?: number; // Distance pull multiplier
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  variant = 'primary',
  strength = 0.35,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full px-6 py-3 select-none text-sm group";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:brightness-110",
    secondary: "glass-panel text-slate-100 border border-white/10 hover:border-cyan-400/40 hover:bg-white/5",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
    glow: "bg-slate-900/90 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      data-interactive="true"
    >
      <div className={`${baseStyles} ${variants[variant]} ${className}`}>
        <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full cursor-pointer bg-transparent border-none p-0">
      {content}
    </button>
  );
};
