"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#e7e7e7] bg-white card-lift"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#2563EB]">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display font-semibold text-lg tracking-tight mb-2 leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-[#666666] leading-relaxed mb-5 flex-1">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-[#999999]">
            <span className="flex items-center gap-1.5">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 font-semibold text-[#2563EB] group-hover:gap-2 transition-all">
              Read <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
