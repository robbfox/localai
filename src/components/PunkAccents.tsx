import React from "react";
import PaintSplatter from "./PaintSplatter";

export function PaintDripDivider({
  color = "pink",
  position = "top",
  className = "",
}: {
  color?: "pink" | "yellow" | "duo";
  position?: "top" | "bottom";
  className?: string;
}) {
  const fillColor = color === "yellow" ? "#ffe600" : "#ff2a85";

  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 z-20 overflow-hidden leading-none ${
        position === "top" ? "-top-[1px]" : "-bottom-[1px] rotate-180"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 46"
        fill="none"
        preserveAspectRatio="none"
        className="h-8 w-full md:h-11"
      >
        <path
          d="M0 0 H1200 V10 C 1160 10, 1150 32, 1135 32 C 1120 32, 1115 12, 1070 12 C 1040 12, 1030 42, 1015 42 C 1000 42, 995 14, 940 14 C 910 14, 900 36, 885 36 C 870 36, 865 10, 810 10 C 780 10, 770 30, 755 30 C 740 30, 735 12, 680 12 C 650 12, 640 44, 625 44 C 610 44, 605 14, 550 14 C 520 14, 510 32, 495 32 C 480 32, 475 12, 420 12 C 390 12, 380 40, 365 40 C 350 40, 345 10, 290 10 C 260 10, 250 34, 235 34 C 220 34, 215 14, 160 14 C 130 14, 120 28, 105 28 C 90 28, 85 10, 30 10 C 15 10, 0 8, 0 8 Z"
          fill={fillColor}
        />
        {/* Drip tips */}
        <circle cx="1015" cy="45" r="2.5" fill={fillColor} />
        <circle cx="625" cy="46" r="2.5" fill={fillColor} />
        <circle cx="365" cy="43" r="2.5" fill={fillColor} />
        {color === "duo" && (
          <g fill="#ffe600">
            <circle cx="885" cy="38" r="2" />
            <circle cx="235" cy="36" r="2" />
            <path
              d="M750 0 L760 26 C 758 30, 752 30, 750 26 Z"
            />
          </g>
        )}
      </svg>
    </div>
  );
}

export function SplatterUnderline({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        viewBox="0 0 240 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute -bottom-3 left-0 w-full h-4"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M4 14 C 40 8, 90 18, 140 10 C 180 4, 215 15, 236 11"
          stroke="#ffe600"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M8 12 C 45 6, 85 16, 135 8 C 175 2, 210 13, 232 9"
          stroke="#ff2a85"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="30" cy="19" r="2" fill="#ffe600" />
        <circle cx="120" cy="20" r="1.5" fill="#ff2a85" />
        <circle cx="200" cy="18" r="2" fill="#ffe600" />
      </svg>
    </div>
  );
}

export function PunkStickerTape({
  text,
  rotate = -3,
  color = "yellow",
  className = "",
}: {
  text: string;
  rotate?: number;
  color?: "yellow" | "pink";
  className?: string;
}) {
  const isYellow = color === "yellow";
  return (
    <div
      className={`inline-block select-none font-black uppercase tracking-wider text-black text-xs sm:text-sm px-3 py-1 shadow-[4px_4px_0px_rgba(0,0,0,0.8)] border border-black/40 ${
        isYellow ? "bg-[#ffe600]" : "bg-[#ff2a85]"
      } ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        clipPath:
          "polygon(0% 0%, 97% 2%, 100% 95%, 3% 98%)",
      }}
    >
      {text}
    </div>
  );
}

export function SplatterCluster({
  className = "",
  variant = "top-right",
}: {
  className?: string;
  variant?: "top-right" | "bottom-left" | "floating" | "compact";
}) {
  if (variant === "bottom-left") {
    return (
      <div
        className={`pointer-events-none absolute -bottom-10 -left-10 z-0 opacity-70 ${className}`}
        aria-hidden="true"
      >
        <PaintSplatter
          variant="burst"
          color="pink"
          size={240}
          rotate={-25}
          className="punk-glow-pink"
        />
        <div className="absolute top-10 left-16">
          <PaintSplatter
            variant="spray"
            color="yellow"
            size={180}
            rotate={45}
            className="punk-glow-yellow"
          />
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div
        className={`pointer-events-none absolute z-0 opacity-80 ${className}`}
        aria-hidden="true"
      >
        <PaintSplatter
          variant="clash"
          color="duo"
          size={160}
          rotate={12}
        />
      </div>
    );
  }

  return (
    <div
      className={`pointer-events-none absolute -top-12 -right-12 z-0 opacity-75 ${className}`}
      aria-hidden="true"
    >
      <PaintSplatter
        variant="burst"
        color="yellow"
        size={280}
        rotate={35}
        className="punk-glow-yellow"
      />
      <div className="absolute top-12 right-12">
        <PaintSplatter
          variant="drip"
          color="pink"
          size={220}
          rotate={-15}
          className="punk-glow-pink"
        />
      </div>
      <div className="absolute -top-4 right-32">
        <PaintSplatter
          variant="dots"
          color="duo"
          size={110}
          rotate={70}
        />
      </div>
    </div>
  );
}
