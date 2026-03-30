import Link from "next/link";
import type { App } from "@/types";
import { Section, Container } from "@/components/ui";
import { PrivacyCard } from "./PrivacyCard";

export function PoliticaPrivacidadeCiviFlow({ app }: { app: App }) {
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
              Política de Privacidade – CiviFlow
            </h1>
            <p className="mt-4 text-sm text-[#94a3b8]/80">
              Última atualização: Março de 2026
            </p>
          </header>

          <div className="mt-10 space-y-6 text-[#94a3b8]/90">
            <p className="text-base leading-[1.75]">
              O CiviFlow é um aplicativo da Rangel Ops voltado à gestão de obras
              civis: organização de tarefas e equipes, controle de materiais,
              registro de custos e acompanhamento do progresso físico da
              construção.
            </p>
            <p className="text-base leading-[1.75]">
              Esta Política de Privacidade descreve como tratamos dados pessoais e
              informações operacionais inseridas por você ou por sua organização,
              em conformidade com a Lei Geral de Proteção de Dados (Lei nº
              13.709/2018 – LGPD).
            </p>
            <p className="text-base leading-[1.75]">
              O aplicativo utiliza autenticação via Firebase, armazenamento em
              nuvem para dados de obras (incluindo tarefas, materiais e custos) e
              pode manter cópias locais no dispositivo para permitir o uso em
              ambientes com conectividade limitada. Não colhemos dados pessoais
              sensíveis além do estritamente necessário ao serviço; as
              informações são utilizadas para fazer o produto funcionar, manter a
              sincronização da obra e melhorar a experiência de uso, sem
              finalidades incompatíveis ou desnecessárias.
            </p>
            <p className="text-base leading-[1.75]">
              Ao utilizar o CiviFlow, você declara estar ciente das práticas
              descritas nesta Política.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            <PrivacyCard number={1} title="Dados Pessoais Coletados">
              <div className="space-y-8">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.1 Minimização e dados sensíveis
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Tratamos apenas os dados necessários para autenticar
                    usuários, viabilizar a gestão de obras e permitir colaboração
                    entre perfis autorizados. Não exigimos categorias especiais de
                    dados pessoais (como definidas no art. 11 da LGPD) quando não
                    forem indispensáveis ao funcionamento do app.
                  </p>
                  <p className="mt-4 text-base leading-[1.75]">
                    As informações produzidas dentro do CiviFlow — cadastros de
                    obra, listas de materiais, lançamentos de custos, tarefas e
                    demais registros operacionais — são utilizadas para execução
                    do serviço contratado e para aprimorar fluxos, desempenho e
                    usabilidade, sempre respeitando a finalidade informada e a
                    transparência desta Política.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Bases legais: execução de contrato, legítimo interesse
                    compatível com expectativa do usuário e cumprimento de
                    obrigações legais, quando couber.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.2 Cadastro e autenticação (Firebase Authentication)
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    A criação de sessão ocorre por meio do Firebase Authentication
                    (ou mecanismo equivalente integrado). Podem ser tratados:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Endereço de e-mail;</li>
                    <li>
                      Senha ou credenciais de provedores sociais habilitados,
                      processadas pela infraestrutura da Google;
                    </li>
                    <li>
                      Nome e identificadores de perfil necessários para exibir
                      quem está atuando na obra.
                    </li>
                  </ul>
                  <p className="mt-4 text-base leading-[1.75]">
                    O CiviFlow não armazena senha em texto claro em servidores
                    próprios; a gestão de credenciais segue as regras do
                    Firebase.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal (LGPD): execução de contrato e legítimo interesse
                    para segurança da conta.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.3 Obras, tarefas, materiais e custos na nuvem
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Os dados de gestão inseridos por você — projetos ou obras,
                    cronogramas e tarefas, movimentações de materiais, valores de
                    custos, medições de avanço e registros correlatos — podem ser
                    armazenados em serviços Firebase (por exemplo Firestore) e em
                    armazenamento de arquivos (Firebase Storage) quando houver
                    anexos, conforme a versão do aplicativo e as permissões da
                    conta ou equipe.
                  </p>
                  <p className="mt-4 text-base leading-[1.75]">
                    Essas informações têm finalidade exclusiva de operação da obra,
                    relatórios internos e continuidade do trabalho entre
                    dispositivos autorizados.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato e, quando aplicável, legítimo
                    interesse da organização contratante da solução.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.4 Dados locais e funcionamento offline
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Para permitir uso em canteiros com sinal instável, o CiviFlow
                    pode gravar no aparelho rascunhos, filas de sincronização,
                    caches de telas e cópias temporárias de listas de materiais,
                    custos e tarefas. Esses conteúdos servem para concluir
                    operações quando a conexão retornar e para manter a
                    experiência fluida; não são coletados para fins alheios à
                    gestão da obra.
                  </p>
                  <p className="mt-4 text-base leading-[1.75]">
                    Quando a sincronização estiver ativa, os dados locais
                    relevantes podem ser replicados na nuvem conforme regras
                    exibidas no próprio aplicativo.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.5 Imagens e documentos de obra
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Fotografias, PDFs ou outros arquivos vinculados a tarefas,
                    medições ou registros podem ser guardados localmente e/ou no
                    Firebase Storage. Recomenda-se não incluir dados pessoais de
                    terceiros sem fundamento jurídico adequado ou sem anonimização
                    quando não forem necessários à obra.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato e legítimo interesse,
                    observada a proporcionalidade.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    1.6 Fale Conosco
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Ao enviar mensagem pelos canais de contato, são tratados nome,
                    e-mail, assunto e texto para atendimento. O envio pode ocorrer
                    por serviço de terceiros (por exemplo Formspree), na condição
                    de operador.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: consentimento ao enviar a mensagem ou legítimo
                    interesse para responder à solicitação.
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
                    O aplicativo pode utilizar Firebase Cloud Messaging para
                    lembretes e avisos relacionados a obras e tarefas. Um token
                    técnico do dispositivo pode ser associado à sua conta para
                    entrega das mensagens.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato ou legítimo interesse para
                    comunicação vinculada ao serviço.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    2.2 Relatórios de erro
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Em versões distribuídas pelas lojas oficiais, podemos usar
                    Firebase Crashlytics (ou ferramenta equivalente) para registrar
                    falhas, com dados técnicos como modelo do dispositivo,
                    versão do sistema e informações do erro, visando estabilidade
                    e segurança.
                  </p>
                  <p className="mt-4 text-base leading-[1.75]">
                    O CiviFlow não emprega esses recursos para publicidade
                    comportamental nem utiliza Firebase Analytics para rastrear
                    hábitos fora do escopo do aplicativo.
                  </p>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: legítimo interesse, com minimização de dados.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    2.3 Parâmetros remotos e atualizações
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    O aplicativo pode consultar configurações remotas para
                    verificar necessidade de atualização ou ajustes de
                    comportamento. Esse processo não visa identificar o titular de
                    forma invasiva.
                  </p>
                </div>
              </div>
            </PrivacyCard>

            <PrivacyCard number={3} title="Armazenamento Local">
              <p className="text-base leading-[1.75]">
                O CiviFlow armazena informações localmente no dispositivo do
                usuário quando necessário ao funcionamento offline e à
                sincronização, incluindo, a título exemplificativo:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>Rascunhos e alterações pendentes de envio à nuvem;</li>
                <li>
                  Preferências de filtros, telas e listas de obras e tarefas;
                </li>
                <li>
                  Caches de materiais, custos e progresso para consulta sem rede;
                </li>
                <li>
                  Metadados que permitam retomar o trabalho após fechar o app.
                </li>
              </ul>
              <p className="mt-4 text-base leading-[1.75]">
                Esses dados permanecem sob seu controle no aparelho e podem ser
                removidos por meio das opções do próprio CiviFlow, pela limpeza de
                dados do aplicativo nas configurações do sistema ou pela
                desinstalação.
              </p>
            </PrivacyCard>

            <PrivacyCard number={4} title="Assinaturas e Pagamentos">
              <p className="text-base leading-[1.75]">
                Quando houver planos pagos, o CiviFlow utiliza o sistema oficial
                Google Play Billing. As informações de pagamento são processadas
                diretamente pela Google; o aplicativo não recebe o número
                completo do cartão do usuário.
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
                  Messaging e Crashlytics, conforme a configuração da versão);
                </li>
                <li>Google Play, para assinaturas e pagamentos;</li>
                <li>
                  Prestadores de formulário de contato (por exemplo Formspree),
                  quando utilizados.
                </li>
              </ul>
              <p className="mt-6 font-medium text-white">
                Não vendemos, alugamos ou comercializamos dados pessoais.
              </p>
            </PrivacyCard>

            <PrivacyCard number={6} title="Direitos do Titular de Dados">
              <p className="text-base leading-[1.75]">
                Nos termos da LGPD, o titular pode solicitar confirmação de
                tratamento, acesso, correção, anonimização, bloqueio ou eliminação
                de dados desnecessários, portabilidade (quando aplicável),
                informações sobre compartilhamentos e revogação de consentimento,
                quando a base legal for essa.
              </p>
              <p className="mt-6 text-base leading-[1.75]">
                Os pedidos podem ser encaminhados para:
              </p>
              <a
                href="mailto:support@rangelops.com"
                className="mt-2 inline-block font-medium text-[#0EA5E9] transition-colors duration-200 ease-out hover:text-[#22D3EE]"
              >
                support@rangelops.com
              </a>
              <p className="mt-4 text-base leading-[1.75]">
                Responderemos no prazo legal, podendo solicitar comprovação de
                identidade para evitar divulgação indevida.
              </p>
            </PrivacyCard>

            <PrivacyCard number={7} title="Exclusão de Conta">
              <p className="text-base leading-[1.75]">
                O usuário pode solicitar ou realizar exclusão da conta conforme
                fluxos disponíveis no aplicativo ou na loja. A exclusão objetiva
                remover ou anonimizar dados mantidos em nuvem vinculados ao
                CiviFlow, respeitados prazos de backup e obrigações legais.
              </p>
              <p className="mt-4 text-base leading-[1.75]">
                Dados existentes apenas no dispositivo devem ser apagados pelo
                titular nas configurações do sistema ou pela desinstalação, se
                desejar eliminá-los antes de trocar de aparelho.
              </p>
            </PrivacyCard>

            <PrivacyCard number={8} title="Segurança das Informações">
              <p className="text-base leading-[1.75]">
                Adotamos medidas técnicas e organizacionais compatíveis com o
                risco, incluindo uso de provedores com boas práticas de segurança,
                controles de acesso e minimização do tratamento. Em caso de
                incidente com risco relevante aos titulares, avaliaremos a
                necessidade de comunicação nos termos da legislação.
              </p>
            </PrivacyCard>

            <PrivacyCard number={9} title="Alterações nesta Política">
              <p className="text-base leading-[1.75]">
                Esta Política de Privacidade poderá ser atualizada periodicamente
                para refletir mudanças no aplicativo, nos serviços de terceiros ou
                na legislação.
              </p>
              <p className="mt-4 text-base leading-[1.75]">
                Recomendamos a revisão regular desta página. Alterações relevantes
                podem ser comunicadas por meio adequado, inclusive por aviso no
                aplicativo, quando cabível.
              </p>
            </PrivacyCard>

            <PrivacyCard number={10} title="Contato">
              <p className="text-base leading-[1.75]">
                Para dúvidas relacionadas à privacidade ou ao tratamento de dados
                pessoais no CiviFlow, entre em contato:
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
