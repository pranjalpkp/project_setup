'use client';

import React from 'react';
import { 
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

interface AuditTeardownProps {
  onOpenAuditModal: () => void;
}

export const AuditTeardown: React.FC<AuditTeardownProps> = ({ onOpenAuditModal }) => {
  return (
    <section 
      id="craftsmanship" 
      aria-labelledby="craftsmanship-heading"
      className="py-16 sm:py-20 bg-[#07090F] relative border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider shadow-lg">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>Engineering Standards & Reliability</span>
          </div>

          <h2 id="craftsmanship-heading" className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Velocity, <span className="brand-gradient-text">Security & High Conversion</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Why leading businesses partner with Ink Urban instead of struggling with slow legacy agencies or fragile template builders.
          </p>
        </div>

        {/* Visual Performance Benchmark Lab Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: 4 Lighthouse 100 Score Gauges with 3D Diagnostic Core */}
          <div className="lg:col-span-5 p-5 sm:p-7 rounded-3xl bg-[#090C16] border border-rose-500/30 shadow-2xl flex flex-col justify-between space-y-5 group">
            <div className="space-y-3">
              <div className="relative h-36 rounded-2xl overflow-hidden border border-emerald-500/20">
                <img
                  src="/images/diagnostic_speed_core.jpg"
                  alt="High Performance Architecture Diagnostic by Ink Urban"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C16] via-transparent to-black/40"></div>
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-[#090C16]/85 border border-emerald-500/30 backdrop-blur-md text-[10px] font-mono text-emerald-300 font-bold flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>100/100 Lighthouse Vitals</span>
                </div>
                <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] font-bold text-white drop-shadow-md">
                  Clean Modular Architecture Standards
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">100/100 Core Web Vitals Standard</h3>
                <p className="text-xs text-slate-400 mt-0.5">Sub-second page load times, 0.00 CLS zero layout shifts, and instant server-side hydration.</p>
              </div>
            </div>

            {/* 4 Visual Circular Gauges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              {[
                { label: 'Performance', score: '100' },
                { label: 'Accessibility', score: '100' },
                { label: 'Best Practices', score: '100' },
                { label: 'SEO Authority', score: '100' }
              ].map((gauge, idx) => (
                <div key={idx} className="p-2.5 rounded-2xl bg-[#0F1426] border border-emerald-500/30 space-y-1 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-emerald-400 flex items-center justify-center font-heading font-extrabold text-base text-emerald-400 bg-emerald-500/10 shadow-lg shadow-emerald-500/20">
                    {gauge.score}
                  </div>
                  <span className="text-[9px] font-bold text-slate-300 uppercase">{gauge.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center space-x-1.5">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="truncate">Sub-0.4s Largest Contentful Paint</span>
              </span>
              <span className="font-mono text-slate-500 flex-shrink-0">0.00 CLS</span>
            </div>
          </div>

          {/* Card 2: Interactive Latency Visualizer */}
          <div className="lg:col-span-7 p-5 sm:p-7 rounded-3xl bg-[#090C16] border border-slate-800 shadow-2xl flex flex-col justify-between space-y-5">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                  Architecture & Speed Benchmark
                </span>
                <h3 className="text-xl font-bold text-white">Custom Engineering vs. Legacy Fragility</h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-md bg-[#121626] border border-slate-700 text-slate-300 font-mono">
                P99 Latency
              </span>
            </div>

            {/* Visual Bar Comparison */}
            <div className="space-y-4">
              {/* Legacy Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-red-400 flex items-center space-x-1.5">
                    <XCircleIcon className="w-4 h-4 text-red-400" />
                    <span>Bloated Plugins & Unoptimized Monoliths</span>
                  </span>
                  <span className="font-mono font-bold text-red-400">3,800ms (High Churn)</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#18111A] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-600 to-rose-600 rounded-full w-[90%]"></div>
                </div>
              </div>

              {/* Ink Urban Edge Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-400 flex items-center space-x-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                    <span>Ink Urban High-Performance Architecture</span>
                  </span>
                  <span className="font-mono font-bold text-emerald-400">240ms (Instant Global)</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#0D1E18] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[12%] animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* 3 Micro Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <div className="p-2.5 rounded-xl bg-[#0D1222] border border-slate-800 text-slate-300 flex items-center space-x-2">
                <ShieldCheckIcon className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Enterprise Security</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0D1222] border border-slate-800 text-slate-300 flex items-center space-x-2">
                <CpuChipIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Autonomous AI Systems</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0D1222] border border-slate-800 text-slate-300 flex items-center space-x-2">
                <BoltIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Code Ownership</span>
              </div>
            </div>

          </div>

        </div>

        {/* Action Prompt Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#0D1120] border border-rose-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <span className="font-bold text-white">Want an independent technical review of your web platform, API response latency, and AI automation opportunities?</span>
          </div>
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl brand-gradient-bg text-white font-bold uppercase tracking-wider text-xs shadow-md hover:scale-102 transition-all cursor-pointer whitespace-nowrap min-h-[40px] flex items-center justify-center space-x-1.5"
          >
            <span>Request Free Technical Audit</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

