import { PageHero } from '@/components/PageHero'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { FaqSection } from '@/components/home/FaqSection'
import { CtaSection } from '@/components/home/CtaSection'
import { WhyChooseSection } from '@/components/home/WhyChooseSection'
import { SeoContentSection } from '@/components/home/SeoContentSection'
import Link from 'next/link'

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
       <PageHero
      effect="zoom" // ya "zoom" ya "simple"
      images={[
        '/hero3.png'
      ]}
      badge="🏆 Best Affordable Web Design Services in Indore"
      title="Custom Website Development for Indore Small Businesses"
      highlightedText="Website Development"
      subtitle={
        <>
          Searching for <strong>Affordable Web Design Services in Indore</strong>? I help
          small businesses, self-employed professionals, and travel agencies
          in Indore and Ujjain get more leads. Explore our{" "}
          <Link href="/services" className="text-primary underline">
            web development services
          </Link>{" "}
          or check our{" "}
          <Link href="/projects" className="text-primary underline">
            recent portfolio
          </Link>{" "}
          to see how we grow local brands.
        </>
      }
      ctaPrimary={{
        text: "Free Website Consultation",
        href: "tel:+919302088025",
        icon: "call"
      }}
      ctaSecondary={{
        text: "View Case Studies",
        href: "/projects"
      }}
    />
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

