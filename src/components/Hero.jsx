import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Smartphone, 
  Globe, 
  CheckCircle, 
  Layers,
  Terminal,
  Zap,
  Bot
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';

export default function Hero({ onOpenEstimator }) {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Background ambient gradient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-indigo-600/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Badge: Required "Building the Future, One Line of Code at a Time." */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-purple-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-6 hover:border-purple-500/60 transition-all duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-200 to-indigo-300">
                Building the Future, One Line of Code at a Time.
              </span>
            </div>

            {/* Main Headline: Required “We Build Digital Experiences That Drive Growth.” */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 font-display">
              We Build <span className="text-gradient">Digital Experiences</span> That Drive Growth.
            </h1>

            {/* Supporting Text: Required “Transform your ideas into powerful websites, intelligent software, and innovative mobile applications.” */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              Transform your ideas into powerful websites, intelligent software, and innovative mobile applications. 
              Engineered with modern frontend architectures, robust cloud backends, and cutting-edge custom AI model training.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary CTA: "Start Your Project." */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA: "Explore Our Work." */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 hover:border-purple-500/50 hover:text-white transition-all duration-300"
              >
                <span>Explore Our Work</span>
              </a>

              {/* AI & Estimator Quick Trigger */}
              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-cyan-300 bg-cyan-950/30 hover:bg-cyan-950/50 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 text-sm"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Calculate Project Cost</span>
              </button>
            </div>

            {/* Trust and Key Capability Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-800/80 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-purple-400">99.9%</div>
                <div className="text-xs text-slate-400">Architecture Uptime</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">&lt;100ms</div>
                <div className="text-xs text-slate-400">Speed & Latency</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">AI-Ready</div>
                <div className="text-xs text-slate-400">Model Training Lab</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">Direct</div>
                <div className="text-xs text-slate-400">Developer Access</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D-inspired Abstract Tech Visual & Floating HUD */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Container with holographic ring borders */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-indigo-500/20 to-cyan-500/30 shadow-[0_0_50px_rgba(168,85,247,0.25)] group">
              
              <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-[#070b14]/90 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                
                {/* 3D Visual Asset */}
                <img
                  src={getAssetUrl('/assets/hero-tech-visual.jpg')}
                  alt="3D Holographic AI and Software Technology Concept"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                />

                {/* Subtle cybernetic scanline overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-transparent opacity-80" />

                {/* Center Badge overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-purple-500/30 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-400">
                      <Cpu className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                        <span>AG HYPER-STACK</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <div className="text-[11px] text-slate-400">Next.js • Flutter • LLMs • Cloud</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-semibold">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Floating UI Elements */}
              {/* Telemetry 1: Floating top right */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 p-3 rounded-2xl glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-purple-500/40 animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <span className="text-xs font-mono font-bold text-slate-200">Production Ready</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">100/100 Core Web Vitals</div>
              </div>

              {/* Telemetry 2: Floating bottom left */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-3.5 rounded-2xl glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-cyan-500/40 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-white">AI Model Training</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Llama 3 • LoRA • RAG Pipelines</div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
