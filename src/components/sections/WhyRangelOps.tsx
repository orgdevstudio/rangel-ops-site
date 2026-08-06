import { Section, Container, SectionReveal } from "@/components/ui";
import { homeLanding } from "@/config/home-landing";

export function WhyRangelOps() {
  const { why } = homeLanding;

  return (
    <Section variant="default" background="default">
      <SectionReveal>
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
              {why.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {why.title}
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/80">
              {why.subtitle}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 ease-out hover:-translate-y-px hover:border-white/10 hover:bg-white/[0.05]"
              >
                <span className="text-xs font-semibold tabular-nums text-[#0EA5E9]/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-bold tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.65] text-[#94a3b8]/85">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
