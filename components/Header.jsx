'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui'
//import {  X } from 'react-icons/md'
import { Menu, X, ChevronDown } from 'lucide-react'
import { projectDetails } from '@/app/data/Projects'
import Image from 'next/image'

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
    /* { href: '/case-studies', label: 'Case Studies' } */
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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center font-bold text-primary-foreground text-sm md:text-base group-hover:shadow-lg transition-shadow">
              <Image src={'/apple-icon.jpeg'}  alt='Website Developer Logo Image' width={40} height={40} className='h-12 w-12 rounded-xl'/>
            </div>
            <span className="hidden sm:inline text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              WebDev<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}

            {/* Projects Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsProjectsDropdownOpen(true)}
              onMouseLeave={() => setIsProjectsDropdownOpen(false)}
            >
              <div className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm cursor-pointer">
                Projects
                <motion.div
                  animate={{ rotate: isProjectsDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} />
                </motion.div>
              </div>

              <AnimatePresence>
                {isProjectsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                  >
                    {projectDetails.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors"
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        {project.clientName}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navigation.slice(3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button size="md" variant="secondary" className='p-2'>
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border space-y-2 pb-4 transition-all">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors py-2.5 px-2 font-medium rounded-md hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Projects Section */}
            <div>
              <button
                onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors py-2.5 px-2 font-medium rounded-md hover:bg-muted"
              >
                Projects
                <motion.div
                  animate={{ rotate: isMobileProjectsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isMobileProjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 space-y-1 overflow-hidden"
                  >
                    {projectDetails.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="block text-foreground hover:text-primary transition-colors py-2 px-3 text-sm rounded-md hover:bg-muted"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsMobileProjectsOpen(false)
                        }}
                      >
                        {project.clientName}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navigation.slice(3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors py-2.5 px-2 font-medium rounded-md hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-border">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button size="md" variant="secondary" className="w-full p-2">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
