"use client";

import { useEffect, useState } from "react";

interface SplatterPoint {
  id: number;
  x: number;
  y: number;
  color: "pink" | "yellow";
  size: number;
  rotation: number;
  variant: number;
}

export default function InteractiveSplatter() {
  const [splatters, setSplatters] = useState<SplatterPoint[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't trigger if clicked on links or buttons
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, input, textarea")) return;

      const newSplatter: SplatterPoint = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: Math.random() > 0.5 ? "pink" : "yellow",
        size: Math.floor(Math.random() * 40) + 40,
        rotation: Math.floor(Math.random() * 360),
        variant: Math.floor(Math.random() * 3),
      };

      setSplatters((prev) => [...prev.slice(-8), newSplatter]);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      {splatters.map((s) => (
        <div
          key={s.id}
          className="absolute animate-splatter-pop transition-opacity duration-1000"
          style={{
            left: s.x,
            top: s.y,
            transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
            width: `${s.size}px`,
            height: `${s.size}px`,
          }}
        >
          <svg viewBox="0 0 100 100" className="h-full w-full opacity-90 drop-shadow-md">
            {s.variant === 0 ? (
              // Splat 1
              <g fill={s.color === "pink" ? "#ff2a85" : "#ffe600"}>
                <circle cx="50" cy="50" r="22" />
                <circle cx="25" cy="40" r="9" />
                <circle cx="75" cy="45" r="8" />
                <circle cx="55" cy="78" r="10" />
                <circle cx="35" cy="65" r="7" />
                <circle cx="70" cy="72" r="5" />
                <circle cx="50" cy="18" r="6" />
                <circle cx="15" cy="28" r="4" />
                <circle cx="85" cy="30" r="3.5" />
                <circle cx="88" cy="65" r="4.5" />
                <circle cx="30" cy="85" r="3" />
                <circle cx="65" cy="90" r="3" />
              </g>
            ) : s.variant === 1 ? (
              // Splat 2
              <g fill={s.color === "pink" ? "#ff2a85" : "#ffe600"}>
                <path d="M50 25 C 65 15, 75 35, 80 45 C 90 55, 85 70, 75 80 C 65 90, 45 85, 35 75 C 20 65, 25 45, 35 35 C 45 25, 40 15, 50 25 Z" />
                <circle cx="20" cy="20" r="4" />
                <circle cx="85" cy="25" r="5" />
                <circle cx="90" cy="75" r="4" />
                <circle cx="30" cy="90" r="3" />
                <circle cx="10" cy="55" r="3.5" />
              </g>
            ) : (
              // Splat 3 (fine spray)
              <g fill={s.color === "pink" ? "#ff2a85" : "#ffe600"}>
                <circle cx="50" cy="50" r="16" />
                <circle cx="68" cy="38" r="6" />
                <circle cx="32" cy="62" r="7" />
                <circle cx="40" cy="32" r="5" />
                <circle cx="62" cy="68" r="6" />
                <circle cx="20" cy="45" r="3" />
                <circle cx="80" cy="55" r="2.5" />
                <circle cx="45" cy="82" r="3.5" />
                <circle cx="75" cy="20" r="3" />
                <circle cx="15" cy="70" r="2" />
              </g>
            )}
          </svg>
        </div>
      ))}
    </div>
  );
}
