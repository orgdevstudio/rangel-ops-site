import { Section, Container, SectionReveal } from "@/components/ui";
import { sellerflowLanding } from "@/config/sellerflow-landing";

type SellerFlowClientAccessProps = {
  webLoginUrl: string;
};

export function SellerFlowClientAccess({ webLoginUrl }: SellerFlowClientAccessProps) {
  const { clientAccess } = sellerflowLanding;

  return (
    <Section variant="tight" background="muted" aria-label="Acesso para assinantes">
      <SectionReveal>
        <Container size="md">
          <div className="mx-auto max-w-xl rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#94a3b8]/60">
              Assinantes
            </p>
            <h2 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl leading-[1.25]">
              {clientAccess.title}
            </h2>
            <p className="mt-3 text-sm leading-[1.65] text-[#94a3b8]/85">
              {clientAccess.description}
            </p>
            <a
              href={webLoginUrl}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-[#0EA5E9]/50 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/10 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 focus:ring-offset-[#0A1624]"
            >
              <svg
                className="h-4 w-4 shrink-0 text-[#22D3EE]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {clientAccess.buttonLabel}
            </a>
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
