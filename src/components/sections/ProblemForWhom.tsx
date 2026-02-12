import Link from "next/link";
import { Section, Container, SectionReveal } from "@/components/ui";

const problems = [
  "Operações fragmentadas em planilhas e sistemas que não conversam.",
  "Crescimento sem visibilidade: decisões no escuro.",
  "Escalar exige refazer processos ou trocar de ferramenta.",
];

const forWhom = [
  "Equipes que precisam de controle, organização e previsibilidade.",
  "Negócios que querem crescer sem perder o comando do dia a dia.",
  "Gestores que buscam automação e decisões baseadas em dados.",
];

export function ProblemForWhom() {
  return (
    <Section variant="default" background="muted">
      <SectionReveal>
        <Container size="xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 lg:items-start">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
                O que resolvemos
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl leading-[1.2]">
                Da desorganização à operação sob controle
              </h2>
              <ul className="mt-6 space-y-4">
                {problems.map((line) => (
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
                Para quem é
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl leading-[1.2]">
                Para quem quer resultado em operação
              </h2>
              <ul className="mt-6 space-y-4">
                {forWhom.map((line) => (
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
            <div className="lg:col-span-12 flex flex-col items-center text-center pt-4">
              <p className="text-sm text-[#94a3b8]/80">
                Primeira conversa sem compromisso. Resposta em até 24h úteis.
              </p>
              <Link
                href="/aplicativos"
                className="mt-6 inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#0EA5E9]"
              >
                Conhecer soluções
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
