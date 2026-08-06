"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { HeroEnergyLines } from "./HeroEnergyLines";
import { HeroParticles } from "./HeroParticles";

const HOLOS = [
  {
    label: "Analytics",
    hint: "Insights que impulsam resultados",
    style: { top: "6%", right: "2%" },
    delay: "0s",
    depth: 0.55,
  },
  {
    label: "Performance",
    hint: "Apps rápidos e otimizados",
    style: { bottom: "18%", right: "0%" },
    delay: "-2s",
    depth: 0.4,
  },
  {
    label: "Escalabilidade",
    hint: "Infraestrutura para crescer",
    style: { top: "38%", left: "0%" },
    delay: "-4s",
    depth: 0.35,
  },
  {
    label: "Segurança",
    hint: "Proteção de ponta a ponta",
    style: { bottom: "8%", left: "6%" },
    delay: "-6s",
    depth: 0.5,
  },
] as const;

type PointerState = { x: number; y: number; hovering: boolean };

function useParallaxIntensity() {
  const [intensity, setIntensity] = useState(1);

  useEffect(() => {
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqFine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqTablet = window.matchMedia("(min-width: 768px)");

    const update = () => {
      if (mqReduce.matches || !mqFine.matches) {
        setIntensity(0);
        return;
      }
      if (mqDesktop.matches) {
        setIntensity(1);
        return;
      }
      if (mqTablet.matches) {
        setIntensity(0.4);
        return;
      }
      setIntensity(0);
    };

    update();
    mqReduce.addEventListener("change", update);
    mqFine.addEventListener("change", update);
    mqDesktop.addEventListener("change", update);
    mqTablet.addEventListener("change", update);
    return () => {
      mqReduce.removeEventListener("change", update);
      mqFine.removeEventListener("change", update);
      mqDesktop.removeEventListener("change", update);
      mqTablet.removeEventListener("change", update);
    };
  }, []);

  return intensity;
}

export function HeroScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const target = useRef<PointerState>({ x: 0, y: 0, hovering: false });
  const current = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const raf = useRef<number>(0);
  const intensity = useParallaxIntensity();
  const [isMobileSparse, setIsMobileSparse] = useState(false);
  const [showHolos, setShowHolos] = useState(true);

  const imgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const energyRef = useRef<HTMLDivElement>(null);
  const holoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => {
      setIsMobileSparse(mq.matches);
      setShowHolos(!mq.matches);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const tick = () => {
      const t = target.current;
      const c = current.current;
      const ease = 0.08;
      c.x += (t.x - c.x) * ease;
      c.y += (t.y - c.y) * ease;
      const targetRx = t.hovering ? t.y * -2 : 0;
      const targetRy = t.hovering ? t.x * 2 : 0;
      c.rx += (targetRx - c.rx) * ease;
      c.ry += (targetRy - c.ry) * ease;

      const i = intensity;
      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(${c.x * 14 * i}px, ${c.y * 10 * i}px, 0) rotateX(${c.rx * i}deg) rotateY(${c.ry * i}deg)`;
      }
      if (glowRef.current) {
        const glowBoost = t.hovering ? 1.15 : 1;
        glowRef.current.style.transform = `translate3d(${c.x * 6 * i}px, ${c.y * 4 * i}px, 0) scale(${glowBoost})`;
      }
      if (energyRef.current) {
        energyRef.current.style.transform = `translate3d(${c.x * 4 * i}px, ${c.y * 3 * i}px, 0)`;
      }
      holoRefs.current.forEach((el, idx) => {
        if (!el) return;
        const d = HOLOS[idx]?.depth ?? 0.4;
        el.style.transform = `translate3d(${c.x * 10 * d * i}px, ${c.y * 8 * d * i}px, 0)`;
      });

      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [intensity]);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (intensity === 0) return;
      const el = rootRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      target.current.x = Math.max(-1, Math.min(1, x));
      target.current.y = Math.max(-1, Math.min(1, y));
    },
    [intensity]
  );

  const onPointerEnter = useCallback(() => {
    if (intensity === 0) return;
    target.current.hovering = true;
  }, [intensity]);

  const onPointerLeave = useCallback(() => {
    target.current = { x: 0, y: 0, hovering: false };
  }, []);

  const asset = siteConfig.brand.heroImage;

  return (
    <div
      ref={rootRef}
      className="relative mx-auto aspect-[1024/682] w-full max-w-none select-none lg:-mr-8 lg:scale-110 lg:origin-center"
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{ perspective: 1200 }}
    >
      <div
        ref={glowRef}
        className="hero-glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,184,255,0.45) 0%, rgba(14,165,233,0.12) 40%, transparent 70%)",
          transition: "opacity 600ms var(--ease-spring)",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[58%] h-[45%] w-[75%] -translate-x-1/2 rounded-[50%] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(34,184,255,0.2) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div ref={energyRef} className="pointer-events-none absolute inset-[-4%] z-0">
        <HeroEnergyLines />
      </div>

      <HeroParticles sparse={isMobileSparse} />

      <div className={cn("hero-float relative z-10 h-full w-full")}>
        <div
          ref={imgRef}
          className="relative h-full w-full will-change-transform"
          style={{
            transformStyle: "preserve-3d",
            transition: "filter 600ms var(--ease-spring)",
          }}
        >
          {asset?.src ? (
            <Image
              src={asset.src}
              alt={asset.alt}
              width={1024}
              height={682}
              priority
              unoptimized
              className="h-full w-full object-contain object-center drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          ) : null}
        </div>
      </div>

      {showHolos &&
        HOLOS.map((holo, idx) => (
          <div
            key={holo.label}
            ref={(el) => {
              holoRefs.current[idx] = el;
            }}
            className="pointer-events-none absolute z-20 hidden will-change-transform sm:block"
            style={holo.style}
          >
            <div
              className="hero-holo-breathe rounded-xl border border-white/10 bg-[#0A1624]/55 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md"
              style={{ animationDelay: holo.delay }}
            >
              <p className="text-[11px] font-semibold tracking-wide text-[#22B8FF]">
                {holo.label}
              </p>
              <p className="mt-0.5 max-w-[140px] text-[10px] leading-snug text-[#94a3b8]/85">
                {holo.hint}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
