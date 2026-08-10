import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Code2, MapPin, Megaphone, Search, Film, Sparkles, CheckCircle2, ArrowRight, MessageCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { services, brand } from "@/lib/siteData";

const iconMap = { Code2, MapPin, Megaphone, Search, Film, Sparkles };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Business Sathi`,
    description: service.solution,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Code2;
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-white glow">
            <Icon size={28} />
          </span>
          <p className="eyebrow mb-3 justify-center flex">Service</p>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.06] balance">
            {service.title}
          </h1>
          <p className="mt-5 text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
            {service.solution}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={`https://wa.me/${brand.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={18} />
              {service.cta}
            </a>
            <Link href="/services" className="btn-secondary">All Services</Link>
          </div>
        </div>
      </section>

      {service.image && (
        <section className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="relative h-56 sm:h-72 md:h-[360px] w-full overflow-hidden rounded-3xl">
            <Image src={service.image} alt={service.title} fill className="object-cover" priority />
          </div>
        </section>
      )}

      {/* Problem / Solution */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-[#e7e7e7] bg-white p-8">
            <p className="eyebrow mb-3">The Problem</p>
            <p className="text-base text-[#333333] leading-relaxed">{service.problem}</p>
          </div>
          <div className="rounded-3xl bg-[#0B0F1A] p-8 text-white noise">
            <p className="eyebrow !text-[#8FB2FF] mb-3">Our Solution</p>
            <p className="text-base text-white/80 leading-relaxed">{service.solution}</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow="Benefits" title="What you actually get out of this." />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.benefits.map((b) => (
            <div key={b} className="flex items-start gap-3 rounded-2xl border border-[#e7e7e7] bg-white p-5">
              <CheckCircle2 size={20} className="text-[#10B981] shrink-0 mt-0.5" />
              <p className="text-sm md:text-base text-[#333333] leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ideal for / Deliverables */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-[#e7e7e7] bg-white p-8">
            <h3 className="font-display font-semibold text-xl mb-5 tracking-tight">Ideal For</h3>
            <ul className="space-y-3">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#666666] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2563EB] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[#e7e7e7] bg-white p-8">
            <h3 className="font-display font-semibold text-xl mb-5 tracking-tight">What&apos;s Included</h3>
            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#666666] leading-relaxed">
                  <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow="Process" title="How this service actually works." align="center" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.process.map((step, i) => (
            <div key={step.step} className="rounded-2xl border border-[#e7e7e7] bg-white p-6">
              <span className="font-mono text-xs font-semibold text-[#2563EB]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-semibold text-base mt-3 mb-1.5 tracking-tight">{step.step}</h3>
              <p className="text-sm text-[#666666] leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-6 md:px-8 py-4 md:py-8">
        <SectionHeading eyebrow="FAQs" title="Common questions about this service." align="center" />
        <div className="mt-12">
          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      {/* Other services */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow="Explore More" title="Other services that might help." align="center" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {otherServices.map((s) => {
            const OIcon = iconMap[s.icon] || Code2;
            return (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card-lift rounded-3xl border border-[#e7e7e7] bg-white p-6 flex flex-col">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]/8 text-[#2563EB] mb-4">
                  <OIcon size={19} />
                </span>
                <h3 className="font-display font-semibold text-base mb-2 tracking-tight">{s.title}</h3>
                <span className="mt-auto text-sm font-semibold text-[#2563EB] flex items-center gap-1">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-24">
        <CTASection title={service.cta} />
      </section>
    </>
  );
}
