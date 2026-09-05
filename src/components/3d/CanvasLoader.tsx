import React from 'react';

export const CanvasLoader: React.FC<{ message?: string }> = ({
  message = 'Initializing 3D Canvas...',
}) => {
  return (
    <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-3 p-6 text-center select-none">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20" />
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
        <div className="absolute inset-2 rounded-full border border-indigo-500/40 border-b-transparent animate-spin [animation-duration:1.5s]" />
      </div>
      <p className="font-mono text-xs text-cyan-400/80 tracking-wider">
        {message}
      </p>
    </div>
  );
};
