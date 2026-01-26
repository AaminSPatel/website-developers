'use client'

import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'
import { contact } from '@/app/data/Contact'
import TechSphere from './TechSphere'
import Pyramid from './Pyramid'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const navigation = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' }
  ]
  const seo = {
    siteName: 'Website Developers'
  }

  const socialIcons = {
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    github: FaGithub,
    instagram: FaInstagram
  }

  return (
    <footer className="bg-gradient-to-tr relative from-black/90 via-slate-950 to-black text-primary-foreground border-t border-border overflow-hidden">
      
       <section className='absolute z-0 opacity-60 top-0 left-0 h-full w-full'>
      <div  className='absolute z-10  opacity-60 sm:top-30 top-40 left-1/2 sm:left-2/3'>
              <TechSphere line={2} />
      
      </div>
      <div  className='absolute z-10  opacity-60 sm:top-30 top-70 left-1/3 sm:left-1/3'>
              <Pyramid />
      
      </div>
     <div  className='absolute z-10 sm:top-30 top-90  opacity-90 left-[20%] sm:left-1/3 scale-75'>
              <TechSphere />
      </div>
     <div  className='absolute z-10 sm:top-50  opacity-80 top-130 left-0 sm:left-50 scale-95'>
                <TechSphere line={1} />
              {/* bottom wala */}
      
      </div>
     <div  className='absolute z-10 sm:-top-20 -top-30 left-30 sm:left-50  scale-90'>
           
       <TechSphere line={2} />
      </div>
      
        </section>
      
      {/* Main Footer */}
      <div className="max-w-7xl z-20 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center font-bold text-primary-foreground text-sm md:text-base group-hover:shadow-lg transition-shadow">
                            <Image src={'/apple-icon.jpeg'} alt='Website Developer Logo Image' width={40} height={40} className='h-12 w-12 rounded-xl'/>
                          </div>
              <h3 className="text-2xl font-bold">
                WebDev<span className="text-accent">.</span>
              </h3>
            </div>
            <p className="opacity-80 text-sm leading-relaxed">
              Professional website developer serving Ujjain & Indore businesses. Get more customers with fast, mobile-friendly websites. WhatsApp: +91 93020 88025
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-base">Navigation</h4>
            <ul className="space-y-3">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="opacity-80 hover:opacity-100 transition-opacity text-sm hover:translate-x-1 inline-block transition-transform"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-5 text-base">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="opacity-80 hover:opacity-100 transition-opacity text-sm hover:translate-x-1 inline-block transition-transform">Blog & Articles</Link></li>
             {/*  <li><Link href="/case-studies" className="opacity-80 hover:opacity-100 transition-opacity text-sm hover:translate-x-1 inline-block transition-transform">Case Studies</Link></li>
               */}
               <li><Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity text-sm hover:translate-x-1 inline-block transition-transform">Get in Touch</Link></li>
              <li><Link href="/privacy" className="opacity-80 hover:opacity-100 transition-opacity text-sm hover:translate-x-1 inline-block transition-transform">Privacy Policy</Link></li>
              <li><Link href="/terms" className="opacity-80 hover:opacity-100 transition-opacity text-sm hover:translate-x-1 inline-block transition-transform">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-5 text-base">Connect With Us</h4>
            <p className="opacity-80 text-sm mb-4 break-all">{contact.email}</p>
            <p className="text-xs opacity-70 mb-4">Follow us on social media</p>
            <div className="flex gap-3 flex-wrap">
              {Object.entries(contact.socialLinks).map(([platform, url]) => {
                const Icon = socialIcons[platform]
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-80 hover:opacity-100 transition-opacity p-2 hover:bg-primary-foreground/10 rounded-lg"
                    aria-label={platform}
                    title={platform}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm opacity-80 gap-4">
            <p>&copy; {currentYear} {seo.siteName}. All rights reserved.</p>
            <p className="text-center md:text-right">Crafted with care for growth-focused businesses</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
