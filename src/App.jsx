import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import InteractiveCanvas from './components/InteractiveCanvas';
import ProjectCalculator from './components/ProjectCalculator';

// Dedicated Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AiStudioPage from './pages/AiStudioPage';
import ProjectsPage from './pages/ProjectsPage';
import LearningPage from './pages/LearningPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/portfolioData';

export default function App() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');

  const handleSelectService = (serviceName) => {
    setPrefilledService(serviceName);
  };

  const getBasename = () => {
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.replace(/\/$/, '');
    if (!cleanBase) return undefined;
    return typeof window !== 'undefined' && window.location.pathname.startsWith(cleanBase)
      ? cleanBase
      : undefined;
  };

  return (
    <BrowserRouter basename={getBasename()}>
      <ScrollToTop />
      
      <div className="relative min-h-screen bg-[#030508] text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-purple-200">
        
        {/* Interactive Neural Particle Canvas (ambient background) */}
        <InteractiveCanvas />

        {/* Global Multi-Page Navigation Header */}
        <Navbar onOpenEstimator={() => setCalculatorOpen(true)} />

        {/* Multi-Page Route Outlet */}
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<HomePage onOpenEstimator={() => setCalculatorOpen(true)} />} />
            <Route path="/services" element={<ServicesPage onSelectService={handleSelectService} />} />
            <Route path="/ai-studio" element={<AiStudioPage />} />
            <Route path="/projects" element={<ProjectsPage onSelectService={handleSelectService} />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage prefilledService={prefilledService} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Project Cost & Timeline Calculator Modal */}
        <ProjectCalculator
          isOpen={calculatorOpen}
          onClose={() => setCalculatorOpen(false)}
        />

        {/* Floating Quick Action Widget (WhatsApp & Call) */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
          {/* Floating WhatsApp Action */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-13 h-13 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] border border-emerald-400/40 transition-all duration-300 transform hover:scale-105"
            aria-label="Direct WhatsApp Message to Arun Goswami at AG TechLabs"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white border border-emerald-500/40 text-xs font-mono font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
              Chat on WhatsApp
            </span>
          </a>

          {/* Floating Call Action */}
          <a
            href={COMPANY_INFO.phoneTel}
            className="group relative flex items-center justify-center w-11 h-11 rounded-2xl bg-slate-900/90 hover:bg-purple-900/80 text-purple-400 hover:text-white shadow-lg border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105"
            aria-label="Direct Call to Arun Goswami"
          >
            <Phone className="w-4 h-4" />
            <span className="absolute right-14 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white border border-purple-500/40 text-xs font-mono font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
              Call: {COMPANY_INFO.phone}
            </span>
          </a>
        </div>

      </div>
    </BrowserRouter>
  );
}
