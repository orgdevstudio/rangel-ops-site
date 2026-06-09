/**
 * Tipos compartilhados do projeto RangelOps
 */

/** Representa um aplicativo SaaS da RangelOps */
export interface App {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  /** Caminho público do ícone (ex.: `/images/apps/sellerflow.png` em `public/images/apps/`). */
  icon?: string;
  href?: string;
  googlePlayUrl?: string;
  appStoreUrl?: string;
  status?: "disponivel" | "em-breve" | "beta";
  /** Exibe links para política de privacidade e exclusão de conta na página do app. */
  hasLegalPages?: boolean;
  /** Bullets exibidos no card "Informações do app" na página do aplicativo. */
  featureHighlights?: string[];
  /** Imagem Open Graph para a página principal do app (caminho público a partir de `/`). */
  ogImage?: string;
}

/** Link de navegação */
export interface NavLink {
  label: string;
  href: string;
}

/** Item de feature/diferencial */
export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}
