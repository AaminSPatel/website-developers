'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { projectDetails } from '@/app/data/Projects'
import Image from 'next/image'
import { contact } from '@/app/data/Contact' // Importing contact data

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  const navigation = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProjectsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-[70] bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link 
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Website Developers India - Home"
              title="Freelance Web Developer India"
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-sm shadow-md border border-primary/10 group-hover:shadow-lg transition-all duration-300">
                <Image 
                    src={'/apple-icon.jpeg'} 
                    alt='Freelance Website Developer Logo' 
                    fill
                    className='object-cover'
                    sizes="(max-width: 768px) 40px, 48px"
                    priority
                />
              </div>
              <span className="hidden sm:block text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                WebDev<span className="text-primary">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            <ul className="flex items-center gap-6">
                {navigation.slice(0, 3).map((item) => (
                <li key={item.href}>
                    <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted/50"
                    >
                    {item.label}
                    </Link>
                </li>
                ))}

                {/* Projects Dropdown */}
                <li 
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                    onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                >
                    <button 
                        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted/50 focus:outline-none"
                        aria-expanded={isProjectsDropdownOpen}
                        aria-haspopup="true"
                    >
                        Portfolio
                        <ChevronDown size={14} className={`transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                    {isProjectsDropdownOpen && (
                        <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-xl shadow-xl py-2 z-50 overflow-hidden"
                        >
                        <div className="px-4 py-2 border-b border-border/50">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Recent Case Studies</span>
                        </div>
                        {projectDetails.slice(0, 5).map((project) => (
                            <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors truncate"
                            onClick={() => setIsProjectsDropdownOpen(false)}
                            title={`View case study: ${project.headline}`}
                            >
                            {project.clientName}
                            </Link>
                        ))}
                        <div className="mt-1 border-t border-border/50">
                            <Link href="/projects" className="block px-4 py-3 text-xs font-bold text-center text-primary hover:bg-muted/50">
                                View All Projects →
                            </Link>
                        </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </li>

                {navigation.slice(3).map((item) => (
                <li key={item.href}>
                    <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted/50"
                    >
                    {item.label}
                    </Link>
                </li>
                ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${contact.phone}`} className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Phone size={16} />
                <span>{contact.phone}</span>
            </a>
            <Link href="/contact">
              <Button size="default" variant="default" className="shadow-md hover:shadow-lg transition-all">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <nav className="px-4 pt-2 pb-6 space-y-1">
              {navigation.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Projects Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                  className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  <span>Portfolio</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileProjectsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isMobileProjectsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-muted/30 rounded-md my-1"
                    >
                        <div className="px-2 py-2 space-y-1">
                            {projectDetails.map((project) => (
                                <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-background rounded-md transition-colors"
                                onClick={() => {
                                    setIsMenuOpen(false)
                                    setIsMobileProjectsOpen(false)
                                }}
                                >
                                {project.clientName}
                                </Link>
                            ))}
                             <Link
                                href="/projects"
                                className="block px-3 py-2 text-sm font-semibold text-primary hover:bg-background rounded-md transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                                >
                                View All Case Studies →
                            </Link>
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navigation.slice(3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-border">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full py-6 text-lg" size="lg">
                    Start Your Project
                  </Button>
                </Link>
                <div className="mt-4 text-center">
                    <a href={`tel:${contact.phone}`} className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 py-2">
                        <Phone size={16} /> Need help? Call {contact.phone}
                    </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}