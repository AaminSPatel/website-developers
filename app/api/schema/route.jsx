import { contact } from "../../data/Contact"

export async function GET() {
  const baseUrl = 'https://website-developers.vercel.app' // Centralized URL
  const mainKeyword = "Freelance Web Developer India"

  const schemas = {
    // 1. Organization & Local Business Schema (The most important one)
    organization: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService', // Better than 'Organization' for freelancers/agencies
      name: 'Website Developers India',
      image: `${baseUrl}/logo.png`,
      url: baseUrl,
      telephone: contact.phone,
      email: contact.email,
      priceRange: '₹15,000 - ₹1,50,000', // Helps appear in rich snippets
      description: `Top-rated ${mainKeyword} offering custom Next.js and React websites. specialized in Travel Agency Portals, Small Business Websites, and SEO services under ₹1.3 Lakh.`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '22.7196', // Indore Coordinates
        longitude: '75.8577'
      },
      foundingDate: '2023',
      founder: {
        '@type': 'Person',
        name: 'Aamin', // Aapka naam ya Brand Owner ka naam
        jobTitle: 'Senior Web Developer'
      },
      sameAs: [
        'https://www.linkedin.com/company/website-developers',
        'https://www.instagram.com/websitedevelopers',
        'https://www.facebook.com/websitedevelopers'
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:00',
        closes: '20:00'
      }
    },

    // 2. WebSite Schema (For Sitelinks Search Box)
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: baseUrl,
      name: 'Website Developers India',
      alternateName: 'Freelance Web Developer Indore',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    },

    // 3. Services Schema (ItemList)
    services: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'Service',
          position: 1,
          name: 'Custom Website Development',
          description: 'Tailored Next.js and React websites for startups and small businesses in India.',
          provider: {
            '@type': 'ProfessionalService',
            name: 'Website Developers India'
          }
        },
        {
          '@type': 'Service',
          position: 2,
          name: 'Travel Portal Development',
          description: 'Booking engines and itinerary management systems for Travel Agencies.',
          provider: {
            '@type': 'ProfessionalService',
            name: 'Website Developers India'
          }
        },
        {
          '@type': 'Service',
          position: 3,
          name: 'Local SEO Services',
          description: 'Ranking local businesses in Indore, Mumbai, and Delhi on Google Maps.',
          provider: {
            '@type': 'ProfessionalService',
            name: 'Website Developers India'
          }
        }
      ]
    },

    // 4. FAQ Schema (Expanded for Voice Search)
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a freelance web developer cost in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our freelance web development packages start from ₹15,000 for basic business websites and go up to ₹1.3 Lakh for complex custom applications like Travel Portals or E-commerce stores.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide website maintenance services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we offer ongoing support and maintenance. This includes server monitoring, content updates, and security patches to keep your business online 24/7.'
          }
        },
        {
          '@type': 'Question',
          name: 'Why choose Next.js over WordPress?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We use Next.js because it is significantly faster, more secure, and ranks better on Google compared to traditional WordPress sites. It provides a premium user experience for your customers.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can you build websites for clients outside Indore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. While we are based in Indore, we serve clients across Mumbai, Bangalore, Delhi, and internationally using remote collaboration tools.'
          }
        }
      ]
    },

    // 5. Portfolio/Case Studies Schema
    caseStudies: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Web Development Projects Portfolio',
      description: `Case studies of successful projects delivered by our ${mainKeyword} team.`,
      url: `${baseUrl}/projects`,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'CreativeWork',
            position: 1,
            name: 'Safar Sathi - Travel Booking Platform',
            description: 'A multi-service travel booking website with real-time tracking.',
            url: `${baseUrl}/projects/safar-sathi-multi-service-growth`
          },
          {
            '@type': 'CreativeWork',
            position: 2,
            name: 'Avantika Travels - Agency Website',
            description: 'High-conversion travel agency website with WhatsApp booking integration.',
            url: `${baseUrl}/projects/avantika-travels-booking-increase`
          }
        ]
      }
    }
  }

  return Response.json(schemas, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200' // Cache for 24 hours
    }
  })
}