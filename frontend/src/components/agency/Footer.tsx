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
    <footer className="bg-[#05060A] text-slate-300 border-t border-slate-800/80 relative pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Footer Call-To-Action Banner */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel-dark-brand border border-rose-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Ready To Dominate Your Market <span className="brand-gradient-text">Globally?</span>
            </h2>
            <p className="text-slate-200 text-sm max-w-xl">
              Schedule a 30-minute consultation or request a complimentary 15-point video website audit.
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

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pt-6 text-left">

          {/* Column 1: Brand Info & Global Practice Focus */}
          <div className="lg:col-span-4 space-y-4">
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

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Ink Urban LLP is a global web development and search engine optimization practice servicing client enterprises worldwide.
            </p>

            <div className="space-y-1.5 text-xs text-slate-200">
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:inkurban.in@gmail.com" className="hover:text-amber-300 font-semibold">
                  inkurban.in@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <GlobeAltIcon className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
                <span>Official Domain: <strong className="text-white">inkurban.in</strong></span>
              </div>
            </div>

            {/* Global Practice Focus Badge (Replaces Connect With Ink Urban) */}
            {/* <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Global Practice Focus
              </div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#0F1322] border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-md">
                <span className="text-sm">🌍</span>
                <span>Worldwide / Global Service</span>
              </div>
            </div> */}

          </div>

          {/* Column 2: Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Services & Capabilities
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="/#services" className="hover:text-white transition-colors">Agentic AI & Multi-Agent Workflows</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Custom High-Performance Web Architecture</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Conversion Rate Optimization (CRO)</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Local & Global Map Pack SEO</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Sub-Second Infrastructure Speed</a></li>
            </ul>
          </div>

          {/* Column 3: Industry Sectors Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Target Industry Sectors
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="/#industries" className="hover:text-white transition-colors">Med Spas & Aesthetic Clinics</a></li>
              <li><a href="/#industries" className="hover:text-white transition-colors">Cosmetic Dentists & Restorative</a></li>
              <li><a href="/#industries" className="hover:text-white transition-colors">Law Firms & Legal Practices</a></li>
              <li><a href="/#industries" className="hover:text-white transition-colors">HVAC & Roofing Contractors</a></li>
              <li><a href="/#industries" className="hover:text-white transition-colors">Professional Advisory Practices</a></li>
            </ul>
          </div>

          {/* Column 4: Social Channels & Scroll Up */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Social Channels
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ink Urban LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#0F1322] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-300 hover:border-amber-400/50 transition-all text-xs font-bold"
              >
                In
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ink Urban Twitter / X"
                className="w-8 h-8 rounded-lg bg-[#0F1322] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-300 hover:border-amber-400/50 transition-all text-xs font-bold"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ink Urban Instagram"
                className="w-8 h-8 rounded-lg bg-[#0F1322] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-300 hover:border-amber-400/50 transition-all text-xs font-bold"
              >
                Ig
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ink Urban YouTube"
                className="w-8 h-8 rounded-lg bg-[#0F1322] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-300 hover:border-amber-400/50 transition-all text-xs font-bold"
              >
                Yt
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ink Urban GitHub"
                className="w-8 h-8 rounded-lg bg-[#0F1322] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-300 hover:border-amber-400/50 transition-all text-xs font-bold"
              >
                Git
              </a>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top of page"
                className="w-full p-2.5 rounded-xl bg-[#0F1322] border border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-400/50 transition-all flex items-center justify-center space-x-2 text-xs"
              >
                <span>Back To Top</span>
                <ArrowUpIcon className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Ink Urban LLP (inkurban.in). International web development & search optimization practice servicing client enterprises worldwide.
          </div>

          <div className="flex items-center space-x-6 flex-shrink-0">
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
