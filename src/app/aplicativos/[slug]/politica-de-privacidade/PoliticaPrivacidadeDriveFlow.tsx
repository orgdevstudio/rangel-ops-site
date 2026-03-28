import Link from "next/link";
import type { App } from "@/types";
import { Section, Container } from "@/components/ui";
import { PrivacyCard } from "./PrivacyCard";

export function PoliticaPrivacidadeDriveFlow({ app }: { app: App }) {
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
              Política de Privacidade – DriveFlow
            </h1>
            <p className="mt-4 text-sm text-[#94a3b8]/80">
              Última atualização: Março de 2026
            </p>
          </header>

          <div className="mt-10 space-y-6 text-[#94a3b8]/90">
            <p className="text-base leading-[1.75]">
              O DriveFlow é desenvolvido pela Rangel Ops para motoristas que
              utilizam plataformas de transporte por aplicativo. O produto
              combina cálculos de rentabilidade, indicações contextuais e recursos
              que dependem de permissões do sistema Android — incluindo serviço
              de acessibilidade e exibição sobre outras apps — sempre quando
              ativados por você.
            </p>
            <p className="text-base leading-[1.75]">
              Este documento explica quais dados podem ser tratados, com quais
              finalidades e em qual base legal, nos termos da Lei Geral de
              Proteção de Dados (Lei nº 13.709/2018 – LGPD).
            </p>
            <p className="text-base leading-[1.75]">
              Ao usar o DriveFlow, você confirma que leu e compreendeu as
              informações abaixo, em especial as seções sobre acessibilidade,
              sobreposição de tela e armazenamento local.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            <PrivacyCard number={1} title="Dados Pessoais e Informações Tratadas">
              <div className="space-y-8">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.1 Conta e autenticação (Google Firebase)
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    A criação de sessão pode ocorrer por meio do Firebase
                    Authentication. Nesse fluxo, o tratamento de credenciais
                    (como e-mail e senha ou provedores sociais habilitados) é
                    realizado pela infraestrutura da Google; o DriveFlow não
                    armazena sua senha em texto claro.
                  </p>
                  <p className="mt-4 text-base leading-[1.75]">
                    Identificadores de conta e metadados necessários à sessão
                    podem ser mantidos nos serviços Firebase associados ao
                    aplicativo.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Bases legais: execução de contrato e procedimentos
                    preliminares; em alguns casos, legítimo interesse para
                    segurança da conta.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.2 Perfil e dados vinculados à conta na nuvem
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Conforme as funções disponíveis na versão instalada, podem
                    existir registros no Firebase (por exemplo Firestore ou
                    Storage) com nome, foto de perfil, preferências de uso e
                    informações que você optar por sincronizar entre
                    dispositivos.
                  </p>
                  <p className="mt-4 text-base leading-[1.75]">
                    Esses itens existem para viabilizar login, personalização e
                    continuidade da experiência quando aplicável.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.3 Dados locais de cálculo e configuração
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Parâmetros de custo, metas, histórico de simulações e demais
                    entradas utilizadas para estimar lucro ou viabilidade de
                    corrida podem permanecer armazenados apenas no aparelho,
                    salvo quando uma funcionalidade específica prever cópia
                    cifrada ou sincronização com sua conta na nuvem — hipótese em
                    que será indicado no próprio aplicativo.
                  </p>
                  <p className="mt-4 text-base leading-[1.75]">
                    O tratamento local visa executar as funcionalidades de
                    análise sem enviar o conteúdo bruto das suas planilhas ou
                    anotações a terceiros não essenciais ao serviço.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato e consentimento quando
                    aplicável a funcionalidades opcionais.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.4 Serviço de acessibilidade e leitura da interface
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Para oferecer análise alinhada ao que aparece na tela do
                    aplicativo de corridas, o DriveFlow pode solicitar a
                    ativação do serviço de acessibilidade do Android. Essa
                    permissão permite que o app observe eventos e conteúdos da
                    interface do sistema e de outras aplicações estritamente na
                    medida necessária para detectar ofertas ou telas relevantes
                    ao fluxo de trabalho do motorista.
                  </p>
                  <p className="mt-4 text-base leading-[1.75]">
                    O objetivo é viabilizar leitura automatizada de informações
                    já exibidas ao usuário (por exemplo valores e distâncias),
                    aplicar as regras de cálculo configuradas por você e exibir
                    um resultado objetivo. Não utilizamos esse canal para
                    publicidade comportamental nem para revenda de dados.
                  </p>
                  <p className="mt-4 text-base leading-[1.75]">
                    Você pode revogar a permissão a qualquer momento nas
                    configurações do Android; sem ela, parte das funções que
                    dependem de leitura contextual poderá ficar indisponível.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Bases legais: consentimento específico e destacado para esse
                    tratamento sensível ao contexto; execução de contrato quando
                    o recurso integra o serviço contratado.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.5 Overlay (camada sobre outras apps) e sugestão de corrida
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    O DriveFlow pode solicitar permissão para desenhar sobre
                    outras aplicações, de modo a apresentar uma camada flutuante
                    com sugestão ou conclusão sobre a corrida (por exemplo se a
                    oferta atende aos critérios definidos por você).
                  </p>
                  <p className="mt-4 text-base leading-[1.75]">
                    O conteúdo exibido nessa camada deriva dos cálculos locais e,
                    quando aplicável, dos dados obtidos via acessibilidade para
                    aquela oferta. A finalidade é apoio à decisão do motorista,
                    sem substituir o aplicativo de transporte nem alterar
                    ofertas de terceiros.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato e consentimento quando exigido
                    para permissão de sobreposição.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.6 Canais de atendimento
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Se você entrar em contato pelos meios disponíveis no site ou
                    no app, poderemos tratar nome, e-mail, assunto e texto da
                    mensagem para responder à demanda. Quando o envio ocorrer
                    por formulário hospedado em serviço terceiro (por exemplo
                    Formspree), o provedor atua como operador conforme instruções
                    nossas.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: consentimento na medida em que você inicia o
                    contato; legítimo interesse para suporte e prevenção a
                    fraudes em comunicações subsequentes, quando cabível.
                  </p>
                </div>
              </div>
            </PrivacyCard>

            <PrivacyCard number={2} title="Dados Técnicos e Registros Automáticos">
              <div className="space-y-8">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    2.1 Notificações push
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Se habilitadas, podemos usar Firebase Cloud Messaging (ou
                    mecanismo equivalente) para enviar comunicações relacionadas ao
                    serviço. Um token técnico do dispositivo pode ser associado
                    à sua conta para entrega das mensagens.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato ou legítimo interesse para
                    comunicação operacional.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    2.2 Estabilidade e diagnóstico
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Em builds distribuídas pelas lojas oficiais, poderemos usar
                    Firebase Crashlytics (ou ferramenta similar) para registrar
                    falhas, com dados técnicos como modelo do aparelho, versão
                    do sistema e stack de erro — com vistas à correção e à
                    segurança.
                  </p>
                  <p className="mt-4 text-base leading-[1.75]">
                    Não empregamos esses mecanismos para perfilagem publicitária.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: legítimo interesse, observado o minimizante de
                    dados.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    2.3 Parâmetros remotos e atualizações
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    O aplicativo pode consultar configurações remotas para
                    habilitar correções ou ajustes de comportamento. Essa consulta
                    não tem por objetivo identificar você de forma invasiva.
                  </p>
                </div>
              </div>
            </PrivacyCard>

            <PrivacyCard number={3} title="Armazenamento no Dispositivo">
              <p className="text-base leading-[1.75]">
                Diversas informações permanecem no armazenamento local do
                celular ou tablet, incluindo, a título exemplificativo:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>
                  Regras e constantes usadas nos cálculos de lucro ou
                  viabilidade;
                </li>
                <li>
                  Histórico recente de análises e estados da interface quando
                  previsto pela versão do app;
                </li>
                <li>
                  Preferências de exibição do overlay e do fluxo de
                  acessibilidade, quando configuráveis offline.
                </li>
              </ul>
              <p className="mt-4 text-base leading-[1.75]">
                A remoção desses dados pode ser feita pelas opções do próprio
                DriveFlow, pela limpeza de dados do aplicativo nas
                configurações do sistema ou, em último caso, pela desinstalação.
                Dados sincronizados com a nuvem seguem as regras da seção de
                exclusão de conta.
              </p>
            </PrivacyCard>

            <PrivacyCard number={4} title="Assinaturas e Pagamentos">
              <p className="text-base leading-[1.75]">
                Quando houver monetização via loja, utilizamos o faturamento
                oficial da Google Play. Dados de pagamento são tratados pela
                Google segundo a política dela; o DriveFlow não recebe o número
                completo do cartão.
              </p>
              <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                Base legal: execução de contrato.
              </p>
            </PrivacyCard>

            <PrivacyCard number={5} title="Compartilhamento e Operadores">
              <p className="text-base leading-[1.75]">
                Subcontratamos infraestrutura e serviços que são necessários ao
                funcionamento do produto, na qualidade de operadores, mediante
                contrato e cláusulas de confidencialidade e segurança:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>
                  Google LLC e afiliadas: Firebase (autenticação, banco de dados,
                  armazenamento de arquivos, mensagens e diagnóstico), além da
                  própria Google Play quando couber;
                </li>
                <li>
                  Prestadores de formulário de contato (quando utilizados).
                </li>
              </ul>
              <p className="mt-6 text-base leading-[1.75]">
                Informações obtidas via acessibilidade e processadas no aparelho
                para exibir o overlay não são &quot;compartilhadas&quot; com a
                Rangel Ops além do estritamente necessário se, em dado momento, um
                subconjunto for sincronizado para suporte à conta — hipótese que
                será descrita no aplicativo quando existir.
              </p>
              <p className="mt-4 font-medium text-white">
                Não comercializamos bases de dados pessoais.
              </p>
            </PrivacyCard>

            <PrivacyCard number={6} title="Direitos do Titular">
              <p className="text-base leading-[1.75]">
                Nos termos do art. 18 da LGPD, você pode solicitar confirmação de
                tratamento, acesso, correção, anonimização, portabilidade,
                eliminação de dados desnecessários ou informações sobre
                compartilhamentos e revogação de consentimento, quando a base
                for essa.
              </p>
              <p className="mt-6 text-base leading-[1.75]">
                Para exercer direitos relacionados a dados tratados pelo
                DriveFlow e pela conta associada:
              </p>
              <a
                href="mailto:support@rangelops.com"
                className="mt-2 inline-block font-medium text-[#0EA5E9] transition-colors duration-200 ease-out hover:text-[#22D3EE]"
              >
                support@rangelops.com
              </a>
              <p className="mt-4 text-base leading-[1.75]">
                Responderemos no prazo legal, podendo solicitar confirmação de
                identidade para evitar acesso indevido.
              </p>
            </PrivacyCard>

            <PrivacyCard number={7} title="Exclusão de Conta e Retenção">
              <p className="text-base leading-[1.75]">
                Você pode encerrar a conta pelos fluxos indicados no aplicativo
                ou na loja, quando disponíveis. A exclusão remove ou anonimiza,
                conforme tecnicamente possível, os registros mantidos nos
                serviços em nuvem ligados ao DriveFlow, respeitados prazos
                legais e de backup.
              </p>
              <p className="mt-4 text-base leading-[1.75]">
                Dados armazenados somente no dispositivo devem ser apagados por
                você nas configurações do sistema ou pela desinstalação, se
                desejar eliminá-los antes de trocar de aparelho.
              </p>
            </PrivacyCard>

            <PrivacyCard number={8} title="Segurança">
              <p className="text-base leading-[1.75]">
                Adotamos medidas técnicas e administrativas compatíveis com o
                risco, incluindo controles de acesso, uso de provedores com
                boas práticas de segurança e minimização do tratamento. Nenhum
                sistema é absolutamente invulnerável; em caso de incidente com
                risco relevante a titulares, avaliaremos a necessidade de
                comunicação conforme a legislação.
              </p>
            </PrivacyCard>

            <PrivacyCard number={9} title="Alterações desta Política">
              <p className="text-base leading-[1.75]">
                Esta política pode ser atualizada para refletir mudanças no app,
                nos serviços de terceiros ou na legislação. A data no topo do
                documento indica a revisão mais recente. Recomendamos consulta
                periódica; alterações relevantes podem ser comunicadas por meio
                adequado (por exemplo aviso no aplicativo).
              </p>
            </PrivacyCard>

            <PrivacyCard number={10} title="Encarregado e Contato">
              <p className="text-base leading-[1.75]">
                Dúvidas sobre privacidade, tratamento de dados ou exercício de
                direitos podem ser encaminhadas a:
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
