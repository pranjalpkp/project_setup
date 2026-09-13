'use client';

import React from 'react';
import { 
  CodeBracketIcon, 
  ArrowTrendingUpIcon, 
  CpuChipIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface ServicesProps {
  onOpenBookingModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBookingModal }) => {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'item': {
          '@type': 'Service',
          'name': 'Custom Software Development & Cloud Microservices',
          'description': 'Full-stack Next.js 15, Spring Boot microservices, and high-performance cloud APIs.',
          'provider': { '@type': 'ProfessionalService', 'name': 'Ink Urban LLP' }
        }
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'item': {
          '@type': 'Service',
          'name': 'Growth Engineering & Conversion Rate Optimization (CRO)',
          'description': 'High-converting UI/UX, programmatic SEO entity graphs, and performance marketing funnels.',
          'provider': { '@type': 'ProfessionalService', 'name': 'Ink Urban LLP' }
        }
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'item': {
          '@type': 'Service',
          'name': 'Autonomous AI & Machine Learning Automation',
          'description': 'Multi-agent autonomous workflows, custom predictive models, and enterprise LLM fine-tuning.',
          'provider': { '@type': 'ProfessionalService', 'name': 'Ink Urban LLP' }
        }
      }
    ]
  };

  return (
    <section 
      id="services" 
      aria-labelledby="services-heading"
      className="py-16 sm:py-20 bg-[#06070B] relative border-t border-slate-800"
    >
      {/* Schema.org Services ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider shadow-lg">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>End-to-End Capabilities</span>
          </div>

          <h2 id="services-heading" className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering, Growth & AI. <span className="brand-gradient-text">Built for Scale.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We partner with fast-growing teams to build production-grade web applications, capture high-intent organic search demand, and deploy intelligent AI automation.
          </p>
        </div>

        {/* 3 High-Impact Visual Bento Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Bento Card 1: Custom Software Engineering */}
          <article className="p-5 sm:p-6 rounded-3xl bg-[#090C16] border border-rose-500/30 hover:border-rose-500/60 shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5 group">
            <div className="space-y-4">
              
              {/* 3D Visual Header Banner */}
              <div className="relative h-40 rounded-2xl overflow-hidden border border-rose-500/20">
                <img
                  src="/images/hero_ai_cloud.jpg"
                  alt="Custom Web and Cloud Architecture by Ink Urban"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C16] via-transparent to-black/30"></div>
                <div className="absolute top-2.5 left-2.5 flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-[#090C16]/85 border border-rose-500/30 backdrop-blur-md text-[10px] font-bold text-rose-300">
                  <CodeBracketIcon className="w-3.5 h-3.5 text-rose-400" />
                  <span>Next.js 15 & Spring Boot</span>
                </div>
                <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#090C16]/85 text-rose-300 border border-rose-500/30 backdrop-blur-md uppercase font-mono">
                  Software
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  Custom Web & Cloud Platforms
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  High-throughput web applications, multi-tenant SaaS platforms, and distributed microservices engineered for sub-second global speed.
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="p-3.5 rounded-xl bg-[#05070D] border border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Full-Stack Web & SaaS Engineering (React 19 & Next.js)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Scalable Backend APIs & Microservices (Spring Boot & Python)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Repository & Intellectual Property Transfer</span>
                </div>
              </div>

              {/* Micro Tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {['Next.js 15', 'React 19', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'].map((tag, idx) => (
                  <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#101424] border border-slate-800 text-slate-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            <div className="pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="w-full py-2.5 rounded-xl bg-[#121626] hover:bg-[#1A2035] border border-slate-700 hover:border-rose-500/40 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer min-h-[42px]"
              >
                <span>Scope Web Development</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-rose-400" />
              </button>
            </div>
          </article>

          {/* Bento Card 2: Growth & CRO Engineering */}
          <article className="p-5 sm:p-6 rounded-3xl bg-[#090C16] border border-amber-500/30 hover:border-amber-500/60 shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5 group">
            <div className="space-y-4">
              
              {/* 3D Visual Header Banner */}
              <div className="relative h-40 rounded-2xl overflow-hidden border border-amber-500/20">
                <img
                  src="/images/cro_growth_engine.jpg"
                  alt="Growth Engineering and Conversion Rate Optimization by Ink Urban"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C16] via-transparent to-black/30"></div>
                <div className="absolute top-2.5 left-2.5 flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-[#090C16]/85 border border-amber-500/30 backdrop-blur-md text-[10px] font-bold text-amber-300">
                  <ArrowTrendingUpIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>+3.4x Conversion Lift</span>
                </div>
                <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#090C16]/85 text-amber-300 border border-amber-500/30 backdrop-blur-md uppercase font-mono">
                  Growth
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  Growth Marketing & Programmatic SEO
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Data-driven conversion funnels, programmatic organic search architectures, and analytics pipelines designed to capture qualified customers.
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="p-3.5 rounded-xl bg-[#05070D] border border-amber-500/20 space-y-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>High-Converting Landing Pages & Intake Systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Programmatic Technical SEO & Structured Entity Schemas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Server-Side Attribution & Full-Funnel Conversion Tracking</span>
                </div>
              </div>

              {/* Micro Tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {['Conversion Funnels', 'Technical SEO', 'Schema Graphs', 'Attribution', 'UI/UX Design'].map((tag, idx) => (
                  <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#101424] border border-slate-800 text-slate-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            <div className="pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="w-full py-2.5 rounded-xl bg-[#121626] hover:bg-[#1A2035] border border-slate-700 hover:border-amber-500/40 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer min-h-[42px]"
              >
                <span>Plan Growth Strategy</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </article>

          {/* Bento Card 3: Autonomous AI & ML */}
          <article className="p-5 sm:p-6 rounded-3xl bg-[#090C16] border border-purple-500/30 hover:border-purple-500/60 shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5 group">
            <div className="space-y-4">
              
              {/* 3D Visual Header Banner */}
              <div className="relative h-40 rounded-2xl overflow-hidden border border-purple-500/20">
                <img
                  src="/images/ai_neural_core.jpg"
                  alt="Enterprise AI and Intelligent Automation by Ink Urban"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C16] via-transparent to-black/30"></div>
                <div className="absolute top-2.5 left-2.5 flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-[#090C16]/85 border border-purple-500/30 backdrop-blur-md text-[10px] font-bold text-purple-300">
                  <CpuChipIcon className="w-3.5 h-3.5 text-purple-400" />
                  <span>Enterprise AI & Automation</span>
                </div>
                <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#090C16]/85 text-purple-300 border border-purple-500/30 backdrop-blur-md uppercase font-mono">
                  AI & ML
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Enterprise AI & Intelligent Automation
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Custom RAG assistants, internal document intelligence, and multi-agent workflows that automate repetitive operations securely.
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="p-3.5 rounded-xl bg-[#05070D] border border-purple-500/20 space-y-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Custom RAG Knowledge Assistants (Zero Hallucinations)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Automated Document Processing & Extraction Pipelines</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Autonomous Multi-Agent Workflow Orchestration</span>
                </div>
              </div>

              {/* Micro Tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {['RAG Knowledge', 'Document AI', 'Private LLMs', 'Workflow Automation', 'Vector Search'].map((tag, idx) => (
                  <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#101424] border border-slate-800 text-slate-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            <div className="pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="w-full py-2.5 rounded-xl bg-[#121626] hover:bg-[#1A2035] border border-slate-700 hover:border-purple-500/40 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer min-h-[42px]"
              >
                <span>Deploy AI Automation</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-purple-400" />
              </button>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};
