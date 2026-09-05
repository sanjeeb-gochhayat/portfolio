import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Zap, Layers, GitMerge, Check, Sparkles } from 'lucide-react';

export const TechnicalShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'react' | 'performance' | 'architecture' | 'problem-solving'>('react');

  // Tab 1: React Rendering State
  const [parentCount, setParentCount] = useState(0);
  const [unmemoizedRenderCount, setUnmemoizedRenderCount] = useState(0);
  const [memoizedRenderCount, setMemoizedRenderCount] = useState(0);
  const [memoizeBoth, setMemoizeBoth] = useState(false);
  const [lastTriggered, setLastTriggered] = useState<number | null>(null);

  const triggerStateChange = () => {
    setParentCount(p => p + 1);
    setUnmemoizedRenderCount(c => memoizeBoth ? c : c + 1);
    // Memoized child props haven't changed, so it does not re-render
    setLastTriggered(Date.now());
  };

  const resetReactSim = () => {
    setParentCount(0);
    setUnmemoizedRenderCount(0);
    setMemoizedRenderCount(0);
  };

  // Tab 2: Virtualization State
  const [totalItems, setTotalItems] = useState(5000);
  const [isVirtualized, setIsVirtualized] = useState(true);

  // Tab 3: Component Architecture Layer
  const [selectedLayer, setSelectedLayer] = useState<'tokens' | 'atoms' | 'molecules' | 'organisms'>('organisms');

  // Tab 4: Problem Solving Pipeline Step
  const [currentStep, setCurrentStep] = useState(0);

  const problemSolvingStages = [
    {
      title: "01. Problem Definition",
      badge: "Discovery",
      scenario: "Search Typeahead Race Condition & DOM Jitter",
      desc: "Users typing rapidly into a search bar trigger multiple out-of-order asynchronous fetch responses, causing earlier network queries to overwrite newer search results and freezing the main thread.",
      insight: "Root cause: Network responses are non-deterministic; request #1 can resolve after request #2."
    },
    {
      title: "02. Analysis & Profiling",
      badge: "Diagnostics",
      scenario: "DevTools Network & Performance Audit",
      desc: "Identified that every keystroke dispatched an uncontrolled network request without cancellation tokens, resulting in 40+ concurrent inflight HTTP calls and heavy DOM recalculations.",
      insight: "Need request cancellation + input throttling before network dispatch."
    },
    {
      title: "03. Strategic Approach",
      badge: "Architecture",
      scenario: "AbortController + Custom Debounce Hook",
      desc: "Design a decoupled React hook useDebouncedSearch utilizing the native AbortController Web API and a 250ms debounce window to guarantee only the latest query is executed.",
      insight: "Leverage standard browser APIs instead of adding bulky external dependencies."
    },
    {
      title: "04. Clean Implementation",
      badge: "Code",
      scenario: "Reactive Cancellation Lifecycle",
      desc: "Hook creates an AbortController instance on query change, aborting previous signal on cleanup (controller.abort()), and updating state only if not aborted.",
      code: `useEffect(() => {
  const controller = new AbortController();
  fetchResults(query, { signal: controller.signal })
    .then(data => setData(data))
    .catch(err => { if (err.name !== 'AbortError') setError(err); });
  return () => controller.abort();
}, [debouncedQuery]);`
    },
    {
      title: "05. Optimization & Edge Cases",
      badge: "Profiling",
      scenario: "Memoized Cache & Empty State Handling",
      desc: "Integrated an LRU client cache to instantly return results for repeated keystrokes (e.g. backspacing) with zero network latency, plus keyboard accessibility (ARIA combobox).",
      insight: "Cache hit latency: 0ms. Zero unnecessary network roundtrips."
    },
    {
      title: "06. Verified Result",
      badge: "Verification",
      scenario: "Zero Race Conditions & 90% Network Reduction",
      desc: "Network traffic during active typing was reduced by 90%, zero stale results ever overwrote the UI, and search interaction scored a flawless 100 on Lighthouse Performance.",
      metric: "90% Network Reduction • Instant Sub-second Response"
    }
  ];

  return (
    <section id="engineering" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[160px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
          Engineering Mindset
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          How I Think
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
          Demonstrating frontend engineering depth beyond basic syntax: render lifecycle mechanics, virtualization optimization, modular architecture, and structured problem solving.
        </p>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'react', label: 'React Rendering & Memo', icon: RefreshCw },
            { id: 'performance', label: 'Virtualization & Perf', icon: Zap },
            { id: 'architecture', label: 'Component Architecture', icon: Layers },
            { id: 'problem-solving', label: 'Problem Solving Pipeline', icon: GitMerge },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Demonstration Panel */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800/90 shadow-2xl relative">
        {/* TAB 1: React Rendering & Memoization */}
        {activeTab === 'react' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Visualizing React Render Cycles &amp; Memoization
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                By default in React, when a parent component re-renders, all child components re-render recursively—even if their props haven't changed. Test how wrapping a child in <code className="text-cyan-300">React.memo()</code> skips rendering through shallow prop comparison.
              </p>
            </div>

            {/* Interactive Workbench */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
              {/* Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={triggerStateChange}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold hover:brightness-110 transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                  >
                    ⚡ Trigger Parent State Change
                  </button>
                  <button
                    type="button"
                    onClick={resetReactSim}
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs hover:text-white cursor-pointer"
                  >
                    Reset
                  </button>
                </div>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-slate-300">
                  <input
                    type="checkbox"
                    checked={memoizeBoth}
                    onChange={(e) => setMemoizeBoth(e.target.checked)}
                    className="rounded border-slate-700 bg-slate-900 text-cyan-400 focus:ring-cyan-400 h-4 w-4"
                  />
                  <span>Wrap Child A in React.memo</span>
                </label>
              </div>

              {/* Tree Diagram */}
              <div className="flex flex-col items-center">
                {/* Parent Component */}
                <motion.div
                  animate={{ scale: lastTriggered ? [1, 1.04, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-2xl border border-cyan-500/50 bg-cyan-950/30 text-center min-w-[280px] shadow-lg shadow-cyan-500/10"
                >
                  <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider block">
                    &lt;ParentComponent /&gt;
                  </span>
                  <p className="font-heading font-bold text-lg text-white mt-1">
                    State: count = {parentCount}
                  </p>
                  <span className="font-mono text-[10px] text-slate-400">
                    Triggers re-render on each count++
                  </span>
                </motion.div>

                {/* Connecting lines */}
                <div className="h-8 w-0.5 bg-slate-700 my-1" />
                <div className="w-64 h-0.5 bg-slate-700 relative">
                  <div className="absolute left-0 top-0 h-4 w-0.5 bg-slate-700" />
                  <div className="absolute right-0 top-0 h-4 w-0.5 bg-slate-700" />
                </div>
                <div className="h-4" />

                {/* Children Components */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl">
                  {/* Child A */}
                  <motion.div
                    animate={{
                      scale: lastTriggered && !memoizeBoth ? [1, 1.05, 1] : 1,
                      borderColor: lastTriggered && !memoizeBoth ? '#f43f5e' : '#334155'
                    }}
                    transition={{ duration: 0.35 }}
                    className={`p-5 rounded-2xl border transition-colors ${
                      memoizeBoth
                        ? 'bg-slate-900/50 border-slate-800'
                        : 'bg-rose-950/20 border-rose-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-slate-300">
                        {memoizeBoth ? '<ChildA memo />' : '<ChildA (Unmemoized) />'}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                        memoizeBoth
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-950 text-rose-300 border border-rose-500/30'
                      }`}>
                        {memoizeBoth ? 'Optimized' : 'Re-renders'}
                      </span>
                    </div>
                    <p className="font-mono text-2xl font-bold text-white mb-1">
                      {unmemoizedRenderCount}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Total Renders Executed
                    </p>
                    <span className="font-mono text-[10px] text-rose-400 block mt-2">
                      {memoizeBoth ? '✓ Shallow props identical: Skipped' : '⚠ Parent state changed: Re-evaluated'}
                    </span>
                  </motion.div>

                  {/* Child B */}
                  <motion.div
                    className="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/20"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-slate-300">
                        &lt;ChildB React.memo /&gt;
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                        Protected
                      </span>
                    </div>
                    <p className="font-mono text-2xl font-bold text-emerald-400 mb-1">
                      {memoizedRenderCount}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Total Renders Executed
                    </p>
                    <span className="font-mono text-[10px] text-emerald-400 block mt-2">
                      ✓ Props unchanged: Zero DOM calculation
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Performance & Virtualization */}
        {activeTab === 'performance' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                DOM Virtualization vs Unwindowed Rendering
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                When rendering datasets with thousands of entries, placing each element into the browser DOM creates immense memory overhead and layout recalculations. Virtualization renders only the elements visible in the user's viewport.
              </p>
            </div>

            {/* Interactive Comparator */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
              {/* Slider for Dataset Size */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-slate-300">
                    Dataset Size: <strong className="text-cyan-400">{totalItems.toLocaleString()} items</strong>
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsVirtualized(false)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                        !isVirtualized
                          ? 'bg-rose-950 border border-rose-500/40 text-rose-300'
                          : 'bg-slate-900 text-slate-500'
                      }`}
                    >
                      Raw DOM (Unoptimized)
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsVirtualized(true)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                        isVirtualized
                          ? 'bg-emerald-950 border border-emerald-500/40 text-emerald-300'
                          : 'bg-slate-900 text-slate-500'
                      }`}
                    >
                      Virtualized Window
                    </button>
                  </div>
                </div>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="500"
                  value={totalItems}
                  onChange={(e) => setTotalItems(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
                    Active DOM Nodes
                  </span>
                  <p className={`font-mono text-2xl font-bold ${isVirtualized ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isVirtualized ? '12 Nodes' : `${totalItems.toLocaleString()} Nodes`}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {isVirtualized ? 'Only elements currently in viewport' : 'Severe DOM memory pressure'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
                    Frame Render Time
                  </span>
                  <p className={`font-mono text-2xl font-bold ${isVirtualized ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isVirtualized ? '1.8 ms' : `${(totalItems * 0.007).toFixed(1)} ms`}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {isVirtualized ? 'Smooth Frame Budget (< 16ms)' : 'Frame drop & input stutter'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
                    Garbage Collection
                  </span>
                  <p className={`font-mono text-2xl font-bold ${isVirtualized ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isVirtualized ? 'Near Zero' : 'High Thrashing'}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {isVirtualized ? 'Recycled node containers' : 'Frequent memory sweeps'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Component Architecture */}
        {activeTab === 'architecture' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Atomic &amp; Modular Design System Architecture
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Clean frontend architecture prevents code sprawl by decoupling visual tokens, stateless primitive components (atoms), composite widgets (molecules), and orchestrated business organisms.
              </p>
            </div>

            {/* Interactive Layer Explorer */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Layer Buttons */}
              <div className="md:col-span-4 flex flex-col gap-2">
                {[
                  { id: 'tokens', title: '01. Design Tokens', desc: 'Colors, Radii, Shadows, Spacers' },
                  { id: 'atoms', title: '02. Primitives / Atoms', desc: 'Button, Input, Badge, Icon, Text' },
                  { id: 'molecules', title: '03. Molecules', desc: 'SearchInput, StatCard, NavItem' },
                  { id: 'organisms', title: '04. Organisms', desc: 'ProjectGallery, TelemetryTable' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setSelectedLayer(lvl.id as any)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedLayer === lvl.id
                        ? 'border-cyan-400 bg-cyan-950/30 text-white shadow-lg shadow-cyan-500/10'
                        : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <p className="font-heading font-semibold text-xs text-white">
                      {lvl.title}
                    </p>
                    <p className="font-mono text-[11px] text-slate-400 mt-0.5">
                      {lvl.desc}
                    </p>
                  </button>
                ))}
              </div>

              {/* Layer Preview Frame */}
              <div className="md:col-span-8 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 min-h-[300px] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider block mb-2">
                    Layer Inspection: {selectedLayer.toUpperCase()}
                  </span>

                  {selectedLayer === 'tokens' && (
                    <div className="space-y-4">
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Single source of truth via CSS custom properties. Changes automatically cascade without re-compilation.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="h-6 w-full rounded bg-cyan-400 mb-2" />
                          <span className="font-mono text-[10px] text-slate-400 block">--color-cyan</span>
                          <span className="font-mono text-[10px] text-cyan-300">#38bdf8</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="h-6 w-full rounded bg-indigo-500 mb-2" />
                          <span className="font-mono text-[10px] text-slate-400 block">--color-indigo</span>
                          <span className="font-mono text-[10px] text-indigo-300">#6366f1</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="h-6 w-full rounded bg-emerald-400 mb-2" />
                          <span className="font-mono text-[10px] text-slate-400 block">--color-emerald</span>
                          <span className="font-mono text-[10px] text-emerald-300">#34d399</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="h-6 w-full rounded bg-slate-800 mb-2" />
                          <span className="font-mono text-[10px] text-slate-400 block">--radius-xl</span>
                          <span className="font-mono text-[10px] text-slate-300">16px</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedLayer === 'atoms' && (
                    <div className="space-y-4">
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Stateless UI primitives. Built with keyboard accessibility, ARIA roles, and decoupled styling variants.
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <button type="button" className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs">
                          Button (Primary)
                        </button>
                        <button type="button" className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs">
                          Button (Ghost)
                        </button>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                          Badge Atom
                        </span>
                        <input
                          type="text"
                          readOnly
                          value="Input Primitive..."
                          className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 w-36 font-mono"
                        />
                      </div>
                    </div>
                  )}

                  {selectedLayer === 'molecules' && (
                    <div className="space-y-4">
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Composed combinations of atoms functioning as a single unit with internal interaction logic.
                      </p>
                      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 max-w-sm">
                        <span className="font-mono text-[10px] text-slate-500 block mb-1">Molecule: SearchFilterBar</span>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            readOnly
                            value="Filter components..."
                            className="flex-grow px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono"
                          />
                          <button type="button" className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedLayer === 'organisms' && (
                    <div className="space-y-4">
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Full functional features uniting molecules and state controllers into complex application views.
                      </p>
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                          <span className="font-heading text-xs font-bold text-white">Project Case Grid Organism</span>
                          <span className="font-mono text-[10px] text-emerald-400">Zero coupling</span>
                        </div>
                        <p className="text-xs text-slate-400">
                          Orchestrates state, virtualization, telemetry events, and responsive breakpoints seamlessly.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Architecture Pattern: Atomic Hierarchy</span>
                  <span className="text-cyan-400">Reusable • Testable • Maintainable</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Problem Solving Pipeline */}
        {activeTab === 'problem-solving' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                The 6-Stage Engineering Progression
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                How I approach complex software challenges: breaking ambiguity into systematic phases from initial root-cause analysis through clean implementation and measured verification.
              </p>
            </div>

            {/* Stepper Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {problemSolvingStages.map((stage, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentStep(idx)}
                  className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                    currentStep === idx
                      ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 shadow-md shadow-cyan-500/10'
                      : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="font-mono text-[10px] text-slate-500 block">Phase {idx + 1}</span>
                  <span className="font-heading font-semibold text-xs truncate block">{stage.badge}</span>
                </button>
              ))}
            </div>

            {/* Current Step Showcase */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30">
                  {problemSolvingStages[currentStep].title}
                </span>
                <span className="font-heading text-xs text-slate-400">
                  Real-World Case Study
                </span>
              </div>

              <h4 className="font-heading text-xl font-bold text-white">
                {problemSolvingStages[currentStep].scenario}
              </h4>

              <p className="text-slate-300 text-sm leading-relaxed">
                {problemSolvingStages[currentStep].desc}
              </p>

              {problemSolvingStages[currentStep].insight && (
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Key Engineering Takeaway: {problemSolvingStages[currentStep].insight}</span>
                </div>
              )}

              {problemSolvingStages[currentStep].code && (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 overflow-x-auto">
                  <pre className="font-mono text-xs text-emerald-300 leading-relaxed">
                    {problemSolvingStages[currentStep].code}
                  </pre>
                </div>
              )}

              {problemSolvingStages[currentStep].metric && (
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Result: {problemSolvingStages[currentStep].metric}</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t border-slate-800 text-xs font-mono">
                <button
                  type="button"
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep(p => Math.max(0, p - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 disabled:opacity-30 cursor-pointer"
                >
                  ← Previous
                </button>
                <span className="text-slate-500">Step {currentStep + 1} of 6</span>
                <button
                  type="button"
                  disabled={currentStep === problemSolvingStages.length - 1}
                  onClick={() => setCurrentStep(p => Math.min(problemSolvingStages.length - 1, p + 1))}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 disabled:opacity-30 cursor-pointer"
                >
                  Next Phase →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
