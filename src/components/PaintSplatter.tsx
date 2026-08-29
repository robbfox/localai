import React from "react";

export type SplatterColor = "pink" | "yellow" | "duo" | "white";
export type SplatterVariant =
  | "burst"
  | "drip"
  | "spray"
  | "clash"
  | "dots"
  | "streak"
  | "grunge-ring";

interface PaintSplatterProps {
  variant?: SplatterVariant;
  color?: SplatterColor;
  className?: string;
  size?: number | string;
  rotate?: number;
  opacity?: number;
  flipX?: boolean;
  flipY?: boolean;
}

export default function PaintSplatter({
  variant = "burst",
  color = "pink",
  className = "",
  size = "100%",
  rotate = 0,
  opacity = 1,
  flipX = false,
  flipY = false,
}: PaintSplatterProps) {
  const getPrimaryColor = () => {
    switch (color) {
      case "pink":
        return "#ff2a85";
      case "yellow":
        return "#ffe600";
      case "white":
        return "#ffffff";
      case "duo":
      default:
        return "#ff2a85";
    }
  };

  const getSecondaryColor = () => {
    switch (color) {
      case "pink":
        return "#ff007f";
      case "yellow":
        return "#fcee0a";
      case "white":
        return "#e2e8f0";
      case "duo":
      default:
        return "#ffe600";
    }
  };

  const primary = getPrimaryColor();
  const secondary = getSecondaryColor();

  const transform = [
    rotate ? `rotate(${rotate}deg)` : "",
    flipX ? "scaleX(-1)" : "",
    flipY ? "scaleY(-1)" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const style: React.CSSProperties = {
    width: typeof size === "number" ? `${size}px` : size,
    height: typeof size === "number" ? `${size}px` : size,
    transform: transform || undefined,
    opacity,
  };

  if (variant === "drip") {
    return (
      <svg
        viewBox="0 0 240 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={style}
        aria-hidden="true"
      >
        <path
          d="M10 20 C 30 18, 50 25, 70 20 C 95 14, 115 28, 140 22 C 170 15, 195 26, 230 18 C 235 35, 230 55, 220 70 C 205 90, 195 85, 185 110 C 175 140, 182 180, 180 220 C 178 245, 168 260, 160 260 C 152 260, 148 240, 150 215 C 154 170, 145 130, 140 100 C 135 70, 120 75, 110 95 C 95 130, 102 185, 98 230 C 95 265, 82 275, 74 275 C 66 275, 65 255, 68 220 C 72 170, 60 120, 50 85 C 40 50, 20 60, 10 20 Z"
          fill={primary}
        />
        {/* Splatter Drops */}
        <circle cx="160" cy="275" r="4.5" fill={primary} />
        <circle cx="74" cy="285" r="5" fill={primary} />
        <circle cx="120" cy="180" r="3.5" fill={secondary} />
        <circle cx="195" cy="150" r="2.5" fill={primary} />
        <circle cx="40" cy="150" r="3" fill={primary} />
        <circle cx="85" cy="45" r="4" fill={secondary} />
        <circle cx="215" cy="40" r="3" fill={secondary} />
        <circle cx="25" cy="75" r="2.5" fill={primary} />
        <path
          d="M130 35 C 135 50, 138 70, 135 85 C 132 95, 125 95, 122 85 C 120 70, 122 50, 125 35 Z"
          fill={secondary}
        />
        {/* Micro splatter mist */}
        <circle cx="55" cy="245" r="1.5" fill={primary} />
        <circle cx="175" cy="240" r="1.5" fill={secondary} />
        <circle cx="105" cy="270" r="2" fill={secondary} />
      </svg>
    );
  }

  if (variant === "spray") {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={style}
        aria-hidden="true"
      >
        <g fill={primary}>
          <circle cx="100" cy="100" r="14" />
          <circle cx="125" cy="85" r="8" />
          <circle cx="80" cy="115" r="9" />
          <circle cx="110" cy="130" r="7" />
          <circle cx="75" cy="80" r="6" />
          <circle cx="140" cy="110" r="5" />
          <circle cx="60" cy="130" r="4.5" />
          <circle cx="130" cy="60" r="4" />
          <circle cx="90" cy="55" r="3.5" />
          <circle cx="160" cy="85" r="3" />
          <circle cx="50" cy="95" r="3.5" />
          <circle cx="150" cy="140" r="3" />
          <circle cx="85" cy="160" r="3" />
          <circle cx="120" cy="165" r="2.5" />
          <circle cx="40" cy="65" r="2" />
          <circle cx="170" cy="120" r="2" />
          <circle cx="165" cy="55" r="2.5" />
          <circle cx="30" cy="120" r="2" />
          <circle cx="70" cy="180" r="1.8" />
          <circle cx="140" cy="180" r="1.5" />
          <circle cx="185" cy="95" r="1.5" />
          <circle cx="20" cy="80" r="1.5" />
          <circle cx="110" cy="25" r="2" />
        </g>
        <g fill={secondary}>
          <circle cx="115" cy="105" r="9" />
          <circle cx="95" cy="85" r="6" />
          <circle cx="135" cy="95" r="4" />
          <circle cx="65" cy="110" r="4" />
          <circle cx="105" cy="145" r="3" />
          <circle cx="150" cy="70" r="2.5" />
          <circle cx="45" cy="140" r="2" />
          <circle cx="175" cy="105" r="1.5" />
          <circle cx="80" cy="35" r="2.5" />
          <circle cx="125" cy="40" r="1.8" />
          <circle cx="35" cy="100" r="1.5" />
          <circle cx="155" cy="160" r="2" />
        </g>
      </svg>
    );
  }

  if (variant === "clash") {
    return (
      <svg
        viewBox="0 0 300 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={style}
        aria-hidden="true"
      >
        {/* Pink explosive burst layer */}
        <path
          d="M120 70 C 135 40, 160 30, 185 45 C 210 60, 230 35, 245 55 C 260 75, 285 85, 275 110 C 265 135, 280 160, 260 175 C 240 190, 235 215, 210 210 C 185 205, 170 230, 150 215 C 130 200, 110 215, 95 195 C 80 175, 55 180, 50 155 C 45 130, 65 110, 60 90 C 55 70, 75 55, 95 65 C 105 70, 112 60, 120 70 Z"
          fill="#ff2a85"
        />
        {/* Yellow interlocking splash splatter */}
        <path
          d="M170 90 C 190 70, 215 75, 225 95 C 235 115, 255 120, 250 140 C 245 160, 225 170, 215 185 C 205 200, 180 195, 165 205 C 150 215, 135 190, 120 185 C 105 180, 95 160, 105 145 C 115 130, 100 115, 115 100 C 130 85, 150 110, 170 90 Z"
          fill="#ffe600"
        />
        {/* Pink satellite splashes */}
        <circle cx="285" cy="50" r="5" fill="#ff2a85" />
        <circle cx="295" cy="130" r="4" fill="#ff2a85" />
        <circle cx="260" cy="225" r="4.5" fill="#ff2a85" />
        <circle cx="130" cy="235" r="3.5" fill="#ff2a85" />
        <circle cx="40" cy="195" r="5.5" fill="#ff2a85" />
        <circle cx="30" cy="105" r="4" fill="#ff2a85" />
        <circle cx="75" cy="35" r="4" fill="#ff2a85" />
        <circle cx="150" cy="25" r="3.5" fill="#ff2a85" />
        {/* Yellow satellite splashes */}
        <circle cx="265" cy="95" r="4.5" fill="#ffe600" />
        <circle cx="230" cy="215" r="5" fill="#ffe600" />
        <circle cx="180" cy="235" r="4" fill="#ffe600" />
        <circle cx="85" cy="180" r="3.5" fill="#ffe600" />
        <circle cx="70" cy="130" r="4.5" fill="#ffe600" />
        <circle cx="195" cy="45" r="4" fill="#ffe600" />
        <circle cx="240" cy="60" r="3" fill="#ffe600" />
        {/* Splash tendrils */}
        <path
          d="M210 50 Q 235 30 255 20 Q 250 35 240 45 Z"
          fill="#ffe600"
        />
        <path
          d="M80 85 Q 50 65 30 50 Q 45 75 65 85 Z"
          fill="#ff2a85"
        />
        <path
          d="M220 185 Q 250 215 270 235 Q 245 220 225 195 Z"
          fill="#ff2a85"
        />
      </svg>
    );
  }

  if (variant === "streak") {
    return (
      <svg
        viewBox="0 0 280 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={style}
        aria-hidden="true"
      >
        <path
          d="M5 45 C 30 35, 60 55, 100 40 C 140 25, 190 60, 240 38 C 260 30, 275 42, 275 52 C 275 62, 255 58, 230 68 C 180 88, 130 55, 90 70 C 50 85, 20 60, 5 45 Z"
          fill={primary}
        />
        <circle cx="260" cy="20" r="3.5" fill={primary} />
        <circle cx="270" cy="65" r="3" fill={secondary} />
        <circle cx="245" cy="85" r="4" fill={primary} />
        <circle cx="160" cy="18" r="2.5" fill={secondary} />
        <circle cx="120" cy="82" r="3" fill={primary} />
        <circle cx="45" cy="22" r="3.5" fill={secondary} />
        <circle cx="15" cy="70" r="2" fill={primary} />
      </svg>
    );
  }

  if (variant === "dots") {
    return (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={style}
        aria-hidden="true"
      >
        <circle cx="80" cy="80" r="16" fill={primary} />
        <circle cx="115" cy="50" r="9" fill={secondary} />
        <circle cx="45" cy="110" r="8" fill={primary} />
        <circle cx="125" cy="115" r="7" fill={secondary} />
        <circle cx="35" cy="55" r="6" fill={primary} />
        <circle cx="75" cy="25" r="4.5" fill={secondary} />
        <circle cx="85" cy="135" r="5" fill={primary} />
        <circle cx="145" cy="80" r="3.5" fill={primary} />
        <circle cx="15" cy="85" r="3" fill={secondary} />
        <circle cx="135" cy="30" r="2.5" fill={primary} />
        <circle cx="25" cy="140" r="2" fill={secondary} />
        <circle cx="140" cy="145" r="2" fill={primary} />
      </svg>
    );
  }

  if (variant === "grunge-ring") {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={style}
        aria-hidden="true"
      >
        <path
          d="M100 20 C 145 20, 180 55, 180 100 C 180 145, 145 180, 100 180 C 55 180, 20 145, 20 100 C 20 55, 55 20, 100 20 Z M100 45 C 70 45, 45 70, 45 100 C 45 130, 70 155, 100 155 C 130 155, 155 130, 155 100 C 155 70, 130 45, 100 45 Z"
          fill={primary}
          fillRule="evenodd"
          opacity="0.85"
        />
        <circle cx="185" cy="70" r="5" fill={secondary} />
        <circle cx="190" cy="130" r="4" fill={primary} />
        <circle cx="140" cy="190" r="6" fill={secondary} />
        <circle cx="60" cy="185" r="4.5" fill={primary} />
        <circle cx="15" cy="135" r="5" fill={secondary} />
        <circle cx="15" cy="65" r="4" fill={primary} />
        <circle cx="65" cy="15" r="5" fill={secondary} />
        <circle cx="135" cy="15" r="4" fill={primary} />
      </svg>
    );
  }

  // Default: Organic Explosive Splatter Burst
  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M130 65 C 142 45, 155 25, 168 42 C 178 55, 195 48, 205 60 C 218 75, 240 70, 235 90 C 230 105, 252 118, 245 135 C 238 152, 250 172, 235 188 C 220 204, 222 225, 202 230 C 182 235, 172 255, 152 245 C 132 235, 118 252, 100 240 C 82 228, 65 235, 55 218 C 45 201, 25 198, 28 178 C 31 158, 12 145, 20 128 C 28 111, 18 90, 35 78 C 52 66, 58 45, 78 50 C 98 55, 118 35, 130 65 Z"
        fill={primary}
      />
      {/* Central depth overlay */}
      <circle cx="130" cy="130" r="32" fill={secondary} opacity="0.4" />
      {/* Satellites and droplet trails */}
      <circle cx="178" cy="22" r="5.5" fill={primary} />
      <circle cx="215" cy="38" r="4" fill={secondary} />
      <circle cx="252" cy="72" r="3.5" fill={primary} />
      <circle cx="258" cy="115" r="5" fill={secondary} />
      <circle cx="250" cy="165" r="4" fill={primary} />
      <circle cx="242" cy="210" r="5.5" fill={secondary} />
      <circle cx="188" cy="252" r="4.5" fill={primary} />
      <circle cx="135" cy="258" r="3" fill={secondary} />
      <circle cx="78" cy="252" r="5" fill={primary} />
      <circle cx="35" cy="228" r="4" fill={secondary} />
      <circle cx="12" cy="175" r="3.5" fill={primary} />
      <circle cx="8" cy="112" r="5.5" fill={secondary} />
      <circle cx="18" cy="65" r="4" fill={primary} />
      <circle cx="52" cy="28" r="5" fill={secondary} />
      <circle cx="102" cy="18" r="3.5" fill={primary} />
      {/* Fine mist speckles */}
      <circle cx="195" cy="15" r="1.5" fill={primary} />
      <circle cx="230" cy="50" r="2" fill={primary} />
      <circle cx="255" cy="195" r="1.8" fill={primary} />
      <circle cx="160" cy="255" r="2" fill={secondary} />
      <circle cx="50" cy="245" r="1.5" fill={primary} />
      <circle cx="5" cy="140" r="2" fill={secondary} />
      <circle cx="35" cy="45" r="1.8" fill={primary} />
    </svg>
  );
}

export function PaintDripHeader({
  color = "pink",
  className = "",
}: {
  color?: SplatterColor;
  className?: string;
}) {
  const fillColor =
    color === "yellow" ? "#ffe600" : color === "pink" ? "#ff2a85" : "#ff2a85";

  return (
    <div
      className={`pointer-events-none absolute top-0 right-0 left-0 overflow-hidden leading-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 48"
        fill="none"
        preserveAspectRatio="none"
        className="h-10 w-full md:h-12"
      >
        <path
          d="M0 0 H1200 V12 C 1170 12, 1160 38, 1145 38 C 1130 38, 1125 15, 1090 15 C 1060 15, 1050 45, 1035 45 C 1020 45, 1015 18, 970 18 C 940 18, 930 40, 915 40 C 900 40, 895 12, 850 12 C 820 12, 810 35, 795 35 C 780 35, 775 14, 730 14 C 700 14, 690 48, 675 48 C 660 48, 655 16, 610 16 C 580 16, 570 36, 555 36 C 540 36, 535 15, 490 15 C 460 15, 450 42, 435 42 C 420 42, 415 14, 370 14 C 340 14, 330 38, 315 38 C 300 38, 295 16, 250 16 C 220 16, 210 46, 195 46 C 180 46, 175 12, 130 12 C 100 12, 90 32, 75 32 C 60 32, 55 14, 20 14 C 10 14, 0 12, 0 12 Z"
          fill={fillColor}
        />
        {/* Drip drops below tips */}
        <circle cx="1145" cy="44" r="2" fill={fillColor} />
        <circle cx="675" cy="54" r="2.5" fill={fillColor} />
        <circle cx="435" cy="48" r="2" fill={fillColor} />
        <circle cx="195" cy="52" r="2.5" fill={fillColor} />
      </svg>
    </div>
  );
}

export function PunkBadge({
  children,
  color = "pink",
  className = "",
}: {
  children: React.ReactNode;
  color?: "pink" | "yellow";
  className?: string;
}) {
  const isPink = color === "pink";
  return (
    <span
      className={`relative inline-flex items-center justify-center font-black tracking-[0.1em] uppercase select-none transition-transform hover:scale-105 ${
        isPink
          ? "bg-[#ff2a85] text-black shadow-[3px_3px_0px_#ffe600]"
          : "bg-[#ffe600] text-black shadow-[3px_3px_0px_#ff2a85]"
      } px-3.5 py-1 text-xs sm:text-sm font-sans ${className}`}
      style={{
        transform: isPink ? "rotate(-2deg)" : "rotate(2deg)",
        clipPath:
          "polygon(0% 4px, 4px 0%, calc(100% - 4px) 0%, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0% calc(100% - 4px))",
      }}
    >
      {children}
    </span>
  );
}
