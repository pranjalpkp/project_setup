'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { EnvelopeIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

interface FooterProps {
  onOpenBookingModal?: () => void;
  onOpenAuditModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBookingModal,
  onOpenAuditModal
}) => {
  const router = useRouter();

  const handleBooking = () => {
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      router.push('/#booking');
    }
  };

  const handleAudit = () => {
    if (onOpenAuditModal) {
      onOpenAuditModal();
    } else {
      router.push('/#audit');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060A] text-slate-300 border-t border-slate-800/80 relative pt-10 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Top Footer Call-To-Action Banner */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel-dark-brand border border-rose-500/30 flex flex-col md:flex-row items-center justify-between gap-5 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Ready To Engineer Custom Software, Scale Growth, or <span className="brand-gradient-text">Automate with AI?</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg">
              Schedule a 30-minute discovery briefing or request a complimentary technical, growth & AI diagnostic audit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto flex-shrink-0">
            <button
              type="button"
              onClick={handleAudit}
              className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl border border-amber-400/40 text-amber-200 font-semibold text-xs uppercase tracking-wider hover:bg-amber-400/10 transition-all cursor-pointer"
            >
              Request Free Audit
            </button>
            <button
              type="button"
              onClick={handleBooking}
              className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 hover:scale-102 transition-all cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pt-6 text-left">

          {/* Column 1: Brand Info & Agency Practice */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <Link href="/" aria-label="Ink Urban LLP Home" className="logo-badge">
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
              </Link>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Ink Urban LLP is a full-cycle digital innovation agency architecting custom software, SaaS platforms, high-converting growth funnels, and autonomous AI & Machine Learning automations worldwide.
            </p>

            <div className="space-y-1.5 text-xs text-slate-200">
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-4 h-4 text-rose-400 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:inkurban.in@gmail.com" className="hover:text-rose-300 font-semibold">
                  inkurban.in@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.298 0-7.79 3.491-7.79 7.788 0 1.492.423 2.889 1.157 4.081l-1.398 5.111 5.251-1.377c1.139.67 2.457 1.055 3.866 1.055 4.299 0 7.79-3.492 7.79-7.789 0-4.297-3.491-7.788-7.79-7.788zm0 14.137c-1.231 0-2.385-.36-3.354-.98l-.24-.153-2.483.651.663-2.42-.157-.249c-.689-1.096-1.054-2.368-1.054-3.676 0-3.626 2.951-6.577 6.578-6.577 3.626 0 6.577 2.951 6.577 6.577 0 3.626-2.951 6.577-6.577 6.577z"/>
                </svg>
                <a 
                  href="https://wa.me/918340123740" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 font-semibold transition-colors"
                >
                  WhatsApp: +91 83401 23740
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Capabilities Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">
              Agency Capabilities
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/#services" className="hover:text-white transition-colors">Custom Web Apps & SaaS</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Cloud Microservices & APIs</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">CRO & Funnel Optimization</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Programmatic SEO & Authority</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Autonomous Multi-Agent AI</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Predictive ML & Decision Models</Link></li>
            </ul>
          </div>

          {/* Column 3: Agency & Process Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">
              Agency & Process
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/#about" className="hover:text-white transition-colors">About Ink Urban</Link></li>
              <li><Link href="/#craftsmanship" className="hover:text-white transition-colors">Integrated Engineering</Link></li>
              <li><Link href="/#process" className="hover:text-white transition-colors">4-Stage Sprint Lifecycle</Link></li>
              <li><Link href="/#industries" className="hover:text-white transition-colors">Industry Sectors</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies & Benchmarks</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Channels & Scroll Up */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">
              Social Channels
            </h3>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/inkurban/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ink Urban LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#0F1322] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 transition-all shadow-md"
                title="Ink Urban LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0-.01-2.8 1.4 1.4 0 0 0 .01 2.8m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/inkurban.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ink Urban Instagram"
                className="w-9 h-9 rounded-xl bg-[#0F1322] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#E4405F] hover:border-[#E4405F]/60 hover:bg-[#E4405F]/10 transition-all shadow-md"
                title="Ink Urban Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/918340123740"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ink Urban WhatsApp"
                className="w-9 h-9 rounded-xl bg-[#0F1322] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400/60 hover:bg-emerald-400/10 transition-all shadow-md"
                title="Ink Urban WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.298 0-7.79 3.491-7.79 7.788 0 1.492.423 2.889 1.157 4.081l-1.398 5.111 5.251-1.377c1.139.67 2.457 1.055 3.866 1.055 4.299 0 7.79-3.492 7.79-7.789 0-4.297-3.491-7.788-7.79-7.788zm0 14.137c-1.231 0-2.385-.36-3.354-.98l-.24-.153-2.483.651.663-2.42-.157-.249c-.689-1.096-1.054-2.368-1.054-3.676 0-3.626 2.951-6.577 6.578-6.577 3.626 0 6.577 2.951 6.577 6.577 0 3.626-2.951 6.577-6.577 6.577z"/>
                </svg>
              </a>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top of page"
                className="w-full p-2.5 rounded-xl bg-[#0F1322] border border-slate-800 text-slate-300 hover:text-rose-300 hover:border-rose-400/50 transition-all flex items-center justify-center space-x-2 text-xs cursor-pointer"
              >
                <span>Back To Top</span>
                <ArrowUpIcon className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} INK URBAN LLP (inkurban.in) • All Rights Reserved
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 flex-shrink-0">
            <Link href="/privacy" className="hover:text-rose-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-rose-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-rose-300 transition-colors">
              Security Overview
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
