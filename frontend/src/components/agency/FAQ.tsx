'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does working with Ink Urban compare to hiring a traditional local agency?",
      answer: "Traditional agencies in major metropolitan hubs routinely charge $25,000 to $50,000+ for custom web builds due to expensive physical office overhead. Ink Urban delivers tier-1 international web architecture, sub-second speed, and conversion copywriting at a fraction of traditional agency retainers — with zero compromise on quality or time-zone communication."
    },
    {
      question: "Why do you build custom web platforms instead of generic CMS templates?",
      answer: "Generic CMS templates are heavily bloated with plugins, slow to load (costing you 50%+ of mobile visitors), and vulnerable to security hacks. Custom bespoke architecture loads in under 0.8 seconds worldwide, achieves 100/100 Core Web Vitals, and provides total flexibility for high-converting booking drawers and funnels."
    },
    {
      question: "What is the typical turnaround time for a complete website rebuild & SEO setup?",
      answer: "Our standard project timeline is 2 to 3 weeks. Week 1 is focused on audit teardown, messaging, and wireframe approvals; Week 2 on custom high-performance coding and integrations; Week 3 on SEO schema deployment, speed verification, and live launch."
    },
    {
      question: "How long does it take to see Local SEO & Google Map Pack ranking improvements?",
      answer: "Local SEO optimizations (Google Business Profile entity tuning, local structured JSON-LD schemas, and postcode targeting) typically show noticeable rank movements in 30 to 60 days. High-intent competitive keyword positions scale over 3 to 6 months."
    },
    {
      question: "What is required from our team during the project?",
      answer: "We respect your time. We only require a 45-minute initial strategy onboarding call, any existing media/brand assets you have, and feedback on the initial design wireframe. We handle 100% of the technical execution, copywriting, speed tuning, and SEO setup."
    },
    {
      question: "Do we get 100% full ownership of our code, domain, and assets?",
      answer: "Yes, absolutely. Upon completion, 100% of the website source code, visual assets, analytics accounts, and hosting credentials belong entirely to your business. Zero lock-in contracts."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Everything You Need To Know
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Clear, honest answers about our international workflow, technical stack, turnaround times, and pricing model.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const answerId = `faq-answer-${idx}`;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-amber-50/80 border-amber-400/60 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-amber-400/50'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none group"
                >
                  <span className="font-semibold text-base sm:text-lg text-slate-900 group-hover:text-amber-700 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : 'group-hover:text-amber-600'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="px-6 pb-6 text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Email Support Prompt */}
        <div className="mt-12 text-center text-xs text-slate-600">
          Have a specific question not listed here? Email us directly at{' '}
          <a href="mailto:inkurban.in@gmail.com" className="text-amber-700 hover:text-rose-600 font-semibold underline transition-colors">
            inkurban.in@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
};
