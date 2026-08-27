import { notFound } from 'next/navigation';
import { caseStudiesData } from '@/data/caseStudiesData';
import { CaseStudyDetailView } from './CaseStudyDetailView';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudiesData.find((item) => item.slug === slug);
  if (!cs) {
    return {
      title: 'Case Study Not Found | Ink Urban',
    };
  }

  return {
    title: `${cs.clientType} Case Study | Ink Urban`,
    description: cs.summary,
    openGraph: {
      title: `${cs.clientType} Case Study | Ink Urban`,
      description: cs.summary,
      url: `https://inkurban.in/case-studies/${cs.slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudiesData.find((item) => item.slug === slug);

  if (!cs) {
    notFound();
  }

  return <CaseStudyDetailView caseStudy={cs} />;
}
