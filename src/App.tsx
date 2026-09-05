import React from 'react';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { TechnicalShowcase } from './components/sections/TechnicalShowcase';
import { Journey } from './components/sections/Journey';
import { CreativeGallery } from './components/sections/CreativeGallery';
import { DsaShowcase } from './components/sections/DsaShowcase';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Custom Lerped Magnetic Cursor */}
      <CustomCursor />

      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col space-y-4 w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TechnicalShowcase />
        <Journey />
        <CreativeGallery />
        <DsaShowcase />
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
};

export default App;
