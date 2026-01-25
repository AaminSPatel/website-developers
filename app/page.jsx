import { HeroSection } from '@/components/home/HeroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { FaqSection } from '@/components/home/FaqSection'
import { CtaSection } from '@/components/home/CtaSection'
import { WhyChooseSection } from '../components/home/WhyChooseSection'

export const metadata = {
  title: 'Expert Freelance Website Developer India | Professional Web Design & Development Services | Affordable Websites Under ₹1.3 Lakh | Next.js Developer India',
  description: 'Transform your business with professional freelance web development services in India. As an expert freelance website developer, I specialize in creating stunning, responsive websites for small businesses, startups, and entrepreneurs. Get custom business websites, e-commerce solutions, SEO-optimized sites, and mobile-friendly designs all under ₹1.3 lakh. Whether you need a professional website for your travel agency, affordable website for doctors, restaurant website, or any business, I deliver high-quality results with modern technologies like Next.js, React, and Tailwind CSS. Boost your online presence, attract more customers, and grow your business with affordable, fast-loading websites that rank well on search engines. Contact me today for a free consultation and quote. WhatsApp: +91 93020 88025. Services include web design, development, SEO optimization, maintenance, and ongoing support for businesses across India.',
  keywords: 'freelance website developer India, small business website developer, professional website for travel agency, affordable website for doctors, Next.js developer India, responsive website services under ₹1.3 lakh, custom business websites, e-commerce website development, SEO-friendly websites, mobile-friendly website design, restaurant website developer, startup website development, web design India, website development services, affordable web development, professional web developer freelance, Next.js web development, React developer India, Tailwind CSS websites, business website optimization, online presence improvement, customer acquisition websites, search engine ranking websites, website maintenance services, web development consultation, affordable website packages, small business digital solutions, entrepreneur website services, local business websites, professional website portfolios, web development projects, website redesign services, custom web applications, responsive web design India',
  openGraph: {
    title: 'Expert Freelance Website Developer India | Professional Web Design & Development Services | Affordable Websites Under ₹1.3 Lakh',
    description: 'Transform your business with professional freelance web development services in India. Expert freelance website developer offering custom business websites, e-commerce solutions, and SEO-optimized sites under ₹1.3 lakh.',
    type: 'website'
  }
}

export default function Home() {
  return (
    <>
      <HeroSection />
    {/*   <KnotStructure />
      <LineGrid />
      <Ring />
      <WaveStructure />
      <DotsStructure />
      <Pyramid />
      <NetworkStructure />
      <CubeStructure />
      <BackgroundGrid />
      <SphereStructure /> */}
      <ServicesSection />
      <WhyChooseSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
