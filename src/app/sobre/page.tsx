import Link from "next/link";
import type { Metadata } from "next";
import { Section, Container, SectionReveal, Button } from "@/components/ui";
import { sobreLanding } from "@/config/sobre-landing";

export const metadata: Metadata = {
  title: sobreLanding.meta.title,
  description: sobreLanding.meta.description,
};

export default function SobrePage() {
  const { intro, who, missionVision, how, cta } = sobreLanding;

  return (
    <>
      {/* Intro */}
      <section
        className="relative overflow-hidden bg-[#050B14]"
        aria-label="Sobre a RangelOps"
      >
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div
            className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-40 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(14,165,233,0.28) 0%, rgba(34,184,255,0.08) 40%, transparent 70%)",
            }}
          />
        </div>
        <Container size="xl" className="py-20 lg:py-28">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
                {intro.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                {intro.title}
              </h1>
              <p className="mt-8 text-base leading-[1.65] text-[#94a3b8]/80 sm:text-lg">
                {intro.subtitle}
              </p>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* Quem somos */}
      <Section variant="default" background="muted">
        <SectionReveal>
          <Container size="xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
                {who.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
                {who.title}
              </h2>
              <p className="mt-6 text-base leading-[1.65] text-[#94a3b8]/85">
                {who.body}
              </p>
            </div>
          </Container>
        </SectionReveal>
      </Section>

      {/* Missão + Visão */}
      <Section variant="default" background="default">
        <SectionReveal>
          <Container size="xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 lg:p-10 transition-all duration-300 ease-out hover:-translate-y-px hover:border-white/10">
                <h2 className="text-lg font-bold tracking-tight text-white">
                  {missionVision.mission.title}
                </h2>
                <p className="mt-5 text-sm leading-[1.65] text-[#94a3b8]/90 sm:text-base">
                  {missionVision.mission.body}
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 lg:p-10 transition-all duration-300 ease-out hover:-translate-y-px hover:border-white/10">
                <h2 className="text-lg font-bold tracking-tight text-white">
                  {missionVision.vision.title}
                </h2>
                <p className="mt-5 text-sm leading-[1.65] text-[#94a3b8]/90 sm:text-base">
                  {missionVision.vision.body}
                </p>
              </div>
            </div>
          </Container>
        </SectionReveal>
      </Section>

      {/* Como trabalhamos */}
      <Section variant="default" background="muted">
        <SectionReveal>
          <Container size="xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
                {how.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
                {how.title}
              </h2>
              <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/80">
                {how.subtitle}
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {how.pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-px hover:border-white/10 hover:bg-white/[0.05]"
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

      {/* CTA */}
      <Section variant="cta" background="dark" className="border-t border-white/[0.06]">
        <SectionReveal>
          <Container size="xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl leading-[1.2]">
                {cta.title}
              </h2>
              <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/75">
                {cta.subtitle}
              </p>
              <div className="mt-10 flex flex-col items-center gap-4">
                <Link href={cta.primaryHref} className="inline-block w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    {cta.primaryLabel}
                  </Button>
                </Link>
                <Link
                  href={cta.secondaryHref}
                  className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#0EA5E9]"
                >
                  {cta.secondaryLabel}
                  <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Container>
        </SectionReveal>
      </Section>
    </>
  );
}
