/**
 * Registry tipado de mídia do DriveFlow.
 * Coloque os arquivos em public/ com o mesmo nome e defina `ready: true`.
 * Enquanto `ready` for false, a landing renderiza placeholders — sem next/image.
 */

export type MediaAspect = "phone" | "landscape" | "composition";

export type DriveflowMediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspect: MediaAspect;
  ready: boolean;
  slotLabel: string;
};

export const driveflowMedia = {
  hero: {
    src: "/images/apps/driveflow/hero-driver.png",
    alt: "Motorista no carro utilizando o DriveFlow para decidir uma corrida",
    width: 1024,
    height: 622,
    aspect: "composition" as const,
    ready: true,
    slotLabel: "Motorista no carro · DriveFlow",
  },

  transformation: {
    before: {
      src: "/images/apps/driveflow/solution/before.png",
      alt: "Motorista no carro à noite decidindo uma corrida no achismo, só com a oferta na tela",
      width: 1024,
      height: 681,
      aspect: "landscape" as const,
      ready: true,
      slotLabel: "Antes · achismo",
    },
    bridge: {
      src: "/images/apps/driveflow/solution/platform.png",
      alt: "DriveFlow no celular, no suporte do carro — aplicativo Android para motoristas",
      width: 1024,
      height: 681,
      aspect: "landscape" as const,
      ready: true,
      slotLabel: "DriveFlow · plataforma",
    },
    after: {
      src: "/images/apps/driveflow/solution/after.png",
      alt: "Motorista decidindo com clareza — números da corrida à vista no DriveFlow",
      width: 1024,
      height: 681,
      aspect: "landscape" as const,
      ready: true,
      slotLabel: "Depois · controle",
    },
  },

  criteria: {
    definirGanhos: {
      src: "/images/apps/driveflow/screenshots/definir-ganhos.png",
      alt: "Definir Ganhos no DriveFlow — ganho por km, hora, minuto e valor mínimo",
      width: 390,
      height: 641,
      aspect: "phone" as const,
      ready: true,
      slotLabel: "Definir Ganhos",
    },
    overlayStudio: {
      src: "/images/apps/driveflow/screenshots/personalizar-indicador.png",
      alt: "Personalizar indicador na tela do DriveFlow — presets e o que aparece sobre a oferta",
      width: 399,
      height: 882,
      aspect: "phone" as const,
      ready: true,
      slotLabel: "Personalizar indicador",
    },
  },

  showcase: {
    home: {
      src: "/images/apps/driveflow/screenshots/home.png",
      alt: "Home do DriveFlow — leitura de tela, botão flutuante e jornada de trabalho",
      width: 396,
      height: 697,
      aspect: "phone" as const,
      ready: true,
      slotLabel: "Home · monitoramento",
    },
    resumoFinanceiro: {
      src: "/images/apps/driveflow/screenshots/resumo-financeiro.png",
      alt: "Resumo financeiro do DriveFlow — lucro do dia, faturamento e meta",
      width: 396,
      height: 889,
      aspect: "phone" as const,
      ready: true,
      slotLabel: "Resumo financeiro",
    },
    fechamento: {
      src: "/images/apps/driveflow/screenshots/fechamento-do-dia.png",
      alt: "Fechamento do Dia no DriveFlow — faturamento, gastos e lucro",
      width: 397,
      height: 722,
      aspect: "phone" as const,
      ready: true,
      slotLabel: "Fechamento do Dia",
    },
    historico: {
      src: "/images/apps/driveflow/screenshots/historico-fechamentos.png",
      alt: "Histórico de fechamentos no DriveFlow — dias encerrados com lucro e gastos",
      width: 460,
      height: 1024,
      aspect: "phone" as const,
      ready: true,
      slotLabel: "Histórico de fechamentos",
    },
  },
} as const;

export type DriveflowMedia = typeof driveflowMedia;
export type ShowcaseMediaKey = keyof typeof driveflowMedia.showcase;
export type CriteriaMediaKey = keyof typeof driveflowMedia.criteria;
