'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  MapIcon, 
  CodeBracketSquareIcon, 
  RocketLaunchIcon,
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface ProcessProps {
  onOpenBookingModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenBookingModal }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      label: "Audit",
      icon: MagnifyingGlassIcon,
      title: "Technical Audit & Discovery",
      tagline: "Performance & Conversion Diagnosis",
      badge: "15-Point Video Teardown",
      metric: "Lighthouse Benchmark",
      description: "We analyze your current site performance, mobile UX bottlenecks, messaging clarity, and search engine positioning.",
      deliverables: [
        "Comprehensive conversion & UX diagnostic report",
        "Competitor search gap analysis in target postcodes",
        "Core Web Vitals diagnostic benchmark"
      ]
    },
    {
      number: "02",
      label: "Strategy",
      icon: MapIcon,
      title: "UX Architecture & Strategy",
      tagline: "Designing Your Digital Blueprint",
      badge: "Conversion Copywriting",
      metric: "Bespoke Figma UI",
      description: "We map out high-converting page structures, craft strategic value-driven copy, and design luxury UI wireframes tailored to your practice.",
      deliverables: [
        "Bespoke UX copywriting & messaging framework",
        "Interactive desktop & mobile visual wireframes",
        "Target search intent & keyword mapping"
      ]
    },
    {
      number: "03",
      label: "Build",
      icon: CodeBracketSquareIcon,
      title: "Custom Web Engineering",
      tagline: "Bespoke Code & Sub-Second Speeds",
      badge: "< 0.8s Load Speed",
      metric: "99/100 Core Web Vitals",
      description: "We engineer your application using clean modular architecture. Zero heavy page builders or bloated third-party plugins.",
      deliverables: [
        "Core Web Vitals speed optimization (95-100 score)",
        "Intuitive consultation booking drawers & forms",
        "CRM & scheduling tool integration"
      ]
    },
    {
      number: "04",
      label: "Optimize",
      icon: RocketLaunchIcon,
      title: "Search Launch & Optimization",
      tagline: "Search Positioning & Growth Monitoring",
      badge: "Google Map Pack Top 3",
      metric: "Structured JSON-LD",
      description: "We deploy structured entity schemas, launch local Google Business Profile optimizations, and monitor conversion analytics continuously.",
      deliverables: [
        "Google Map Pack & structured entity schema launch",
        "Conversion tracking & analytics setup",
        "Continuous security & performance monitoring"
      ]
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-rose-500/5 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-600 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
            </span>
            <span>Predictable 4-Stage Agency Execution</span>
          </div>

          <h2 className="font-heading text-[clamp(0.92rem,3.6vw,3rem)] font-extrabold whitespace-nowrap tracking-tight">
            <span className="brand-gradient-text-light">Audit → Strategy → Build → Optimize</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            A structured, predictable execution process. We handle technical engineering, strategic copywriting, and search optimization from start to finish.
          </p>
        </div>

        {/* Infographic Animated Data Transfer Pipeline Track (Desktop & Tablet) */}
        <div className="mt-12 max-w-5xl mx-auto hidden md:block">
          <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 backdrop-blur-xl overflow-hidden">
            
            {/* Pipeline Stage Track Area */}
            <div className="relative">
              
              {/* SVG Conduit Pipe & Live Animated Data Transfer Packets */}
              <svg 
                className="absolute top-0 left-0 w-full h-16 pointer-events-none z-0"
                aria-hidden="true"
              >
                <defs>
                  {/* Glowing Laser Filter */}
                  <filter id="pipeGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Shimmering Conduit Gradients */}
                  <linearGradient id="pipeConduitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.4" />
                  </linearGradient>

                  <linearGradient id="activePipeFill" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E11D48" />
                    <stop offset="60%" stopColor="#F43F5E" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>

                  <linearGradient id="cometTailRose" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F43F5E" stopOpacity="0" />
                    <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.9" />
                  </linearGradient>

                  <linearGradient id="cometTailAmber" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* 1. Structural Outer Conduit Channel */}
                <line
                  x1="12.5%"
                  y1="50%"
                  x2="87.5%"
                  y2="50%"
                  stroke="rgba(244, 63, 94, 0.12)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />

                {/* 2. Precision Inner Base Pipe Rail */}
                <line
                  x1="12.5%"
                  y1="50%"
                  x2="87.5%"
                  y2="50%"
                  stroke="#E2E8F0"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* 3. High-Speed Flowing Data Fiber Stream (Continuous Animated Motion) */}
                <motion.line
                  x1="12.5%"
                  y1="50%"
                  x2="87.5%"
                  y2="50%"
                  stroke="url(#pipeConduitGradient)"
                  strokeWidth="3.5"
                  strokeDasharray="10 16"
                  strokeLinecap="round"
                  animate={{ strokeDashoffset: [52, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                />

                {/* 4. Active Progress Fill Line (Spring physics to active node) */}
                <motion.line
                  x1="12.5%"
                  y1="50%"
                  animate={{
                    x2: activeStep === null ? "12.5%" : `${12.5 + activeStep * 25}%`
                  }}
                  y2="50%"
                  stroke="url(#activePipeFill)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#pipeGlow)"
                  transition={{ type: "spring", stiffness: 140, damping: 22 }}
                />

                {/* 5. Animated Data Packet Alpha (Rose Telemetry Photon) */}
                <motion.circle
                  cy="50%"
                  r="5"
                  fill="#F43F5E"
                  filter="url(#pipeGlow)"
                  animate={{ cx: ["12.5%", "87.5%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* 6. Animated Data Packet Beta (Amber Strategy Payload) */}
                <motion.circle
                  cy="50%"
                  r="4.5"
                  fill="#F59E0B"
                  filter="url(#pipeGlow)"
                  animate={{ cx: ["12.5%", "87.5%"] }}
                  transition={{
                    duration: 3,
                    delay: 1,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* 7. Animated Data Packet Gamma (White Laser Photon) */}
                <motion.circle
                  cy="50%"
                  r="3.5"
                  fill="#FFFFFF"
                  filter="url(#pipeGlow)"
                  animate={{ cx: ["12.5%", "87.5%"] }}
                  transition={{
                    duration: 3,
                    delay: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* 8. Concentric Radar Ripples on Active/Hovered Node Junction */}
                {activeStep !== null && (
                  <motion.circle
                    cx={`${12.5 + activeStep * 25}%`}
                    cy="50%"
                    r="24"
                    fill="none"
                    stroke="#F43F5E"
                    strokeWidth="2"
                    filter="url(#pipeGlow)"
                    animate={{ r: [18, 32, 18], opacity: [0.9, 0, 0.9] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </svg>

              {/* 4 Interactive Stage Nodes in Exact Mathematical Columns */}
              <div className="relative z-10 grid grid-cols-4 gap-4">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isSelected = activeStep === idx;
                  const isPassed = activeStep !== null && idx <= activeStep;

                  return (
                    <div key={idx} className="flex flex-col items-center text-center">
                      {/* Medallion Row (h-16 matching SVG cy 50% dead center) */}
                      <div className="h-16 flex items-center justify-center">
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.08, y: -2 }}
                          whileTap={{ scale: 0.94 }}
                          onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                          onMouseEnter={() => setActiveStep(idx)}
                          onMouseLeave={() => setActiveStep(null)}
                          className="relative cursor-pointer focus:outline-none"
                        >
                          {/* Pulsing ambient halo when selected */}
                          {isSelected && (
                            <motion.div
                              className="absolute -inset-1.5 rounded-2xl bg-rose-500/25 blur-md pointer-events-none"
                              animate={{ opacity: [0.5, 0.9, 0.5] }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                            />
                          )}

                          {/* Node Medallion */}
                          <div 
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                              isSelected
                                ? 'brand-gradient-bg text-white shadow-xl shadow-rose-500/40 ring-4 ring-rose-500/20'
                                : isPassed
                                ? 'bg-rose-50 border-2 border-rose-500 text-rose-600 shadow-md'
                                : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-rose-400 hover:text-rose-600 shadow-sm'
                            }`}
                          >
                            <Icon className="w-6 h-6 flex-shrink-0" />
                          </div>
                        </motion.button>
                      </div>

                      {/* Stage Name & Details Below */}
                      <div className="pt-2 space-y-0.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Stage {step.number}
                        </span>
                        <h4 className={`text-base font-extrabold transition-colors ${
                          isSelected ? 'text-rose-600' : 'text-slate-900'
                        }`}>
                          {step.label}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-medium max-w-[150px] mx-auto leading-tight">
                          {step.tagline}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

        {/* Timeline Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHighlighted = activeStep === idx;
            return (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 space-y-5 flex flex-col justify-between group relative overflow-hidden ${
                  isHighlighted 
                    ? 'bg-white border-2 border-rose-500/80 shadow-2xl shadow-rose-500/15 -translate-y-2 ring-4 ring-rose-500/10' 
                    : 'bg-white/95 border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 shadow-sm'
                }`}
              >
                {/* Top Glowing Color Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                  isHighlighted 
                    ? 'bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500' 
                    : 'bg-transparent group-hover:bg-gradient-to-r group-hover:from-rose-500/50 group-hover:to-amber-400/50'
                }`} />

                <div className="space-y-4">
                  {/* Step Number & Infographic Badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl font-extrabold text-amber-600">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md bg-rose-50 text-rose-600 border border-rose-200/60">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon & Milestone Tagline */}
                  <div className="flex items-center space-x-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHighlighted
                        ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 scale-110'
                        : 'bg-amber-500/10 border border-amber-500/30 text-amber-600 group-hover:scale-105'
                    }`}>
                      <Icon className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <span className="text-xs font-semibold text-amber-700 flex items-center space-x-1">
                      <SparklesIcon className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span>{step.tagline}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Key Deliverables:
                    </div>
                    {step.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start space-x-2 text-[11px] text-slate-700">
                        <CheckIcon className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">{step.metric}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-14 text-center space-y-3 max-w-md sm:max-w-none mx-auto">
          <button
            type="button"
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Start Step 1: Book Strategy Audit</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
          <p className="text-xs text-slate-600">
            No long-term contracts. Transparent milestone-based deployment.
          </p>
        </div>

      </div>
    </section>
  );
};
