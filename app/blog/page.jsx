import { BlogClient } from './BlogClient'
export const metadata = {
  title: 'Web Development & SEO Blog | Tips for Businesses in Indore & Ujjain',

  description:
    'Expert guides on website development, Local SEO for Indore & Ujjain businesses, travel agency digital marketing, and growth strategies for small businesses across Madhya Pradesh.',

  keywords: [
    'web development blog India',
    'SEO tips for small business India',
    'local SEO Indore',
    'local SEO Ujjain',
    'website development tips Madhya Pradesh',
    'travel agency website guide',
    'digital marketing for small business India',
    'Next.js tutorials India',
    'business website tips Indore',
    'how to rank on Google in India',
  ],

  alternates: {
    canonical: 'https://business-sathi.vercel.app/blog',
  },

  openGraph: {
    title: 'Business Sathi Blog — SEO & Web Dev Tips for Indian Businesses',
    description:
      'Practical articles on Local SEO, website development, and digital growth for small businesses and travel agencies in Indore, Ujjain & across India.',
    url: 'https://business-sathi.vercel.app/blog',
    siteName: 'Business Sathi',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/og-blog.png', width: 1200, height: 630, alt: 'Business Sathi Blog' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Business Sathi Blog — Web Dev & SEO Tips',
    description: 'Expert guides on Local SEO and website development for Indian businesses.',
    images: ['/og-blog.png'],
  },

  robots: { index: true, follow: true },
}

// Blog listing schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Business Sathi Blog',
  description: 'Web development, SEO, and digital marketing guides for businesses in Indore, Ujjain & Madhya Pradesh',
  url: 'https://business-sathi.vercel.app/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Business Sathi',
    url: 'https://business-sathi.vercel.app',
    logo: { '@type': 'ImageObject', url: 'https://business-sathi.vercel.app/apple-icon.jpeg' },
  },
  inLanguage: 'en-IN',
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  )
}