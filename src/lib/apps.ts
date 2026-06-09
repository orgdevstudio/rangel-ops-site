import { apps } from "@/config/apps";
import type { App } from "@/types";

export const appsWithLegalPages = apps.filter((app) => app.hasLegalPages);

export function appHasLegalPages(slug: string): boolean {
  return apps.some((app) => app.slug === slug && app.hasLegalPages);
}

export function getAppFeatureHighlights(app: App): string[] {
  return app.featureHighlights ?? [];
}
