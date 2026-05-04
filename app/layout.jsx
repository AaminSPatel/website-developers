import { Poppins, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppClient } from './AppClient'
import Script from 'next/script'

// Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
})

// Metadata (SEO + Verification)
export const metadata = {
  title: {
    default: 'Business Sathi | Website Development Company Indore Ujjain | Web Developer MP',
    template: '%s | Business Sathi - Top Website Developer Indore Ujjain MP'
  },
  description: 'Business Sathi - #1 website development company in Indore & Ujjain. SEO-optimized Next.js websites for travel agencies, small businesses & startups in Madhya Pradesh. 50+ projects delivered, 95+ SEO scores.',
  keywords: [
    'website development company Indore',
    'web developer Ujjain',
    'website design MP',
    'travel agency website Indore',
    'business website Ujjain',
    'Next.js developer India',
    'SEO website company Madhya Pradesh',
    'affordable web development Indore'
  ].join(', '),
  authors: [{ name: 'Business Sathi', url: 'https://business-sathi.vercel.app' }],
  creator: 'Business Sathi',
  publisher: 'Business Sathi',
  formatDetection: { email: false, address: false, telephone: true },
  metadataBase: new URL('https://business-sathi.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/en-IN',
    },
  },
  verification: {
    google: 'Gw0kKrcBORBSuCsj5fpyVGYEYahY47h7CpJufGEWshY',
    yandex: 'YOUR_YANDEX_CODE',
  },
  viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  openGraph: {
    title: 'Business Sathi | #1 Website Development Company Indore Ujjain Madhya Pradesh',
    description: 'Expert Next.js web development for travel agencies, local businesses & startups. SEO-first, mobile-optimized websites that rank on Google. Serving Indore, Ujjain, Dewas, Ratlam & MP.',
    type: 'website',
    siteName: 'Business Sathi',
    locale: 'en_IN',
    url: 'https://business-sathi.vercel.app',
    images: [
      {
        url: '/og-home.svg',
        width: 1200,
        height: 630,
        alt: 'Business Sathi - Best Website Development Company Indore Ujjain',
      },
      {
        url: '/og-home.png',
        width: 1200,
        height: 630,
        alt: 'Business Sathi - Best Website Development Company Indore Ujjain',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Sathi | Website Developer Indore Ujjain MP',
    description: 'Top-rated website development serving Indore Ujjain MP. Travel portals, business sites, e-commerce. SEO optimized, mobile-first.',
    images: ['/og-home.svg', '/og-home.png'],
    creator: '@businesssathi', // Update with actual handle
    site: '@businesssathi',
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
}

// Schema Data
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Business Sathi',
  url: 'https://businesssathi.vercel.app',
  logo: 'https://businesssathi.vercel.app/logo.png',
  description:
    'Business Sathi - Your trusted partner for websites, digital growth, and business success in India.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+919302088025',
    contactType: 'Customer Service',
    areaServed: 'India',
    availableLanguage: 'en',
  },
  serviceType: 'Business Development Services',
  areaServed: [
    {
      '@type': 'Country',
      name: 'India',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Business Growth Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Solutions for Small Businesses',
          description:
            'Affordable website and growth solutions for small businesses.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Development',
          description:
            'Custom web development services with modern technologies.',
        },
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${poppins.className} ${geistMono.className} antialiased bg-background text-foreground`}
      >
        {/* Counter.dev */}
        <Script
        id="counter-dev-script"
          src="https://cdn.counter.dev/script.js"
          data-id="95795ebe-d6a8-4887-abef-7dbb03a06eb2"
          data-utcoffset="6"
          strategy="lazyOnload"
        />

        {/* Enhanced Schema.org JSON-LD with LocalBusiness */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...schemaData,
              '@type': ['Organization', 'LocalBusiness'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ujjain',
                addressRegion: 'Madhya Pradesh',
                postalCode: '456010',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 23.1765,
                longitude: 75.7885,
              },
              areaServed: [
                { '@type': 'City', name: 'Indore' },
                { '@type': 'City', name: 'Ujjain' },
                { '@type': 'AdministrativeArea', name: 'Madhya Pradesh' },
              ],
              openingHours: 'Mo-Su 09:00-22:00',
              priceRange: '₹₹',
              hasPos: false,
            }),
          }}
        />

        <AppClient>{children}</AppClient>
      </body>
    </html>
  )
}