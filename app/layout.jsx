import { Poppins, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppClient } from './AppClient'
import Script from 'next/script'

// Fonts configuration with CSS variables
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://business-sathi.vercel.app'),
  title: {
    default: 'Business Sathi | Website Development Company Indore Ujjain',
    template: '%s | Business Sathi'
  },
  description: 'Business Sathi - #1 website development company in Indore & Ujjain. SEO-optimized Next.js websites for travel agencies and startups.',
  verification: {
    google: 'SpeVecqWTh2X61e4RV8XTjrx8FkRCkYW5J705R4KZFM',
  },
  alternates: {
    canonical: '/',
  },
  // Baaki metadata ko concise rakha hai taaki verification tag jaldi detect ho
  keywords: 'website development company Indore, web developer Ujjain, web design MP',
  authors: [{ name: 'Business Sathi' }],
  robots: 'index, follow',
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'Business Sathi',
  url: 'https://business-sathi.vercel.app',
  logo: 'https://business-sathi.vercel.app/logo.png',
  telephone: '+919302088025',
  priceRange: '₹₹',
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
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${geistMono.variable}`}>
      <head>
        {/* Verification meta tag ko head mein manually bhi daal sakte hain agar metadata object se kaam na bane */}
<meta name="google-site-verification" content="SpeVecqWTh2X61e4RV8XTjrx8FkRCkYW5J705R4KZFM" />      </head>
      <body className={`${poppins.className} ${geistMono.className} antialiased`}>
        
        {/* Counter.dev */}
        <Script
          id="counter-dev-script"
          src="https://cdn.counter.dev/script.js"
          data-id="95795ebe-d6a8-4887-abef-7dbb03a06eb2"
          data-utcoffset="6"
          strategy="lazyOnload"
        />

        {/* JSON-LD Schema */}
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