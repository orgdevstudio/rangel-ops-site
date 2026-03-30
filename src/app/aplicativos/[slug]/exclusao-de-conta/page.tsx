import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps } from "@/config/apps";
import {
  ExclusaoContaContent,
  type ExclusaoAppSlug,
} from "./ExclusaoContaContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const ALLOWED_SLUGS: ExclusaoAppSlug[] = [
  "sellerflow",
  "driveflow",
  "civiflow",
];

export function generateStaticParams() {
  return ALLOWED_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "sellerflow") {
    return {
      title: "Exclusão de conta e dados",
      description:
        "Solicite a exclusão da sua conta e dados do SellerFlow. Conformidade com LGPD e Google Play. Exclusão pelo app ou formulário.",
    };
  }
  if (slug === "driveflow") {
    return {
      title: "Exclusão de conta e dados",
      description:
        "Exclusão de conta DriveFlow: dados em nuvem (Firebase), dados locais no aparelho e solicitação por formulário. LGPD e Google Play.",
    };
  }
  if (slug === "civiflow") {
    return {
      title: "Exclusão de conta e dados",
      description:
        "Exclusão permanente de conta CiviFlow: Firebase, obras, tarefas, materiais, registros financeiros e dados locais. LGPD e Google Play.",
    };
  }
  return {};
}

export default async function ExclusaoContaPage({ params }: PageProps) {
  const { slug } = await params;

  if (!ALLOWED_SLUGS.includes(slug as ExclusaoAppSlug)) {
    notFound();
  }

  if (!apps.some((a) => a.slug === slug)) {
    notFound();
  }

  return <ExclusaoContaContent slug={slug as ExclusaoAppSlug} />;
}
