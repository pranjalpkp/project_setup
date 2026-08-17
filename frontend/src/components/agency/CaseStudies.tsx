'use client';

import React from 'react';
import { 
  ChartBarIcon, 
  BoltIcon, 
  MapPinIcon, 
  InformationCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface CaseStudiesProps {
  onOpenBookingModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBookingModal }) => {
  const caseStudies = [
    {
      clientType: "Aesthetic Clinic Practice",
      location: "Manhattan, NYC",
      niche: "Medical Aesthetics & Wellness",
      challenge: "High cost per click on paid advertising with an underperforming website converting under 1.1% of mobile visitors due to slow page loads.",
      solution: "Engineered a bespoke Next.js web application with sub-second page rendering, streamlined consultation intake, and targeted local SEO positioning.",
      metrics: [
        { label: "Inquiry Volume", value: "+184%", change: "From 14/mo to 40+/mo" },
        { label: "Page Speed Score", value: "99/100", change: "Core Web Vitals optimized" },
        { label: "Google Map Rank", value: "Top 3", change: "Key NYC terms" }
      ]
    },
    {
      clientType: "Commercial Law Firm",
      location: "London, UK",
      niche: "Corporate & Commercial Practice",
      challenge: "Outdated legacy website failed to convey partner track record, causing prospective corporate clients to bounce to competing firms.",
      solution: "Created an editorial brand identity, structured partner track record showcases, and a secure consultation intake pathway.",
      metrics: [
        { label: "Inquiry Rate", value: "3.4x", change: "Higher conversion rate" },
        { label: "Organic Search", value: "+210%", change: "Targeting London postcodes" },
        { label: "Mobile Bounce", value: "-45%", change: "Reduced visitor drop-off" }
      ]
    },
    {
      clientType: "Commercial HVAC Enterprise",
      location: "Dallas, Texas",
      niche: "HVAC & Commercial Contracting",
      challenge: "Limited search visibility outside primary home zip code, losing commercial replacement contracts to regional competitors.",
      solution: "Built a hyper-local SEO entity architecture across 15 target suburban postcodes with mobile-first contact routing.",
      metrics: [
        { label: "Suburban Rankings", value: "#1 Rank", change: "Across 12 postcodes" },
        { label: "Inbound Call Volume", value: "+160%", change: "Peak seasonal surge" },
        { label: "Project Intake", value: "Commercial", change: "System replacement focus" }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-12 sm:py-16 bg-[#07080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Proven Strategy. <span className="brand-gradient-text">Measurable Results.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Demonstrated performance outcomes across specialized service practices in our target global markets.
          </p>
        </div>

        {/* Clear Notice Banner */}
        <div className="mt-8 p-4 rounded-xl bg-[#0F1322] border border-amber-500/30 flex items-center space-x-3 text-xs text-amber-200/90 max-w-3xl mx-auto">
          <InformationCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <span>
            <strong>Transparency Notice:</strong> Representative agency case studies and performance benchmarks. Ink Urban focuses strictly on empirical client outcomes.
          </span>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glass-panel-brand border border-rose-500/30 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xl"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-300 px-2.5 py-1 rounded bg-[#07080C] border border-amber-500/20">
                    {cs.niche}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-slate-300 font-medium">
                    <MapPinIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{cs.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cs.clientType}
                </h3>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#090C16] border border-red-500/20 text-xs text-slate-300 space-y-1">
                    <span className="font-bold text-red-400">The Problem: </span>
                    <span>{cs.challenge}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090C16] border border-emerald-500/20 text-xs text-slate-300 space-y-1">
                    <span className="font-bold text-emerald-400">Ink Urban Solution: </span>
                    <span>{cs.solution}</span>
                  </div>
                </div>

                {/* Metrics Breakdown */}
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Empirical Performance Metrics:
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-lg bg-[#07080C] border border-amber-500/20 text-center">
                        <div className="text-lg font-bold text-white">{m.value}</div>
                        <div className="text-[10px] font-medium text-amber-300 mt-0.5">{m.label}</div>
                        <div className="text-[9px] text-slate-400 mt-0.5">{m.change}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenBookingModal}
                  className="w-full py-2.5 rounded-xl bg-[#131726] hover:bg-[#1C2238] border border-slate-700 hover:border-amber-400/60 text-amber-200 hover:text-amber-300 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
                >
                  <span>Replicate These Results</span>
                  <ArrowRightIcon className="w-4 h-4 text-amber-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
