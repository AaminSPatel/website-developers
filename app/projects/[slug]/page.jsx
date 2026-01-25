import { ProjectSlugClient } from './ProjectSlugClient'
import { Metadata } from 'next'
import { projectDetails } from '../../data/Projects'

export async function generateMetadata({ params }) {
  const { slug } = await params
  // Find the project data
  const project = projectDetails?.find(p => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found | Freelance Web Development Projects India | Portfolio Case Studies',
      description: 'The requested project could not be found. Explore our comprehensive portfolio of successful freelance web development projects in India, showcasing expertise in creating stunning websites for small businesses, startups, and entrepreneurs with affordable solutions under ₹1.3 lakh.',
    }
  }

  const title = `${project.headline} | Freelance Web Development Project India | ${project.industry} Business Website | Next.js Portfolio Case Study`
  const description = `Dive deep into our detailed ${project.headline.toLowerCase()} web development project case study, showcasing professional freelance services in India. This comprehensive portfolio project demonstrates how we transformed a ${project.industry.toLowerCase()} business with a custom website delivering exceptional results and ROI. Explore the complete project journey from initial consultation to successful launch, including challenges faced, innovative solutions implemented, and measurable business outcomes achieved. Our project highlights technical expertise in Next.js, React, and modern web technologies combined with strategic SEO implementation and user experience design that drives conversions. Learn about our proven process, from requirement analysis and custom development to testing, deployment, and ongoing support. Discover quantifiable results including increased customer acquisition, improved conversion rates, enhanced brand visibility, and significant ROI. This real-world example illustrates how professional web development can accelerate business growth and establish competitive advantage in the digital marketplace for small businesses and entrepreneurs in India.`

  const keywords = [...(project.techStack || []), 'freelance web development project India', 'portfolio case study', 'business website transformation', `${project.industry} web development`, 'Next.js project portfolio', 'React development case study', 'SEO implementation success', 'user experience design', 'conversion optimization', 'customer acquisition increase', 'business growth digital', 'ROI web development', 'technical expertise showcase', 'modern web technologies', 'strategic digital marketing', 'measurable business results', 'website performance metrics', 'client success story', 'professional portfolio project', 'web development excellence', 'digital transformation case', 'competitive advantage website', 'brand visibility improvement', 'conversion rate optimization', 'online presence success', 'web development ROI', 'business success metrics', 'affordable web solutions', 'small business websites', 'startup digital transformation']

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Website Developers India' }],
    creator: 'Website Developers India',
    publisher: 'Website Developers India',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url: `https://website-developers.com/projects/${slug}`,
      siteName: 'Website Developers India',
      images: [
        {
          url: project.images[0] || '/placeholder.jpg',
          width: 1200,
          height: 630,
          alt: `${project.headline} - Freelance Web Development Project India`,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.images[0] || '/placeholder.jpg'],
      creator: '@websitedevelopers',
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  }
}

export default async function ProjectSlugPage({ params }) {
  const { slug } = await params
  return <ProjectSlugClient slug={slug} />
}
