"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/lib/siteData";

const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

export default function BlogClient() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Straight talk on websites, SEO & local marketing."
        description="No fluff, no growth-hacking myths — practical notes from what actually works for Indore businesses."
      />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-[#111111] text-white"
                  : "bg-white border border-[#e7e7e7] text-[#666666] hover:border-[#2563EB] hover:text-[#2563EB]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
        <div className="rounded-3xl bg-[#0B0F1A] p-10 text-center noise">
          <h3 className="font-display font-semibold text-2xl text-white mb-2">Want tips like these by email?</h3>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
            Occasional, practical notes on growing your business online — no spam, unsubscribe anytime.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="you@business.com"
              className="flex-1 rounded-full bg-white/10 border border-white/15 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#2563EB]"
            />
            <button type="submit" className="btn-primary !py-3">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <CTASection />
      </section>
    </>
  );
}
