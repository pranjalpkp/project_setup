'use client';

import React from 'react';
import { 
  CodeBracketIcon, 
  GlobeAltIcon,
  SparklesIcon, 
  ArrowRightIcon,
  ServerStackIcon,
  DocumentMagnifyingGlassIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';

interface ServicesProps {
  onOpenBookingModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBookingModal }) => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: "Custom Web Apps & SaaS",
      description: "Full-stack web applications, interactive dashboards, and client portals built with clean Next.js 15 and custom APIs.",
      tags: ["Next.js 15", "React 19", "Custom APIs"]
    },
    {
      icon: GlobeAltIcon,
      title: "Enterprise Web Platforms",
      description: "High-performance brand platforms with bespoke editorial UI/UX, headless CMS, and sub-second global edge delivery.",
      tags: ["99+ Core Vitals", "Editorial UX", "Headless CMS"]
    },
    {
      icon: PaintBrushIcon,
      title: "UI/UX Design Systems",
      description: "Custom Figma component libraries, interactive prototypes, and high-converting 2-click booking flows.",
      tags: ["Figma Design", "CRO Funnels", "Prototypes"]
    },
    {
      icon: ServerStackIcon,
      title: "Full-Stack APIs & Cloud Edge",
      description: "Scalable Spring Boot & Node.js backend microservices, relational PostgreSQL databases, and zero-trust security.",
      tags: ["PostgreSQL", "Cloudflare Edge", "OWASP Hardened"]
    },
    {
      icon: DocumentMagnifyingGlassIcon,
      title: "Technical Web Audits",
      description: "15-point deep-dive diagnostic inspection of speed bottlenecks, code debt, security, and conversion leaks.",
      tags: ["Speed Vitals", "Security Review", "Code Debt"]
    },
    {
      icon: SparklesIcon,
      title: "Agentic AI & Automation",
      description: "Autonomous AI qualification bots, custom RAG knowledge bases, and multi-agent workflow automation.",
      tags: ["AI Intake Bots", "RAG Search", "Workflows"]
    }
  ];

  return (
    <section id="services" className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-600 text-xs font-semibold uppercase tracking-wider">
            <CodeBracketIcon className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
            Engineered For <span className="brand-gradient-text-light">Speed, Scale & Revenue</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From custom web applications to diagnostic code audits — we deliver clean, high-performance digital platforms.
          </p>
        </div>

        {/* Compact Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-rose-400/70 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-600 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={onOpenBookingModal}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
                  >
                    <span>Discuss Scope</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 text-rose-600" />
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
