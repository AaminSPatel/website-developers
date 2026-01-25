'use client'

import { SiteProvider } from './context/SiteContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

export function AppClient({ children }) {
  return (
    <SiteProvider>
      <Header />
      {children}
      <Footer />
      <Analytics />
    </SiteProvider>
  )
}
