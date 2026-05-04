import { AboutClient } from './AboutClient'

export const metadata = {
  title: {
    absolute: 'About Business Sathi | Best Website Development Company Indore Ujjain MP | Web Developer Team'
  },
  description: 'About Business Sathi - Indore & Ujjain based website development company specializing in Next.js websites for travel agencies, small businesses & startups. Meet our expert web developer team serving Madhya Pradesh & India. 50+ projects, 95+ SEO scores.',
  keywords: [
    'about web development company Indore',
    'website developer team Ujjain',
    'Next.js developers Madhya Pradesh',
    'freelance web developer about',
    'travel agency website developers team',
    'small business website agency Indore',
    'fullstack developer portfolio',
    'Business Sathi about us'
  ].join(', '),
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Business Sathi | Top Website Developers Indore Ujjain',
    description: 'Learn about our Indore-based team creating SEO-optimized Next.js websites for MP businesses. 3+ years experience, 50+ successful projects.',
    type: 'profile',
    url: 'https://business-sathi.vercel.app/about',
    images: [{ url: '/og-about.svg', width: 1200, height: 630, alt: 'Business Sathi team - Web developers Indore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Business Sathi | Indore Web Developers',
    description: 'Website development team serving Indore, Ujjain & MP. Next.js experts.',
    images: ['/og-about.png']
  },
  robots: { index: true, follow: true }
}

// About page schema - Person + Organization
const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://business-sathi.vercel.app/#organization',
      name: 'Business Sathi',
      description: 'Website development company specializing in SEO-optimized Next.js sites for Indore, Ujjain and Madhya Pradesh businesses.',
      url: 'https://business-sathi.vercel.app/about',
      logo: 'https://business-sathi.vercel.app/logo.png',
      image: 'https://business-sathi.vercel.app/og-about.png',
      telephone: '+919302088025',
      email: 'hello@business-sathi.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ujjain',
        addressRegion: 'Madhya Pradesh',
        postalCode: '456010',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 23.1765,
        longitude: 75.7885
      },
      founder: {
        '@type': 'Person',
        name: 'Aamin Patel',
        jobTitle: 'Founder & Lead Developer',
        worksFor: { '@id': 'https://business-sathi.vercel.app/#organization' },
        url: 'https://business-sathi.vercel.app/about',
        image: { '@type': 'ImageObject', url: '/profile.png' },
        knowsAbout: ['Next.js', 'React', 'Web Development', 'SEO']
      },
      knowsAbout: ['Website Development', 'Next.js', 'SEO', 'Travel Portals'],
      areaServed: ['Indore', 'Ujjain', 'Madhya Pradesh', 'India'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Website Development Indore'
            }
          }
        ]
      }
    }
  ]
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        key="about-schema"
      />
      <AboutClient />
    </>
  )
}
