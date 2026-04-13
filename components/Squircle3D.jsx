"use client";
import React, { useEffect, useRef, useState } from "react";

const HEXES =
  "3b82f61d4ed822c55e15803def4444b91c1cff6a00cc5500ffc800cca00014b8a60f766edb3b7cb02e649356d46b3fa13341551e293bffbf00cc9900ffffffd3e2ef".match(
    /.{6}/g,
  );

const COLORS = {
  blue: 0, green: 1, red: 2, orange: 3, yellow: 4,
  teal: 5, pink: 6, purple: 7, slate: 8, amber: 9, white: 10,
};

// Squircle Path Generator
const S = (w, h, r, x, y) => {
  let p = "";
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i <= 30; i++) {
      let q = ((j + i / 30) * Math.PI) / 2,
        c = Math.cos(q),
        s = Math.sin(q);
      p += (j || i ? "L" : "M") +
        (x + (c > 0 ? w - r : r) + Math.sign(c) * Math.pow(Math.abs(c), 0.6) * r) + " " +
        (y + (s > 0 ? h - r : r) + Math.sign(s) * Math.pow(Math.abs(s), 0.6) * r);
    }
  }
  return p + "Z";
};

export default function Squircle3D({
  children,
  color = "blue",
  className = "",
  depth = 9, // 3D thickness
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const uid = useRef(Math.random().toString(36).slice(2));

  // Sync dimensions with children
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDims({
          w: entry.contentRect.width,
          h: entry.contentRect.height
        });
      }
    });

    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const idx = COLORS[color] ?? 0;
  const hb = HEXES[idx * 2];
  const hd = HEXES[idx * 2 + 1];
  const isWhite = color === "white";

  const colorMix = (hex, pct, k) => `color-mix(in srgb, #${hex} ${pct}%, ${k})`;
  
  const hi = colorMix(hb, 70, "white");
  const sh = colorMix(hd, 35, "black");
  const sideGradient = `url(#g${uid.current})`;

  // Padding adjustment for 3D depth and shadow
  const paddingX = 10; 
  const paddingTop = 4;
  const paddingBottom = depth + 10;

  return (
    <div className={`relative inline-block ${className}`} ref={containerRef} style={{ isolation: 'isolate' }}>
      {/* SVG Background */}
      <svg
        className="absolute inset-0 -z-10"
        width={dims.w + paddingX * 2}
        height={dims.h + paddingTop + paddingBottom}
        viewBox={`0 0 ${dims.w + paddingX * 2} ${dims.h + paddingTop + paddingBottom}`}
        style={{ pointerEvents: 'none', transform: `translate(-${paddingX}px, -${paddingTop}px)` }}
      >
        <defs>
          <filter id={`shadow${uid.current}`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color={sh} flood-opacity="0.3" />
          </filter>
          <linearGradient id={`g${uid.current}`}>
            <stop offset="0" stop-color={colorMix(hd, 65, "white")} />
            <stop offset="0.5" stop-color={colorMix(hd, 90, "white")} />
            <stop offset="1" stop-color={colorMix(hd, 65, "white")} />
          </linearGradient>
        </defs>

        {/* Bottom Shadow Layer */}
        <path d={S(dims.w, dims.h, 16, paddingX, paddingTop + depth)} fill={sh} filter={`url(#shadow${uid.current})`} />

        {/* 3D Sides (Extrusion) */}
        {Array.from({ length: depth }).map((_, i) => (
          <path key={i} d={S(dims.w, dims.h, 16, paddingX, paddingTop + i + 1)} fill={sideGradient} />
        ))}

        {/* Top Face */}
        <path
          d={S(dims.w, dims.h, 16, paddingX, paddingTop)}
          fill={isWhite ? "#ffffff" : "#" + hb}
          stroke={isWhite ? "#e2e8ef" : hi}
          strokeWidth="2"
        />
      </svg>

      {/* Actual Content */}
      <div ref={contentRef} className="relative z-10 overflow-hidden">
        {children}
      </div>
    </div>
  );
}