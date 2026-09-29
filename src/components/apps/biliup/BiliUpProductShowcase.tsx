import { Section, Container, SectionReveal } from "@/components/ui";
import { biliupLanding } from "@/config/biliup-landing";
import { biliupMedia } from "@/config/biliup-media";
import { ShowcaseRow } from "./media";

export function BiliUpProductShowcase() {
  const { showcase } = biliupLanding;

  return (
    <Section id={showcase.id} variant="default" background="default">
      <Container size="xl">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A78BFA]/90">
              {showcase.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {showcase.title}
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/80">
              {showcase.subtitle}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {showcase.items.map((item, index) => (
            <ShowcaseRow
              key={item.mediaKey}
              eyebrow={item.eyebrow}
              title={item.title}
              description={item.description}
              asset={biliupMedia.showcase[item.mediaKey]}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
