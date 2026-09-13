import type { Metadata } from 'next';
import { SecurityView } from './SecurityView';

export const metadata: Metadata = {
  title: 'Security Overview & Architecture | Ink Urban',
  description: 'Security & Infrastructure Overview of Ink Urban LLP detailing our zero-trust modular architecture, global edge CDN encryption, and enterprise AI data sandboxing.',
  alternates: {
    canonical: 'https://inkurban.in/security',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SecurityOverviewPage() {
  return <SecurityView />;
}
