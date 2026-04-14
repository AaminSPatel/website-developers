import { Poppins, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppClient } from './AppClient'

const _poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: 'Business Sathi | Your Trusted Business Partner for Digital Growth',
  description: 'Business Sathi - Your partner for websites, digital growth, and business success. Expert solutions for startups, small businesses, and professionals.',
  keywords: 'business partner, digital growth, website development, small business websites, startup solutions, business services India, affordable digital solutions',
  creator: 'Business Sathi',
  generator: 'Next.js',
  metadataBase: new URL('https://businesssathi.vercel.app'),
  alternates: {
    canonical: 'https://businesssathi.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://businesssathi.vercel.app',
    title: 'Business Sathi | Your Trusted Business Partner for Digital Growth',
    description: 'Business Sathi - Your partner for websites, digital growth, and business success. Expert solutions for small businesses and startups.',
    siteName: 'Business Sathi',
    images: [
      {
        url: 'https://businesssathi.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Business Sathi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Sathi | Your Trusted Business Partner for Digital Growth',
    description: 'Business Sathi - Your partner for websites, digital growth, and business success. Expert solutions for small businesses and startups.',
    creator: '@businesssathi',
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
      
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZLQWR4XK1R"></script>
<script src="https://cdn.counter.dev/script.js" data-id="95795ebe-d6a8-4887-abef-7dbb03a06eb2" data-utcoffset="6"></script>

        <meta name="google-site-verification" content="Gw0kKrcBORBSuCsj5fpyVGYEYahY47h7CpJufGEWshY" />
      <link
href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Material+Icons"
rel="stylesheet"
/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Business Sathi',
              url: 'https://businesssathi.vercel.app',
              logo: 'https://businesssathi.vercel.app/logo.png',
              description: 'Business Sathi - Your trusted partner for websites, digital growth, and business success in India.',
             /*  sameAs: [
                'https://www.linkedin.com',
                'https://www.twitter.com',
                'https://www.github.com'
              ], */
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+919302088025',
                contactType: 'Customer Service',
                areaServed: 'India',
                availableLanguage: 'en'
              },
              serviceType: 'Business Development Services',
              areaServed: [
                {
                  '@type': 'Country',
                  name: 'India'
                }
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
                      description: 'Affordable website and growth solutions for small businesses.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Website Development',
                      description: 'Custom web development services with modern technologies.'
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
