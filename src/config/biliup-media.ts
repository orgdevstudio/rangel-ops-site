/**
 * Registry tipado de mídia do BiliUp.
 * Coloque os arquivos em public/ com o mesmo nome e defina `ready: true`.
 * Enquanto `ready` for false, a landing renderiza placeholders — sem next/image.
 */

export type MediaAspect = "phone" | "landscape" | "composition" | "icon";

export type BiliupMediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspect: MediaAspect;
  ready: boolean;
  slotLabel: string;
};

export const biliupMedia = {
  hero: {
    src: "/images/apps/biliup.png",
    alt: "Mascote do BiliUp — raposa roxa de óculos, símbolo do aprendizado",
    width: 512,
    height: 512,
    aspect: "icon" as const,
    ready: true,
    slotLabel: "BiliUp · mascote",
  },

  transformation: {
    before: {
      src: "/images/apps/biliup/solution/before.png",
      alt: "Estudo de idiomas sem contexto — palavras soltas e progresso incerto",
      width: 1024,
      height: 681,
      aspect: "landscape" as const,
      ready: false,
      slotLabel: "Antes · estudo solto",
    },
    bridge: {
      src: "/images/apps/biliup/solution/platform.png",
      alt: "BiliUp no celular — missões de idiomas em situações reais",
      width: 1024,
      height: 681,
      aspect: "landscape" as const,
      ready: false,
      slotLabel: "BiliUp · missões",
    },
    after: {
      src: "/images/apps/biliup/solution/after.png",
      alt: "Usuário concluindo uma missão e vendo a habilidade conquistada",
      width: 1024,
      height: 681,
      aspect: "landscape" as const,
      ready: false,
      slotLabel: "Depois · habilidade",
    },
  },

  showcase: {
    missions: {
      src: "/images/apps/biliup/screenshots/missions.png",
      alt: "Jornada de missões do BiliUp — situações reais do dia a dia",
      width: 390,
      height: 844,
      aspect: "phone" as const,
      ready: false,
      slotLabel: "Missões",
    },
    exercises: {
      src: "/images/apps/biliup/screenshots/exercises.png",
      alt: "Exercícios do BiliUp — vocabulário, escuta e montagem de frases",
      width: 390,
      height: 844,
      aspect: "phone" as const,
      ready: false,
      slotLabel: "Exercícios",
    },
    progress: {
      src: "/images/apps/biliup/screenshots/progress.png",
      alt: "Progresso no BiliUp — missões concluídas e evolução na jornada",
      width: 390,
      height: 844,
      aspect: "phone" as const,
      ready: false,
      slotLabel: "Progresso",
    },
    support: {
      src: "/images/apps/biliup/screenshots/support.png",
      alt: "Apoio no BiliUp — dicas e tradução durante os exercícios",
      width: 390,
      height: 844,
      aspect: "phone" as const,
      ready: false,
      slotLabel: "Apoio",
    },
  },
} as const;

export type BiliupMedia = typeof biliupMedia;
export type ShowcaseMediaKey = keyof typeof biliupMedia.showcase;
