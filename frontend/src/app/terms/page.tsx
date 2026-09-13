import type { Metadata } from 'next';
import { TermsView } from './TermsView';

export const metadata: Metadata = {
  title: 'Terms of Service | Ink Urban',
  description: 'Terms of Service of Ink Urban LLP detailing our 100% intellectual property and code ownership transfer, milestone deliverables, and performance benchmarks.',
  alternates: {
    canonical: 'https://inkurban.in/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return <TermsView />;
}
