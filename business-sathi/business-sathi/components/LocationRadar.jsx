"use client";

import { motion } from "framer-motion";
import { MapPin, Globe2, TrendingUp, Star } from "lucide-react";

const chips = [
  { label: "Website Development", icon: Globe2, className: "top-[6%] left-[2%]", delay: 0 },
  { label: "Google Business Profile", icon: MapPin, className: "top-[14%] right-[0%]", delay: 0.15 },
  { label: "Meta Ads", icon: TrendingUp, className: "bottom-[18%] left-[-4%]", delay: 0.3 },
  { label: "5.0 Google Reviews", icon: Star, className: "bottom-[6%] right-[4%]", delay: 0.45 },
];

export default function LocationRadar() {
  return (
    <div className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center sm:h-[440px]">
      {/* radar rings */}
      <div className="relative flex h-40 w-40 items-center justify-center">
        <span className="radar-ring" />
        <span className="radar-ring" style={{ animationDelay: "1s" }} />
        <span className="radar-ring" style={{ animationDelay: "2s" }} />
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-[0_20px_40px_-10px_rgba(37,99,235,0.6)]">
          <MapPin size={28} strokeWidth={2.2} />
        </div>
      </div>

      <div className="absolute bottom-[38%] left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span className="eyebrow bg-white/80 px-3 py-1.5 rounded-full border border-[#e7e7e7]">
          Indore, MP
        </span>
      </div>

      {chips.map(({ label, icon: Icon, className, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 + delay, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute ${className} float-y`}
          style={{ animationDelay: `${delay}s` }}
        >
          <div className="flex items-center gap-2 rounded-2xl glass px-3.5 py-2.5 shadow-[0_12px_30px_rgba(17,17,17,0.1)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
              <Icon size={14} strokeWidth={2.3} />
            </span>
            <span className="text-xs font-semibold text-[#111111] whitespace-nowrap">{label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
