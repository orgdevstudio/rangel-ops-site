import Link from "next/link";
import { listedApps } from "@/lib/apps";
import { homeLanding } from "@/config/home-landing";
import { AppIcon } from "@/components/apps";
import { Section, Container, SectionReveal, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

export function AppsPreview() {
  const { apps: copy } = homeLanding;

  return (
    <Section id={copy.id} variant="default" background="muted">
      <SectionReveal>
        <Container size="xl">
          <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {copy.title}
            </h2>
            <p className="mt-6 text-base leading-[1.65] text-[#94a3b8]/70">
              {copy.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {listedApps.map((app) => {
              const isLive = app.status === "disponivel";
              return (
                <Link
                  key={app.id}
                  href={app.href ?? "/aplicativos"}
                  className="group block w-full max-w-md"
                >
                  <div
                    className={cn(
                      "flex min-h-[220px] flex-col rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 ease-out lg:p-10",
                      isLive
                        ? "border-[#0EA5E9]/35 bg-[rgba(14,165,233,0.07)] shadow-[0_0_32px_rgba(14,165,233,0.12)] hover:border-[#0EA5E9]/50 hover:-translate-y-px"
                        : "border-white/[0.06] bg-white/[0.02] opacity-90 hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-px"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <AppIcon app={app} size="sm" />
                      {isLive ? (
                        <Badge variant="accent">Disponível</Badge>
                      ) : (
                        <Badge variant="em-breve">Em breve</Badge>
                      )}
                    </div>
                    <h3
                      className={cn(
                        "mt-8 text-lg font-bold tracking-tight leading-snug transition-colors duration-300 ease-out",
                        isLive
                          ? "text-white group-hover:text-[#22D3EE]"
                          : "text-white/90 group-hover:text-[#0EA5E9]"
                      )}
                    >
                      {app.name}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-[1.6] text-[#94a3b8]/90 line-clamp-2">
                      {app.shortDescription ?? app.description}
                    </p>
                    <span className="mt-8 inline-flex items-center text-sm font-semibold text-[#0EA5E9]">
                      {isLive ? "Ver detalhes do app" : "Em breve — Ver detalhes"}
                      <svg
                        className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href={copy.footerHref}
              className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#0EA5E9]"
            >
              {copy.footerLink}
              <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
