import type { App } from "@/types";

/**
 * Lista de aplicativos da RangelOps
 * Centraliza dados para reutilização em grids e páginas individuais
 */
export const apps: App[] = [
  {
    id: "1",
    name: "SellerFlow",
    slug: "sellerflow",
    description:
      "SellerFlow é uma solução inteligente para vendedores que precisam controlar precificação, acompanhar fechamentos e consolidar resultados de vendas com precisão.\n\nO aplicativo permite calcular preços corretamente, organizar custos, analisar lucro líquido e visualizar o desempenho consolidado dos produtos de forma prática e estratégica. Com a mesma conta do Android, a versão Web leva essa rotina para o computador — com sincronização automática entre os dispositivos.\n\nIdeal para quem vende em marketplaces (Shopee) e quer transformar dados em decisões mais lucrativas, no celular ou no desktop.",
    shortDescription:
      "Precificação, fechamentos e resultados de vendas — no Android e no Web, com a mesma conta.",
    icon: "/images/apps/sellerflow.png",
    status: "disponivel",
    href: "/aplicativos/sellerflow",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.sellerflow.app",
    hasLegalPages: true,
    webAccess: {
      loginUrl: "https://sellerflow.rangelops.com/login",
    },
    featureHighlights: [
      "Precificação, custos e lucro líquido com clareza para cada produto e fechamento.",
      "Assinatura com acesso Android e Web na mesma conta — continue de onde parou.",
      "Sincronização automática entre celular e computador, sem retrabalho.",
      "Produtividade no desktop para analisar, consolidar e decidir com mais conforto.",
    ],
  },
  {
    id: "2",
    name: "CiviFlow",
    slug: "civiflow",
    description:
      "CiviFlow reúne em um só fluxo a gestão de obras civis e o acompanhamento do que acontece no canteiro: etapas, responsáveis e prazos ficam organizados para reduzir retrabalho e falhas de comunicação.\n\nVocê controla materiais (pedidos, entradas, saídas e saldo), despesas por fase da obra e indicadores de avanço físico frente ao planejado, com leitura clara de custo e progresso.\n\nO app apoia construtoras, empreiteiros e equipes de campo que precisam alinhar tarefas diárias, estoque e orçamento sem depender de planilhas dispersas.",
    shortDescription:
      "Gestão de obras: tarefas, materiais, custos e progresso da construção em um só lugar.",
    status: "em-breve",
    href: "/aplicativos/civiflow",
    hasLegalPages: true,
    featureHighlights: [
      "Visão integrada da obra: etapas, responsáveis e organização de tarefas para manter equipes e prazos alinhados ao planejamento.",
      "Controle de materiais com rastreio de entradas, saídas e saldo, reduzindo desperdício e falta de insumos no canteiro.",
      "Custos por fase e leitura de despesas frente ao orçamento, com apoio a decisões financeiras durante a construção.",
      "Acompanhamento de progresso físico da obra e indicadores de avanço para comparar execução com o que foi planejado.",
    ],
  },
  {
    id: "3",
    name: "DriveFlow",
    slug: "driveflow",
    description:
      "DriveFlow é o aplicativo da Rangel Ops voltado a motoristas que atuam em plataformas de transporte por aplicativo. O foco é apoiar decisões financeiras com cálculos e leitura de lucro no contexto de cada corrida.\n\nO app reúne indicadores e simulações para que o motorista compreenda, de forma objetiva, o retorno esperado antes e durante o trabalho nas ruas.\n\nQuando a corrida é tocada ou aceita, o DriveFlow verifica se a oferta é favorável ou desfavorável conforme regras e parâmetros definidos pelo próprio motorista. A análise gera uma conclusão rápida e clara, exibida na tela para orientar a decisão com segurança e transparência.",
    shortDescription:
      "Cálculos e lucro para motoristas de aplicativo: análise rápida de cada corrida antes de você seguir.",
    status: "em-breve",
    href: "/aplicativos/driveflow",
    hasLegalPages: true,
  },
  {
    id: "4",
    name: "Rotivy",
    slug: "rotivy",
    description:
      "Rotivy é uma plataforma premium de roteirização inteligente e gestão de entregas para operações que precisam organizar paradas, otimizar deslocamentos e executar entregas com precisão no dia a dia.\n\nO aplicativo reúne mapa operacional em tempo real, otimização de rotas, scanner de etiquetas com leitura on-device e importação de planilhas para montar rotas rapidamente — tudo pensado para reduzir retrabalho e ganhar visibilidade sobre a operação.\n\nIdeal para motoristas, entregadores e equipes de campo que precisam acompanhar paradas, registrar execução e tomar decisões operacionais com clareza, sem depender de ferramentas dispersas.",
    shortDescription:
      "Roteirização inteligente, mapa operacional e gestão de entregas para motoristas e entregadores.",
    icon: "/images/apps/rotivy.png",
    status: "em-breve",
    href: "/aplicativos/rotivy",
    hasLegalPages: true,
    ogImage: "/images/apps/rotivy.png",
    featureHighlights: [
      "Roteirização inteligente com otimização da sequência de paradas para reduzir tempo e distância percorrida.",
      "Mapa operacional em tempo real com GPS para visualizar rotas, paradas e execução no campo.",
      "Scanner de etiquetas com leitura on-device (câmera e OCR) para cadastrar entregas com agilidade.",
      "Gestão de entregas com controle de paradas, status e acompanhamento da execução em campo.",
      "Importação de planilhas CSV e XLSX para montagem rápida de rotas com múltiplas paradas.",
      "Painel operacional voltado a motoristas e entregadores que precisam de clareza na rotina diária.",
    ],
  },
  {
    id: "5",
    name: "Price ML",
    slug: "price-ml",
    description:
      "Price ML é uma calculadora inteligente de precificação desenvolvida para vendedores do Mercado Livre que precisam saber, com clareza e rapidez, quanto realmente lucram em cada venda e qual preço cobrar com margem profissional.\n\nO aplicativo reúne simulação em tempo real, cálculo automático das taxas do marketplace, modos Automático e Manual, margem desejada com preço recomendado, breakdown completo dos custos e um workspace para salvar e versionar decisões de precificação — tudo pensado para transformar um processo complexo em uma experiência simples, confiável e produtiva.\n\nIdeal para pequenos e médios empreendedores que vendem no Mercado Livre e querem precificar com inteligência, precisão e confiança, sem depender de planilhas ou cálculos manuais dispersos.",
    shortDescription:
      "Calculadora inteligente de precificação para vendedores do Mercado Livre.",
    icon: "/images/apps/price-ml.png",
    status: "em-breve",
    href: "/aplicativos/price-ml",
    hasLegalPages: true,
    ogImage: "/images/apps/price-ml.png",
    featureHighlights: [
      "Simulação em tempo real com lucro, margem e ROI calculados enquanto você ajusta preço e custos.",
      "Modo Automático com regras do Mercado Livre por categoria e tipo de anúncio (Clássico ou Premium).",
      "Modo Manual com controle total de comissão (%) e taxa fixa (R$) para cenários personalizados.",
      "Margem desejada com preço recomendado aplicável em um toque, para atingir sua meta de lucratividade.",
      "Breakdown completo da composição de custos e do fluxo de dinheiro, da venda ao lucro líquido.",
      "Análise da precificação com indicador de saúde da margem e orientações objetivas para decisão.",
      "Workspace de produtos para salvar, versionar, filtrar e recalcular simulações com regras atualizadas.",
      "Funciona offline após o login — simule e decida sem depender de conexão com a internet.",
    ],
  },
];
