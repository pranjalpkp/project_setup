'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/agency/Navbar';
import { Footer } from '@/components/agency/Footer';
import { BookingModal } from '@/components/agency/BookingModal';
import { AuditModal } from '@/components/agency/AuditModal';
import { CaseStudy } from '@/data/caseStudiesData';
import { 
  ArrowLeftIcon, 
  MapPinIcon, 
  CheckIcon, 
  SparklesIcon, 
  ArrowRightIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

interface CaseStudyDetailViewProps {
  caseStudy: CaseStudy;
}

export const CaseStudyDetailView: React.FC<CaseStudyDetailViewProps> = ({ caseStudy: cs }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07080C] text-slate-100 relative overflow-hidden font-sans selection:bg-rose-500/20 selection:text-white">
      <Navbar 
        onOpenBookingModal={() => setIsBookingOpen(true)}
        onOpenAuditModal={() => setIsAuditOpen(true)}
      />

      {/* Top Breadcrumb Header */}
      <div className="pt-32 pb-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-400 mb-6">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/case-studies" className="hover:text-amber-400 transition-colors">Case Studies</Link>
          <span>/</span>
          <span className="text-amber-400 truncate max-w-[200px] sm:max-w-none">{cs.clientType}</span>
        </nav>

        <Link 
          href="/case-studies"
          className="inline-flex items-center space-x-2 text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors mb-6"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Niche & Location Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 uppercase tracking-wider">
            {cs.niche}
          </span>
          <span className="inline-flex items-center space-x-1.5 text-xs text-slate-300 font-medium px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
            <MapPinIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>{cs.location}</span>
          </span>
          <span className="text-xs text-rose-400 font-semibold px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
            {cs.tagline}
          </span>
        </div>

        {/* Big Headline */}
        <h1 className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {cs.headline}
        </h1>

        <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
          {cs.summary}
        </p>
      </div>

      {/* Empirical Performance Metrics Banner */}
      <div className="py-8 bg-[#0B0E1B] border-y border-slate-800/90 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cs.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#07080C] border border-amber-500/30 text-center space-y-2 shadow-xl"
              >
                <div className="font-heading text-4xl sm:text-5xl font-black brand-gradient-text">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-xs font-semibold text-amber-400">
                  {metric.change}
                </div>
                {metric.description && (
                  <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
                    {metric.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Details */}
      <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Before vs After Benchmark Table */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <SparklesIcon className="w-5 h-5 text-amber-400" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Empirical Before vs. After Benchmarks
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#0C0F1D] shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#080A14] text-slate-400 border-b border-slate-800 text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5 font-bold">Performance Metric</th>
                  <th className="p-4 sm:p-5 font-bold text-red-400">Pre-Ink Urban</th>
                  <th className="p-4 sm:p-5 font-bold text-emerald-400">Post-Ink Urban</th>
                  <th className="p-4 sm:p-5 font-bold text-amber-400">Net Business Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {cs.beforeAfter.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white">{item.metric}</td>
                    <td className="p-4 sm:p-5 text-red-300 font-medium">{item.before}</td>
                    <td className="p-4 sm:p-5 text-emerald-400 font-bold">{item.after}</td>
                    <td className="p-4 sm:p-5 text-amber-300 font-semibold">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The Challenge Breakdown */}
        <section className="p-8 rounded-3xl bg-[#0D1120] border border-red-500/20 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-400 flex items-center space-x-2">
            <span>The Diagnostic Challenge</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {cs.challenge}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
            {cs.challengePoints.map((point, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#080B14] border border-red-500/15 text-xs text-slate-300 space-y-1.5">
                <div className="text-red-400 font-bold">Bottleneck #{idx + 1}</div>
                <div className="leading-relaxed">{point}</div>
              </div>
            ))}
          </div>
        </section>

        {/* The Engineering Solution */}
        <section className="p-8 rounded-3xl bg-[#0D1120] border border-emerald-500/20 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-400 flex items-center space-x-2">
            <span>The Ink Urban Architectural Solution</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {cs.solution}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
            {cs.solutionPoints.map((point, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#080B14] border border-emerald-500/15 text-xs text-slate-300 space-y-1.5">
                <div className="text-emerald-400 font-bold">Implementation #{idx + 1}</div>
                <div className="leading-relaxed">{point}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-6 border-t border-slate-800/80 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Core Technologies Deployed:
            </div>
            <div className="flex flex-wrap gap-2">
              {cs.techStack.map((tech, idx) => (
                <span key={idx} className="text-xs font-semibold text-slate-200 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Key Deliverables */}
        <section className="p-8 rounded-3xl bg-[#0B0E1B] border border-slate-800 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
            <ShieldCheckIcon className="w-6 h-6 text-amber-400" />
            <span>Key Project Deliverables</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cs.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#07080C] border border-slate-800 text-xs sm:text-sm text-slate-300">
                <CheckIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonial Quote */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121626] to-[#0A0D18] border border-amber-500/40 relative overflow-hidden shadow-2xl space-y-4">
          <ChatBubbleLeftRightIcon className="w-10 h-10 text-amber-400/40" />
          <blockquote className="text-base sm:text-xl font-medium text-white italic leading-relaxed">
            &ldquo;{cs.quote.text}&rdquo;
          </blockquote>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
            <div>
              <div className="font-bold text-amber-300 text-sm">{cs.quote.author}</div>
              <div className="text-slate-400">{cs.quote.role} · {cs.clientType}</div>
            </div>
            <div className="text-slate-500 hidden sm:block">Verified Client Engagement</div>
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="p-8 sm:p-12 rounded-3xl brand-gradient-bg text-white shadow-2xl text-center space-y-6">
          <h2 className="font-heading text-2xl sm:text-4xl font-black">
            Ready to Replicate These Results for Your Practice?
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
            Get an empirical 15-point video audit of your current site, or schedule a strategic briefing with our technical directors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRightIcon className="w-4 h-4 text-slate-950" />
            </button>
            <button
              type="button"
              onClick={() => setIsAuditOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white font-extrabold text-sm uppercase tracking-wider transition-all border border-white/20"
            >
              Request Free Video Audit
            </button>
          </div>
        </section>

      </div>

      <Footer 
        onOpenBookingModal={() => setIsBookingOpen(true)} 
        onOpenAuditModal={() => setIsAuditOpen(true)} 
      />

      {/* Modals */}
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
};
