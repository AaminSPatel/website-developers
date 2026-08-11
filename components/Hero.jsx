"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { brand } from "@/lib/siteData";

// ---- CONFIG -----------------------------------------------------------
const TOTAL_FRAMES = 120;
const FADE_START_FRAME = 100;
const FRAME_PATH = (i) => `/frames/frame_${String(i).padStart(3, "0")}.jpg`;

export default function Hero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentDrawnFrame = useRef(0);
  const rafRef = useRef(null);

  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false); // default false = safe for SSR + mobile

  // ---- detect desktop AFTER mount, never on server ----
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const frameIndexMV = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, (FADE_START_FRAME - 1) / TOTAL_FRAMES, 1],
    [1, 1, 0]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, (FADE_START_FRAME - 1) / TOTAL_FRAMES, 1],
    [0, 0, -24]
  );
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const SHIFT_X_DESKTOP = 192.9;
  const ZOOM_DESKTOP = 0.9;

  const drawFrame = useCallback((frameNum) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[frameNum];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;

    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const baseScale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const scale = baseScale * ZOOM_DESKTOP;

    const drawW = img.naturalWidth * scale;
    const drawH = img.naturalHeight * scale;
    const overflowW = drawW - cw;
    const overflowH = drawH - ch;

    const dx = -(overflowW / 2) + SHIFT_X_DESKTOP;
    const dy = -(overflowH / 2) + 45;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, drawW, drawH);
  }, []);

  const loadFrame = useCallback((i, priority = "low") => {
    if (imagesRef.current[i]) return imagesRef.current[i];
    const img = new Image();
    img.decoding = "async";
    img.fetchPriority = priority;
    img.src = FRAME_PATH(i);
    imagesRef.current[i] = img;
    return img;
  }, []);

  // ---- ALL frame loading gated behind isDesktop — mobile never fetches a single frame ----
  useEffect(() => {
    if (!isDesktop) return;

    const first = loadFrame(1, "high");
    const onFirstReady = () => {
      setFirstFrameReady(true);
      drawFrame(1);
    };
    if (first.complete) onFirstReady();
    else first.addEventListener("load", onFirstReady, { once: true });

    const warmupId = window.requestIdleCallback
      ? window.requestIdleCallback(() => {
          for (let i = 2; i <= 10; i++) loadFrame(i, "low");
        })
      : setTimeout(() => {
          for (let i = 2; i <= 10; i++) loadFrame(i, "low");
        }, 300);

    let cancelled = false;
    let cursor = 11;
    const loadNextChunk = (deadline) => {
      if (cancelled) return;
      const hasTime = () =>
        deadline && typeof deadline.timeRemaining === "function"
          ? deadline.timeRemaining() > 0
          : true;
      let count = 0;
      while (cursor <= TOTAL_FRAMES && count < 6 && hasTime()) {
        loadFrame(cursor, "low");
        cursor++;
        count++;
      }
      if (cursor <= TOTAL_FRAMES) {
        if (window.requestIdleCallback) window.requestIdleCallback(loadNextChunk);
        else setTimeout(() => loadNextChunk(), 200);
      }
    };
    if (window.requestIdleCallback) window.requestIdleCallback(loadNextChunk);
    else setTimeout(() => loadNextChunk(), 600);

    const onResize = () => drawFrame(currentDrawnFrame.current || 1);
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      if (window.cancelIdleCallback && warmupId) window.cancelIdleCallback(warmupId);
    };
  }, [isDesktop, loadFrame, drawFrame]);

  useMotionValueEvent(frameIndexMV, "change", (latest) => {
    if (!isDesktop) return;
    const target = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(latest)));
    if (target === currentDrawnFrame.current) return;

    if (!imagesRef.current[target]) loadFrame(target, "high");
    const dir = target > currentDrawnFrame.current ? 1 : -1;
    for (let k = 1; k <= 3; k++) {
      const n = target + dir * k;
      if (n >= 1 && n <= TOTAL_FRAMES && !imagesRef.current[n]) loadFrame(n, "low");
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      currentDrawnFrame.current = target;
      drawFrame(target);
    });
  });

  // ---- shared left content ----
  const LeftContent = ({ animated = true }) => (
    <div className="max-w-xl py-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-4 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
        <span className="text-xs font-medium text-[#666666]">
          Two founders. Five websites delivered. Based in Indore.
        </span>
      </div>

      <h1 className="font-display text-[2.3rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.6rem]">
        A Website That Turns Visitors Into{" "}
        <span className="text-gradient">Paying Customers.</span>
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-[#666666]">
        We build fast, trustworthy websites and run your Google & Instagram
        presence — so your business gets found, gets trusted, and gets more
        enquiries.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Link href="/contact" className="btn-primary">
          Get Free Consultation
          <ArrowRight size={16} />
        </Link>

        <Link href="/portfolio" className="btn-secondary">
          View Our Work
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
        {["No fake promises", "Direct access to founders", "Built mobile-first"].map(
          (item) => (
            <span key={item} className="flex items-center gap-2 text-sm text-[#666666]">
              <CheckCircle2 size={16} className="text-[#10B981]" />
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );

  // ---- MOBILE: plain, lightweight hero — zero frame images, zero scroll-jacking ----
 if (!isDesktop) {
    return (
      <section ref={sectionRef} className="relative bg-white px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LeftContent animated={false} />
        </motion.div>
      </section>
    );
  }

  // ---- DESKTOP: scroll-scrubbed canvas hero ----
  return (
    <section ref={sectionRef} className="relative bg-white" style={{ height: "380vh" }}>
      <div className="sticky top-6 h-screen w-full overflow-hidden bg-white ">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ visibility: firstFrameReady ? "visible" : "hidden" }}
        />

        {!firstFrameReady && <div className="absolute inset-0 bg-white" />}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 md:px-8 py-8"
        >
          <LeftContent />
        </motion.div>

        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1.5 md:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#999999]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-[#999999]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}