import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { apps } from "@/config/apps";
import { Section, Container } from "@/components/ui";
import { Button } from "@/components/ui";
import { StoreButtonsModal } from "@/components/apps";

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
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0EA5E9]/20 text-[#0EA5E9] font-bold text-2xl">
              {app.name.charAt(0)}
            </div>
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
          <div className="mt-16 flex flex-col items-center gap-8">
            <div>
              <p className="mb-4 text-center text-sm font-medium text-[#94a3b8]/80">
                Baixe o app
              </p>
              <StoreButtonsModal />
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
