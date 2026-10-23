import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Layers,
  Calculator,
  MessageSquare
} from 'lucide-react';
import { AI_CAPABILITIES, COMPANY_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audioEffects';

export default function LearningPage() {
  const [selectedGuideId, setSelectedGuideId] = useState('guide-training');
  const [tokenVolume, setTokenVolume] = useState('1m'); // 1m, 10m, 50m tokens per month
  const [activeCodeTab, setActiveCodeTab] = useState('lora');

  const selectedGuide = AI_CAPABILITIES.learningBlueprints.find(g => g.id === selectedGuideId) || AI_CAPABILITIES.learningBlueprints[0];

  // Token cost calculations: comparing Commercial API vs Self-Hosted fine-tuned model (in INR)
  const tokenCosts = {
    '1m': { api: '₹1,200 - ₹2,500 / mo', selfHosted: '₹999 / mo (Shared L4 Cloud)', verdict: 'API or Small Server is comparable' },
    '10m': { api: '₹12,000 - ₹25,000 / mo', selfHosted: '₹3,800 / mo (Dedicated RTX 4090 Cloud)', verdict: 'Self-hosting cuts costs by ~75%' },
    '50m': { api: '₹60,000 - ₹1,25,000 / mo', selfHosted: '₹9,500 / mo (Dedicated A100 Server)', verdict: 'Self-hosting saves up to ₹1,00,000+/month with zero data leakage' },
  };


  const codeSnippets = {
    lora: `# AG TechLabs - LoRA Fine-Tuning Pipeline (PyTorch + TRL)
from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments
from peft import LoraConfig, get_peft_model
from trl import SFTTrainer

model_id = "meta-llama/Llama-3.3-8B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id)

peft_config = LoraConfig(
    r=16,
    lora_alpha=32,
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM",
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj"]
)

# Initialize Supervised Fine-Tuning Trainer
trainer = SFTTrainer(
    model=model_id,
    train_dataset=dataset,
    peft_config=peft_config,
    max_seq_length=4096,
    tokenizer=tokenizer
)
trainer.train()`,

    rag: `# AG TechLabs - Enterprise Dense-Sparse Hybrid RAG
from langchain_community.vectorstores import Pinecone
from langchain_openai import OpenAIEmbeddings
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever

# 1. Neural Semantic Embeddings (BGE / OpenAI)
dense_retriever = vectorstore.as_retriever(search_kwargs={"k": 4})

# 2. Exact Keyword BM25 Index
sparse_retriever = BM25Retriever.from_texts(doc_texts)

# 3. Hybrid Ensemble with Reciprocal Rank Fusion (RRF)
ensemble_retriever = EnsembleRetriever(
    retrievers=[dense_retriever, sparse_retriever],
    weights=[0.6, 0.4]
)
docs = ensemble_retriever.invoke("What are our Q3 security compliance SLA guarantees?")`,

    vllm: `# AG TechLabs - High-Throughput Model Serving
# Deploy fine-tuned LoRA model with vLLM PagedAttention
python3 -m vllm.entrypoints.openai.api_server \\
    --model meta-llama/Llama-3.3-8B-Instruct \\
    --enable-lora \\
    --lora-modules domain-adapter=/models/ag-techlabs-lora \\
    --quantization awq \\
    --gpu-memory-utilization 0.90 \\
    --port 8000
# Yields 85+ tokens/second with OpenAI API protocol compatibility`
  };

  return (
    <div className="pt-28 pb-24 bg-[#030508] min-h-screen text-slate-100">
      
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/4 w-[550px] h-[350px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[400px] bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>AG TechLabs Architecture Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5 font-display">
            AI Engineering & <span className="text-gradient">Learning Blueprints</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Architectural guides, decision matrices, code snippets, and cost calculators curated by Arun Goswami to help engineering teams master custom AI model fine-tuning and enterprise RAG.
          </p>
        </div>

        {/* Guide Selector Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-12">
          {AI_CAPABILITIES.learningBlueprints.map((blueprint) => (
            <button
              key={blueprint.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedGuideId(blueprint.id);
              }}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                selectedGuideId === blueprint.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              <span>{blueprint.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Guide Deep Dive Container */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-500/30 mb-16 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div>
              <span className="text-xs font-mono text-purple-400 px-2.5 py-1 rounded bg-purple-950/80 border border-purple-500/30 font-semibold mr-3">
                {selectedGuide.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Difficulty: <strong className="text-cyan-300">{selectedGuide.difficulty}</strong> • {selectedGuide.duration}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500">
              AG TechLabs Engineering Framework
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            {selectedGuide.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
            {selectedGuide.summary}
          </p>

          <div className="space-y-4 mb-10">
            {selectedGuide.steps.map((st, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-6 rounded-lg bg-purple-600/30 text-purple-300 border border-purple-500/40 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {st.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-9">
                  {st.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Need assistance implementing this pipeline in your company environment?
            </span>
            <a
              href={`https://wa.me/917011880423?text=${encodeURIComponent(`Hi Arun, I would like to schedule a technical consultation regarding: ${selectedGuide.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss Blueprint with Arun</span>
            </a>
          </div>
        </div>

        {/* CODE SNIPPETS SHOWCASE */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/90 border border-slate-800 mb-16 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">Production Code Snippets</span>
              <h3 className="text-xl font-bold text-white mt-1">Ready-to-Use Architectures</h3>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveCodeTab('lora');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-colors ${
                  activeCodeTab === 'lora' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                LoRA Fine-Tuning
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveCodeTab('rag');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-colors ${
                  activeCodeTab === 'rag' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                Hybrid RAG
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveCodeTab('vllm');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-colors ${
                  activeCodeTab === 'vllm' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                vLLM Server
              </button>
            </div>
          </div>

          <pre className="p-5 rounded-2xl bg-[#070b14] border border-white/5 font-mono text-xs text-purple-200 overflow-x-auto leading-relaxed shadow-inner">
            {codeSnippets[activeCodeTab]}
          </pre>
        </div>

        {/* INTERACTIVE TOKEN COST ESTIMATOR */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-cyan-500/30">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">Interactive Cost Calculator</span>
            <h3 className="text-2xl font-bold text-white mt-1 font-display">
              Commercial API vs Self-Hosted Fine-Tuned Model Cost
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select monthly token volume to see how self-hosting a fine-tuned open-source model compares to proprietary token billing.
            </p>
          </div>

          <div className="flex gap-2.5 mb-6">
            {['1m', '10m', '50m'].map((vol) => (
              <button
                key={vol}
                onClick={() => {
                  soundFx.playClick();
                  setTokenVolume(vol);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold cursor-pointer transition-all ${
                  tokenVolume === vol
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                {vol === '1m' ? '1 Million Tokens' : vol === '10m' ? '10 Million Tokens' : '50 Million Tokens'} / Mo
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">Commercial API Cost:</span>
              <span className="text-xl font-bold text-rose-400 font-mono">{tokenCosts[tokenVolume].api}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">Self-Hosted Fine-Tuned Model:</span>
              <span className="text-xl font-bold text-emerald-400 font-mono">{tokenCosts[tokenVolume].selfHosted}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">Engineering Assessment:</span>
              <span className="text-xs font-semibold text-cyan-300">{tokenCosts[tokenVolume].verdict}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
