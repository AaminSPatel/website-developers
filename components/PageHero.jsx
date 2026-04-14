'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { MdArrowForward, MdCall, MdCheckCircle } from 'react-icons/md'
import { useEffect, useRef } from 'react'
import SquircleButton from './SquircleButton'

export function PageHero({
  effect = 'simple',
  images,
  title,
  highlightedText,
  highlightWords = [],
  subtitle,
  badge,
  ctaPrimary,
  ctaSecondary,
  clients = [], // Array of client logos: [{ logo: '/path/to/logo.png', name: 'Client Name' }]
  className = ''
}) {
  // Inject keyframes into document head
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style')
      style.textContent = `
        @keyframes zoomPulse {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.15); }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(var(--rotation, 0deg)); 
          }
          50% { 
            transform: translateY(-12px) rotate(var(--rotation, 0deg)); 
          }
        }
        
        @keyframes floatReverse {
          0%, 100% { 
            transform: translateY(0px) rotate(var(--rotation, 0deg)); 
          }
          50% { 
            transform: translateY(8px) rotate(var(--rotation, 0deg)); 
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `
      document.head.appendChild(style)
      
      return () => {
        document.head.removeChild(style)
      }
    }
  }, [])

  // Separate autoplay plugins for different carousels
  const bgAutoplayPlugin = useRef(
    Autoplay({ 
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      playOnInit: true
    })
  )

  const clientsAutoplayPlugin = useRef(
    Autoplay({ 
      delay: 0, // No auto-slide, only manual or drag
      stopOnInteraction: true,
      playOnInit: false
    })
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const renderBackground = () => {
    switch (effect) {
      case 'carousel':
        return (
          <>
            <div className="absolute inset-0">
              <Carousel 
                className="w-full h-full"
                plugins={[bgAutoplayPlugin.current]}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="h-full">
                  {images.map((img, idx) => (
                    <CarouselItem key={idx} className="h-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={img}
                          alt={`Hero background ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="100vw"
                          priority={idx === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95 z-10" />
          </>
        )
      
      case 'zoom':
        return (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${images[0]})`,
                animation: 'zoomPulse 8s ease-in-out infinite'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95 z-10" />
          </>
        )
      
      case 'simple':
        return (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${images[0]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95 z-10" />
          </>
        )
      
      default:
        return <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-10" />
    }
  }

  // Function to highlight multiple words in title
  const renderHighlightedTitle = () => {
    if (!highlightWords || highlightWords.length === 0) {
      return title
    }

    let result = title
    const parts = []
    let lastIndex = 0

    // Sort words by length (longest first) to avoid partial matches
    const sortedWords = [...highlightWords].sort((a, b) => b.length - a.length)
    
    sortedWords.forEach(word => {
      const regex = new RegExp(word, 'g')
      const matches = [...result.matchAll(regex)]
      
      matches.forEach(match => {
        const index = match.index
        if (index >= lastIndex) {
          parts.push({
            text: result.substring(lastIndex, index),
            highlight: false
          })
          parts.push({
            text: word,
            highlight: true
          })
          lastIndex = index + word.length
        }
      })
    })
    
    if (lastIndex < result.length) {
      parts.push({
        text: result.substring(lastIndex),
        highlight: false
      })
    }

    if (parts.length === 0) {
      return title
    }

    return parts.map((part, idx) => 
      part.highlight ? (
        <span key={idx} className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-orange-400 to-red-400 animate-pulse">
          {part.text}
        </span>
      ) : (
        <span key={idx}>{part.text}</span>
      )
    )
  }

  return (
    <section className={`relative overflow-hidden min-h-screen flex flex-col justify-center py-20 md:py-28 ${className}`}>
      {/* Background */}
      {renderBackground()}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          {badge && (
            <motion.div variants={itemVariants}>
              <span className="inline-block px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary mb-6 backdrop-blur-md shadow-lg">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Title with multiple highlights */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6 text-foreground drop-shadow-lg"
            variants={itemVariants}
          >
            {renderHighlightedTitle()}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}

          {/* CTA Buttons */}
          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={itemVariants}
            >
              {ctaPrimary && (
                <Link href={ctaPrimary.href}>
                  <SquircleButton color="orange">
                    <span className="flex items-center gap-2">
                      {ctaPrimary.icon === 'call' && <MdCall className="w-5 h-5" />}
                      {ctaPrimary.text}
                      {ctaPrimary.icon === 'arrow' && <MdArrowForward className="w-5 h-5" />}
                    </span>
                  </SquircleButton>
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href}>
                  <SquircleButton color="white">
                    {ctaSecondary.text}
                  </SquircleButton>
                </Link>
              )}
            </motion.div>
          )}

          {/* Clients/Brands Logo Carousel */}
          {clients && clients.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="relative mt-12"
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  Trusted by Industry Leaders
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
              </div>
              
              <div className="relative px-8 md:px-12">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                    dragFree: true,
                    containScroll: "trimSnaps",
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-6 md:-ml-8">
                    {clients.map((client, idx) => {
                      // Different rotation angles for visual interest
                      const rotationAngle = idx % 2 === 0 
                        ? (idx * 2) % 6 - 3  // -3 to 3 degrees
                        : (idx * -2) % 6 + 3  // Opposite direction
                      
                      // Alternate animation types
                      const animationType = idx % 3 === 0 
                        ? 'float 5s ease-in-out infinite'
                        : idx % 3 === 1 
                          ? 'floatReverse 4.5s ease-in-out infinite'
                          : 'float 6s ease-in-out infinite'
                      
                      return (
                        <CarouselItem key={idx} className="pl-6 md:pl-8 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                          <motion.div
                            className="relative group cursor-pointer"
                            style={{
                              '--rotation': `${rotationAngle}deg`,
                              animation: animationType,
                              animationDelay: `${idx * 0.15}s`
                            }}
                            whileHover={{ 
                              scale: 1.08,
                              rotate: 0,
                              transition: { duration: 0.3, type: "spring", stiffness: 300 }
                            }}
                          >
                            {/* Card with glass morphism effect */}
                            <div className="relative bg-background/40 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 transform hover:shadow-primary/20 hover:shadow-2xl">
                              
                              {/* Shimmer effect on hover */}
                              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div 
                                  className="absolute inset-0"
                                  style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                                    backgroundSize: '200% 100%',
                                    animation: 'shimmer 2s infinite'
                                  }}
                                />
                              </div>
                              
                              {/* Logo Image */}
                              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 flex items-center justify-center">
                                <Image
                                  src={client.logo}
                                  alt={client.name}
                                  fill
                                  className="object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-300"
                                  sizes="(max-width: 768px) 96px, 112px"
                                />
                              </div>
                              
                              {/* Client Name */}
                              <p className="text-sm font-semibold text-center text-foreground/80 group-hover:text-foreground transition-colors">
                                {client.name}
                              </p>
                              
                              {/* Verified badge for featured clients */}
                              {client.featured && (
                                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full p-1 shadow-lg">
                                  <MdCheckCircle className="w-4 h-4 text-white" />
                                </div>
                              )}
                              
                              {/* Decorative corner accents */}
                              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </motion.div>
                        </CarouselItem>
                      )
                    })}
                  </CarouselContent>
                  
                  <CarouselPrevious className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/90 backdrop-blur-md h-12 w-12 rounded-full shadow-xl border-2 border-primary/30 hover:border-primary/50 transition-all" />
                  <CarouselNext className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/90 backdrop-blur-md h-12 w-12 rounded-full shadow-xl border-2 border-primary/30 hover:border-primary/50 transition-all" />
                </Carousel>
              </div>
              
              {/* Drag indicator */}
              <div className="flex justify-center items-center gap-1 mt-8">
                <div className="w-12 h-1.5 bg-primary/20 rounded-full" />
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}