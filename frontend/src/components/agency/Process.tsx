'use client';

import React from 'react';
import { 
  MagnifyingGlassIcon, 
  MapIcon, 
  CodeBracketSquareIcon, 
  RocketLaunchIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

interface ProcessProps {
  onOpenBookingModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenBookingModal }) => {
  const steps = [
    {
      number: "01",
      icon: MagnifyingGlassIcon,
      title: "Technical Audit & Discovery",
      duration: "Days 1 – 3",
      tagline: "Performance & Conversion Diagnosis",
      description: "We analyze your current site performance, mobile UX bottlenecks, messaging clarity, and search engine positioning.",
      deliverables: [
        "Comprehensive conversion & UX diagnostic report",
        "Competitor search gap analysis in target postcodes",
        "Core Web Vitals diagnostic benchmark"
      ]
    },
    {
      number: "02",
      icon: MapIcon,
      title: "UX Architecture & Strategy",
      duration: "Days 4 – 7",
      tagline: "Designing Your Digital Blueprint",
      description: "We map out high-converting page structures, craft strategic value-driven copy, and design luxury UI wireframes tailored to your practice.",
      deliverables: [
        "Bespoke UX copywriting & messaging framework",
        "Interactive desktop & mobile visual wireframes",
        "Target search intent & keyword mapping"
      ]
    },
    {
      number: "03",
      icon: CodeBracketSquareIcon,
      title: "Custom Web Engineering",
      duration: "Days 8 – 18",
      tagline: "Bespoke Code & Sub-Second Speeds",
      description: "We engineer your application using modern React/Next.js code. Zero heavy page builders or bloated third-party plugins.",
      deliverables: [
        "Core Web Vitals speed optimization (95-100 score)",
        "Intuitive consultation booking drawers & forms",
        "CRM & scheduling tool integration"
      ]
    },
    {
      number: "04",
      icon: RocketLaunchIcon,
      title: "Search Launch & Optimization",
      duration: "Day 19 Onwards",
      tagline: "Search Positioning & Growth Monitoring",
      description: "We deploy structured entity schemas, launch local Google Business Profile optimizations, and monitor conversion analytics continuously.",
      deliverables: [
        "Google Map Pack & structured entity schema launch",
        "Conversion tracking & analytics setup",
        "Continuous security & performance monitoring"
      ]
    }
  ];

  return (
    <section id="process" className="py-12 sm:py-16 bg-[#0A0C14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Audit → Strategy → Build → <span className="brand-gradient-text">Optimize</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A structured, predictable execution process. We handle technical engineering, strategic copywriting, and search optimization from start to finish.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-amber-400/60 transition-all duration-300 space-y-5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl font-extrabold text-[#D4AF37]">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 px-2.5 py-1 rounded bg-[#090C16] border border-slate-800">
                      ⏱ {step.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-300 mt-0.5">
                      {step.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Deliverables:
                    </div>
                    {step.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start space-x-2 text-[11px] text-slate-300">
                        <CheckIcon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBookingModal}
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all"
          >
            <span>Start Step 1: Book Strategy Audit</span>
          </button>
        </div>

      </div>
    </section>
  );
};
