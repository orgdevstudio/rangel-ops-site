import Link from "next/link";
import { Section, Container } from "@/components/ui";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Termos de Uso",
  description: "Termos de uso dos serviços e aplicativos da RangelOps.",
};

export default function TermosPage() {
  return (
    <Section variant="default" background="default">
      <Container size="xl">
        <div className="mx-auto max-w-3xl mt-16">
          <Link
            href="/"
            className="text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-white"
          >
            ← Voltar
          </Link>
          <h1 className="mt-12 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.2]">
            Termos de Uso
          </h1>
          <p className="mt-6 text-sm text-[#94a3b8]/75">Última atualização: 2025</p>
          <div className="mt-12 space-y-10 text-[#94a3b8]/90 text-base leading-[1.65] max-w-prose">
            <p>
              Este documento estabelece os termos e condições gerais de uso dos
              serviços e aplicativos oferecidos pela RangelOps. Ao acessar ou
              utilizar nossos serviços, você concorda com os termos aqui
              descritos.
            </p>
            <h2 className="text-lg font-bold tracking-tight text-white mt-12 leading-snug">
              1. Aceitação dos Termos
            </h2>
            <p className="mt-4">
              O uso dos serviços da RangelOps está condicionado à aceitação
              integral destes Termos de Uso. Caso não concorde com algum dos
              itens, solicitamos que não utilize nossos serviços.
            </p>
            <h2 className="text-lg font-bold tracking-tight text-white mt-12 leading-snug">
              2. Descrição dos Serviços
            </h2>
            <p className="mt-4">
              A RangelOps fornece aplicativos SaaS para otimização de operações
              empresariais. O escopo e as funcionalidades específicas de cada
              aplicativo são descritos em suas respectivas páginas.
            </p>
            <h2 className="text-lg font-bold tracking-tight text-white mt-12 leading-snug">
              3. Uso Adequado
            </h2>
            <p className="mt-4">
              O usuário compromete-se a utilizar os serviços de forma
              responsável, em conformidade com a legislação vigente e
              respeitando os direitos de terceiros.
            </p>
          </div>
          <Link href="/" className="mt-20 inline-block">
            <Button variant="outline" size="sm">
              Voltar ao início
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
