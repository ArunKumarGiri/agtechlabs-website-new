import React from 'react';
import { 
  Monitor, 
  CheckCircle2, 
  Zap, 
  HeartHandshake, 
  TrendingUp, 
  MessageSquare,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/portfolioData';

const iconMap = {
  Monitor,
  CheckCircle2,
  Zap,
  HeartHandshake,
  TrendingUp,
  MessageSquare
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 bg-[#030508] border-t border-slate-900/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Engineering Principles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 font-display">
            Why Work With <span className="text-gradient">Arun Goswami</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Direct collaboration with a passionate software craftsman. No agency layers, no miscommunication, just clean, high-performing code delivered on schedule.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-900/40 via-slate-900 to-cyan-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-cyan-500/20 font-semibold">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-purple-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Guaranteed Technical Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Access Commitment Banner */}
        <div className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Direct Communication via WhatsApp & Phone</h4>
              <p className="text-sm text-slate-400">
                You communicate directly with the engineer coding your project. Questions are answered in minutes, not days.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/917011880423"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide text-center transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              Message on WhatsApp
            </a>
            <a
              href="tel:+917011880423"
              className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs tracking-wide text-center border border-slate-700 transition-all"
            >
              Call 7011880423
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
