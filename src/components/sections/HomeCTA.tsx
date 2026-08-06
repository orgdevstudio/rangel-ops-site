import Link from "next/link";
import { Section, Container, SectionReveal, Button } from "@/components/ui";
import { homeLanding } from "@/config/home-landing";

export function HomeCTA() {
  const { finalCta } = homeLanding;

  return (
    <Section variant="cta" background="dark" className="border-t border-white/[0.06]">
      <SectionReveal>
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]/70">
              {finalCta.eyebrow}
            </p>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {finalCta.title}
            </h2>
            <p className="mt-8 text-base leading-[1.65] text-[#94a3b8]/70">
              {finalCta.subtitle}
            </p>
            <Link href={finalCta.buttonHref} className="mt-10 inline-block w-full sm:w-auto">
              <Button size="lg" className="w-full">
                {finalCta.buttonLabel}
              </Button>
            </Link>
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
