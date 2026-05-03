import { ProjectsClient } from './ProjectsClient'

export const metadata = {
  title: {
    absolute: 'Web Development Portfolio Indore | Business Sathi Case Studies Ujjain MP'
  },
  description: 'Business Sathi portfolio showcasing successful website development projects for Indore Ujjain MP businesses. Travel agency websites, e-commerce stores, small business sites. See real results & case studies.',
  keywords: [
    'website development portfolio Indore',
    'web developer case studies Ujjain',
    'Next.js projects Madhya Pradesh',
    'travel agency website examples MP',
    'business website case studies Indore',
    'e-commerce development portfolio',
    'SEO website projects Ratlam Dewas',
    'Business Sathi portfolio'
  ].join(', '),
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Business Sathi Portfolio | Web Development Case Studies Indore Ujjain',
    description: 'Real client results from our website development projects. Travel portals, business sites, portfolios serving MP.',
    type: 'website',
    url: 'https://business-sathi.vercel.app/projects',
    images: [{ url: '/og-projects.png', width: 1200, height: 630, alt: 'Business Sathi web development portfolio Indore' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Sathi Portfolio | Indore Web Developer',
    description: 'Case studies from successful web projects in MP.',
    images: ['/og-projects.png']
  },
  robots: { index: true, follow: true }
}

// Projects ItemList schema
const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Web Development Portfolio Projects',
  description: 'Business Sathi completed website development projects',
  numberOfItems: 6,
  itemListElement: projectDetails.slice(0,10).map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.headline,
      description: project.clientName,
      image: project.images?.[0]?.src || '',
      url: `/projects/${project.slug}`
    }
  }))
}

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        key="projects-schema"
      />
      <ProjectsClient />
    </>
  )
}
