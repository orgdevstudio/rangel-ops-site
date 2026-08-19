import { Section, Container, SectionReveal } from "@/components/ui";
import { driveflowLanding } from "@/config/driveflow-landing";

const supportIcons = [
  <svg key="1" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 1v-1m0 0c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="2" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  <svg key="3" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export function DriveFlowProblem() {
  const { problem } = driveflowLanding;

  return (
    <Section variant="default" background="default">
      <SectionReveal>
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
              {problem.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {problem.title}
            </h2>
          </div>

          <div
            className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-[#0EA5E9]/35 bg-[#0EA5E9]/10 p-8 text-center transition-all duration-300 ease-out motion-safe:hover:-translate-y-px sm:p-10"
            style={{ boxShadow: "0 0 48px rgba(14,165,233,0.14)" }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.2) 0%, transparent 60%)",
              }}
              aria-hidden
            />
            <p className="relative text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl leading-[1.25]">
              {problem.featured.title}
            </p>
            <p className="relative mt-4 text-sm leading-[1.65] text-[#94a3b8]/90 sm:text-base">
              {problem.featured.description}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {problem.items.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 ease-out motion-safe:hover:-translate-y-px motion-safe:hover:border-[#0EA5E9]/25"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0EA5E9]/25 bg-[#0EA5E9]/10 text-[#22D3EE]">
                  {supportIcons[index]}
                </div>
                <h3 className="mt-5 text-base font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.65] text-[#94a3b8]/85">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
