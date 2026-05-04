import { ServicesClient } from './ServicesClient'

export const metadata = {
  title: {
    absolute: 'Website Development Services Indore Ujjain | Travel Agency & Business Websites MP'
  },
  description: 'Professional website development services in Indore & Ujjain. Custom Next.js websites for travel agencies, small businesses, startups. SEO-optimized, mobile-first, fast loading. Starting ₹25,000. Free consultation.',
  keywords: [
    'website development services Indore',
    'web development company Ujjain',
    'travel agency website developer MP',
    'business website design Indore',
    'Next.js development services Madhya Pradesh',
    'affordable website packages Ujjain',
    'e-commerce website developer Indore',
    'SEO website development Ratlam Dewas'
  ].join(', '),
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Website Development Services Indore Ujjain MP | Business Sathi',
    description: 'Custom websites for local businesses & travel agencies. Next.js, SEO-optimized, mobile-responsive. Serving Indore, Ujjain, Dewas, Ratlam.',
    type: 'website',
    url: 'https://business-sathi.vercel.app/services',
    images: [{ url: '/og-services.svg', width: 1200, height: 630, alt: 'Website development services Indore Ujjain' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services Indore Ujjain',
    description: 'Next.js websites for MP businesses. Travel portals, e-commerce, portfolios.',
    images: ['/og-services.png']
  },
  robots: { index: true, follow: true }
}

// Services schema markup
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Business Sathi',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ujjain',
      addressRegion: 'Madhya Pradesh',
      postalCode: '456010',
      addressCountry: 'IN'
    }
  },
  areaServed: ['Indore', 'Ujjain', 'Madhya Pradesh', 'India'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Website Development',
          description: 'SEO-optimized websites for local businesses in Indore Ujjain MP'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Travel Agency Websites',
          description: 'Booking portals and travel websites for MP tourism businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Development',
          description: 'Online stores with Razorpay integration for Indian businesses'
        }
      }
    ]
  }
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        key="services-schema"
      />
      <ServicesClient />
    </>
  )
}
