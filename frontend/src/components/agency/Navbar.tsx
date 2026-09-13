'use client';

import React, { useState, useEffect } from 'react';
import { CalendarIcon, Bars3Icon, XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
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

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (window.location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06070B]/95 backdrop-blur-2xl border-b border-white/[0.09] py-3.5 shadow-2xl shadow-black/60 text-white'
          : 'bg-[#06070B]/80 backdrop-blur-xl border-b border-white/[0.05] py-4 sm:py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Official Brand Logo Container */}
          <Link 
            href="/" 
            aria-label="Ink Urban LLP Home" 
            className="flex items-center group flex-shrink-0 z-10"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="logo-badge">
              <img
                src="/images/ink_logo.png"
                alt="Ink Urban LLP Logo"
                width="120"
                height="32"
                className="h-7 sm:h-8 w-auto object-contain"
              />
              <span className="text-[10px] font-extrabold tracking-wider text-[#07080C] border border-[#07080C]/20 px-1.5 py-0.5 rounded bg-slate-100" aria-label="Limited Liability Partnership">
                LLP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Desktop Navigation" className="hidden lg:flex items-center space-x-7 text-xs tracking-wider uppercase font-bold text-slate-300">
            <Link 
              href="/#services" 
              onClick={(e) => handleNavClick(e, '/#services')}
              className="hover:text-rose-400 transition-colors py-2"
            >
              Services
            </Link>
            <Link 
              href="/#industries" 
              onClick={(e) => handleNavClick(e, '/#industries')}
              className="hover:text-rose-400 transition-colors py-2"
            >
              Industries
            </Link>
            <Link 
              href="/#process" 
              onClick={(e) => handleNavClick(e, '/#process')}
              className="hover:text-rose-400 transition-colors py-2"
            >
              Process
            </Link>
            <Link href="/case-studies" className="hover:text-rose-400 transition-colors py-2">
              Case Studies
            </Link>
            <Link 
              href="/#audit-offer" 
              onClick={(e) => handleNavClick(e, '/#audit-offer')}
              className="hover:text-amber-300 transition-colors text-amber-300 font-extrabold flex items-center gap-1.5 py-2"
            >
              <span>Free Technical Audit</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold">Free</span>
            </Link>
            <Link 
              href="/#faq" 
              onClick={(e) => handleNavClick(e, '/#faq')}
              className="hover:text-rose-400 transition-colors py-2"
            >
              FAQ
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="text-xs font-semibold px-4 py-2.5 rounded-xl border border-amber-400/35 hover:border-amber-400 text-amber-200 hover:text-amber-100 bg-[#0F1322] hover:bg-amber-400/10 transition-all duration-200 cursor-pointer min-h-[42px] flex items-center shadow-md"
            >
              Request Free Audit
            </button>

            <button
              type="button"
              onClick={onOpenBookingModal}
              className="relative inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl brand-gradient-bg text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer min-h-[42px]"
            >
              <CalendarIcon className="w-4 h-4 text-white flex-shrink-0" aria-hidden="true" />
              <span>Start Your Project</span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Project CTA */}
          <div className="flex items-center space-x-2 lg:hidden z-10">
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="text-[11px] font-bold px-3 py-2 rounded-lg brand-gradient-bg text-white shadow-md shadow-rose-500/25 cursor-pointer min-h-[38px] flex items-center whitespace-nowrap"
            >
              Start Project
            </button>

            {/* Hamburger Button */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMobileMenuOpen((prev) => !prev);
              }}
              className="p-2 rounded-lg border transition-colors cursor-pointer min-h-[38px] min-w-[38px] flex items-center justify-center text-white bg-[#121624] border-slate-700 hover:bg-[#1A2035]"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Bars3Icon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Positioned directly below the header bar) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop for outside tap to close */}
          <div 
            className="fixed inset-0 top-0 bg-black/80 backdrop-blur-md z-40 lg:hidden animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Drawer Container */}
          <div 
            id="mobile-navigation-drawer"
            className="absolute top-full left-0 right-0 w-full bg-[#080A12] border-b border-slate-800/90 px-4 pt-4 pb-6 space-y-4 shadow-2xl z-50 text-white max-h-[calc(100vh-80px)] overflow-y-auto animate-slideDown"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1.5 text-xs tracking-wider uppercase font-bold text-slate-200">
              <Link
                href="/#services"
                onClick={(e) => handleNavClick(e, '/#services')}
                className="hover:text-rose-400 py-3 px-3.5 rounded-xl bg-[#0F1322]/90 border border-slate-800/80 hover:border-rose-500/40 transition-all flex items-center justify-between min-h-[48px]"
              >
                <span>Services & Capabilities</span>
                <ChevronRightIcon className="w-4 h-4 text-slate-500" aria-hidden="true" />
              </Link>

              <Link
                href="/#industries"
                onClick={(e) => handleNavClick(e, '/#industries')}
                className="hover:text-rose-400 py-3 px-3.5 rounded-xl bg-[#0F1322]/90 border border-slate-800/80 hover:border-rose-500/40 transition-all flex items-center justify-between min-h-[48px]"
              >
                <span>Target Industries</span>
                <ChevronRightIcon className="w-4 h-4 text-slate-500" aria-hidden="true" />
              </Link>

              <Link
                href="/#process"
                onClick={(e) => handleNavClick(e, '/#process')}
                className="hover:text-rose-400 py-3 px-3.5 rounded-xl bg-[#0F1322]/90 border border-slate-800/80 hover:border-rose-500/40 transition-all flex items-center justify-between min-h-[48px]"
              >
                <span>Delivery Process</span>
                <ChevronRightIcon className="w-4 h-4 text-slate-500" aria-hidden="true" />
              </Link>

              <Link
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-rose-400 py-3 px-3.5 rounded-xl bg-[#0F1322]/90 border border-slate-800/80 hover:border-rose-500/40 transition-all flex items-center justify-between min-h-[48px]"
              >
                <span>Case Studies & Benchmarks</span>
                <ChevronRightIcon className="w-4 h-4 text-slate-500" aria-hidden="true" />
              </Link>

              <Link
                href="/#audit-offer"
                onClick={(e) => handleNavClick(e, '/#audit-offer')}
                className="hover:text-rose-400 py-3 px-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-rose-500/10 border border-amber-400/30 text-amber-300 font-extrabold flex items-center justify-between min-h-[48px]"
              >
                <div className="flex items-center space-x-2">
                  <span>Free Technical Audit</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 uppercase font-bold">Free</span>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-amber-400" aria-hidden="true" />
              </Link>

              <Link
                href="/#faq"
                onClick={(e) => handleNavClick(e, '/#faq')}
                className="hover:text-rose-400 py-3 px-3.5 rounded-xl bg-[#0F1322]/90 border border-slate-800/80 hover:border-rose-500/40 transition-all flex items-center justify-between min-h-[48px]"
              >
                <span>Frequently Asked Questions</span>
                <ChevronRightIcon className="w-4 h-4 text-slate-500" aria-hidden="true" />
              </Link>
            </nav>

            <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full text-center py-3.5 rounded-xl border border-amber-400/40 text-amber-300 font-bold text-xs uppercase tracking-wider bg-amber-400/10 hover:bg-amber-400/20 transition-all cursor-pointer min-h-[48px] flex items-center justify-center shadow-lg"
              >
                Request Free Video Audit
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full text-center py-3.5 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/30 cursor-pointer min-h-[48px] flex items-center justify-center"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
