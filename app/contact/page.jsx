import { ContactClient } from './ContactClient'

export const metadata = {
  title: {
    absolute: 'Contact Business Sathi | Website Development Quote Indore Ujjain MP | WhatsApp +91 9302088025'
  },
  description: 'Contact Business Sathi for professional website development in Indore & Ujjain. Get free quote for business websites, travel portals, e-commerce. Call/WhatsApp +91 93020 88025. Serving MP businesses.',
  keywords: [
    'contact web developer Indore',
    'website quote Ujjain',
    'hire Next.js developer MP',
    'travel agency website contact',
    'business website developer phone',
    'WhatsApp web development Indore',
    'small business website quote',
    'Business Sathi contact'
  ].join(', '),
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Business Sathi | Free Website Quote Indore Ujjain',
    description: 'Get your custom website quote today. WhatsApp support for Indore Ujjain MP businesses.',
    type: 'website',
    url: 'https://business-sathi.vercel.app/contact',
    images: [{ url: '/og-home.svg', width: 1200, height: 630, alt: 'Contact Business Sathi web developers Indore' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Business Sathi | Web Developer Indore',
    description: 'Free website quotes. WhatsApp ready.',
    images: ['/og-home.svg']
  },
  robots: { index: true, follow: true }
}

// ContactPage schema
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Business Sathi - Website Development Indore',
  description: 'Contact form and information for Business Sathi website development services',
  url: 'https://business-sathi.vercel.app/contact',
  publisher: {
    '@type': 'Organization',
    name: 'Business Sathi',
    url: 'https://business-sathi.vercel.app',
    telephone: '+919302088025',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919302088025',
      contactType: 'customer service',
      availableLanguage: 'Hindi, English'
    }
  }
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        key="contact-schema"
      />
      <ContactClient />
    </>
  )
}
