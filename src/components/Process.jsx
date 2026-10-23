import React from 'react';
import { 
  Compass, 
  Palette, 
  Code, 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

const iconMap = {
  Compass,
  Palette,
  Framer: Palette,
  Code,
  Rocket
};

export default function Process({ onStartProject }) {
  return (
    <section id="process" className="relative py-28 bg-[#050812] border-t border-slate-900/80">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Structured Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 font-display">
            Our 4-Step <span className="text-gradient">Development Process</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A transparent, agile workflow engineered to take your concept from initial strategic discovery to high-performance production deployment.
          </p>
        </div>

        {/* 4-Step Grid with Glowing Number Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {PROCESS_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || Compass;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:scale-110 transition-transform">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:text-cyan-300 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Phase & Title */}
                  <div className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-1">
                    Phase {step.number}: {step.phase}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {step.summary}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="border-t border-slate-800/80 pt-4">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-2">
                      {step.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom step status */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Step {idx + 1} of 4</span>
                  <span className="text-cyan-400 flex items-center gap-1">
                    Verified <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process CTA Footer */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all cursor-pointer"
          >
            <span>Begin Phase 01: Discover Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
