import type { Metadata, Viewport } from 'next';
import { Inter, Khand } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const khand = Khand({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#07080C' },
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  ],
  colorScheme: 'dark light',
};

export const metadata: Metadata = {
  title: {
    default: 'Ink Urban | Custom Software Development, Growth & Marketing, and AI & ML Automation Agency',
    template: '%s | Ink Urban',
  },
  description: 'Ink Urban is a premier digital engineering and growth innovation agency. We architect custom software and SaaS platforms, engineer high-converting marketing funnels, and deploy autonomous AI & Machine Learning automation systems worldwide.',
  applicationName: 'Ink Urban',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Ink Urban',
    'Ink Urban LLP',
    'inkurban.in',
    'custom software development agency',
    'growth marketing agency',
    'AI automation agency',
    'machine learning development agency',
    'enterprise SaaS development',
    'Next.js web development agency',
    'full stack engineering',
    'autonomous multi agent AI',
    'conversion rate optimization agency',
    'programmatic SEO agency',
    'enterprise cloud architecture',
    'UI UX design systems',
    'Spring Boot microservices',
    'predictive machine learning models',
    'headless commerce agency'
  ],
  authors: [{ name: 'Ink Urban LLP', url: 'https://inkurban.in' }],
  creator: 'Ink Urban LLP',
  publisher: 'Ink Urban LLP',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://inkurban.in'),
  alternates: {
    canonical: 'https://inkurban.in',
    languages: {
      'en-US': 'https://inkurban.in',
      'x-default': 'https://inkurban.in',
    },
  },
  icons: {
    icon: [
      { url: '/images/ink_fav.png', type: 'image/png' },
    ],
    shortcut: '/images/ink_fav.png',
    apple: [
      { url: '/images/ink_fav.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Ink Urban | Custom Software Development, Growth & Marketing, and AI & ML Automation Agency',
    description: 'We engineer custom full-stack software, accelerate conversion & marketing growth, and deploy autonomous AI & Machine Learning systems for high-growth enterprises worldwide.',
    url: 'https://inkurban.in',
    siteName: 'Ink Urban LLP',
    images: [
      {
        url: '/images/ink_logo.png',
        width: 1200,
        height: 630,
        alt: 'Ink Urban LLP - Custom Software, Growth & AI/ML Automation Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ink Urban | Custom Software, Growth & AI/ML Automation Agency',
    description: 'Bespoke software engineering, high-converting growth funnels, and autonomous AI & Machine Learning pipelines.',
    images: ['/images/ink_logo.png'],
    creator: '@inkurban',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'Ink Urban LLP',
  'alternateName': 'Ink Urban',
  'url': 'https://inkurban.in',
  'logo': 'https://inkurban.in/images/ink_logo.png',
  'image': 'https://inkurban.in/images/ink_logo.png',
  'email': 'inkurban.in@gmail.com',
  'telephone': '+918340123740',
  'description': 'Ink Urban LLP is an integrated digital innovation agency specializing in Custom Software Development, Growth & Performance Marketing, and AI & ML Automation.',
  'areaServed': [
    { '@type': 'Country', 'name': 'United States' },
    { '@type': 'Country', 'name': 'United Kingdom' },
    { '@type': 'Country', 'name': 'Canada' },
    { '@type': 'Country', 'name': 'Australia' },
    { '@type': 'Country', 'name': 'United Arab Emirates' },
    { '@type': 'Country', 'name': 'India' },
    { '@type': 'Country', 'name': 'Worldwide' }
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Core Agency Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Custom Software Development & SaaS Platforms',
          'description': 'Full-stack web applications, multi-tenant SaaS platforms, cloud microservices, and bespoke REST/GraphQL APIs engineered with Next.js 15, Spring Boot, and PostgreSQL.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Growth Engineering, CRO & Performance Marketing',
          'description': 'Scientific conversion rate optimization (CRO), high-converting UI/UX funnels, programmatic SEO engines, and full-funnel customer acquisition.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'AI & Machine Learning Automation',
          'description': 'Autonomous multi-agent workflow orchestration, custom predictive ML models, fine-tuned enterprise LLMs, and intelligent document extraction.'
        }
      }
    ]
  },
  'sameAs': [
    'https://www.linkedin.com/company/inkurban/',
    'https://www.instagram.com/inkurban.in'
  ],
  'priceRange': '$$$$',
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    'opens': '09:00',
    'closes': '21:00'
  }
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Ink Urban LLP',
  'url': 'https://inkurban.in',
  'potentialAction': {
    '@type': 'SearchAction',
    'target': 'https://inkurban.in/?s={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/ink_fav.png" type="image/png" />
        <link rel="shortcut icon" href="/images/ink_fav.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/ink_fav.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className={`${inter.variable} ${khand.variable} antialiased selection:bg-rose-500/30 selection:text-white font-sans`}>
        <ThemeProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#090C16',
                color: '#FFFFFF',
                border: '1px solid rgba(244, 63, 94, 0.3)',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
              },
              success: {
                iconTheme: {
                  primary: '#F43F5E',
                  secondary: '#FFFFFF',
                },
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}