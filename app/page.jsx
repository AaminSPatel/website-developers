import { HeroSection } from '@/components/home/HeroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { FaqSection } from '@/components/home/FaqSection'
import { CtaSection } from '@/components/home/CtaSection'
import { WhyChooseSection } from '@/components/home/WhyChooseSection'
import { SeoContentSection } from '@/components/home/SeoContentSection'

export const metadata = {
  title: 'Affordable Web Design Services in Indore | Expert Website Developer Indore',
  description: 'Looking for affordable web design services in Indore? We build high-performance, SEO-friendly websites for small businesses, travel agencies, and self-employed professionals in Indore and Ujjain. Get custom Next.js solutions at budget-friendly rates.',
  keywords: 'Affordable Web Design Services in Indore, website developer in Indore, small business website design Indore, travel agency web portal India, affordable web development Ujjain, freelance web designer Indore, Next.js developer Indore, professional website maker Indore',
  openGraph: {
    title: 'Affordable Web Design Services in Indore | Grow Your Business Online',
    description: 'Expert web development for small businesses and travel agencies in Indore & Ujjain. High speed, SEO-optimized, and budget-friendly.',
    type: 'website',
  }
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectsSection />
      <SeoContentSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}


/* export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      <section className='absolute z-0 opacity-40 top-0 left-0 h-full w-full'>
        <TechGrid />
      </section>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" animate={{ y: [0, 30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" animate={{ y: [0, -30, 0], x: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }} />
      </div>

      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary mb-6">
              🏆 Best Affordable Web Design Services in Indore
            </span>
          </motion.div>

          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6" variants={itemVariants}>
            Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-orange-400 to-red-400">Website Development</span> for Indore Small Businesses
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8 leading-relaxed" variants={itemVariants}>
            Searching for <strong>Affordable Web Design Services in Indore</strong>? I help small businesses, self-employed professionals, and travel agencies in Indore and Ujjain get more leads. Get a lightning-fast, SEO-optimized website built with Next.js that ranks on Google and grows your local business identity.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
            <Link href="tel:+919302088025">
              <Button size="lg" variant="primary" className="group border-2 border-accent">
                Free Website Consultation
                <MdCall className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className='hover:text-white'>
                View Our Portfolio
              </Button>
            </Link>
          </motion.div>

          <motion.div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-center items-center gap-8" variants={itemVariants}>
            <div className="text-center"><p className="text-2xl font-bold text-primary">50+</p><p className="text-sm text-muted-foreground">Local Clients</p></div>
            <div className="text-center"><p className="text-2xl font-bold text-primary">Indore</p><p className="text-sm text-muted-foreground">Based Support</p></div>
            <div className="text-center"><p className="text-2xl font-bold text-primary">100%</p><p className="text-sm text-muted-foreground">SEO Optimized</p></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export function SeoContentSection() {
  return (
    <section className="py-16 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Affordable Web Design Services in Indore for Small Business Growth
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Welcome to Indore's dedicated hub for high-performance digital solutions. As a specialized <strong>website developer in Indore</strong>, I focus on creating business assets, not just code. For small businesses in <strong>Indore and Ujjain</strong>, a generic website isn't enough. You need <strong>Affordable Web Design Services in Indore</strong> that focus on local SEO, lead generation, and mobile speed. Whether you run a shop in Rajwada or a consultancy in Vijay Nagar, my custom Next.js websites ensure you rank high on Google and load in under 2 seconds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-4">Web Design for Travel Agencies in Indore & Ujjain</h3>
              <p className="text-muted-foreground mb-4">
                The tourism industry in Madhya Pradesh is booming. I specialize in <strong>Travel Portal Development</strong> for agents in Indore and Ujjain including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li><strong>Religious Tour Itineraries:</strong> Specialized layouts for Mahakal & Omkareshwar tours.</li>
                <li><strong>Booking Inquiry Forms:</strong> Integrated with WhatsApp for instant local leads.</li>
                <li><strong>Local SEO for Tourism:</strong> Targeting keywords like "Best Ujjain Tour Packages".</li>
                <li><strong>Fast Loading:</strong> High-quality travel images optimized for mobile users.</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-4">Affordable Websites for Small Businesses & Self-Employed</h3>
              <p className="text-muted-foreground mb-4">
                Budget constraints shouldn't keep you offline. My <strong>Affordable Web Design Services in Indore</strong> are tailored for:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li><strong>Local Service Providers:</strong> Sites for clinics, lawyers, and Indore-based startups.</li>
                <li><strong>Retailers & Shops:</strong> Move your local inventory online with simple E-commerce solutions.</li>
                <li><strong>Lead Generation:</strong> Strategically placed CTAs to turn visitors into paying Indore customers.</li>
              </ul>
            </motion.div>
          </div>

          <motion.div className="mt-12 bg-primary/5 p-8 rounded-2xl border border-primary/10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4">Why Small Businesses in Indore Choose Us?</h3>
            <p className="text-muted-foreground leading-relaxed">
              We understand the local Indore market competition. Our approach to <strong>Affordable Web Design Services in Indore</strong> goes beyond aesthetics. We use modern tech like <strong>Next.js and Tailwind CSS</strong> to give you a technical edge over competitors using slow, outdated WordPress sites. This ensures your site passes Google's Core Web Vitals, helping you rank better in local searches across <strong>Indore, Ujjain, and Dewas</strong>.
            </p>
          </motion.div>

          <motion.div className="mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-sm text-muted-foreground mt-8 border-t border-border pt-6 italic">
              <strong>Location Transparency:</strong> Our development HQ is based in <strong>Indore & Ujjain</strong>, allowing us to offer the most competitive pricing for local businesses while maintaining global coding standards.
            </p>
          </motion.div>
        </article>
      </div>
    </section>
  )
}

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0">
        <motion.div className="absolute top-10 left-10 w-48 h-48 bg-primary/20 rounded-full blur-2xl" animate={{ y: [0, 20, 0], x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity }} />
      </div>
      <div className="relative max-w-4xl z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get the Best Affordable Web Design Services in Indore Today!
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't let your competitors in Indore take your customers. Whether you are a <strong>Self-Employed professional</strong> or a <strong>Small Business owner</strong>, I provide custom solutions that fit your budget and help you rank on Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="tel:+919302088025">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group px-8">
                Get Local Support Now
                <MdCall className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 hover:bg-muted group px-8">
                Request a Custom Quote
                <MdEmail className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <p className="mt-10 text-muted-foreground text-sm">⚡ Dedicated Support for Indore & Ujjain Clients • 📞 Call {contact.phone}</p>
        </motion.div>
      </div>
    </section>
  )
}

export function FaqSection() {
  const [openId, setOpenId] = useState(null)
  const faqs = [
    { id: 1, question: 'What is the cost of affordable web design services in Indore?', answer: 'For small businesses in Indore, our website packages start from a budget-friendly range (approx. ₹12k - ₹18k). We focus on providing high-quality Next.js sites that offer better ROI than generic templates.' },
    { id: 2, question: 'Are you a local website developer in Indore?', answer: 'Yes, we are based in Indore & Ujjain. This allows us to provide direct support and understand the local market better than outside agencies, ensuring your business gets the right visibility.' },
    { id: 3, question: 'Do you build websites for self-employed professionals?', answer: 'Absolutely. We specialize in portfolio and service-based websites for freelancers, doctors, lawyers, and consultants in Indore who want to establish a professional online presence.' },
    { id: 4, question: 'How long does it take to build a small business website?', answer: 'Typically, an optimized small business website takes 7-10 days. We follow an agile process to get your Indore business online as quickly as possible without compromising on SEO.' },
    { id: 5, question: 'Will my website rank for Indore-based keywords?', answer: 'Yes, our primary focus is local SEO. We optimize your site for keywords like "Services in Indore" to ensure local customers find you easily.' },
    { id: 6, question: 'Is maintenance included in your Indore web design packages?', answer: 'We offer flexible maintenance plans. Whether you need content updates or technical support, our Indore-based team is just a WhatsApp message away.' }
  ]
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">FAQs about Web Design in Indore</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about our local development services</p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setOpenId(openId === faq.id ? null : faq.id)}>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                  <div className="text-primary">{openId === faq.id ? <MdRemove size={24} /> : <MdAdd size={24} />}</div>
                </div>
                {openId === faq.id && <p className="text-muted-foreground mt-4 leading-relaxed text-left">{faq.answer}</p>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} */