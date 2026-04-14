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
  clients = [],
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
      delay: 0,
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

  const renderHighlightedTitle = () => {
    if (!highlightWords || highlightWords.length === 0) {
      return title
    }

    let result = title
    const parts = []
    let lastIndex = 0

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
      {renderBackground()}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {badge && (
            <motion.div variants={itemVariants}>
              <span className="inline-block px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary mb-6 backdrop-blur-md shadow-lg">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6 text-foreground drop-shadow-lg"
            variants={itemVariants}
          >
            {renderHighlightedTitle()}
          </motion.h1>

          {subtitle && (
            <motion.p
              className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}

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

          {clients && clients.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="relative mt-12"
            >
              {/* Client logos carousel - original code */}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
