'use client'

import { SiteProvider } from './context/SiteContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'
import SquircleButton from '@/components/SquircleButton'
import CounterDev from './components/CounterDev'
import { useSiteContext } from './context/SiteContext'
import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppButton() {
  const { contact } = useSiteContext()
  const [phone, setPhone] = useState('')
  
  useEffect(() => {
    if (contact?.phone) {
      // Format to wa.me format
      const cleanPhone = contact.phone.replace(/[^0-9]/g, '')
      if (cleanPhone.startsWith('91')) {
        setPhone(cleanPhone)
      } else {
        setPhone('91' + cleanPhone)
      }
    }
  }, [contact])

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phone}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed  bottom-6 left-6  md:bottom-8 md:left-8 lg:hidden  !z-50">
      <button 
        className="w-15 h-15 bg-white text-teal-500 three-d-box-blue p-0 rounded-full shadow-2xl !min-w-0 group"
        onClick={handleWhatsAppClick}
        style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
         }}
      >
        <FaWhatsapp className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
      </button>
    </div>
  )
}

export function AppClient({ children }) {
  return (
    <SiteProvider>
      <Header />
      {children}
      <Footer />
      <Analytics />
      <WhatsAppButton />
      <CounterDev />
    </SiteProvider>
  )
}
