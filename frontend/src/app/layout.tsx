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
  title: 'Ink Urban | Bespoke Web Development & Digital Engineering Agency',
  description: 'Ink Urban is a premier web development agency. We engineer custom web applications, SaaS platforms, and enterprise digital solutions — backed by deep technical website and performance auditing.',
  icons: {
    icon: '/images/ink_fav.png',
    shortcut: '/images/ink_fav.png',
    apple: '/images/ink_fav.png',
  },
  keywords: [
    'Ink Urban',
    'Ink Urban LLP',
    'inkurban.in',
    'web development agency',
    'custom web application development',
    'SaaS development agency',
    'Next.js web development',
    'enterprise web platforms',
    'website audit agency',
    'performance engineering',
    'UI/UX design systems'
  ],
  authors: [{ name: 'Ink Urban LLP' }],
  metadataBase: new URL('https://inkurban.in'),
  alternates: {
    canonical: 'https://inkurban.in',
  },
  openGraph: {
    title: 'Ink Urban | Bespoke Web Development & Digital Engineering Agency',
    description: 'We engineer custom web applications, high-performance web platforms, and provide deep technical website audits for growing enterprises.',
    url: 'https://inkurban.in',
    siteName: 'Ink Urban LLP',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ink Urban | Bespoke Web Development & Engineering Agency',
    description: 'Bespoke web applications, high-performance web platforms, and deep technical website auditing.',
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
  'description': 'Ink Urban LLP is a bespoke web development and digital engineering agency specializing in custom web applications, enterprise digital platforms, and technical website auditing.',
  'areaServed': 'Worldwide',
  'serviceType': [
    'Custom Web Application Development',
    'Enterprise Web Platform Engineering',
    'SaaS & Dashboard Development',
    'UI/UX Design Systems',
    'Technical Website & Security Auditing',
    'Conversion Rate Optimization & SEO'
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