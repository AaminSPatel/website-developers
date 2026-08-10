"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { googleReviews } from "@/lib/siteData";

export default function GoogleReviewsSection({ limit }) {
  const list = limit ? googleReviews.slice(0, limit) : googleReviews;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="rounded-3xl border border-[#e7e7e7] bg-white p-6 card-lift flex flex-col"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <Star key={idx} size={15} className="fill-[#F5B301] text-[#F5B301]" />
              ))}
            </div>
            <p className="text-sm text-[#333333] leading-relaxed mb-6 flex-1">
              &ldquo;{review.review}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0f0]">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={review.image} alt={review.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111111]">{review.name}</p>
                <p className="text-xs text-[#666666]">
                  {review.category} · {review.date}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-[#999999]">
        Reviews collected from our official Google Business Profile.
      </p>
    </div>
  );
}
