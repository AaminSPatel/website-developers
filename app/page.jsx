import { HomeClient } from './HomeClient'
export const metadata = {
  // ── Primary Title with Local Keywords ──
  title: 'Website Development Company in Indore & Ujjain | Business Sathi',
  
  // ── Meta Description with local intent + value ──
  description:
    'Best website development company in Indore & Ujjain. We build SEO-optimized, mobile-first websites for travel agencies, local businesses, and service providers across Madhya Pradesh. Get a free quote today!',

  // ── Keyword Strategy ──
  // Targeting: local (Indore/Ujjain/MP) + service (website development/SEO) + industry (travel/business)
  keywords: [
    // Primary local keywords
    'website development company Indore',
    'website design Ujjain',
    'web developer Indore',
    'website developer in Ujjain',
    'website developer Dewas',
    'website developer Ratlam',
    'web development company Madhya Pradesh',
    // Service keywords
    'SEO optimized website India',
    'mobile-first website development',
    'Next.js developer India',
    'affordable website design India',
    'local business website India',
    // Industry keywords
    'travel agency website development India',
    'travel portal development',
    'business website design Indore',
    // Long-tail
    'best website company in Indore',
    'professional website developer Ujjain',
    'website design for small business Indore',
    'cheap website development Madhya Pradesh',
  ],

  // ── Canonical ──
  alternates: {
    canonical: 'https://business-sathi.vercel.app/',
  },

  // ── Open Graph (Facebook / WhatsApp Share) ──
  openGraph: {
    title: 'Business Sathi — Website Development in Indore & Ujjain, MP',
    description:
      'We build fast, SEO-ready websites for local businesses and travel agencies across Madhya Pradesh. 50+ websites delivered. 95+ SEO scores. Free consultation.',
    url: 'https://business-sathi.vercel.app/',
    siteName: 'Business Sathi',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/og-home.png', // Create a 1200x630 OG image
        width: 1200,
        height: 630,
        alt: 'Business Sathi - Website Development Company in Indore & Ujjain',
      },
    ],
  },

  // ── Twitter Card ──
  twitter: {
    card: 'summary_large_image',
    title: 'Business Sathi — Website Development Indore & Ujjain',
    description:
      'Professional website development for local businesses & travel agencies in MP. SEO-optimized, mobile-first, affordable.',
    images: ['/og-home.png'],
  },

  // ── Robots ──
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

  // ── Verification (add your actual codes) ──
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
  },
}

// ── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // LocalBusiness schema — critical for local SEO
    {
      '@type': 'LocalBusiness',
      '@id': 'https://business-sathi.vercel.app/#organization',
      name: 'Business Sathi',
      description:
        'Professional website development company in Indore & Ujjain, Madhya Pradesh. Specializing in SEO-optimized websites for travel agencies, local businesses, and service providers.',
      url: 'https://business-sathi.vercel.app',
      telephone: '+919302088025',
      email: 'aameenpatel122436@gmail.com',
      foundingDate: '2023',
      priceRange: '₹₹',
      image: 'https://business-sathi.vercel.app/apple-icon.jpeg',
      logo: {
        '@type': 'ImageObject',
        url: 'https://business-sathi.vercel.app/apple-icon.jpeg',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ujjain',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
        postalCode: '456001',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 23.1765,
        longitude: 75.7885,
      },
      areaServed: [
        { '@type': 'City', name: 'Indore' },
        { '@type': 'City', name: 'Ujjain' },
        { '@type': 'City', name: 'Dewas' },
        { '@type': 'City', name: 'Ratlam' },
        { '@type': 'State', name: 'Madhya Pradesh' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Website Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Travel Agency Portal Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization Services' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Website Development' } },
        ],
      },
      sameAs: [
        'https://linkedin.com',
        'https://twitter.com',
        'https://instagram.com',
      ],
    },
    // WebSite schema for Sitelinks search box
    {
      '@type': 'WebSite',
      '@id': 'https://business-sathi.vercel.app/#website',
      url: 'https://business-sathi.vercel.app',
      name: 'Business Sathi',
      description: 'Website Development Company in Indore & Ujjain, Madhya Pradesh',
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://business-sathi.vercel.app/blog?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  )
}