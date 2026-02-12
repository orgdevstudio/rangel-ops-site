import Link from "next/link";
import { Section, Container, SectionReveal } from "@/components/ui";

const pillars = [
  { label: "Feito para crescer", line: "Soluções que escalam junto com o seu negócio." },
  { label: "Segurança e conformidade", line: "LGPD, proteção de dados e governança." },
  { label: "Integração sem amarras", line: "Seus dados, seu controle. Conecte com o que você já usa." },
  { label: "Suporte que entende", line: "Equipe dedicada e alinhada ao seu dia a dia." },
];

export function TrustProof() {
  return (
    <Section variant="tight" background="muted">
      <SectionReveal>
        <Container size="xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]/70">
            Prova de confiança
          </p>
          <h2 className="mt-4 text-center text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl leading-[1.2]">
            Por que empresas confiam na RangelOps
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {pillars.map((item, i) => (
              <div
                key={item.label}
                className="lg:col-span-3 border-l-2 border-[#0EA5E9]/40 pl-6"
              >
                <span className="text-xs font-semibold text-[#0EA5E9]/90">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-semibold text-white tracking-tight">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-[#94a3b8]/80 leading-[1.5]">
                  {item.line}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-sm text-[#94a3b8]/80">
              Soluções pensadas para quem não pode parar.
            </p>
            <Link
              href="/aplicativos"
              className="mt-4 inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#0EA5E9]"
            >
              Ver aplicativos
              <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
