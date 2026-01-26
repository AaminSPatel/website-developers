import { Poppins, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppClient } from './AppClient'

const _poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: 'Website Developers India | Expert Freelance Web Design & Development',
  description: 'Professional freelance web development services for startups and businesses in India. Custom website design, development, and optimization by experienced developers. Affordable websites under ₹1.3 lakh.',
  keywords: 'freelance web developer, web design, website development, startup development, custom websites, freelance website developer India, small business website developer, Next.js developer India, responsive website services under ₹1.3 lakh',
  creator: 'Website Developers',
  generator: 'Next.js',
  metadataBase: new URL('https://website-developers.vercel.app'),
  alternates: {
    canonical: 'https://website-developers.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://website-developers.vercel.app',
    title: 'Website Developers India | Expert Freelance Web Design & Development',
    description: 'Professional freelance web development services for startups and businesses in India. Affordable websites under ₹1.3 lakh.',
    siteName: 'Website Developers',
    images: [
      {
        url: 'https://website-developers.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Website Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Developers India | Expert Freelance Web Design & Development',
    description: 'Professional freelance web development services for startups and businesses in India. Affordable websites under ₹1.3 lakh.',
    creator: '@websitedevelopers',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.jpeg',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: '#1a1a1a',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Website Developers',
              url: 'https://website-developers.vercel.app',
              logo: 'https://website-developers.vercel.app/logo.png',
              description: 'Professional freelance web development services for startups and businesses in India. Affordable websites under ₹1.3 lakh.',
             /*  sameAs: [
                'https://www.linkedin.com',
                'https://www.twitter.com',
                'https://www.github.com'
              ], */
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91 93020 88025',
                contactType: 'Customer Service',
                areaServed: 'India',
                availableLanguage: 'en'
              },
              serviceType: 'Freelance Web Development',
              areaServed: [
                {
                  '@type': 'Country',
                  name: 'India'
                }
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Web Development Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Small Business Website Development',
                      description: 'Affordable website development for small businesses under ₹1.3 lakh.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Next.js Development',
                      description: 'Custom Next.js web development services in India.'
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <AppClient>
          {children}
        </AppClient>
      </body>
    </html>
  )
}
