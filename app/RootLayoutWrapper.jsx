'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function RootLayoutWrapper({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}
