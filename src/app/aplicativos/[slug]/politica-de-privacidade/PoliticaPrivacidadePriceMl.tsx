import Link from "next/link";
import type { App } from "@/types";
import { Section, Container } from "@/components/ui";
import { PrivacyCard } from "./PrivacyCard";

export function PoliticaPrivacidadePriceMl({ app }: { app: App }) {
  const slug = app.slug;

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
              Política de Privacidade – Price ML
            </h1>
            <p className="mt-4 text-sm text-[#94a3b8]/80">
              Última atualização: julho de 2026
            </p>
          </header>

          <div className="mt-10 space-y-6 text-[#94a3b8]/90">
            <p className="text-base leading-[1.75]">
              O Price ML é uma calculadora inteligente de precificação para
              vendedores do Mercado Livre, desenvolvida pela Rangel Ops. O
              aplicativo ajuda empreendedores a simular margens, calcular lucro
              real e definir preços com clareza, considerando taxas do
              marketplace, custos e regras de precificação.
            </p>
            <p className="text-base leading-[1.75]">
              Esta Política de Privacidade descreve como coletamos, utilizamos,
              armazenamos e protegemos dados pessoais e informações de
              precificação, em conformidade com a Lei Geral de Proteção de Dados
              (Lei nº 13.709/2018 – LGPD) e com os requisitos da Google Play
              Store.
            </p>
            <p className="text-base leading-[1.75]">
              Ao utilizar o Price ML, você declara estar ciente das práticas
              descritas nesta Política, em especial as seções sobre
              armazenamento local, sincronização em nuvem e dados de
              precificação.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            <PrivacyCard number={1} title="Dados Pessoais Coletados">
              <div className="space-y-8">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.1 Cadastro e autenticação (Firebase Authentication)
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Para utilizar o aplicativo, é necessário criar uma conta por
                    meio do Firebase Authentication. São coletados:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Endereço de e-mail (identificador de login);</li>
                    <li>
                      Senha (processada exclusivamente pelo Firebase; o Price ML
                      não armazena senha em texto claro);
                    </li>
                    <li>Nome (para identificação no perfil).</li>
                  </ul>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.2 Perfil do usuário
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Podem ser armazenados no Firestore e no Firebase Storage:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Nome;</li>
                    <li>Foto de perfil;</li>
                    <li>Data de criação da conta e metadados de sessão;</li>
                    <li>
                      Token FCM (Firebase Cloud Messaging) para notificações do
                      serviço.
                    </li>
                  </ul>
                  <p className="mt-4 text-base leading-[1.75]">
                    O usuário pode alterar nome e foto pelo aplicativo. O e-mail
                    de login não pode ser alterado dentro do app por questões de
                    segurança da conta.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.3 Parâmetros de precificação
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    O aplicativo armazena preferências de precificação definidas
                    pelo usuário, incluindo:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Modo de precificação (Automático ou Manual);</li>
                    <li>Imposto padrão (%) e outros custos padrão (R$);</li>
                    <li>
                      Configurações de categoria e tipo de anúncio no modo
                      Automático;
                    </li>
                    <li>
                      Valores de comissão e taxa fixa no modo Manual.
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato.
                  </p>
                </div>
              </div>
            </PrivacyCard>

            <PrivacyCard number={2} title="Dados de Precificação">
              <p className="text-base leading-[1.75]">
                O Price ML processa informações essenciais à simulação e gestão
                de precificação, incluindo:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>
                  Simulações de precificação (preço de venda, custos, margem,
                  lucro e ROI);
                </li>
                <li>Produtos salvos e versões de precificação;</li>
                <li>
                  Regras do Mercado Livre (comissões e taxas fixas por categoria
                  e faixa de preço), armazenadas localmente;
                </li>
                <li>
                  Histórico de simulações e metadados de recálculo com regras
                  atualizadas.
                </li>
              </ul>
              <p className="mt-4 text-base leading-[1.75]">
                A maior parte desses dados é armazenada localmente no
                dispositivo (banco de dados Drift/SQLite) para garantir
                funcionamento offline e desempenho. Parâmetros e perfil podem
                ser sincronizados com a nuvem via Firebase. Essas informações
                pertencem à sua operação comercial e são utilizadas
                exclusivamente para viabilizar o serviço contratado.
              </p>
              <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                Base legal: execução de contrato.
              </p>
            </PrivacyCard>

            <PrivacyCard number={3} title="Armazenamento Local e Nuvem">
              <p className="text-base leading-[1.75]">
                O Price ML utiliza armazenamento local no dispositivo (Drift) para:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>Simulações ativas e produtos salvos;</li>
                <li>Regras do Mercado Livre e cache de parâmetros;</li>
                <li>Preferências do aplicativo e estados de interface;</li>
                <li>Histórico de versões de precificação.</li>
              </ul>
              <p className="mt-4 text-base leading-[1.75]">
                Dados de perfil e parâmetros de precificação podem ser
                sincronizados com Firebase (Firestore e Storage). Simulações,
                produtos e regras do marketplace permanecem majoritariamente no
                dispositivo. Esses dados locais podem ser removidos ao limpar
                dados do app ou desinstalar o aplicativo.
              </p>
            </PrivacyCard>

            <PrivacyCard number={4} title="Serviços Firebase">
              <div className="space-y-6">
                <p className="text-base leading-[1.75]">
                  Utilizamos serviços Google Firebase para viabilizar o
                  funcionamento do Price ML:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-[1.75]">
                  <li>Firebase Authentication — autenticação de usuários;</li>
                  <li>Cloud Firestore — perfil e parâmetros de precificação;</li>
                  <li>Firebase Storage — foto de perfil;</li>
                  <li>Firebase Cloud Messaging — notificações;</li>
                  <li>Firebase Crashlytics — diagnóstico de falhas técnicas.</li>
                </ul>
                <p className="text-base leading-[1.75]">
                  Esses serviços seguem as políticas de privacidade do
                  Google/Firebase. Os dados trafegam com criptografia em trânsito
                  (HTTPS/TLS).
                </p>
                <p className="text-sm text-[#94a3b8]/70 italic">
                  Base legal: execução de contrato e legítimo interesse para
                  estabilidade e segurança do serviço.
                </p>
              </div>
            </PrivacyCard>

            <PrivacyCard number={5} title="Compartilhamento de Dados">
              <p className="text-base leading-[1.75]">
                Os dados podem ser processados por terceiros estritamente
                necessários ao funcionamento do serviço:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>
                  Google Firebase (Authentication, Firestore, Storage, Cloud
                  Messaging e Crashlytics);
                </li>
                <li>Formspree (envio de mensagens de contato e suporte).</li>
              </ul>
              <p className="mt-4 text-base leading-[1.75]">
                Não utilizamos seus dados de precificação para fins
                publicitários. Métricas de uso anônimas poderão ser utilizadas no
                futuro para aprimorar o produto.
              </p>
              <p className="mt-6 font-medium text-white">
                Não vendemos, alugamos ou comercializamos dados pessoais.
              </p>
            </PrivacyCard>

            <PrivacyCard number={6} title="Direitos do Titular de Dados">
              <p className="text-base leading-[1.75]">
                Nos termos da LGPD, o usuário pode solicitar:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>Confirmação da existência de tratamento de dados;</li>
                <li>Acesso aos dados pessoais;</li>
                <li>Correção de dados incompletos ou desatualizados;</li>
                <li>Exclusão de dados pessoais;</li>
                <li>Portabilidade de dados, quando aplicável;</li>
                <li>Informações sobre compartilhamento;</li>
                <li>Revogação de consentimentos, quando aplicável.</li>
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
                Você pode solicitar a exclusão da conta e dos dados associados
                conforme descrito na página de{" "}
                <Link
                  href={`/aplicativos/${slug}/exclusao-de-conta`}
                  className="font-medium text-[#0EA5E9] transition-colors duration-200 ease-out hover:text-[#22D3EE]"
                >
                  Exclusão de conta e dados
                </Link>
                . A exclusão implica na remoção dos dados armazenados em nuvem
                relacionados ao perfil, parâmetros sincronizados e registros
                vinculados à conta. Simulações, produtos salvos e regras do
                marketplace armazenados localmente devem ser removidos
                separadamente pelo aplicativo ou pelas configurações do sistema.
              </p>
            </PrivacyCard>

            <PrivacyCard number={8} title="Segurança das Informações">
              <p className="text-base leading-[1.75]">
                Adotamos medidas técnicas e organizacionais adequadas para
                proteger os dados pessoais, incluindo comunicação criptografada
                (HTTPS), regras de acesso no Firestore e Storage, autenticação
                obrigatória para áreas protegidas e isolamento de dados por
                usuário.
              </p>
              <p className="mt-4 text-base leading-[1.75]">
                Recomendamos manter seu dispositivo atualizado e não
                compartilhar sua senha com terceiros.
              </p>
            </PrivacyCard>

            <PrivacyCard number={9} title="Alterações nesta Política">
              <p className="text-base leading-[1.75]">
                Esta Política de Privacidade poderá ser atualizada periodicamente
                para refletir melhorias no aplicativo ou alterações legais. A
                data da última revisão será indicada no topo desta página.
              </p>
              <p className="mt-4 text-base leading-[1.75]">
                Recomendamos a revisão regular desta página.
              </p>
            </PrivacyCard>

            <PrivacyCard number={10} title="Contato">
              <p className="text-base leading-[1.75]">
                Para dúvidas relacionadas à privacidade ou ao tratamento de
                dados pessoais, entre em contato pelo Fale Conosco no aplicativo
                ou pelo e-mail:
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
