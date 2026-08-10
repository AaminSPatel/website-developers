import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MessageCircle, ExternalLink, User } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { blogPosts, brand } from "@/lib/siteData";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Business Sathi Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);
  const fallbackRelated = related.length > 0 ? related : blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="pt-32 pb-10 md:pt-40">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#2563EB] mb-8">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <span className="eyebrow mb-3 block">{post.category}</span>
          <h1 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[1.1] balance">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-[#999999]">
            {post.author && (
              <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
            )}
            <span>{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="relative h-56 sm:h-72 md:h-[400px] w-full overflow-hidden rounded-3xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 md:px-8 py-14 md:py-16">
        <div className="space-y-6">
          {post.content.map((para, i) => (
            <p key={i} className="text-base md:text-lg text-[#333333] leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {post.resources && post.resources.length > 0 && (
          <div className="mt-10 rounded-3xl border border-[#e7e7e7] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#999999] mb-4">
              Tools & Links Mentioned
            </p>
            <ul className="space-y-2.5">
              {post.resources.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] hover:underline"
                  >
                    {r.label} <ExternalLink size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-10">
            <p className="eyebrow mb-4">Quick Questions</p>
            <FAQAccordion items={post.faqs} />
          </div>
        )}

        <div className="mt-10 rounded-3xl border border-[#e7e7e7] bg-white p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <p className="text-sm text-[#666666] text-center sm:text-left">
            Want help applying this to your own business?
          </p>
          <a href={`https://wa.me/${brand.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !px-5 !text-sm shrink-0">
            <MessageCircle size={16} /> Ask on WhatsApp
          </a>
        </div>
      </section>

      {fallbackRelated.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 md:px-8 py-4 md:py-8">
          <p className="eyebrow mb-6 text-center">Related Reading</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {fallbackRelated.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card-lift rounded-3xl border border-[#e7e7e7] bg-white overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-base tracking-tight leading-snug">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <CTASection />
      </section>
    </>
  );
}
