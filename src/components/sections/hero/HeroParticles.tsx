const PARTICLES = [
  { top: "12%", left: "18%", delay: "0s", size: 1.5 },
  { top: "22%", left: "72%", delay: "-2s", size: 2 },
  { top: "38%", left: "8%", delay: "-4s", size: 1 },
  { top: "48%", left: "88%", delay: "-1s", size: 1.5 },
  { top: "58%", left: "30%", delay: "-6s", size: 1 },
  { top: "68%", left: "62%", delay: "-3s", size: 2 },
  { top: "78%", left: "15%", delay: "-7s", size: 1.5 },
  { top: "16%", left: "48%", delay: "-5s", size: 1 },
  { top: "84%", left: "78%", delay: "-8s", size: 1 },
  { top: "32%", left: "55%", delay: "-2.5s", size: 1.5 },
  { top: "70%", left: "42%", delay: "-9s", size: 1 },
  { top: "44%", left: "22%", delay: "-1.5s", size: 2 },
  { top: "8%", left: "82%", delay: "-4.5s", size: 1 },
  { top: "90%", left: "50%", delay: "-6.5s", size: 1.5 },
  { top: "28%", left: "38%", delay: "-3.5s", size: 1 },
  { top: "52%", left: "70%", delay: "-0.5s", size: 1 },
] as const;

type HeroParticlesProps = {
  /** Mobile: menos partículas */
  sparse?: boolean;
};

export function HeroParticles({ sparse = false }: HeroParticlesProps) {
  const items = sparse ? PARTICLES.slice(0, 8) : PARTICLES;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((p, i) => (
        <span
          key={i}
          className="hero-particle absolute rounded-full bg-[#22B8FF]"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            boxShadow: "0 0 6px rgba(34,184,255,0.5)",
          }}
        />
      ))}
    </div>
  );
}
