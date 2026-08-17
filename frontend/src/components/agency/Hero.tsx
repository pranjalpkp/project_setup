'use client';

import React, { useState } from 'react';
import { 
  ArrowRightIcon, 
  VideoCameraIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
  StarIcon,
  SparklesIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

interface HeroProps {
  onOpenBookingModal: () => void;
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<'speed' | 'seo' | 'cro'>('speed');

  return (
    <section className="relative min-h-[85vh] pt-24 pb-14 overflow-hidden flex items-center justify-center bg-[#07080C] bg-radial-gradient-dark">
      
      {/* Ambient Grid & Rose-Gold Radial Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-rose-500/20 via-amber-600/15 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Header Stack */}
        <div className="text-center max-w-5xl mx-auto space-y-8">
          
          {/* Executive Social Proof Pill Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-[#101422] border border-rose-500/30 text-xs font-semibold shadow-2xl">
            <span className="flex items-center space-x-2 text-rose-300 font-bold">
              <SparklesIcon className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
              <span>Clutch-Recognized Enterprise Development & Agentic AI Practice</span>
            </span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">•</span>
            <div className="flex items-center space-x-1 text-amber-300">
              <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" aria-hidden="true" />
              <span className="font-bold text-white">4.9/5 Rating</span>
            </div>
          </div>

          {/* High-Impact Executive 2-Line Headline - Expanded Width */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight max-w-5xl sm:max-w-6xl mx-auto px-2">
            Engineering Bespoke Web Platforms That <br className="hidden sm:inline" />
            <span className="brand-gradient-text">Turn Search Traffic Into Revenue.</span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-200 text-base sm:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
            Ink Urban architects high-converting web platforms and organic search dominance strategies for established legal practices, medical groups, and commercial enterprises.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto group inline-flex flex-col items-center justify-center px-8 py-4 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <div className="flex items-center space-x-2">
                <span>Schedule Executive Strategy Call</span>
                <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform flex-shrink-0" aria-hidden="true" />
              </div>
              <span className="text-[10px] font-medium text-rose-100 tracking-normal capitalize mt-0.5 opacity-90">
                20-Min Technical & Growth Briefing
              </span>
            </button>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="w-full sm:w-auto group inline-flex flex-col items-center justify-center px-7 py-4 rounded-xl bg-[#0F1320] border border-rose-500/30 hover:border-rose-400 text-rose-200 font-semibold text-xs tracking-wider uppercase transition-all duration-200 hover:bg-[#1A1325] shadow-xl"
            >
              <div className="flex items-center space-x-2">
                <VideoCameraIcon className="w-4 h-4 text-rose-400 flex-shrink-0" aria-hidden="true" />
                <span>Request 5-Min Video Teardown</span>
              </div>
              <span className="text-[10px] font-normal text-slate-300 tracking-normal capitalize mt-0.5">
                Custom Video Audit Delivered in 24h
              </span>
            </button>
          </div>

          {/* Guarantee Badges Bar */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2.5 p-3 rounded-xl bg-[#0A0D18]/60 border border-slate-800/60 text-xs text-slate-200">
              <BoltIcon className="w-4 h-4 text-rose-400 flex-shrink-0" aria-hidden="true" />
              <span><strong className="text-white">Sub-0.5s Speed:</strong> 100/100 Core Web Vitals</span>
            </div>
            <div className="flex items-center justify-center space-x-2.5 p-3 rounded-xl bg-[#0A0D18]/60 border border-slate-800/60 text-xs text-slate-200">
              <ShieldCheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
              <span><strong className="text-white">100% Bespoke Code:</strong> Zero Vulnerability Templates</span>
            </div>
            <div className="flex items-center justify-center space-x-2.5 p-3 rounded-xl bg-[#0A0D18]/60 border border-slate-800/60 text-xs text-slate-200">
              <ArrowTrendingUpIcon className="w-4 h-4 text-rose-400 flex-shrink-0" aria-hidden="true" />
              <span><strong className="text-white">3.2x ROI Lift:</strong> High-Intent Conversion Funnels</span>
            </div>
          </div>

        </div>

        {/* Interactive Performance Benchmark Dashboard */}
        <div className="mt-12 max-w-5xl mx-auto rounded-3xl glass-panel-dark-brand p-6 sm:p-8 shadow-2xl border border-rose-500/40">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-xl font-bold text-white">
                Empirical Performance Benchmarks
              </h2>
              <p className="text-xs text-slate-300">
                Compare typical template sites vs. Ink Urban engineered architecture.
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="flex items-center p-1.5 rounded-xl bg-[#121626] border border-slate-800 space-x-1" role="tablist" aria-label="Performance benchmarks tabs">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'speed'}
                onClick={() => setActiveTab('speed')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'speed'
                    ? 'brand-gradient-bg text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PageSpeed 100
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'seo'}
                onClick={() => setActiveTab('seo')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'seo'
                    ? 'brand-gradient-bg text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Map Pack SEO
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'cro'}
                onClick={() => setActiveTab('cro')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'cro'
                    ? 'brand-gradient-bg text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Lead CRO
              </button>
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="pt-6">
            {activeTab === 'speed' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-5 rounded-2xl bg-[#101422] border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    Lighthouse Score
                  </div>
                  <div className="text-4xl font-extrabold text-white font-heading">
                    99 / 100
                  </div>
                  <p className="text-xs text-slate-300">
                    Tested across 4G mobile connections worldwide.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101422] border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Load Duration
                  </div>
                  <div className="text-4xl font-extrabold text-white font-heading">
                    0.42s
                  </div>
                  <p className="text-xs text-slate-300">
                    Instant rendering retains 100% of search visitors.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101422] border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    Layout Shift (CLS)
                  </div>
                  <div className="text-4xl font-extrabold text-white font-heading">
                    0.00
                  </div>
                  <p className="text-xs text-slate-300">
                    Zero visual jumps or unstable mobile layout shifts.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'seo' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-5 rounded-2xl bg-[#101422] border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    Map Pack Rank
                  </div>
                  <div className="text-4xl font-extrabold text-white font-heading">
                    Top 3
                  </div>
                  <p className="text-xs text-slate-300">
                    Dominates local 3-pack for high-value search queries.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101422] border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Entity Schema
                  </div>
                  <div className="text-4xl font-extrabold text-white font-heading">
                    JSON-LD
                  </div>
                  <p className="text-xs text-slate-300">
                    Full Google Knowledge Graph & local business markup.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101422] border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    Search Traffic
                  </div>
                  <div className="text-4xl font-extrabold text-white font-heading">
                    +280%
                  </div>
                  <p className="text-xs text-slate-300">
                    Average organic inbound traffic increase in 120 days.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'cro' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-5 rounded-2xl bg-[#101422] border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    Inquiry Rate
                  </div>
                  <div className="text-4xl font-extrabold text-white font-heading">
                    5.4%
                  </div>
                  <p className="text-xs text-slate-300">
                    Up from 1.2% typical industry website conversion.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101422] border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Intake Friction
                  </div>
                  <div className="text-4xl font-extrabold text-white font-heading">
                    2-Click
                  </div>
                  <p className="text-xs text-slate-300">
                    Micro-drawers make strategy booking instantaneous.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101422] border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    Client Value
                  </div>
                  <div className="text-4xl font-extrabold text-white font-heading">
                    3.5x
                  </div>
                  <p className="text-xs text-slate-300">
                    Higher quality inquiries willing to pay premium fees.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
