"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/siteData";

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#e7e7e7] md:left-1/2 md:-translate-x-1/2" />
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-[19px] top-2 w-px bg-gradient-to-b from-[#2563EB] to-[#4F46E5] md:left-1/2 md:-translate-x-1/2"
      />

      <div className="space-y-10">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`relative flex items-start gap-6 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10 md:text-left"
            }`}
          >
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-brand font-mono text-xs font-semibold text-white md:absolute md:top-0 md:h-8 md:w-8 md:text-[11px]"
              style={i % 2 === 0 ? { right: "-36px" } : { left: "-36px" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="rounded-2xl border border-[#e7e7e7] bg-white p-5 md:w-full">
              <h3 className="font-display font-semibold text-base mb-1.5 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">{step.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
