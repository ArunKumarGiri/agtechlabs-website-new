import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Sliders, 
  Database, 
  Headphones, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  Server, 
  Activity, 
  Layers, 
  ShieldCheck,
  Zap,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { AI_CAPABILITIES, COMPANY_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audioEffects';

export default function AiStudioPage() {
  const [selectedModel, setSelectedModel] = useState('llama-8b');
  const [datasetTokens, setDatasetTokens] = useState('50m');
  const [loraRank, setLoraRank] = useState('16');
  const [quantization, setQuantization] = useState('4bit');
  const [activeSubTab, setActiveSubTab] = useState('training');

  const modelSpecs = {
    'llama-8b': { 
      name: 'Llama 3.3 (8B)', 
      vram4bit: '6 GB', 
      vram16bit: '16 GB', 
      tokensPerSec: '85 tok/s', 
      gpu: 'Single RTX 4090 / L4 (24GB)', 
      bestFor: 'Enterprise Copilots, Document Search & Fast Support',
      context: '128,000 tokens'
    },
    'deepseek-r1': { 
      name: 'DeepSeek R1 (14B Reasoning)', 
      vram4bit: '10 GB', 
      vram16bit: '28 GB', 
      tokensPerSec: '55 tok/s', 
      gpu: 'RTX 4090 (4-bit) or A100 (16-bit)', 
      bestFor: 'Complex Logic, Coding & Financial Reasoning',
      context: '64,000 tokens'
    },
    'mistral-7b': { 
      name: 'Mistral 7B Instruct', 
      vram4bit: '5.5 GB', 
      vram16bit: '14 GB', 
      tokensPerSec: '95 tok/s', 
      gpu: 'Single RTX 4090 / T4', 
      bestFor: 'Ultra Low Latency APIs & Text Summaries',
      context: '32,000 tokens'
    },
    'vision-multimodal': { 
      name: 'Domain Vision AI (YOLO/CLIP)', 
      vram4bit: '4 GB', 
      vram16bit: '12 GB', 
      tokensPerSec: '30 FPS', 
      gpu: 'Nvidia RTX 3090/4090', 
      bestFor: 'Document OCR, Object Detection & Visual Quality Checks',
      context: 'Images & Video Streams'
    },
  };

  const current = modelSpecs[selectedModel];

  // Dynamic estimate calculation
  const getTrainingTime = () => {
    if (datasetTokens === '10m') return '~4 to 8 GPU hours';
    if (datasetTokens === '50m') return '~18 to 24 GPU hours';
    return '~3 to 5 GPU days (Distributed A100)';
  };

  const getWhatsAppTrainingUrl = () => {
    const text = encodeURIComponent(
      `Hello Arun,\nI am interested in AI Model Training at AG TechLabs:\n` +
      `• Base Model: ${current.name}\n` +
      `• Dataset Volume: ${datasetTokens} tokens\n` +
      `• LoRA Rank: r=${loraRank}\n` +
      `• Precision: ${quantization}\n` +
      `• Use Case: ${current.bestFor}\n` +
      `Please let me know how we can proceed with a pilot dataset run.`
    );
    return `https://wa.me/917011880423?text=${text}`;
  };

  return (
    <div className="pt-28 pb-24 bg-[#030508] min-h-screen text-slate-100">
      
      {/* Background ambient lighting */}
      <div className="absolute top-24 right-1/4 w-[600px] h-[400px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[400px] bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span>AG TechLabs AI Engineering Studio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5 font-display">
            Train, Fine-Tune & Deploy <span className="text-gradient">Custom AI Models</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Take full control of your intelligence pipeline. We train open-source foundation models (Llama 3, DeepSeek R1, Mistral, Vision AI) on your proprietary datasets, deploy secure on-premise inference endpoints, and eliminate third-party data leakage.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppTrainingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss AI Pilot on WhatsApp</span>
            </a>
            <Link
              to="/learning"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Explore AI Architecture Guides</span>
            </Link>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {AI_CAPABILITIES.supportPillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-950/60 to-cyan-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5">
                  {idx === 0 && <Cpu className="w-6 h-6" />}
                  {idx === 1 && <Database className="w-6 h-6" />}
                  {idx === 2 && <Headphones className="w-6 h-6" />}
                  {idx === 3 && <BookOpen className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/80 text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Enterprise Grade</span>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE AI COMPUTE & VRAM PLAYGROUND */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.15)] mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
              // Interactive Architecture Simulator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-display">
              AI Model Training & Inference <span className="text-gradient">Compute Simulator</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Configure target parameters to calculate estimated VRAM consumption, recommended GPU deployment hardware, and inference velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Select Base Model */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  1. Select Foundation Model
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {Object.keys(modelSpecs).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedModel(key);
                      }}
                      className={`p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                        selectedModel === key
                          ? 'bg-purple-950/60 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-white font-bold">{modelSpecs[key].name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{modelSpecs[key].bestFor.split(',')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dataset Volume */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  2. Domain Dataset Volume: <span className="text-cyan-300 font-bold">{datasetTokens} tokens</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['10m', '50m', '250m+'].map((vol) => (
                    <button
                      key={vol}
                      onClick={() => {
                        soundFx.playClick();
                        setDatasetTokens(vol);
                      }}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
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

              {/* LoRA Rank & Quantization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    LoRA Rank (r): <span className="text-purple-400 font-bold">{loraRank}</span>
                  </label>
                  <div className="flex gap-2">
                    {['8', '16', '32', '64'].map((r) => (
                      <button
                        key={r}
                        onClick={() => {
                          soundFx.playClick();
                          setLoraRank(r);
                        }}
                        className={`flex-1 py-2 rounded-xl text-xs font-medium border cursor-pointer ${
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
                        onClick={() => {
                          soundFx.playClick();
                          setQuantization(q);
                        }}
                        className={`flex-1 py-2 rounded-xl text-xs font-medium border cursor-pointer ${
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

            {/* Right Telemetry Card */}
            <div className="lg:col-span-5">
              <div className="p-7 rounded-2xl bg-gradient-to-br from-slate-950 via-[#0a0f1d] to-purple-950/40 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] relative">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono font-bold text-white">ENGINEERING SPECS</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Target Model:</span>
                    <span className="font-bold text-white font-mono">{current.name}</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">VRAM ({quantization}):</span>
                    <span className="font-bold text-cyan-300 font-mono">
                      {quantization === '4bit' ? current.vram4bit : current.vram16bit}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Inference Throughput:</span>
                    <span className="font-bold text-purple-300 font-mono">{current.tokensPerSec}</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Recommended GPU:</span>
                    <span className="font-bold text-white font-mono">{current.gpu}</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Training Duration:</span>
                    <span className="font-bold text-emerald-300 font-mono">{getTrainingTime()}</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Serving Runtime:</span>
                    <span className="font-bold text-indigo-300 font-mono">vLLM + PagedAttention</span>
                  </div>

                  <div className="py-2 text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                    <strong className="text-white">Optimal Use-Case:</strong> {current.bestFor}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <a
                    href={getWhatsAppTrainingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire For This AI Architecture</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ENTERPRISE RAG ARCHITECTURE SHOWCASE */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-slate-800/80 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider">
              Zero-Hallucination Pipeline
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Enterprise RAG & Autonomous Support Bots
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Connect your customer support tickets, internal PDFs, Notion, and databases to custom private agents that work 24/7 without hallucinating or leaking confidential records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/5">
              <span className="text-xs font-mono text-purple-400 font-bold">STAGE 01</span>
              <h4 className="text-base font-bold text-white mt-1 mb-2">Hybrid Dense-Sparse Vector Search</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Combines BGE neural embeddings with BM25 keyword matching (Pinecone, ChromaDB, pgvector) to retrieve exact paragraphs in &lt;15ms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/5">
              <span className="text-xs font-mono text-cyan-400 font-bold">STAGE 02</span>
              <h4 className="text-base font-bold text-white mt-1 mb-2">Context Verification & Re-ranking</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cross-encoder re-rankers verify that retrieved chunks are factually relevant before passing them into the LLM context window.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/5">
              <span className="text-xs font-mono text-emerald-400 font-bold">STAGE 03</span>
              <h4 className="text-base font-bold text-white mt-1 mb-2">Autonomous Action & Human Fallback</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                The agent executes approved API actions (ticket updates, refunds) with strict JSON schema guards and seamless hand-off to human support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
