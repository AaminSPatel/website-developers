import PageHero from "@/components/PageHero";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Google Reviews — What Our Clients Say",
  description:
    "Read genuine Google Business Profile reviews from local Indore businesses who've worked with Business Sathi.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Google Reviews"
        title="Feedback straight from our Google Business Profile."
        description="We don't cherry-pick or fabricate reviews — this is what real clients have said after working with us."
      />
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-8">
        <GoogleReviewsSection />
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <CTASection
          title="Ready to become our next client?"
          description="We'd rather earn a genuine review from you than promise one in advance."
        />
      </section>
    </>
  );
}
