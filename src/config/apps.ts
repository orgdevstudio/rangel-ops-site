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
      "SellerFlow é uma solução inteligente para vendedores que precisam controlar precificação, acompanhar fechamentos e consolidar resultados de vendas com precisão.\n\nO aplicativo permite calcular preços corretamente, organizar custos, analisar lucro líquido e visualizar o desempenho consolidado dos produtos de forma prática e estratégica.\n\nIdeal para quem vende em marketplaces (Shopee) e quer transformar dados em decisões mais lucrativas.",
    shortDescription:
      "Solução inteligente para vendedores: precificação, fechamentos e resultados de vendas com precisão.",
    status: "em-breve",
    href: "/aplicativos/sellerflow",
  },
  {
    id: "2",
    name: "DriveFlow",
    slug: "driveflow",
    description:
      "DriveFlow é o aplicativo da Rangel Ops voltado a motoristas que atuam em plataformas de transporte por aplicativo. O foco é apoiar decisões financeiras com cálculos e leitura de lucro no contexto de cada corrida.\n\nO app reúne indicadores e simulações para que o motorista compreenda, de forma objetiva, o retorno esperado antes e durante o trabalho nas ruas.\n\nQuando a corrida é tocada ou aceita, o DriveFlow verifica se a oferta é favorável ou desfavorável conforme regras e parâmetros definidos pelo próprio motorista. A análise gera uma conclusão rápida e clara, exibida na tela para orientar a decisão com segurança e transparência.",
    shortDescription:
      "Cálculos e lucro para motoristas de aplicativo: análise rápida de cada corrida antes de você seguir.",
    status: "em-breve",
    href: "/aplicativos/driveflow",
  },
];
