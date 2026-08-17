'use client';

import React, { useState } from 'react';
import { 
  ArrowRightIcon, 
  VideoCameraIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
  StarIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

interface HeroProps {
  onOpenBookingModal: () => void;
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<'speed' | 'seo' | 'cro'>('speed');

  return (
    <section className="relative min-h-[85vh] pt-24 pb-12 overflow-hidden flex items-center justify-center bg-radial-gradient">
      
      {/* Ambient Grid & Rose-Gold Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-rose-500/15 via-amber-600/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Editorial Hero Content */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Availability & Social Proof Pill Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-[#101422] border border-rose-500/30 text-xs font-semibold shadow-2xl">
            <span className="flex items-center space-x-2 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>Accepting 3 Enterprise Clients for Q3 2026</span>
            </span>
            <span className="text-slate-500 hidden sm:inline" aria-hidden="true">•</span>
            <div className="flex items-center space-x-1 text-amber-300">
              <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
              <span className="font-bold text-white">4.9/5</span>
              <span className="text-slate-300 text-xs">(50+ Enterprise Reviews)</span>
            </div>
            <span className="text-slate-500 hidden md:inline" aria-hidden="true">•</span>
            <span className="hidden md:flex items-center space-x-1 text-slate-200">
              <GlobeAltIcon className="w-3.5 h-3.5 text-rose-400" aria-hidden="true" />
              <span>US, UK, UAE, CA & AU</span>
            </span>
          </div>

          {/* High-Impact Executive Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
            Engineering Bespoke Web Platforms That <span className="brand-gradient-text">Turn Search Traffic Into Revenue.</span>
          </h1>

          {/* Value Proposition Subheading */}
          <p className="text-slate-200 text-base sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
            Ink Urban architects high-converting web platforms and organic search dominance strategies for established legal practices, medical groups, and commercial enterprises.
          </p>

          {/* High-Converting Primary Call To Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto group inline-flex flex-col items-center justify-center px-8 py-4 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <div className="flex items-center space-x-2">
                <span>Schedule Executive Strategy Call</span>
                <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
              <span className="text-[10px] font-medium text-rose-100 tracking-normal capitalize mt-0.5 opacity-90">
                20-Min Technical & Growth Briefing
              </span>
            </button>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="w-full sm:w-auto group inline-flex flex-col items-center justify-center px-7 py-4 rounded-xl bg-[#0F1320] border border-rose-500/30 hover:border-rose-400 text-rose-200 font-semibold text-xs tracking-wider uppercase transition-all duration-200 hover:bg-[#1A1325]"
            >
              <div className="flex items-center space-x-2">
                <VideoCameraIcon className="w-4 h-4 text-rose-400" aria-hidden="true" />
                <span>Request 5-Min Video Teardown</span>
              </div>
              <span className="text-[10px] font-normal text-slate-300 tracking-normal capitalize mt-0.5">
                Custom Video Audit Delivered in 24h
              </span>
            </button>
          </div>

          {/* Verified Guarantee Pillars */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2.5 p-3 rounded-lg bg-[#0A0D18]/60 border border-slate-800/60 text-xs text-slate-200">
              <BoltIcon className="w-4 h-4 text-rose-400 flex-shrink-0" aria-hidden="true" />
              <span><strong className="text-white">Sub-0.5s Speed:</strong> 100/100 Core Web Vitals</span>
            </div>
            <div className="flex items-center justify-center space-x-2.5 p-3 rounded-lg bg-[#0A0D18]/60 border border-slate-800/60 text-xs text-slate-200">
              <ShieldCheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
              <span><strong className="text-white">100% Bespoke Code:</strong> Zero Vulnerability Templates</span>
            </div>
            <div className="flex items-center justify-center space-x-2.5 p-3 rounded-lg bg-[#0A0D18]/60 border border-slate-800/60 text-xs text-slate-200">
              <ArrowTrendingUpIcon className="w-4 h-4 text-rose-400 flex-shrink-0" aria-hidden="true" />
              <span><strong className="text-white">3.2x ROI Lift:</strong> High-Intent Conversion Funnels</span>
            </div>
          </div>

        </div>

        {/* Interactive Live Proof & Architecture Showcase Dashboard */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Subtle Ambient Backlight */}
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 via-amber-400/10 to-rose-600/20 rounded-3xl blur-2xl opacity-75" />
          
          <div className="relative glass-panel-brand rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl border border-rose-500/30">
            
            {/* Top Browser Bar & Interactive Tab Selector */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800/80 pb-4 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" aria-hidden="true" />
                <span className="ml-2 text-xs font-mono text-slate-300 hidden md:inline">inkurban.com/enterprise-benchmarks</span>
              </div>

              {/* Interactive Showcase Tabs */}
              <div className="flex items-center space-x-1.5 bg-[#090C16] p-1 rounded-xl border border-slate-800 w-full sm:w-auto justify-center" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'speed'}
                  onClick={() => setActiveTab('speed')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'speed' 
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  ⚡ Speed & Architecture
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'seo'}
                  onClick={() => setActiveTab('seo')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'seo' 
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  📈 Organic Domination
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'cro'}
                  onClick={() => setActiveTab('cro')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'cro' 
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  🎯 High-Yield CRO
                </button>
              </div>
            </div>

            {/* Tab 1 Content: Speed & Core Web Vitals */}
            {activeTab === 'speed' && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left animate-fadeIn" role="tabpanel">
                <div className="p-4 rounded-xl bg-[#090C16] border border-slate-800 text-center space-y-1">
                  <div className="text-3xl font-extrabold text-emerald-400">100</div>
                  <div className="text-xs font-semibold text-slate-100">Performance Score</div>
                  <div className="text-xs text-slate-300">Google Lighthouse Audit</div>
                </div>

                <div className="p-4 rounded-xl bg-[#090C16] border border-slate-800 text-center space-y-1">
                  <div className="text-3xl font-extrabold text-rose-400">0.38s</div>
                  <div className="text-xs font-semibold text-slate-100">First Contentful Paint</div>
                  <div className="text-xs text-slate-300">Instant Global CDN Edge</div>
                </div>

                <div className="p-4 rounded-xl bg-[#090C16] border border-slate-800 text-center space-y-1">
                  <div className="text-3xl font-extrabold text-emerald-400">0.00</div>
                  <div className="text-xs font-semibold text-slate-100">Cumulative Layout Shift</div>
                  <div className="text-xs text-slate-300">Zero Jitter User Experience</div>
                </div>

                <div className="p-4 rounded-xl bg-[#090C16] border border-slate-800 text-center space-y-1">
                  <div className="text-3xl font-extrabold text-amber-400">100%</div>
                  <div className="text-xs font-semibold text-slate-100">SEO & Security Index</div>
                  <div className="text-xs text-slate-300">Clean Schema & SSR Routes</div>
                </div>
              </div>
            )}

            {/* Tab 2 Content: SEO & Keyword Rank Trajectory */}
            {activeTab === 'seo' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left animate-fadeIn" role="tabpanel">
                <div className="p-5 rounded-xl bg-[#090C16] border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-rose-400">
                    <span>Medical Practice (NY)</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs">#1 Rank</span>
                  </div>
                  <div className="text-xl font-bold text-white">+240% Organic Traffic</div>
                  <p className="text-xs text-slate-300">Dominated 14 high-intent surgical search queries within 90 days.</p>
                </div>

                <div className="p-5 rounded-xl bg-[#090C16] border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-amber-400">
                    <span>Commercial Law (London)</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs">Top 3 Position</span>
                  </div>
                  <div className="text-xl font-bold text-white">4.1x Retainer Leads</div>
                  <p className="text-xs text-slate-300">Targeted high-value corporate litigation and cross-border M&A queries.</p>
                </div>

                <div className="p-5 rounded-xl bg-[#090C16] border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-rose-400">
                    <span>HVAC Enterprise (Texas)</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs">#1 Local Map Pack</span>
                  </div>
                  <div className="text-xl font-bold text-white">$1.2M Attributed Pipeline</div>
                  <p className="text-xs text-slate-300">Hyper-targeted suburban geo-landing architecture across 18 zip codes.</p>
                </div>
              </div>
            )}

            {/* Tab 3 Content: Conversion Funnel UX */}
            {activeTab === 'cro' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left animate-fadeIn" role="tabpanel">
                <div className="p-5 rounded-xl bg-[#090C16] border border-slate-800 space-y-2">
                  <div className="text-xs font-semibold text-rose-400">Frictionless Booking Drawers</div>
                  <div className="text-xl font-bold text-white">+180% Form Completion</div>
                  <p className="text-xs text-slate-300">Replaced multi-page clutter with step-guided instant scheduling.</p>
                </div>

                <div className="p-5 rounded-xl bg-[#090C16] border border-slate-800 space-y-2">
                  <div className="text-xs font-semibold text-amber-400">Mobile-First Lead Capture</div>
                  <div className="text-xl font-bold text-white">2.8s Contact Velocity</div>
                  <p className="text-xs text-slate-300">Optimized thumb-zone CTAs and tap-to-call direct routing.</p>
                </div>

                <div className="p-5 rounded-xl bg-[#090C16] border border-slate-800 space-y-2">
                  <div className="text-xs font-semibold text-rose-400">Enterprise Lead Qualification</div>
                  <div className="text-xl font-bold text-white">92% High-Ticket Fit</div>
                  <p className="text-xs text-slate-300">Intelligent intake forms filter low-budget spam automatically.</p>
                </div>
              </div>
            )}

            {/* Enterprise Client Category Trust Ticker */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-slate-300 text-xs gap-3">
              <span className="font-semibold text-slate-200">Target Enterprise Domains:</span>
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <span className="px-2.5 py-1 rounded bg-[#090C16] border border-slate-800 text-slate-200">Medical Spa & Cosmetic Clinics</span>
                <span className="px-2.5 py-1 rounded bg-[#090C16] border border-slate-800 text-slate-200">Corporate & Litigation Law</span>
                <span className="px-2.5 py-1 rounded bg-[#090C16] border border-slate-800 text-slate-200">Commercial Field Services</span>
                <span className="px-2.5 py-1 rounded bg-[#090C16] border border-slate-800 text-slate-200">High-Ticket B2B Firms</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
