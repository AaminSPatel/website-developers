import { AboutClient } from './AboutClient'

export const metadata = {
  // Authority + Tech Stack + Location
  title: 'About Us | Top Freelance Web Developer India | Next.js & React Experts',
  
  // Storytelling: Who we are, What we use, Who we serve
  description: 'Meet the team behind high-performance websites. Based in Indore & serving clients globally, we specialize in affordable Next.js solutions for Startups, Travel Agencies & Freelancers. 3+ years of excellence.',
  
  // Keywords focusing on "Team", "Experience", "Tech Stack"
  keywords: 'freelance web developer team India, Next.js experts India, React js development company, affordable web design agency Indore, about website developers, small business web solutions, professional web portfolio',
  
  openGraph: {
    title: 'About Our Team | Expert Web Developers in India',
    description: 'We combine technical expertise with creative design to build websites that drive real business growth.',
    type: 'profile'
  }
}

export default function AboutPage() {
  return <AboutClient />
}