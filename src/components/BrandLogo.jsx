import React from 'react';
import { getAssetUrl } from '../utils/assetUrl';

export default function BrandLogo({ size = 'md', showSubtitle = true, className = '' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const textClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl font-extrabold'
  };

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Sleek Futuristic Holographic Prism Emblem */}
      <div className={`relative flex items-center justify-center ${sizeClasses[size]} rounded-2xl bg-gradient-to-br from-purple-900/60 via-slate-950 to-cyan-950/60 p-0.5 border border-purple-500/40 group-hover:border-purple-400 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.25)] overflow-hidden shrink-0`}>

        {/* Subtle Ambient Pulse Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-cyan-500/20 group-hover:scale-125 transition-transform duration-500" />

        {/* High-Res Holographic Crystal Emblem */}
        <img
          src={getAssetUrl('/assets/ag-techlabs-logo.jpg')}
          alt="AG TechLabs Emblem"
          className="w-full h-full object-cover object-center rounded-[14px] group-hover:scale-105 transition-transform duration-300 contrast-110"
        />

        {/* Active Node Beacon */}
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className={`font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors font-display ${textClasses[size]}`}>
            AG TechLabs
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 font-semibold tracking-wider">
            AI & DEV
          </span>
        </div>

        {showSubtitle && (
          <span className="text-[10px] text-slate-400 tracking-wider font-mono uppercase">
            {/* By Arun Goswami */}
          </span>
        )}
      </div>
    </div>
  );
}
