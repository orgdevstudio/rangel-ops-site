import Link from "next/link";
import { apps } from "@/config/apps";
import { AppIcon } from "@/components/apps";
import { Section, Container, SectionReveal } from "@/components/ui";

export function AppsPreview() {
  return (
    <Section variant="default" background="muted">
      <SectionReveal>
      <Container size="xl">
        <div className="text-center mb-24 lg:mb-32">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
            Nossas soluções em aplicativos
          </h2>
          <p className="mt-6 text-base text-[#94a3b8]/70 max-w-2xl mx-auto leading-[1.65]">
            Cada app resolve um conjunto de necessidades. Integrados entre si. Escolha o que sua operação precisa hoje.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {apps.map((app) => (
            <Link
              key={app.id}
              href={app.href ?? "/aplicativos"}
              className="group block w-full max-w-md"
            >
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-8 lg:p-10 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-white/10 hover:-translate-y-px hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)] group-hover:shadow-[0_8px_28px_-4px_rgba(0,0,0,0.14),0_0_20px_rgba(14,165,233,0.05)] min-h-[220px] flex flex-col">
                <AppIcon app={app} size="sm" />
                <h3 className="mt-8 font-bold tracking-tight text-white group-hover:text-[#0EA5E9] transition-colors duration-300 ease-out text-lg leading-snug">
                  {app.name}
                </h3>
                <p className="mt-4 text-sm text-[#94a3b8]/90 line-clamp-2 leading-[1.6] flex-1">
                  {app.shortDescription ?? app.description}
                </p>
                <span className="mt-8 inline-flex items-center text-sm font-semibold text-[#0EA5E9]">
                  {app.status === "disponivel" ? "Ver detalhes do app" : "Em breve — Ver detalhes"}
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-base text-[#94a3b8]/80">
            Conheça cada solução em detalhe.
          </p>
          <Link
            href="/aplicativos"
            className="mt-4 inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#0EA5E9]"
          >
            Ver página de aplicativos
            <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
      </SectionReveal>
    </Section>
  );
}
