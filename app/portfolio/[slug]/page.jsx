import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MessageCircle, ExternalLink, Quote } from "lucide-react";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { projects, brand } from "@/lib/siteData";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} Case Study — Business Sathi`,
    description: project.tagline,
  };
}

const stages = [
  { key: "challenge", label: "Challenge" },
  { key: "researchNote", label: "Research" },
  { key: "designApproach", label: "Design" },
  { key: "developmentNote", label: "Development" },
  { key: "outcome", label: "Outcome" },
];

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="relative pt-32 pb-10 md:pt-40">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#2563EB] mb-8">
            <ArrowLeft size={15} /> Back to Portfolio
          </Link>
          <span className="eyebrow mb-3 block">{project.industry} · {project.location}</span>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.06] balance">
            {project.name}
          </h1>
          <p className="mt-5 text-lg text-[#666666] max-w-2xl leading-relaxed">{project.tagline}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6 inline-flex"
            >
              Visit Live Website <ExternalLink size={15} />
            </a>
          )}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="relative h-64 sm:h-80 md:h-[440px] w-full overflow-hidden rounded-3xl">
          <Image src={project.image} alt={project.name} fill className="object-cover" priority />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="eyebrow mb-2">Problem</p>
              <p className="text-base text-[#333333] leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Solution</p>
              <p className="text-base text-[#333333] leading-relaxed">{project.solution}</p>
            </div>
          </div>
          <div className="rounded-3xl border border-[#e7e7e7] bg-white p-6 h-fit">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#999999] mb-3">Technologies</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-full bg-[#F5F5F5] px-2.5 py-1 text-[11px] font-medium text-[#666666] font-mono">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#999999] mb-3">Results</p>
            <ul className="space-y-2.5 mb-6">
              {project.results.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-[#333333] leading-relaxed">
                  <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" /> {r}
                </li>
              ))}
            </ul>
            {project.highlights && (
              <>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#999999] mb-3">Highlights</p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-[#2563EB]/8 px-2.5 py-1 text-[11px] font-medium text-[#2563EB]">
                      {h}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8 py-4 md:py-8">
        <SectionHeading eyebrow="Case Study" title="How the project came together." />
        <div className="mt-10 space-y-5">
          {stages.map((stage, i) => (
            <div key={stage.key} className="flex gap-6 rounded-2xl border border-[#e7e7e7] bg-white p-6">
              <span className="font-mono text-xs font-semibold text-[#2563EB] shrink-0 w-6 pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display font-semibold text-base mb-1.5 tracking-tight">{stage.label}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{project[stage.key]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {project.testimonial && (
        <section className="max-w-4xl mx-auto px-6 md:px-8 py-4 md:py-8">
          <div className="rounded-3xl bg-[#0B0F1A] p-8 md:p-10 text-white noise relative overflow-hidden">
            <Quote size={40} className="text-[#2563EB]/40 mb-4" />
            <p className="text-lg md:text-xl text-white/90 leading-relaxed balance mb-6">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <p className="text-sm font-semibold text-white">{project.testimonial.name}</p>
            <p className="text-xs text-white/50">{project.testimonial.role}</p>
          </div>
        </section>
      )}

      <section className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center">
        <a href={`https://wa.me/${brand.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <MessageCircle size={18} /> Discuss a Similar Project
        </a>
      </section>

      {others.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-16">
          <SectionHeading eyebrow="More Work" title="Other projects worth a look." align="center" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {others.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="card-lift rounded-3xl border border-[#e7e7e7] bg-white overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={p.thumbnail} alt={p.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#999999] mb-1">{p.industry}</p>
                  <h3 className="font-display font-semibold text-lg tracking-tight">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <CTASection />
      </section>
    </>
  );
}
