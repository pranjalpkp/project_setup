import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#07080c',
};

export const metadata: Metadata = {
  title: 'Ink Urban LLP | Premium Web Development, CRO & SEO Growth Agency',
  description: 'Ink Urban LLP designs high-converting websites and executes search dominance strategies for ambitious service businesses in the US, UK, UAE, Canada & Australia.',
  icons: {
    icon: '/images/ink_fav.png',
    shortcut: '/images/ink_fav.png',
    apple: '/images/ink_fav.png',
  },
  keywords: [
    'Ink Urban LLP',
    'inkurban.in',
    'premium web development agency',
    'conversion rate optimization agency',
    'SEO growth agency',
    'med spa web design',
    'law firm website design',
    'cosmetic dentist SEO',
    'HVAC web growth'
  ],
  authors: [{ name: 'Ink Urban LLP' }],
  metadataBase: new URL('https://inkurban.in'),
  alternates: {
    canonical: 'https://inkurban.in',
  },
  openGraph: {
    title: 'Ink Urban LLP | High-Converting Websites & SEO Growth Engine',
    description: 'We turn websites into your #1 lead generation engine for high-ticket clients in the US, UK, UAE, CA, AU & IN',
    url: 'https://inkurban.in',
    siteName: 'Ink Urban LLP',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ink Urban LLP | Web & SEO Growth Agency',
    description: 'Bespoke web design, CRO & high-intent SEO for premium service providers worldwide.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'Ink Urban LLP',
  'url': 'https://inkurban.in',
  'logo': 'https://inkurban.in/images/ink_logo.png',
  'email': 'inkurban.in@gmail.com',
  'description': 'Ink Urban LLP is a premium web development and SEO growth agency targeting high-paying international service businesses.',
  'areaServed': ['US', 'GB', 'AE', 'CA', 'AU'],
  'serviceType': [
    'Custom High-Converting Web Design',
    'Conversion Rate Optimization (CRO)',
    'Local & Global SEO Growth',
    'Website Performance & Speed Engineering'
  ],
  'priceRange': '$$$$',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/images/ink_fav.png" type="image/png" />
        <link rel="shortcut icon" href="/images/ink_fav.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/ink_fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Khand:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#07080C] text-slate-100 antialiased selection:bg-[#D4AF37]/30 selection:text-white">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#0F121C',
              color: '#F1F5F9',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              borderRadius: '12px',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            },
            success: {
              iconTheme: {
                primary: '#F43F5E',
                secondary: '#0F121C',
              },
            },
          }}
        />
      </body>
    </html>
  );
}