"use client";

import { useRef, useState, useEffect, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

export interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Threshold de interseção (0–1) para disparar */
  threshold?: number;
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function SectionReveal({
  children,
  className,
  threshold = 0.06,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (reduceMotion) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // rootMargin generoso para revelar um pouco antes de entrar na tela
      { threshold, rootMargin: "80px 0px 80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, reduceMotion]);

  const show = visible || reduceMotion;

  return (
    <div
      ref={ref}
      className={cn(
        !reduceMotion && "transition-[opacity,transform] duration-300 ease-out",
        show ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
