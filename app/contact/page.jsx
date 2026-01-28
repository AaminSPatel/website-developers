import { ContactClient } from './ContactClient'

export const metadata = {
  // Clear Call to Action + Main Keyword + Trust Signal (WhatsApp)
  title: 'Hire Freelance Website Developer India | Get Free Quote | WhatsApp Support',
  
  // Description starts with action, mentions target audience, and ends with contact info
  description: 'Ready to scale your business? Contact our expert web development team in India. Get a free consultation for Travel, Startup, or Small Business websites. Call or WhatsApp: +91 93020 88025.',
  
  // Specific, intent-based keywords
  keywords: 'hire freelance web developer India, web development quote, contact website builder, small business website cost, Next.js developer contact, WhatsApp web developer, Indore web design agency contact',
  
  openGraph: {
    title: 'Start Your Project | Get a Free Web Development Quote',
    description: 'Discuss your project with India\'s trusted freelance developers. Affordable rates for Startups & Small Businesses.',
    type: 'website'
  }
}

export default function ContactPage() {
  return <ContactClient />
}