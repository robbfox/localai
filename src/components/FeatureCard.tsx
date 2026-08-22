"use client";

import { useEffect, useRef, useState } from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delayMs?: number;
  isFirst?: boolean;
};

export default function FeatureCard({
  icon,
  title,
  description,
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

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out lg:px-8 ${
        isFirst ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:border-border-dark"
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
    >
      <div className="mb-5 h-10 w-10 text-accent">{icon}</div>
      <h3 className="mb-2.5 text-[22px] font-bold sm:text-2xl">{title}</h3>
      <p className="text-base text-text-dark-secondary">{description}</p>
    </div>
  );
}
