import { Section, Container } from "@/components/ui";
import { AppCard } from "@/components/apps";
import { apps } from "@/config/apps";

export interface AppsGridProps {
  title?: string;
  subtitle?: string;
}

export function AppsGrid({
  title = "Nossos aplicativos",
  subtitle = "Soluções integradas para operações escaláveis",
}: AppsGridProps) {
  return (
    <Section variant="default" background="default">
      <Container size="xl">
        <div className="text-center mx-auto max-w-3xl mt-16 mb-24 lg:mb-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]/75">
            Ecossistema SaaS
          </p>
          <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
            {title}
          </h2>
          <p className="mt-6 text-base text-[#94a3b8]/70 max-w-2xl mx-auto leading-[1.65]">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {apps.map((app) => (
            <div key={app.id} className="lg:col-span-4">
              <AppCard app={app} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
