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
];
