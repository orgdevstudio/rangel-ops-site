import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ExclusaoContaContent } from "./ExclusaoContaContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "sellerflow" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== "sellerflow") return {};
  return {
    title: "Exclusão de conta e dados",
    description:
      "Solicite a exclusão da sua conta e dados do SellerFlow. Conformidade com LGPD e Google Play. Exclusão pelo app ou formulário.",
  };
}

export default async function ExclusaoContaPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug !== "sellerflow") {
    notFound();
  }

  return <ExclusaoContaContent />;
}
