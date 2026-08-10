"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { brand } from "@/lib/siteData";

export default function CallButton() {
  return (
    <motion.a
      href={`tel:+${brand.phoneRaw}`}
      aria-label="Call Business Sathi"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.85, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 left-5 md:bottom-8 md:left-8 z-[90] flex h-14 w-14 items-center justify-center rounded-full text-white glow"
      style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)" }}
    >
      <Phone size={24} strokeWidth={2.2} className="relative" />
    </motion.a>
  );
}
