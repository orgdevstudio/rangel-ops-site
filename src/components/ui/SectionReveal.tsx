"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Threshold de interseção (0–1) para disparar */
  threshold?: number;
}

export function SectionReveal({
  children,
  className,
  threshold = 0.06,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: "0px 0px -24px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-300 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
