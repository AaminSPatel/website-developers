import { contact } from "../../data/Contact"

export async function GET() {
  const schemas = {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Website Developers',
      url: 'https://website-developers.vercel.app',
      logo: 'https://website-developers.vercel.app/logo.png',
      description: 'Professional freelance web development services for startups and businesses.',
      foundingDate: '2023',
      founders: [
        {
          '@type': 'Person',
          name: 'Website Developers'
        }
      ],
      sameAs: [
        'https://www.linkedin.com/company/website-developers',
        'https://www.twitter.com/websitedevelopers',
        'https://www.github.com/websitedevelopers'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: contact.phone,
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: 'en'
      }
    },

    services: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Website Developers',
      description: 'Web Development & Design Services',
      areaServed: {
        '@type': 'Country',
        name: 'IN'
      },
      offers: [
        {
          '@type': 'Service',
          name: 'Web Design',
          description: 'Beautiful, modern designs that convert visitors into customers.',
          areaServed: 'IN'
        },
        {
          '@type': 'Service',
          name: 'Web Development',
          description: 'High-performance, scalable websites built with latest technologies.',
          areaServed: 'IN'
        },
        {
          '@type': 'Service',
          name: 'E-Commerce Solutions',
          description: 'Powerful e-commerce solutions with payment integration and analytics.',
          areaServed: 'IN'
        },
        {
          '@type': 'Service',
          name: 'SEO & Marketing',
          description: 'Increase visibility and drive organic traffic to your website.',
          areaServed: 'IN'
        }
      ]
    },

    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is your typical project timeline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most projects take between 4-12 weeks depending on complexity and scope. We break down the project into phases and keep you updated throughout the process.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide ongoing support and maintenance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! We offer ongoing support and maintenance packages to keep your website running smoothly, secure, and up-to-date with the latest features.'
          }
        },
        {
          '@type': 'Question',
          name: 'What technologies do you use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We primarily use Next.js, React, Node.js, PostgreSQL, and other modern technologies. We choose the best stack for your specific needs.'
          }
        },
        {
          '@type': 'Question',
          name: 'Will my website be optimized for SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We implement comprehensive SEO best practices including semantic HTML, meta tags, schema markup, and performance optimization.'
          }
        }
      ]
    },

    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://website-developers.vercel.app/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://website-developers.vercel.app/services'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Projects',
          item: 'https://website-developers.vercel.app/projects'
        },
         {
          '@type': 'ListItem',
          position: 4,
          name: 'Blogs',
          item: 'https://website-developers.vercel.app/blog'
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Contact',
          item: 'https://website-developers.vercel.app/contact'
        },

      ]
    },

    caseStudies: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Web Development Case Studies',
      description: 'Comprehensive collection of freelance web development case studies showcasing successful projects, measurable results, and business transformations in India.',
      url: 'https://website-developers.vercel.app/projects',
      mainEntity: {
        '@type': 'ItemList',
        name: 'Case Studies',
        description: 'Real-world examples of successful web development projects with detailed results and outcomes.',
        numberOfItems: 8,
        itemListElement: [
          {
            '@type': 'CreativeWork',
            '@id': 'https://website-developers.vercel.app/projects/safar-sathi-multi-service-growth',
            name: 'Safar Sathi Booking Website Development',
            description: 'We built a unified multi-service booking platform that combines ride-hailing, hotel bookings, and logistics services in one seamless experience. The platform features real-time driver tracking, instant hotel availability, and integrated payment processing. We created separate dashboards for customers, drivers, and hotel managers to streamline operations and improve service delivery.',
            creator: {
              '@type': 'Organization',
              name: 'Website Developers'
            },
            datePublished: '2025-11-15',
            about: {
              '@type': 'Thing',
              name: 'Booking Platform Website'
            }
          },
          {
            '@type': 'CreativeWork',
            '@id': 'https://website-developers.vercel.app/projects/avantika-travels-booking-increase',
            name: 'Avantika Travels Website',
            description: 'We built a comprehensive travel booking platform that puts customer convenience first. The new website features instant WhatsApp integration, allowing potential travelers to connect immediately with booking agents. We created an intuitive package browsing system with detailed destination information, pricing, and booking forms that convert visitors into paying customers.',
            creator: {
              '@type': 'Organization',
              name: 'Website Developers'
            },
            datePublished: '2026-01-21',
            about: {
              '@type': 'Thing',
              name: 'Travel Agency Website'
            }
          }
        ]
      },
      provider: {
        '@type': 'Organization',
        name: 'Website Developers',
        url: 'https://website-developers.vercel.app'
      }
    }
  }

  return Response.json(schemas, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}
