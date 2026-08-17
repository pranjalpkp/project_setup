'use client';

import React, { useState } from 'react';
import { 
  XCircleIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  VideoCameraIcon, 
  ArrowRightIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

interface AuditTeardownProps {
  onOpenAuditModal: () => void;
}

export const AuditTeardown: React.FC<AuditTeardownProps> = ({ onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<'conversion' | 'speed' | 'seo'>('conversion');

  return (
    <section id="audit-teardown" className="py-12 sm:py-16 bg-[#0A0C14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Bridging the Gap Between <span className="brand-gradient-text">Design & Conversion Performance</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Many service provider websites underperform due to slow page loads, unclear messaging, or lack of local search optimization. Compare traditional web design limitations with custom conversion engineering.
          </p>
        </div>

        {/* Interactive Feature Switcher */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#121624] border border-slate-800 space-x-2">
            <button
              onClick={() => setActiveTab('conversion')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'conversion'
                  ? 'brand-gradient-bg text-white shadow-lg shadow-rose-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Conversion Architecture
            </button>
            <button
              onClick={() => setActiveTab('speed')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'speed'
                  ? 'brand-gradient-bg text-white shadow-lg shadow-rose-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Speed & Core Vitals
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'seo'
                  ? 'brand-gradient-bg text-white shadow-lg shadow-rose-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Local SEO Engine
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Typical Generic Site (The Problem) */}
          <div className="p-8 rounded-2xl bg-[#10131e]/90 border border-red-500/20 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-red-500/10 border-b border-l border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
              Typical Freelancer / Template Site
            </div>

            <div className="flex items-center space-x-3 text-red-400">
              <ExclamationTriangleIcon className="w-7 h-7" />
              <h3 className="text-xl font-bold text-white">High Bounce Rate & Lost Revenue</h3>
            </div>

            {activeTab === 'conversion' && (
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start space-x-3">
                  <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Vague Headline:</strong> "Welcome to our clinic / law firm" with zero outcome offer.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Friction-Filled Booking:</strong> Long 12-field static contact forms nobody wants to fill.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span><strong>No Social Proof:</strong> Missing case studies, clear outcome metrics, or verified trust badges.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Mobile Breakdown:</strong> Cluttered layout that looks broken on iPhone & Android screens.</span>
                </li>
              </ul>
            )}

            {activeTab === 'speed' && (
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start space-x-3">
                  <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span><strong>PageSpeed Score: 32/100:</strong> Heavy uncompressed images & bloated WordPress plugins.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span><strong>4.8 Second Load Time:</strong> 53% of mobile visitors leave before the header renders.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Unstable Layout Shifts:</strong> Content jumps around while loading, frustrating users.</span>
                </li>
              </ul>
            )}

            {activeTab === 'seo' && (
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start space-x-3">
                  <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Generic Keywords:</strong> Optimized for non-converting high-volume national terms.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Missing Schema Markup:</strong> Google cannot read your service locations or reviews.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Local Map Pack Strategy:</strong> Invisible when local high-ticket clients search on mobile.</span>
                </li>
              </ul>
            )}

            <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/20 text-xs text-red-300">
              <strong>Estimated Result:</strong> Under 1.2% visitor-to-lead conversion rate. Ad spend burned unnecessarily.
            </div>
          </div>

          {/* Ink Urban Engineered Website (The Solution) */}
          <div className="p-8 rounded-2xl glass-panel-brand space-y-6 relative overflow-hidden shadow-2xl brand-glow">
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-rose-500/20 border-b border-l border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider">
              Ink Urban Growth Engine
            </div>

            <div className="flex items-center space-x-3 text-rose-400">
              <SparklesIcon className="w-7 h-7" />
              <h3 className="text-xl font-bold text-white">High-Converting Revenue Engine</h3>
            </div>

            {activeTab === 'conversion' && (
              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Outcome-Focused Hook:</strong> Instantly states the exact transformation your clinic / firm delivers.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Micro-Friction Booking Drawers:</strong> 2-click strategy scheduling with real-time availability.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Empirical Social Proof:</strong> Verified case breakdowns and metric-backed client outcomes.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Responsive Touch Optimization:</strong> Ultra-smooth mobile navigation tailored for mobile conversion.</span>
                </li>
              </ul>
            )}

            {activeTab === 'speed' && (
              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>PageSpeed Score: 98-100/100:</strong> Built with clean Next.js code and edge server rendering.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Under 0.8s Load Time:</strong> Instantaneous rendering keeps 100% of high-intent visitors engaged.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Layout Shifts (CLS 0.00):</strong> Rock-solid performance across all mobile devices.</span>
                </li>
              </ul>
            )}

            {activeTab === 'seo' && (
              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>High-Intent Buyer Keywords:</strong> Target ready-to-buy clients in specific affluent postcodes.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Structured Entity Schema:</strong> Direct Google Knowledge Graph integration & Local Pack optimization.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Top 3 Map Pack Domination:</strong> Capture high-value phone calls and direct consultation bookings.</span>
                </li>
              </ul>
            )}

            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-200">
              <strong>Engineered Target:</strong> 3.5% to 6.8% lead conversion rate with 2.5x higher client lead quality.
            </div>
          </div>

        </div>

        {/* Free Video Audit Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#141829] via-[#1A2138] to-[#121626] border border-rose-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <VideoCameraIcon className="w-4 h-4" />
              <span>Complimentary Growth Offer</span>
            </div>
            <h4 className="text-xl font-bold text-white">
              Want a 15-Point Video Teardown of Your Current Website?
            </h4>
            <p className="text-slate-300 text-sm max-w-2xl">
              We will record a personalized 15-minute video auditing your conversion leaks, speed bottlenecks, and local SEO gaps — 100% free with no obligation.
            </p>
          </div>

          <button
            onClick={onOpenAuditModal}
            className="px-7 py-3.5 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 hover:scale-105 transition-all flex items-center space-x-2 flex-shrink-0"
          >
            <span>Request My Free Audit</span>
            <ArrowRightIcon className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
