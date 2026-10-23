import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Code2,
  Heart,
  Lightbulb,
  ShieldCheck,
  Cpu,
  Phone,
  MessageSquare,
  CheckCircle2,
  Compass,
  Palette,
  Rocket,
  Layers,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, TECH_STACK, PROCESS_STEPS } from '../data/portfolioData';
import { soundFx } from '../utils/audioEffects';

export default function AboutPage() {
  const [activeTechCat, setActiveTechCat] = useState(0);

  const coreValues = [
    {
      title: "Creativity & Aesthetics",
      desc: "Creating bold, memorable visual identities, dark luxury aesthetics, and fluid micro-interactions that elevate your product above generic templates.",
      icon: Lightbulb,
    },
    {
      title: "Uncompromising Quality",
      desc: "Writing strictly-typed, scalable code adhering to modern clean architecture, automated linting, test-driven logic, and 95+ Lighthouse scores.",
      icon: ShieldCheck,
    },
    {
      title: "Continuous Innovation",
      desc: "Leveraging the newest advancements in Next.js 14, React 19, cross-platform Flutter, and custom open-source AI model fine-tuning.",
      icon: Cpu,
    },
    {
      title: "Client-First Transparency",
      desc: "Direct communication with Arun Goswami on WhatsApp and Phone. Honest timelines, weekly staging demos, and zero unnecessary agency markups.",
      icon: Heart,
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#030508] min-h-screen text-slate-100">

      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/4 w-[600px] h-[350px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[400px] bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Company Profile</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5 font-display">
            About <span className="text-gradient">AG TechLabs</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Founded by software architect <strong className="text-white">Arun Goswami</strong>, AG TechLabs is a high-end web, software, mobile, and AI engineering lab built for startups and enterprises seeking exceptional digital craft.
          </p>
        </div>

        {/* Founder Bio Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-24">

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
                        {COMPANY_INFO.brandName}
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
                    {COMPANY_INFO.role}
                  </div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight font-display mb-2">
                    {COMPANY_INFO.founder}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Direct engineering access with zero agency overhead. Specializing in high-performance web systems, cross-platform mobile apps & custom AI training.
                  </p>
                </div>

                {/* Contact Telemetry Cards */}
                <div className="space-y-2.5 relative z-10">
                  {/* Phone Card */}
                  <a
                    href={COMPANY_INFO.phoneTel}
                    className="group/item flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/20 hover:border-purple-500/60 hover:bg-purple-950/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-400 group-hover/item:text-purple-300">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Direct Phone</div>
                        <div className="text-sm font-mono font-bold text-white group-hover/item:text-purple-300 transition-colors">
                          {COMPANY_INFO.phoneFormatted}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      Tap to Call
                    </span>
                  </a>

                  {/* WhatsApp Card */}
                  <a
                    href={COMPANY_INFO.whatsappUrl}
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
                          {COMPANY_INFO.phone}
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
                    href={COMPANY_INFO.phoneTel}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Arun</span>
                  </a>

                  <a
                    href={COMPANY_INFO.whatsappUrl}
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

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              The AG TechLabs Philosophy: <span className="text-gradient">Pure Craft, Zero Bloat</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At <strong className="text-white">AG TechLabs</strong>, we believe modern software should be beautiful, lightning-fast, and built to scale effortlessly. We reject the bloated agency model where clients get billed for endless meetings with middle managers while work is delegated to junior interns.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              When you partner with AG TechLabs, you work directly with <strong className="text-white">Arun Goswami</strong>. We architect the database, design the responsive interface, write strictly-typed frontend logic, and fine-tune your custom AI models. This results in faster delivery, zero miscommunication, and software that drives tangible revenue.
            </p>

            {/* Core Values 2x2 Grid */}
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
                      <h3 className="text-sm font-bold text-white">{val.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 4-STEP PROCESS SECTION */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-display">
              Our 4-Step <span className="text-gradient">Execution Process</span>
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From strategic discovery to production launch and warranty support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded bg-slate-800 text-cyan-300 border border-cyan-500/20 font-bold">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{step.summary}</p>

                  <div className="border-t border-slate-800/80 pt-3">
                    <div className="text-[10px] font-mono uppercase text-slate-500 mb-1.5">Deliverables:</div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {step.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FULL TECH RADAR EXPLORER */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-slate-800/80 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
              Battle-Tested Technologies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-display">
              AG TechLabs <span className="text-gradient">Technology Radar</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Browse the production frameworks, cloud databases, and AI tooling we utilize.
            </p>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
            {TECH_STACK.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTechCat(idx);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTechCat === idx
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5'
                  }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_STACK[activeTechCat].items.map((tech, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/20 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">{tech.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-purple-300">
                      {tech.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
