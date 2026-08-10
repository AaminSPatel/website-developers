"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function Counter({ value, suffix = "", isText = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(isText ? value : "0");

  useEffect(() => {
    if (!isInView || isText) return;
    const numeric = parseFloat(value);
    if (Number.isNaN(numeric)) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [isInView, value, isText]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="font-display font-semibold text-4xl md:text-5xl text-[#111111] tracking-tight"
    >
      {display}
      {suffix}
    </motion.span>
  );
}
