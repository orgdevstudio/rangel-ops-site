/**
 * Configuração centralizada do site institucional RangelOps
 * Centraliza informações da marca, metadados e links para fácil manutenção
 */

export const siteConfig = {
  /** Informações da marca */
  brand: {
    name: "RangelOps",
    /** Logo principal (navbar, footer). Caminho: public/images/logo.png (ou .svg). Se omitir, exibe o nome da marca. */
    logo: {
      src: "/images/logo.png",
      alt: "RangelOps",
    },
    /** Favicon: arquivo em app/favicon.ico (Next.js App Router) */
    /** Imagem do card no Hero (tela inicial). Caminho: public/images/hero-image.png (ou .svg). Sem fundo (PNG/SVG transparente). Se omitir ou undefined, exibe "RO". */
    heroImage: {
      src: "/images/hero-image.png",
      alt: "RangelOps",
    },
    tagline: "Soluções digitais para operações que crescem",
    description:
      "A RangelOps desenvolve aplicativos que entregam organização, automação e crescimento para negócios. Ecossistema de soluções operacionais, administrativas e estratégicas sob medida.",
  },

  /** Metadados para SEO */
  metadata: {
    title: {
      default: "RangelOps | Soluções Digitais para Operações que Escalam",
      template: "%s | RangelOps",
    },
    description:
      "Empresa desenvolvedora de soluções digitais por meio de aplicativos. Organização, automação e crescimento para o seu negócio. Conheça nosso ecossistema de soluções.",
    keywords: [
      "SaaS",
      "operações",
      "automação",
      "tecnologia",
      "software empresarial",
      "RangelOps",
    ],
    authors: [{ name: "RangelOps", url: "https://rangelops.com" }],
    creator: "RangelOps",
    openGraph: {
      type: "website",
      locale: "pt_BR",
    },
  },

  /** Links de navegação institucional */
  nav: {
    links: [
      { label: "Início", href: "/" },
      { label: "Sobre", href: "/sobre" },
      { label: "Aplicativos", href: "/aplicativos" },
    ],
  },

  /** Links do footer */
  footer: {
    institucional: [
      { label: "Sobre a RangelOps", href: "/sobre" },
      { label: "Aplicativos", href: "/aplicativos" },
      { label: "Contato", href: "/contato" },
    ],
    legal: [
      { label: "Termos de Uso", href: "/legal/termos" },
      { label: "Política de Privacidade", href: "/legal/privacidade" },
    ],
  },

  /** Redes sociais */
  social: {
    linkedin: "https://linkedin.com/company/rangelops",
    twitter: "https://twitter.com/rangelops",
    github: "https://github.com/rangelops",
    instagram: "https://instagram.com/rangelops",
  },

  /** URLs importantes */
  urls: {
    base: process.env.NEXT_PUBLIC_SITE_URL || "https://rangelops.com",
    contact: "mailto:support@rangelops.com",
  },
};

export type SiteConfig = typeof siteConfig;
