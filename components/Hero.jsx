"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { brand } from "@/lib/siteData";

// ---- CONFIG -----------------------------------------------------------
const TOTAL_FRAMES = 130;
const FADE_START_FRAME = 100; // left content starts fading here
const FRAME_PATH = (i) => `/frames/frame_${String(i).padStart(3, "0")}.jpg`;

export default function Hero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]); // HTMLImageElement cache, 1-indexed
  const currentDrawnFrame = useRef(0);
  const rafRef = useRef(null);

  const [firstFrameReady, setFirstFrameReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // scroll progress -> frame index (1..TOTAL_FRAMES)
  const frameIndexMV = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  // left content fade + slide during last frames
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

  // ---- draw a given frame number onto canvas ----
  // SHIFT_X range is -1 to 1:
  //   +1  -> subject pushed as far RIGHT as possible
  //   -1  -> subject pushed as far LEFT as possible
  //    0  -> perfectly centered
  // Tweak these two numbers only — everything else is just math.
  const SHIFT_X_DESKTOP = 192.9; // person sits on the right side, next to the text
  const SHIFT_X_MOBILE = -77.25; // person sits slightly left of center

  // Extra zoom guarantees there's always overflow to shift within, on any
  // screen/image aspect ratio combo (fixes the "no effect on desktop" bug,
  // which happened because that branch had zero horizontal overflow to shift).
  const ZOOM_DESKTOP = 0.90;
  const ZOOM_MOBILE = 1.12;

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

    const isMobile = window.innerWidth < 768;
    const shiftX = isMobile ? SHIFT_X_MOBILE : SHIFT_X_DESKTOP;
    const zoom = isMobile ? ZOOM_MOBILE : ZOOM_DESKTOP;

    // base "cover" scale (fills box on both axes), then zoom in a bit more
    // so we always have room to shift horizontally regardless of aspect ratio
    const baseScale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const scale = baseScale * zoom;

    const drawW = img.naturalWidth * scale;
    const drawH = img.naturalHeight * scale;
    const overflowW = drawW - cw; // always > 0 because of zoom
    const overflowH = drawH - ch;

    const dx = -(overflowW / 2) + shiftX ;
    const dy = -(overflowH / 2)+45; // keep vertical centered

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, drawW, drawH);
  }, []);

  // ---- load a single frame lazily ----
  const loadFrame = useCallback((i, priority = "low") => {
    if (imagesRef.current[i]) return imagesRef.current[i];
    const img = new Image();
    img.decoding = "async";
    // fetchPriority is respected by modern Chromium/Edge; harmless elsewhere
    img.fetchPriority = priority;
    img.src = FRAME_PATH(i);
    imagesRef.current[i] = img;
    return img;
  }, []);

  // ---- initial critical-path load: frame 1 only, eager + high priority ----
  useEffect(() => {
    const first = loadFrame(1, "high");
    const onFirstReady = () => {
      setFirstFrameReady(true);
      drawFrame(1);
    };
    if (first.complete) onFirstReady();
    else first.addEventListener("load", onFirstReady, { once: true });

    // preload a small warm-up window (frames 2-10) right after first paint
    // so early scroll feels instant, without blocking LCP
    const warmupId = window.requestIdleCallback
      ? window.requestIdleCallback(() => {
          for (let i = 2; i <= 10; i++) loadFrame(i, "low");
        })
      : setTimeout(() => {
          for (let i = 2; i <= 10; i++) loadFrame(i, "low");
        }, 300);

    // background-load the rest of the sequence in small idle chunks
    // so we never fight the main thread / network for critical assets
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
        if (window.requestIdleCallback) {
          window.requestIdleCallback(loadNextChunk);
        } else {
          setTimeout(() => loadNextChunk(), 200);
        }
      }
    };
    if (window.requestIdleCallback) {
      window.requestIdleCallback(loadNextChunk);
    } else {
      setTimeout(() => loadNextChunk(), 600);
    }

    return () => {
      cancelled = true;
      if (window.cancelIdleCallback && warmupId) window.cancelIdleCallback(warmupId);
    };
  }, [loadFrame, drawFrame]);

  // ---- redraw on resize ----
  useEffect(() => {
    const onResize = () => drawFrame(currentDrawnFrame.current || 1);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [drawFrame]);

  // ---- scroll drives frame changes, throttled to animation frames ----
  useMotionValueEvent(frameIndexMV, "change", (latest) => {
    const target = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(latest)));
    if (target === currentDrawnFrame.current) return;

    // if this frame (or nearby ones) aren't loaded yet, fetch on demand
    if (!imagesRef.current[target]) loadFrame(target, "high");
    // pre-fetch a couple frames ahead in the scroll direction
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

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "380vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        {/* Frame-sequence canvas (right-weighted visual, full bleed) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{
            visibility: firstFrameReady ? "visible" : "hidden",
          }}
        />

        {/* Low-cost placeholder while frame 1 decodes, avoids blank flash */}
        {!firstFrameReady && (
          <div className="absolute inset-0 bg-white" />
        )}

        {/* soft white gradient on the left so text stays readable over the person/laptop art */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white  to-white/10 md:from-white md:via-white/95 md:to-transparent" />

        {/* LEFT CONTENT — fades out over the final ~30 frames to reveal the laptop */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 md:px-8"
        >
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              <span className="text-xs font-medium text-[#666666]">
                Two founders. Five websites delivered. Based in Indore.
              </span>
            </motion.div>

            <h1 className="font-display text-[2.4rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.6rem]">
              Your Business Deserves A Website That{" "}
              <span className="text-gradient">Actually Sells.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-lg leading-relaxed text-[#666666]"
            >
              Every day without a fast, trustworthy website is another
              customer choosing a competitor. We build websites and run the
              digital side of your business from Google search to
              Instagram ads — so local businesses in Indore get found, get
              trusted, and get more enquiries.
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
              >— 
                <FaWhatsapp size={18} />
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
              {[
                "No fake promises",
                "Direct access to founders",
                "Built mobile-first",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm text-[#666666]"
                >
                  <CheckCircle2 size={16} className="text-[#10B981]" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
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