import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  Smartphone, 
  Globe, 
  Cpu, 
  Brain,
  Info
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { getAssetUrl } from '../utils/assetUrl';

export default function Projects({ onRequestProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: 'All Projects', key: 'all' },
    { label: 'Websites', key: 'websites' },
    { label: 'Software', key: 'software' },
    { label: 'Mobile Apps', key: 'mobile' },
    { label: 'AI & Machine Learning', key: 'ai' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.filterKey === activeFilter);

  return (
    <section id="projects" className="relative py-28 bg-[#050812] border-t border-slate-900/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Curated Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 font-display">
            Featured <span className="text-gradient">Projects & Architecture</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Explore our architectural work across modern web experiences, high-throughput SaaS platforms, mobile ecosystems, and custom fine-tuned AI applications.
          </p>

          {/* Sample disclaimer banner required by prompt */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-mono">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>Sample showcase concepts demonstrating production-grade architectures and UI design principles.</span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400/40'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-panel border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.2)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Project Mockup Header Card */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-white/10">
                <img
                  src={getAssetUrl(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d111c] via-transparent to-transparent opacity-90" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-purple-300 border border-purple-500/30">
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      {project.stats.speed}
                    </span>
                  </div>
                </div>

                {/* Bottom Bar on Mockup */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-300 bg-slate-950/70 px-2 py-0.5 rounded border border-cyan-500/30">
                    {project.stats.metrics}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-black/60 px-2 py-0.5 rounded">
                    {project.clientType}
                  </span>
                </div>
              </div>

              {/* Project Details Content */}
              <div className="p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-purple-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-purple-950/50 text-xs font-semibold text-white border border-slate-700/80 hover:border-purple-500/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                  </button>

                  <button
                    onClick={() => onRequestProject(project.title)}
                    className="py-2.5 px-4 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-white text-xs font-semibold border border-purple-500/30 transition-all cursor-pointer"
                  >
                    Build Similar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed view */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={(title) => onRequestProject(title)}
        />

      </div>
    </section>
  );
}
