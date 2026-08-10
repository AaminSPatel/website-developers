import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { faqs } from "@/lib/siteData";

export const metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Answers to common questions about working with Business Sathi — pricing, timelines, process, and support.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions we get asked before someone hires us."
        description="If your question isn't here, just ask us directly on WhatsApp."
      />
      <section className="max-w-3xl mx-auto px-6 md:px-8 py-4 md:py-8">
        <FAQAccordion items={faqs} />
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <CTASection title="Still have a question?" description="We reply personally — usually within a few hours." />
      </section>
    </>
  );
}
