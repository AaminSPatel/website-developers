"use client";

import { motion } from "framer-motion";
import {
  MessageCircle, Zap, Layers, Smartphone, Search, Gauge, PenTool, Target,
} from "lucide-react";
import { whyChooseUs } from "@/lib/siteData";

const iconMap = { MessageCircle, Zap, Layers, Smartphone, Search, Gauge, PenTool, Target };

export default function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {whyChooseUs.map((item, i) => {
        const Icon = iconMap[item.icon];
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
            className="rounded-3xl border border-[#e7e7e7] bg-white p-6 card-lift"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111111] text-white mb-5">
              <Icon size={19} strokeWidth={2} />
            </span>
            <h3 className="font-display font-semibold text-base mb-2 tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
