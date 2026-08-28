'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What tech stack does Ink Urban use?",
      answer: "We engineer web platforms using Next.js 15, React 19, TypeScript, and Tailwind CSS. Backends and APIs run on scalable Spring Boot or Node.js with PostgreSQL on Cloudflare/Vercel edge networks. Zero WordPress or bloated templates."
    },
    {
      question: "Why custom engineering instead of WordPress or Webflow?",
      answer: "Generic page builders rely on dozens of fragile plugins that cause 4-6s load times, security vulnerabilities, and high mobile bounce rates. Custom Next.js code renders in sub-0.5s with 100/100 Core Web Vitals and full scalability."
    },
    {
      question: "What does the complimentary 15-Point Website Audit include?",
      answer: "Our senior developers record a 15-minute video teardown of your current website, analyzing Core Web Vitals, code debt, security exposures, and conversion friction to give you an objective modernization roadmap."
    },
    {
      question: "What is the typical project timeline?",
      answer: "Custom enterprise platforms typically launch in 2 to 3 weeks across our 4-stage sprint process. Complex SaaS web applications take 4 to 8 weeks with bi-weekly staging demos."
    },
    {
      question: "Do we get 100% full source code ownership?",
      answer: "Yes. Upon milestone completion, 100% of the GitHub repository, Figma design system, database schemas, and hosting configurations belong entirely to your company with zero lock-in."
    }
  ];

  return (
    <section id="faq" className="py-14 sm:py-16 bg-white relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-600 text-xs font-semibold uppercase tracking-wider">
            <QuestionMarkCircleIcon className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
            Frequently Asked <span className="brand-gradient-text-light">Questions</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Clear, honest answers about our technical stack, turnaround times, and delivery standards.
          </p>
        </div>

        {/* Compact Accordion List */}
        <div className="mt-8 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const answerId = `faq-answer-${idx}`;
            return (
              <div
                key={idx}
                className={`rounded-xl transition-all border ${
                  isOpen
                    ? 'bg-rose-50/70 border-rose-400/60 shadow-sm'
                    : 'bg-slate-50 border-slate-200 hover:border-rose-400/40'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 focus:outline-none group cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 group-hover:text-rose-600 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`w-4 h-4 text-rose-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-rose-600' : 'group-hover:text-rose-600'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-rose-200/60 pt-3"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Email Support */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Have another question? Contact us directly at{' '}
          <a href="mailto:inkurban.in@gmail.com" className="text-rose-600 hover:text-rose-700 font-semibold underline">
            inkurban.in@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
};
