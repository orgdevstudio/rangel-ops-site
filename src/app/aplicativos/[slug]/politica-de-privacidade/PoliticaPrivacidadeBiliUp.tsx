import Link from "next/link";
import type { App } from "@/types";
import { Section, Container } from "@/components/ui";
import { PrivacyCard } from "./PrivacyCard";

export function PoliticaPrivacidadeBiliUp({ app }: { app: App }) {
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
              Política de Privacidade – BiliUp
            </h1>
            <p className="mt-4 text-sm text-[#94a3b8]/80">
              Última atualização: setembro de 2026
            </p>
          </header>

          <div className="mt-10 space-y-6 text-[#94a3b8]/90">
            <p className="text-base leading-[1.75]">
              O BiliUp é um aplicativo de aprendizado de idiomas por missões,
              desenvolvido pela Rangel Ops. O produto ajuda você a praticar
              situações reais do dia a dia com progresso salvo na sua conta.
            </p>
            <p className="text-base leading-[1.75]">
              Esta Política de Privacidade descreve como coletamos, utilizamos,
              armazenamos e protegemos dados pessoais e informações de
              aprendizado, em conformidade com a Lei Geral de Proteção de Dados
              (Lei nº 13.709/2018 – LGPD) e com os requisitos das lojas de
              aplicativos.
            </p>
            <p className="text-base leading-[1.75]">
              Ao utilizar o BiliUp, você declara estar ciente das práticas
              descritas nesta Política, em especial as seções sobre conta,
              progresso de aprendizado e exclusão de dados.
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
                    Para criar ou acessar uma conta, o BiliUp utiliza o Firebase
                    Authentication. Podem ser tratados:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Endereço de e-mail;</li>
                    <li>
                      Senha (processada exclusivamente pelo Firebase; o BiliUp
                      não armazena senha em texto claro);
                    </li>
                    <li>
                      Nome, e-mail e identificador da conta Google, somente se
                      você escolher &quot;Continuar com Google&quot;.
                    </li>
                  </ul>
                  <p className="mt-4 text-base leading-[1.75]">
                    Não recebemos a senha da sua conta Google nem acessamos
                    outros dados dela (como contatos ou arquivos).
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.2 Uso como visitante
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    É possível começar sem criar conta. Nesse caso, o Firebase
                    Authentication gera um identificador anônimo para guardar o
                    progresso até você criar ou vincular uma conta.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato e procedimentos
                    preliminares.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.3 Perfil do usuário
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    No Firestore, podem ser armazenados em{" "}
                    <code className="text-sm text-white/80">users/&#123;uid&#125;</code>
                    :
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Nome e sobrenome (sobrenome opcional);</li>
                    <li>E-mail associado à conta;</li>
                    <li>Idioma que você estuda;</li>
                    <li>Datas de criação e atualização do perfil.</li>
                  </ul>
                  <p className="mt-4 text-base leading-[1.75]">
                    Você pode editar nome e sobrenome nas opções de conta do
                    aplicativo.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.4 Progresso de aprendizado
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Para retomar missões e mostrar sua evolução, o BiliUp
                    armazena:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Dias de estudo (apenas a data);</li>
                    <li>
                      Progresso por missão (etapas, exercícios concluídos e
                      datas);
                    </li>
                    <li>
                      Histórico de respostas (opção escolhida, acerto, dicas
                      vistas e rodada), usado na revisão pós-missão.
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.5 Dispositivos e notificações futuras
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Em contas (não visitantes), o aplicativo pode registrar um
                    token de push (Firebase Cloud Messaging), a plataforma do
                    aparelho e o idioma da interface, para eventual envio de
                    notificações no futuro. Hoje o BiliUp não pede permissão de
                    notificações nem envia mensagens push.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: legítimo interesse e, quando aplicável,
                    consentimento para notificações.
                  </p>
                </div>
              </div>
            </PrivacyCard>

            <PrivacyCard number={2} title="O que não coletamos">
              <p className="text-base leading-[1.75]">
                O BiliUp não utiliza analytics comportamental, anúncios,
                crash reporting remoto nem ferramentas de rastreamento entre
                apps. Também não solicita localização, contatos, câmera,
                microfone ou acesso a fotos. O app apenas reproduz áudio das
                expressões pelo recurso de voz do sistema; não grava a sua voz.
              </p>
              <p className="mt-4 text-base leading-[1.75]">
                No momento, o BiliUp não processa pagamentos nem dados de
                cartão.
              </p>
            </PrivacyCard>

            <PrivacyCard number={3} title="Armazenamento local e offline">
              <p className="text-base leading-[1.75]">
                No aparelho, o Firebase mantém a sessão autenticada e uma cópia
                offline do progresso para o app funcionar sem internet. Esses
                dados são sincronizados quando a conexão volta.
              </p>
              <p className="mt-4 text-base leading-[1.75]">
                Para pronunciar expressões, o texto é processado pelo motor de
                voz do sistema operacional, conforme a política do fabricante.
              </p>
            </PrivacyCard>

            <PrivacyCard number={4} title="Compartilhamento de Dados">
              <p className="text-base leading-[1.75]">
                Os dados podem ser processados por terceiros estritamente
                necessários ao funcionamento do serviço:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>
                  Google Firebase (Authentication, Cloud Firestore e Cloud
                  Messaging, quando aplicável);
                </li>
                <li>
                  Autoridades públicas, quando a lei exigir.
                </li>
              </ul>
              <p className="mt-6 font-medium text-white">
                Não vendemos, alugamos ou comercializamos dados pessoais.
              </p>
            </PrivacyCard>

            <PrivacyCard number={5} title="Direitos do Titular de Dados">
              <p className="text-base leading-[1.75]">
                Nos termos da LGPD, o usuário pode solicitar:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>Confirmação da existência de tratamento de dados;</li>
                <li>Acesso aos dados pessoais;</li>
                <li>Correção de dados incompletos ou desatualizados;</li>
                <li>Exclusão de dados pessoais;</li>
                <li>Portabilidade de dados, quando aplicável;</li>
                <li>Informações sobre compartilhamento.</li>
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

            <PrivacyCard number={6} title="Exclusão de Conta">
              <p className="text-base leading-[1.75]">
                Você pode excluir a conta diretamente pelo aplicativo (em Dados
                pessoais). A exclusão remove o perfil, o progresso, os dias de
                estudo, o histórico de respostas e a credencial no Firebase
                Authentication. Tokens de aparelho associados à conta também
                são removidos.
              </p>
              <p className="mt-4 text-base leading-[1.75]">
                Se não tiver acesso ao app, utilize a página de{" "}
                <Link
                  href={`/aplicativos/${slug}/exclusao-de-conta`}
                  className="font-medium text-[#0EA5E9] transition-colors duration-200 ease-out hover:text-[#22D3EE]"
                >
                  Exclusão de conta e dados
                </Link>{" "}
                ou o e-mail de suporte.
              </p>
            </PrivacyCard>

            <PrivacyCard number={7} title="Segurança das Informações">
              <p className="text-base leading-[1.75]">
                Adotamos medidas técnicas e organizacionais adequadas para
                proteger os dados pessoais contra acesso não autorizado, perda,
                alteração ou divulgação indevida. As regras do Firestore
                restringem o acesso aos dados de cada usuário ao próprio
                titular da conta.
              </p>
            </PrivacyCard>

            <PrivacyCard number={8} title="Alterações nesta Política">
              <p className="text-base leading-[1.75]">
                Esta Política de Privacidade poderá ser atualizada
                periodicamente para refletir melhorias no aplicativo ou
                alterações legais.
              </p>
              <p className="mt-4 text-base leading-[1.75]">
                Recomendamos a revisão regular desta página.
              </p>
            </PrivacyCard>

            <PrivacyCard number={9} title="Contato">
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
