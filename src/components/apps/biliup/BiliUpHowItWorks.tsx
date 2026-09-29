import { Section, Container, SectionReveal } from "@/components/ui";
import { biliupLanding } from "@/config/biliup-landing";

export function BiliUpHowItWorks() {
  const { howItWorks } = biliupLanding;

  return (
    <Section variant="default" background="muted">
      <SectionReveal>
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A78BFA]/90">
              {howItWorks.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {howItWorks.title}
            </h2>
          </div>

          <div className="relative mt-14">
            <div
              className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-[#7C3AED]/20 via-[#8B5CF6]/50 to-[#7C3AED]/20 md:block"
              aria-hidden
            />

            <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {howItWorks.steps.map((step, index) => (
                <li key={step.step} className="relative flex flex-col items-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#8B5CF6]/40 bg-[#0A1624] text-lg font-extrabold tabular-nums text-[#C4B5FD] shadow-[0_0_24px_rgba(124,58,237,0.18)]">
                    {step.step}
                  </div>
                  {index < howItWorks.steps.length - 1 && (
                    <div
                      className="my-2 h-8 w-px bg-gradient-to-b from-[#8B5CF6]/40 to-transparent md:hidden"
                      aria-hidden
                    />
                  )}
                  <div className="mt-5 w-full rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 text-center transition-all duration-300 ease-out motion-safe:hover:-translate-y-px motion-safe:hover:border-[#8B5CF6]/25">
                    <h3 className="text-base font-bold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.65] text-[#94a3b8]/85">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
