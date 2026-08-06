import { apps } from "@/config/apps";
import type { App } from "@/types";

/** Apps visíveis em grids e catálogo. URLs diretas de apps ocultos continuam válidas. */
export const listedApps = apps.filter((app) => app.listed !== false);

export const appsWithLegalPages = apps.filter((app) => app.hasLegalPages);

export function appHasLegalPages(slug: string): boolean {
  return apps.some((app) => app.slug === slug && app.hasLegalPages);
}

export function getAppFeatureHighlights(app: App): string[] {
  return app.featureHighlights ?? [];
}
