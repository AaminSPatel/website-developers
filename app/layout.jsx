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
  title: 'Business Sathi | Digital Solutions for Business Growth',
  description:
    'Business Sathi offers expert digital solutions including websites, growth strategies, and online success for small businesses and startups.',
  keywords:
    'business partner India, digital solutions, website development, small business growth, startup partner, affordable business websites, digital success partner',

  verification: {
    google: 'Gw0kKrcBORBSuCsj5fpyVGYEYahY47h7CpJufGEWshY',
  },

  openGraph: {
    title: 'Business Sathi | Partner for Digital Business Growth',
    description:
      'Your trusted partner for websites, digital strategies, and business success.',
    type: 'website',
    url: 'https://businesssathi.vercel.app',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700&amp;display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${poppins.className} ${geistMono.className} antialiased bg-background text-foreground`}
      >
        {/* Counter.dev */}
        <Script
          src="https://cdn.counter.dev/script.js"
          data-id="95795ebe-d6a8-4887-abef-7dbb03a06eb2"
          data-utcoffset="6"
          strategy="afterInteractive"
        />

        {/* Schema.org JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <AppClient>{children}</AppClient>
      </body>
    </html>
  )
}