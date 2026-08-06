export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(10,22,36,0.9) 0%, #050B14 55%, #030712 100%)",
        }}
      />
      <div
        className="absolute -right-24 top-[-10%] h-[70vmin] w-[70vmin] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,184,255,0.18) 0%, rgba(14,165,233,0.06) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute left-[-10%] bottom-[-20%] h-[50vmin] w-[50vmin] rounded-full opacity-50 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute right-[15%] top-[55%] h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 65% 45%, black 20%, transparent 75%)",
        }}
      />
    </div>
  );
}
