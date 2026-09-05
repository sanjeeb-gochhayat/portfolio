import React, { useState } from 'react';
import { Binary, RotateCcw, ChevronRight, GitBranch } from 'lucide-react';
import { dsaConcepts } from '../../data/dsaData';
import type { DsaConcept } from '../../data/dsaData';

export const DsaShowcase: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<DsaConcept>(dsaConcepts[0]);

  // Binary Search State Machine
  const sortedArray = [4, 12, 23, 35, 47, 59, 68, 79, 91, 104];
  const [bsStep, setBsStep] = useState(0);

  const bsSteps = [
    { low: 0, high: 9, mid: 4, found: false, explanation: "Checking mid index 4 (val: 47). Since 47 < 59, eliminate left half. New low = 5." },
    { low: 5, high: 9, mid: 7, found: false, explanation: "Checking mid index 7 (val: 79). Since 79 > 59, eliminate right half. New high = 6." },
    { low: 5, high: 6, mid: 5, found: true, explanation: "Checking mid index 5 (val: 59). Target 59 found in 3 logarithmic comparisons!" },
  ];

  const currentBs = bsSteps[Math.min(bsStep, bsSteps.length - 1)];

  // BST Traversal State
  const [activeTraversal, setActiveTraversal] = useState<'inorder' | 'preorder' | 'postorder'>('inorder');
  const [visitedNodes, setVisitedNodes] = useState<number[]>([]);
  const [isTraversing, setIsTraversing] = useState(false);

  const traversalOrders = {
    inorder: [20, 30, 40, 50, 60, 70, 80],
    preorder: [50, 30, 20, 40, 70, 60, 80],
    postorder: [20, 40, 30, 60, 80, 70, 50],
  };

  const runTraversal = (type: 'inorder' | 'preorder' | 'postorder') => {
    setActiveTraversal(type);
    setIsTraversing(true);
    setVisitedNodes([]);

    const sequence = traversalOrders[type];
    sequence.forEach((val, i) => {
      setTimeout(() => {
        setVisitedNodes(prev => [...prev, val]);
        if (i === sequence.length - 1) setIsTraversing(false);
      }, (i + 1) * 350);
    });
  };

  return (
    <section id="dsa" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
          CS Fundamentals
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Algorithms &amp; Problem Solving
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
          I don't just build interfaces. I understand the underlying computer science fundamentals that make modern software scalable, performant, and memory-conscious.
        </p>
      </div>

      {/* Main Interactive Workstation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive Visual Playground (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Playground Card 1: Binary Search Visualizer */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Binary className="h-5 w-5 text-amber-400" />
                <h3 className="font-heading text-lg font-bold text-white">
                  Binary Search Step-by-Step
                </h3>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300">
                Time: O(log n)
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Searching for target <strong className="text-amber-300 font-mono">59</strong> in a sorted array of 10 elements. Watch the search space halve at each step.
            </p>

            {/* Array Elements Visualizer */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-6 overflow-x-auto py-2">
              {sortedArray.map((val, idx) => {
                const isMid = idx === currentBs.mid;
                const isEliminated = idx < currentBs.low || idx > currentBs.high;
                const isTargetFound = currentBs.found && isMid;

                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center justify-center w-9 sm:w-11 h-14 sm:h-16 rounded-xl border transition-all duration-300 font-mono text-xs font-bold ${
                      isTargetFound
                        ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.5)] scale-105'
                        : isMid
                        ? 'border-amber-400 bg-amber-400/20 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.4)] scale-105'
                        : isEliminated
                        ? 'border-slate-800/40 bg-slate-950/40 text-slate-700 opacity-40'
                        : 'border-slate-700 bg-slate-900 text-slate-200'
                    }`}
                  >
                    <span>{val}</span>
                    <span className="text-[9px] text-slate-500 font-normal">[{idx}]</span>
                  </div>
                );
              })}
            </div>

            {/* Pointers Legend & Step Description */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono space-y-2 mb-6">
              <div className="flex flex-wrap gap-4 text-slate-400">
                <span>Low: <strong className="text-cyan-400">[{currentBs.low}]</strong></span>
                <span>Mid: <strong className="text-amber-400">[{currentBs.mid}] = {sortedArray[currentBs.mid]}</strong></span>
                <span>High: <strong className="text-indigo-400">[{currentBs.high}]</strong></span>
              </div>
              <p className="text-slate-300 text-xs">
                {currentBs.explanation}
              </p>
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setBsStep(0)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-500">
                  Step {bsStep + 1} of {bsSteps.length}
                </span>
                <button
                  type="button"
                  disabled={bsStep >= bsSteps.length - 1}
                  onClick={() => setBsStep(p => p + 1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-semibold text-xs hover:bg-amber-400 disabled:opacity-30 cursor-pointer shadow-md shadow-amber-500/20"
                >
                  <span>Step Forward</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Playground Card 2: Binary Search Tree (BST) Traversal */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-cyan-400" />
                <h3 className="font-heading text-lg font-bold text-white">
                  BST Traversal Simulator
                </h3>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                O(n) Node Visit
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm mb-4">
              Tree traversal mirrors React Fiber traversal and AST syntax manipulation. Select an order to watch the traversal path live.
            </p>

            {/* Traversal Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(['inorder', 'preorder', 'postorder'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  disabled={isTraversing}
                  onClick={() => runTraversal(type)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    activeTraversal === type
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {type === 'inorder' ? 'In-Order (Left, Root, Right)' : type === 'preorder' ? 'Pre-Order (Root, Left, Right)' : 'Post-Order (Left, Right, Root)'}
                </button>
              ))}
            </div>

            {/* Tree Node Visual Diagram */}
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-4">
              {/* Level 1: Root 50 */}
              <div className="flex justify-center mb-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border font-mono text-xs font-bold transition-all duration-300 ${
                    visitedNodes.includes(50)
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.5)] scale-110'
                      : 'border-slate-700 bg-slate-900 text-slate-300'
                  }`}
                >
                  50
                </div>
              </div>

              {/* Level 2: 30 and 70 */}
              <div className="flex justify-around w-64 mb-4">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border font-mono text-xs font-bold transition-all duration-300 ${
                    visitedNodes.includes(30)
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.5)] scale-110'
                      : 'border-slate-700 bg-slate-900 text-slate-300'
                  }`}
                >
                  30
                </div>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border font-mono text-xs font-bold transition-all duration-300 ${
                    visitedNodes.includes(70)
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.5)] scale-110'
                      : 'border-slate-700 bg-slate-900 text-slate-300'
                  }`}
                >
                  70
                </div>
              </div>

              {/* Level 3: Leaves (20, 40, 60, 80) */}
              <div className="flex justify-between w-80">
                {[20, 40, 60, 80].map((val) => (
                  <div
                    key={val}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs font-bold transition-all duration-300 ${
                      visitedNodes.includes(val)
                        ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.5)] scale-110'
                        : 'border-slate-700 bg-slate-900 text-slate-300'
                    }`}
                  >
                    {val}
                  </div>
                ))}
              </div>
            </div>

            {/* Visit output stream */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono flex items-center gap-2">
              <span className="text-slate-500">Visited Order:</span>
              <div className="flex gap-1.5 flex-wrap">
                {visitedNodes.length > 0 ? (
                  visitedNodes.map((n, i) => (
                    <span key={i} className="text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      {n}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-600">Click a traversal button to begin...</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Concept Inspector & Code (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between h-full">
            <div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-wider block mb-2">
                Algorithm Inspector
              </span>

              {/* Concept Selector Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {dsaConcepts.map((concept) => (
                  <button
                    key={concept.id}
                    type="button"
                    onClick={() => setSelectedConcept(concept)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      selectedConcept.id === concept.id
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/60'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {concept.name}
                  </button>
                ))}
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                {selectedConcept.name}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {selectedConcept.conceptSummary}
              </p>

              {/* Big-O Complexity Matrix */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-500 font-mono block">Best</span>
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    {selectedConcept.timeComplexity.best}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-500 font-mono block">Average</span>
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    {selectedConcept.timeComplexity.average}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-500 font-mono block">Space</span>
                  <span className="font-mono text-xs font-bold text-purple-400">
                    {selectedConcept.spaceComplexity}
                  </span>
                </div>
              </div>

              {/* Key Insight Chip */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 mb-6">
                <span className="font-mono text-[10px] text-amber-400 uppercase tracking-wider block mb-1">
                  Why it matters in Frontend Engineering
                </span>
                <p className="text-xs text-slate-300">
                  {selectedConcept.keyInsight}
                </p>
              </div>

              {/* Code Implementation */}
              <div>
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block mb-2">
                  Implementation
                </span>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 overflow-x-auto">
                  <pre className="font-mono text-xs text-cyan-300 leading-relaxed">
                    {selectedConcept.codeSnippet}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
