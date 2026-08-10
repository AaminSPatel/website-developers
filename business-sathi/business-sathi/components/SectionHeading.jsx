"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`eyebrow mb-3 ${light ? "!text-[#8FB2FF]" : ""}`}
        >
          {eyebrow}
        </motion.p>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`font-display font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[1.08] balance ${
            light ? "text-white" : "text-[#111111]"
          }`}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-white/60" : "text-[#666666]"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
