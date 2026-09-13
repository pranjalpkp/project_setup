'use client';

import React from 'react';
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  SparklesIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#07090F] border-t border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <CodeBracketIcon className="w-3.5 h-3.5" />
              <span>Agency Engineering Culture</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Direct Principal Access. <br />
              <span className="brand-gradient-text">Zero Account Middlemen.</span>
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed">
              We operate as your dedicated senior engineering and growth squad. Direct Slack/Meet collaboration with principal software architects and AI researchers.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="mailto:inkurban.in@gmail.com"
                className="inline-flex items-center space-x-2 text-xs font-bold text-rose-300 hover:text-rose-200 px-4 py-2.5 rounded-xl bg-[#0D1222] border border-slate-700 hover:border-rose-500/50 shadow-md transition-all"
              >
                <EnvelopeIcon className="w-4 h-4 text-rose-400" />
                <span>inkurban.in@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Compact Guarantees */}
          <div className="lg:col-span-7 space-y-3">
            <div className="p-4 rounded-2xl bg-[#090C16] border border-slate-800 hover:border-rose-500/40 shadow-lg flex items-start space-x-3.5 text-left transition-all">
              <CheckCircleIcon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">Direct Senior Architect Access</h3>
                <p className="text-xs text-slate-400 mt-0.5">Collaborate directly with lead developers and growth engineers. No account managers or outsourced junior teams.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#090C16] border border-slate-800 hover:border-rose-500/40 shadow-lg flex items-start space-x-3.5 text-left transition-all">
              <CheckCircleIcon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">100% Intellectual Property Ownership</h3>
                <p className="text-xs text-slate-400 mt-0.5">You own 100% of all GitHub repositories, Figma design systems, database schemas, and AI checkpoints with zero royalties.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#090C16] border border-slate-800 hover:border-rose-500/40 shadow-lg flex items-start space-x-3.5 text-left transition-all">
              <ShieldCheckIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">Sub-300ms & High-ROI Performance Standards</h3>
                <p className="text-xs text-slate-400 mt-0.5">Every build is benchmarked against 100/100 Core Web Vitals, enterprise security standards, and measurable acquisition lift.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
