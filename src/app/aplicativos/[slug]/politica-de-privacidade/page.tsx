import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { apps } from "@/config/apps";
import { Section, Container } from "@/components/ui";
import { PrivacyCard } from "./PrivacyCard";
import { PoliticaPrivacidadeCiviFlow } from "./PoliticaPrivacidadeCiviFlow";
import { PoliticaPrivacidadeDriveFlow } from "./PoliticaPrivacidadeDriveFlow";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: "sellerflow" },
    { slug: "driveflow" },
    { slug: "civiflow" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "sellerflow") {
    return {
      title: "Política de Privacidade",
      description:
        "Política de Privacidade do aplicativo SellerFlow. Conheça como coletamos, utilizamos e protegemos seus dados em conformidade com a LGPD.",
    };
  }
  if (slug === "driveflow") {
    return {
      title: "Política de Privacidade",
      description:
        "Política de Privacidade do DriveFlow: Firebase, dados locais de cálculo, serviço de acessibilidade, overlay e direitos LGPD.",
    };
  }
  if (slug === "civiflow") {
    return {
      title: "Política de Privacidade",
      description:
        "Política de Privacidade do CiviFlow: Firebase, obras e custos, modo offline, minimização de dados e LGPD.",
    };
  }
  return {};
}

export default async function PoliticaPrivacidadePage({ params }: PageProps) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  if (slug === "driveflow") {
    return <PoliticaPrivacidadeDriveFlow app={app} />;
  }

  if (slug === "civiflow") {
    return <PoliticaPrivacidadeCiviFlow app={app} />;
  }

  if (slug !== "sellerflow") {
    notFound();
  }

  return (
    <Section variant="default" background="default">
      <Container size="xl">
        <article className="mx-auto max-w-3xl pb-24 pt-16">
          <Link
            href={`/aplicativos/${slug}`}
            className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-white"
          >
            ← Voltar ao {app.name}
          </Link>

          <header className="mt-12">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.2]">
              Política de Privacidade – SellerFlow
            </h1>
            <p className="mt-4 text-sm text-[#94a3b8]/80">
              Última atualização: Fevereiro de 2026
            </p>
          </header>

          <div className="mt-10 space-y-6 text-[#94a3b8]/90">
            <p className="text-base leading-[1.75]">
              O SellerFlow é um aplicativo desenvolvido pela Rangel Ops com o
              objetivo de auxiliar vendedores e empreendedores na gestão,
              organização e precificação de seus produtos.
            </p>
            <p className="text-base leading-[1.75]">
              Esta Política de Privacidade descreve como coletamos, utilizamos,
              armazenamos e protegemos dados pessoais, em conformidade com a Lei
              Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
            </p>
            <p className="text-base leading-[1.75]">
              Ao utilizar o SellerFlow, o usuário declara estar ciente das
              práticas descritas nesta Política.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            <PrivacyCard number={1} title="Dados Pessoais Coletados">
              <div className="space-y-8">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.1 Cadastro e Autenticação
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Para utilização do aplicativo, é necessário criar uma conta
                    por meio do Firebase Authentication. São coletados:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Endereço de e-mail</li>
                    <li>Senha (processada exclusivamente pelo Firebase)</li>
                    <li>
                      Nome e sobrenome (opcional para identificação no perfil)
                    </li>
                  </ul>
                  <p className="mt-4 text-base leading-[1.75]">
                    A senha não é armazenada pelo aplicativo, sendo gerenciada
                    exclusivamente pelo serviço de autenticação da Google
                    (Firebase).
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal (LGPD): execução de contrato e legítimo interesse
                    para viabilizar o funcionamento do serviço.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.2 Perfil do Usuário
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Podem ser armazenados:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Nome</li>
                    <li>Sobrenome</li>
                    <li>Foto de perfil</li>
                    <li>Data de criação da conta</li>
                  </ul>
                  <p className="mt-4 text-base leading-[1.75]">
                    Essas informações são armazenadas no Firebase Firestore e no
                    Firebase Storage (no caso de imagens).
                  </p>
                  <p className="mt-3 text-base leading-[1.75]">
                    O usuário pode alterar ou remover essas informações a
                    qualquer momento.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.3 Dados da Loja
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    O usuário pode cadastrar:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Nome da loja</li>
                    <li>Logotipo da loja</li>
                  </ul>
                  <p className="mt-4 text-base leading-[1.75]">
                    A imagem da logo pode ser armazenada no Firebase Storage.
                    Informações complementares podem ser armazenadas localmente
                    no dispositivo.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.4 Importação de Planilhas
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    O SellerFlow permite a importação de arquivos Excel ou CSV.
                  </p>
                  <p className="mt-3 text-base leading-[1.75]">
                    O conteúdo completo das planilhas permanece exclusivamente
                    no dispositivo do usuário e não é enviado para servidores.
                  </p>
                  <p className="mt-3 text-base leading-[1.75]">
                    Apenas metadados da importação (como nome do arquivo, tipo,
                    quantidade de registros e data) podem ser armazenados no
                    Firebase para fins de histórico.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato e legítimo interesse para
                    melhoria da experiência.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.5 Fale Conosco
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Ao enviar mensagem pelo canal de contato, são coletados:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Nome</li>
                    <li>E-mail</li>
                    <li>Assunto</li>
                    <li>Mensagem</li>
                  </ul>
                  <p className="mt-4 text-base leading-[1.75]">
                    Essas informações são enviadas ao serviço Formspree para
                    encaminhamento ao suporte.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: consentimento do titular ao enviar a mensagem.
                  </p>
                </div>
              </div>
            </PrivacyCard>

            <PrivacyCard number={2} title="Dados Técnicos e Automáticos">
              <div className="space-y-8">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    2.1 Notificações
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    O aplicativo utiliza Firebase Cloud Messaging para envio de
                    notificações. Um identificador técnico do dispositivo (token
                    FCM) pode ser associado à conta do usuário.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: legítimo interesse para comunicação relacionada
                    ao serviço.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    2.2 Relatórios de Erro
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Em versões oficiais, utilizamos Firebase Crashlytics para
                    registrar falhas técnicas com o objetivo de melhorar
                    estabilidade e segurança.
                  </p>
                  <p className="mt-3 text-base leading-[1.75]">
                    Esses relatórios podem incluir informações técnicas como:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Modelo do dispositivo</li>
                    <li>Versão do sistema operacional</li>
                    <li>Dados relacionados ao erro ocorrido</li>
                  </ul>
                  <p className="mt-4 text-base leading-[1.75]">
                    O SellerFlow não utiliza ferramentas de rastreamento
                    comportamental ou Firebase Analytics.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: legítimo interesse.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    2.3 Configuração de Versão
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    O aplicativo pode consultar configurações remotas para
                    verificar a necessidade de atualização. Nenhum dado pessoal é
                    enviado nesse processo.
                  </p>
                </div>
              </div>
            </PrivacyCard>

            <PrivacyCard number={3} title="Armazenamento Local">
              <p className="text-base leading-[1.75]">
                O SellerFlow armazena informações localmente no dispositivo do
                usuário, incluindo:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>Configurações de cálculo</li>
                <li>Produtos cadastrados</li>
                <li>Fechamentos financeiros</li>
                <li>Despesas e custos</li>
                <li>Histórico de importações</li>
                <li>Preferências do aplicativo</li>
              </ul>
              <p className="text-base leading-[1.75]">
                Esses dados permanecem no dispositivo e podem ser removidos ao
                realizar logout ou excluir a conta.
              </p>
            </PrivacyCard>

            <PrivacyCard number={4} title="Assinaturas e Pagamentos">
              <p className="text-base leading-[1.75]">
                O SellerFlow utiliza o sistema oficial Google Play Billing para
                gerenciamento de assinaturas.
              </p>
              <p className="text-base leading-[1.75]">
                As informações de pagamento são processadas diretamente pela
                Google. O SellerFlow não tem acesso aos dados completos do
                cartão do usuário.
              </p>
              <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                Base legal: execução de contrato.
              </p>
            </PrivacyCard>

            <PrivacyCard number={5} title="Compartilhamento de Dados">
              <p className="text-base leading-[1.75]">
                Os dados podem ser processados por terceiros estritamente
                necessários ao funcionamento do serviço:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>
                  Google Firebase (Authentication, Firestore, Storage, Cloud
                  Messaging e Crashlytics)
                </li>
                <li>Google Play (processamento de pagamentos e assinaturas)</li>
                <li>Formspree (envio de mensagens de contato)</li>
              </ul>
              <p className="mt-6 font-medium text-white">
                Não vendemos, alugamos ou comercializamos dados pessoais.
              </p>
            </PrivacyCard>

            <PrivacyCard number={6} title="Direitos do Titular de Dados">
              <p className="text-base leading-[1.75]">
                Nos termos da LGPD, o usuário pode solicitar:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>Confirmação da existência de tratamento de dados</li>
                <li>Acesso aos dados pessoais</li>
                <li>Correção de dados incompletos ou desatualizados</li>
                <li>Exclusão de dados pessoais</li>
                <li>Portabilidade de dados, quando aplicável</li>
                <li>Informações sobre compartilhamento</li>
              </ul>
              <p className="mt-6 text-base leading-[1.75]">
                As solicitações podem ser feitas pelo e-mail:
              </p>
              <a
                href="mailto:support@rangelops.com"
                className="mt-2 inline-block font-medium text-[#0EA5E9] transition-colors duration-200 ease-out hover:text-[#22D3EE]"
              >
                support@rangelops.com
              </a>
            </PrivacyCard>

            <PrivacyCard number={7} title="Exclusão de Conta">
              <p className="text-base leading-[1.75]">
                O usuário pode solicitar/realizar exclusão da conta diretamente
                pelo aplicativo. A exclusão implica na remoção dos dados
                armazenados em nuvem relacionados ao perfil, imagens e registros
                vinculados.
              </p>
            </PrivacyCard>

            <PrivacyCard number={8} title="Segurança das Informações">
              <p className="text-base leading-[1.75]">
                Adotamos medidas técnicas e organizacionais adequadas para
                proteger os dados pessoais contra acesso não autorizado, perda,
                alteração ou divulgação indevida.
              </p>
            </PrivacyCard>

            <PrivacyCard number={9} title="Alterações nesta Política">
              <p className="text-base leading-[1.75]">
                Esta Política de Privacidade poderá ser atualizada
                periodicamente para refletir melhorias no aplicativo ou
                alterações legais.
              </p>
              <p className="mt-4 text-base leading-[1.75]">
                Recomendamos a revisão regular desta página.
              </p>
            </PrivacyCard>

            <PrivacyCard number={10} title="Contato">
              <p className="text-base leading-[1.75]">
                Para dúvidas relacionadas à privacidade ou ao tratamento de
                dados pessoais, entre em contato:
              </p>
              <a
                href="mailto:support@rangelops.com"
                className="mt-2 inline-block font-medium text-[#0EA5E9] transition-colors duration-200 ease-out hover:text-[#22D3EE]"
              >
                support@rangelops.com
              </a>
            </PrivacyCard>
          </div>

          <footer className="mt-16 border-t border-white/10 pt-8">
            <Link
              href={`/aplicativos/${slug}`}
              className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-white"
            >
              ← Voltar ao {app.name}
            </Link>
          </footer>
        </article>
      </Container>
    </Section>
  );
}
