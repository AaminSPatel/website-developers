"use client";
import React, { useState } from "react";

export default function SquircleButton({
  size = "default",

  children,
  color = "blue",
  className = "",
  onClick,
}) {
  const [pressed, setPressed] = useState(false);

  const colors = {
    blue: {
      bg: "#3b82f6",
      shadow: "#1e40af",
    },
    white: {
      bg: "#ffffff",
      shadow: "#d1d5db",
      text: "#111827",
    },
    red: {
      bg: "#ef4444",
      shadow: "#991b1b",
    },
    green: {
      bg: "#25D366",
      shadow: "#128C7E",
    },
  };

  const current = colors[color] || colors.blue;

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={`relative inline-flex items-center justify-center font-bold px-6 py-3 transition-all duration-150 ${className}`}
      style={{
        background: current.bg,
        color: current.text || "#fff",
        borderRadius: "20px",
        transform: pressed ? "translateY(4px)" : "translateY(0px)",
        boxShadow: pressed
          ? `0 2px 0 ${current.shadow}`
          : `0 6px 0 ${current.shadow}`,
      }}
      
    >
      {children}
    </button>
  );
}