import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowUpRight, 
  Layers, 
  Info, 
  CheckCircle2,
  Globe,
  Cpu,
  Smartphone,
  Brain
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import { soundFx } from '../utils/audioEffects';
import { getAssetUrl } from '../utils/assetUrl';

export default function ProjectsPage({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const filters = [
    { label: 'All Projects', key: 'all' },
    { label: 'Websites', key: 'websites' },
    { label: 'Custom Software', key: 'software' },
    { label: 'Mobile Apps', key: 'mobile' },
    { label: 'AI & Machine Learning', key: 'ai' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.filterKey === activeFilter);

  const handleRequestSimilar = (title) => {
    soundFx.playChime();
    if (onSelectService) {
      onSelectService(`Similar to ${title}`);
    }
    navigate('/contact');
  };

  return (
    <div className="pt-28 pb-24 bg-[#030508] min-h-screen text-slate-100">
      
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/3 w-[550px] h-[350px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[400px] bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>AG TechLabs Case Studies</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5 font-display">
            Featured <span className="text-gradient">Portfolio & Systems</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore our architectural showcase across high-conversion web experiences, cloud SaaS backends, mobile telemedicine & logistics apps, and custom AI model fine-tuning studios.
          </p>

          {/* Sample disclaimer banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-400 text-xs font-mono">
            <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Sample portfolio concepts demonstrating technical architectures and UI design standards.</span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => {
                soundFx.playClick();
                setActiveFilter(filter.key);
              }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d111c] via-transparent to-transparent opacity-90" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-purple-300 border border-purple-500/30">
                    {project.category}
                  </span>
                  
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                    {project.stats.speed}
                  </span>
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
                    onClick={() => {
                      soundFx.playChime();
                      setSelectedProject(project);
                    }}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-purple-950/50 text-xs font-semibold text-white border border-slate-700/80 hover:border-purple-500/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Architecture Details</span>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                  </button>

                  <button
                    onClick={() => handleRequestSimilar(project.title)}
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
          onRequestSimilar={handleRequestSimilar}
        />

      </div>
    </div>
  );
}
