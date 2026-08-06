import Link from "next/link";
import { Container, Badge, SectionReveal } from "@/components/ui";
import { sellerflowLanding } from "@/config/sellerflow-landing";
import { sellerflowMedia } from "@/config/sellerflow-media";
import { ProductMedia } from "./media";

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
  </svg>
);

type SellerFlowHeroProps = {
  googlePlayUrl: string;
};

export function SellerFlowHero({ googlePlayUrl }: SellerFlowHeroProps) {
  const { hero } = sellerflowLanding;

  return (
    <section
      className="relative overflow-hidden bg-[#050B14]"
      aria-label="SellerFlow — proposta de valor"
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full opacity-30 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.35) 0%, rgba(34,211,238,0.08) 40%, transparent 70%)",
          }}
        />
      </div>

      <Container size="xl" className="w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 lg:order-1 lg:col-span-5 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]/75">
              {hero.eyebrow}
            </p>
            <div className="mt-4">
              <Badge variant="accent">{hero.badge}</Badge>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-[1.65] text-[#94a3b8]/80">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#0EA5E9] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[#0EA5E9]/20 transition-all duration-300 ease-out motion-safe:hover:-translate-y-px hover:bg-[#0d9cd9] hover:shadow-lg hover:shadow-[#0EA5E9]/25 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 focus:ring-offset-[#050B14]"
              >
                <GooglePlayIcon />
                {hero.primaryCta}
              </a>
              <Link
                href={hero.secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 ease-out hover:border-[#0EA5E9]/40 hover:bg-[#0EA5E9]/10 hover:text-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 focus:ring-offset-[#050B14]"
              >
                {hero.secondaryCta}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-3xl motion-safe:animate-[page-enter_0.5s_var(--ease-out)_forwards]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.35) 0%, rgba(34,211,238,0.08) 45%, transparent 70%)",
                }}
                aria-hidden
              />
              <SectionReveal>
                <ProductMedia
                  asset={sellerflowMedia.hero}
                  priority
                  disableReveal
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </SectionReveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
