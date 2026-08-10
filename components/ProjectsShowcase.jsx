"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/siteData";

export default function ProjectsShowcase({ limit, projectsOverride }) {
  const source = projectsOverride || projects;
  const list = limit ? source.slice(0, limit) : source;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {list.map((project, i) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
        >
          <Link
            href={`/portfolio/${project.slug}`}
            className="group block overflow-hidden rounded-3xl border border-[#e7e7e7] bg-white card-lift"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={`${project.name} — ${project.industry} website by Business Sathi`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#111111]">
                {project.industry}
              </span>
              <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111111] opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                <ArrowUpRight size={16} />
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-lg tracking-tight mb-1.5">
                {project.name}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">{project.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#F5F5F5] px-2.5 py-1 text-[11px] font-medium text-[#666666] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
