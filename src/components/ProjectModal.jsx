import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';

export default function ProjectModal({ project, onClose, onRequestSimilar }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#090d18] border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.25)] text-left my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500 transition-all cursor-pointer"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/30">
            {project.category}
          </span>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
            {project.clientType}
          </span>
          <span className="text-[11px] font-mono text-slate-400 ml-auto">
            Sample Engineering Concept
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 font-display">
          {project.title}
        </h3>

        {/* Mockup Preview Visual */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-6 bg-slate-950 aspect-video max-h-72 w-full">
          <img
            src={getAssetUrl(project.image)}
            alt={project.title}
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/80 text-emerald-400 border border-emerald-500/40">
                {project.stats.speed}
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/80 text-cyan-300 border border-cyan-500/40">
                {project.stats.metrics}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Architecture v2.4
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.fullDesc}
          </p>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Architecture & Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-mono text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            Like this architecture? We can customize a similar solution for your business.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.title);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700 transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
