'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRightIcon,
  BoltIcon,
  SparklesIcon,
  CpuChipIcon,
  CommandLineIcon,
  ArrowTrendingUpIcon,
  DocumentMagnifyingGlassIcon,
  CheckCircleIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

interface HeroProps {
  onOpenBookingModal: () => void;
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<'rag' | 'webdev' | 'seogrowth'>('rag');
  const [simulatedPing, setSimulatedPing] = useState(24);
  const [activeRagStep, setActiveRagStep] = useState(0);

  // Live simulated ping and RAG pipeline step ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedPing(Math.floor(Math.random() * 8) + 21);
      setActiveRagStep((prev) => (prev + 1) % 6);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const ragStages = [
    { step: '01', name: 'Data Ingestion', desc: 'Securely connect company documents, databases & APIs' },
    { step: '02', name: 'Private Indexing', desc: 'Enterprise-grade semantic embeddings & search indexing' },
    { step: '03', name: 'Context Retrieval', desc: 'Hybrid lexical & dense search for precise source context' },
    { step: '04', name: 'Fact Verification', desc: 'Anti-hallucination verification & source citation checks' },
    { step: '05', name: 'AI Reasoning', desc: 'Fine-tuned LLM execution adapted to your domain rules' },
    { step: '06', name: 'Action & Chat UI', desc: 'Instant responses across web, Slack, and internal tools' }
  ];

  const techBadges = [
    'Custom Web & SaaS Apps', 'Enterprise AI & RAG', 'Spring Boot & Python APIs', 'Next.js & React 19', 'PostgreSQL & Redis', 'Programmatic SEO & CRO', '100% IP Transfer'
  ];

  return (
    <section
      aria-label="Agency Introduction"
      className="relative pt-24 sm:pt-32 pb-16 overflow-hidden flex flex-col items-center justify-center bg-[#05070B]"
    >
      {/* 3D Master Infographic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0">
          <img
            src="/images/hero_infographic_bg.jpg"
            alt="Ink Urban Digital Engineering: Custom Software, Enterprise AI, and Growth Marketing"
            className="w-full h-full object-cover object-center opacity-30 scale-105 filter blur-[0.5px] transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070B]/90 via-[#05070B]/70 to-[#05070B]" />
          <div className="absolute inset-0 bg-radial-section opacity-80" />
        </div>

        {/* Animated Cybernetic Conduits */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="laserCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="laserRose" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FB923C" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="laserGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <path
            d="M 50 300 Q 250 200 450 380 T 600 500"
            fill="none"
            stroke="url(#laserCyan)"
            strokeWidth="1.5"
            className="animate-laser-line"
          />
          <path
            d="M 700 100 L 700 700"
            fill="none"
            stroke="url(#laserRose)"
            strokeWidth="1.5"
            className="animate-laser-line"
          />
          <path
            d="M 1400 300 Q 1150 200 950 400 T 800 520"
            fill="none"
            stroke="url(#laserGold)"
            strokeWidth="1.5"
            className="animate-laser-line"
          />
        </svg>

        <div className="absolute top-1/4 left-1/4 w-[380px] h-[380px] bg-cyan-500/15 blur-[140px] rounded-full animate-cyber-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-rose-500/20 blur-[150px] rounded-full animate-cyber-pulse" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[260px] bg-amber-500/15 blur-[130px] rounded-full" />
      </div>

      {/* Floating Value Proposition Badges */}
      {/* <div className="hidden xl:block absolute top-28 left-8 z-10 animate-float-slow pointer-events-none">
        <div className="p-3.5 rounded-2xl bg-[#090C16]/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl flex items-center space-x-3 text-left">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
            <CpuChipIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Enterprise AI & RAG</div>
            <div className="text-xs font-bold text-white">Private Knowledge & Automation</div>
          </div>
        </div>
      </div> */}

      {/* <div className="hidden xl:block absolute top-28 right-8 z-10 animate-float-delayed pointer-events-none">
        <div className="p-3.5 rounded-2xl bg-[#090C16]/90 border border-amber-500/30 backdrop-blur-xl shadow-2xl flex items-center space-x-3 text-left">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
            <ArrowTrendingUpIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-amber-400 uppercase font-bold">Organic Search Growth</div>
            <div className="text-xs font-bold text-white">High-Intent Traffic & Rankings</div>
          </div>
        </div>
      </div> */}

      {/* <div className="hidden xl:block absolute bottom-24 left-10 z-10 animate-float-delayed pointer-events-none">
        <div className="p-3.5 rounded-2xl bg-[#090C16]/90 border border-rose-500/30 backdrop-blur-xl shadow-2xl flex items-center space-x-3 text-left">
          <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300">
            <CodeBracketIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-rose-400 uppercase font-bold">Custom Web Platforms</div>
            <div className="text-xs font-bold text-white">Modern Sub-Second Architectures</div>
          </div>
        </div>
      </div> */}
      {/* 
      <div className="hidden xl:block absolute bottom-24 right-10 z-10 animate-float-slow pointer-events-none">
        <div className="p-3.5 rounded-2xl bg-[#090C16]/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl flex items-center space-x-3 text-left">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
            <BoltIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Guaranteed Reliability</div>
            <div className="text-xs font-bold text-white">100% Source Code Ownership</div>
          </div>
        </div>
      </div> */}

      {/* Main Hero Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1222]/90 border border-rose-500/30 text-xs font-semibold shadow-2xl mb-6 backdrop-blur-xl">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="brand-gradient-text font-bold">Digital Engineering & Growth Partner</span>
          <span className="text-slate-600 hidden md:inline">•</span>
          <span className="text-slate-300 hidden md:inline font-mono text-[11px]">Senior Architects & 100% IP Ownership</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-5xl lg:text-[54px] xl:text-6xl font-extrabold text-white leading-[1.12] tracking-tight max-w-5xl mx-auto drop-shadow-lg">
          We Build Custom Software, <br className="hidden sm:inline" />
          <span className="brand-gradient-text">Accelerate Growth & Automate with AI.</span>
        </h1>

        {/* Subheading */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-3xl mx-auto mt-4 sm:mt-5 drop-shadow">
          We partner with founders and enterprise leaders to engineer high-performance web applications, deploy autonomous AI systems, and build scalable growth engines that convert.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 max-w-xl mx-auto w-full">
          <button
            type="button"
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-rose-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer min-h-[48px] whitespace-nowrap"
          >
            <span>Start Your Project</span>
            <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>

          <button
            type="button"
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#0E1322]/90 border border-amber-400/40 hover:border-amber-300 text-amber-200 font-bold text-xs tracking-wider uppercase transition-all hover:bg-amber-400/10 cursor-pointer min-h-[48px] backdrop-blur-md whitespace-nowrap"
          >
            <DocumentMagnifyingGlassIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Free Technical Audit</span>
          </button>
        </div>

        {/* Live Interactive Solution Lab */}
        <div className="mt-10 max-w-4xl mx-auto rounded-3xl bg-[#080B14]/95 border border-rose-500/30 shadow-2xl overflow-hidden text-left backdrop-blur-2xl">

          {/* Console Header Bar */}
          <div className="px-4 py-3 bg-[#0C101E] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-300 pl-2">
                Ink Urban Solution Lab • Explore Capabilities
              </span>
            </div>

            {/* Interactive Console Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-[#060810] border border-slate-800 gap-1 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('rag')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center space-x-1.5 ${activeTab === 'rag' ? 'bg-cyan-500/20 border border-cyan-400/50 text-cyan-200 shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
              >
                <CpuChipIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Enterprise AI & RAG</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('webdev')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center space-x-1.5 ${activeTab === 'webdev' ? 'brand-gradient-bg text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
              >
                <ServerStackIcon className="w-3.5 h-3.5" />
                <span>Web & Cloud Platforms</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('seogrowth')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center space-x-1.5 ${activeTab === 'seogrowth' ? 'bg-amber-500/20 border border-amber-400/50 text-amber-200 shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
              >
                <ArrowTrendingUpIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Growth & SEO</span>
              </button>
            </div>
          </div>

          {/* Interactive Console Screen */}
          <div className="p-4 sm:p-6 bg-[#060810]">

            {/* VIEW 1: ENTERPRISE AI & RAG ASSISTANTS */}
            {activeTab === 'rag' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-cyan-500/30 group">
                  <img
                    src="/images/rag_chatbot_architecture.jpg"
                    alt="Enterprise RAG AI Chatbot Architecture and Intelligent Automation"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-black/40"></div>

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded-lg bg-[#060810]/85 border border-cyan-500/30 backdrop-blur-md text-[10px] font-mono text-cyan-300 flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                      <span>Custom Enterprise Knowledge Assistant</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-[#060810]/85 border border-emerald-500/30 backdrop-blur-md text-[10px] font-mono text-emerald-300 font-bold">
                      Zero Hallucinations Guarantee
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white drop-shadow-md">
                      Trained on your private documents with strict role-based access control
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300 font-bold bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30">
                      Sub-250ms Response
                    </span>
                  </div>
                </div>

                {/* 6-Stage RAG Pipeline */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center">
                  {ragStages.map((stage, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border transition-all ${activeRagStep === idx
                        ? 'bg-[#101A2E] border-cyan-400 shadow-lg shadow-cyan-500/20 scale-102'
                        : 'bg-[#0A0D1A] border-slate-800'
                        }`}
                    >
                      <div className="text-[9px] font-mono text-cyan-400 uppercase font-bold">Stage {stage.step}</div>
                      <div className="text-xs font-bold text-white mt-0.5">{stage.name}</div>
                      <div className="text-[9px] text-slate-400 font-mono mt-0.5 leading-tight">{stage.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-[#090C16] border border-slate-800 font-mono text-xs text-slate-300 flex items-center justify-between">
                  <div className="flex items-center space-x-2 truncate">
                    <span className="text-cyan-400 font-bold">&gt;</span>
                    <span className="text-slate-400">Live AI Pipeline:</span>
                    <span className="text-cyan-300 truncate">Document parsed &rarr; Vector embeddings generated &rarr; Real-time verified response delivered</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold pl-2 flex-shrink-0">85% Ops Saved</span>
                </div>
              </div>
            )}

            {/* VIEW 2: CUSTOM WEB & CLOUD PLATFORMS */}
            {activeTab === 'webdev' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-rose-500/20 group">
                  <img
                    src="/images/hero_ai_cloud.jpg"
                    alt="Ink Urban Custom Cloud Architecture and Microservices"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-black/40"></div>

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded-lg bg-[#090C16]/80 border border-rose-500/30 backdrop-blur-md text-[10px] font-mono text-rose-300 flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Next.js 15 & Spring Boot Microservices</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-[#090C16]/80 border border-amber-500/30 backdrop-blur-md text-[10px] font-mono text-amber-300">
                      {simulatedPing}ms Global Edge Ping
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white drop-shadow-md">
                      Sub-second response times, zero template bloat, and enterprise-grade reliability
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                      100/100 Core Web Vitals
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                  <div className="p-2.5 rounded-xl bg-[#0D1224] border border-slate-800 space-y-0.5">
                    <span className="text-[9px] font-mono text-slate-400 uppercase">Modern Frontend</span>
                    <div className="text-xs font-bold text-white">Next.js & React 19</div>
                    <div className="text-[10px] text-emerald-400 font-mono">0.2s Page Load</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D1224] border border-rose-500/30 space-y-0.5">
                    <span className="text-[9px] font-mono text-rose-300 uppercase">Global Edge CDN</span>
                    <div className="text-xs font-bold text-white">Cloudflare Anycast</div>
                    <div className="text-[10px] text-amber-400 font-mono">Worldwide Caching</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D1224] border border-slate-800 space-y-0.5">
                    <span className="text-[9px] font-mono text-slate-400 uppercase">Backend Microservices</span>
                    <div className="text-xs font-bold text-white">Spring Boot & Python</div>
                    <div className="text-[10px] text-emerald-400 font-mono">Sub-300ms Endpoints</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D1224] border border-slate-800 space-y-0.5">
                    <span className="text-[9px] font-mono text-slate-400 uppercase">Enterprise Data Tier</span>
                    <div className="text-xs font-bold text-white">PostgreSQL & Redis</div>
                    <div className="text-[10px] text-emerald-400 font-mono">99.99% Uptime SLA</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0D1120] border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">Full intellectual property ownership: <strong>100% repository transfer on completion</strong></span>
                  </div>
                  <span className="text-[11px] font-mono text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/30">
                    Zero Vendor Lock-In
                  </span>
                </div>
              </div>
            )}

            {/* VIEW 3: GROWTH MARKETING & SEO */}
            {activeTab === 'seogrowth' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-amber-500/20 group">
                  <img
                    src="/images/cro_growth_engine.jpg"
                    alt="Ink Urban Growth Marketing and Conversion Funnel Engineering"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-black/40"></div>

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded-lg bg-[#090C16]/80 border border-amber-500/30 backdrop-blur-md text-[10px] font-mono text-amber-300 flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                      <span>High-Converting Digital Acquisition Funnels</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-[#090C16]/80 border border-emerald-500/30 backdrop-blur-md text-[10px] font-mono text-emerald-300 font-bold">
                      +340% Conversion Uplift
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white drop-shadow-md">
                      Programmatic SEO architectures and high-converting UX engineered for qualified pipeline
                    </span>
                    <span className="text-[10px] font-mono text-amber-300 font-bold bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                      4.2x ROI
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-[#0D1224] border border-amber-500/30 text-center space-y-0.5">
                    <div className="text-2xl font-extrabold font-heading text-white brand-gradient-text">+340%</div>
                    <div className="text-xs font-bold text-white">Conversion Rate Lift</div>
                    <div className="text-[10px] text-slate-400">Streamlined intake drawers</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0D1224] border border-slate-800 text-center space-y-0.5">
                    <div className="text-2xl font-extrabold font-heading text-white">#1 Rank</div>
                    <div className="text-xs font-bold text-white">Organic Search Authority</div>
                    <div className="text-[10px] text-slate-400">Structured entity schemas</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0D1224] border border-slate-800 text-center space-y-0.5">
                    <div className="text-2xl font-extrabold font-heading text-white">4.2x ROI</div>
                    <div className="text-xs font-bold text-white">Acquisition Efficiency</div>
                    <div className="text-[10px] text-slate-400">Server-side attribution</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0D1120] border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Ready to review your digital product, codebase, or conversion funnel?</span>
                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="text-amber-300 hover:text-amber-200 font-bold underline cursor-pointer"
                  >
                    Request Free Technical Teardown &rarr;
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Tech Badges Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {techBadges.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-[#0E1220]/80 border border-slate-800 text-xs font-medium text-slate-400 hover:text-white transition-colors backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

