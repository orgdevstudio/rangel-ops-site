/**
 * Conteúdo editorial da landing de conversão do DriveFlow.
 * Mídia: ver driveflow-media.ts (paths desacoplados).
 */

export const driveflowLanding = {
  meta: {
    title: "DriveFlow | Decida melhor antes de aceitar uma corrida",
    description:
      "O DriveFlow analisa a oferta no Uber e na 99 e mostra se a corrida vale a pena — com os seus critérios. Aplicativo Android para motoristas.",
  },

  hero: {
    eyebrow: "DriveFlow · Motoristas de aplicativo",
    badge: "Disponível no Android",
    title: "Decida melhor antes de aceitar uma corrida.",
    subtitle:
      "A oferta aparece. O DriveFlow analisa e mostra se vale a pena — com os seus critérios.",
    primaryCta: "Baixar na Google Play",
    secondaryCta: "Conhecer o produto",
    secondaryHref: "#produto",
  },

  problem: {
    eyebrow: "O problema",
    title: "Aceitar corrida no achismo custa caro",
    featured: {
      title: "A oferta aparece. Você tem poucos segundos para decidir.",
      description:
        "Valor, distância, tempo e o que realmente sobra. Fazer essa conta de cabeça, no trânsito, não é prático.",
    },
    items: [
      {
        title: "Valor da corrida",
        description:
          "O número na tela não diz sozinho se aquela corrida vale o seu tempo.",
      },
      {
        title: "Distância e tempo",
        description:
          "Km e minutos mudam o que sobra — e você precisa enxergar isso na hora.",
      },
      {
        title: "Decisão rápida",
        description:
          "A oferta não espera. Sem clareza, aceitar ou recusar vira achismo.",
      },
    ],
  },

  transformation: {
    eyebrow: "A transformação",
    title: "Do achismo ao controle",
    titleAccent: "controle",
    subtitle:
      "A oferta aparece. O DriveFlow analisa. Você decide com o que realmente importa.",
    before: {
      label: "Antes",
      title: "Corrida no achismo",
      points: [
        "Conta de cabeça no trânsito",
        "Valor, km e tempo misturados",
        "Aceitar ou recusar no feeling",
      ],
    },
    bridge: {
      label: "DriveFlow",
      title: "Uma plataforma",
      description:
        "O DriveFlow no celular, no carro, durante a jornada. Feito para quem trabalha no Uber e na 99.",
    },
    after: {
      label: "Depois",
      title: "Decisão sob controle",
      points: [
        "Vale a pena, avaliar ou não vale a pena",
        "Números claros antes do aceite",
        "Você decide e acompanha a jornada",
      ],
    },
  },

  criteria: {
    eyebrow: "Os seus critérios",
    title: "Você define o que vale a pena",
    subtitle:
      "Nenhuma corrida é igual. Você escolhe os ganhos mínimos e o DriveFlow usa isso em cada oferta.",
    items: [
      {
        mediaKey: "definirGanhos" as const,
        eyebrow: "Definir Ganhos",
        title: "Diga quanto precisa ganhar",
        description:
          "Ajuste ganho por km, por hora, por minuto e o valor mínimo da corrida. Dá para escolher carro ou moto.",
      },
      {
        mediaKey: "overlayStudio" as const,
        eyebrow: "Personalizar indicador na tela",
        title: "O indicador do seu jeito",
        description:
          "Escolha o que aparece sobre a oferta, o tamanho e a posição — para ler rápido sem atrapalhar a direção.",
      },
    ],
  },

  showcase: {
    id: "produto",
    eyebrow: "A jornada",
    title: "Do monitoramento ao fechamento",
    subtitle:
      "Além de decidir a corrida, você liga o dia, vê o lucro e fecha as contas.",
    items: [
      {
        mediaKey: "home" as const,
        eyebrow: "Home",
        title: "Ligue o dia e saia para trabalhar",
        description:
          "Leitura de tela, botão flutuante e jornada de trabalho — prontos para a rua.",
      },
      {
        mediaKey: "resumoFinanceiro" as const,
        eyebrow: "Resumo financeiro",
        title: "O lucro do dia, na hora que você precisa",
        description:
          "Acompanhe lucro, faturamento e meta sem sair da Home.",
      },
      {
        mediaKey: "fechamento" as const,
        eyebrow: "Fechamento do Dia",
        title: "O que entrou, o que saiu, o que sobrou",
        description:
          "Informe o faturamento e os gastos. O registro é seu — o DriveFlow não puxa as corridas sozinho.",
      },
      {
        mediaKey: "historico" as const,
        eyebrow: "Histórico",
        title: "Os dias que você já fechou",
        description:
          "Reabra fechamentos anteriores e veja como a jornada vem evoluindo.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    items: [
      {
        question: "Como o DriveFlow analisa as corridas?",
        answer:
          "Quando a oferta aparece no Uber ou na 99, o DriveFlow lê valor, distância e tempo na tela, compara com os ganhos que você definiu e mostra o indicador antes do aceite. Ele não registra o faturamento sozinho — o Fechamento do Dia é você quem preenche.",
      },
      {
        question: "O DriveFlow funciona com Uber e 99?",
        answer:
          "Sim. O DriveFlow analisa as ofertas do Uber e da 99, uma de cada vez, na hora em que elas aparecem.",
      },
      {
        question: "O que preciso configurar para começar?",
        answer:
          "Defina seus ganhos, permita a leitura de tela e o indicador sobre outros apps, e ligue a Leitura de tela na Home. Com isso, o DriveFlow consegue analisar a oferta enquanto você trabalha.",
      },
      {
        question: "Como funcionam os critérios de decisão?",
        answer:
          "Em Definir Ganhos, você escolhe ganho por km, por hora, por minuto e o valor mínimo da corrida. O indicador responde com vale a pena, avaliar ou não vale a pena — de acordo com o que você configurou.",
      },
      {
        question: "O DriveFlow funciona em celulares Android?",
        answer:
          "Sim. O DriveFlow é um aplicativo Android. Você baixa pela Google Play e usa no celular, durante a jornada.",
      },
      {
        question: "Como funciona o monitoramento?",
        answer:
          "Com a Leitura de tela ligada, o indicador aparece sobre o Uber ou a 99 quando uma oferta chega. O botão flutuante é outro controle: ele serve para jornada e fechamento — não é o indicador da corrida.",
      },
      {
        question: "Como funciona o Premium?",
        answer:
          "O DriveFlow Premium libera a leitura de tela, o botão flutuante e a gravação. Fechamento do Dia e histórico continuam disponíveis. A assinatura é pela Google Play, dentro do aplicativo.",
      },
      {
        question: "Como funciona o período de teste?",
        answer:
          "Há um período de teste de 3 dias pela Google Play, para quem ainda não assinou. Depois, você escolhe o plano mensal ou anual no próprio app.",
      },
      {
        question: "Funciona em Xiaomi, Redmi, POCO e Samsung?",
        answer:
          "Sim, o DriveFlow é feito para Android. Em Xiaomi, Redmi, POCO e Realme, o sistema costuma limitar apps em segundo plano — pode ser preciso liberar início automático e bateria sem restrições. No app, o guia Prepare seu aparelho mostra o caminho. Em Samsung, em geral não precisa desse passo extra.",
      },
    ],
  },

  instagram: {
    url: "https://www.instagram.com/driveflowbr/",
    eyebrow: "Comunidade",
    title: "Acompanhe o DriveFlow de perto",
    subtitle: "Novidades e dicas para a jornada em",
    handle: "@driveflowbr",
    ctaLabel: "Seguir no Instagram",
  },

  finalCta: {
    title: "Pronto para decidir melhor?",
    subtitle: "Baixe o DriveFlow e veja se a corrida vale a pena antes de aceitar.",
    microcopy: "Disponível no Android",
    ctaLabel: "Baixar na Google Play",
  },
} as const;

export type DriveflowLanding = typeof driveflowLanding;
