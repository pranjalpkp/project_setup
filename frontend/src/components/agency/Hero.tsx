'use client';

import React, { useState } from 'react';
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  BoltIcon,
  StarIcon,
  SparklesIcon,
  CpuChipIcon,
  CommandLineIcon,
  CheckCircleIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/react/24/outline';

interface HeroProps {
  onOpenBookingModal: () => void;
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<'webapp' | 'enterprise' | 'audit'>('webapp');

  const techStack = [
    'Next.js 15',
    'React 19',
    'TypeScript',
    'Tailwind CSS',
    'Spring Boot',
    'PostgreSQL',
    'Cloudflare Edge',
    'Docker'
  ];

  return (
    <section className="relative pt-28 pb-14 overflow-hidden flex flex-col items-center justify-center bg-[#07080C] bg-radial-gradient-dark">

      {/* Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-tr from-rose-500/20 via-amber-600/15 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">

        {/* Executive Proof Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101422] border border-rose-500/30 text-xs font-medium shadow-xl mb-6">
          <span className="flex items-center space-x-1.5 text-rose-300 font-bold">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Full-Stack Web Development & Engineering Agency</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center space-x-1 text-amber-300 font-semibold">
            <StarIcon className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>4.9/5 Rating</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
          We Engineer High-Performance <br className="hidden sm:inline" />
          <span className="brand-gradient-text">Web Applications & Platforms.</span>
        </h1>

        {/* Concise Subheading */}
        <p className="text-slate-300 text-sm sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto mt-5">
          Custom web applications, SaaS dashboards, and enterprise platforms built with modern Next.js architecture — backed by deep diagnostic website auditing.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6 max-w-md mx-auto">
          <button
            type="button"
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#0F1320] border border-amber-400/40 hover:border-amber-300 text-amber-200 font-semibold text-xs tracking-wider uppercase transition-all hover:bg-[#1A1828] cursor-pointer"
          >
            <DocumentMagnifyingGlassIcon className="w-4 h-4 text-amber-400" />
            <span>Free Technical Audit</span>
          </button>
        </div>

        {/* Value Badges */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-xs text-slate-300 bg-[#0A0D18]/70 border border-slate-800/80 py-2 px-3 rounded-xl">
            <BoltIcon className="w-4 h-4 text-rose-400 flex-shrink-0" />
            <span><strong className="text-white">Sub-0.5s Speed:</strong> 100/100 Vitals</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-xs text-slate-300 bg-[#0A0D18]/70 border border-slate-800/80 py-2 px-3 rounded-xl">
            <ShieldCheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span><strong className="text-white">100% Bespoke:</strong> Zero Templates</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-xs text-slate-300 bg-[#0A0D18]/70 border border-slate-800/80 py-2 px-3 rounded-xl">
            <CpuChipIcon className="w-4 h-4 text-rose-400 flex-shrink-0" />
            <span><strong className="text-white">Full-Stack:</strong> Next.js & APIs</span>
          </div>
        </div>

        {/* Streamlined Interactive Showcase */}
        <div className="mt-10 max-w-4xl mx-auto rounded-2xl glass-panel-dark-brand p-5 sm:p-6 shadow-2xl border border-rose-500/30 text-left">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <CommandLineIcon className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Engineering Showcase</span>
            </div>

            {/* Tab Switcher */}
            <div className="grid grid-cols-3 w-full sm:w-auto p-1 rounded-xl bg-[#121626] border border-slate-800 gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('webapp')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                  activeTab === 'webapp' ? 'brand-gradient-bg text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Custom Apps & SaaS
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('enterprise')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                  activeTab === 'enterprise' ? 'brand-gradient-bg text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Enterprise Platforms
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('audit')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                  activeTab === 'audit' ? 'brand-gradient-bg text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Code & Web Audit
              </button>
            </div>
          </div>

          {/* Tab Contents */}
          <div className="pt-4">
            {activeTab === 'webapp' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#101422] border border-slate-800 space-y-1">
                  <div className="text-[11px] font-bold text-rose-400 uppercase">React 19 & Next.js 15</div>
                  <div className="text-sm font-bold text-white">Modular Component Tree</div>
                  <p className="text-xs text-slate-400">Zero bloat, lightning fast state management.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#101422] border border-slate-800 space-y-1">
                  <div className="text-[11px] font-bold text-amber-400 uppercase">Cloud Edge</div>
                  <div className="text-sm font-bold text-white">Sub-400ms Response</div>
                  <p className="text-xs text-slate-400">Serverless APIs & PostgreSQL queries.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#101422] border border-slate-800 space-y-1">
                  <div className="text-[11px] font-bold text-emerald-400 uppercase">Full Ownership</div>
                  <div className="text-sm font-bold text-white">100% Source Code</div>
                  <p className="text-xs text-slate-400">No monthly locks or proprietary builders.</p>
                </div>
              </div>
            )}

            {activeTab === 'enterprise' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#101422] border border-slate-800 space-y-1">
                  <div className="text-[11px] font-bold text-rose-400 uppercase">Speed Vitals</div>
                  <div className="text-2xl font-extrabold text-white">99 / 100</div>
                  <p className="text-xs text-slate-400">Mobile Lighthouse benchmark across tier-1 networks.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#101422] border border-slate-800 space-y-1">
                  <div className="text-[11px] font-bold text-amber-400 uppercase">Load Duration</div>
                  <div className="text-2xl font-extrabold text-white">0.42s</div>
                  <p className="text-xs text-slate-400">Instant first contentful paint retaining visitors.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#101422] border border-slate-800 space-y-1">
                  <div className="text-[11px] font-bold text-rose-400 uppercase">Conversion Lift</div>
                  <div className="text-2xl font-extrabold text-white">3.4x Average</div>
                  <p className="text-xs text-slate-400">Streamlined booking flows and clear visual hierarchy.</p>
                </div>
              </div>
            )}

            {activeTab === 'audit' && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-xl bg-[#0E1220] border border-amber-400/30">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-amber-300 uppercase">15-Point Code & Speed Teardown</div>
                  <p className="text-xs text-slate-300">Our senior developers inspect your site&apos;s speed, code debt, security, and conversion leaks in a 15-minute video.</p>
                </div>
                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="px-4 py-2 rounded-lg brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider flex-shrink-0 cursor-pointer shadow-md"
                >
                  Request Video Audit
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Compact Tech Stack Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-[#0D101C] border border-slate-800 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
