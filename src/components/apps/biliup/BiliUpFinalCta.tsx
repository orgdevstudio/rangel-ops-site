import Link from "next/link";
import { Section, Container, SectionReveal, Badge } from "@/components/ui";
import { biliupLanding } from "@/config/biliup-landing";

export function BiliUpFinalCta() {
  const { finalCta } = biliupLanding;

  return (
    <Section variant="cta" background="dark">
      <SectionReveal>
        <Container size="md">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Badge variant="em-breve">{finalCta.microcopy}</Badge>
            </div>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {finalCta.title}
            </h2>
            <p className="mt-5 text-lg font-medium leading-[1.5] text-white/90 sm:text-xl">
              {finalCta.subtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={finalCta.primaryHref}
                className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[#7C3AED]/25 transition-all duration-300 ease-out motion-safe:hover:-translate-y-px hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-[#7C3AED]/30 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 focus:ring-offset-[#050B14]"
              >
                {finalCta.primaryCta}
              </Link>
              <Link
                href={finalCta.secondaryHref}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 ease-out hover:border-[#8B5CF6]/40 hover:bg-[#7C3AED]/10 hover:text-[#C4B5FD] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 focus:ring-offset-[#050B14]"
              >
                {finalCta.secondaryCta}
              </Link>
            </div>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
              <Link
                href="/aplicativos/biliup/politica-de-privacidade"
                className="text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#A78BFA]"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/aplicativos/biliup/exclusao-de-conta"
                className="text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#A78BFA]"
              >
                Exclusão de conta e dados
              </Link>
            </div>
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
