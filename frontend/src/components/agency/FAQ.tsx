'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What core capabilities does Ink Urban provide?",
      answer: "Ink Urban operates across three integrated pillars: 1) Custom Software Development (Next.js 15, React 19, Spring Boot, PostgreSQL, Cloudflare Edge microservices), 2) Growth & Performance Marketing (Conversion Rate Optimization, high-converting UI/UX, programmatic SEO, and full-funnel acquisition), and 3) AI & ML Automation (autonomous multi-agent workflows, custom predictive models, and enterprise LLM applications)."
    },
    {
      question: "Why choose custom engineering and growth systems over generic templates?",
      answer: "Generic page builders and template plugins cause 3-5s load times, severe mobile bounce rates, security CVE vulnerabilities, and inflexible data models. Ink Urban engineers bespoke, sub-300ms platforms with 99-100 Core Web Vitals, high-converting UX funnels, and enterprise scalability with zero plugin bloat."
    },
    {
      question: "What kind of AI & Machine Learning solutions do you build?",
      answer: "We go far beyond basic chatbots. We architect autonomous multi-agent orchestration systems that automate complex multi-step workflows, train custom predictive ML models for churn, pricing, and anomaly detection, and deploy secure enterprise LLM copilots with domain-adapted fine-tuning and document intelligence."
    },
    {
      question: "What does the complimentary Technical, Growth & AI Audit include?",
      answer: "A senior principal engineer records a personalized 15-minute video teardown evaluating your current software architecture, API latency, conversion funnel drop-offs, and high-ROI opportunities for AI & ML workflow automation."
    },
    {
      question: "What is the typical project timeline and delivery cadence?",
      answer: "Growth funnels and modern web applications typically launch in 2 to 3 weeks across our 4-stage sprint process. Complex SaaS platforms, mobile applications, and enterprise AI automation pipelines take 4 to 8 weeks with bi-weekly staging demos and continuous CI/CD deployments."
    },
    {
      question: "Do we retain 100% full intellectual property and source code ownership?",
      answer: "Yes, 100%. Upon milestone completion, all GitHub repositories, Figma design systems, database schemas, trained ML model checkpoints, and cloud deployment pipelines belong exclusively to your company with zero vendor lock-in or recurring agency royalties."
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-[#06070B] relative border-t border-slate-800">
      {/* Schema.org FAQPage Structured Data for Rich Search Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <QuestionMarkCircleIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 id="faq-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Frequently Asked <span className="brand-gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Clear, honest answers about our technical stack, growth methodologies, AI capabilities, and delivery standards.
          </p>
        </div>

        {/* Compact Accordion List */}
        <div className="mt-8 space-y-3" role="region" aria-label="FAQ Accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const answerId = `faq-answer-${idx}`;
            const buttonId = `faq-btn-${idx}`;
            return (
              <div
                key={idx}
                className={`rounded-xl transition-all border ${
                  isOpen
                    ? 'bg-[#101526] border-rose-500/50 shadow-lg'
                    : 'bg-[#0B0E19] border-slate-800 hover:border-rose-500/40'
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 focus:outline-none group cursor-pointer min-h-[48px]"
                >
                  <span className={`font-semibold text-sm sm:text-base transition-colors ${
                    isOpen ? 'text-rose-300 font-bold' : 'text-slate-200 group-hover:text-rose-300'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`w-4 h-4 text-rose-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-rose-400' : 'group-hover:text-rose-300'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-rose-500/20 pt-3"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Email Support */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Have a custom technical inquiry or specific architecture question? Contact our team directly at{' '}
          <a href="mailto:inkurban.in@gmail.com" className="text-rose-400 hover:text-rose-300 font-semibold underline min-h-[44px] inline-flex items-center">
            inkurban.in@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
};
