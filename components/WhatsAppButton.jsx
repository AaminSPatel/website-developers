"use client";

import { motion } from "framer-motion";
import {  FaWhatsapp } from "react-icons/fa6";
import { brand } from "@/lib/siteData";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${brand.whatsappNumber}?text=Hi%20${brand.name}%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-[90] flex h-14 w-14 items-center justify-center rounded-full btn-whatsapp text-white"
    >
      <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-30" />
      <FaWhatsapp size={26} strokeWidth={2.2} className="relative" />
    
    </motion.a>
  );
}
