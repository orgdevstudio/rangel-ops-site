import { Section, Container, SectionReveal } from "@/components/ui";
import { driveflowLanding } from "@/config/driveflow-landing";
import { driveflowMedia } from "@/config/driveflow-media";
import { ShowcaseRow } from "./media";

export function DriveFlowProductShowcase() {
  const { showcase } = driveflowLanding;

  return (
    <Section id={showcase.id} variant="default" background="muted">
      <Container size="xl">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
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
              asset={driveflowMedia.showcase[item.mediaKey]}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
