import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import IndustriesGrid from "@/components/IndustriesGrid";
import CTASection from "@/components/CTASection";
import Counter from "@/components/Counter";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stats } from "@/lib/siteData";

export const metadata = {
  title: "Website Development & Digital Growth Studio in Indore",
  description:
    "Business Sathi builds websites and manages digital growth — Google Business Profile, Meta Ads, SEO, and video — for local businesses across Indore.",
};

export default function HomePage() {
  return (
    <div className="relative">
      {/* Fixed full-page background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/bird.mp4" type="video/mp4" />
      </video>

      {/* Optional overlay so text/sections stay readable over the video */}
      <div className="fixed inset-0 bg-white/60 -z-10" />

      {/* All existing page content sits above the video */}
      <div className="relative z-0">
        <Hero />

        {/* Stats strip */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mt-4 md:mt-4">
          <RevealOnScroll y={30} className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl border border-[#e7e7e7] bg-white p-8 md:p-10 glow">
            {stats.map((s, i) => (
              <RevealOnScroll
                key={s.label}
                y={16}
                delay={0.1 + i * 0.08}
                className="text-center"
              >
                <Counter value={s.value} suffix={s.suffix} isText={s.isText} />
                <p className="mt-2 text-xs md:text-sm text-[#666666]">{s.label}</p>
              </RevealOnScroll>
            ))}
          </RevealOnScroll>
        </section>

        {/* Services */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="What We Do"
              title="Everything your business needs to grow online."
              description="Six focused services. No unnecessary upsells — just what actually moves the needle for your business."
            />
            <Link href="/services" className="btn-secondary shrink-0 self-start md:self-auto">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
          <ServicesGrid limit={6} />
        </section>

        {/* Why choose us */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-8">
          <SectionHeading
            eyebrow="Why Business Sathi"
            title="Small studio. Straight answers. Real results."
            description="We're not the biggest agency in Indore — we're just honest about what will actually help your business, and quick to respond when you need us."
            align="center"
          />
          <div className="mt-14">
            <RevealOnScroll y={30}>
              <WhyChooseUs />
            </RevealOnScroll>
          </div>
        </section>

        {/* Recent work */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="Recent Work"
              title="Real projects, for real Indore businesses."
              description="Every project starts with understanding the business first — the design comes after."
            />
            <Link href="/portfolio" className="btn-secondary shrink-0 self-start md:self-auto">
              View Full Portfolio <ArrowRight size={16} />
            </Link>
          </div>
          <ProjectsShowcase limit={4} />
        </section>

        {/* Reviews */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-8">
          <SectionHeading
            eyebrow="Client Feedback"
            title="What business owners say after working with us."
            align="center"
          />
          <div className="mt-14">
            <GoogleReviewsSection limit={3} />
          </div>
        </section>

        {/* Process */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <SectionHeading
            eyebrow="Our Process"
            title="From first call to launch — and beyond."
            align="center"
          />
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </section>

        {/* Industries */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-8">
          <SectionHeading
            eyebrow="Who We Work With"
            title="Industries we understand well."
            align="center"
          />
          <div className="mt-14">
            <RevealOnScroll y={30}>
              <IndustriesGrid />
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <RevealOnScroll y={40} duration={0.8}>
            <CTASection />
          </RevealOnScroll>
        </section>
      </div>
    </div>
  );
}