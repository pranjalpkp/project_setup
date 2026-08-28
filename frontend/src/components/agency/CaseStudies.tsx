'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPinIcon, 
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { caseStudiesData } from '@/data/caseStudiesData';

interface CaseStudiesProps {
  onOpenBookingModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = () => {
  return (
    <section id="case-studies" className="py-14 sm:py-16 bg-[#07080C] relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Proven Engineering Track Record</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Real Builds. <span className="brand-gradient-text">Measurable Results.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified performance outcomes from custom web applications and modernization sprints.
          </p>
        </div>

        {/* Compact Case Studies Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudiesData.map((cs) => (
            <article
              key={cs.slug}
              className="p-6 rounded-2xl glass-panel-dark-brand border border-rose-500/25 hover:border-rose-400/60 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-rose-300 px-2.5 py-0.5 rounded bg-[#07080C] border border-rose-500/20">
                    {cs.niche}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-slate-400">
                    <MapPinIcon className="w-3 h-3 text-amber-400" />
                    <span>{cs.location}</span>
                  </div>
                </div>

                <Link href={`/case-studies/${cs.slug}`}>
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                    {cs.clientType}
                  </h3>
                </Link>

                {/* Hero Metric Pill */}
                <div className="p-3 rounded-xl bg-[#090C16] border border-rose-500/20 text-center">
                  <div className="text-2xl font-extrabold text-white font-heading">{cs.metrics[0].value}</div>
                  <div className="text-xs text-rose-300 font-medium">{cs.metrics[0].label} ({cs.metrics[0].change})</div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {cs.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="w-full py-2.5 rounded-xl bg-[#121626] hover:bg-[#1A2035] border border-slate-700 hover:border-rose-500/40 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Read Case Study</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-rose-400" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Case Studies */}
        <div className="mt-8 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-400 hover:text-rose-300 transition-colors"
          >
            <span>Browse All Case Studies & Benchmarks &rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
