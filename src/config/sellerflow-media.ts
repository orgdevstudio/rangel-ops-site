/**
 * Registry tipado de mídia do SellerFlow.
 * Substitua os arquivos em public/ com o mesmo nome — sem alterar componentes.
 */

export type MediaAspect = "phone" | "desktop" | "landscape" | "composition";

export type SellerflowMediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspect: MediaAspect;
};

export const sellerflowMedia = {
  hero: {
    src: "/images/apps/sellerflow/hero-productivity.png",
    alt: "Vendedor no desktop com visão clara de lucro, faturamento e margem no SellerFlow",
    width: 1024,
    height: 694,
    aspect: "landscape" as const,
  },

  syncComposition: {
    src: "/images/apps/sellerflow/hero-android-web.png",
    alt: "SellerFlow no Android e no ERP Web — mesma conta, sincronização automática",
    width: 1024,
    height: 682,
    aspect: "composition" as const,
  },

  solution: {
    before: {
      src: "/images/apps/sellerflow/solution/before-v1.png",
      alt: "Vendedor estressado à noite — operação no escuro sem clareza de lucro",
      width: 1024,
      height: 682,
      aspect: "landscape" as const,
    },
    platform: {
      src: "/images/apps/sellerflow/solution/platform-v1.png",
      alt: "SellerFlow no notebook e no celular — Android e ERP Web na mesma conta",
      width: 1024,
      height: 682,
      aspect: "landscape" as const,
    },
    after: {
      src: "/images/apps/sellerflow/solution/after-v1.png",
      alt: "Vendedor confiante com lucro líquido e métricas sob controle no SellerFlow",
      width: 1024,
      height: 682,
      aspect: "landscape" as const,
    },
  },

  showcase: {
    calculator: {
      src: "/images/apps/sellerflow/screenshots/calculator-v1.png",
      alt: "Calculadora SellerFlow no Android — preço de venda e lucro líquido por produto",
      width: 470,
      height: 1024,
      aspect: "phone" as const,
    },
    products: {
      src: "/images/apps/sellerflow/screenshots/products-fechamento-v1.png",
      alt: "Produtos do fechamento no SellerFlow — importados da planilha Shopee com custo e insumos",
      width: 467,
      height: 1024,
      aspect: "phone" as const,
    },
    closings: {
      src: "/images/apps/sellerflow/screenshots/fechamento-resultado-v1.png",
      alt: "Resultado do fechamento no SellerFlow — faturamento, lucro líquido e margem do período",
      width: 469,
      height: 1024,
      aspect: "phone" as const,
    },
    home: {
      src: "/images/apps/sellerflow/screenshots/home-v1.png",
      alt: "Home do SellerFlow — lucro do último fechamento e atalhos para Calculadora e Fechamento",
      width: 468,
      height: 1024,
      aspect: "phone" as const,
    },
    webErp: {
      src: "/images/apps/sellerflow/screenshots/web-erp-v1.png",
      alt: "SellerFlow ERP Web no desktop — fechamento com lucro líquido e despesas no computador",
      width: 1024,
      height: 682,
      aspect: "landscape" as const,
    },
  },

  /**
   * Ative `enabled: true` e adicione `demo.mp4` em public/images/apps/sellerflow/video/
   * quando o vídeo estiver pronto.
   */
  video: {
    src: "/images/apps/sellerflow/video/demo.mp4",
    poster: {
      src: "/images/apps/sellerflow/video/demo-poster.png",
      alt: "Prévia do vídeo demonstrativo do SellerFlow",
      width: 1280,
      height: 800,
      aspect: "desktop" as const,
    },
    enabled: false as boolean,
  },
} as const;

export type SellerflowMedia = typeof sellerflowMedia;
export type ShowcaseMediaKey = keyof typeof sellerflowMedia.showcase;
