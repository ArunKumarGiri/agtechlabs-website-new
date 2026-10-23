import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Calculator, 
  ArrowRight,
  Volume2,
  VolumeX,
  Cpu
} from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/portfolioData';
import { soundFx } from '../utils/audioEffects';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenEstimator }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleSound = () => {
    const state = soundFx.toggle();
    setSoundEnabled(state);
  };

  const handleNavClick = () => {
    soundFx.playClick();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.85)] border-b border-purple-500/15' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo: AG TechLabs */}
          <Link 
            to="/" 
            onClick={handleNavClick}
            className="focus:outline-none"
            aria-label="AG TechLabs Home"
          >
            <BrandLogo size="md" />
          </Link>


          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/60 border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-purple-600/30 border border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Audio FX Toggle Button */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl text-xs border transition-all duration-200 cursor-pointer ${
                soundEnabled
                  ? 'bg-purple-950/70 border-purple-500/60 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
              title={soundEnabled ? 'Cyber sound effects enabled' : 'Enable futuristic sound effects'}
              aria-label="Toggle cyber audio effects"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-300" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Quick Estimator button */}
            <button
              onClick={() => {
                soundFx.playChime();
                onOpenEstimator();
              }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-cyan-300 bg-slate-900/70 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer"
              title="Estimate Project Cost & Timeline"
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>Estimator</span>
            </button>

            {/* Glowing Let's Talk CTA */}
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-xl group focus:outline-none"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-xl blur-xs group-hover:blur-md transition-all duration-300 opacity-90 group-hover:opacity-100 animate-pulse-glow" />
              <span className="relative flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0a0e17] rounded-[10px] transition-all duration-300 group-hover:bg-opacity-80">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                soundFx.playChime();
                onOpenEstimator();
              }}
              className="p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-cyan-400 sm:hidden"
              aria-label="Open Project Estimator"
            >
              <Calculator className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#070b12]/98 backdrop-blur-2xl border-b border-purple-500/20 px-6 py-6 shadow-2xl transition-all duration-300">
          <div className="flex flex-col space-y-2.5 text-left">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-cyan-300 border border-cyan-500/30 text-sm font-semibold"
              >
                <Calculator className="w-4 h-4" />
                <span>Instant Project Estimator</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-white border border-slate-700 text-xs font-medium hover:border-purple-500"
                >
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <span>Call: {COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-950/50 text-emerald-300 border border-emerald-500/40 text-xs font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-center text-sm shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
