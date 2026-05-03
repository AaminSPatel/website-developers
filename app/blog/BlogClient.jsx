"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import {
  MdArrowForward,
  MdCalendarToday,
  MdTimer,
  MdPerson,
  MdSearch,
  MdTrendingUp,
  MdBusiness,
  MdDevices,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { blogPosts } from "../data/BlogPosts";

// ── Animation ─────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

// ── Category filter list ───────────────────────────────────────────────────────
const ALL_CATEGORIES = ["All", "Web Development", "SEO", "Local SEO", "Ecommerce", "Travel & Tourism", "Healthcare", "Education", "Performance", "Content Marketing"];

// ── Audience targeting cards ───────────────────────────────────────────────────
const AUDIENCES = [
  {
    icon: MdBusiness,
    title: "Small Business Owners",
    subtitle: "Indore, Ujjain & MP",
    desc: "Learn Local SEO strategies to dominate Google in your city. Turn your website into a 24/7 customer magnet.",
    color: "from-blue-50 to-indigo-50 border-blue-100",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    icon: MdTrendingUp,
    title: "Travel Agencies",
    subtitle: "Booking & Revenue Growth",
    desc: "Specific guides on booking engines, destination SEO, and digital marketing to convert visitors into travellers.",
    color: "from-emerald-50 to-teal-50 border-emerald-100",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: MdDevices,
    title: "Freelancers & Startups",
    subtitle: "Portfolio & Client Acquisition",
    desc: "Build a personal brand that attracts high-ticket clients. Grow your income with smart web presence strategies.",
    color: "from-purple-50 to-violet-50 border-purple-100",
    iconBg: "bg-purple-100 text-purple-600",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchCategory = activeCategory === "All" || post.category === activeCategory;
      const matchSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
post.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="bg-white">
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-blue-500/15 border border-blue-500/20 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              📖 Web Development & Growth Blog
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Grow Your Business Online —
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Tips for Indore, Ujjain & Beyond
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
              Practical guides on <strong className="text-white">Local SEO</strong>,{" "}
              <strong className="text-white">website development</strong>, and{" "}
              <strong className="text-white">digital marketing</strong> for small businesses, travel
              agencies, and service providers across Madhya Pradesh.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <MdSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={22}
              />
              <input
                type="search"
                placeholder="Search articles... (SEO, website, travel...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/15 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AUDIENCE CARDS ────────────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              Who Is This Blog For?
            </h2>
            <p className="text-slate-500">Curated advice for every type of business owner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUDIENCES.map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${item.color} border rounded-2xl p-7`}
              >
                <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                <p className="text-sm font-medium text-slate-500 mb-2">{item.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center md:justify-start">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              No articles found. Try a different search or category.
            </div>
          )}

          {/* ── Featured Post ── */}
          {featuredPost && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/blog/${featuredPost.slug}`}>
                <article className="group grid lg:grid-cols-2 gap-0 bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto min-h-[320px] overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={`${featuredPost.title} - Business Sathi Blog`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                        ⭐ Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-8 lg:p-10">
                    <div>
                      <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed line-clamp-3 mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
{featuredPost.tags?.slice(0, 4).map((tag, i) => (
                          <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 border-t border-slate-100 pt-5 mb-6">
                        <span className="flex items-center gap-1.5">
                          <MdCalendarToday size={15} className="text-blue-500" />
                          {formatDate(featuredPost.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MdTimer size={15} className="text-blue-500" />
                          {featuredPost.readingTime} min read
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MdPerson size={15} className="text-blue-500" />
                          {featuredPost.author}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                        Read Article <MdArrowForward size={18} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          )}

          {/* ── Grid Posts ── */}
          {remainingPosts.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-slate-900 mb-8">
                {activeCategory === "All" ? "All Articles" : activeCategory} —{" "}
                <span className="text-slate-500 font-normal">{remainingPosts.length} posts</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {remainingPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                      <article className="flex flex-col h-full bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300">
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={`${post.title} - Web Development Blog`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-6">
                          <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-4 flex-1">
                            {post.excerpt}
                          </p>
                          {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {post.tags?.slice(0, 3).map((tag, j) => (
                                <span key={j} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          {/* Meta */}
                          <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
                            <span className="flex items-center gap-1">
                              <MdCalendarToday size={13} />
                              {formatDate(post.publishedAt)}
                            </span>
                            <span className="flex items-center gap-1">
                              <MdTimer size={13} />
                              {post.readingTime} min
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-indigo-700 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Get Free Website Tips for Your Business
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join 500+ business owners from Indore, Ujjain & across India getting weekly SEO tips, website guides, and digital growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="bg-white text-blue-700 font-bold px-6 py-4 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
            <p className="text-blue-200 text-sm mb-6">No spam. Unsubscribe anytime.</p>

            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100 text-sm mb-3">Or get an instant consultation:</p>
              <a
                href="https://wa.me/919302088025?text=Hi! I read your blog and want a website for my business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp — Free
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}