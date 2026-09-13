'use client';

import React from 'react';
import { 
  BoltIcon, 
  ArrowTrendingUpIcon, 
  CpuChipIcon, 
  ShieldCheckIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

export const ProblemsWeSolve: React.FC = () => {
  const problems = [
    {
      icon: BoltIcon,
      problem: "Fragile Tech Debt & Slow Apps",
      description: "Legacy codebases and bloated templates causing 3+ second latencies, database deadlocks, and costly maintenance.",
      solution: "Bespoke Next.js 15 & Spring Boot microservices delivering sub-300ms global speeds."
    },
    {
      icon: ArrowTrendingUpIcon,
      problem: "Leaky Funnels & Stagnant Growth",
      description: "High acquisition spend landing on low-converting pages with clunky multi-step forms and high bounce rates.",
      solution: "Scientific CRO funnels, frictionless 2-click intake drawers, and programmatic SEO engines."
    },
    {
      icon: CpuChipIcon,
      problem: "Costly Manual Operations",
      description: "Teams spending hundreds of hours on repetitive document parsing, manual data validation, and customer triage.",
      solution: "Autonomous multi-agent AI pipelines reducing manual operations by up to 85%."
    },
    {
      icon: ShieldCheckIcon,
      problem: "Vendor Lock-In & Security Risks",
      description: "Trapped in proprietary software builders with recurring monthly royalties and vulnerable third-party dependencies.",
      solution: "100% source code ownership, zero vendor lock-in, and OWASP defense-in-depth security."
    }
  ];

  return (
    <section id="problems" className="py-14 sm:py-16 bg-[#07080C] relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <span>Bottlenecks We Resolve</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Built To Eliminate Engineering, Growth & Operational Friction
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We replace outdated systems and fragmented agencies with cohesive, high-performance execution.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl glass-panel-dark border border-slate-800 hover:border-rose-500/40 transition-all duration-300 space-y-4 shadow-lg group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                      {item.problem}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-start space-x-2 text-xs text-rose-300">
                  <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-200">{item.solution}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
