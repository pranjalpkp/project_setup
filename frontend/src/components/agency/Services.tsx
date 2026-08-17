'use client';

import React from 'react';
import { 
  CodeBracketIcon, 
  ChartPieIcon, 
  MagnifyingGlassCircleIcon, 
  CpuChipIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface ServicesProps {
  onOpenBookingModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBookingModal }) => {
  const services = [
    {
      icon: SparklesIcon,
      title: "Agentic AI & Intelligent Automation",
      subtitle: "Autonomous AI Agents & Multi-Agent Workflows",
      description: "We design and deploy goal-driven Agentic AI systems that handle complex enterprise workflows, automated client intake, and intelligent reasoning.",
      deliverables: [
        "Multi-agent task orchestration & tool integrations",
        "Domain-specific RAG (Retrieval-Augmented Generation) knowledge bases",
        "Autonomous 24/7 AI client consultation & qualification bots",
        "Enterprise observability, logging & security guardrails"
      ]
    },
    {
      icon: CodeBracketIcon,
      title: "Custom Web Architecture",
      subtitle: "Bespoke High-Performance Web Applications",
      description: "We build custom, high-performance web applications tailored to your practice identity. Built on clean modular code with zero fragile templates.",
      deliverables: [
        "Core Web Vitals performance optimization score (95-100)",
        "Tailored visual brand presentation and editorial UX",
        "Full cross-device mobile and desktop responsiveness",
        "Seamless CRM, intake, and scheduling integration"
      ]
    },
    {
      icon: ChartPieIcon,
      title: "Conversion Rate Optimization (CRO)",
      subtitle: "Streamlined Intake & Lead Funnels",
      description: "We structure clear user pathways, value-driven copywriting, and friction-free consultation intake drawers to convert site visitors into inquiries.",
      deliverables: [
        "Intuitive consultation booking drawers & intake forms",
        "Strategic messaging and value proposition copywriting",
        "Frictionless client onboarding pathways",
        "Conversion analytics and user engagement tracking"
      ]
    },
    {
      icon: MagnifyingGlassCircleIcon,
      title: "Local & International SEO Growth",
      subtitle: "Search Engine Authority & Local Dominance",
      description: "We position your practice at the top of Google Maps and organic search results for high-intent queries across your key geographic regions.",
      deliverables: [
        "Google Business Profile & Local Map Pack optimization",
        "Targeted regional keyword strategy & content alignment",
        "Advanced JSON-LD structured entity schema integration",
        "Strategic local citations & authority backlink building"
      ]
    },
    {
      icon: CpuChipIcon,
      title: "Speed & Infrastructure Engineering",
      subtitle: "Sub-Second Global Edge & Cybersecurity",
      description: "We deploy web assets on global CDN edge networks with enterprise TLS encryption, asset compression, and automated security monitoring.",
      deliverables: [
        "Sub-second (Under 0.8s) initial page load speeds worldwide",
        "Automated backups and uptime monitoring",
        "Zero-Trust cybersecurity & compliance",
        "Continuous performance maintenance & optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Engineering Solutions For <span className="brand-gradient-text">AI, Search & Revenue Growth</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Every solution we deliver focuses on technical excellence, strategic positioning, and measurable client acquisition.
          </p>
        </div>

        {/* Services Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl glass-panel border border-slate-200 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-600 group-hover:text-amber-600 transition-colors">
                      <Icon className="w-6 h-6 flex-shrink-0" />
                    </div>
                    <span className="text-xs font-semibold text-rose-600 tracking-wider uppercase px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                      0{idx + 1} SERVICE
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-slate-200 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircleIcon className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={onOpenBookingModal}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-rose-600 transition-colors"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRightIcon className="w-4 h-4 text-amber-600" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
