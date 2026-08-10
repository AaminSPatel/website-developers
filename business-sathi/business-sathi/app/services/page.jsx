import Image from "next/image";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Services — Website Development, SEO, Ads & More",
  description:
    "Explore Business Sathi's core services: Website Development, Google Business Profile Optimization, Meta Ads Management, SEO, Video Editing, and AI Video Generation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Six services. Zero unnecessary upsells."
        description="Everything here exists because it solves a real problem local businesses face — nothing is on this list to pad an invoice."
      />
      <section className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="relative h-56 sm:h-72 md:h-[340px] w-full overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80"
            alt="Business Sathi working on a client website"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <ServicesGrid />
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <CTASection
          title="Not sure which service you need?"
          description="Message us on WhatsApp and describe your problem — we'll tell you honestly what will help."
        />
      </section>
    </>
  );
}
