"use client";
import React, { useEffect, useRef } from "react";

const HEXES =
  "3b82f61d4ed822c55e15803def4444b91c1cff6a00cc5500ffc800cca00014b8a60f766edb3b7cb02e649356d46b3fa13341551e293bffbf00cc9900ffffffd3e2ef".match(
    /.{6}/g,
  );

const COLORS = {
  blue: 0,
  green: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  teal: 5,
  pink: 6,
  purple: 7,
  slate: 8,
  amber: 9,
  white: 10,
};

const S = (w, h, r, x, y, p = "") => {
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 31; i++) {
      let q = ((j + i / 30) * Math.PI) / 2,
        c = Math.cos(q),
        s = Math.sin(q);

      p +=
        (j || i ? "L" : "M") +
        (x +
          (c > 0 ? w - r : r) +
          Math.sign(c) * Math.pow(Math.abs(c), 0.6) * r) +
        " " +
        (y +
          (s > 0 ? h - r : r) +
          Math.sign(s) * Math.pow(Math.abs(s), 0.6) * r);
    }
  }
  return p + "Z";
};

export default function SquircleButton({
  color = "blue",
  label = "",
  icon = "",
  height = 44,
  square = false,
  floating = false,
  className = "",
  onClick,
}) {
  const ref = useRef(null);
  const pressState = useRef(0);
  const widthRef = useRef(0);
  const uid = useRef(Math.random().toString(36).slice(2));

  const render = () => {
    const el = ref.current;
    if (!el) return;

    // Create canvas context only when needed
    const canvas = document.createElement("canvas");
    const CTX = canvas.getContext("2d");
    if (!CTX) return;

    const idx = COLORS[color] ?? 0;
    if (!HEXES || idx * 2 + 1 >= HEXES.length) return;

    const hb = HEXES[idx * 2];
    const hd = HEXES[idx * 2 + 1];
    const white = color === "white";

    const colorMix = (hex, pct, k) =>
      `color-mix(in srgb, #${hex} ${pct}%, ${k})`;

    const hi = colorMix(hb, 70, "white");
    const sh = colorMix(hd, 35, "black");

    const scale = height / 40;
    const labelUpper = label.toUpperCase();

    if (!widthRef.current) {
      CTX.font = "900 15px system-ui";

      widthRef.current = square
        ? 48
        : Math.ceil(
            (CTX.measureText(labelUpper).width + (icon ? 100 : 80)) * 1.1,
          );
    }

    const w = widthRef.current;

    const faceY = 4 + pressState.current * 5;
    const baseY = 12;

    const z = Math.min(0.5, 20 / w);

    const dy = floating
      ? 24 - pressState.current * 12
      : 4 - pressState.current * 2;
    const std = floating
      ? 12 - pressState.current * 6
      : 3 - pressState.current * 1.5;
    const op = floating ? 0.15 : 0.3;

    el.style.width = el.classList.contains("w-full")
      ? "100%"
      : `${(w + 10) * scale}px`;

    el.style.height = `${60 * scale}px`;

    el.innerHTML = `
<svg viewBox="0 0 ${w + 10} 60"
style="width:100%;height:100%;overflow:visible"
preserveAspectRatio="none">

<defs>

<filter id="b${uid.current}"
x="-100%" y="-100%" width="300%" height="300%">
<feDropShadow dy="${dy}"
stdDeviation="${std}"
flood-color="${sh}"
flood-opacity="${op}"/>
</filter>

<linearGradient id="g${uid.current}">
<stop offset="0" stop-color="${colorMix(hd, 65, "white")}"/>
<stop offset="${z}" stop-color="${colorMix(hd, 90, "white")}"/>
<stop offset="${1 - z}" stop-color="${colorMix(hd, 90, "white")}"/>
<stop offset="1" stop-color="${colorMix(hd, 65, "white")}"/>
</linearGradient>

</defs>

<path d="${S(w, 40, 18, 5, baseY)}"
fill="${colorMix(hd, 60, "black")}"
filter="url(#b${uid.current})"/>

<path d="${S(w, 40, 18, 5, baseY)}"
fill="${colorMix(hd, 80, "black")}"
stroke="${floating ? hi : colorMix(hd, 50, "black")}"
stroke-width="1"/>

${Array.from({ length: Math.max(0, baseY - faceY) })
  .map(
    (_, k) =>
      `<path d="${S(w, 40, 18, 5, faceY + 1 + k)}"
fill="url(#g${uid.current})"/>`,
  )
  .join("")}

<path d="${S(w, 40, 18, 5, faceY)}"
fill="${white ? "#fff" : "#" + hb}"
stroke="${white ? "#e2e8f0" : hi}"
stroke-width="1.5"/>

<text x="${5 + w / 2}"
y="${20 + faceY}"
text-anchor="middle"
dominant-baseline="central"
fill="${white ? "#3b82f6" : "#fff"}"
style="pointer-events:none;font-weight:900;">



${
  !square
    ? `<tspan
font-size="15"
style="letter-spacing:1px;
font-family:system-ui;
"
>
${labelUpper}
</tspan>`
    : ""
}


<tspan style="font-family:'Material Icons';
font-size:${square ? "26px" : "20px"};"
dy="1"
 dx="${square ? 0 : 8}">
${icon}
</tspan>
</text>

</svg>`;
  };

  useEffect(() => {
    render();

    const ro = new ResizeObserver(() => {
      if (ref.current?.classList.contains("w-full")) {
        // Create temporary canvas for measurement
        const canvas = document.createElement("canvas");
        const CTX = canvas.getContext("2d");
        if (CTX && ref.current) {
          CTX.font = "900 15px system-ui";
          widthRef.current = ref.current.offsetWidth / (height / 40) - 10;
          render();
        }
      }
    });

    if (ref.current) ro.observe(ref.current);

    return () => ro.disconnect();
  }, [color, label, icon, height, square, floating]); // Added dependencies

  const press = (v) => {
    pressState.current = v;
    render();
  };

  return (
    <div
      ref={ref}
      onClick={onClick}
      onPointerDown={() => press(1)}
      onPointerUp={() => press(0)}
      onPointerLeave={() => press(0)}
      className={`inline-block cursor-pointer select-none ${className}`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    />
  );
}
