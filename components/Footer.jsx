'use client'

import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { contact } from '@/app/data/Contact'
import TechSphere from './TechSphere'
import Pyramid from './Pyramid'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  // Organized Links for Better Crawling
  const servicesLinks = [
    { href: '/services', label: 'Custom Web Development' },
    { href: '/services', label: 'Travel Portal Solutions' },
    { href: '/services', label: 'E-commerce Stores' },
    { href: '/services', label: 'Local SEO Services' },
    { href: '/services', label: 'Next.js Migration' }
  ]

  const companyLinks = [
    { href: '/about', label: 'About Our Team' },
    { href: '/projects', label: 'Success Stories' },
    { href: '/blog', label: 'Tech & Business Blog' },
    { href: '/contact', label: 'Contact Support' }
  ]

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ]

  const socialIcons = {
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    github: FaGithub,
    instagram: FaInstagram
  }

  return (
    <footer className="bg-gradient-to-tr relative from-black/95 via-slate-950 to-black text-primary-foreground border-t border-border/20 overflow-hidden font-sans">
      
      {/* Background Animations */}
      <section className='absolute z-0 opacity-40 top-0 left-0 h-full w-full pointer-events-none'>
        <div className='absolute z-10 opacity-60 sm:top-30 top-40 left-1/2 sm:left-2/3'>
           <TechSphere line={2} />
        </div>
        <div className='absolute z-10 opacity-60 sm:top-30 top-70 left-1/3 sm:left-1/3'>
           <Pyramid />
        </div>
      </section>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl z-20 relative mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & SEO Description (Word Count Booster) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                 <Image src={'/apple-icon.jpeg'} alt='Freelance Website Developer India Logo' width={40} height={40} className='h-10 w-10 rounded-lg'/>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                WebDev<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="opacity-70 text-sm leading-7 mb-6 pr-4">
              We are a team of expert <strong>Freelance Web Developers in India</strong> dedicated to helping Startups, Travel Agencies, and Small Businesses grow. 
              Using advanced tech like <strong>Next.js and React</strong>, we build mobile-friendly, high-performance websites that rank on Google and drive real sales. 
              Trusted by clients in Indore, Mumbai, and globally.
            </p>
            <div className="flex gap-4">
              {Object.entries(contact.socialLinks).map(([platform, url]) => {
                const Icon = socialIcons[platform]
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all duration-300 border border-white/10"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Services (Internal Linking for SEO) */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <nav>
              <ul className="space-y-3">
                {servicesLinks.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href}
                      className="opacity-70 hover:opacity-100 hover:text-primary transition-all text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <nav>
              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="opacity-70 hover:opacity-100 hover:text-primary transition-all text-sm block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="opacity-70 hover:opacity-100 hover:text-primary transition-all text-sm block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Contact Info (Local SEO) */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <FaMapMarkerAlt className="mt-1 text-primary shrink-0" />
                <p className="text-sm leading-relaxed">
                  <strong>Headquarters:</strong><br/>
                  Indore & Ujjain,<br/>
                  Madhya Pradesh, India - 452001
                </p>
              </div>
              
              <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <FaEnvelope className="text-primary shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-sm hover:underline">{contact.email}</a>
              </div>

              <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <FaWhatsapp className="text-primary shrink-0" size={18} />
                <a href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`} className="text-sm font-semibold hover:underline">
                  {contact.phone} (WhatsApp)
                </a>
              </div>
            </address>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
            <p className="text-center md:text-left">
              &copy; {currentYear} Website Developers India. All rights reserved. | Built with ❤️ & Next.js
            </p>
            <div className="flex items-center gap-6">
               <span className="hidden md:inline">Serving clients in India, USA, UK & UAE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}