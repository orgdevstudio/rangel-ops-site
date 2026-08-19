import { Section, Container, SectionReveal } from "@/components/ui";
import { driveflowLanding } from "@/config/driveflow-landing";
import { driveflowMedia } from "@/config/driveflow-media";
import { MediaSlot } from "./media";

export function DriveFlowCriteria() {
  const { criteria } = driveflowLanding;

  return (
    <Section variant="default" background="default">
      <SectionReveal>
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
              {criteria.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {criteria.title}
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/80">
              {criteria.subtitle}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:gap-14">
            {criteria.items.map((item) => (
              <article key={item.mediaKey} className="flex flex-col items-center text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-white sm:text-2xl leading-[1.2]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-[1.65] text-[#94a3b8]/85 sm:text-base">
                  {item.description}
                </p>
                <div className="mt-8">
                  <MediaSlot asset={driveflowMedia.criteria[item.mediaKey]} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
