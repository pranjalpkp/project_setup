import type { Metadata } from 'next';
import { PrivacyView } from './PrivacyView';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ink Urban',
  description: 'Official Privacy Policy of Ink Urban LLP detailing our zero data-reselling guarantee, GDPR & CCPA compliance, and secure data handling standards.',
  alternates: {
    canonical: 'https://inkurban.in/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyView />;
}
