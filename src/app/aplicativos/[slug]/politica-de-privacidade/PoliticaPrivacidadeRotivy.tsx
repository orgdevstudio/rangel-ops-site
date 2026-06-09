import Link from "next/link";
import type { App } from "@/types";
import { Section, Container } from "@/components/ui";
import { PrivacyCard } from "./PrivacyCard";

export function PoliticaPrivacidadeRotivy({ app }: { app: App }) {
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
              Política de Privacidade – Rotivy
            </h1>
            <p className="mt-4 text-sm text-[#94a3b8]/80">
              Última atualização: 8 de junho de 2026
            </p>
          </header>

          <div className="mt-10 space-y-6 text-[#94a3b8]/90">
            <p className="text-base leading-[1.75]">
              O Rotivy é uma plataforma de gestão operacional de rotas e entregas
              desenvolvida pela Rangel Ops. O aplicativo apoia motoristas,
              entregadores e equipes de campo na organização de paradas, otimização
              de deslocamentos, execução de entregas e acompanhamento operacional.
            </p>
            <p className="text-base leading-[1.75]">
              Esta Política de Privacidade descreve como coletamos, utilizamos,
              armazenamos e protegemos dados pessoais e informações operacionais,
              em conformidade com a Lei Geral de Proteção de Dados (Lei nº
              13.709/2018 – LGPD) e com os requisitos da Google Play Store.
            </p>
            <p className="text-base leading-[1.75]">
              Ao utilizar o Rotivy, você declara estar ciente das práticas
              descritas nesta Política, em especial as seções sobre câmera,
              localização GPS, armazenamento local e sincronização em nuvem.
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
                      Senha (processada exclusivamente pelo Firebase; o Rotivy não
                      armazena senha em texto claro);
                    </li>
                    <li>Nome e sobrenome (para identificação no perfil).</li>
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
                    <li>Nome e sobrenome;</li>
                    <li>Foto de perfil;</li>
                    <li>Data de criação da conta e metadados de sessão;</li>
                    <li>
                      Token FCM (Firebase Cloud Messaging) para notificações
                      operacionais.
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
                    1.3 Configuração inicial e permissões
                  </h3>
                  <p className="mt-3 text-base leading-[1.75]">
                    Durante o fluxo de configuração do aplicativo, podem ser
                    registrados no Firestore:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                    <li>Tipo de perfil operacional escolhido;</li>
                    <li>Status de permissões concedidas (câmera, localização, notificações);</li>
                    <li>Indicador de conclusão do setup inicial.</li>
                  </ul>
                  <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                    Base legal: execução de contrato e legítimo interesse para
                    viabilizar funcionalidades solicitadas.
                  </p>
                </div>
              </div>
            </PrivacyCard>

            <PrivacyCard number={2} title="Dados Operacionais">
              <p className="text-base leading-[1.75]">
                O Rotivy processa informações essenciais à operação logística,
                incluindo:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>Rotas, paradas e sequência de entregas;</li>
                <li>Dados de clientes e endereços cadastrados nas paradas;</li>
                <li>Status de execução, progresso e histórico de entregas;</li>
                <li>Importações de planilhas (CSV/XLSX) e metadados associados;</li>
                <li>Snapshots de otimização de rotas e métricas operacionais.</li>
              </ul>
              <p className="mt-4 text-base leading-[1.75]">
                A maior parte desses dados é armazenada localmente no dispositivo
                (cache operacional) para garantir desempenho e uso em campo. Dados
                de perfil e configuração podem ser sincronizados com a nuvem via
                Firebase. Essas informações pertencem à sua operação e são
                utilizadas exclusivamente para viabilizar o serviço contratado.
              </p>
              <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                Base legal: execução de contrato.
              </p>
            </PrivacyCard>

            <PrivacyCard number={3} title="Câmera e Scanner Inteligente">
              <p className="text-base leading-[1.75]">
                O Rotivy solicita permissão de câmera para o Scanner Inteligente,
                que lê códigos de barras, QR codes e etiquetas logísticas.
              </p>
              <p className="mt-4 text-base leading-[1.75]">
                As imagens capturadas são processadas localmente no dispositivo
                (OCR on-device via Google ML Kit) para extração de endereço e
                dados de entrega. Não armazenamos fotos de etiquetas em servidores
                sem sua ação explícita de cadastro da parada.
              </p>
              <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                Base legal: execução de contrato e consentimento ao conceder a
                permissão de câmera.
              </p>
            </PrivacyCard>

            <PrivacyCard number={4} title="Localização (GPS)">
              <p className="text-base leading-[1.75]">
                O Rotivy utiliza localização GPS (permissões de localização
                precisa e aproximada) para:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>Exibição do mapa operacional em tempo real;</li>
                <li>Geocodificação de endereços de paradas;</li>
                <li>Otimização de rotas e cálculo de sequência de entregas;</li>
                <li>Acompanhamento da execução de entregas em campo.</li>
              </ul>
              <p className="mt-4 text-base leading-[1.75]">
                Os dados de localização são vinculados à sua operação logística e
                não são compartilhados com terceiros para fins publicitários ou de
                rastreamento comportamental.
              </p>
              <p className="mt-3 text-sm text-[#94a3b8]/70 italic">
                Base legal: execução de contrato e consentimento ao conceder a
                permissão de localização.
              </p>
            </PrivacyCard>

            <PrivacyCard number={5} title="Armazenamento Local e Sincronização">
              <p className="text-base leading-[1.75]">
                O Rotivy utiliza armazenamento local no dispositivo para cache
                operacional, incluindo:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>Rotas, paradas e dados de execução;</li>
                <li>Snapshots de otimização e preferências do aplicativo;</li>
                <li>Histórico recente e estados de interface operacional;</li>
                <li>Fila de sincronização preparada para evolução futura.</li>
              </ul>
              <p className="mt-4 text-base leading-[1.75]">
                Dados de perfil, configuração e foto são sincronizados com
                Firebase (Firestore e Storage). Rotas e paradas permanecem
                majoritariamente no dispositivo na versão atual do aplicativo.
                Esses dados locais podem ser removidos ao encerrar sessão, limpar
                dados do app ou desinstalar o aplicativo.
              </p>
            </PrivacyCard>

            <PrivacyCard number={6} title="Permissões do Dispositivo">
              <p className="text-base leading-[1.75]">
                O aplicativo solicita as seguintes permissões, apenas quando
                necessário para funcionalidades operacionais:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>Câmera — scanner de etiquetas e códigos;</li>
                <li>Localização — mapa, geocodificação e execução de rotas;</li>
                <li>Notificações — alertas operacionais e comunicações do serviço;</li>
                <li>
                  Leitura de mídia/imagens — seleção de foto de perfil na galeria.
                </li>
              </ul>
              <p className="mt-4 text-base leading-[1.75]">
                Você pode revogar permissões nas configurações do sistema Android.
                Algumas funções podem ficar indisponíveis sem as permissões
                correspondentes.
              </p>
            </PrivacyCard>

            <PrivacyCard number={7} title="Firebase e Infraestrutura">
              <div className="space-y-6">
                <p className="text-base leading-[1.75]">
                  Utilizamos serviços Google Firebase para viabilizar o
                  funcionamento do Rotivy:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-[1.75]">
                  <li>Firebase Authentication — autenticação de usuários;</li>
                  <li>Cloud Firestore — perfil, setup e metadados de conta;</li>
                  <li>Firebase Storage — foto de perfil;</li>
                  <li>Firebase Cloud Messaging — notificações;</li>
                  <li>Firebase Crashlytics — diagnóstico de falhas técnicas.</li>
                </ul>
                <p className="text-base leading-[1.75]">
                  Para mapas, geocodificação e otimização de rotas, o aplicativo
                  pode utilizar APIs Google Maps e Google Routes. Os dados
                  trafegam com criptografia em trânsito (TLS).
                </p>
                <p className="text-base leading-[1.75]">
                  O Rotivy não utiliza Firebase Analytics nem ferramentas de
                  rastreamento comportamental.
                </p>
                <p className="text-sm text-[#94a3b8]/70 italic">
                  Base legal: execução de contrato e legítimo interesse para
                  estabilidade e segurança do serviço.
                </p>
              </div>
            </PrivacyCard>

            <PrivacyCard number={8} title="Compartilhamento de Dados">
              <p className="text-base leading-[1.75]">
                Os dados podem ser processados por terceiros estritamente
                necessários ao funcionamento do serviço:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.75]">
                <li>
                  Google Firebase (Authentication, Firestore, Storage, Cloud
                  Messaging e Crashlytics);
                </li>
                <li>Google Maps e Google Routes (mapas e otimização de rotas);</li>
                <li>Formspree (envio de mensagens de contato e suporte).</li>
              </ul>
              <p className="mt-6 font-medium text-white">
                Não vendemos, alugamos ou comercializamos dados pessoais.
              </p>
            </PrivacyCard>

            <PrivacyCard number={9} title="Direitos do Titular de Dados">
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

            <PrivacyCard number={10} title="Exclusão de Conta">
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
                relacionados ao perfil, configuração e registros vinculados à
                conta. Dados operacionais locais devem ser removidos separadamente
                pelo aplicativo ou pelas configurações do sistema.
              </p>
            </PrivacyCard>

            <PrivacyCard number={11} title="Segurança das Informações">
              <p className="text-base leading-[1.75]">
                Aplicamos regras de segurança no Firestore, autenticação
                obrigatória para acesso aos dados, reautenticação para alteração
                de senha e isolamento de dados por usuário. Adotamos medidas
                técnicas e organizacionais adequadas para proteger os dados
                pessoais contra acesso não autorizado, perda, alteração ou
                divulgação indevida.
              </p>
            </PrivacyCard>

            <PrivacyCard number={12} title="Alterações e Contato">
              <p className="text-base leading-[1.75]">
                Esta Política de Privacidade poderá ser atualizada periodicamente
                para refletir melhorias no aplicativo ou alterações legais.
                Recomendamos a revisão regular desta página.
              </p>
              <p className="mt-6 text-base leading-[1.75]">
                Para dúvidas relacionadas à privacidade ou ao tratamento de dados
                pessoais, entre em contato:
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
