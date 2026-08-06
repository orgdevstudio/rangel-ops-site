import { Section, Container, SectionReveal } from "@/components/ui";
import { sellerflowLanding } from "@/config/sellerflow-landing";

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
  </svg>
);

function CheckIcon() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0EA5E9]/20 text-[#22D3EE]">
      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

function DashIcon() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center text-[#94a3b8]/40" aria-hidden>
      —
    </span>
  );
}

type SellerFlowPlansProps = {
  googlePlayUrl: string;
};

export function SellerFlowPlans({ googlePlayUrl }: SellerFlowPlansProps) {
  const { plans } = sellerflowLanding;

  return (
    <Section id={plans.id} variant="default" background="default">
      <SectionReveal>
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
              {plans.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {plans.title}
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/80">
              {plans.subtitle}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 px-5 py-3.5 text-center">
              <svg
                className="h-5 w-5 shrink-0 text-[#22D3EE]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-semibold tracking-tight text-[#22D3EE]">
                {plans.banner}
              </span>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Comparação dos planos Essencial e Premium do SellerFlow
              </caption>
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th scope="col" className="px-4 py-4 font-medium text-[#94a3b8]/80 sm:px-6">
                    Recurso
                  </th>
                  {plans.columns.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="px-3 py-4 text-center font-bold text-white sm:px-6"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-white/[0.06] last:border-0 transition-colors duration-200 hover:bg-white/[0.02]"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-[#94a3b8]/90 sm:px-6"
                    >
                      {row.feature}
                    </th>
                    <td className="px-3 py-4 text-center sm:px-6">
                      <span className="inline-flex justify-center">
                        {row.essencial ? <CheckIcon /> : <DashIcon />}
                      </span>
                      <span className="sr-only">
                        {row.essencial ? "Incluído" : "Não incluído"} no Essencial
                      </span>
                    </td>
                    <td className="px-3 py-4 text-center sm:px-6">
                      <span className="inline-flex justify-center">
                        {row.premium ? <CheckIcon /> : <DashIcon />}
                      </span>
                      <span className="sr-only">
                        {row.premium ? "Incluído" : "Não incluído"} no Premium
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#0EA5E9] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[#0EA5E9]/20 transition-all duration-300 ease-out motion-safe:hover:-translate-y-px hover:bg-[#0d9cd9] hover:shadow-lg hover:shadow-[#0EA5E9]/25 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 focus:ring-offset-[#050B14]"
            >
              <GooglePlayIcon />
              Baixar na Google Play
            </a>
            <p className="text-sm text-[#94a3b8]/70">{plans.ctaNote}</p>
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
