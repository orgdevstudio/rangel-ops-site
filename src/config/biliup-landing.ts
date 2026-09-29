/**
 * Conteúdo editorial da landing de conversão do BiliUp.
 * Mídia: ver biliup-media.ts (paths desacoplados).
 * Idiomas e recursos alinhados ao catálogo e docs do app Flutter.
 */

export const biliupLanding = {
  meta: {
    title: "BiliUp | Aprenda idiomas por missões do dia a dia",
    description:
      "BiliUp transforma situações reais em missões de aprendizado. Lições curtas, progresso claro e uma experiência premium para usar o idioma de verdade.",
  },

  hero: {
    eyebrow: "BiliUp · Aprendizado de idiomas",
    badge: "Disponível em breve",
    title: "Aprenda um idioma fazendo coisas de verdade.",
    subtitle:
      "Missões curtas baseadas em situações do dia a dia — do café ao transporte — com progresso claro e uma experiência premium.",
    primaryCta: "Conhecer o produto",
    primaryHref: "#produto",
    secondaryCta: "Fale conosco",
    secondaryHref: "/contato",
  },

  problem: {
    eyebrow: "O problema",
    title: "Estudar um idioma não é o mesmo que conseguir usá-lo",
    featured: {
      title: "Você acumula vocabulário e regras — e trava na hora de falar.",
      description:
        "Saber a palavra certa não basta se você não sabe quando, onde e como usá-la numa situação real.",
    },
    items: [
      {
        title: "Conteúdo sem propósito",
        description:
          "Capítulos e listas isoladas não mostram o que você realmente consegue fazer com o idioma.",
      },
      {
        title: "Pouco tempo no dia",
        description:
          "Sessões longas e teóricas cabem mal na rotina de quem estuda pelo celular.",
      },
      {
        title: "Progresso invisível",
        description:
          "Sem uma jornada clara, fica difícil sentir evolução e manter a motivação.",
      },
    ],
  },

  transformation: {
    eyebrow: "A transformação",
    title: "Do estudo solto ao uso real",
    titleAccent: "uso real",
    subtitle:
      "Cada missão entrega uma habilidade concreta. No fim, você sabe o que já consegue fazer.",
    before: {
      label: "Antes",
      title: "Aprendizado no escuro",
      points: [
        "Palavras e regras sem contexto",
        "Dificuldade de começar uma conversa",
        "Sensação de estudar sem avançar",
      ],
    },
    bridge: {
      label: "BiliUp",
      title: "Missões do dia a dia",
      description:
        "Situações reais, etapas guiadas e feedback imediato — no celular, no seu ritmo.",
    },
    after: {
      label: "Depois",
      title: "Habilidade na mão",
      points: [
        "Consegue pedir um café no idioma",
        "Pratica escuta, frases e conversa",
        "Vê progresso e domínio por missão",
      ],
    },
  },

  languages: {
    id: "idiomas",
    eyebrow: "Idiomas",
    title: "Escolha o que quer aprender",
    subtitle:
      "Cursos disponíveis no app, com interface preparada para um público internacional.",
    items: [
      { code: "en-US", name: "Inglês", nativeName: "English" },
      { code: "es-ES", name: "Espanhol", nativeName: "Español" },
      { code: "fr-FR", name: "Francês", nativeName: "Français" },
      { code: "de-DE", name: "Alemão", nativeName: "Deutsch" },
      { code: "pt-BR", name: "Português", nativeName: "Português" },
      { code: "hi-IN", name: "Hindi", nativeName: "हिन्दी" },
    ],
    note: "A interface acompanha o idioma do aparelho quando suportado (português, inglês, espanhol, francês, alemão e hindi).",
  },

  howItWorks: {
    eyebrow: "Como funciona",
    title: "Da jornada à habilidade",
    steps: [
      {
        step: "01",
        title: "Escolha o idioma",
        description:
          "Selecione o curso que quer estudar. Cada idioma guarda o próprio progresso.",
      },
      {
        step: "02",
        title: "Entre numa missão",
        description:
          "Situações reais — saudações, café, restaurante, compras, transporte — em etapas curtas.",
      },
      {
        step: "03",
        title: "Pratique e evolua",
        description:
          "Vocabulário, escuta, frases e conversa, com feedback imediato e revisão ao concluir.",
      },
    ],
  },

  showcase: {
    id: "produto",
    eyebrow: "Por dentro",
    title: "Uma jornada pensada para o uso real",
    subtitle:
      "Do primeiro contato ao domínio de situações cotidianas — com clareza do que você já consegue fazer.",
    items: [
      {
        mediaKey: "missions" as const,
        eyebrow: "Missões",
        title: "Aprenda fazendo, não decorando",
        description:
          "Cada missão resolve uma situação: cumprimentar, se apresentar, pedir um café, pedir no restaurante, comprar ou se locomover.",
      },
      {
        mediaKey: "exercises" as const,
        eyebrow: "Exercícios",
        title: "Prática variada, em sessões curtas",
        description:
          "Vocabulário com imagens, escuta, escolha de resposta, montagem de frases, compreensão e conversas contextualizadas.",
      },
      {
        mediaKey: "progress" as const,
        eyebrow: "Progresso",
        title: "Veja o que já domina",
        description:
          "Acompanhe missões concluídas, sequência de estudos e a evolução na jornada — sem truques de retenção.",
      },
      {
        mediaKey: "support" as const,
        eyebrow: "Apoio",
        title: "Ajuda na hora certa",
        description:
          "Dicas e tradução de apoio quando você precisa entender o enunciado — para continuar praticando no idioma estudado.",
      },
    ],
  },

  features: {
    eyebrow: "Recursos",
    title: "Tudo o que você precisa para evoluir",
    subtitle:
      "Uma experiência premium, visual e motivadora — feita para aprender com consistência.",
    items: [
      {
        title: "Missões por temas",
        description:
          "Conteúdo organizado em jornadas e situações do cotidiano.",
      },
      {
        title: "Lições objetivas",
        description:
          "Etapas curtas que cabem no celular e no tempo que você tem.",
      },
      {
        title: "Escuta e conversa",
        description:
          "Áudio no idioma estudado, diálogos e turnos de conversação.",
      },
      {
        title: "Montagem de frases",
        description:
          "Construa respostas com peças e veja a frase ganhar forma.",
      },
      {
        title: "Revisão pós-missão",
        description:
          "Reveja acertos, atenção e pontos para reforçar o aprendizado.",
      },
      {
        title: "Experiência premium",
        description:
          "Interface clara, microinterações e identidade visual marcante.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    items: [
      {
        question: "O que é o BiliUp?",
        answer:
          "É um aplicativo de aprendizado de idiomas baseado em missões. Em vez de capítulos isolados, você pratica situações reais até conseguir usá-las de verdade.",
      },
      {
        question: "Como funciona o aprendizado por missões?",
        answer:
          "Cada missão é uma situação do dia a dia. Você passa por etapas — como vocabulário, escuta, escolha de resposta e montagem de frase — até concluir a habilidade daquela missão.",
      },
      {
        question: "Quais idiomas posso aprender?",
        answer:
          "Os cursos disponíveis são inglês, espanhol, francês, alemão, português e hindi. A interface também está preparada nesses idiomas.",
      },
      {
        question: "Para quem o BiliUp foi feito?",
        answer:
          "Para quem quer usar o idioma em situações concretas — viagem, rotina e conversas do dia a dia — com sessões curtas no celular e progresso fácil de enxergar.",
      },
      {
        question: "Preciso de conta para começar?",
        answer:
          "Você pode começar como visitante e criar uma conta depois para proteger o progresso. Conta com e-mail ou Google sincroniza o aprendizado entre aparelhos.",
      },
      {
        question: "Quando o app estará disponível?",
        answer:
          "O BiliUp ainda está em desenvolvimento. Em breve você poderá baixá-lo nas lojas. Enquanto isso, fale conosco para acompanhar o lançamento.",
      },
    ],
  },

  finalCta: {
    title: "Pronto para aprender fazendo?",
    subtitle:
      "Conheça o BiliUp e acompanhe o lançamento de uma experiência premium de idiomas.",
    microcopy: "Disponível em breve",
    primaryCta: "Fale conosco",
    primaryHref: "/contato",
    secondaryCta: "Ver idiomas",
    secondaryHref: "#idiomas",
  },
} as const;

export type BiliupLanding = typeof biliupLanding;
