import type { Metadata } from 'next';
import { Anton, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton'
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans'
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono'
});

const siteUrl = 'https://oakbridgelabs.com';
const title = 'Oakbridge Labs — AI + Operations for Owner-Led Trades';
const description =
  'We plug AI into your operations so quoting, scheduling, follow-up, and job costing stop bleeding your time and margin. $250 QuickOps Audit. 20+ years in the field.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Oakbridge Labs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Oakbridge Labs',
  description,
  url: siteUrl,
  email: 'info@oakbridgelabs.com',
  founder: {
    '@type': 'Person',
    name: 'Craig Nowotny'
  },
  areaServed: 'US',
  serviceType: 'AI integration and operations automation for owner-led trades and construction businesses',
  priceRange: '$250+'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-bg text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
