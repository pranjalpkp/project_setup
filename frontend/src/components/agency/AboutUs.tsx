'use client';

import React from 'react';
import { 
  BuildingOfficeIcon, 
  GlobeAmericasIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  CheckCircleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#0A0C14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              International Standards. <span className="brand-gradient-text">Focused Technical Execution.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              <strong>Ink Urban</strong> is an international web development and search optimization agency. We build custom web applications and search dominance strategies for established service practices across North America, Europe, the Middle East, and Asia-Pacific.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              We operate as a dedicated technical practice. Every project is directly managed by senior engineers and search strategists who focus on code efficiency, user experience, and search engine compliance.
            </p>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0F1322] border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
                  <ShieldCheckIcon className="w-5 h-5" />
                  <span>Performance Engineering</span>
                </div>
                <p className="text-xs text-slate-400">
                  Every page layout, asset, and component is engineered for sub-second page rendering and high conversion performance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1322] border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
                  <GlobeAmericasIcon className="w-5 h-5" />
                  <span>Time-Zone Aligned Workflow</span>
                </div>
                <p className="text-xs text-slate-400">
                  Structured communication aligned with US Eastern/Pacific, London GMT, Dubai GST, and Australian AEST.
                </p>
              </div>
            </div>

            {/* Contact Detail Direct Link */}
            <div className="pt-4 flex items-center space-x-4">
              <a
                href="mailto:inkurban.in@gmail.com"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-rose-400 hover:text-white px-4 py-2.5 rounded-xl bg-[#0F1322] border border-rose-500/30"
              >
                <EnvelopeIcon className="w-4 h-4 text-rose-400" />
                <span>inkurban.in@gmail.com</span>
              </a>
              <span className="text-xs font-mono text-slate-500">Domain: inkurban.in</span>
            </div>

          </div>

          {/* Right Column Agency Highlights Box */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl glass-panel-brand border border-rose-500/30 space-y-6 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
                <h3 className="text-xl font-bold text-white">
                  The Ink Urban Guarantee
                </h3>
                <span className="text-xs font-bold text-rose-400 px-2.5 py-1 rounded bg-[#07080C]">
                  Agency Standards
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Access to Senior Builders</h4>
                    <p className="text-xs text-slate-400">No account managers or lost communication layers. You work directly with technical strategists.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">100% Code Ownership</h4>
                    <p className="text-xs text-slate-400">You retain 100% full legal ownership of your website source code, assets, and analytics.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Predictable Milestone Pricing</h4>
                    <p className="text-xs text-slate-400">Transparent pricing with zero hidden fees or unexpected monthly maintenance traps.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#07080C] border border-slate-800 text-center space-y-1">
                <div className="text-xs text-slate-400">Official Partnership Inquiries</div>
                <div className="text-sm font-bold text-white">inkurban.in@gmail.com</div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
