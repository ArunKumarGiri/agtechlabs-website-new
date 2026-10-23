import React, { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Sliders, 
  Database, 
  Headphones, 
  BookOpen, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  Server,
  Layers,
  Zap,
  Activity,
  ShieldCheck
} from 'lucide-react';
import { AI_CAPABILITIES } from '../data/portfolioData';

export default function AiShowcase({ onOpenEstimator }) {
  const [activeTab, setActiveTab] = useState('models');
  
  // Interactive Model Training Simulator State
  const [selectedBaseModel, setSelectedBaseModel] = useState('llama-8b');
  const [datasetTokens, setDatasetTokens] = useState('50m');
  const [loraRank, setLoraRank] = useState('16');
  const [quantization, setQuantization] = useState('4bit');

  const modelSpecs = {
    'llama-8b': { name: 'Llama 3.3 (8B)', vram4bit: '6 GB', vram16bit: '16 GB', tokensPerSec: '85 tok/s', bestFor: 'Enterprise Copilots & Fast Support' },
    'deepseek-14b': { name: 'DeepSeek R1 (14B)', vram4bit: '10 GB', vram16bit: '28 GB', tokensPerSec: '55 tok/s', bestFor: 'Complex Reasoning, Coding & Logic' },
    'mistral-7b': { name: 'Mistral 7B Instruct', vram4bit: '5.5 GB', vram16bit: '14 GB', tokensPerSec: '95 tok/s', bestFor: 'Low Latency APIs & Summaries' },
    'vision-multimodal': { name: 'Domain Vision AI (YOLO/CLIP)', vram4bit: '4 GB', vram16bit: '12 GB', tokensPerSec: '30 FPS', bestFor: 'Document OCR & Object Detection' },
  };

  const currentSpec = modelSpecs[selectedBaseModel];

  return (
    <section id="ai-studio" className="relative py-28 bg-[#050811] border-t border-slate-900/90 overflow-hidden">
      
      {/* Background glow and subtle circuit styling */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-cyan-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span>Next-Gen AI Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 font-display">
            Train, Fine-Tune & Deploy <span className="text-gradient">Custom AI Models</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Move beyond generic API prompts. We train and fine-tune open-source LLMs on your proprietary company data, build intelligent RAG support architectures, and equip your business with autonomous AI agents.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 max-w-2xl mx-auto mb-14 backdrop-blur-md">
          <button
            onClick={() => setActiveTab('models')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'models'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Supported Models</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'simulator'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4 text-cyan-300" />
            <span>Training Playground</span>
          </button>

          <button
            onClick={() => setActiveTab('learning')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'learning'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 text-purple-300" />
            <span>Learning Blueprints</span>
          </button>
        </div>

        {/* Tab Content 1: Supported Models & Pillars */}
        {activeTab === 'models' && (
          <div className="space-y-12">
            {/* 4 Pillars of AI */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {AI_CAPABILITIES.supportPillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5">
                      {idx === 0 && <Cpu className="w-6 h-6" />}
                      {idx === 1 && <Database className="w-6 h-6" />}
                      {idx === 2 && <Headphones className="w-6 h-6" />}
                      {idx === 3 && <BookOpen className="w-6 h-6" />}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Production Grade</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Model Catalog Table */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Foundation Models We Train & Fine-Tune</h3>
                  <p className="text-xs text-slate-400 mt-1">Full support for custom tokenizer expansion, synthetic dataset ingestion, and edge quantization.</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/30 text-xs font-mono font-medium">
                  PyTorch & HuggingFace Ecosystem
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {AI_CAPABILITIES.models.map((model, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        {model.tag}
                      </span>
                      <Activity className="w-4 h-4 text-purple-400" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">{model.name}</h4>
                    <p className="text-xs text-slate-400 mb-3">{model.type}</p>
                    
                    <div className="space-y-1.5 pt-3 border-t border-slate-800 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Best For:</span>
                        <span className="text-slate-200 font-medium text-right text-[11px]">{model.useCase}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Method:</span>
                        <span className="text-cyan-400 text-right text-[11px]">{model.trainingMethod}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Window:</span>
                        <span className="text-purple-300 text-right text-[11px]">{model.tokens}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Interactive Parameter & Compute Simulator */}
        {activeTab === 'simulator' && (
          <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Interactive Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Interactive AI Architecture Simulator</h3>
                  <p className="text-sm text-slate-400">
                    Test hyperparameters and preview required GPU memory, inference speed, and deployment architecture for your custom fine-tuned model.
                  </p>
                </div>

                {/* Base Model Select */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    1. Select Base Model Family
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                    {Object.keys(modelSpecs).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedBaseModel(key)}
                        className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                          selectedBaseModel === key
                            ? 'bg-purple-950/60 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {modelSpecs[key].name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dataset Size */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    2. Domain Dataset Volume: <span className="text-cyan-300 font-bold">{datasetTokens} tokens</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['10m', '50m', '250m+'].map((vol) => (
                      <button
                        key={vol}
                        onClick={() => setDatasetTokens(vol)}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                          datasetTokens === vol
                            ? 'bg-cyan-950/60 border-cyan-500 text-cyan-200'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {vol} Tokens
                      </button>
                    ))}
                  </div>
                </div>

                {/* LoRA Rank & Precision */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      LoRA Rank (r): <span className="text-purple-400 font-bold">{loraRank}</span>
                    </label>
                    <div className="flex gap-2">
                      {['8', '16', '32', '64'].map((r) => (
                        <button
                          key={r}
                          onClick={() => setLoraRank(r)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-medium border ${
                            loraRank === r
                              ? 'bg-purple-600/40 border-purple-500 text-white'
                              : 'bg-slate-900 border-slate-800 text-slate-400'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Precision / Quant: <span className="text-cyan-400 font-bold">{quantization}</span>
                    </label>
                    <div className="flex gap-2">
                      {['4bit', '8bit', '16bit'].map((q) => (
                        <button
                          key={q}
                          onClick={() => setQuantization(q)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-medium border ${
                            quantization === q
                              ? 'bg-cyan-600/40 border-cyan-500 text-white'
                              : 'bg-slate-900 border-slate-800 text-slate-400'
                          }`}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Live Telemetry Output Card */}
              <div className="lg:col-span-5">
                <div className="p-7 rounded-2xl bg-gradient-to-br from-slate-950 via-[#0a0f1d] to-purple-950/40 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] relative">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-mono font-bold text-white">ENGINEERING SPECS</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                      OPTIMAL FIT
                    </span>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Target Model:</span>
                      <span className="font-bold text-white font-mono">{currentSpec.name}</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">VRAM Requirement ({quantization}):</span>
                      <span className="font-bold text-cyan-300 font-mono">
                        {quantization === '4bit' ? currentSpec.vram4bit : currentSpec.vram16bit}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Inference Speed:</span>
                      <span className="font-bold text-purple-300 font-mono">{currentSpec.tokensPerSec}</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Recommended Hardware:</span>
                      <span className="font-bold text-white font-mono">
                        {quantization === '4bit' ? 'Single RTX 4090 / L4 GPU' : 'A100 (40GB/80GB)'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Serving Runtime:</span>
                      <span className="font-bold text-emerald-300 font-mono">vLLM + PagedAttention</span>
                    </div>

                    <div className="py-2 text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                      <strong className="text-white">Optimal Use-Case:</strong> {currentSpec.bestFor}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <a
                      href="#contact"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      <span>Inquire For Custom Model Training</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab Content 3: Learning Blueprints & Architecture */}
        {activeTab === 'learning' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AI_CAPABILITIES.learningBlueprints.map((blueprint, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-500/30 font-semibold">
                      {blueprint.badge}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4">{blueprint.title}</h3>

                  <div className="space-y-3 mb-6">
                    {blueprint.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-mono text-purple-400 shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white border border-slate-700/80 text-center transition-all"
                >
                  Request Architecture Consultation
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
