'use client';

import React from 'react';
import { 
  MagnifyingGlassIcon, 
  MapIcon, 
  CodeBracketSquareIcon, 
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface ProcessProps {
  onOpenBookingModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenBookingModal }) => {
  const sprintStages = [
    {
      sprint: "Phase 01",
      timeline: "Week 1",
      icon: MagnifyingGlassIcon,
      title: "Discovery & Blueprint",
      deliverable: "Architecture Spec & Milestone Roadmap",
      tags: ["Technical Requirements Deep-Dive", "Tech Debt & Feasibility Audit", "Sprint Delivery Milestones"]
    },
    {
      sprint: "Phase 02",
      timeline: "Weeks 2–3",
      icon: MapIcon,
      title: "UX Design & System Schema",
      deliverable: "Interactive Prototypes & Database Models",
      tags: ["Figma Component Design Tokens", "PostgreSQL & API Contracts", "AI Pipeline & Vector Topologies"]
    },
    {
      sprint: "Phase 03",
      timeline: "Weeks 4–6",
      icon: CodeBracketSquareIcon,
      title: "Agile Build & Testing",
      deliverable: "Bi-Weekly Production Staging Demos",
      tags: ["Next.js 15 & Spring Boot Builds", "AI Agent & RAG Tuning", "Automated CI/CD Test Coverage"]
    },
    {
      sprint: "Phase 04",
      timeline: "Week 7+",
      icon: RocketLaunchIcon,
      title: "Production Launch & Handover",
      deliverable: "100% Repository & IP Transfer",
      tags: ["Zero-Downtime Edge Deployment", "Enterprise Security Hardening", "Post-Launch Scaling Support"]
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-[#07090F] border-t border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider shadow-lg">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Client Engagement Model</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Predictable Execution. <span className="brand-gradient-text">Transparent Partnership.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From initial technical blueprint to production deployment, work directly with senior architects with bi-weekly demos, clear milestones, and zero surprises.
          </p>
        </div>

        {/* Visual Sprint Timeline Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sprintStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-[#090C16] border border-slate-800 hover:border-rose-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  
                  {/* Timeline Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-amber-400 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 uppercase">
                      {stage.sprint}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">{stage.timeline}</span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-all shadow-md">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                      {stage.title}
                    </h3>
                    <div className="text-xs font-semibold text-rose-300 mt-1 flex items-center space-x-1">
                      <CheckBadgeIcon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{stage.deliverable}</span>
                    </div>
                  </div>

                  {/* Micro Tags */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {stage.tags.map((tag, tIdx) => (
                      <div key={tIdx} className="text-[11px] text-slate-400 flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/60 inline-block"></span>
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-2">
                  <div className="w-full h-1 rounded-full bg-[#14192A] overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full" 
                      style={{ width: `${(idx + 1) * 25}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onOpenBookingModal}
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl brand-gradient-bg text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-rose-500/25 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Schedule Project Discovery Call</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

