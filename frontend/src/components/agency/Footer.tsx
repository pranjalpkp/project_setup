'use client';

import React from 'react';
import Link from 'next/link';
import { EnvelopeIcon, GlobeAltIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

interface FooterProps {
  onOpenBookingModal: () => void;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal, onOpenAuditModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060A] text-slate-300 border-t border-slate-800/80 relative pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer CTA Banner */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel-brand border border-rose-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Ready To Optimize Your Digital Presence & <span className="brand-gradient-text">Search Growth?</span>
            </h2>
            <p className="text-slate-200 text-sm max-w-xl">
              Schedule a 30-minute consultation or request a technical website audit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="px-5 py-3 rounded-xl border border-amber-400/40 text-amber-200 font-semibold text-xs uppercase tracking-wider hover:bg-amber-400/10 hover:text-amber-300"
            >
              Request Technical Audit
            </button>
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="px-6 py-3 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all"
            >
              Schedule Strategy Call
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <a href="#" aria-label="Ink Urban LLP Home" className="logo-badge">
                <img 
                  src="/images/ink_logo.png" 
                  alt="Ink Urban LLP Logo" 
                  width="110"
                  height="30"
                  className="h-7 w-auto object-contain" 
                />
                <span className="text-[10px] font-extrabold tracking-wider text-[#07080C] border border-[#07080C]/20 px-1.5 py-0.5 rounded bg-slate-100">
                  LLP
                </span>
              </a>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Ink Urban LLP is an international web development and search engine optimization practice. We build custom web applications and search dominance strategies for established service practices worldwide.
            </p>

            <div className="space-y-1.5 text-xs text-slate-200">
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <a href="mailto:inkurban.in@gmail.com" className="hover:text-amber-300 font-semibold">
                  inkurban.in@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <GlobeAltIcon className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>Domain: <strong className="text-white">inkurban.in</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="/#audit-teardown" className="hover:text-amber-300 transition-colors">Website Audit & Analysis</a></li>
              <li><a href="/#problems" className="hover:text-amber-300 transition-colors">Strategic Value & Bottlenecks</a></li>
              <li><a href="/#services" className="hover:text-amber-300 transition-colors">Services & Capabilities</a></li>
              <li><a href="/#industries" className="hover:text-amber-300 transition-colors">Specialized Sectors</a></li>
              <li><a href="/#process" className="hover:text-amber-300 transition-colors">Execution Methodology</a></li>
              <li><a href="/#case-studies" className="hover:text-amber-300 transition-colors">Client Impact & Case Studies</a></li>
              <li><a href="/#faq" className="hover:text-amber-300 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Scroll to top */}
          <div className="md:col-span-2 flex md:justify-end items-start">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="p-3 rounded-xl bg-[#0F1322] border border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-400/50 transition-all flex items-center space-x-2 text-xs"
            >
              <span>Back To Top</span>
              <ArrowUpIcon className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Ink Urban LLP (inkurban.in). All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-amber-300 transition-colors">
              Security Overview
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
