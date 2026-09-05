import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 h-[2px] transition-opacity duration-300 ${hasScrolled ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 origin-left shadow-[0_0_10px_rgba(56,189,248,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};
