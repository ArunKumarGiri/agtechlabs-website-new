import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  ShieldCheck,
  User,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService || 'Website Development',
    budget: '$500 - $1,500',
    details: ''
  });

  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Update service if prop changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please provide your name and email address.');
      return;
    }
    setInquiryModalOpen(true);
  };

  // Pre-formatted WhatsApp Message
  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Arun Goswami,\n` +
      `I am reaching out regarding a new project inquiry:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone || 'N/A'}\n` +
      `• Service Required: ${formData.service}\n` +
      `• Budget Range: ${formData.budget}\n` +
      `• Project Details: ${formData.details || 'To discuss on call/chat'}\n\n` +
      `Looking forward to connecting!`
    );
  };

  const handleCopyInquiry = () => {
    const text = 
      `Project Inquiry for Arun Goswami\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.service}\n` +
      `Budget: ${formData.budget}\n` +
      `Details: ${formData.details}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#030508] border-t border-slate-900/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[350px] bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Start a Conversation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 font-display">
            Have an Idea? <span className="text-gradient">Let's Build Something Amazing.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Whether you need a high-converting website, custom SaaS software, a mobile app, or specialized AI model training & support, Arun Goswami is here to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp / Phone Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-900/40 border border-purple-500/40 flex items-center justify-center text-purple-400 font-mono font-bold text-lg">
                  AG
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Arun Goswami</h3>
                  <p className="text-xs text-slate-400">Software & AI Solutions Architect</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Feel free to connect directly for new project inquiries, technical consultations, architecture audits, or AI model training scopes.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 mb-8">
                {/* Phone Link */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/60 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-purple-950 text-purple-400 border border-purple-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Direct Phone</div>
                    <a 
                      href={PERSONAL_INFO.phoneTel}
                      className="text-sm font-bold text-white hover:text-purple-300 transition-colors font-mono"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Link */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/60 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-500/20">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">WhatsApp</div>
                    <a 
                      href={PERSONAL_INFO.whatsappDirect}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-300 hover:text-emerald-200 transition-colors font-mono"
                    >
                      +91 7011880423
                    </a>
                  </div>
                </div>

                {/* Response Time Indicator */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/60 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/20">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Response Standard</div>
                    <span className="text-xs font-semibold text-slate-200">
                      Within 2 hours (Same-Day Discovery)
                    </span>
                  </div>
                </div>
              </div>

              {/* High-Impact Contact Buttons */}
              <div className="space-y-3">
                {/* Prominent WhatsApp CTA */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Contact on WhatsApp</span>
                </a>

                {/* Click to Call CTA */}
                <a
                  href={PERSONAL_INFO.phoneTel}
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center justify-center gap-2.5 border border-purple-500/30 hover:border-purple-500/60 transition-all"
                >
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>Click to Call: {PERSONAL_INFO.phone}</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Functional Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Project Inquiry Form</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Fill in your specifications to initiate your project brief.</p>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-purple-950/80 text-purple-300 border border-purple-500/30">
                  Direct to Arun
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Android & iOS Mobile App Development">Android & iOS Mobile App</option>
                      <option value="AI Model Training & Fine-Tuning">AI Model Training & Fine-Tuning</option>
                      <option value="AI Support & Autonomous Agents">AI Support & Autonomous Agents</option>
                      <option value="UI/UX Design & Prototyping">UI/UX Design & Prototyping</option>
                      <option value="E-commerce Development">E-commerce Development</option>
                      <option value="Website Redesign & Maintenance">Website Redesign & Maintenance</option>
                      <option value="API Integration & Cloud Architecture">API Integration & Cloud</option>
                      <option value="Business Automation">Business Automation</option>
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                  >
                    <option value="< $500">&lt; $500 (Small Task / Consultation)</option>
                    <option value="$500 - $1,500">$500 - $1,500 (Standard Website / MVP)</option>
                    <option value="$1,500 - $3,500">$1,500 - $3,500 (Full Software / Mobile App)</option>
                    <option value="$3,500 - $8,000+">$3,500 - $8,000+ (Enterprise SaaS & Custom AI)</option>
                  </select>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Project Details & Goals
                  </label>
                  <textarea
                    name="details"
                    rows="4"
                    placeholder="Tell Arun about your project concept, target audience, timeline, or AI requirements..."
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center font-mono">
                  Guaranteed privacy. Directly connects you to Arun Goswami without spam.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Inquiry Submission Modal (Honest frontend connection handling) */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#090d18] border border-purple-500/50 rounded-3xl p-7 text-left shadow-2xl">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Inquiry Summary Prepared</h4>
                <p className="text-xs text-slate-400">Direct submission channel ready</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              Your inquiry has been formatted. Because this is a frontend portfolio without an intermediary backend server, you can instantly dispatch this exact message directly to Arun Goswami on WhatsApp or copy the summary:
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1 mb-6">
              <div><strong className="text-purple-300">Name:</strong> {formData.name}</div>
              <div><strong className="text-purple-300">Email:</strong> {formData.email}</div>
              <div><strong className="text-purple-300">Service:</strong> {formData.service}</div>
              <div><strong className="text-purple-300">Budget:</strong> {formData.budget}</div>
              {formData.details && <div><strong className="text-purple-300">Details:</strong> {formData.details}</div>}
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/917011880423?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send to Arun on WhatsApp Now</span>
              </a>

              <div className="flex gap-2">
                <button
                  onClick={handleCopyInquiry}
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </button>

                <button
                  onClick={() => setInquiryModalOpen(false)}
                  className="py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 text-xs font-semibold cursor-pointer transition-all"
                >
                  Done
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
