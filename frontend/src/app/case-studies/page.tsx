import type { Metadata } from 'next';
import { CaseStudiesIndexView } from './CaseStudiesIndexView';

export const metadata: Metadata = {
  title: 'Empirical Case Studies & Performance Benchmarks | Ink Urban',
  description: 'Explore verified empirical case studies detailing how Ink Urban engineers custom software SaaS platforms, scales high-converting growth funnels, and deploys autonomous AI/ML workflows for global ventures.',
  keywords: [
    'Ink Urban case studies',
    'custom software case study',
    'SaaS development benchmarks',
    'AI automation results',
    'conversion rate optimization case study',
    'programmatic SEO results',
    'Core Web Vitals benchmarks'
  ],
  alternates: {
    canonical: 'https://inkurban.in/case-studies',
  },
  openGraph: {
    title: 'Empirical Case Studies & Performance Benchmarks | Ink Urban',
    description: 'Verified empirical results: Sub-280ms API latencies, +240% revenue growth, and 85% manual operations saved with custom software, growth funnels, and AI/ML pipelines.',
    url: 'https://inkurban.in/case-studies',
    siteName: 'Ink Urban LLP',
    images: [
      {
        url: '/images/ink_logo.png',
        width: 1200,
        height: 630,
        alt: 'Ink Urban Case Studies & Benchmarks',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Benchmarks | Ink Urban',
    description: 'Empirical results from custom software builds, growth engineering, and AI automation.',
    images: ['/images/ink_logo.png'],
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesIndexView />;
}
