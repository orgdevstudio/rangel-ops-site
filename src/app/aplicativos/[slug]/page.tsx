import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { apps } from "@/config/apps";
import { Section, Container } from "@/components/ui";
import { Button } from "@/components/ui";
import { AppIcon, StoreButtonsModal } from "@/components/apps";

interface AppPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: app.name,
    description: app.shortDescription ?? app.description,
  };
}

export default async function AppPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  const paragraphs = app.description.split("\n\n").filter(Boolean);
  const showAcesseLinks =
    slug === "sellerflow" || slug === "driveflow" || slug === "civiflow";

  return (
    <Section variant="default" background="default">
      <Container size="xl">
        <div className="mx-auto max-w-2xl mt-16">
          <Link
            href="/aplicativos"
            className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-white"
          >
            ← Voltar às soluções
          </Link>
          <div className="mt-12 flex justify-center">
            <AppIcon app={app} size="lg" />
          </div>
          <h1 className="mt-10 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.2]">
            {app.name}
          </h1>
          <div className="mt-10 space-y-6 text-center">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-base text-[#94a3b8]/90 leading-[1.65]">
                {para}
              </p>
            ))}
          </div>

          {slug === "civiflow" && (
            <div
              className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 text-left backdrop-blur-sm sm:p-10"
              style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.2)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#94a3b8]/70">
                Informações do app
              </p>
              <ul className="mt-5 space-y-4 text-sm text-[#94a3b8]/90 leading-[1.65]">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0EA5E9]" />
                  <span>
                    Visão integrada da obra: etapas, responsáveis e organização
                    de tarefas para manter equipes e prazos alinhados ao
                    planejamento.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0EA5E9]" />
                  <span>
                    Controle de materiais com rastreio de entradas, saídas e
                    saldo, reduzindo desperdício e falta de insumos no canteiro.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0EA5E9]" />
                  <span>
                    Custos por fase e leitura de despesas frente ao orçamento,
                    com apoio a decisões financeiras durante a construção.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0EA5E9]" />
                  <span>
                    Acompanhamento de progresso físico da obra e indicadores de
                    avanço para comparar execução com o que foi planejado.
                  </span>
                </li>
              </ul>
            </div>
          )}

          <div className="mt-16 flex flex-col items-center gap-12">
            {showAcesseLinks && (
              <div className="flex flex-col items-center gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#94a3b8]/70">
                  Acesse
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
                  <Link
                    href={`/aplicativos/${slug}/politica-de-privacidade`}
                    className="text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#0EA5E9]"
                  >
                    Política de Privacidade
                  </Link>
                  <Link
                    href={`/aplicativos/${slug}/exclusao-de-conta`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 ease-out hover:border-[#0EA5E9]/40 hover:bg-[#0EA5E9]/10 hover:text-[#0EA5E9]"
                  >
                    Exclusão de conta e dados
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
            <div>
              <p className="mb-4 text-center text-sm font-medium text-[#94a3b8]/80">
                Baixe o app
              </p>
              <StoreButtonsModal
                appName={app.name}
                googlePlayUrl={app.googlePlayUrl}
                appStoreUrl={app.appStoreUrl}
              />
            </div>
            <Link href="/contato" className="inline-block">
              <Button variant="outline" className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10">
                Fale conosco
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
