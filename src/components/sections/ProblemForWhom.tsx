import { Section, Container, SectionReveal } from "@/components/ui";
import { homeLanding } from "@/config/home-landing";

export function ProblemForWhom() {
  const { problem } = homeLanding;

  return (
    <Section variant="default" background="muted">
      <SectionReveal>
        <Container size="xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 lg:items-start">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
                {problem.leftEyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl leading-[1.2]">
                {problem.leftTitle}
              </h2>
              <ul className="mt-6 space-y-4">
                {problem.problems.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-base text-[#94a3b8]/85 leading-[1.6]"
                  >
                    <span className="text-[#0EA5E9] shrink-0">—</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
                {problem.rightEyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl leading-[1.2]">
                {problem.rightTitle}
              </h2>
              <ul className="mt-6 space-y-4">
                {problem.forWhom.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-base text-[#94a3b8]/85 leading-[1.6]"
                  >
                    <span className="text-[#0EA5E9] shrink-0">—</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-12 pt-2 text-center">
              <p className="text-sm text-[#94a3b8]/80">{problem.microcopy}</p>
            </div>
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
