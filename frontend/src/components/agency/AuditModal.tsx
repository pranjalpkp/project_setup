'use client';

import React, { useState } from 'react';
import { 
  XMarkIcon, 
  VideoCameraIcon, 
  CheckCircleIcon, 
  SparklesIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('medspa');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl || !email || !name) {
      toast.error('Please complete all required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success('Audit request queued successfully!');
    }, 1000);
  };

  const handleClose = () => {
    setSubmitted(false);
    setWebsiteUrl('');
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn" role="dialog" aria-modal="true">
      <div 
        className="relative w-full max-w-xl bg-[#090C16] border border-rose-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden brand-glow"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close website audit modal"
          className="absolute top-5 right-5 p-2 text-slate-300 hover:text-white rounded-xl bg-[#121626] border border-slate-800"
        >
          <XMarkIcon className="w-5 h-5" aria-hidden="true" />
        </button>

        {!submitted ? (
          <div className="space-y-6 text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <VideoCameraIcon className="w-4 h-4" aria-hidden="true" />
                <span>Free 15-Point Video Teardown</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                Request Your Website & SEO Audit
              </h3>
              <p className="text-xs text-slate-200">
                Receive a 15-minute screen recording video analyzing your mobile speed, conversion friction, and local Google Map Pack gaps.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="audit-name" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  id="audit-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Marcus Vance"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#121626] border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label htmlFor="audit-website" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                  Website URL *
                </label>
                <input
                  id="audit-website"
                  type="url"
                  required
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="https://yourbusiness.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#121626] border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label htmlFor="audit-email" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                  Work Email *
                </label>
                <input
                  id="audit-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="marcus@vancelaw.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#121626] border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label htmlFor="audit-industry" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                  Primary Niche
                </label>
                <select
                  id="audit-industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#121626] border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-500"
                >
                  <option value="medspa">Med Spa / Aesthetic Clinic</option>
                  <option value="dentist">Cosmetic Dentist</option>
                  <option value="lawfirm">Law Firm / Legal Practice</option>
                  <option value="hvac">HVAC / Roofing Contractor</option>
                  <option value="other">Other High-Value Service</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
              >
                <SparklesIcon className="w-4 h-4 text-white" aria-hidden="true" />
                <span>{isSubmitting ? 'Submitting Request...' : 'Send Me My Free Video Audit'}</span>
              </button>
            </form>

            <div className="text-xs text-slate-300 text-center">
              🔒 100% confidential. Delivered to your email within 24 hours.
            </div>

          </div>
        ) : (
          <div className="space-y-6 text-center py-6">
            <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto">
              <CheckCircleIcon className="w-10 h-10" aria-hidden="true" />
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-2xl font-bold text-white">
                Audit Request Confirmed!
              </h3>
              <p className="text-xs text-slate-200 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. Our senior growth engineer is reviewing <strong>{websiteUrl}</strong>. Your custom Loom video teardown will arrive at <strong>{email}</strong> within 24 hours.
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
