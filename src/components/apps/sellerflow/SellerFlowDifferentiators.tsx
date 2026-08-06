import { Section, Container, SectionReveal } from "@/components/ui";
import { sellerflowLanding } from "@/config/sellerflow-landing";

const icons = [
  <svg key="pricing" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 1v-1m0 0c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="evolve" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
];

export function SellerFlowDifferentiators() {
  const { differentiators } = sellerflowLanding;

  return (
    <Section variant="tight" background="muted" aria-label="Diferenciais do SellerFlow">
      <SectionReveal>
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
              {differentiators.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {differentiators.title}
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/80">
              {differentiators.subtitle}
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
            {differentiators.items.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 ease-out motion-safe:hover:-translate-y-px motion-safe:hover:border-[#0EA5E9]/25"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0EA5E9]/25 bg-[#0EA5E9]/10 text-[#22D3EE]">
                  {icons[index]}
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
