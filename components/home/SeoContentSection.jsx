'use client'

import { motion } from 'framer-motion'

export function SeoContentSection() {
  return (
    <section className="py-16 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Introduction - National Level */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Expert Website Development Services in India for Business Growth
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Welcome to the hub of high-performance digital solutions. As a specialized <strong>Freelance Website Developer in India</strong>, I don't just write code; I build business assets. In a market flooded with generic templates, my focus is on creating custom, SEO-optimized, and mobile-responsive websites that actually generate leads. Whether you are a Travel Agency in <strong>Delhi</strong>, a startup in <strong>Bangalore</strong>, or a small business owner in <strong>Mumbai</strong>, your business deserves a website that loads in under 2 seconds and ranks on the first page of Google.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Travel Agency Section */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Web Design for Travel Agencies & Tour Operators</h3>
              <p className="text-muted-foreground mb-4">
                The tourism industry requires visually stunning and highly functional websites. I specialize in <strong>Travel Portal Development</strong> that includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li><strong>Dynamic Itinerary Display:</strong> Showcasing day-wise plans beautifully.</li>
                <li><strong>Booking & Inquiry Forms:</strong> Integrated directly with WhatsApp for instant leads.</li>
                <li><strong>SEO for Tourism:</strong> Targeting keywords like "Best Tour Packages in India" to attract global travelers.</li>
                <li><strong>Image Optimization:</strong> Ensuring high-quality travel photos don't slow down your site.</li>
              </ul>
            </motion.div>

            {/* Small Business Section */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Affordable Websites for Small Businesses</h3>
              <p className="text-muted-foreground mb-4">
                Budget shouldn't stop you from going online. I offer <strong>Small Business Website Packages</strong> tailored for:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li><strong>Local Service Providers:</strong> Websites for clinics, consultants, and contractors.</li>
                <li><strong>Retail & E-commerce:</strong> Moving your local shop inventory online with secure payment gateways.</li>
                <li><strong>Lead Generation:</strong> Strategic placement of "Call Now" buttons to convert visitors into customers.</li>
              </ul>
            </motion.div>
          </div>

          {/* Freelancers & Portfolio Section */}
          <motion.div 
            className="mt-12 bg-primary/5 p-8 rounded-2xl border border-primary/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Portfolio Websites for Freelancers & Professionals</h3>
            <p className="text-muted-foreground leading-relaxed">
              In the gig economy, your portfolio is your identity. I build fast, <strong>Personal Portfolio Websites</strong> using Next.js for photographers, content writers, and designers. Unlike Wix or Squarespace, these sites are 100% yours, super fast, and designed to impress international clients. Highlight your case studies, client testimonials, and services with a professional edge.
            </p>
          </motion.div>

          {/* Technical & Location Footer Note */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Why Next.js & Modern Technology?</h3>
            <p className="text-muted-foreground mb-4">
              We move beyond basic WordPress setups. Using <strong>Next.js, React, and Tailwind CSS</strong>, we ensure your site passes Google's Core Web Vitals, offering superior speed and security.
            </p>
            
            <p className="text-sm text-muted-foreground mt-8 border-t border-border pt-6 italic">
              <strong>Location Transparency:</strong> While our development HQ is cost-effectively based in <strong>Indore & Ujjain (Madhya Pradesh)</strong>, we proudly serve a global clientele. Our remote workflow allows us to work seamlessly with clients from Pune, Hyderabad, Chennai, and beyond, delivering premium agency quality at freelance rates.
            </p>
          </motion.div>

        </article>
      </div>
    </section>
  )
}