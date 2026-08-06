import Link from "next/link";
import { siteConfig } from "@/config/site";
import { homeLanding } from "@/config/home-landing";
import { Container } from "@/components/ui";
import { HeroBackdrop } from "./hero/HeroBackdrop";
import { HeroScene } from "./hero/HeroScene";

export function Hero() {
  const { hero } = homeLanding;

  return (
    <section
      className="relative flex min-h-[min(92vh,920px)] items-center overflow-hidden bg-[#050B14]"
      aria-label="Proposta de valor principal"
    >
      <HeroBackdrop />

      <Container size="xl" className="relative z-10 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="order-2 min-w-0 lg:order-1 lg:col-span-5">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]/75">
              {siteConfig.brand.tagline}
            </p>
            <h1 className="relative text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
              <span
                className="absolute -left-4 -top-4 h-32 w-32 rounded-full opacity-20 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(34,184,255,0.5) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <span className="relative block">
                {hero.titleBefore}{" "}
                <span className="bg-gradient-to-r from-[#0EA5E9] via-[#22B8FF] to-[#0EA5E9] bg-clip-text text-transparent">
                  {hero.titleAccent}
                </span>
                , {hero.titleAfter}
              </span>
            </h1>
            <p className="mt-10 max-w-xl text-base leading-[1.65] text-[#94a3b8]/70">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={hero.primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0EA5E9] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[#0EA5E9]/20 transition-all duration-300 ease-out hover:bg-[#0d9cd9] hover:shadow-lg hover:shadow-[#0EA5E9]/25 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 focus:ring-offset-[#050B14]"
              >
                {hero.primaryCta}
              </Link>
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
            <div className="relative -mx-2 sm:mx-0 lg:-mr-12 lg:ml-2 xl:-mr-16">
              <HeroScene />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
