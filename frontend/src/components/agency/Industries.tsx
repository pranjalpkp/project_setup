'use client';

import React, { useState } from 'react';
import { 
  SparklesIcon, 
  HomeModernIcon, 
  BuildingOffice2Icon, 
  ShoppingBagIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  RectangleStackIcon
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
      tagline: "Product Landing Pages & User Portals",
      problem: "Complex features explained poorly, leading to high bounce and low trial conversion.",
      solution: "Interactive feature walkthroughs, custom onboarding dashboards, and sub-0.5s speeds.",
      metric: "3.6x Demo Signups"
    },
    {
      id: "medspas",
      name: "Medical & Aesthetics",
      icon: SparklesIcon,
      tagline: "High-Ticket Patient Acquisition Platforms",
      problem: "Generic template sites fail to establish clinical safety and authority.",
      solution: "Bespoke treatment galleries, 2-click booking drawers, and localized schema.",
      metric: "2.8x Inquiries"
    },
    {
      id: "lawfirms",
      name: "Law & Corporate",
      icon: BuildingOffice2Icon,
      tagline: "Prestige Partner Portfolios & Secure Portals",
      problem: "Outdated design undermines prestige and costs corporate retainer instructions.",
      solution: "Editorial typography, encrypted consultation gateways, and partner track records.",
      metric: "3.4x Retainers"
    },
    {
      id: "contractors",
      name: "Commercial Contracting",
      icon: HomeModernIcon,
      tagline: "Multi-Territory Dispatch Systems",
      problem: "Facility managers bounce off slow pages when urgently needing commercial replacements.",
      solution: "Mobile-first instant dispatch UI, 2-step estimators, and regional SEO.",
      metric: "180%+ Call Surge"
    },
    {
      id: "ecommerce",
      name: "E-Commerce",
      icon: ShoppingBagIcon,
      tagline: "Headless Storefronts & Instant Checkout",
      problem: "Shopify/WooCommerce template lag causing 70%+ shopping cart abandonment.",
      solution: "Next.js headless commerce, instant cart drawers, and edge API caching.",
      metric: "42% Less Drop-off"
    }
  ];

  const current = niches[activeNiche];
  const CurrentIcon = current.icon;

  return (
    <section id="industries" className="py-14 sm:py-16 bg-[#0A0C14] relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <BuildingOffice2Icon className="w-3.5 h-3.5" />
            <span>Target Sectors</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Tailored For <span className="brand-gradient-text">High-Growth Industries</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bespoke architectures built around specific buyer psychology and business workflows.
          </p>
        </div>

        {/* Compact Industry Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {niches.map((niche, idx) => {
            const isSelected = activeNiche === idx;
            return (
              <button
                key={niche.id}
                type="button"
                onClick={() => setActiveNiche(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
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
        <div className="mt-6 p-6 sm:p-8 rounded-2xl glass-panel-dark-brand border border-rose-500/30 shadow-xl max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 flex-shrink-0">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{current.name}</h3>
                <p className="text-xs font-medium text-rose-300">{current.tagline}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#07080C] border border-rose-500/30 text-rose-300 text-xs font-bold">
              <CheckBadgeIcon className="w-4 h-4 text-emerald-400" />
              <span>Target: {current.metric}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#090C16] border border-slate-800 space-y-1">
              <span className="font-bold uppercase tracking-wider text-red-400 block text-[11px]">Primary Bottleneck</span>
              <p className="text-slate-300 leading-relaxed">{current.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#090C16] border border-rose-500/20 space-y-1">
              <span className="font-bold uppercase tracking-wider text-rose-300 block text-[11px]">Ink Urban Solution</span>
              <p className="text-slate-300 leading-relaxed">{current.solution}</p>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="px-5 py-2.5 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Build For {current.name}</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
