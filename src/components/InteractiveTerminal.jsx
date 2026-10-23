import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Send, CornerDownLeft } from 'lucide-react';
import { COMPANY_INFO, SERVICES, AI_CAPABILITIES } from '../data/portfolioData';

export default function InteractiveTerminal({ onOpenEstimator }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'AG TechLabs HyperKernel v4.2.0-ai initialized.' },
    { type: 'system', text: 'Type "help" or click quick commands below to explore architecture capabilities.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `AVAILABLE COMMANDS:
  • services   - List all web, mobile, and custom software solutions
  • ai-models  - Display supported LLMs & fine-tuning specs (Llama, DeepSeek)
  • founder    - Show Arun Goswami credentials and role
  • quote      - Launch interactive project cost calculator
  • contact    - Get direct phone (7011880423) & WhatsApp links
  • clear      - Clear terminal screen`
        });
        break;

      case 'services':
        newHistory.push({
          type: 'response',
          text: `AG TECHLABS CORE SERVICES:
  [1] Website Development (Next.js 14, React 19, 99+ Core Web Vitals)
  [2] Custom Software / SaaS (Cloud-Native, PostgreSQL, Microservices)
  [3] Mobile Applications (Cross-platform Flutter & React Native)
  [4] AI Model Training & Fine-Tuning (Llama 3, DeepSeek, LoRA/QLoRA)
  [5] Enterprise RAG & Autonomous Support Agents
  [6] UI/UX Design & Scalable Design Systems`
        });
        break;

      case 'ai':
      case 'models':
      case 'ai-models':
        newHistory.push({
          type: 'response',
          text: `AI MODEL TRAINING WORKBENCH:
  • Llama 3.3 (8B/70B): Enterprise RAG, Copilots, QLoRA r=16
  • DeepSeek R1 (14B): High-reasoning code & mathematics
  • Mistral 7B Instruct: Low-latency API serving (95 tok/s)
  • Multimodal Vision AI: YOLOv10 object detection & OCR
  • Training Pipelines: PyTorch, Hugging Face, vLLM, TensorRT-LLM`
        });
        break;

      case 'whoami':
      case 'founder':
      case 'arun':
        newHistory.push({
          type: 'response',
          text: `ARUN GOSWAMI - FOUNDER & PRINCIPAL ARCHITECT:
  • Organization: AG TechLabs
  • Direct Phone: 7011880423
  • Expertise: Full-Stack Web, Cross-Platform Mobile & Custom AI Engineering
  • Philosophy: High code quality, zero agency bloat, 100% direct communication.`
        });
        break;

      case 'quote':
      case 'calc':
      case 'estimator':
        if (onOpenEstimator) onOpenEstimator();
        newHistory.push({
          type: 'response',
          text: `Launching AG TechLabs Project Estimator (Starting from ₹25,000 INR onwards)...`
        });
        break;


      case 'contact':
      case 'phone':
      case 'whatsapp':
        newHistory.push({
          type: 'response',
          text: `DIRECT CONTACT CHANNELS:
  • Phone: 7011880423 (Call directly)
  • WhatsApp: https://wa.me/917011880423
  • Lead Architect: Arun Goswami
  • Response Guarantee: Within 2 hours on business days.`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" to see available options.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      executeCommand(inputVal);
    }
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const quickCommands = ['help', 'services', 'ai-models', 'quote', 'contact', 'clear'];

  return (
    <div className="w-full rounded-2xl bg-[#070b14] border border-purple-500/30 shadow-[0_0_35px_rgba(168,85,247,0.2)] overflow-hidden font-mono text-left">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-slate-400 font-bold ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-purple-400" />
            <span>ag-techlabs-terminal ~ v4.2</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
            ONLINE
          </span>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div className="p-4 sm:p-5 h-64 overflow-y-auto space-y-2 text-xs text-slate-300">
        {history.map((line, idx) => (
          <div key={idx}>
            {line.type === 'user' && (
              <div className="text-cyan-300 font-semibold">{line.text}</div>
            )}
            {line.type === 'system' && (
              <div className="text-slate-400 italic">{line.text}</div>
            )}
            {line.type === 'response' && (
              <pre className="text-purple-200 whitespace-pre-wrap leading-relaxed bg-slate-900/40 p-2 rounded-lg border border-white/5 my-1">
                {line.text}
              </pre>
            )}
            {line.type === 'error' && (
              <div className="text-rose-400">{line.text}</div>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Clickable Commands */}
      <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800/60 flex items-center gap-1.5 flex-wrap">
        <span className="text-[10px] text-slate-400 mr-1">Quick:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="text-[11px] px-2 py-0.5 rounded bg-slate-900 hover:bg-purple-950 text-cyan-300 hover:text-white border border-slate-800 hover:border-purple-500/50 transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input Prompt Form */}
      <form onSubmit={handleSubmit} className="flex items-center px-4 py-2.5 bg-black/90 border-t border-slate-800">
        <span className="text-emerald-400 text-xs font-bold mr-2">guest@ag-techlabs:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'services', 'ai-models', 'quote'..."
          className="flex-1 bg-transparent border-none text-white text-xs focus:outline-none font-mono placeholder:text-slate-600"
        />
        <button
          type="submit"
          className="text-slate-400 hover:text-purple-400 transition-colors p-1"
          aria-label="Execute command"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
