import React, { useState } from 'react';
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
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

// Map icon string names to components
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

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Engineering', 'Software Engineering', 'Mobile', 'Artificial Intelligence', 'Product Design', 'Commerce', 'Automation'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="relative py-28 bg-[#030508] border-t border-slate-900/80">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Comprehensive Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 font-display">
            High-Impact Services for <span className="text-gradient">Modern Digital Scale</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            From responsive web applications and cross-platform mobile apps to bespoke enterprise software and cutting-edge custom AI model training.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            
            // Neon accent border colors based on service theme
            const borderColors = {
              purple: 'hover:border-purple-500/60 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
              blue: 'hover:border-blue-500/60 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
              cyan: 'hover:border-cyan-500/60 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
            };

            const iconColors = {
              purple: 'text-purple-400 bg-purple-950/40 border-purple-500/30',
              blue: 'text-blue-400 bg-blue-950/40 border-blue-500/30',
              cyan: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
            };

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between glass-panel border border-white/10 ${borderColors[service.color] || borderColors.purple}`}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl border ${iconColors[service.color]} transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-white/10">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-5">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-purple-950/50 text-slate-300 hover:text-white border border-white/5 hover:border-purple-500/40 text-xs font-semibold transition-all duration-200 cursor-pointer"
                >
                  <span>Inquire for this Service</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Inquiries */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-cyan-950/40 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="p-4 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30 hidden sm:block">
              <Zap className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Need a Custom Combined Stack (Web + Mobile + AI)?
              </h4>
              <p className="text-sm text-slate-400">
                We engineer turnkey end-to-end solutions combining user-facing portals with mobile clients and custom fine-tuned AI backends.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-slate-950 hover:bg-slate-200 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
          >
            Schedule Technical Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
