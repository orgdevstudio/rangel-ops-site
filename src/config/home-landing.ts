/**
 * Copy editorial da home RangelOps (conversão).
 */

export const homeLanding = {
  hero: {
    titleBefore: "Operações que",
    titleAccent: "escalam",
    titleAfter: "com clareza de resultado",
    subtitle:
      "Aplicativos para quem vende, precifica e opera no dia a dia — com controle real de margem, custos e rotina, sem planilha espalhada.",
    primaryCta: "Falar com especialista",
    primaryHref: "/contato",
    secondaryCta: "Ver aplicativos",
    secondaryHref: "#aplicativos",
  },

  problem: {
    leftEyebrow: "O que resolvemos",
    leftTitle: "Da desorganização à operação sob controle",
    problems: [
      "Margem e custos diluídos em planilhas que não conversam entre si.",
      "Decisões no feeling — sem visão clara do que realmente sobra.",
      "Crescer exige refazer processos ou trocar de ferramenta no meio do caminho.",
    ],
    rightEyebrow: "Para quem é",
    rightTitle: "Para quem precisa de resultado na operação",
    forWhom: [
      "Vendedores e gestores que querem precificar e fechar com lucro real.",
      "Negócios que precisam de controle no celular e no computador.",
      "Equipes que querem automação sem perder o comando do dia a dia.",
    ],
    microcopy: "Primeira conversa sem compromisso. Respondemos em breve.",
  },

  flagship: {
    eyebrow: "Disponível agora",
    title: "SellerFlow — precificação e lucro na Shopee",
    subtitle:
      "Calcule o que realmente sobra em cada venda. Android + ERP Web, mesma conta — do celular ao desktop sem retrabalho.",
    primaryCta: "Conhecer SellerFlow",
    primaryHref: "/aplicativos/sellerflow",
    secondaryCta: "Baixar na Google Play",
  },

  apps: {
    id: "aplicativos",
    title: "Nossas soluções em aplicativos",
    subtitle:
      "Comece pelo que sua operação precisa hoje — e cresça no mesmo ecossistema.",
    footerLink: "Ver página de aplicativos",
    footerHref: "/aplicativos",
  },

  why: {
    eyebrow: "Por que a RangelOps",
    title: "Construído para operação que não pode parar",
    subtitle:
      "Escalabilidade, integração, segurança e suporte — pensados para o dia a dia de quem opera de verdade.",
    pillars: [
      {
        title: "Escalável",
        description: "Do primeiro uso ao crescimento. Soluções que evoluem com você.",
      },
      {
        title: "Integrado",
        description: "Conecte com o que você já usa. Seus dados, seu controle.",
      },
      {
        title: "Seguro",
        description: "LGPD, proteção de dados e governança no centro do produto.",
      },
      {
        title: "Suporte",
        description: "Equipe alinhada ao seu negócio — resposta e acompanhamento reais.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Próximo passo",
    title: "Quer ver como isso se aplica ao seu negócio?",
    subtitle:
      "Converse com quem desenvolve as soluções. Sem compromisso — só clareza sobre o próximo passo.",
    buttonLabel: "Falar com especialista",
    buttonHref: "/contato",
  },
} as const;

export type HomeLanding = typeof homeLanding;
