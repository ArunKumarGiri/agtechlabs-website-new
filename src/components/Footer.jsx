import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Sparkles,
  Bot,
  Cpu
} from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/portfolioData';
import { soundFx } from '../utils/audioEffects';
import BrandLogo from './BrandLogo';

// Inline SVGs for brand logos
const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020306] border-t border-slate-900 text-slate-400 text-sm">
      {/* Top subtle glow bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Bio (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <Link to="/" className="inline-block focus:outline-none">
              <BrandLogo size="md" />
            </Link>


            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Engineering high-converting websites, scalable custom software, cross-platform mobile apps, and custom AI model training & fine-tuning for forward-thinking clients worldwide.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter Profile"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (Col 6-7) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-purple-300 transition-colors">Home Page</Link></li>
              <li><Link to="/services" className="hover:text-purple-300 transition-colors">Services Catalog</Link></li>
              <li><Link to="/ai-studio" className="hover:text-cyan-300 transition-colors">AI Model Studio</Link></li>
              <li><Link to="/projects" className="hover:text-purple-300 transition-colors">Portfolio Case Studies</Link></li>
              <li><Link to="/learning" className="hover:text-cyan-300 transition-colors">AI Learning Blueprints</Link></li>
              <li><Link to="/about" className="hover:text-purple-300 transition-colors">About Arun & TechLabs</Link></li>
              <li><Link to="/contact" className="hover:text-purple-300 transition-colors">Contact & Quote</Link></li>
            </ul>
          </div>

          {/* Services Links (Col 8-9) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Specialized Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services" className="hover:text-purple-300 transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-purple-300 transition-colors">Custom Software & SaaS</Link></li>
              <li><Link to="/services" className="hover:text-purple-300 transition-colors">Android & iOS Mobile Apps</Link></li>
              <li><Link to="/ai-studio" className="hover:text-cyan-300 transition-colors">AI Model Training & LoRA</Link></li>
              <li><Link to="/ai-studio" className="hover:text-cyan-300 transition-colors">Enterprise RAG & Autonomous Agents</Link></li>
              <li><Link to="/services" className="hover:text-purple-300 transition-colors">UI/UX Design Systems</Link></li>
              <li><Link to="/services" className="hover:text-purple-300 transition-colors">E-commerce Scalability</Link></li>
              <li><Link to="/services" className="hover:text-purple-300 transition-colors">Website Redesign & Maintenance</Link></li>
            </ul>
          </div>

          {/* Direct Contact (Col 10-12) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="text-slate-300">
                <span className="block text-[10px] font-mono text-slate-500 uppercase">Principal Architect</span>
                <span className="font-semibold text-white">Arun Goswami</span>
              </div>

              <div>
                <span className="block text-[10px] font-mono text-slate-500 uppercase">Direct Phone</span>
                <a href={COMPANY_INFO.phoneTel} className="text-slate-200 hover:text-purple-300 font-mono">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div>
                <span className="block text-[10px] font-mono text-slate-500 uppercase">WhatsApp</span>
                <a 
                  href={COMPANY_INFO.whatsappDirect}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-mono"
                >
                  +91 7011880423
                </a>
              </div>

              <div>
                <span className="block text-[10px] font-mono text-slate-500 uppercase">Location</span>
                <span className="text-slate-400">{COMPANY_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 AG TechLabs • Arun Goswami. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-600 hidden sm:inline">Advanced Web, Mobile & Custom AI Engineering</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
