'use client';

import React, { useState } from 'react';
import { 
  DocumentMagnifyingGlassIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface FreeAuditOfferProps {
  onOpenAuditModal: () => void;
}

export const FreeAuditOffer: React.FC<FreeAuditOfferProps> = ({ onOpenAuditModal }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl) {
      onOpenAuditModal();
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch('http://localhost:8080/v1/growth/audits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Quick Audit Request',
          email: 'audit-request@lead.inkurban.in',
          websiteUrl,
          industry: 'Full-Stack & Growth Audit'
        })
      });
      toast.success('Audit Request Queued! Opening details drawer...');
      onOpenAuditModal();
    } catch {
      onOpenAuditModal();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="audit-offer" 
      aria-labelledby="audit-offer-heading"
      className="py-14 sm:py-16 bg-[#06070B] relative border-t border-slate-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl glass-panel-luxury p-6 sm:p-10 border border-rose-500/30 shadow-2xl overflow-hidden text-center space-y-6">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <DocumentMagnifyingGlassIcon className="w-4 h-4 text-rose-400 flex-shrink-0" aria-hidden="true" />
            <span>Complimentary Diagnostic Audit</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h2 id="audit-offer-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Need a Modernization Blueprint for Your Software, Funnels, or AI Pipelines?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Before committing to a build, get a 15-minute video teardown by a senior engineer analyzing your code debt, conversion bottlenecks, and AI automation opportunities.
            </p>
          </div>

          {/* Quick 1-Input Bar */}
          <form onSubmit={handleQuickSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2.5 pt-2">
            <label htmlFor="quick-audit-url" className="sr-only">
              Your Company Website URL
            </label>
            <input
              id="quick-audit-url"
              type="url"
              required
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="https://yourcompany.com"
              className="flex-1 px-4 py-3.5 sm:py-3 rounded-xl bg-[#0F1322] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-rose-500 min-h-[48px]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3.5 sm:py-3 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 hover:scale-102 transition-all cursor-pointer whitespace-nowrap min-h-[48px] flex items-center justify-center"
            >
              Get Free Video Audit
            </button>
          </form>

          {/* 3 Trust Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 border-t border-slate-800">
            <div className="flex items-center space-x-1.5">
              <SparklesIcon className="w-4 h-4 text-rose-400 flex-shrink-0" aria-hidden="true" />
              <span>15-Min Senior Engineer Video</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ClockIcon className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
              <span>24-Hour Turnaround</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
              <span>100% Free & Confidential</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
