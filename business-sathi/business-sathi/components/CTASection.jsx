"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { brand } from "@/lib/siteData";

export default function CTASection({
  title = "Let's Build Something Great Together.",
  description = "Tell us about your business — we'll respond honestly about what will (and won't) help.",
}) {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-[#0B0F1A] px-6 py-16 md:py-20 text-center noise">
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/25 blur-[120px] pointer-events-none" />
      <div className="relative max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight balance"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/60 text-base md:text-lg"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/${brand.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            Send WhatsApp Message
          </a>
          <a href={`mailto:${brand.email}`} className="btn-secondary !bg-white/5 !border-white/15 !text-white hover:!bg-white/10">
            <Mail size={16} />
            Book Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
