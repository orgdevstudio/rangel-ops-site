export interface AppFeatureHighlightsCardProps {
  highlights: string[];
}

export function AppFeatureHighlightsCard({ highlights }: AppFeatureHighlightsCardProps) {
  if (highlights.length === 0) {
    return null;
  }

  return (
    <div
      className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 text-left backdrop-blur-sm sm:p-10"
      style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.2)" }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#94a3b8]/70">
        Informações do app
      </p>
      <ul className="mt-5 space-y-4 text-sm text-[#94a3b8]/90 leading-[1.65]">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0EA5E9]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
