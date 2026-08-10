import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { CheckCircle2 } from "lucide-react";
import { brand } from "@/lib/siteData";

export const metadata = {
  title: "About Us — A Two-Person Digital Studio in Indore",
  description:
    "Business Sathi is a small, honest digital studio in Indore. Learn who we are, why we started, and how we work with local businesses.",
};

const timeline = [
  { year: brand.founded, title: "Business Sathi began", detail: "Started as a way to help Indore businesses we knew personally get proper websites — not templates." },
  { year: "Year 1", title: "First five websites delivered", detail: "Built full websites for a restaurant, a clinic, a coaching institute, an interior studio, and a real estate broker." },
  { year: "Today", title: "Expanding into full digital growth", detail: "Now helping businesses with Google Business Profile, Meta Ads, SEO, and video — not just websites." },
];

const philosophy = [
  "We ask about your business before we open a design tool.",
  "We say no to work that won't actually help you.",
  "We stay reachable after the project is 'done'.",
  "We build with the same tools serious tech companies use — not drag-and-drop themes.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Business Sathi"
        title="We're two people who got tired of seeing good businesses look bad online."
        description="No large team, no account managers, no unnecessary services. Just honest, focused work."
      />

      <section className="max-w-4xl mx-auto px-6 md:px-8 py-4 md:py-8">
        <div className="prose-none space-y-6 text-base md:text-lg leading-relaxed text-[#333333]">
          <p>
            Business Sathi started with a simple observation: some of the best businesses
            in {brand.city} — restaurants with loyal regulars, clinics trusted across
            generations, coaching institutes with real results — had almost no presence
            online. Meanwhile, businesses with half their quality were winning new
            customers simply because they showed up first on Google.
          </p>
          <p>
            We're not a large agency, and we're not trying to become one. Business Sathi
            is run by two people — one focused on design and strategy, the other on
            development and technical execution. When you work with us, you're talking
            directly to the person doing the work, every time.
          </p>
          <p>
            That structure isn't a limitation we're apologizing for — it's deliberate.
            It means faster responses, fewer miscommunications, and a level of care that's
            hard to maintain once a studio scales past a handful of people. We'd rather
            do excellent work for a smaller number of clients than average work for
            everyone.
          </p>
          <p>
            Our focus has always been solving real business problems — a missing website,
            an invisible Google listing, an ad budget with no strategy behind it — rather
            than selling services a business doesn't actually need. If something won't
            help you, we'll tell you honestly, even if that means recommending less work,
            not more.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="relative h-56 sm:h-72 md:h-[380px] w-full overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80"
            alt="Business Sathi team discussing a client project"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow="How We Work" title="Our philosophy, in practice." align="center" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {philosophy.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#e7e7e7] bg-white p-5">
              <CheckCircle2 size={20} className="text-[#10B981] shrink-0 mt-0.5" />
              <p className="text-sm md:text-base text-[#333333] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-8 py-4 md:py-8">
        <SectionHeading eyebrow="Timeline" title="Where we've come from." align="center" />
        <div className="mt-14 space-y-8">
          {timeline.map((item, i) => (
            <div key={item.title} className="flex gap-6 rounded-2xl border border-[#e7e7e7] bg-white p-6">
              <span className="font-mono text-sm font-semibold text-[#2563EB] shrink-0 w-20">
                {item.year}
              </span>
              <div>
                <h3 className="font-display font-semibold text-lg tracking-tight mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <CTASection
          title="Want to work with a team that's honest with you?"
          description="Tell us what you're building — we'll tell you straight if we're the right fit."
        />
      </section>
    </>
  );
}
