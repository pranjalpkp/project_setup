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
  themeColor: '#07080C',
};

export const metadata: Metadata = {
  title: 'Ink Urban LLP | Premium Web Development, CRO & SEO Growth Agency',
  description: 'Ink Urban LLP designs high-converting websites and executes search dominance strategies for ambitious service businesses worldwide.',
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
    description: 'We turn websites into your #1 lead generation engine for high-ticket client enterprises worldwide.',
    url: 'https://inkurban.in',
    siteName: 'Ink Urban LLP',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ink Urban LLP | Web & SEO Growth Agency',
    description: 'Bespoke web design, CRO & high-intent SEO for strategic service providers worldwide.',
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
  'areaServed': 'Worldwide',
  'serviceType': [
    'Custom High-Converting Web Design',
    'Conversion Rate Optimization (CRO)',
    'Local & Global SEO Growth',
    'Website Performance & Speed Engineering'
  ],
  'telephone': '+918340123740',
  'sameAs': [
    'https://www.linkedin.com/company/inkurban/',
    'https://www.instagram.com/inkurban.in'
  ],
  'priceRange': '$$$$',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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