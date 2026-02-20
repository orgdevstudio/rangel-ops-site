import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { apps } from "@/config/apps";
import { Section, Container } from "@/components/ui";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const sectionIcons: Record<number, React.ReactNode> = {
  1: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  2: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  3: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
  4: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  5: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
  6: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  7: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  ),
  8: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  9: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  10: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

function PrivacyCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10"
      style={{
        boxShadow: "0 4px 24px -4px rgba(0,0,0,0.2)",
      }}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9]">
          {sectionIcons[number]}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            {number}. {title}
          </h2>
          <div className="mt-6 space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "sellerflow" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== "sellerflow") return {};
  return {
    title: "Política de Privacidade",
    description:
      "Política de Privacidade do aplicativo SellerFlow. Conheça como coletamos, utilizamos e protegemos seus dados em conformidade com a LGPD.",
  };
}

export default async function PoliticaPrivacidadePage({ params }: PageProps) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);

  if (slug !== "sellerflow" || !app) {
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
