import Image from "next/image";
import { Section, Container, SectionReveal } from "@/components/ui";
import { driveflowLanding } from "@/config/driveflow-landing";
import { driveflowMedia } from "@/config/driveflow-media";
import { cn } from "@/lib/utils";
import type { DriveflowMediaAsset } from "@/config/driveflow-media";

function StageVisual({ asset }: { asset: DriveflowMediaAsset }) {
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
                "radial-gradient(circle at 50% 35%, rgba(14,165,233,0.16) 0%, transparent 62%)",
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

export function DriveFlowTransformation() {
  const { transformation } = driveflowLanding;
  const media = driveflowMedia.transformation;
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
      badgeClass: "bg-[#0EA5E9]/15 text-[#22D3EE] border-[#0EA5E9]/35",
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
              {transformation.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {titleParts[0]}
              <span className="text-[#0EA5E9]">{transformation.titleAccent}</span>
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
                    ? "border-[#0EA5E9]/50 bg-[rgba(14,165,233,0.07)] shadow-[0_0_40px_rgba(14,165,233,0.18)]"
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
                        <span className="shrink-0 text-[#0EA5E9]">—</span>
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
