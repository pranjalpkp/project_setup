'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPinIcon, 
  InformationCircleIcon, 
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { caseStudiesData } from '@/data/caseStudiesData';

interface CaseStudiesProps {
  onOpenBookingModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="case-studies" className="py-16 sm:py-20 bg-[#07080C] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-4 h-4" />
            <span>Empirical Track Record</span>
          </div>

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
          {caseStudiesData.map((cs) => (
            <article
              key={cs.slug}
              className="p-5 sm:p-8 rounded-2xl glass-panel-dark-brand border border-rose-500/30 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xl"
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

                <Link 
                  href={`/case-studies/${cs.slug}`}
                  className="block group/title"
                >
                  <h3 className="text-xl font-bold text-white group-hover/title:text-amber-300 transition-colors flex items-center justify-between">
                    <span>{cs.clientType}</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 text-slate-500 group-hover/title:text-amber-400 opacity-0 group-hover/title:opacity-100 transition-all" />
                  </h3>
                </Link>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#090C16] border border-red-500/20 text-xs text-slate-300 space-y-1">
                    <span className="font-bold text-red-400">The Problem: </span>
                    <span className="line-clamp-2">{cs.challenge}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090C16] border border-emerald-500/20 text-xs text-slate-300 space-y-1">
                    <span className="font-bold text-emerald-400">Ink Urban Solution: </span>
                    <span className="line-clamp-2">{cs.solution}</span>
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

              {/* Action Links */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="w-full py-2.5 rounded-xl brand-gradient-bg text-white hover:opacity-95 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg shadow-rose-500/20"
                >
                  <span>Explore Full Case Study</span>
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </Link>

                <button
                  type="button"
                  onClick={onOpenBookingModal}
                  className="w-full py-2 rounded-xl bg-[#131726] hover:bg-[#1C2238] border border-slate-700 hover:border-amber-400/40 text-slate-300 hover:text-amber-300 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Replicate These Results</span>
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* View All Case Studies Link Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#131726] border border-amber-500/30 hover:border-amber-400 text-amber-200 hover:text-amber-300 text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105"
          >
            <span>Browse All Case Studies & Empirical Benchmarks</span>
            <ArrowRightIcon className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
