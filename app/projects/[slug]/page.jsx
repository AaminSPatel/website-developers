import { ProjectSlugClient } from './ProjectSlugClient'
import { projectDetails } from '../../data/Projects'

// Generate Dynamic Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = projectDetails?.find(p => p.slug === slug)

  // Fallback if project not found
  if (!project) {
    return {
      title: 'Project Not Found | Website Developers India',
      description: 'The requested case study could not be found.',
      robots: { index: false }
    }
  }

  // 1. Title Strategy: Project Name + Industry + "Case Study"
  const title = `${project.headline} - Web Design Case Study | ${project.industry} Website India`

  // 2. Description Strategy: Problem -> Solution -> Tech -> Outcome (Natural Flow)
  const description = `Read how we built a ${project.industry.toLowerCase()} website for ${project.headline}. Challenges: ${project.problem?.substring(0, 50)}... Solution: A fast Next.js & React app. Result: ${project.results?.[0] || 'Increased engagement'}. Freelance web development project based in India.`

  // 3. Keywords Strategy: Specific + Niche + Location (No spamming)
  const baseKeywords = [
    `${project.industry} website design`,
    `Next.js case study ${project.industry}`,
    'freelance web developer India',
    'web development portfolio',
    'React.js project example',
    ...(project.techStack || [])
  ]

  return {
    title,
    description,
    keywords: baseKeywords.join(', '), // Keeps it clean
    openGraph: {
      title,
      description,
      url: `https://yourwebsite.com/projects/${slug}`, // Apna domain lagana
      siteName: 'Website Developers India',
      images: [
        {
          url: project.images[0] || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${project.headline} Website Preview`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.images[0] || '/og-image.jpg'],
    },
  }
}

export default async function ProjectSlugPage({ params }) {
  const { slug } = await params
  return <ProjectSlugClient slug={slug} />
}