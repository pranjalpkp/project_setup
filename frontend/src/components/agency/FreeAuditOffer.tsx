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
          industry: 'General Web Audit'
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
    <section id="audit-offer" className="py-14 sm:py-16 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-white p-6 sm:p-10 border border-slate-200 shadow-xl overflow-hidden text-center space-y-6">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-600 text-xs font-bold uppercase tracking-wider">
            <DocumentMagnifyingGlassIcon className="w-4 h-4 text-rose-600" />
            <span>Diagnostic Code & Performance Audit</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Have an Existing Website That Needs Modernization?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Before rebuilding, get a 15-minute video teardown by a senior developer analyzing your Core Web Vitals, code debt, security, and conversion leaks.
            </p>
          </div>

          {/* Quick 1-Input Bar */}
          <form onSubmit={handleQuickSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2.5 pt-2">
            <input
              type="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="https://yourcompany.com"
              className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-rose-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-102 transition-all cursor-pointer whitespace-nowrap"
            >
              Get Free Video Audit
            </button>
          </form>

          {/* 3 Trust Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-500 border-t border-slate-100">
            <div className="flex items-center space-x-1.5">
              <SparklesIcon className="w-4 h-4 text-rose-500" />
              <span>15-Min Senior Engineer Video</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ClockIcon className="w-4 h-4 text-rose-500" />
              <span>24-Hour Turnaround</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheckIcon className="w-4 h-4 text-rose-500" />
              <span>100% Free & Confidential</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
