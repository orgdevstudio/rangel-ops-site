import Image from "next/image";
import { Section, Container, SectionReveal } from "@/components/ui";
import { biliupLanding } from "@/config/biliup-landing";
import { biliupMedia } from "@/config/biliup-media";
import { cn } from "@/lib/utils";
import type { BiliupMediaAsset } from "@/config/biliup-media";

function StageVisual({ asset }: { asset: BiliupMediaAsset }) {
  return (
    <div className="relative mt-5 aspect-[3/2] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#050B14]">
      {asset.ready ? (
        <Image
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          className="h-full w-full object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(circle at 50% 35%, rgba(124,58,237,0.2) 0%, transparent 62%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden
          />
          <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#94a3b8]/55">
            {asset.slotLabel}
          </p>
        </>
      )}
    </div>
  );
}

export function BiliUpTransformation() {
  const { transformation } = biliupLanding;
  const media = biliupMedia.transformation;
  const titleParts = transformation.title.split(transformation.titleAccent);

  const stages = [
    {
      key: "before" as const,
      label: transformation.before.label,
      title: transformation.before.title,
      points: transformation.before.points,
      description: undefined as string | undefined,
      asset: media.before,
      accent: false,
      badgeClass: "bg-white/10 text-[#94a3b8] border-white/10",
    },
    {
      key: "bridge" as const,
      label: transformation.bridge.label,
      title: transformation.bridge.title,
      points: undefined as readonly string[] | undefined,
      description: transformation.bridge.description,
      asset: media.bridge,
      accent: true,
      badgeClass: "bg-[#7C3AED]/15 text-[#C4B5FD] border-[#8B5CF6]/35",
    },
    {
      key: "after" as const,
      label: transformation.after.label,
      title: transformation.after.title,
      points: transformation.after.points,
      description: undefined as string | undefined,
      asset: media.after,
      accent: false,
      badgeClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/35",
    },
  ];

  return (
    <Section variant="default" background="muted">
      <SectionReveal>
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A78BFA]/90">
              {transformation.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {titleParts[0]}
              <span className="text-[#A78BFA]">{transformation.titleAccent}</span>
              {titleParts[1] ?? ""}
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/80">
              {transformation.subtitle}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
            {stages.map((stage) => (
              <article
                key={stage.key}
                className={cn(
                  "flex h-full flex-col overflow-hidden rounded-2xl border p-5 sm:p-6 transition-all duration-300 ease-out motion-safe:hover:-translate-y-px",
                  stage.accent
                    ? "border-[#8B5CF6]/50 bg-[rgba(124,58,237,0.08)] shadow-[0_0_40px_rgba(124,58,237,0.2)]"
                    : "border-white/[0.06] bg-white/[0.03]"
                )}
              >
                <span
                  className={cn(
                    "inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
                    stage.badgeClass
                  )}
                >
                  {stage.label}
                </span>

                <h3 className="mt-4 text-lg font-bold tracking-tight text-white sm:text-xl">
                  {stage.title}
                </h3>

                {stage.description && (
                  <p className="mt-2 text-sm leading-[1.65] text-[#94a3b8]/90">
                    {stage.description}
                  </p>
                )}

                <StageVisual asset={stage.asset} />

                {stage.points && (
                  <ul className="mt-5 space-y-2.5">
                    {stage.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-[1.5] text-[#94a3b8]/85"
                      >
                        <span className="shrink-0 text-[#A78BFA]">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
