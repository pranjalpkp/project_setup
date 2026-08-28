'use client';

import React from 'react';
import { 
  XCircleIcon, 
  CheckCircleIcon, 
  SparklesIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/react/24/outline';

interface AuditTeardownProps {
  onOpenAuditModal: () => void;
}

export const AuditTeardown: React.FC<AuditTeardownProps> = ({ onOpenAuditModal }) => {
  const comparisons = [
    {
      feature: "Code Architecture",
      bad: "35+ bloated WordPress/Wix plugins, fragile dependencies",
      good: "100% bespoke Next.js 15 & React 19 modular code"
    },
    {
      feature: "Speed & Vitals",
      bad: "4.8s mobile load times, 30/100 Core Web Vitals",
      good: "Sub-0.5s instant page rendering, 99-100/100 Vitals"
    },
    {
      feature: "Security & Scale",
      bad: "Vulnerable plugin CVEs, SQL/XSS risks, template leaks",
      good: "OWASP defense-in-depth, PostgreSQL, zero-trust headers"
    },
    {
      feature: "Code Ownership",
      bad: "Locked into proprietary builders with monthly fees",
      good: "100% full repository & source code ownership"
    }
  ];

  return (
    <section id="craftsmanship" className="py-14 sm:py-16 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-600 text-xs font-semibold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>The Engineering Standard</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Custom Engineering vs. <span className="brand-gradient-text-light">Fragile Templates</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See why bespoke full-stack architecture out-converts and out-performs off-the-shelf page builders.
          </p>
        </div>

        {/* Side-by-Side Clean Comparison Table */}
        <div className="mt-8 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* Left: Template Sites */}
            <div className="p-6 sm:p-8 space-y-5 bg-red-50/40">
              <div className="flex items-center justify-between pb-3 border-b border-red-200">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Generic Template / Page Builder
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-semibold">
                  Low Conversion
                </span>
              </div>

              <div className="space-y-4">
                {comparisons.map((c, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                    <XCircleIcon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-semibold">{c.feature}: </strong>
                      <span>{c.bad}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Ink Urban Bespoke Engineering */}
            <div className="p-6 sm:p-8 space-y-5 bg-rose-50/30">
              <div className="flex items-center justify-between pb-3 border-b border-rose-200">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Ink Urban Bespoke Engineering
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-semibold">
                  High Performance
                </span>
              </div>

              <div className="space-y-4">
                {comparisons.map((c, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-semibold">{c.feature}: </strong>
                      <span>{c.good}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Audit Prompt Bar */}
          <div className="p-4 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <DocumentMagnifyingGlassIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Want an objective diagnosis of your current website before rebuilding?</span>
            </div>
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="px-4 py-1.5 rounded-lg brand-gradient-bg text-white font-bold uppercase tracking-wider text-[11px] hover:opacity-90 transition-all cursor-pointer whitespace-nowrap"
            >
              Get Free 15-Min Audit &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
