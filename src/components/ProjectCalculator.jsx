import React, { useState } from 'react';
import { 
  Calculator, 
  X, 
  Sparkles, 
  Check, 
  Clock, 
  ArrowRight, 
  MessageSquare, 
  Layers,
  Cpu,
  Brain,
  Smartphone,
  Globe
} from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

export default function ProjectCalculator({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [projectType, setProjectType] = useState('website');
  const [selectedFeatures, setSelectedFeatures] = useState(['responsive-ui', 'seo']);
  const [timeline, setTimeline] = useState('standard');

  const projectTypes = [
    { id: 'website', label: 'Modern Website', basePrice: 25000, baseDays: 7, icon: Globe },
    { id: 'software', label: 'Custom Software / SaaS', basePrice: 45000, baseDays: 20, icon: Cpu },
    { id: 'mobile', label: 'Mobile App (iOS & Android)', basePrice: 40000, baseDays: 18, icon: Smartphone },
    { id: 'ai-training', label: 'AI Model Training & Support', basePrice: 50000, baseDays: 14, icon: Brain },
  ];

  const featureOptions = [
    { id: 'responsive-ui', label: 'Custom Futuristic/Glassmorphism UI', price: 6000, days: 3 },
    { id: 'seo', label: 'SEO & 99+ Core Web Vitals Optimization', price: 5000, days: 2 },
    { id: 'auth-rbac', label: 'Authentication & Role-Based Permissions', price: 8000, days: 4 },
    { id: 'payments', label: 'Razorpay / UPI / Stripe Payment Integration', price: 7000, days: 3 },
    { id: 'ai-rag', label: 'Custom AI RAG / Vector Search Knowledge Base', price: 15000, days: 6 },
    { id: 'ai-agent', label: '24/7 Autonomous AI Support Chatbot', price: 12000, days: 5 },
    { id: 'cms', label: 'Headless CMS / Content Management', price: 7000, days: 3 },
    { id: 'realtime', label: 'Real-Time WebSockets & Telemetry', price: 10000, days: 4 },
  ];

  const timelineMultipliers = {
    express: { label: 'Express Sprint (1-2 Weeks)', mult: 1.2, timeDays: 0.6 },
    standard: { label: 'Standard Agile (2-4 Weeks)', mult: 1.0, timeDays: 1.0 },
    flexible: { label: 'Flexible Phased Delivery', mult: 0.95, timeDays: 1.3 },
  };

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Calculations in INR
  const currentBase = projectTypes.find(t => t.id === projectType) || projectTypes[0];
  const featureSum = selectedFeatures.reduce((sum, fId) => {
    const feat = featureOptions.find(f => f.id === fId);
    return sum + (feat ? feat.price : 0);
  }, 0);

  const featureDays = selectedFeatures.reduce((sum, fId) => {
    const feat = featureOptions.find(f => f.id === fId);
    return sum + (feat ? feat.days : 0);
  }, 0);

  const multiplier = timelineMultipliers[timeline].mult;
  const timeFactor = timelineMultipliers[timeline].timeDays;

  // Starting minimum investment, open-ended
  const estimatedMin = Math.round((currentBase.basePrice + featureSum) * multiplier);
  const estimatedDurationDays = Math.max(5, Math.round((currentBase.baseDays + featureDays) * timeFactor));

  // Construct WhatsApp Pre-filled message in INR
  const featureNames = selectedFeatures
    .map(fId => featureOptions.find(f => f.id === fId)?.label)
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = encodeURIComponent(
    `Hi Arun, I used your AG TechLabs project estimator:\n` +
    `• Type: ${currentBase.label}\n` +
    `• Features: ${featureNames || 'Core only'}\n` +
    `• Timeline: ${timelineMultipliers[timeline].label}\n` +
    `• Estimated Investment: Starting from ₹${estimatedMin.toLocaleString('en-IN')} INR onwards (~${estimatedDurationDays} days)\n` +
    `Let's discuss getting started.`
  );

  const whatsappUrl = `https://wa.me/917011880423?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#090d18] border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(168,85,247,0.3)] text-left my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500 transition-all cursor-pointer"
          aria-label="Close Project Estimator"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
            AG TechLabs Project Estimator (India)
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-display">
          Estimate Your Project <span className="text-gradient">Cost & Timeline</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-6">
          Transparent Indian Rupee (₹) pricing starting from ₹25,000. Final scope tailored to your exact business requirements without hidden agency markups.
        </p>

        {/* Step 1: Project Type */}
        <div className="mb-6">
          <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
            1. Select Primary Domain
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {projectTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setProjectType(type.id)}
                  className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    projectType === type.id
                      ? 'bg-purple-950/60 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${projectType === type.id ? 'bg-purple-600/30 text-purple-300' : 'bg-slate-800 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">{type.label}</div>
                    <div className="text-[11px] text-cyan-400 font-mono">From ₹{type.basePrice.toLocaleString('en-IN')} onwards</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Desired Features */}
        <div className="mb-6">
          <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
            2. Choose Desired Modules & Features
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {featureOptions.map((feat) => {
              const isSelected = selectedFeatures.includes(feat.id);
              return (
                <div
                  key={feat.id}
                  onClick={() => toggleFeature(feat.id)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/60 text-white'
                      : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-medium">{feat.label}</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">+₹{feat.price.toLocaleString('en-IN')}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3: Timeline */}
        <div className="mb-6">
          <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
            3. Delivery Priority
          </label>
          <div className="grid grid-cols-3 gap-2">
            {Object.keys(timelineMultipliers).map((key) => (
              <button
                key={key}
                onClick={() => setTimeline(key)}
                className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                  timeline === key
                    ? 'bg-purple-950/60 border-purple-500 text-purple-200 font-bold'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {timelineMultipliers[key].label.split(' (')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Summary Card & WhatsApp Action */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-purple-950/40 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-slate-400">Estimated Investment:</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-white font-mono">
              Starting from ₹{estimatedMin.toLocaleString('en-IN')}+ <span className="text-xs text-slate-400 font-normal">INR onwards</span>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Estimated Duration: ~{estimatedDurationDays} working days</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss via WhatsApp</span>
            </a>
            <button
              onClick={onClose}
              className="text-center text-xs text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
            >
              Close & Continue Browsing
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
