import { ProjectsClient } from './ProjectsClient'

export const metadata = {
  // Title Format: Main Keyword | Niche/Industry Focus | USP/Location
  title: 'Web Development Portfolio India | Travel Agency & Small Business Case Studies',
  
  // Description: Hook + Specific Niches + Tech Stack + Outcome + Call to Action
  description: 'Explore our Web Development Portfolio showcasing high-performance websites for Travel Agencies, Small Businesses, and Freelancers in India. See real case studies of Next.js & React projects that increased leads and sales for clients in Mumbai, Delhi, Bangalore, and Indore. From booking engines to portfolio sites, discover affordable, SEO-optimized solutions.',
  
  // Keywords: Focused on "Examples", "Case Studies", and specific niches rather than generic terms
  keywords: 'web development portfolio India, travel agency website design examples, small business website case studies, freelance web developer projects, Next.js portfolio, e-commerce website development India, real estate website design, personal portfolio examples, responsive web design case studies, Indore web developer portfolio, affordable website projects India',
  
  // Open Graph for better sharing on WhatsApp/LinkedIn
  openGraph: {
    title: 'Real Results: Web Development Portfolio & Case Studies',
    description: 'See how we transform businesses with custom websites. Check out our latest projects for Travel Agencies, Startups, and Local Businesses.',
    url: 'https://yourwebsite.com/projects', // Apna actual domain yahan add karein
    siteName: 'Your Brand Name',
    locale: 'en_IN',
    type: 'website',
  },
  
  // Robots tag ensures Google reads this page
  robots: {
    index: true,
    follow: true,
  }
}

export default function ProjectsPage() {
  return <ProjectsClient />
}