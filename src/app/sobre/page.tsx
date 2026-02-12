import Link from "next/link";
import { Section, Container } from "@/components/ui";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Sobre",
  description:
    "Conheça a RangelOps: empresa desenvolvedora de soluções digitais por meio de aplicativos. Missão, visão e como criamos valor para negócios.",
};

export default function SobrePage() {
  return (
    <>
      {/* Intro: enxuto acima da dobra */}
      <Section variant="default" background="default">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center mt-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.2]">
              Sobre a RangelOps
            </h1>
            <p className="mt-10 text-base text-[#94a3b8]/70 max-w-xl mx-auto leading-[1.65]">
              Desenvolvemos soluções digitais em aplicativos para negócios que buscam organização, automação e crescimento.
            </p>
          </div>
        </Container>
      </Section>

      {/* Missão e Visão */}
      <Section variant="default" background="muted">
        <Container size="xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 mt-16">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10">
              <h2 className="text-lg font-bold tracking-tight text-white leading-snug">Missão</h2>
              <p className="mt-5 text-[#94a3b8]/90 text-sm leading-[1.65] max-w-prose">
                Criar soluções que organizem, automatizem e deem visibilidade às
                operações, para que equipes e gestores foquem em decisões que
                impactam, não em tarefas que travam o crescimento.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10">
              <h2 className="text-lg font-bold tracking-tight text-white leading-snug">Visão</h2>
              <p className="mt-5 text-[#94a3b8]/90 text-sm leading-[1.65] max-w-prose">
                Ser referência em soluções digitais para operações no Brasil:
                um ecossistema de aplicativos que se complementam e crescem
                junto com os negócios dos nossos clientes.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Arquitetura e Filosofia Técnica */}
      <Section variant="default" background="default">
        <Container size="xl">
          <div className="mx-auto max-w-3xl mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl leading-[1.25]">
              Como desenvolvemos nossas soluções
            </h2>
            <p className="mt-8 text-[#94a3b8]/90 text-base leading-[1.65] max-w-prose">
              Cada aplicativo é pensado para ser estável, seguro e evoluir no
              tempo. Nossas soluções seguem padrões de qualidade, segurança e
              integração, para que você tenha previsibilidade e confiança.
            </p>
            <ul className="mt-10 space-y-5 text-[#94a3b8]/90 text-sm leading-[1.65]">
              <li className="flex gap-3">
                <span className="text-[#0EA5E9] shrink-0">•</span>
                <span>Infraestrutura robusta e preparada para crescer</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0EA5E9] shrink-0">•</span>
                <span>Atualizações contínuas com segurança e testes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0EA5E9] shrink-0">•</span>
                <span>Monitoramento e suporte para você operar com tranquilidade</span>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Produto e Escalabilidade */}
      <Section variant="default" background="muted">
        <Container size="xl">
          <div className="mx-auto max-w-3xl mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl leading-[1.25]">
              Produto e escalabilidade
            </h2>
            <p className="mt-8 text-[#94a3b8]/90 text-base leading-[1.65] max-w-prose">
              Cada solução é pensada para a experiência completa: começar fácil,
              evoluir com suporte e documentação, e crescer sem trocar de base.
              Você começa com o que precisa e expande quando fizer sentido.
            </p>
            <p className="mt-6 text-[#94a3b8]/90 text-base leading-[1.65] max-w-prose">
              Nossos planos acompanham o estágio do seu negócio. Sem limites
              artificiais: o que construímos escala junto com você.
            </p>
          </div>
        </Container>
      </Section>

      {/* Estrutura Modular e APIs */}
      <Section variant="default" background="default">
        <Container size="xl">
          <div className="mx-auto max-w-3xl mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl leading-[1.25]">
              Integração e conectividade
            </h2>
            <p className="mt-8 text-[#94a3b8]/90 text-base leading-[1.65] max-w-prose">
              Nossos aplicativos se conectam entre si e com o que você já usa:
              planilhas, ERPs e ferramentas do dia a dia. Seus dados permanecem
              sob seu controle; integramos sem amarras para você evoluir à sua
              maneira.
            </p>
            <div className="mt-10 rounded-xl border border-[#0EA5E9]/20 bg-[#0EA5E9]/5 p-8">
              <p className="text-sm font-medium text-[#0EA5E9] leading-[1.6]">
                Conectores e integrações documentados. Suporte técnico para
                implementação e evolução contínua.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Roadmap */}
      <Section variant="default" background="muted">
        <Container size="xl">
          <div className="mx-auto max-w-3xl mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl leading-[1.25]">
              O que vem por aí
            </h2>
            <p className="mt-8 text-[#94a3b8]/90 text-base leading-[1.65] max-w-prose">
              Priorizamos com base no feedback dos clientes e nas necessidades do
              mercado. Novas soluções e melhorias contínuas no ecossistema:
              mais aplicativos, mais integrações e mais formas de apoiar o
              crescimento do seu negócio.
            </p>
            <ul className="mt-10 space-y-5 text-[#94a3b8]/90 text-sm leading-[1.65]">
              <li className="flex gap-3">
                <span className="text-[#0EA5E9] shrink-0">→</span>
                <span>Novas soluções de análise e relatórios</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0EA5E9] shrink-0">→</span>
                <span>Mais automações entre nossos aplicativos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0EA5E9] shrink-0">→</span>
                <span>Integrações com mais ferramentas do mercado</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0EA5E9] shrink-0">→</span>
                <span>Soluções para uso em campo e mobile</span>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* CTA único: ação principal sólida */}
      <Section variant="cta" background="dark">
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base text-[#94a3b8]/75 leading-[1.65]">
              Quer entender melhor como podemos ajudar o seu negócio?
            </p>
            <Link href="/contato" className="mt-8 inline-block">
              <Button size="lg">Falar com nossa equipe</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
