import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Cpu, 
  Smartphone, 
  Globe, 
  Brain, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Bot, 
  ExternalLink,
  ShieldCheck,
  Calculator,
  MessageSquare,
  Phone
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, PROJECTS } from '../data/portfolioData';
import InteractiveTerminal from '../components/InteractiveTerminal';
import ProjectModal from '../components/ProjectModal';
import { soundFx } from '../utils/audioEffects';
import { getAssetUrl } from '../utils/assetUrl';

export default function HomePage({ onOpenEstimator }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredServices = SERVICES.slice(0, 6);
  const featuredProjects = PROJECTS.filter(p => p.isFeatured);

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 bg-tech-grid">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & Actions */}
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

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 font-display">
                We Build <span className="text-gradient">Digital Experiences</span> That Drive Growth.
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
                Transform your ideas into powerful websites, intelligent software, and innovative mobile applications. 
                Engineered by <strong className="text-white">AG TechLabs</strong> with modern frontend architectures, robust cloud backends, and cutting-edge custom AI model training.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <Link
                  to="/contact"
                  onClick={() => soundFx.playChime()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/projects"
                  onClick={() => soundFx.playClick()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                >
                  <span>Explore Our Work</span>
                </Link>

                <button
                  onClick={() => {
                    soundFx.playChime();
                    onOpenEstimator();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-cyan-300 bg-cyan-950/30 hover:bg-cyan-950/50 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 text-sm cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-cyan-400" />
                  <span>Calculate Cost</span>
                </button>
              </div>

              {/* Key Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-800/80 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-purple-400">99.98%</div>
                  <div className="text-xs text-slate-400">Architecture Uptime</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">&lt;85ms</div>
                  <div className="text-xs text-slate-400">Response Speed</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">AI-Ready</div>
                  <div className="text-xs text-slate-400">Custom Model Lab</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">Arun Goswami</div>
                  <div className="text-xs text-slate-400">Direct Founder Access</div>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Holographic Visual with Telemetry */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-indigo-500/20 to-cyan-500/30 shadow-[0_0_50px_rgba(168,85,247,0.25)] group">
                <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-[#070b14]/90 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                  <img
                    src={getAssetUrl('/assets/hero-tech-visual.jpg')}
                    alt="AG TechLabs 3D Holographic AI and Software Architecture"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-5 left-5 right-5 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-purple-500/30 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-400">
                        <Cpu className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                          <span>AG TECHLABS NODE</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        </div>
                        <div className="text-[11px] text-slate-400">Web • Apps • LLMs • Cloud</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-semibold">
                      v4.2 PROD
                    </span>
                  </div>
                </div>

                {/* Floating Telemetry Badges */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 p-3 rounded-2xl glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-purple-500/40 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    <span className="text-xs font-mono font-bold text-slate-200">100% Strictly Typed</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-mono">React 19 • Next.js 14</div>
                </div>

                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-3.5 rounded-2xl glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-cyan-500/40 animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-white">AI Model Training</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Llama 3 • DeepSeek • LoRA</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ATTRACTIVE INTERACTIVE CYBER TERMINAL */}
      <section className="py-16 bg-[#04060d] border-y border-slate-900/80 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
              // Interactive Architecture Console
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Try the AG TechLabs <span className="text-gradient">Live CLI</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Type or tap commands like <code className="text-purple-300">services</code>, <code className="text-cyan-300">ai-models</code>, <code className="text-purple-300">quote</code>, or <code className="text-cyan-300">contact</code>.
            </p>
          </div>

          <InteractiveTerminal onOpenEstimator={onOpenEstimator} />
        </div>
      </section>

      {/* 3. FEATURED SERVICES PREVIEW */}
      <section className="py-24 bg-[#030508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
            <div className="text-left max-w-2xl">
              <span className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider">
                Full-Lifecycle Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
                Engineered for <span className="text-gradient">Impact & Scale</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-3">
                Modern responsive websites, custom enterprise software platforms, native cross-platform mobile apps, and custom AI model training.
              </p>
            </div>

            <Link
              to="/services"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-purple-500/30 hover:border-purple-400/60 transition-all shrink-0"
            >
              <span>View All 10 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group p-7 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-purple-300 border border-purple-500/20 font-medium">
                      {service.category}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400">{service.timeline}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">Turnkey Delivery</span>
                  <Link
                    to="/services"
                    className="text-purple-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEDICATED AI STUDIO SPOTLIGHT BANNER */}
      <section className="py-20 bg-gradient-to-b from-[#050814] to-[#030508] border-y border-purple-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900/80 to-cyan-950/60 border border-purple-500/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold">
                <Brain className="w-3.5 h-3.5 text-cyan-400" />
                <span>Next-Gen AI Lab Feature</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Train & Fine-Tune <span className="text-gradient">All Types of AI Models</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We take open-source LLMs (Llama 3.3, DeepSeek R1, Mistral, Vision AI), curate your private domain datasets, train LoRA adapters with PyTorch, and deploy quantized endpoints with vLLM for fast, hallucination-free enterprise performance.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-slate-900 text-purple-300 text-xs font-mono border border-purple-500/20">Llama 3 (8B/70B)</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 text-cyan-300 text-xs font-mono border border-cyan-500/20">DeepSeek R1 Reasoning</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 text-emerald-300 text-xs font-mono border border-emerald-500/20">LoRA / QLoRA</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 text-indigo-300 text-xs font-mono border border-indigo-500/20">Enterprise RAG</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/ai-studio"
                onClick={() => soundFx.playChime()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg transition-all"
              >
                Open AI Training Workbench
              </Link>
              <Link
                to="/learning"
                onClick={() => soundFx.playClick()}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-semibold text-xs text-center transition-all"
              >
                Read AI Blueprints
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS PREVIEW */}
      <section className="py-24 bg-[#030508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
            <div className="text-left max-w-2xl">
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
                Featured <span className="text-gradient">Work & Architectures</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-3">
                Production-grade sample concepts illustrating full-stack web, cloud SaaS, mobile telehealth, and AI workbench architectures.
              </p>
            </div>

            <Link
              to="/projects"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-cyan-500/30 hover:border-cyan-400/60 transition-all shrink-0"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl glass-panel border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.2)] transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={getAssetUrl(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d111c] via-transparent to-transparent opacity-90" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/80 text-purple-300 border border-purple-500/30">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                      {project.stats.speed}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => {
                        soundFx.playChime();
                        setSelectedProject(project);
                      }}
                      className="py-2 px-4 rounded-xl bg-slate-900 hover:bg-purple-950/50 text-xs font-semibold text-white border border-slate-700/80 hover:border-purple-500 transition-all cursor-pointer"
                    >
                      View Case Study
                    </button>
                    <Link
                      to="/contact"
                      className="text-xs font-semibold text-purple-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                    >
                      Build Similar <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY WORK WITH AG TECHLABS & ARUN GOSWAMI */}
      <section className="py-20 bg-[#050812] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider">
            Client Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-12 font-display">
            Direct Engineering Craftsmanship with <span className="text-gradient">Arun Goswami</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all">
              <div className="p-3 w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero Agency Bloat</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Work directly with the lead engineer writing your code. No disconnected account managers or inflated markups.
              </p>
            </div>

            <div className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all">
              <div className="p-3 w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sub-Second Performance</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Engineered for maximum speed, 95+ Lighthouse scores, server-side caching, and instant conversion rates.
              </p>
            </div>

            <div className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-emerald-500/40 transition-all">
              <div className="p-3 w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Direct WhatsApp & Call</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Direct phone (<strong className="text-white">7011880423</strong>) and WhatsApp access for real-time progress updates and quick feedback.
              </p>
            </div>
          </div>

          {/* Bottom Direct CTA */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message Arun on WhatsApp</span>
            </a>
            <a
              href={COMPANY_INFO.phoneTel}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-purple-500/30 hover:border-purple-500/60 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-purple-400" />
              <span>Call: 7011880423</span>
            </a>
          </div>
        </div>
      </section>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(title) => {
          setSelectedProject(null);
          window.location.href = '/contact';
        }}
      />

    </div>
  );
}
