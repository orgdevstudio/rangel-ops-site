import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal";
import { legalLanding } from "@/config/legal-landing";

export const metadata: Metadata = {
  title: legalLanding.termos.meta.title,
  description: legalLanding.termos.meta.description,
};

export default function TermosPage() {
  return <LegalPageShell document={legalLanding.termos} />;
}
