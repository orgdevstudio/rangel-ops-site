/**
 * Conteúdo editorial da landing de conversão do SellerFlow.
 * Mídia: ver sellerflow-media.ts (paths desacoplados).
 */

export const sellerflowLanding = {
  meta: {
    title: "SellerFlow | Precificação e lucro na Shopee — Android + ERP Web",
    description:
      "Descubra quanto realmente sobra em cada venda na Shopee. Precificação inteligente, gestão de produtos e controle financeiro no Android e no ERP Web, com a mesma conta.",
  },

  hero: {
    eyebrow: "SellerFlow · Shopee",
    title: "Descubra quanto realmente sobra em cada venda.",
    subtitle:
      "Precificação, lucro e controle na Shopee — no Android e no ERP Web, com a mesma conta.",
    primaryCta: "Baixar na Google Play",
    secondaryCta: "Conhecer o produto",
    secondaryHref: "#produto",
    badge: "Disponível também na Web",
  },

  /**
   * Diferenciais da plataforma.
   * Quando houver métricas oficiais, esta seção pode ser trocada por prova social numérica
   * sem alterar o restante da landing.
   */
  differentiators: {
    title: "Mais do que uma calculadora. Uma plataforma para quem vende na Shopee.",
    subtitle:
      "Tudo o que você precisa para controlar sua operação na Shopee em um único lugar.",
    eyebrow: "Por que escolher o SellerFlow?",
    items: [
      {
        title: "Precificação Inteligente",
        description: "Calcule lucro, taxas e custos com precisão.",
      },
      {
        title: "Plataforma em Evolução",
        description: "Novos recursos e melhorias constantes.",
      },
    ],
  },

  problem: {
    eyebrow: "O problema",
    title: "Vender na Shopee sem clareza de lucro custa caro",
    featured: {
      title: "Você vende, mas não sabe quanto realmente sobra.",
      description:
        "Taxas, custos e margem se misturam — e no fim do mês o número que importa ainda é um mistério.",
    },
    items: [
      {
        title: "Precificação errada",
        description: "Um preço mal calculado pode parecer venda — e virar prejuízo.",
      },
      {
        title: "Planilhas espalhadas",
        description: "Contas em vários lugares, sem visão única da operação.",
      },
      {
        title: "Tempo perdido",
        description: "Horas fazendo contas manuais em vez de focar em vender melhor.",
      },
    ],
  },

  solution: {
    eyebrow: "A transformação",
    title: "Do achismo ao controle",
    subtitle:
      "SellerFlow nasceu para acabar com as incertezas e te dar clareza em cada decisão do seu negócio.",
    before: {
      label: "Antes",
      title: "Operação no escuro",
      points: [
        "Lucro incerto depois das taxas",
        "Planilhas e cálculos manuais",
        "Decisões no feeling",
      ],
    },
    bridge: {
      label: "SellerFlow",
      title: "Uma plataforma",
      description: "Android + ERP Web, mesma conta, dados sincronizados.",
    },
    after: {
      label: "Depois",
      title: "Resultado sob controle",
      points: [
        "Lucro líquido antes de anunciar",
        "Produtos e fechamentos organizados",
        "Continuidade no celular e no PC",
      ],
    },
  },

  showcase: {
    id: "produto",
    eyebrow: "Por dentro",
    title: "Conheça o SellerFlow por dentro",
    subtitle: "As telas que você usa no dia a dia — no celular e no desktop.",
    items: [
      {
        mediaKey: "calculator" as const,
        eyebrow: "Calculadora",
        title: "Precifique com o lucro real na tela",
        description:
          "Salve precificações e veja preço e lucro líquido por produto antes de anunciar.",
      },
      {
        mediaKey: "products" as const,
        eyebrow: "Fechamento · Produtos",
        title: "Da planilha da Shopee para uma base sob controle",
        description:
          "Importe o fechamento da planilha: custos, insumos e variações organizados.",
      },
      {
        mediaKey: "closings" as const,
        eyebrow: "Fechamentos",
        title: "Feche períodos com clareza",
        description:
          "Veja faturamento, lucro líquido e margem do período em um só lugar.",
      },
      {
        mediaKey: "home" as const,
        eyebrow: "Home",
        title: "O lucro do último fechamento, logo na entrada",
        description:
          "Abra o app e veja o resultado do período — com atalho para Calculadora e Fechamento.",
      },
      {
        mediaKey: "webErp" as const,
        eyebrow: "ERP Web",
        title: "A mesma operação, com o conforto do desktop",
        description:
          "Continue no computador exatamente de onde parou no Android.",
      },
    ],
  },

  howItWorks: {
    eyebrow: "Como funciona",
    title: "Três passos para ter o controle na mão",
    steps: [
      {
        step: "01",
        title: "Baixe o app e crie sua conta",
        description: "Instale pela Google Play e comece em poucos minutos.",
      },
      {
        step: "02",
        title: "Precifique e organize seus produtos",
        description: "Use a calculadora e monte sua base com lucro real.",
      },
      {
        step: "03",
        title: "Use no Android e no ERP Web",
        description: "Tudo sincronizado — trabalhe onde for mais produtivo.",
      },
    ],
  },

  plans: {
    id: "planos",
    eyebrow: "Assinatura",
    title: "Uma plataforma. Dois níveis. ERP Web incluso.",
    banner: "ERP Web incluso para assinantes",
    subtitle: "Conheça os planos e assine pela Google Play — qualquer nível já inclui o ERP Web.",
    columns: ["Essencial", "Premium"] as const,
    rows: [
      { feature: "Precificação inteligente", essencial: true, premium: true },
      { feature: "Calculadora completa", essencial: true, premium: true },
      { feature: "Android + ERP Web", essencial: true, premium: true },
      { feature: "Fechamentos", essencial: false, premium: true },
      { feature: "Gestão completa", essencial: false, premium: true },
    ],
    ctaNote: "Conheça os planos e assine no app.",
  },

  faq: {
    id: "faq",
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    items: [
      {
        question: "Onde assino e vejo os planos?",
        answer:
          "Os planos e a assinatura são gerenciados pela Google Play, dentro do aplicativo. Baixe o SellerFlow para conhecer os detalhes e assinar.",
      },
      {
        question: "Preciso de computador para usar o SellerFlow?",
        answer:
          "Não. Você pode usar só o Android. O ERP Web é um benefício da assinatura para quem quer mais produtividade no desktop.",
      },
      {
        question: "Posso cancelar a assinatura quando quiser?",
        answer:
          "Sim. A assinatura é gerenciada pela Google Play. Você pode cancelar ou alterar o plano nas configurações de assinatura da sua conta Google, conforme as regras da loja.",
      },
      {
        question: "Preciso de internet o tempo todo?",
        answer:
          "Para sincronizar entre Android e ERP Web e manter os dados atualizados, é necessário conexão. Use o app com internet para a melhor experiência.",
      },
    ],
  },

  instagram: {
    url: "https://www.instagram.com/sellerflowbr/",
    eyebrow: "Comunidade",
    title: "Acompanhe o SellerFlow de perto",
    subtitle: "Novidades e dicas da operação em",
    handle: "@sellerflowbr",
    ctaLabel: "Seguir no Instagram",
  },

  finalCta: {
    title: "Ainda calcula suas vendas manualmente?",
    subtitle: "Comece agora a controlar seus resultados.",
    microcopy: "Acesso Android + ERP Web",
  },

  clientAccess: {
    title: "Já possui uma assinatura?",
    description:
      "Continue de onde parou utilizando a mesma conta do Android.",
    buttonLabel: "Acessar ERP Web",
  },

  pageHeader: {
    clientButtonLabel: "Já sou cliente",
  },
} as const;

export type SellerflowLanding = typeof sellerflowLanding;
