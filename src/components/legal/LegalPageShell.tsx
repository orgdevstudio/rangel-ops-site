import Link from "next/link";
import { Section, Container, SectionReveal, Button } from "@/components/ui";
import { legalLanding, type LegalDocument } from "@/config/legal-landing";
import { cn } from "@/lib/utils";

type LegalPageShellProps = {
  document: LegalDocument;
};

export function LegalPageShell({ document }: LegalPageShellProps) {
  const { cta } = document;

  return (
    <>
      <section
        className="relative overflow-hidden bg-[#050B14]"
        aria-label={document.title}
      >
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div
            className="absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full opacity-40 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(14,165,233,0.22) 0%, rgba(34,184,255,0.06) 40%, transparent 70%)",
            }}
          />
        </div>
        <Container size="xl" className="py-16 lg:py-24">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
                {document.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                {document.title}
              </h1>
              <p className="mt-6 text-base leading-[1.65] text-[#94a3b8]/80 sm:text-lg">
                {document.lead}
              </p>
              <p className="mt-4 text-sm text-[#94a3b8]/60">{document.updatedLabel}</p>
            </div>
          </SectionReveal>
        </Container>
      </section>

      <Section variant="tight" background="muted">
        <SectionReveal>
          <Container size="xl">
            <nav
              className="flex flex-wrap items-center justify-center gap-3"
              aria-label="Documentos legais"
            >
              {legalLanding.nav.map((item) => {
                const active = item.id === document.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ease-out",
                      active
                        ? "border-[#0EA5E9]/45 bg-[#0EA5E9]/15 text-[#22D3EE]"
                        : "border-white/10 bg-white/[0.03] text-[#94a3b8] hover:border-white/20 hover:text-white"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </Container>
        </SectionReveal>
      </Section>

      <Section variant="default" background="default">
        <SectionReveal>
          <Container size="xl">
            <article className="mx-auto max-w-3xl rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 sm:p-10 lg:p-12">
              <div className="space-y-10">
                {document.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-lg font-bold tracking-tight text-white leading-snug">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 48)}
                          className="text-base leading-[1.65] text-[#94a3b8]/90"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </Container>
        </SectionReveal>
      </Section>

      <Section variant="cta" background="dark" className="border-t border-white/[0.06]">
        <SectionReveal>
          <Container size="xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl leading-[1.2]">
                {cta.title}
              </h2>
              <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/75">
                {cta.subtitle}
              </p>
              <div className="mt-10 flex flex-col items-center gap-4">
                <Link href={cta.primaryHref} className="inline-block w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    {cta.primaryLabel}
                  </Button>
                </Link>
                <Link
                  href={cta.secondaryHref}
                  className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#0EA5E9]"
                >
                  {cta.secondaryLabel}
                  <svg
                    className="ml-1.5 h-4 w-4"
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
                </Link>
              </div>
            </div>
          </Container>
        </SectionReveal>
      </Section>
    </>
  );
}
