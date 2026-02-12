import Link from "next/link";
import { Section, Container, SectionReveal } from "@/components/ui";

export function EcosystemBrief() {
  return (
    <Section variant="tight" background="default">
      <SectionReveal>
      <Container size="xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
            Um ecossistema de soluções, não um produto só
          </h2>
          <p className="mt-6 text-base text-[#94a3b8]/70 max-w-2xl mx-auto leading-[1.65]">
            Vários aplicativos que se complementam. Comece com o que sua operação precisa e cresça sem trocar de base.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/aplicativos"
              className="inline-flex items-center text-sm font-medium text-[#0EA5E9] transition-colors duration-200 ease-out hover:text-[#22D3EE]"
            >
              Ver nossas soluções
              <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
      </SectionReveal>
    </Section>
  );
}
