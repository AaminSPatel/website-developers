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
import { MdArrowForward, MdCall } from 'react-icons/md'
import { useEffect, useRef } from 'react'
import SquircleButton from '../SquircleButton'

export function PageHero({
  effect = 'simple',
  images,
  title,
  highlightedText,
  subtitle,
  badge,
  ctaPrimary,
  ctaSecondary,
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
      `
      document.head.appendChild(style)
      
      return () => {
        document.head.removeChild(style)
      }
    }
  }, [])

  // Autoplay plugin setup
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true
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
                plugins={[autoplayPlugin.current]}
                opts={{
                  align: "start",
                  loop: true,
                }}
                onMouseEnter={autoplayPlugin.current.stop}
                onMouseLeave={autoplayPlugin.current.play}
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
                <CarouselPrevious className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-background/80 hover:bg-background h-12 w-12 rounded-full shadow-lg border backdrop-blur-sm" />
                <CarouselNext className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-background/80 hover:bg-background h-12 w-12 rounded-full shadow-lg border backdrop-blur-sm" />
              </Carousel>
            </div>
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 z-10" />
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
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 z-10" />
          </>
        )
      
      case 'simple':
        return (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${images[0]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 z-10" />
          </>
        )
      
      default:
        return <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-10" />
    }
  }

  // Parse title to handle highlighted text
  const renderTitle = () => {
    if (highlightedText) {
      const parts = title.split(highlightedText)
      return (
        <>
          {parts[0]}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-orange-400 to-red-400">
            {highlightedText}
          </span>
          {parts[1]}
        </>
      )
    }
    return title
  }

  return (
    <section className={`relative overflow-hidden min-h-screen flex items-center py-20 md:py-32 ${className}`}>
      {/* Background with effects */}
      {effect !== 'none' && renderBackground()}
      
      {/* Default gradient background when no effect */}
      {effect === 'none' && (
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      )}

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
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary mb-6 backdrop-blur-sm">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6 text-foreground"
            variants={itemVariants}
          >
            {renderTitle()}
          </motion.h1>

          {/* Subtitle with links support */}
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
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              {ctaPrimary && (
                <Link href={ctaPrimary.href}>
                  <SquircleButton color="orange">
                    <span className="flex items-center gap-2">
                      {ctaPrimary.icon === 'call' && <MdCall className="w-4 h-4" />}
                      {ctaPrimary.text}
                      {ctaPrimary.icon === 'arrow' && <MdArrowForward className="w-4 h-4" />}
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
        </motion.div>
      </div>
    </section>
  )
}