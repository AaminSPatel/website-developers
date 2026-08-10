"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed, Stethoscope, GraduationCap, Building2, Home, ShoppingBag, Rocket, Briefcase,
} from "lucide-react";
import { industries } from "@/lib/siteData";

const iconMap = {
  UtensilsCrossed, Stethoscope, GraduationCap, Building2, Home, ShoppingBag, Rocket, Briefcase,
};

export default function IndustriesGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {industries.map((ind, i) => {
        const Icon = iconMap[ind.icon];
        return (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center gap-3 rounded-2xl border border-[#e7e7e7] bg-white px-4 py-7 text-center"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]/8 text-[#2563EB]">
              <Icon size={20} strokeWidth={2} />
            </span>
            <span className="text-sm font-medium text-[#111111]">{ind.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
