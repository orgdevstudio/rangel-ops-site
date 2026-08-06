/**
 * Conteúdo editorial das páginas legais institucionais (Termos + Privacidade).
 * Genérico SaaS/LGPD — sem citar apps específicos.
 */

export type LegalSection = {
  title: string;
  paragraphs: readonly string[];
};

export type LegalDocument = {
  id: "termos" | "privacidade";
  href: string;
  navLabel: string;
  meta: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  lead: string;
  updatedLabel: string;
  sections: readonly LegalSection[];
  cta: {
    title: string;
    subtitle: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

const contactEmail = "support@rangelops.com";

export const legalLanding = {
  nav: [
    { id: "termos" as const, href: "/legal/termos", label: "Termos de Uso" },
    {
      id: "privacidade" as const,
      href: "/legal/privacidade",
      label: "Política de Privacidade",
    },
  ],

  termos: {
    id: "termos" as const,
    href: "/legal/termos",
    navLabel: "Termos de Uso",
    meta: {
      title: "Termos de Uso",
      description:
        "Termos e condições de uso dos serviços e aplicativos da RangelOps. Leia antes de utilizar nossas soluções.",
    },
    eyebrow: "Legal",
    title: "Termos de Uso",
    lead: "Este documento estabelece as condições gerais de uso dos serviços e aplicativos oferecidos pela RangelOps. Ao acessar ou utilizar nossos serviços, você concorda com estes termos.",
    updatedLabel: "Última atualização: agosto de 2026",
    sections: [
      {
        title: "1. Aceitação dos Termos",
        paragraphs: [
          "O uso dos serviços da RangelOps está condicionado à aceitação integral destes Termos de Uso. Caso não concorde com algum dos itens, solicitamos que não utilize nossos serviços.",
          "Podemos atualizar estes Termos periodicamente. A data da última atualização aparece no topo desta página. O uso continuado após alterações constitui aceitação da versão vigente.",
        ],
      },
      {
        title: "2. Descrição dos Serviços",
        paragraphs: [
          "A RangelOps desenvolve e disponibiliza aplicativos e soluções digitais para organização, automação e apoio a operações de negócios.",
          "O escopo, as funcionalidades e as condições comerciais de cada solução são descritos em suas respectivas páginas e nos canais oficiais de contratação (por exemplo, lojas de aplicativos ou ambientes Web).",
        ],
      },
      {
        title: "3. Conta e responsabilidades do usuário",
        paragraphs: [
          "Quando o serviço exigir cadastro, você é responsável por manter credenciais seguras e por todas as atividades realizadas sob sua conta.",
          "As informações fornecidas no cadastro devem ser verdadeiras, completas e atualizadas. Notifique-nos em caso de uso não autorizado da conta.",
        ],
      },
      {
        title: "4. Uso adequado",
        paragraphs: [
          "Você compromete-se a utilizar os serviços de forma responsável, em conformidade com a legislação vigente e respeitando direitos de terceiros.",
          "É vedado utilizar os serviços para fins ilícitos, tentar obter acesso não autorizado a sistemas, interferir na disponibilidade da plataforma ou reproduzir conteúdo protegido sem autorização.",
        ],
      },
      {
        title: "5. Propriedade intelectual",
        paragraphs: [
          "Marcas, interfaces, códigos, textos e demais elementos dos serviços da RangelOps são protegidos por direitos de propriedade intelectual.",
          "O uso dos serviços não transfere a você qualquer direito de propriedade sobre a plataforma, salvo licença de uso limitada conforme o plano ou contrato aplicável.",
        ],
      },
      {
        title: "6. Disponibilidade e alterações",
        paragraphs: [
          "Empregamos esforços razoáveis para manter os serviços disponíveis, mas não garantimos funcionamento ininterrupto ou isento de erros.",
          "Podemos modificar, suspender ou descontinuar funcionalidades, com comunicação quando for razoável e compatível com a natureza da mudança.",
        ],
      },
      {
        title: "7. Limitação de responsabilidade",
        paragraphs: [
          "Na medida permitida pela lei aplicável, a RangelOps não se responsabiliza por danos indiretos, lucros cessantes ou perdas decorrentes do uso ou da impossibilidade de uso dos serviços, salvo dolo ou hipóteses legais inafastáveis.",
          "Decisões de negócio tomadas com base em informações exibidas nos aplicativos são de responsabilidade do usuário.",
        ],
      },
      {
        title: "8. Privacidade",
        paragraphs: [
          "O tratamento de dados pessoais segue nossa Política de Privacidade, parte integrante da relação com os usuários dos serviços.",
        ],
      },
      {
        title: "9. Contato",
        paragraphs: [
          `Dúvidas sobre estes Termos podem ser enviadas para ${contactEmail} ou pelo formulário de contato do site.`,
        ],
      },
    ],
    cta: {
      title: "Dúvidas sobre estes Termos?",
      subtitle: "Nossa equipe pode esclarecer pontos sobre o uso dos serviços.",
      primaryLabel: "Falar com nossa equipe",
      primaryHref: "/contato",
      secondaryLabel: "Ver Política de Privacidade",
      secondaryHref: "/legal/privacidade",
    },
  } satisfies LegalDocument,

  privacidade: {
    id: "privacidade" as const,
    href: "/legal/privacidade",
    navLabel: "Política de Privacidade",
    meta: {
      title: "Política de Privacidade",
      description:
        "Política de privacidade da RangelOps: como coletamos, utilizamos e protegemos dados pessoais em conformidade com a LGPD.",
    },
    eyebrow: "Legal",
    title: "Política de Privacidade",
    lead: "A RangelOps está comprometida com a proteção da privacidade e dos dados pessoais. Esta política descreve, de forma clara, como coletamos, utilizamos e protegemos suas informações.",
    updatedLabel: "Última atualização: agosto de 2026",
    sections: [
      {
        title: "1. Dados coletados",
        paragraphs: [
          "Coletamos informações que você fornece ao utilizar o site ou nossos serviços — por exemplo nome, e-mail e demais dados necessários à operação dos aplicativos contratados.",
          "Também podemos coletar dados técnicos de uso (como tipo de dispositivo, logs de acesso e identificadores) para segurança, desempenho e melhoria dos serviços.",
        ],
      },
      {
        title: "2. Finalidade do tratamento",
        paragraphs: [
          "Os dados são utilizados para prestar e melhorar os serviços, autenticar usuários, comunicar assuntos relacionados à conta ou ao suporte, e cumprir obrigações legais.",
          "Não utilizamos dados pessoais para finalidades incompatíveis com esta política sem base legal adequada ou, quando exigido, sem o seu consentimento.",
        ],
      },
      {
        title: "3. Bases legais (LGPD)",
        paragraphs: [
          "Tratamos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), com base, conforme o caso, na execução de contrato, no legítimo interesse, no cumprimento de obrigação legal ou no consentimento.",
          "Quando o tratamento depender de consentimento, você poderá revogá-lo a qualquer momento, observados os limites legais e eventuais impactos na continuidade do serviço.",
        ],
      },
      {
        title: "4. Compartilhamento",
        paragraphs: [
          "Podemos compartilhar dados com prestadores que auxiliam na operação (hospedagem, e-mail, analytics, processamento de pagamentos), sempre sob obrigações de confidencialidade e segurança compatíveis com a finalidade.",
          "Não vendemos dados pessoais. O compartilhamento com autoridades ocorre apenas quando exigido por lei ou ordem legítima.",
        ],
      },
      {
        title: "5. Segurança",
        paragraphs: [
          "Adotamos medidas técnicas e organizacionais razoáveis para proteger dados contra acesso não autorizado, perda ou alteração indevida.",
          "Nenhum sistema é totalmente isento de risco; recomendamos o uso de senhas fortes e a proteção dos seus dispositivos de acesso.",
        ],
      },
      {
        title: "6. Direitos do titular",
        paragraphs: [
          "Nos termos da LGPD, você pode solicitar acesso, correção, anonimização, portabilidade, eliminação de dados desnecessários, informação sobre compartilhamentos e revogação de consentimento, quando aplicável.",
          `Para exercer seus direitos, entre em contato pelo e-mail ${contactEmail} ou pelo formulário de contato do site. Poderemos solicitar confirmação de identidade para proteger sua conta.`,
        ],
      },
      {
        title: "7. Retenção",
        paragraphs: [
          "Mantemos dados pelo tempo necessário às finalidades descritas nesta política, ao cumprimento de obrigações legais e à defesa de direitos em processos eventuais.",
          "Após o encerramento da necessidade, os dados são eliminados ou anonimizados, salvo retenção exigida por lei.",
        ],
      },
      {
        title: "8. Cookies e tecnologias semelhantes",
        paragraphs: [
          "O site institucional pode utilizar cookies ou tecnologias semelhantes para funcionamento básico, preferências e, quando aplicável, medição de audiência.",
          "Você pode gerenciar cookies nas configurações do navegador. A desativação de alguns cookies pode afetar partes da experiência no site.",
        ],
      },
      {
        title: "9. Alterações",
        paragraphs: [
          "Esta política pode ser atualizada para refletir mudanças nos serviços ou na legislação. A data da última atualização aparece no topo desta página.",
          "Recomendamos a revisão periódica deste documento.",
        ],
      },
      {
        title: "10. Contato",
        paragraphs: [
          `Dúvidas sobre privacidade ou tratamento de dados: ${contactEmail} ou formulário de contato em rangelops.com/contato.`,
        ],
      },
    ],
    cta: {
      title: "Dúvidas sobre esta Política?",
      subtitle: "Fale conosco sobre privacidade, dados pessoais ou exercício de direitos LGPD.",
      primaryLabel: "Falar com nossa equipe",
      primaryHref: "/contato",
      secondaryLabel: "Ver Termos de Uso",
      secondaryHref: "/legal/termos",
    },
  } satisfies LegalDocument,
} as const;

export type LegalLanding = typeof legalLanding;
