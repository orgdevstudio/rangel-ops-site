import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Section, Container } from "@/components/ui";
import { Button } from "@/components/ui";

export interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTA({
  title = "Pronto para transformar suas operações?",
  subtitle = "Entre em contato e descubra como nossos aplicativos podem escalar seu negócio.",
  primaryLabel = "Fale conosco",
  primaryHref = siteConfig.urls.contact,
  secondaryLabel = "Conhecer os apps",
  secondaryHref = "#aplicativos",
}: CTAProps) {
  return (
    <Section id="contato" variant="default" background="dark">
      <Container size="md">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
            {title}
          </h2>
          <p className="mt-8 text-base text-[#94a3b8]/70 max-w-2xl mx-auto leading-[1.65]">{subtitle}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href={primaryHref} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto"
              >
                {primaryLabel}
              </Button>
            </a>
            <Link href={secondaryHref}>
              <Button
                size="lg"
                variant="outline"
                className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 hover:shadow-[0_0_14px_rgba(14,165,233,0.2)] w-full sm:w-auto"
              >
                {secondaryLabel}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
