import Link from "next/link";
import { Section, Container, SectionReveal } from "@/components/ui";
import { Button } from "@/components/ui";

const items = [
  { title: "Escalável", desc: "Do primeiro uso ao crescimento. Soluções que evoluem com você." },
  { title: "Integrado", desc: "Conecte com o que você já usa. Seus dados, seu controle." },
  { title: "Seguro", desc: "Conformidade, proteção de dados e backups. Tudo em dia." },
  { title: "Suporte", desc: "Equipe que entende o seu negócio. Resposta e acompanhamento de verdade." },
];

export function DiferenciaisCompact() {
  return (
    <Section variant="default" background="default">
      <SectionReveal>
      <Container size="xl">
        <div className="text-center mb-24 lg:mb-32">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
            O que sustenta nossas soluções
          </h2>
          <p className="mt-6 text-base text-[#94a3b8]/70 max-w-2xl mx-auto leading-[1.65]">
            Escalabilidade, integração, segurança e suporte. Tudo pensado para você crescer com tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="lg:col-span-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 lg:p-10 text-center transition-all duration-300 ease-out hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-px hover:shadow-[0_6px_20px_-4px_rgba(0,0,0,0.1)]"
            >
              <h3 className="font-bold tracking-tight text-white text-lg leading-snug">{item.title}</h3>
              <p className="mt-4 text-sm text-[#94a3b8]/80 leading-[1.6]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-base text-[#94a3b8]/80">
            Quer ver na prática como nossas soluções se aplicam ao seu negócio?
          </p>
          <Link href="/contato" className="mt-6 inline-block">
            <Button size="lg">Falar com especialista</Button>
          </Link>
        </div>
      </Container>
      </SectionReveal>
    </Section>
  );
}
