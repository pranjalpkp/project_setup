'use client';

import React from 'react';
import { 
  UserMinusIcon, 
  SparklesIcon, 
  CurrencyDollarIcon, 
  MagnifyingGlassIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

export const ProblemsWeSolve: React.FC = () => {
  const problems = [
    {
      icon: UserMinusIcon,
      problem: "High Website Traffic, Low Inquiry Quality",
      description: "Your digital channels generate visits, but inbound inquiries lack budget alignment or clear purchase intent.",
      solution: "Strategic Positioning & Intake Qualification",
      solutionDetail: "We refine your visual messaging and consultation intake forms so only serious prospective clients schedule calls."
    },
    {
      icon: SparklesIcon,
      problem: "Brand Identity Disconnect",
      description: "Your practice or firm provides premium services, but your existing website fails to communicate your level of authority and expertise.",
      solution: "Bespoke Digital Brand Architecture",
      solutionDetail: "We build a sophisticated visual identity and clean digital presence that commands immediate trust and prestige."
    },
    {
      icon: CurrencyDollarIcon,
      problem: "Ad Spend Loss From Friction-Heavy Funnels",
      description: "Paid advertising traffic lands on slow-loading, unoptimized pages with high bounce rates.",
      solution: "Performance-Optimized Conversion UX",
      solutionDetail: "We optimize your page load speeds to under 0.8 seconds and streamline user pathways to maximize conversion rates."
    },
    {
      icon: MagnifyingGlassIcon,
      problem: "Limited Search Engine Visibility",
      description: "Local competitors rank above your practice on Google Search and Map Packs for high-intent search queries.",
      solution: "Structured Search & Local SEO Engine",
      solutionDetail: "We implement advanced structured entity schemas, local citation networks, and targeted search engine optimization strategies."
    }
  ];

  return (
    <section id="problems" className="py-12 sm:py-16 bg-[#07080C] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Core Bottlenecks We Resolve
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We focus on technical execution and conversion engineering designed to eliminate key digital performance barriers.
          </p>
        </div>

        {/* Problems & Engineered Solutions Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl glass-panel-dark border border-slate-800 hover:border-amber-400/60 transition-all duration-300 group space-y-6 shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 flex-shrink-0" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    PROBLEM 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.problem}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Solution Box */}
                <div className="p-4 rounded-xl bg-[#0B0F1B] border border-amber-500/20 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                    <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Ink Urban Engineered Solution: {item.solution}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.solutionDetail}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
