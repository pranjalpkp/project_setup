'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/agency/Navbar';
import { Footer } from '@/components/agency/Footer';
import { ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 relative overflow-hidden font-sans selection:bg-rose-500/20 selection:text-slate-900">
      <Navbar 
        onOpenBookingModal={() => window.location.href = '/#booking'}
        onOpenAuditModal={() => window.location.href = '/#audit'}
      />

      <div className="pt-36 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Breadcrumb & Header */}
        <div className="space-y-4 text-left border-b border-slate-200 pb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors">
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs font-bold uppercase tracking-wider">
            <ShieldCheckIcon className="w-4 h-4" />
            <span>Legal & Privacy Standards</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy <span className="brand-gradient-text">Policy</span>
          </h1>

          <p className="text-slate-500 text-sm">
            Last Updated: August 17, 2026 · Official Privacy Policy for Ink Urban LLP (inkurban.in)
          </p>
        </div>

        {/* Policy Body Content */}
        <div className="space-y-8 text-slate-700 text-sm leading-relaxed text-left">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-rose-600">1.</span> <span>Scope & Commitment</span>
            </h2>
            <p>
              Ink Urban LLP (&quot;Ink Urban&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to respecting and protecting the privacy of our clients, prospective clients, and website visitors across North America, Europe, the Middle East, and Asia-Pacific.
            </p>
            <p>
              This Privacy Policy details how we collect, process, store, and safeguard your personal data when you visit <strong className="text-slate-900">inkurban.in</strong>, request a technical website audit, schedule a strategy briefing, or engage our web engineering and search optimization practice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-rose-600">2.</span> <span>Information We Collect</span>
            </h2>
            <p>We only collect data necessary to provide high-tier technical engineering and search strategy services:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong className="text-slate-900">Contact & Intake Details:</strong> Name, work email address, phone number, business domain URL, practice niche, and preliminary project requirements submitted via audit request drawers or scheduling forms.</li>
              <li><strong className="text-slate-900">Technical Analytics:</strong> Browser type, device characteristics, operating system, IP address, referring domain, and interactions on our site to maintain optimal sub-second page performance.</li>
              <li><strong className="text-slate-900">Client Project Communications:</strong> Technical briefs, wireframes, asset links, and consultation notes exchanged during strategy briefings.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-rose-600">3.</span> <span>How We Use Your Data</span>
            </h2>
            <p>Your data is processed strictly for legitimate business execution:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Delivering complimentary 15-point video website teardowns and technical audits.</li>
              <li>Scheduling and conducting 1-on-1 executive strategy briefings via Google Meet or Zoom.</li>
              <li>Architecting bespoke web applications, custom CRM intake integrations, and local SEO entity schemas.</li>
              <li>Maintaining infrastructure security, preventing fraud, and guaranteeing 100/100 Core Web Vitals performance.</li>
            </ul>
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900">
              <strong>Strict Zero Reselling Guarantee:</strong> Ink Urban LLP never sells, rents, monetizes, or trades client or contact information to third-party ad brokers or data vendors.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-rose-600">4.</span> <span>Data Protection & GDPR / CCPA Compliance</span>
            </h2>
            <p>
              We implement enterprise-grade security standards including TLS 1.3 SSL encryption, edge-hosted serverless data processing, and restricted access controls compliant with international frameworks including GDPR (EU/UK) and CCPA (California).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-rose-600">5.</span> <span>Your Rights & Data Removal</span>
            </h2>
            <p>
              You maintain full rights to request access to, correction of, or permanent deletion of any personal data stored with Ink Urban LLP. To initiate a data request, email our Privacy Officer directly at <a href="mailto:inkurban.in@gmail.com" className="text-rose-600 hover:text-rose-700 underline font-semibold">inkurban.in@gmail.com</a>.
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
