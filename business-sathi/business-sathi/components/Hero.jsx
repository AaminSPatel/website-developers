"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, ChevronDown } from "lucide-react";
import { brand } from "@/lib/siteData";
import LocationRadar from "./LocationRadar";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <motion.div style={{ y: gridY }} className="absolute inset-0 grid-bg opacity-70 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      <motion.div style={{ y: blob1Y }} className="absolute top-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[#4F46E5]/20 blur-[110px] pointer-events-none" />
      <motion.div style={{ y: blob2Y }} className="absolute top-[10%] left-[-10%] h-[320px] w-[320px] rounded-full bg-[#2563EB]/15 blur-[100px] pointer-events-none" />

      <motion.div style={{ opacity: contentOpacity }} className="relative max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-4 py-1.5 mb-7"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span className="text-xs font-medium text-[#666666]">
              Two founders. Five websites delivered. Based in Indore.
            </span>
          </motion.div>

          <h1 className="font-display font-semibold tracking-tight text-[2.6rem] leading-[1.05] sm:text-6xl md:text-[4.2rem] balance">
            Websites That Don&apos;t Just{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Look Good</span>
            </span>{" "}
            — They Bring Customers.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-[#666666] leading-relaxed"
          >
            We build websites and run the digital side of your business — from
            Google search to Instagram ads — so local businesses in Indore get
            found, get trusted, and get more enquiries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={`https://wa.me/${brand.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Get Free Consultation
            </a>
            <Link href="/portfolio" className="btn-secondary">
              View Our Work
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {["No fake promises", "Direct access to founders", "Built mobile-first"].map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm text-[#666666]">
                <CheckCircle2 size={16} className="text-[#10B981]" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        <LocationRadar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#999999]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#999999]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
