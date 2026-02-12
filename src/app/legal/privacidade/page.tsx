import Link from "next/link";
import { Section, Container } from "@/components/ui";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade e proteção de dados da RangelOps.",
};

export default function PrivacidadePage() {
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
            Política de Privacidade
          </h1>
          <p className="mt-6 text-sm text-[#94a3b8]/75">Última atualização: 2025</p>
          <div className="mt-12 space-y-10 text-[#94a3b8]/90 text-base leading-[1.65] max-w-prose">
            <p>
              A RangelOps está comprometida com a proteção da privacidade e dos
              dados pessoais de seus usuários. Esta política descreve como
              coletamos, utilizamos e protegemos suas informações.
            </p>
            <h2 className="text-lg font-bold tracking-tight text-white mt-12 leading-snug">
              1. Dados Coletados
            </h2>
            <p className="mt-4">
              Coletamos informações que você fornece voluntariamente ao utilizar
              nossos serviços, como nome, e-mail e dados necessários para
              operação dos aplicativos contratados.
            </p>
            <h2 className="text-lg font-bold tracking-tight text-white mt-12 leading-snug">
              2. Finalidade
            </h2>
            <p className="mt-4">
              Os dados são utilizados exclusivamente para prestação dos
              serviços, comunicação com o usuário e cumprimento de obrigações
              legais.
            </p>
            <h2 className="text-lg font-bold tracking-tight text-white mt-12 leading-snug">
              3. Conformidade com LGPD
            </h2>
            <p className="mt-4">
              Tratamos os dados em conformidade com a Lei Geral de Proteção de
              Dados (LGPD). O usuário possui direitos de acesso, correção,
              exclusão e portabilidade dos seus dados pessoais.
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
