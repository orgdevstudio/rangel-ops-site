export function HeroEnergyLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]"
      viewBox="0 0 800 560"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hero-energy-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#22B8FF" stopOpacity="0" />
          <stop offset="40%" stopColor="#22B8FF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        className="hero-energy-line"
        d="M40 420 C180 400 220 320 340 300 S520 280 620 200 S720 80 780 60"
        stroke="url(#hero-energy-grad)"
        strokeWidth="1.25"
      />
      <path
        className="hero-energy-line"
        style={{ animationDelay: "-6s", animationDuration: "22s" }}
        d="M20 480 C160 460 260 440 380 380 S560 300 680 340 S760 400 790 430"
        stroke="url(#hero-energy-grad)"
        strokeWidth="1"
      />
      <path
        className="hero-energy-line"
        style={{ animationDelay: "-11s", animationDuration: "26s" }}
        d="M80 300 C200 280 280 240 400 220 S600 180 700 140"
        stroke="url(#hero-energy-grad)"
        strokeWidth="0.9"
      />
      <path
        className="hero-energy-line"
        style={{ animationDelay: "-3s", animationDuration: "20s" }}
        d="M120 500 L220 500 L260 460 L340 460 L380 420 L480 420"
        stroke="url(#hero-energy-grad)"
        strokeWidth="1"
      />
    </svg>
  );
}
