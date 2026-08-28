'use client';

import React from 'react';
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-600 text-xs font-semibold uppercase tracking-wider">
              <CodeBracketIcon className="w-3.5 h-3.5" />
              <span>About Ink Urban</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Bespoke Web Development. <br />
              <span className="brand-gradient-text-light">Senior Engineering Culture.</span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Ink Urban is a full-stack digital engineering practice. We build custom web applications, high-performance SaaS platforms, and enterprise digital flagships with zero template bloat.
            </p>

            <div className="pt-2">
              <a
                href="mailto:inkurban.in@gmail.com"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-rose-600 hover:text-rose-700 px-4 py-2.5 rounded-xl bg-white border border-slate-300 shadow-sm transition-colors"
              >
                <EnvelopeIcon className="w-4 h-4 text-rose-500" />
                <span>inkurban.in@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Compact Guarantees */}
          <div className="lg:col-span-6 space-y-3">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start space-x-3 text-left">
              <CheckCircleIcon className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Direct Senior Engineer Access</h3>
                <p className="text-xs text-slate-600 mt-0.5">No junior account managers. You collaborate directly with senior full-stack architects.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start space-x-3 text-left">
              <CheckCircleIcon className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">100% Source Code Ownership</h3>
                <p className="text-xs text-slate-600 mt-0.5">You own 100% of the repository, Figma assets, and database schemas with zero vendor lock-in.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start space-x-3 text-left">
              <ShieldCheckIcon className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Sub-0.5s Performance Guarantee</h3>
                <p className="text-xs text-slate-600 mt-0.5">Every platform is tested and optimized for 99-100/100 Core Web Vitals on mobile and desktop.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
