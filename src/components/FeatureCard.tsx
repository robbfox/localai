"use client";

import { useEffect, useRef, useState } from "react";
import PaintSplatter from "./PaintSplatter";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: "pink" | "yellow";
  delayMs?: number;
  isFirst?: boolean;
};

export default function FeatureCard({
  icon,
  title,
  description,
  color = "pink",
  delayMs = 0,
  isFirst = false,
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delayMs);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  const isPink = color === "pink";

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-600 ease-out lg:px-8 ${
        isFirst ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:border-border-dark"
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
    >
      {/* Icon with Splatter burst backdrop */}
      <div className="relative mb-5 inline-block">
        <div
          className={`pointer-events-none absolute -top-3 -left-3 -z-10 opacity-70 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 ${
            isPink ? "punk-glow-pink" : "punk-glow-yellow"
          }`}
        >
          <PaintSplatter
            variant="burst"
            color={color}
            size={68}
            rotate={isPink ? 15 : -25}
          />
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl border p-2.5 transition-colors ${
            isPink
              ? "bg-punk-pink/15 text-punk-pink border-punk-pink/40 group-hover:bg-punk-pink group-hover:text-black"
              : "bg-punk-yellow/15 text-punk-yellow border-punk-yellow/40 group-hover:bg-punk-yellow group-hover:text-black"
          }`}
        >
          {icon}
        </div>
      </div>

      <h3 className="mb-2.5 text-[22px] font-black tracking-tight text-white transition-colors group-hover:text-punk-yellow sm:text-2xl">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-text-dark-secondary">{description}</p>
    </div>
  );
}

