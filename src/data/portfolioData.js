import { getAssetUrl } from '../utils/assetUrl';

export const COMPANY_INFO = {
  brandName: "AG TechLabs",
  brandLegal: "AG TechLabs by Arun Goswami",
  founder: "Arun Goswami",
  role: "Founder & Principal Solutions Architect",
  tagline: "Advanced Web, Mobile & AI Model Engineering",
  subTagline: "Building the Future, One Line of Code at a Time",
  phone: "7011880423",
  phoneFormatted: "+91 7011880423",
  phoneTel: "tel:+917011880423",
  whatsappUrl: "https://wa.me/917011880423?text=Hi%20Arun,%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20AG%20TechLabs.",
  whatsappDirect: "https://wa.me/917011880423",
  email: "contact.agtechlabs@gmail.com",
  location: "New Delhi, India (Global Remote Services)",
  availability: "Accepting New Projects & AI Engagements",
  yearsExperience: "6+ Years Production Engineering",
  metrics: {
    uptime: "99.98%",
    avgLatency: "<85ms",
    satisfaction: "100%",
    deliverySpeed: "2x Agile Velocity"
  }
};

export const PERSONAL_INFO = COMPANY_INFO; // backward compatibility

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "AI Studio", path: "/ai-studio", badge: "AI Lab" },
  { name: "Projects", path: "/projects" },
  { name: "AI Learning", path: "/learning", badge: "New" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const SERVICES = [
  {
    id: "web-dev",
    title: "Website Development",
    category: "Web Engineering",
    description: "High-performance, responsive websites built with Next.js, React, and modern CSS architecture. Engineered for sub-second load times and exceptional SEO rankings.",
    icon: "Globe",
    badge: "Core Specialty",
    features: ["Next.js & React SSR/SSG", "SEO & Core Web Vitals 99+", "Responsive Glassmorphism UI", "Custom CMS Integration"],
    deliverables: ["Full responsive website", "SEO meta suite & sitemap", "Lighthouse 95+ guarantee", "Deployment to Edge CDN"],
    timeline: "1-2 Weeks",
    color: "purple"
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    category: "Software Engineering",
    description: "Bespoke SaaS platforms, enterprise backends, and cloud-native software architected for reliability, modular growth, and effortless scale.",
    icon: "Cpu",
    badge: "Enterprise",
    features: ["Scalable Microservices", "PostgreSQL & MongoDB", "Authentication & Role Security", "Automated CI/CD Pipelines"],
    deliverables: ["Modular backend architecture", "Secure JWT / OAuth auth", "Interactive admin dashboard", "Automated backup & monitoring"],
    timeline: "3-6 Weeks",
    color: "blue"
  },
  {
    id: "mobile-apps",
    title: "Android & iOS Mobile App Development",
    category: "Mobile",
    description: "Fluid, cross-platform mobile experiences with Flutter and React Native. Pixel-perfect native performance with shared codebases and offline capabilities.",
    icon: "Smartphone",
    badge: "Cross-Platform",
    features: ["Flutter & React Native", "Smooth 60fps Animations", "Push Notifications & Camera", "App Store & Play Store Deployment"],
    deliverables: ["Cross-platform iOS/Android build", "Store approval submission support", "Push notification backend", "Offline local cache"],
    timeline: "3-5 Weeks",
    color: "cyan"
  },
  {
    id: "ai-training",
    title: "AI Model Training & Fine-Tuning",
    category: "Artificial Intelligence",
    description: "Custom training and fine-tuning of open-source LLMs (Llama 3, Mistral, DeepSeek), LoRA adapters, domain-specific instruction datasets, and multimodal vision models.",
    icon: "Brain",
    badge: "Next-Gen AI",
    features: ["LLM Fine-Tuning (LoRA/QLoRA)", "Custom Domain Datasets", "PyTorch & Hugging Face", "Quantization & GPU Optimization"],
    deliverables: ["Tuned LoRA / GGUF adapter", "Evaluation benchmark report", "vLLM / Ollama serving script", "Private self-hosted deployment"],
    timeline: "2-4 Weeks",
    color: "purple"
  },
  {
    id: "ai-agents",
    title: "AI Support & Autonomous Agents",
    category: "Artificial Intelligence",
    description: "Intelligent autonomous agents, enterprise RAG knowledge engines, and 24/7 AI customer support copilots integrated with your existing business tools.",
    icon: "Bot",
    badge: "AI Automation",
    features: ["Enterprise RAG & Vector Search", "Autonomous Multi-Agent Workflows", "OpenAI & Claude API Integration", "24/7 Automated Support Bots"],
    deliverables: ["Multi-channel support bot", "Pinecone / Chroma vector DB", "Tool execution webhooks", "Human hand-off fallback"],
    timeline: "2-3 Weeks",
    color: "blue"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design & Prototyping",
    category: "Product Design",
    description: "Intuitive, human-centric interface design and interactive prototypes. Sleek dark-mode aesthetics, custom design systems, and conversion-optimized user flows.",
    icon: "Palette",
    badge: "Design",
    features: ["Figma Interactive Mockups", "Complete Design Token Systems", "Micro-animations & Transitions", "User Journey Mapping"],
    deliverables: ["Clickable Figma prototype", "Component library & design tokens", "Responsive breakpoint layouts", "Asset export package"],
    timeline: "1-2 Weeks",
    color: "cyan"
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    category: "Commerce",
    description: "Ultra-fast, high-converting digital storefronts with seamless payment gateways (Stripe, Razorpay), custom cart flows, and real-time inventory management.",
    icon: "ShoppingBag",
    badge: "High Conversion",
    features: ["Custom Checkout Experiences", "Global Payment Gateways", "Inventory & Order Tracking", "Automated Abandoned Cart Flows"],
    deliverables: ["Full commerce storefront", "Payment gateway integration", "Order management dashboard", "Cart recovery automation"],
    timeline: "2-4 Weeks",
    color: "purple"
  },
  {
    id: "redesign-maintenance",
    title: "Website Redesign & Maintenance",
    category: "Optimization",
    description: "Transform outdated websites into modern digital powerhouses. Continuous security monitoring, speed enhancements, and bug-free maintenance.",
    icon: "RefreshCw",
    badge: "Optimization",
    features: ["Speed & Lighthouse Optimization", "Security Auditing & Hardening", "Legacy Code Modernization", "Monthly Retainer & Support"],
    deliverables: ["Full architectural rewrite", "Zero-downtime DNS cutover", "Security patch audit", "Monthly ongoing support"],
    timeline: "1-2 Weeks",
    color: "blue"
  },
  {
    id: "api-cloud",
    title: "API Integration & Cloud Architecture",
    category: "Cloud & DevOps",
    description: "Resilient REST and GraphQL APIs, third-party webhook integrations, and scalable cloud deployments on AWS, Vercel, and Docker environments.",
    icon: "Layers",
    badge: "Infrastructure",
    features: ["RESTful & GraphQL Endpoints", "Docker Containerization", "AWS & Cloudflare Edge CDN", "High Concurrency Handling"],
    deliverables: ["Swagger / OpenAPI docs", "Docker Compose configuration", "Edge caching rules", "Rate limiting & auth tokens"],
    timeline: "1-3 Weeks",
    color: "cyan"
  },
  {
    id: "business-automation",
    title: "Business Automation & Workflows",
    category: "Automation",
    description: "Eliminate repetitive manual tasks. Connect your CRM, email campaigns, billing, and databases into cohesive, self-operating workflows.",
    icon: "Zap",
    badge: "Productivity",
    features: ["Custom Python & Node Scripts", "CRM & Webhook Syncing", "Automated Report Generation", "Lead Capture Pipelines"],
    deliverables: ["Automated webhook triggers", "Error retry logging engine", "Weekly analytics digest", "No-code tool integration"],
    timeline: "1-2 Weeks",
    color: "purple"
  }
];

export const AI_CAPABILITIES = {
  models: [
    {
      id: "llama-8b",
      name: "Llama 3.3 (8B / 70B)",
      type: "Open-Source Foundation LLM",
      vram4bit: "6 GB",
      vram16bit: "16 GB",
      tokensPerSec: "85 tok/s",
      useCase: "Enterprise Copilots, Chatbots & Documentation QA",
      trainingMethod: "QLoRA & LoRA Fine-Tuning (r=16, 32)",
      tokens: "128k context window",
      tag: "Top Enterprise Pick"
    },
    {
      id: "deepseek-r1",
      name: "DeepSeek R1 / V3",
      type: "Reasoning & Coding Intelligence",
      vram4bit: "10 GB",
      vram16bit: "28 GB",
      tokensPerSec: "55 tok/s",
      useCase: "Complex Logic, Math, Code Synthesis & Financial Analysis",
      trainingMethod: "Reinforcement Learning & Distillation",
      tokens: "Deep Chain-of-Thought",
      tag: "Advanced Logic"
    },
    {
      id: "mistral-7b",
      name: "Mistral 7B / Mixtral 8x7B",
      type: "Mixture-of-Experts Architecture",
      vram4bit: "5.5 GB",
      vram16bit: "14 GB",
      tokensPerSec: "95 tok/s",
      useCase: "High-Throughput APIs, Low Latency Summaries",
      trainingMethod: "Direct Preference Optimization (DPO)",
      tokens: "32k context window",
      tag: "Cost-Effective"
    },
    {
      id: "vision-multimodal",
      name: "Multimodal Vision AI (YOLO / CLIP)",
      type: "Computer Vision & Visual QA",
      vram4bit: "4 GB",
      vram16bit: "12 GB",
      tokensPerSec: "30 FPS",
      useCase: "Document OCR, Object Detection & Visual Search",
      trainingMethod: "Transfer Learning & Synthetic Data",
      tokens: "Image & Video Frames",
      tag: "Vision AI"
    }
  ],
  supportPillars: [
    {
      title: "Custom AI Model Training",
      icon: "Cpu",
      description: "Fine-tune foundation models on your private company datasets, documentation, and customer dialogues to produce hyper-accurate domain assistants."
    },
    {
      title: "Enterprise RAG Architectures",
      icon: "Database",
      description: "Vector search with hybrid dense-sparse retrieval (Pinecone, ChromaDB, pgvector) to ground AI responses with zero hallucinations."
    },
    {
      title: "Autonomous 24/7 Support Agents",
      icon: "Headphones",
      description: "AI support agents that resolve tier-1 and tier-2 client inquiries, process tickets, execute CRM actions, and hand off seamlessly to humans."
    },
    {
      title: "AI Learning & Strategy Blueprints",
      icon: "BookOpen",
      description: "Comprehensive implementation roadmaps, prompt engineering guidelines, token cost optimization, and open-source deployment playbooks."
    }
  ],
  learningBlueprints: [
    {
      id: "guide-training",
      title: "From Raw Data to Fine-Tuned Model: The 5-Step Pipeline",
      badge: "Pipeline Guide",
      difficulty: "Intermediate",
      duration: "15 min read",
      summary: "A practical step-by-step blueprint for collecting domain data, deduplicating, tokenizing, training LoRA weights, and deploying quantized weights with vLLM.",
      steps: [
        { name: "Data Ingestion & Cleaning", detail: "Scrape and format proprietary documents into JSONL instruction pairs (system, user, assistant). Remove duplicates and low-entropy text." },
        { name: "Synthetic QA Generation", detail: "Use teacher models to generate counterfactual edge cases and adversarial questions for robust alignment." },
        { name: "LoRA / QLoRA Fine-Tuning", detail: "Train target projection matrices (q_proj, v_proj, k_proj, o_proj) on RTX 4090 or A100 using PyTorch & HuggingFace TRL." },
        { name: "Benchmarking & Evaluation", detail: "Run automated LLM-as-a-judge evaluations against hold-out golden sets to ensure accuracy and zero regression." },
        { name: "Quantization & Serving", detail: "Quantize to 4-bit (AWQ / GGUF) and host behind OpenAI-compatible FastAPI endpoints with vLLM for 80+ tok/s." }
      ]
    },
    {
      id: "guide-rag",
      title: "Production RAG vs Fine-Tuning Decision Guide",
      badge: "Decision Matrix",
      difficulty: "Architecture",
      duration: "10 min read",
      summary: "Understand exactly when to use Retrieval-Augmented Generation (RAG), when to fine-tune, and when to combine both for enterprise-grade precision.",
      steps: [
        { name: "Information Dynamism", detail: "Frequently updated real-time data? RAG wins. Static domain tone, specialized vocabulary, or strict formatting? Fine-Tuning wins." },
        { name: "Hallucination Tolerance", detail: "Zero hallucination requirement? RAG with citation links back to exact page paragraphs is non-negotiable." },
        { name: "Context & Compute Budget", detail: "RAG adds tokens to every prompt. Fine-tuning bakes style into model weights, drastically cutting inference token costs." },
        { name: "Hybrid Architecture", detail: "The gold standard: Fine-tune a 8B model to write in company voice and understand domain slang, coupled with RAG for up-to-the-minute facts." }
      ]
    },
    {
      id: "guide-agents",
      title: "Enterprise Multi-Agent Orchestration & Security",
      badge: "System Design",
      difficulty: "Advanced",
      duration: "20 min read",
      summary: "How to architect autonomous agents that safely interact with databases, trigger APIs, and follow strict guardrails against prompt injection.",
      steps: [
        { name: "Planner & Worker Decoupling", detail: "Separate reasoning (meta-planner) from tool execution (worker agents) to prevent infinite loops and runaway tokens." },
        { name: "Strict JSON Schema Guards", detail: "Enforce deterministic schema validation on all tool inputs using Pydantic and TypeScript types." },
        { name: "State & Memory Persistence", detail: "Store conversational state in Redis / PostgreSQL with checkpoint rollbacks in case of unexpected execution failures." },
        { name: "Human-in-the-Loop Safeguards", detail: "Require explicit human authorization for high-stakes actions (financial transactions, data deletion, public messaging)." }
      ]
    }
  ]
};

export const PROJECTS = [
  {
    id: "neurocraft-ai",
    title: "NeuroCraft AI Studio",
    category: "AI & Software",
    filterKey: "ai",
    shortDesc: "A complete AI workbench for fine-tuning open-source LLMs, running LoRA experiments, and deploying quantized inference endpoints.",
    fullDesc: "NeuroCraft AI Studio enables engineering teams to upload domain datasets, configure hyperparameters (LoRA rank, alpha, learning rate), monitor loss curves in real-time, and export quantized GGUF/AWQ models with one click.",
    image: getAssetUrl("/assets/neurocraft-ai.jpg"),
    tags: ["PyTorch", "Hugging Face", "FastAPI", "React", "Tailwind CSS", "CUDA"],
    stats: { speed: "4x Faster Training", metrics: "99.2% Accuracy", type: "AI Infrastructure" },
    features: [
      "Real-time loss curve streaming via WebSockets",
      "One-click LoRA adapter merging and GGUF quantization",
      "Interactive model testing playground with token telemetry",
      "Automated evaluation benchmark against standard datasets"
    ],
    clientType: "AI Startup & Enterprise Lab",
    liveDemoUrl: "/contact",
    isFeatured: true
  },
  {
    id: "omniverve-saas",
    title: "OmniVerve Cloud SaaS",
    category: "Software",
    filterKey: "software",
    shortDesc: "Modern multi-tenant enterprise dashboard for cloud infrastructure monitoring, microservices observability, and automated alerting.",
    fullDesc: "An all-in-one cloud management dashboard designed for high-throughput DevOps teams. Features customizable telemetry widgets, real-time log streaming, and role-based access control.",
    image: getAssetUrl("/assets/omniverve-saas.jpg"),
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    stats: { speed: "<85ms API Latency", metrics: "10k+ Events/sec", type: "Enterprise SaaS" },
    features: [
      "Dynamic drag-and-drop metric dashboard with D3 visualizations",
      "Role-based permission hierarchy with JWT and OAuth2",
      "Real-time event streaming and Slack/Discord webhook alerts",
      "Automated PDF executive report generator"
    ],
    clientType: "Enterprise Cloud Provider",
    liveDemoUrl: "/contact",
    isFeatured: true
  },
  {
    id: "pulseflow-health",
    title: "PulseFlow Mobile Health",
    category: "Mobile Apps",
    filterKey: "mobile",
    shortDesc: "Cross-platform iOS and Android telemedicine app with encrypted video consultations, smart pill reminders, and vital analytics.",
    fullDesc: "A patient-first healthcare companion built with Flutter. Provides instant appointment booking, HIPAA-compliant WebRTC video calls, digital prescriptions, and biometric lock security.",
    image: getAssetUrl("/assets/pulseflow-health.jpg"),
    tags: ["Flutter", "Dart", "Firebase", "WebRTC", "Node.js", "Stripe"],
    stats: { speed: "60 FPS Smooth", metrics: "4.9/5 Rating", type: "Mobile App" },
    features: [
      "Low-latency encrypted video calling with virtual waiting rooms",
      "HealthKit and Google Fit integration for step and heart tracking",
      "Automated recurring prescription refills and push alerts",
      "Multi-language support with localized date and currency formats"
    ],
    clientType: "Telehealth Startup",
    liveDemoUrl: "/contact",
    isFeatured: true
  },
  {
    id: "aura-luxury-commerce",
    title: "Aura Commerce Ultra",
    category: "Websites",
    filterKey: "websites",
    shortDesc: "Ultra-luxury modern e-commerce storefront with fluid 3D product visualizer, instant search, and headless Shopify backend.",
    fullDesc: "Crafted for a high-end luxury lifestyle brand, Aura combines editorial typography, smooth page transitions, and an instant frictionless checkout flow that increased conversion by 38%.",
    image: getAssetUrl("/assets/aura-luxury-commerce.jpg"),
    tags: ["Next.js 14", "React", "Tailwind CSS", "Stripe", "Framer Motion", "Shopify API"],
    stats: { speed: "100 Lighthouse", metrics: "38% Conv. Boost", type: "E-commerce" },
    features: [
      "Headless architecture with sub-second page transitions",
      "Dynamic interactive color and material visualizer",
      "Apple Pay, Google Pay, and Stripe Elements integration",
      "Optimized WebP/AVIF progressive image loading"
    ],
    clientType: "Luxury Fashion Brand",
    liveDemoUrl: "/contact",
    isFeatured: true
  },
  {
    id: "cognitiverag-engine",
    title: "CognitiveRAG Knowledge AI",
    category: "AI & Software",
    filterKey: "ai",
    shortDesc: "Enterprise Retrieval-Augmented Generation platform connecting company PDF documentation, Notion, and Slack to an internal private LLM.",
    fullDesc: "Eliminates employee search time by indexing millions of internal enterprise documents. Features citation links back to exact page paragraphs, hybrid semantic search, and zero data leakage.",
    image: getAssetUrl("/assets/cognitiverag-engine.jpg"),
    tags: ["Python", "LangChain", "Pinecone", "OpenAI / Claude", "FastAPI", "React"],
    stats: { speed: "1.2s Response", metrics: "0% Data Leakage", type: "AI Knowledge" },
    features: [
      "Hybrid dense-sparse retrieval with BGE embeddings",
      "Automated OCR for scanned PDFs and complex tables",
      "Exact source citation highlights with confidence scores",
      "SOC2-ready local on-premise deployment option"
    ],
    clientType: "Legal & Financial Firm",
    liveDemoUrl: "/contact",
    isFeatured: false
  },
  {
    id: "swiftlogistics-app",
    title: "SwiftLogistics Driver App",
    category: "Mobile Apps",
    filterKey: "mobile",
    shortDesc: "On-demand freight dispatch and real-time turn-by-turn routing app for fleet operators and field delivery drivers.",
    fullDesc: "Engineered for high-stress delivery operations, this mobile app works flawlessly offline, optimizes multi-stop routes with custom algorithms, and records proof-of-delivery signatures.",
    image: getAssetUrl("/assets/swiftlogistics-app.jpg"),
    tags: ["React Native", "TypeScript", "Mapbox", "Golang", "PostGIS", "WebSockets"],
    stats: { speed: "Offline Capable", metrics: "22% Fuel Saved", type: "Logistics Mobile" },
    features: [
      "Live GPS tracking with background location telemetry",
      "Dynamic route optimization for 50+ drop points",
      "Digital signature and camera barcode scanning",
      "Full offline sync engine with automated retry queues"
    ],
    clientType: "Logistics & Supply Chain Co.",
    liveDemoUrl: "/contact",
    isFeatured: false
  },
  {
    id: "zenith-realestate",
    title: "Zenith Architecture & Realty",
    category: "Websites",
    filterKey: "websites",
    shortDesc: "Cinematic real estate portal featuring interactive 3D floor plans, mortgage calculators, and direct agent WhatsApp scheduling.",
    fullDesc: "Designed with an immersive dark theme, luxury typography, and interactive virtual walkthroughs that engage high-net-worth real estate buyers.",
    image: getAssetUrl("/assets/zenith-realestate.jpg"),
    tags: ["Next.js", "React", "Tailwind CSS", "Three.js", "Leaflet Maps"],
    stats: { speed: "99 Performance", metrics: "3.2x Lead Growth", type: "Real Estate Portal" },
    features: [
      "Interactive 3D floor plan explorer",
      "Instant mortgage calculator with amortization charts",
      "One-click WhatsApp tour booking linked to agents",
      "Ultra-responsive map search with neighborhood filters"
    ],
    clientType: "Luxury Real Estate Developer",
    liveDemoUrl: "/contact",
    isFeatured: false
  },
  {
    id: "apexfin-terminal",
    title: "ApexFin Quant Analytics",
    category: "Software",
    filterKey: "software",
    shortDesc: "Ultra-low-latency financial intelligence platform with real-time order book visualization, algorithmic backtesting, and market signals.",
    fullDesc: "Built for active traders and analysts, ApexFin processes thousands of market ticks per second using high-efficiency WebAssembly workers and customizable candle charts.",
    image: getAssetUrl("/assets/apexfin-terminal.jpg"),
    tags: ["React", "TypeScript", "WebSockets", "WebAssembly", "Tailwind CSS", "Node.js"],
    stats: { speed: "60 FPS Render", metrics: "Sub-10ms Stream", type: "FinTech Platform" },
    features: [
      "High-throughput WebSocket order book streaming",
      "Custom multi-indicator technical analysis overlays",
      "Backtesting engine for algorithmic trading strategies",
      "Dark-mode terminal UI optimized for multi-monitor setups"
    ],
    clientType: "FinTech & Trading Group",
    liveDemoUrl: "/contact",
    isFeatured: false
  }
];

export const TECH_STACK = [
  {
    category: "Frontend Excellence",
    description: "Modern, reactive, and accessible web interfaces built for speed and delight.",
    items: [
      { name: "React 19", level: "Expert", desc: "Component architecture, hooks, server components", icon: "Atom" },
      { name: "Next.js", level: "Expert", desc: "App Router, SSR, SSG, Edge middleware", icon: "Boxes" },
      { name: "TypeScript", level: "Advanced", desc: "Strict type safety, zero runtime surprises", icon: "Code2" },
      { name: "Tailwind CSS", level: "Expert", desc: "Modern utility-first styling & design systems", icon: "Wind" },
      { name: "JavaScript (ESNext)", level: "Expert", desc: "Asynchronous programming, event loops", icon: "FileCode" },
      { name: "HTML5 & CSS3", level: "Expert", desc: "Semantic markup, modern flexbox & grid", icon: "Layout" }
    ]
  },
  {
    category: "Backend & Cloud",
    description: "Robust, scalable, and secure server architectures and databases.",
    items: [
      { name: "Node.js", level: "Expert", desc: "Event-driven runtime for high-throughput APIs", icon: "Server" },
      { name: "Express.js", level: "Expert", desc: "RESTful services, middleware, and microservices", icon: "Network" },
      { name: "Python", level: "Advanced", desc: "FastAPI, AI backend pipelines, data processing", icon: "Terminal" },
      { name: "PostgreSQL", level: "Advanced", desc: "Relational modeling, indexing, ACID transactions", icon: "Database" },
      { name: "MongoDB", level: "Advanced", desc: "NoSQL document storage, aggregation pipelines", icon: "HardDrive" },
      { name: "Docker & AWS", level: "Proficient", desc: "Containerization, ECS, S3, CloudFront deployment", icon: "Cloud" }
    ]
  },
  {
    category: "Mobile Engineering",
    description: "Cross-platform mobile apps delivering fluid, native performance.",
    items: [
      { name: "Flutter", level: "Advanced", desc: "Cross-platform Android & iOS with Dart", icon: "Smartphone" },
      { name: "React Native", level: "Advanced", desc: "Native components with React ecosystem", icon: "Tablet" },
      { name: "iOS & Android Bridge", level: "Proficient", desc: "Native APIs, push notifications, camera", icon: "Layers" },
      { name: "Firebase", level: "Advanced", desc: "Auth, Firestore, Cloud Messaging, Crashlytics", icon: "Flame" }
    ]
  },
  {
    category: "AI, LLMs & Data",
    description: "Specialized machine learning, model fine-tuning, and intelligent agents.",
    items: [
      { name: "PyTorch & Hugging Face", level: "Advanced", desc: "Model fine-tuning, LoRA adapters, transformers", icon: "Brain" },
      { name: "OpenAI & Anthropic APIs", level: "Expert", desc: "GPT-4o, Claude 3.5 Sonnet, function calling", icon: "Sparkles" },
      { name: "LangChain & LlamaIndex", level: "Advanced", desc: "RAG pipelines, autonomous agent workflows", icon: "Workflow" },
      { name: "Vector Databases", level: "Advanced", desc: "Pinecone, ChromaDB, pgvector semantic search", icon: "Search" },
      { name: "Ollama & vLLM", level: "Advanced", desc: "Local LLM hosting, quantization, high-speed inference", icon: "Cpu" },
      { name: "Computer Vision", level: "Proficient", desc: "YOLO object detection, OCR & document parsing", icon: "Eye" }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    phase: "Discover",
    title: "Deep-Dive Discovery & Strategy",
    summary: "We deconstruct your goals, target audience, technical requirements, and business objectives into a crystal-clear execution roadmap.",
    deliverables: [
      "Comprehensive Project Scope Document",
      "Tech Stack & Architecture Blueprint",
      "Competitive & User Flow Analysis",
      "Milestone & Timeline Schedule"
    ],
    icon: "Compass"
  },
  {
    number: "02",
    phase: "Design",
    title: "High-Fidelity Architecture & UX",
    summary: "We craft stunning, responsive interface designs with sleek dark aesthetics, interactive prototypes, and modular design systems.",
    deliverables: [
      "Figma Wireframes & Interactive Mockups",
      "Custom Design Tokens & Style Guide",
      "Responsive Layout Breakpoints",
      "User Feedback & Revision Alignment"
    ],
    icon: "Palette"
  },
  {
    number: "03",
    phase: "Develop",
    title: "Agile, Test-Driven Engineering",
    summary: "We write clean, strictly-typed code, implement responsive UI components, connect robust backend APIs, and integrate AI models.",
    deliverables: [
      "Modular, Production-Ready Codebase",
      "Cross-Device & Browser Verification",
      "SEO, Security & Speed Hardening",
      "Weekly Staging Builds & Progress Demos"
    ],
    icon: "Code"
  },
  {
    number: "04",
    phase: "Deliver",
    title: "Rigorous Testing, Launch & Support",
    summary: "Zero-downtime deployment, domain and SSL setup, production monitoring, and dedicated ongoing maintenance to guarantee peak performance.",
    deliverables: [
      "Production Cloud / App Store Deployment",
      "Lighthouse 95+ Performance Audit",
      "Full Codebase & Asset Handover",
      "Post-Launch Warranty & Direct Support"
    ],
    icon: "Rocket"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Modern & Responsive Designs",
    desc: "Every pixel is crafted to look breathtaking on iPhones, Androids, iPads, and ultra-wide desktop monitors with zero visual glitches.",
    icon: "Monitor",
    highlight: "100% Fluid Breakpoints"
  },
  {
    title: "Clean, Maintainable Code",
    desc: "Strictly typed, modular, and thoroughly commented code following modern clean architecture. Easy to extend, scale, and maintain.",
    icon: "CheckCircle2",
    highlight: "Zero Technical Debt"
  },
  {
    title: "Performance-Focused Development",
    desc: "Engineered for sub-second page loads, automated asset compression, efficient caching, and 95+ Google Lighthouse scores.",
    icon: "Zap",
    highlight: "Sub-100ms Responses"
  },
  {
    title: "User-Friendly Interfaces",
    desc: "Intuitive navigation, frictionless forms, and thoughtful micro-interactions that turn casual website visitors into paying clients.",
    icon: "HeartHandshake",
    highlight: "High Conversion UX"
  },
  {
    title: "Scalable Software Solutions",
    desc: "Built to handle your growth from 10 users to 100,000+ without breaking a sweat, utilizing modern cloud-native architectures.",
    icon: "TrendingUp",
    highlight: "Cloud-Native Ready"
  },
  {
    title: "Reliable Communication & Direct Support",
    desc: "Direct access to Arun Goswami at AG TechLabs via Phone and WhatsApp. No junior account managers, no endless email delays, no excuses.",
    icon: "MessageSquare",
    highlight: "Direct Developer Contact"
  }
];

export const FAQS = [
  {
    q: "What makes AG TechLabs different from traditional agencies?",
    a: "At AG TechLabs, you work directly with Arun Goswami, our Founder & Lead Architect. We write strictly typed, modern code with no bloated overhead, providing honest timelines, direct WhatsApp access, and cutting-edge custom AI engineering that generic agencies cannot match."
  },
  {
    q: "Can you train or fine-tune a custom AI model for our proprietary business data?",
    a: "Yes! We specialize in fine-tuning open-source LLMs (like Llama 3, Mistral, DeepSeek) on your private documentation and customer interactions, deploying RAG systems with vector databases, and building autonomous AI support agents with zero third-party data leakage."
  },
  {
    q: "What is your typical turnaround time?",
    a: "A high-performance modern website typically takes 1 to 2 weeks. Custom web software and mobile apps take between 3 to 6 weeks depending on feature complexity and API integrations."
  },
  {
    q: "Do you build both Android and iOS apps?",
    a: "Yes! We build cross-platform mobile apps using Flutter and React Native, delivering native performance on both iOS and Android from a single robust codebase, saving you up to 40% in development costs."
  },
  {
    q: "Will I have full ownership of the source code?",
    a: "Absolutely. Upon final delivery and sign-off, 100% of the intellectual property, Git repositories, designs, and deployment keys belong to you."
  }
];
