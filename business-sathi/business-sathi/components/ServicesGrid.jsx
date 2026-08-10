"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2, MapPin, Megaphone, Search, Film, Sparkles, ArrowUpRight,
} from "lucide-react";
import { services } from "@/lib/siteData";

const iconMap = { Code2, MapPin, Megaphone, Search, Film, Sparkles };

export default function ServicesGrid({ limit }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {list.map((service, i) => {
        const Icon = iconMap[service.icon] || Code2;
        return (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group card-lift relative flex h-full flex-col rounded-3xl border border-[#e7e7e7] bg-white p-7"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB]/8 text-[#2563EB] transition-colors group-hover:bg-gradient-brand group-hover:text-white">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-[#666666] opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[#2563EB]"
                />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2.5 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-5">
                {service.solution}
              </p>
              <span className="mt-auto text-sm font-semibold text-[#2563EB]">
                Learn more →
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
