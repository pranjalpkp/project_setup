'use client';

import React, { useState } from 'react';
import { 
  SparklesIcon, 
  BuildingOffice2Icon, 
  ShoppingBagIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  RectangleStackIcon,
  BanknotesIcon,
  HeartIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

interface IndustriesProps {
  onOpenBookingModal: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenBookingModal }) => {
  const [activeNiche, setActiveNiche] = useState(0);

  const niches = [
    {
      id: "saas",
      name: "SaaS & Tech",
      icon: RectangleStackIcon,
      tagline: "Multi-Tenant Platforms & High-Throughput APIs",
      problem: "Complex product features explained poorly, leading to slow onboarding and high trial churn.",
      solution: "Interactive product walkthroughs, frictionless self-serve billing, and sub-300ms edge APIs.",
      metric: "3.8x Trial Activation"
    },
    {
      id: "fintech",
      name: "FinTech & Banking",
      icon: BanknotesIcon,
      tagline: "Encrypted Transaction Gateways & Predictive Fraud ML",
      problem: "Rigid legacy architectures failing compliance, slowing down transactions, and vulnerable to anomalous fraud.",
      solution: "Zero-trust encrypted microservices, real-time ML anomaly detection, and automated regulatory reporting.",
      metric: "99.4% Anomaly Precision"
    },
    {
      id: "ecommerce",
      name: "E-Commerce & DTC",
      icon: ShoppingBagIcon,
      tagline: "Headless Storefronts & 1-Click Checkout Drawers",
      problem: "Bloated templates with 4+ second load times causing 70%+ shopping cart abandonment.",
      solution: "Next.js 15 headless commerce, instant slide-out checkout, and programmatic SEO catalog engines.",
      metric: "+240% Revenue Growth"
    },
    {
      id: "healthtech",
      name: "HealthTech & Medical",
      icon: HeartIcon,
      tagline: "HIPAA-Ready Patient Intake & Telehealth Systems",
      problem: "Fragmented clinical portals with high drop-off rates on outdated patient intake forms.",
      solution: "Encrypted patient portals, automated AI appointment triage, and seamless EHR integrations.",
      metric: "3.2x Patient Inquiries"
    },
    {
      id: "corporate",
      name: "Legal & Consulting",
      icon: BuildingOffice2Icon,
      tagline: "Prestige Partner Portfolios & Secure Client Rooms",
      problem: "Outdated web presence undermining prestige and losing institutional retainers to global competitors.",
      solution: "Editorial typography, encrypted document upload gateways, and structured search engine entity graphs.",
      metric: "3.4x Retainer Wins"
    },
    {
      id: "logistics",
      name: "Logistics & Operations",
      icon: TruckIcon,
      tagline: "Autonomous Workflow Dispatch & Predictive Fleet Analytics",
      problem: "Manual back-office coordination causing costly delays in cross-border dispatch and paperwork clearance.",
      solution: "Multi-agent autonomous AI pipelines automating document verification and real-time inventory forecasting.",
      metric: "85% Manual Ops Saved"
    }
  ];

  const current = niches[activeNiche];
  const CurrentIcon = current.icon;

  return (
    <section 
      id="industries" 
      aria-labelledby="industries-heading"
      className="py-14 sm:py-16 bg-[#0A0C14] relative border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <BuildingOffice2Icon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Vertical Industry Expertise</span>
          </div>

          <h2 id="industries-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Engineered For Your <span className="brand-gradient-text">Specific Business Model</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Custom software architectures, growth funnels, and automated AI systems built around your industry's workflows, compliance needs, and customer psychology.
          </p>
        </div>

        {/* Compact Industry Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Target industries">
          {niches.map((niche, idx) => {
            const isSelected = activeNiche === idx;
            return (
              <button
                key={niche.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveNiche(idx)}
                className={`px-4 py-2.5 sm:py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer min-h-[44px] ${
                  isSelected
                    ? 'brand-gradient-bg text-white border-rose-500 shadow-md scale-102'
                    : 'bg-[#0F1320] text-slate-300 border-slate-800 hover:border-rose-400/50 hover:text-white'
                }`}
              >
                {niche.name}
              </button>
            );
          })}
        </div>

        {/* Compact Active Industry Card */}
        <div className="mt-6 p-5 sm:p-8 rounded-2xl glass-panel-dark-brand border border-rose-500/30 shadow-xl max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 flex-shrink-0">
                <CurrentIcon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{current.name}</h3>
                <p className="text-xs font-medium text-rose-300">{current.tagline}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#07080C] border border-rose-500/30 text-rose-300 text-xs font-bold self-start sm:self-auto">
              <CheckBadgeIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
              <span>Target Outcome: {current.metric}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[13px]">
            <div className="p-4 rounded-xl bg-[#090C16] border border-slate-800 space-y-1">
              <span className="font-bold uppercase tracking-wider text-red-400 block text-[11px]">The Industry Challenge</span>
              <p className="text-slate-300 leading-relaxed">{current.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#090C16] border border-rose-500/20 space-y-1">
              <span className="font-bold uppercase tracking-wider text-rose-300 block text-[11px]">The Ink Urban Solution</span>
              <p className="text-slate-300 leading-relaxed">{current.solution}</p>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto px-5 py-3 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center justify-center space-x-2 cursor-pointer min-h-[44px]"
            >
              <span>Build For {current.name}</span>
              <ArrowRightIcon className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
