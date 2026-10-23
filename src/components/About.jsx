import React from 'react';
import {
  Sparkles,
  Code2,
  Heart,
  Lightbulb,
  Award,
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const coreValues = [
    {
      title: "Creativity & Aesthetics",
      desc: "Creating bold, memorable visual identities and fluid motion design that elevate your brand above the noise.",
      icon: Lightbulb,
      color: "purple"
    },
    {
      title: "Uncompromising Quality",
      desc: "Writing strictly-typed, scalable code that adheres to strict industry best practices, testing, and modern standards.",
      icon: ShieldCheck,
      color: "cyan"
    },
    {
      title: "Continuous Innovation",
      desc: "Leveraging the newest advancements in Next.js, Flutter, cloud infrastructure, and custom AI model fine-tuning.",
      icon: Cpu,
      color: "indigo"
    },
    {
      title: "Client-First Transparency",
      desc: "Direct communication, realistic timelines, honest technical consulting, and zero unnecessary agency markups.",
      icon: Heart,
      color: "emerald"
    }
  ];

  return (
    <section id="about" className="relative py-28 bg-[#030508] border-t border-slate-900/80">

      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Developer Profile</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 font-display">
            Meet <span className="text-gradient">Arun Goswami</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Passionate software engineer, web architect, and AI solutions builder committed to turning ambitious concepts into polished digital reality.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Executive Identity Card (No photo) */}
          <div className="lg:col-span-5 relative flex flex-col items-center w-full">
            <div className="relative w-full max-w-md rounded-3xl p-[1.5px] bg-gradient-to-br from-purple-500/50 via-indigo-500/30 to-cyan-500/50 shadow-[0_0_50px_rgba(168,85,247,0.25)] group hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] transition-all duration-500">
              <div className="w-full rounded-[22px] bg-[#070b14]/95 backdrop-blur-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden text-left">

                {/* Ambient background glow accents */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-44 h-44 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

                {/* Top Bar: Monogram Badge & Active Status */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center shrink-0">
                      <div className="w-full h-full rounded-[14px] bg-[#080d1a] flex items-center justify-center">
                        <span className="font-mono font-black text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                          AG
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono tracking-widest uppercase text-purple-400 font-semibold">
                        ENGINEERING LEAD
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        {PERSONAL_INFO.brandName}
                      </div>
                    </div>
                  </div>

                  {/* Live Status Pill */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-emerald-300 uppercase tracking-wider">
                      Available
                    </span>
                  </div>
                </div>

                {/* Main Identity Info */}
                <div className="py-6 relative z-10">
                  <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-1">
                    {PERSONAL_INFO.role}
                  </div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight font-display mb-2">
                    {PERSONAL_INFO.founder}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Direct engineering access with zero agency overhead. Specializing in high-performance web systems, cross-platform mobile apps & custom AI training.
                  </p>
                </div>

                {/* Contact Telemetry Cards */}
                <div className="space-y-2.5 relative z-10">
                  {/* Phone Card */}
                  <a
                    href={PERSONAL_INFO.phoneTel}
                    className="group/item flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/20 hover:border-purple-500/60 hover:bg-purple-950/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-400 group-hover/item:text-purple-300">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Direct Phone</div>
                        <div className="text-sm font-mono font-bold text-white group-hover/item:text-purple-300 transition-colors">
                          {PERSONAL_INFO.phoneFormatted}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      Tap to Call
                    </span>
                  </a>

                  {/* WhatsApp Card */}
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/20 hover:border-emerald-500/60 hover:bg-emerald-950/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 group-hover/item:text-emerald-300">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">WhatsApp Direct</div>
                        <div className="text-sm font-mono font-bold text-white group-hover/item:text-emerald-300 transition-colors">
                          {PERSONAL_INFO.phone}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      Instant Chat
                    </span>
                  </a>

                  {/* Credentials / Telemetry */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col">
                      <span className="text-[10px] font-mono text-slate-500 uppercase">Experience</span>
                      <span className="text-xs font-mono font-bold text-cyan-300">6+ Years Prod</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col">
                      <span className="text-[10px] font-mono text-slate-500 uppercase">Location</span>
                      <span className="text-xs font-mono font-bold text-purple-300">New Delhi / Remote</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-3 relative z-10">
                  <a
                    href={PERSONAL_INFO.phoneTel}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Arun</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 hover:text-white font-mono text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Compelling Story & Core Values */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Building Scalable Digital Products with <span className="text-gradient">Passion & Precision</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Hello, I'm <strong className="text-white">Arun Goswami</strong>. Over the years, I have specialized in building robust
                web applications, custom software platforms, fluid mobile apps, and custom AI solutions that empower businesses to scale.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you are a startup needing a high-converting MVP, an established business looking to modernize an outdated legacy website, or an enterprise seeking to train and deploy private AI models with zero data leakage, I bring hands-on architectural expertise to every phase of the project.
              </p>
            </div>

            {/* Core Values Grid: Creativity, Quality, Innovation, Client Satisfaction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded-lg bg-slate-800 text-purple-400 border border-white/10">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white">{val.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Summary bullet tags */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <CheckCircle2 className="w-4 h-4" /> Web Development
              </span>
              <span className="flex items-center gap-1.5 text-purple-300">
                <CheckCircle2 className="w-4 h-4" /> Custom Software
              </span>
              <span className="flex items-center gap-1.5 text-indigo-300">
                <CheckCircle2 className="w-4 h-4" /> Mobile Applications
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4" /> AI Model Training & Support
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
