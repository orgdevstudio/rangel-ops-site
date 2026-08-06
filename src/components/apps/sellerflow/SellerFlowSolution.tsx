import Image from "next/image";
import { Section, Container, SectionReveal } from "@/components/ui";
import { sellerflowLanding } from "@/config/sellerflow-landing";
import { sellerflowMedia } from "@/config/sellerflow-media";
import { cn } from "@/lib/utils";

export function SellerFlowSolution() {
  const { solution } = sellerflowLanding;
  const media = sellerflowMedia.solution;

  const titleParts = solution.title.split("controle");

  const stages = [
    {
      key: "before" as const,
      label: solution.before.label,
      title: solution.before.title,
      points: solution.before.points,
      description: undefined as string | undefined,
      asset: media.before,
      accent: false,
      badgeClass: "bg-white/10 text-[#94a3b8] border-white/10",
    },
    {
      key: "bridge" as const,
      label: solution.bridge.label,
      title: solution.bridge.title,
      points: undefined as readonly string[] | undefined,
      description: solution.bridge.description,
      asset: media.platform,
      accent: true,
      badgeClass: "bg-[#0EA5E9]/15 text-[#22D3EE] border-[#0EA5E9]/35",
    },
    {
      key: "after" as const,
      label: solution.after.label,
      title: solution.after.title,
      points: solution.after.points,
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
              {solution.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {titleParts[0]}
              <span className="text-[#0EA5E9]">controle</span>
              {titleParts[1] ?? ""}
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/80">
              {solution.subtitle}
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

                <div className="relative mt-5 aspect-[3/2] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#050B14]">
                  <Image
                    src={stage.asset.src}
                    alt={stage.asset.alt}
                    width={stage.asset.width}
                    height={stage.asset.height}
                    className="h-full w-full object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

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
