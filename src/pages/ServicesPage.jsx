import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  Brain, 
  Bot, 
  Palette, 
  ShoppingBag, 
  RefreshCw, 
  Layers, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Shield,
  FileCheck
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audioEffects';

const iconMap = {
  Globe,
  Cpu,
  Smartphone,
  Brain,
  Bot,
  Palette,
  ShoppingBag,
  RefreshCw,
  Layers,
  Zap
};

export default function ServicesPage({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Web Engineering', 'Software Engineering', 'Mobile', 'Artificial Intelligence', 'Product Design', 'Commerce', 'Automation'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const handleInquire = (serviceTitle) => {
    soundFx.playChime();
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    navigate('/contact');
  };

  return (
    <div className="pt-28 pb-24 bg-[#030508] min-h-screen text-slate-100">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[350px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[400px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>AG TechLabs Services Catalog</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5 font-display">
            Comprehensive <span className="text-gradient">Engineering Services</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every digital solution is custom architected by Arun Goswami and the AG TechLabs team to meet strict standards of scalability, sub-second speed, and clean code maintainability.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-purple-600/30 text-white border border-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid with Detailed Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;

            return (
              <div
                key={service.id}
                className="group p-8 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-950/60 via-slate-900 to-cyan-950/60 border border-purple-500/30 text-purple-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/10">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Timeline & Delivery */}
                  <div className="flex items-center gap-4 mb-6 py-2 px-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.timeline}</span>
                    </span>
                    <span className="text-slate-600">|</span>
                    <span className="flex items-center gap-1.5 text-purple-300">
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>Turnkey Ownership</span>
                    </span>
                  </div>

                  {/* Key Capabilities */}
                  <div className="mb-6">
                    <div className="text-xs font-mono uppercase text-slate-400 mb-2.5">
                      Technical Architecture:
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="border-t border-slate-800/80 pt-4 mb-6">
                    <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                      Included Deliverables:
                    </div>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <button
                  onClick={() => handleInquire(service.title)}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 text-white font-semibold text-xs tracking-wide border border-purple-500/30 hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Inquire For This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Combined Architecture Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-cyan-950/60 border border-purple-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Need a Hybrid Full-Stack & AI Pipeline?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              We frequently architect integrated systems combining responsive web dashboards, mobile apps, and custom fine-tuned open-source AI models under unified API contracts.
            </p>
          </div>

          <button
            onClick={() => handleInquire('Combined Full-Stack + Custom AI Solution')}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-lg cursor-pointer"
          >
            Request Custom Stack Scoping
          </button>
        </div>

      </div>
    </div>
  );
}
