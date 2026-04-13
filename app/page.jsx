import { HeroSection } from '@/components/home/HeroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { FaqSection } from '@/components/home/FaqSection'
import { CtaSection } from '@/components/home/CtaSection'
import { WhyChooseSection } from '@/components/home/WhyChooseSection'
import { SeoContentSection } from '@/components/home/SeoContentSection'

export const metadata = {
  title: 'Business Sathi | Digital Solutions for Business Growth',
  description: 'Business Sathi offers expert digital solutions including websites, growth strategies, and online success for small businesses and startups.',
  keywords: 'business partner India, digital solutions, website development, small business growth, startup partner, affordable business websites, digital success partner',
  openGraph: {
    title: 'Business Sathi | Partner for Digital Business Growth',
    description: 'Your trusted partner for websites, digital strategies, and business success. Expert solutions for startups and small businesses.',
    type: 'website',
  }
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectsSection />
      <SeoContentSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}

