import { Section, Container, SectionReveal } from "@/components/ui";
import { biliupLanding } from "@/config/biliup-landing";

export function BiliUpLanguages() {
  const { languages } = biliupLanding;

  return (
    <Section id={languages.id} variant="default" background="default">
      <SectionReveal>
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A78BFA]/90">
              {languages.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {languages.title}
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/80">
              {languages.subtitle}
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {languages.items.map((lang) => (
              <li
                key={lang.code}
                className="flex flex-col items-center rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-6 text-center transition-all duration-300 ease-out motion-safe:hover:-translate-y-px motion-safe:hover:border-[#8B5CF6]/30"
              >
                <span className="text-sm font-bold tracking-tight text-white">
                  {lang.name}
                </span>
                <span className="mt-1.5 text-xs text-[#94a3b8]/75">
                  {lang.nativeName}
                </span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-[1.65] text-[#94a3b8]/70">
            {languages.note}
          </p>
        </Container>
      </SectionReveal>
    </Section>
  );
}
