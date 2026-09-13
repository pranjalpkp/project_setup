'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/agency/Navbar';
import { Hero } from '@/components/agency/Hero';
import { AuditTeardown } from '@/components/agency/AuditTeardown';
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
    <main className="min-h-screen bg-[#06070B] text-slate-100 relative overflow-hidden font-sans selection:bg-rose-500/20 selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Hero with Live Interactive Agency Console */}
      <Hero 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Interactive Performance & Architecture Diagnostic Lab */}
      <AuditTeardown 
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* 3-Pillar Visual Bento Grid */}
      <Services 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Interactive Target Industries Dashboard */}
      <Industries 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Visual Sprint Roadmap & Timeline */}
      <Process 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Case Studies & Empirical Benchmarks */}
      <CaseStudies 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Free Audit Command Center Offer */}
      <FreeAuditOffer 
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* About Senior Engineering Practice */}
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
