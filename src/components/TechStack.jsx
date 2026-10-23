import React, { useState } from 'react';
import { 
  Atom, 
  Boxes, 
  Code2, 
  Wind, 
  FileCode, 
  Layout, 
  Server, 
  Network, 
  Terminal, 
  Database, 
  HardDrive, 
  Cloud, 
  Smartphone, 
  Tablet, 
  Layers, 
  Flame, 
  Brain, 
  Sparkles, 
  Workflow, 
  Search, 
  Cpu, 
  Eye,
  Check
} from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';

const iconMap = {
  Atom,
  Boxes,
  Code2,
  Wind,
  FileCode,
  Layout,
  Server,
  Network,
  Terminal,
  Database,
  HardDrive,
  Cloud,
  Smartphone,
  Tablet,
  Layers,
  Flame,
  Brain,
  Sparkles,
  Workflow,
  Search,
  Cpu,
  Eye
};

export default function TechStack() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section id="tech-stack" className="relative py-28 bg-[#030508] border-t border-slate-900/80">
      
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[350px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Modern Engineering Stack</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 font-display">
            Battle-Tested <span className="text-gradient">Technologies</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            We build with industry-standard frameworks, scalable databases, and state-of-the-art AI infrastructure to ensure your product is resilient, fast, and future-proof.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {TECH_STACK.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${
                activeCategoryIndex === idx
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        <div className="text-center mb-10">
          <p className="text-sm font-mono text-cyan-300/80">
            // {TECH_STACK[activeCategoryIndex].description}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK[activeCategoryIndex].items.map((tech, idx) => {
            const IconComponent = iconMap[tech.icon] || Code2;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-purple-500/20 group-hover:border-purple-400/60 flex items-center justify-center text-purple-400 group-hover:text-cyan-300 transition-colors shrink-0 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {tech.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-purple-300 border border-purple-500/20">
                      {tech.level}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tech Bar with All Key Logo Names */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-500">
          <span className="hover:text-white transition-colors">React</span>
          <span className="hover:text-white transition-colors">Next.js</span>
          <span className="hover:text-white transition-colors">TypeScript</span>
          <span className="hover:text-white transition-colors">Node.js</span>
          <span className="hover:text-white transition-colors">Express</span>
          <span className="hover:text-white transition-colors">MongoDB</span>
          <span className="hover:text-white transition-colors">PostgreSQL</span>
          <span className="hover:text-white transition-colors">Tailwind CSS</span>
          <span className="hover:text-white transition-colors">Flutter</span>
          <span className="hover:text-white transition-colors">React Native</span>
          <span className="hover:text-white transition-colors">PyTorch</span>
          <span className="hover:text-white transition-colors">Hugging Face</span>
          <span className="hover:text-white transition-colors">LangChain</span>
        </div>

      </div>
    </section>
  );
}
