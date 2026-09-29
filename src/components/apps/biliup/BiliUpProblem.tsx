import { Section, Container, SectionReveal } from "@/components/ui";
import { biliupLanding } from "@/config/biliup-landing";

const supportIcons = [
  <svg key="1" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
  <svg key="2" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="3" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
];

export function BiliUpProblem() {
  const { problem } = biliupLanding;

  return (
    <Section variant="default" background="default">
      <SectionReveal>
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A78BFA]/90">
              {problem.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {problem.title}
            </h2>
          </div>

          <div
            className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-[#8B5CF6]/35 bg-[#7C3AED]/10 p-8 text-center transition-all duration-300 ease-out motion-safe:hover:-translate-y-px sm:p-10"
            style={{ boxShadow: "0 0 48px rgba(124,58,237,0.16)" }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(167,139,250,0.22) 0%, transparent 60%)",
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
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 ease-out motion-safe:hover:-translate-y-px motion-safe:hover:border-[#8B5CF6]/25"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#8B5CF6]/25 bg-[#7C3AED]/10 text-[#A78BFA]">
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
