import { Poppins, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppClient } from './AppClient'

const _poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: 'Business Sathi | Digital Solutions for Business Growth',
  description: 'Business Sathi offers expert digital solutions including websites, growth strategies, and online success for small businesses and startups.',
  keywords: 'business partner India, digital solutions, website development, small business growth, startup partner, affordable business websites, digital success partner',
  openGraph: {
    title: 'Business Sathi | Partner for Digital Business Growth',
    description: 'Your trusted partner for websites, digital strategies, and business success. Expert solutions for startups and small businesses.',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      <body className={`${_poppins.className} font-sans antialiased bg-background text-foreground`}>
        <AppClient>
          {children}
        </AppClient>
      </body>
    </html>
  )
}
