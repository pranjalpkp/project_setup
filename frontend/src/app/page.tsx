'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/agency/Navbar';
import { Hero } from '@/components/agency/Hero';
import { AuditTeardown } from '@/components/agency/AuditTeardown';
import { ProblemsWeSolve } from '@/components/agency/ProblemsWeSolve';
import { Services } from '@/components/agency/Services';
import { Industries } from '@/components/agency/Industries';
import { Process } from '@/components/agency/Process';
import { CaseStudies } from '@/components/agency/CaseStudies';
import { FreeAuditOffer } from '@/components/agency/FreeAuditOffer';
import { AboutUs } from '@/components/agency/AboutUs';
import { FAQ } from '@/components/agency/FAQ';
import { Footer } from '@/components/agency/Footer';
import { BookingModal } from '@/components/agency/BookingModal';
import { AuditModal } from '@/components/agency/AuditModal';

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07080C] text-slate-100 relative overflow-hidden font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Interactive Website Audit & Teardown Section */}
      <AuditTeardown 
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Problems Ink Urban Solves */}
      <ProblemsWeSolve />

      {/* Services & Capabilities */}
      <Services 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* High-Ticket Target Industries */}
      <Industries 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Proven 4-Step Process */}
      <Process 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Case Studies & Empirical Benchmarks */}
      <CaseStudies 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Free Audit High-Converting Offer */}
      <FreeAuditOffer 
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* About Ink Urban LLP */}
      <AboutUs />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Comprehensive Footer */}
      <Footer 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <AuditModal 
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </main>
  );
}
