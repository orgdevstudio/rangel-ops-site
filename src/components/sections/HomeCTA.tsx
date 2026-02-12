import Link from "next/link";
import { Section, Container, SectionReveal } from "@/components/ui";
import { Button } from "@/components/ui";

export function HomeCTA() {
  return (
    <Section
      variant="cta"
      background="dark"
      className="border-t border-white/[0.06]"
    >
      <SectionReveal>
      <Container size="xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]/70">
            Próximo passo
          </p>
          <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
            Pronto para organizar, automatizar e crescer?
          </h2>
          <p className="mt-8 text-base text-[#94a3b8]/70 leading-[1.65]">
            Converse com quem desenvolve soluções para negócios como o seu. Sem compromisso.
          </p>
          <Link href="/contato" className="mt-10 inline-block w-full sm:w-auto">
            <Button size="lg" className="w-full">
              Falar com especialista
            </Button>
          </Link>
        </div>
      </Container>
      </SectionReveal>
    </Section>
  );
}
