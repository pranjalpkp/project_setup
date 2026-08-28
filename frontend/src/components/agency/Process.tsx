'use client';

import React from 'react';
import { 
  MagnifyingGlassIcon, 
  MapIcon, 
  CodeBracketSquareIcon, 
  RocketLaunchIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface ProcessProps {
  onOpenBookingModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenBookingModal }) => {
  const steps = [
    {
      number: "01",
      icon: MagnifyingGlassIcon,
      title: "Audit & Scope",
      tagline: "Stack & Conversion Diagnosis",
      description: "We analyze your existing code debt, Core Web Vitals speed, and conversion leaks before scoping."
    },
    {
      number: "02",
      icon: MapIcon,
      title: "UX Architecture",
      tagline: "Bespoke Figma Blueprint",
      description: "We map out high-converting user pathways, craft persuasive copy, and design luxury UI wireframes."
    },
    {
      number: "03",
      icon: CodeBracketSquareIcon,
      title: "Custom Build",
      tagline: "Next.js 15 & Sub-0.5s Code",
      description: "We engineer modular React/Next.js frontend and scalable APIs with zero template dependencies."
    },
    {
      number: "04",
      icon: RocketLaunchIcon,
      title: "QA & Launch",
      tagline: "OWASP Hardened & Edge Live",
      description: "Rigorous cross-browser testing, defense-in-depth security checks, and sub-0.5s CDN edge deployment."
    }
  ];

  return (
    <section id="process" className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-600 text-xs font-semibold uppercase tracking-wider">
            <span>4-Stage Sprint Execution</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We <span className="brand-gradient-text-light">Build & Deploy</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A predictable, milestone-based engineering lifecycle with zero fluff.
          </p>
        </div>

        {/* 4 Connected Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-rose-400/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-extrabold text-rose-600">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-all">
                      <Icon className="w-4 h-4 flex-shrink-0" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-amber-700 block mt-0.5">
                      {step.tagline}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact CTA */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={onOpenBookingModal}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
          >
            <span>Start Step 1: Discovery Session</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
