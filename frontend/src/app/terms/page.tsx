'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/agency/Navbar';
import { Footer } from '@/components/agency/Footer';
import { DocumentTextIcon, CheckBadgeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function TermsOfServicePage() {
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
            <DocumentTextIcon className="w-4 h-4" />
            <span>Client Service Framework</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Terms of <span className="brand-gradient-text">Service</span>
          </h1>

          <p className="text-slate-500 text-sm">
            Last Updated: August 17, 2026 · Official Terms of Service for Ink Urban LLP (inkurban.in)
          </p>
        </div>

        {/* Terms Body Content */}
        <div className="space-y-8 text-slate-700 text-sm leading-relaxed text-left">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-rose-600">1.</span> <span>Engagement & Scope of Services</span>
            </h2>
            <p>
              These Terms of Service govern all website engineering, conversion rate optimization (CRO), search engine positioning, and technical audit services provided by <strong className="text-slate-900">Ink Urban LLP</strong> (&quot;Agency&quot;) to client enterprises (&quot;Client&quot;).
            </p>
            <p>
              By scheduling a strategy session, requesting a website audit, or executing a project statement of work, Client agrees to be bound by these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-rose-600">2.</span> <span>100% Client Code & Asset Ownership</span>
            </h2>
            <p>
              We believe in total transparency and zero vendor lock-in traps:
            </p>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-slate-800 space-y-2">
              <div className="font-bold text-emerald-700 flex items-center space-x-1.5">
                <CheckBadgeIcon className="w-4 h-4" />
                <span>Full Intellectual Property Transfer</span>
              </div>
              <p className="text-slate-700">
                Upon completion of agreed project milestones and full settlement of fees, Client receives 100% full, exclusive ownership of all custom web application source code, design components, media assets, analytics configurations, and deployment credentials.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-rose-600">3.</span> <span>Performance Benchmarks & Deliverables</span>
            </h2>
            <p>Ink Urban LLP commits to technical excellence across all client deployments:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong className="text-slate-900">Sub-Second Speed Target:</strong> Engineering custom web application builds targeting sub-second page loads (Under 0.8s FCP) and 95-100 Google Lighthouse Core Web Vitals scores.</li>
              <li><strong className="text-slate-900">Clean Code Guarantee:</strong> 100% bespoke modular architecture built with modern Jamstack standards — zero fragile, bloated third-party template plugins.</li>
              <li><strong className="text-slate-900">Structured Search Engine Entity Schema:</strong> Deploying JSON-LD structured data schemas for Google Map Pack & Local Search optimization.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-rose-600">4.</span> <span>Payment Terms & Project Milestones</span>
            </h2>
            <p>
              Project engagements are structured around clear milestone deliverables defined in individual Statements of Work. Deposits and milestone payments are non-refundable once technical discovery, wireframing, or engineering phases commence.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-rose-600">5.</span> <span>Governing Law & Contact</span>
            </h2>
            <p>
              For legal inquiries regarding client agreements or terms, contact Ink Urban LLP executive leadership directly at <a href="mailto:inkurban.in@gmail.com" className="text-rose-600 hover:text-rose-700 underline font-semibold">inkurban.in@gmail.com</a>.
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
