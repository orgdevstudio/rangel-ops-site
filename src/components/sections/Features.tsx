import { Section, Container } from "@/components/ui";
import type { FeatureItem } from "@/types";

const defaultFeatures: FeatureItem[] = [
  {
    id: "1",
    title: "Escalabilidade",
    description:
      "Arquitetura pensada para crescer com seu negócio. Do primeiro usuário à operação enterprise.",
  },
  {
    id: "2",
    title: "Segurança",
    description:
      "Dados protegidos com padrões de mercado. Criptografia, backups e conformidade com LGPD.",
  },
  {
    id: "3",
    title: "Integração",
    description:
      "APIs abertas e conectores nativos. Integre com seus sistemas existentes sem esforço.",
  },
  {
    id: "4",
    title: "Suporte dedicado",
    description:
      "Equipe especializada para apoiar sua operação. Documentação, treinamentos e suporte contínuo.",
  },
];

const iconSvg = (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export interface FeaturesProps {
  features?: FeatureItem[];
  title?: string;
  subtitle?: string;
}

export function Features({
  features = defaultFeatures,
  title = "Por que escolher a RangelOps",
  subtitle = "Diferenciais que fazem a diferença na sua operação",
}: FeaturesProps) {
  return (
    <Section id="diferenciais" variant="default" background="muted">
      <Container size="xl">
        <div className="text-center mx-auto max-w-3xl mt-16 mb-24 lg:mb-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]/75">
            Diferenciais
          </p>
          <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
            {title}
          </h2>
          <p className="mt-6 text-base text-[#94a3b8]/70 max-w-2xl mx-auto leading-[1.65]">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="lg:col-span-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-8 lg:p-10 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-white/10 hover:-translate-y-px hover:shadow-[0_6px_20px_-4px_rgba(0,0,0,0.1)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0EA5E9]/15 text-[#0EA5E9]">
                {feature.icon ?? iconSvg}
              </div>
              <h3 className="mt-8 text-lg font-bold tracking-tight text-white leading-snug">
                {feature.title}
              </h3>
              <p className="mt-4 text-[#94a3b8]/85 text-sm leading-[1.6] line-clamp-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
