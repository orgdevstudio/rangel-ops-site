/**
 * Copy editorial da página Sobre (institucional).
 * Sem citação de aplicativos específicos.
 */

export const sobreLanding = {
  meta: {
    title: "Sobre",
    description:
      "Conheça a RangelOps: empresa que desenvolve soluções digitais em aplicativos para organização, automação e crescimento de operações. Missão, visão e como trabalhamos.",
  },

  intro: {
    eyebrow: "Institucional",
    title: "RangelOps",
    subtitle:
      "Desenvolvemos soluções digitais em aplicativos para negócios que precisam de organização, automação e crescimento — com clareza no dia a dia da operação.",
  },

  who: {
    eyebrow: "Quem somos",
    title: "Uma empresa feita para a operação real",
    body: "A RangelOps nasceu para resolver um problema recorrente: negócios que crescem, mas perdem o controle em planilhas, ferramentas dispersas e decisões no feeling. Criamos aplicativos pensados para o Brasil — estáveis, seguros e capazes de evoluir junto com quem usa.",
  },

  missionVision: {
    mission: {
      title: "Missão",
      body: "Dar clareza e controle operacional a equipes e gestores — para que o tempo vá para decisões que movem o negócio, não para tarefas que travam o crescimento.",
    },
    vision: {
      title: "Visão",
      body: "Ser referência em soluções digitais para operações no Brasil: um ecossistema de aplicativos que se complementam e acompanham o negócio no tempo.",
    },
  },

  how: {
    eyebrow: "Como trabalhamos",
    title: "Produto, segurança e proximidade",
    subtitle:
      "Três princípios que guiam tudo o que construímos — do primeiro uso à evolução contínua.",
    pillars: [
      {
        title: "Produto que evolui",
        description:
          "Cada solução é pensada para começar simples, permanecer estável e crescer sem trocar de base. Atualizações contínuas, com qualidade e previsibilidade.",
      },
      {
        title: "Segurança no centro",
        description:
          "LGPD, proteção de dados e governança fazem parte do desenho do produto — não são um anexo. Seus dados permanecem sob seu controle.",
      },
      {
        title: "Suporte próximo",
        description:
          "Equipe alinhada ao seu negócio: acompanhamento real, resposta clara e evolução contínua com base no que a operação precisa.",
      },
    ],
  },

  cta: {
    title: "Quer entender como podemos ajudar o seu negócio?",
    subtitle: "Converse com a nossa equipe. Sem compromisso.",
    primaryLabel: "Falar com nossa equipe",
    primaryHref: "/contato",
    secondaryLabel: "Ver nossos aplicativos",
    secondaryHref: "/aplicativos",
  },
} as const;

export type SobreLanding = typeof sobreLanding;
