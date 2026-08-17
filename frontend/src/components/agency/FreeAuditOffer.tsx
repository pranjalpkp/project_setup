'use client';

import React, { useState } from 'react';
import { 
  VideoCameraIcon, 
  CheckCircleIcon, 
  SparklesIcon, 
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface FreeAuditOfferProps {
  onOpenAuditModal: () => void;
}

export const FreeAuditOffer: React.FC<FreeAuditOfferProps> = ({ onOpenAuditModal }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('medspa');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl || !email) {
      toast.error('Please enter your website URL and work email address.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Audit Request Submitted! Check your email in 24 hours for your custom Loom teardown video.');
      setWebsiteUrl('');
      setEmail('');
    }, 1200);
  };

  return (
    <section id="audit-offer" className="py-12 sm:py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl glass-panel-brand p-8 sm:p-12 border border-slate-200 shadow-xl overflow-hidden brand-glow">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Offer Description */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-600 text-xs font-bold uppercase tracking-wider">
                <VideoCameraIcon className="w-4 h-4 text-rose-500 flex-shrink-0" aria-hidden="true" />
                <span>Complimentary Performance Audit</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Request a <span className="brand-gradient-text">Technical Website Audit</span> & Analysis
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                Receive a 15-minute video analysis outlining performance bottlenecks, user experience friction points, and search engine positioning opportunities.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-slate-800">
                  <CheckCircleIcon className="w-5 h-5 text-rose-500 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Conversion UX Audit:</strong> Visual structure and inquiry pathway analysis.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-800">
                  <CheckCircleIcon className="w-5 h-5 text-rose-500 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Core Web Vitals Diagnosis:</strong> Mobile load speeds and asset optimization scores.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-800">
                  <CheckCircleIcon className="w-5 h-5 text-rose-500 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Search Positioning Review:</strong> Local Google Map Pack and structured schema coverage.</span>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-6 text-xs text-slate-600 border-t border-slate-200">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-4 h-4 text-rose-500 flex-shrink-0" aria-hidden="true" />
                  <span>Delivered within 24 Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheckIcon className="w-4 h-4 text-rose-500 flex-shrink-0" aria-hidden="true" />
                  <span>100% Private & Confidential</span>
                </div>
              </div>

            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-5 shadow-xl">
                
                <div className="text-left space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    Request Your Video Teardown
                  </h3>
                  <p className="text-xs text-slate-600">
                    No sales pressure. Just actionable growth advice from senior web & SEO strategists.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label htmlFor="offer-website" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Business Website URL *
                    </label>
                    <input
                      id="offer-website"
                      type="url"
                      required
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="https://yourclinic-or-firm.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="offer-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Work Email Address *
                    </label>
                    <input
                      id="offer-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="doctor@clinic.com or partner@lawfirm.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="offer-industry" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business Industry
                    </label>
                    <select
                      id="offer-industry"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-rose-500"
                    >
                      <option value="medspa">Med Spa / Aesthetic Clinic</option>
                      <option value="dentist">Cosmetic Dentist</option>
                      <option value="lawfirm">Law Firm / Legal Practice</option>
                      <option value="hvac">HVAC / Roofing Contractor</option>
                      <option value="other">Other High-Value Service Provider</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl brand-gradient-bg text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <SparklesIcon className="w-5 h-5 text-white" aria-hidden="true" />
                    <span>{isSubmitting ? 'Generating Audit Request...' : 'Send Me My Free Video Audit'}</span>
                  </button>
                </form>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="text-xs text-rose-600 hover:underline font-medium"
                  >
                    Or open full audit request drawer
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
