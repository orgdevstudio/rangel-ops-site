import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal";
import { legalLanding } from "@/config/legal-landing";

export const metadata: Metadata = {
  title: legalLanding.privacidade.meta.title,
  description: legalLanding.privacidade.meta.description,
};

export default function PrivacidadePage() {
  return <LegalPageShell document={legalLanding.privacidade} />;
}
