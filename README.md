# Website Developers - Professional Freelance Web Development Site

A high-conversion, SEO-optimized freelance website built with Next.js 16, React, JavaScript, TailwindCSS v4, and Framer Motion. Designed specifically to attract business owners and startup founders with a clean, premium, trust-focused UI.

## Features

### 🎨 Modern Design & UX
- Mobile-first responsive design
- Smooth animations with Framer Motion
- Premium color psychology and typography
- Semantic HTML5 for accessibility
- ARIA roles and keyboard navigation
- Custom components (no Radix UI dependencies)

### 📄 Pages Included
- **Home**: Hero, services showcase, featured projects, testimonials, FAQ, CTA
- **About**: Company story, team, values, stats
- **Services**: Detailed service cards with features
- **Projects**: Portfolio with filtering by category
- **Case Studies**: In-depth success stories with metrics and testimonials
- **Blog**: Article listing with filtering
- **Contact**: Contact form with validation and contact info

### 🔍 SEO Optimization (2026 Best Practices)
- **Metadata**: Dynamic meta titles/descriptions per page
- **Schema Markup**: JSON-LD Organization, Service, FAQ, Breadcrumb
- **Open Graph & Twitter Cards**: Social media sharing optimization
- **Sitemap**: Auto-generated sitemap.xml for search engines
- **Robots.txt**: Crawl directives for search bots
- **Core Web Vitals**: Performance optimized with lazy loading
- **Semantic HTML**: Proper heading hierarchy (H1-H6)
- **Canonical URLs**: Prevent duplicate content issues
- **Internal Linking**: Strategic link structure
- **Keyword Clustering**: Content organized by topics
- **Accessibility**: WCAG 2.1 AA compliant

### 🛠️ Technology Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript (JSX)
- **Styling**: TailwindCSS v4
- **Animation**: Framer Motion
- **Icons**: React Icons
- **State Management**: React Context API
- **Forms**: Custom form handling with validation

### 📊 Centralized Data Management
- **SiteContext**: React Context API stores all global data
- Services, projects, case studies, testimonials, blog posts
- Contact information and navigation
- Easy to update and maintain

## Project Structure

```
app/
├── layout.jsx              # Root layout with metadata
├── page.jsx               # Home page
├── context/
│   └── SiteContext.jsx    # Centralized data context
├── about/
│   ├── page.jsx           # About page (server)
│   └── AboutClient.jsx    # About page (client)
├── services/
│   ├── page.jsx           # Services page (server)
│   └── ServicesClient.jsx # Services page (client)
├── projects/
│   ├── page.jsx           # Projects page (server)
│   └── ProjectsClient.jsx # Projects page (client)
├── case-studies/
│   ├── page.jsx           # Case studies page (server)
│   └── CaseStudiesClient.jsx
├── blog/
│   ├── page.jsx           # Blog page (server)
│   └── BlogClient.jsx     # Blog page (client)
├── contact/
│   ├── page.jsx           # Contact page (server)
│   └── ContactClient.jsx  # Contact page (client)
├── api/
│   └── schema/
│       └── route.jsx      # JSON-LD schemas API
└── RootLayoutWrapper.jsx  # Provider wrapper

components/
├── ui/
│   ├── Button.jsx         # Custom button component
│   ├── Card.jsx           # Custom card component
│   ├── Input.jsx          # Input, Textarea, Select
│   └── Badge.jsx          # Badge component
├── Header.jsx             # Navigation header
├── Footer.jsx             # Footer with links
├── home/
│   ├── HeroSection.jsx
│   ├── ServicesSection.jsx
│   ├── ProjectsSection.jsx
│   ├── TestimonialsSection.jsx
│   ├── FaqSection.jsx
│   └── CtaSection.jsx
└── contact/
    ├── ContactForm.jsx
    └── ContactInfo.jsx

public/
├── sitemap.xml            # SEO sitemap
└── robots.txt             # Robots directives
```

## Getting Started

### Prerequisites
- Node.js 18+ (automatically handled in v0)
- npm or yarn

### Installation

```bash
# Clone or download the project
# Install dependencies (v0 handles this automatically)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Customization

### Update Site Data
Edit `/app/context/SiteContext.jsx` to customize:
- Navigation menu
- Services offered
- Portfolio projects
- Case studies
- Testimonials
- Blog posts
- Contact information
- SEO metadata

### Customize Styling
- Update design tokens in `/app/globals.css`
- Modify Tailwind configuration in `next.config.mjs`
- All colors use CSS custom properties for easy theming

### Add New Pages
1. Create new folder in `/app/[page-name]`
2. Create both `page.jsx` (server) and `[page-name]Client.jsx` (client)
3. Export metadata from server page
4. Import and render client component

### Update Colors
Edit the CSS custom properties in `/app/globals.css`:
```css
:root {
  --primary: oklch(0.205 0 0);          /* Main brand color */
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);          /* Secondary color */
  --accent: oklch(0.97 0 0);             /* Accent color */
  /* ... more colors ... */
}
```

## SEO & Performance

### Implemented SEO Best Practices
✅ Semantic HTML5 with proper heading hierarchy
✅ Dynamic meta titles and descriptions
✅ Open Graph and Twitter card optimization
✅ JSON-LD structured data (Organization, Service, FAQ)
✅ Sitemap.xml and robots.txt
✅ Canonical URLs
✅ Internal linking strategy
✅ Mobile optimization
✅ Core Web Vitals optimization
✅ Image optimization
✅ Accessibility (ARIA labels, keyboard navigation)

### Performance Optimization
- Lazy loading for images and components
- Code splitting with Next.js
- Optimized animations (no performance loss)
- Static generation where possible
- Image optimization with Next.js Image component

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Environment Setup
1. Update sitemap URLs from `website-developers.com` to your domain
2. Update contact information in SiteContext
3. Customize metadata for your brand
4. Add Google Analytics and other tracking (optional)

## Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: All modern versions

## Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- Proper color contrast
- ARIA labels where needed

## License
This project is ready for production use and customization.

## Support
For questions or customization needs, refer to the documentation in each component file.
