import Link from "next/link";
import { apps } from "@/config/apps";
import { AppCard } from "@/components/apps";
import { Section, Container } from "@/components/ui";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Aplicativos",
  description:
    "Conheça o ecossistema de soluções da RangelOps: aplicativos para organização, automação e decisão. Escolha o que sua operação precisa.",
};

export default function AplicativosPage() {
  return (
    <>
      {/* Intro: objetivo = levar ao grid e "Ver detalhes do app" */}
      <Section variant="default" background="default">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center mt-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.2]">
              Nossas soluções em aplicativos
            </h1>
            <p className="mt-10 text-base text-[#94a3b8]/70 max-w-xl mx-auto leading-[1.65]">
              Um ecossistema de aplicativos que se complementam. Cada um resolve um conjunto de necessidades; juntos, entregam organização, automação e crescimento.
            </p>
          </div>
        </Container>
      </Section>

      {/* Grid: dois cards lado a lado (preparado para futuro carrossel com mais apps) */}
      <Section variant="default" background="muted">
        <Container size="xl">
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:gap-10">
            {apps.map((app) => (
              <div key={app.id} className="flex min-w-0">
                <AppCard app={app} className="w-full" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Transição para contato: um único CTA secundário (outline) */}
      <Section variant="cta" background="default">
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base text-[#94a3b8]/75 leading-[1.65]">
              Dúvidas sobre qual solução combina com o seu negócio?
            </p>
            <Link href="/contato" className="mt-6 inline-block">
              <Button variant="outline" size="lg" className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10">
                Falar com especialista
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
