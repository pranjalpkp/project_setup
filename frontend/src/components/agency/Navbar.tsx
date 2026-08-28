'use client';

import React, { useState, useEffect } from 'react';
import { CalendarIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface NavbarProps {
  onOpenBookingModal: () => void;
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal, onOpenAuditModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-md text-slate-800'
          : 'bg-[#07080c]/80 backdrop-blur-md border-b border-slate-800/60 py-4 sm:py-5 text-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Official Brand Logo Container */}
          <a href="#" aria-label="Ink Urban LLP Home" className="flex items-center group flex-shrink-0">
            <div className="logo-badge">
              <img
                src="/images/ink_logo.png"
                alt="Ink Urban LLP Logo"
                width="120"
                height="32"
                className="h-7 sm:h-8 w-auto object-contain"
              />
              <span className="text-[10px] font-extrabold tracking-wider text-[#07080C] border border-[#07080C]/20 px-1.5 py-0.5 rounded bg-slate-100">
                LLP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className={`hidden lg:flex items-center space-x-6 text-xs tracking-wider uppercase font-bold ${isScrolled ? 'text-slate-800' : 'text-slate-200'
            }`}>
            <a href="#services" className="hover:text-rose-400 transition-colors">
              Services
            </a>
            <a href="#craftsmanship" className="hover:text-rose-400 transition-colors">
              Engineering
            </a>
            <a href="#process" className="hover:text-rose-400 transition-colors">
              Process
            </a>
            <a href="#industries" className="hover:text-rose-400 transition-colors">
              Industries
            </a>
            <Link href="/case-studies" className="hover:text-rose-400 transition-colors">
              Case Studies
            </Link>
            <a href="#audit-offer" className="hover:text-rose-400 transition-colors text-amber-300 font-extrabold flex items-center gap-1">
              <span>Website Audit</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">Free</span>
            </a>
            <a href="#faq" className="hover:text-rose-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              type="button"
              onClick={onOpenAuditModal}
              className={`text-xs font-semibold px-3.5 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${isScrolled
                  ? 'text-slate-800 border-slate-300 hover:border-rose-500 hover:bg-rose-500/10 hover:text-rose-600'
                  : 'text-slate-200 border-slate-700 hover:border-amber-400 hover:bg-amber-400/10 hover:text-amber-300'
                }`}
            >
              Request Free Audit
            </button>

            <button
              type="button"
              onClick={onOpenBookingModal}
              className="relative inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl brand-gradient-bg text-white shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <CalendarIcon className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Start Your Project</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg brand-gradient-bg text-white shadow-md shadow-rose-500/20 cursor-pointer"
            >
              Start Project
            </button>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 sm:p-2 rounded-lg border cursor-pointer ${isScrolled
                  ? 'text-slate-800 bg-slate-100 border-slate-300'
                  : 'text-slate-200 bg-[#121624] border-slate-800'
                }`}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090C16]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-fadeIn text-white">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3 text-xs tracking-wider uppercase font-bold text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-400 py-1 transition-colors"
            >
              Services
            </a>
            <a
              href="#craftsmanship"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-400 py-1 transition-colors"
            >
              Engineering
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-400 py-1 transition-colors"
            >
              Process
            </a>
            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-400 py-1 transition-colors"
            >
              Industries
            </a>
            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-400 py-1 transition-colors"
            >
              Case Studies
            </Link>
            <a
              href="#audit-offer"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-400 py-1 transition-colors text-amber-300 font-extrabold flex items-center justify-between"
            >
              <span>Website Audit</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">Free</span>
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-400 py-1 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-2 flex flex-col space-y-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full text-center py-2.5 rounded-xl border border-amber-400/40 text-amber-300 font-semibold text-xs uppercase tracking-wider bg-amber-400/5 cursor-pointer"
            >
              Request Free Video Audit
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full text-center py-3 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
