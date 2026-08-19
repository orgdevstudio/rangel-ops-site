import Link from "next/link";
import { Section, Container, SectionReveal } from "@/components/ui";
import { driveflowLanding } from "@/config/driveflow-landing";
import { DriveFlowPlayButton } from "./DriveFlowPlayButton";

type DriveFlowFinalCtaProps = {
  googlePlayUrl: string;
};

export function DriveFlowFinalCta({ googlePlayUrl }: DriveFlowFinalCtaProps) {
  const { finalCta } = driveflowLanding;

  return (
    <Section variant="cta" background="dark">
      <SectionReveal>
        <Container size="md">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {finalCta.title}
            </h2>
            <p className="mt-5 text-lg font-medium leading-[1.5] text-white/90 sm:text-xl">
              {finalCta.subtitle}
            </p>
            <p className="mt-3 text-sm font-medium text-[#22D3EE]/90">
              {finalCta.microcopy}
            </p>
            <div className="mt-10 flex justify-center">
              <DriveFlowPlayButton href={googlePlayUrl} label={finalCta.ctaLabel} />
            </div>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
              <Link
                href="/aplicativos/driveflow/politica-de-privacidade"
                className="text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#0EA5E9]"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/aplicativos/driveflow/exclusao-de-conta"
                className="text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#0EA5E9]"
              >
                Exclusão de conta e dados
              </Link>
            </div>
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
