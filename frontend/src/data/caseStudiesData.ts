export interface CaseStudyMetric {
  label: string;
  value: string;
  change: string;
  description?: string;
}

export interface BeforeAfterBenchmark {
  metric: string;
  before: string;
  after: string;
  impact: string;
}

export interface CaseStudy {
  slug: string;
  clientType: string;
  location: string;
  niche: string;
  tagline: string;
  headline: string;
  summary: string;
  challenge: string;
  challengePoints: string[];
  solution: string;
  solutionPoints: string[];
  techStack: string[];
  metrics: CaseStudyMetric[];
  beforeAfter: BeforeAfterBenchmark[];
  deliverables: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: 'aesthetic-clinic',
    clientType: 'Aesthetic Clinic Practice',
    location: 'Metropolitan Market',
    niche: 'Medical Aesthetics & Wellness',
    tagline: 'Conversion Rate & Local Search Architecture',
    headline: '184% Increase in High-Ticket Inquiries via Sub-Second Web Architecture & Local Map Pack Dominance',
    summary: 'A leading aesthetic medical practice was suffering from a 1.1% mobile conversion rate and exorbitant Google Ads acquisition costs. Ink Urban engineered a custom, sub-second web application with interactive consultation flows and localized entity schemas, tripling organic inquiries within 120 days.',
    challenge: 'High cost per click on paid advertising with an underperforming website converting under 1.1% of mobile visitors due to slow page loads and confusing patient intake pathways.',
    challengePoints: [
      'Bloated legacy WordPress setup with 38 active plugins causing severe 4.8s Largest Contentful Paint (LCP).',
      'Mobile patients dropping off due to an outdated, multi-step iframe consultation booking form.',
      'Google Map Pack invisibility outside an immediate 500m radius despite heavy marketing spend.'
    ],
    solution: 'Engineered a bespoke high-performance web application with sub-second page rendering, streamlined consultation intake, and targeted local SEO positioning.',
    solutionPoints: [
      'Zero-bloat React application architecture delivering 99/100 Core Web Vitals and < 0.7s page loads.',
      'Frictionless slide-out consultation booking drawer integrated directly into clinic practice management software.',
      'Local schema entity injection targeting high-intent metropolitan treatment keywords.'
    ],
    techStack: ['Next.js App Router', 'React 19', 'Tailwind CSS', 'Core Web Vitals Engine', 'Structured JSON-LD', 'Cloudflare Edge'],
    metrics: [
      { label: 'Inquiry Volume', value: '+184%', change: 'From 14/mo to 40+/mo', description: 'Verified qualified consultation bookings' },
      { label: 'Page Speed Score', value: '99/100', change: 'Core Web Vitals optimized', description: 'Sub-700ms mobile Largest Contentful Paint' },
      { label: 'Google Map Rank', value: 'Top 3', change: 'Key Metro search terms', description: 'Covering 8 competitive metropolitan zones' }
    ],
    beforeAfter: [
      { metric: 'Mobile Load Time (LCP)', before: '4.8s', after: '0.68s', impact: '86% Faster Page Delivery' },
      { metric: 'Mobile Conversion Rate', before: '1.1%', after: '3.8%', impact: '+245% Conversion Lift' },
      { metric: 'Cost Per Inbound Lead', before: '$142 (Paid PPC)', after: '$38 (Organic & Blended)', impact: '73% Acquisition Cost Reduction' },
      { metric: 'Google Map Pack Top 3', before: '1 Postcode', after: '8 Target Postcodes', impact: '8x Geographic Search Footprint' }
    ],
    deliverables: [
      'High-performance headless web application engineered with zero page builders',
      'Mobile-first consultation intake flow with automated CRM sync',
      'Medical procedure service pages with semantic FAQ schema injection',
      'Google Business Profile localized geo-grid optimization across target postcodes',
      'Comprehensive conversion analytics and call tracking dashboard'
    ],
    quote: {
      text: "Ink Urban replaced our sluggish, bloated website with an ultra-clean application that loads instantly. Our consultation calendar has never been more booked, and our patient acquisition costs plummeted.",
      author: "Dr. E. Vance",
      role: "Founder & Medical Director"
    }
  },
  {
    slug: 'commercial-law-firm',
    clientType: 'Commercial Law Firm',
    location: 'Capital Metro Market',
    niche: 'Corporate & Commercial Practice',
    tagline: 'Prestige Authority & Corporate Intake Architecture',
    headline: '3.4x Increase in Commercial Inquiries with Bespoke Authority Positioning & Postcode SEO',
    summary: 'A 14-partner commercial law practice was losing high-value business instructions to larger international firms. Ink Urban redesigned their digital footprint from scratch, establishing partner authority portfolios, sub-second search speeds, and an encrypted client intake gateway.',
    challenge: 'Outdated legacy website failed to convey partner track record, causing prospective corporate clients to bounce to competing firms and creating significant friction for retainer inquiries.',
    challengePoints: [
      'Generic corporate styling with dense, unformatted text blocks that failed to highlight partner wins.',
      'Bounce rate exceeding 68% among institutional corporate buyers and venture investors on mobile devices.',
      'No structured legal schema or attorney entity data, suppressing search visibility for high-intent business litigation queries.'
    ],
    solution: 'Created an editorial brand identity, structured partner track record showcases, and a secure consultation intake pathway tailored to corporate decision makers.',
    solutionPoints: [
      'Prestigious editorial visual design reflecting high-stakes commercial representation standards.',
      'Case study & transaction track record modules categorized by industry sectors and regulatory disciplines.',
      'Hyper-targeted regional practice area pages with structured attorney JSON-LD entities.'
    ],
    techStack: ['Next.js App Router', 'React 19', 'Tailwind CSS', 'Schema.org LegalService', 'Vercel Enterprise', 'End-to-End Encryption'],
    metrics: [
      { label: 'Inquiry Rate', value: '3.4x', change: 'Higher conversion rate', description: 'Qualified commercial retainer inquiries' },
      { label: 'Organic Search', value: '+210%', change: 'Targeting primary postcodes', description: 'Top commercial dispute keywords' },
      { label: 'Mobile Bounce', value: '-45%', change: 'Reduced visitor drop-off', description: 'Average session duration grew to 3m 40s' }
    ],
    beforeAfter: [
      { metric: 'Corporate Inquiries / Month', before: '6 Inquiries', after: '21 Inquiries', impact: '3.5x Client Intake Volume' },
      { metric: 'Mobile Bounce Rate', before: '68%', after: '23%', impact: '66% Drop in Abandonment' },
      { metric: 'High-Intent Legal Keywords Top 5', before: '4 Terms', after: '29 Terms', impact: '7.2x Search Visibility Growth' },
      { metric: 'Average Deal Size', before: '$8,500 Retainer', after: '$24,000 Retainer', impact: 'Higher Quality Client Caliber' }
    ],
    deliverables: [
      'Editorial corporate legal identity and component design system',
      'Partner directory with specialized discipline filters and representative transactions',
      'Confidential commercial consultation scheduling flow',
      'Structured legal organization JSON-LD entity graph for search engines',
      'Sub-second Core Web Vitals optimization across all devices'
    ],
    quote: {
      text: "The new web application instantly elevated our firm's standing. Commercial general counsels and CEOs take us seriously from the first click, and our corporate instruction rate has grown more than threefold.",
      author: "M. Kensington",
      role: "Managing Partner"
    }
  },
  {
    slug: 'commercial-hvac',
    clientType: 'Commercial HVAC Enterprise',
    location: 'Commercial Hub Market',
    niche: 'HVAC & Commercial Contracting',
    tagline: 'Multi-Postcode Local Search Domination',
    headline: '#1 Postcode Rankings Across 12 Industrial Hubs & 160% Surge in Commercial System Contracts',
    summary: 'A regional commercial mechanical and HVAC contractor was invisible outside their home suburb, missing lucrative industrial plant contracts. Ink Urban deployed hyper-local service area pages and geo-targeted schema architecture, capturing dominant #1 Google Map Pack rankings across 12 industrial corridors.',
    challenge: 'Limited search visibility outside primary home zip code, losing commercial replacement contracts to regional competitors despite superior mechanical expertise.',
    challengePoints: [
      'Single-page contact form with zero suburban landing pages or localized geographic signals.',
      'Google Map Pack ranking limited strictly to a 2-mile radius around their physical workshop.',
      'Slow mobile load times preventing facility managers on job sites from quickly placing emergency service calls.'
    ],
    solution: 'Built a hyper-local SEO entity architecture across 15 target suburban postcodes with mobile-first contact routing and instant commercial emergency dispatch.',
    solutionPoints: [
      'Engineered programmatic suburban hub architecture with unique localized content and project portfolios.',
      'Implemented tap-to-call mobile dispatch header optimized for facility operations managers.',
      'Deployed geo-coordinate map schemas and Google Business Profile category clustering.'
    ],
    techStack: ['Next.js App Router', 'React 19', 'Tailwind CSS', 'Geo-Targeted Schemas', 'Google Maps API', 'Core Web Vitals Engine'],
    metrics: [
      { label: 'Suburban Rankings', value: '#1 Rank', change: 'Across 12 postcodes', description: 'Primary industrial and commercial hubs' },
      { label: 'Inbound Call Volume', value: '+160%', change: 'Peak seasonal surge', description: 'High-value commercial maintenance contracts' },
      { label: 'Project Intake', value: 'Commercial', change: 'System replacement focus', description: 'Average ticket increased by $18,000' }
    ],
    beforeAfter: [
      { metric: 'Ranked Suburban Zones', before: '1 Zone', after: '12 Industrial Hubs', impact: '12x Market Territory Expansion' },
      { metric: 'Commercial Maintenance Contracts', before: '3 / quarter', after: '11 / quarter', impact: '+266% Contract Win Rate' },
      { metric: 'Mobile Click-to-Call Rate', before: '2.3%', after: '8.4%', impact: '3.6x Inbound Dispatch Volume' },
      { metric: 'Average Contract Value', before: '$4,200 (Residential focus)', after: '$22,500 (Commercial/Industrial)', impact: '5.3x Revenue Per Job' }
    ],
    deliverables: [
      'Industrial-grade mobile-first contractor web application',
      '15 localized suburban service area pages with custom schema markup',
      'Instant commercial emergency dispatch and quotation request engine',
      'Project portfolio showcase featuring industrial chiller and rooftop installations',
      'Google Business Profile entity synchronization across all target service areas'
    ],
    quote: {
      text: "We went from fighting for residential scraps to winning six-figure commercial facility contracts across the entire region. Ink Urban's localized SEO architecture put us at #1 where it matters most.",
      author: "D. Gallagher",
      role: "Operations VP"
    }
  }
];
