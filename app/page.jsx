import { HeroSection } from '@/components/home/HeroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { FaqSection } from '@/components/home/FaqSection'
import { CtaSection } from '@/components/home/CtaSection'
import { WhyChooseSection } from '@/components/home/WhyChooseSection'

export const metadata = {
  title: 'Freelance Website Developer India | Travel & Small Business Web Design',
  description: 'Expert freelance website developer in India specialized in building affordable, high-ranking websites for Travel Agencies, Small Businesses, and Freelancers. Serving clients in Mumbai, Delhi, Bangalore with custom Next.js solutions.',
  keywords: 'freelance website developer India, small business website design, travel agency website builder, affordable web development India, Next.js developer, portfolio website maker, SEO friendly website, web design Indore Mumbai Delhi',
  openGraph: {
    title: 'Freelance Website Developer India | Grow Your Business Online',
    description: 'Specialized in high-performance websites for travel agencies, startups, and professionals.',
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
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}