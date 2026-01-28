import { ServicesClient } from './ServicesClient'

export const metadata = {
  // Title: Service + Location + Niche
  title: 'Web Development Services India | Travel, Small Business & Portfolio Websites',
  
  // Description: Problem Solving Approach + Tech + ROI
  description: 'Looking for expert Web Development Services in India? We specialize in building fast, SEO-optimized websites for Travel Agencies, Small Businesses, and Freelancers using Next.js & React. From custom e-commerce stores to personal portfolios, get a mobile-friendly site that drives sales. Affordable packages starting under ₹1.3 Lakh.',
  
  // Keywords Strategy: Broken down by category
  keywords: [
    // Core Services
    'web development services India',
    'custom website design company',
    'Next.js development services',
    'freelance web developer India',
    
    // Niche Specific
    'travel agency website development',
    'small business website packages',
    'personal portfolio website builder',
    'restaurant website design',
    
    // Location Based
    'web developer in Indore',
    'website design Mumbai',
    'affordable web development Delhi',
    
    // Tech & Benefits
    'SEO friendly website design',
    'mobile responsive web development',
    'fast loading websites',
    'React js developer for hire'
  ].join(', '),
  
  openGraph: {
    title: 'Web Development Services India | Grow Your Business Online',
    description: 'Custom websites for Travel Agencies, Startups & Freelancers. Fast, SEO-ready, and Affordable.',
    url: 'https://yourwebsite.com/services', // Apna URL add karein
    type: 'website',
  }
}

export default function ServicesPage() {
  return <ServicesClient />
}