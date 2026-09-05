import React, { Component, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class WebGLErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('WebGL / R3F Canvas ErrorBoundary caught:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 text-center backdrop-blur-md">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-950/50 border border-amber-500/30 text-amber-400">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-slate-200">
              {this.props.fallbackTitle || '3D Canvas Unavailable'}
            </h4>
            <p className="font-mono text-[11px] text-slate-400 mt-1 max-w-xs">
              WebGL context was suspended or is unsupported on this device. Fallback static layout active.
            </p>
          </div>
          <button
            type="button"
            onClick={this.handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300 hover:text-white cursor-pointer transition-colors"
          >
            <RefreshCw className="h-3 w-3" />
            <span>Retry 3D Scene</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
