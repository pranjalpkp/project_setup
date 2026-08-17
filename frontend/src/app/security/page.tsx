'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/agency/Navbar';
import { Footer } from '@/components/agency/Footer';
import { LockClosedIcon, ShieldCheckIcon, CpuChipIcon, BoltIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function SecurityOverviewPage() {
  return (
    <main className="min-h-screen bg-[#07080C] text-slate-100 relative overflow-hidden font-sans selection:bg-rose-500/30 selection:text-white">
      <Navbar 
        onOpenBookingModal={() => window.location.href = '/#booking'}
        onOpenAuditModal={() => window.location.href = '/#audit'}
      />

      <div className="pt-36 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Breadcrumb & Header */}
        <div className="space-y-4 text-left border-b border-slate-800 pb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold text-rose-400 hover:text-amber-300 transition-colors">
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <LockClosedIcon className="w-4 h-4" />
            <span>Enterprise Infrastructure Security</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Security <span className="brand-gradient-text">Overview</span>
          </h1>

          <p className="text-slate-400 text-sm">
            Technical Architecture Security & Confidentiality Framework · Ink Urban LLP (inkurban.in)
          </p>
        </div>

        {/* Security Overview Body Content */}
        <div className="space-y-8 text-slate-300 text-sm leading-relaxed text-left">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <span className="text-rose-400">1.</span> <span>Zero WordPress Vulnerability Architecture</span>
            </h2>
            <p>
              Traditional CMS platforms like WordPress account for over 90% of web application security breaches worldwide due to vulnerable third-party plugins, outdated PHP runtimes, and exposed database admin paths.
            </p>
            <div className="p-4 rounded-xl bg-[#090C16] border border-rose-500/30 text-xs text-slate-200 space-y-2">
              <div className="font-bold text-rose-400 flex items-center space-x-1.5">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>Modern Jamstack & Next.js Security Standard</span>
              </div>
              <p className="text-slate-300">
                Ink Urban architects custom web platforms using pre-compiled Next.js SSR and static page generation. Because there is no exposed SQL database or WordPress admin dashboard for hackers to target, client sites are inherently immune to standard database injection and brute-force plugin exploits.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <span className="text-rose-400">2.</span> <span>Global Edge Infrastructure & Encryption</span>
            </h2>
            <p>We deploy client web applications on enterprise global CDN edge networks equipped with:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong className="text-white">TLS 1.3 & SSL Encryption:</strong> 256-bit automated SSL certificates enforcing end-to-end HTTPS communication worldwide.</li>
              <li><strong className="text-white">DDoS & Layer 7 Protection:</strong> Automated edge mitigation against Distributed Denial-of-Service attacks and malicious bot traffic.</li>
              <li><strong className="text-white">Global Edge Node CDN:</strong> Sub-second global asset delivery with automated failover and 99.99% infrastructure uptime SLAs.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <span className="text-rose-400">3.</span> <span>Data Confidentiality & Consultation Security</span>
            </h2>
            <p>
              All technical audit teardowns, preliminary intake forms, and strategic client briefs are stored in encrypted environments. We routinely execute Non-Disclosure Agreements (NDAs) with medical practices, law firms, and commercial service enterprises prior to project commencement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <span className="text-rose-400">4.</span> <span>Security Inquiries</span>
            </h2>
            <p>
              For security compliance questions or infrastructure disclosures, contact Ink Urban LLP technical directors at <a href="mailto:inkurban.in@gmail.com" className="text-amber-300 hover:text-white underline font-semibold">inkurban.in@gmail.com</a>.
            </p>
          </section>

        </div>

      </div>

      <Footer 
        onOpenBookingModal={() => window.location.href = '/#booking'}
        onOpenAuditModal={() => window.location.href = '/#audit'}
      />
    </main>
  );
}
