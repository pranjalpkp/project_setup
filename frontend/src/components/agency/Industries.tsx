'use client';

import React, { useState } from 'react';
import { 
  SparklesIcon, 
  AcademicCapIcon, 
  HomeModernIcon, 
  BuildingOffice2Icon, 
  BriefcaseIcon,
  CheckBadgeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface IndustriesProps {
  onOpenBookingModal: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenBookingModal }) => {
  const [activeNiche, setActiveNiche] = useState(0);

  const niches = [
    {
      id: "medspas",
      name: "Med Spas & Aesthetic Clinics",
      icon: SparklesIcon,
      tagline: "Patient Acquisition & Medical Aesthetics Branding",
      avgValue: "High-LTV Patient Acquisition Focus",
      targetLocs: "Global Practice Scope",
      painPoints: "Prospective patients compare multiple practices online. Generic template sites fail to establish clinical authority, safety standards, or practitioner expertise.",
      growthStrategy: "High-resolution treatment galleries, streamlined appointment scheduling, and localized search positioning for specialized clinical procedures.",
      outcomes: [
        "2.8x increase in direct consultation requests",
        "Higher patient retention for recurring treatment plans",
        "Top 3 Google Map Pack visibility for high-intent search terms"
      ]
    },
    {
      id: "dentists",
      name: "Cosmetic Dentists",
      icon: AcademicCapIcon,
      tagline: "Smile Makeover & Implant Patient Growth",
      avgValue: "Comprehensive Restorative & Cosmetic Focus",
      targetLocs: "International Practice Scope",
      painPoints: "High cost-per-click advertising lost on slow, unoptimized landing pages that fail to address patient trust or comfort.",
      growthStrategy: "Interactive smile transformation showcases, patient case studies, and mobile-optimized consultation scheduling.",
      outcomes: [
        "Significant reduction in cost-per-acquisition",
        "3.4x higher consultation conversion rate",
        "Dominant search authority across key suburban demographics"
      ]
    },
    {
      id: "lawfirms",
      name: "Law Firms & Legal Practices",
      icon: BuildingOffice2Icon,
      tagline: "Corporate, Commercial & High-Stakes Litigation Practice",
      avgValue: "Commercial Retainer & Institutional Client Focus",
      targetLocs: "Corporate & Institutional Scope",
      painPoints: "Corporate legal prospects scrutinize firm track records and partner credentials. Outdated web design immediately undermines firm reputation.",
      growthStrategy: "Editorial typography, partner track record highlights, structured practice area guides, and secure consultation request channels.",
      outcomes: [
        "Increased inbound corporate legal inquiries",
        "Enhanced partner authority and institutional trust",
        "Core Web Vitals load score optimized to 99/100"
      ]
    },
    {
      id: "hvac",
      name: "HVAC & Roofing Contractors",
      icon: HomeModernIcon,
      tagline: "Commercial & Residential Installation Growth",
      avgValue: "System Replacement & Commercial Contracting Focus",
      targetLocs: "Commercial Territory Scope",
      painPoints: "Property owners requiring urgent system replacements bounce off slow, cluttered websites that lack instant contact options.",
      growthStrategy: "Mobile-first instant contact architecture, 2-step estimate request intake, and hyper-local SEO covering target service territories.",
      outcomes: [
        "180%+ surge in direct inbound phone calls during demand spikes",
        "Top rankings across 15+ local service zip codes",
        "Frictionless emergency booking intake"
      ]
    },
    {
      id: "professional",
      name: "Professional Service Practices",
      icon: BriefcaseIcon,
      tagline: "Bespoke Architects, Wealth Management & Advisory",
      avgValue: "Institutional & High-Net-Worth Advisory Focus",
      targetLocs: "Global Advisory Scope",
      painPoints: "Relying strictly on traditional referrals limits growth potential and fails to capture digital inbound opportunities.",
      growthStrategy: "Bespoke digital portfolio showcases, clear value proposition messaging, and high-trust lead capture systems.",
      outcomes: [
        "Consistent inbound inquiry pipeline from qualified clients",
        "International brand positioning across target tier-1 markets",
        "End-to-end digital sales enablement"
      ]
    }
  ];

  const current = niches[activeNiche];
  const CurrentIcon = current.icon;

  return (
    <section id="industries" className="py-12 sm:py-16 bg-[#0A0C14] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Tailored For <span className="brand-gradient-text">High-Value Service Sectors</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We deliver dedicated web architecture and search positioning strategies for established service enterprises where digital trust directly impacts client selection.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {niches.map((niche, idx) => {
            const Icon = niche.icon;
            const isSelected = activeNiche === idx;
            return (
              <button
                key={niche.id}
                type="button"
                onClick={() => setActiveNiche(idx)}
                className={`flex items-center space-x-2.5 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                  isSelected
                    ? 'brand-gradient-bg text-white border-rose-500 shadow-lg shadow-rose-500/25 scale-105'
                    : 'bg-[#0F1320] text-slate-300 border-slate-800 hover:border-amber-400/60 hover:text-amber-300 hover:bg-[#151B2E]'
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-amber-400'}`} />
                <span>{niche.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Niche Showcase Card */}
        <div className="mt-10 p-8 sm:p-10 rounded-2xl glass-panel-dark-brand space-y-8 border border-rose-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 flex-shrink-0">
                <CurrentIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {current.name}
                </h3>
                <p className="text-sm font-semibold text-amber-300 mt-1">
                  {current.tagline}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-lg bg-[#07080C] border border-amber-500/30 text-amber-200 text-xs font-semibold">
                {current.avgValue}
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#07080C] border border-slate-800 text-slate-300 text-xs font-medium">
                📍 {current.targetLocs}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Industry Friction & Problem */}
            <div className="p-6 rounded-xl bg-[#090C16] border border-slate-800 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-red-400">
                Primary Revenue Bottleneck:
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {current.painPoints}
              </p>
            </div>

            {/* Ink Urban Tailored Strategy */}
            <div className="p-6 rounded-xl bg-[#090C16] border border-amber-500/30 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Ink Urban Engineered Solution:
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {current.growthStrategy}
              </p>
            </div>

          </div>

          {/* Expected Niche Outcomes */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Expected Measurable Outcomes:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {current.outcomes.map((outcome, oIdx) => (
                <div key={oIdx} className="p-4 rounded-xl bg-[#0D111E] border border-amber-500/20 flex items-start space-x-3 shadow-md">
                  <CheckBadgeIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card CTA */}
          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="px-6 py-3 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all flex items-center space-x-2"
            >
              <span>Build Strategy For My {current.name} Practice</span>
              <ArrowRightIcon className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
