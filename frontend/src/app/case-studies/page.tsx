'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/agency/Navbar';
import { Footer } from '@/components/agency/Footer';
import { BookingModal } from '@/components/agency/BookingModal';
import { AuditModal } from '@/components/agency/AuditModal';
import { caseStudiesData } from '@/data/caseStudiesData';
import { 
  ArrowRightIcon, 
  MapPinIcon, 
  InformationCircleIcon, 
  SparklesIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';

export default function CaseStudiesIndexPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07080C] text-slate-100 relative overflow-hidden font-sans selection:bg-rose-500/20 selection:text-white">
      <Navbar 
        onOpenBookingModal={() => setIsBookingOpen(true)}
        onOpenAuditModal={() => setIsAuditOpen(true)}
      />

      {/* Hero Section */}
      <div className="pt-36 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider">
          <ChartBarIcon className="w-4 h-4" />
          <span>Empirical Agency Case Studies</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
          Proven Engineering. <span className="brand-gradient-text">Measurable Results.</span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore in-depth technical breakdowns of how Ink Urban engineers high-performance web applications and search dominance for enterprise practices worldwide.
        </p>

        {/* Transparency Notice */}
        <div className="mt-8 p-4 rounded-2xl bg-[#0E1220] border border-amber-500/30 flex items-center space-x-3 text-xs text-amber-200/90 max-w-2xl mx-auto text-left shadow-lg">
          <InformationCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <span>
            <strong>Transparency Notice:</strong> All data represents verified empirical client outcomes and Core Web Vitals telemetry benchmarks.
          </span>
        </div>
      </div>

      {/* Case Studies Archive Grid */}
      <div className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((cs) => (
            <article
              key={cs.slug}
              className="p-6 sm:p-8 rounded-3xl bg-[#0D101C]/90 border border-rose-500/20 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-2xl hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                
                {/* Header Tag & Location */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-400 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 uppercase tracking-wide">
                    {cs.niche}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-slate-400 font-medium">
                    <MapPinIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{cs.location}</span>
                  </div>
                </div>

                {/* Title */}
                <Link href={`/case-studies/${cs.slug}`}>
                  <h2 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {cs.clientType}
                  </h2>
                </Link>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {cs.summary}
                </p>

                {/* Problem / Solution Mini Pills */}
                <div className="space-y-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-[#080B14] border border-red-500/20 text-xs text-slate-300 space-y-1">
                    <span className="font-bold text-red-400">The Problem: </span>
                    <span className="line-clamp-2">{cs.challenge}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#080B14] border border-emerald-500/20 text-xs text-slate-300 space-y-1">
                    <span className="font-bold text-emerald-400">Ink Urban Solution: </span>
                    <span className="line-clamp-2">{cs.solution}</span>
                  </div>
                </div>

                {/* Empirical Performance Metrics */}
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300 flex items-center space-x-1.5">
                    <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>Performance Outcomes:</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-xl bg-[#080B14] border border-amber-500/20 text-center">
                        <div className="text-base font-extrabold text-white">{m.value}</div>
                        <div className="text-[9px] font-semibold text-amber-400 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-800/80">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="w-full py-3 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg shadow-rose-500/25 group-hover:scale-[1.02]"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </article>
          ))}
        </div>
      </div>

      <Footer 
        onOpenBookingModal={() => setIsBookingOpen(true)} 
        onOpenAuditModal={() => setIsAuditOpen(true)} 
      />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      <AuditModal 
        isOpen={isAuditOpen} 
        onClose={() => setIsAuditOpen(false)} 
      />
    </main>
  );
}
