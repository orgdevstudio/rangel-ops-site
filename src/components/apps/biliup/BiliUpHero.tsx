import Link from "next/link";
import { Container, Badge, SectionReveal } from "@/components/ui";
import { biliupLanding } from "@/config/biliup-landing";
import { biliupMedia } from "@/config/biliup-media";
import { MediaSlot } from "./media";

export function BiliUpHero() {
  const { hero } = biliupLanding;

  return (
    <section
      className="relative overflow-hidden bg-[#050B14]"
      aria-label="BiliUp — proposta de valor"
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full opacity-30 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute -left-20 bottom-0 h-[360px] w-[360px] rounded-full opacity-20 blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(79,70,229,0.35) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container size="xl" className="w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 min-w-0 lg:order-1 lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]/75">
              {hero.eyebrow}
            </p>
            <div className="mt-4">
              <Badge variant="em-breve">{hero.badge}</Badge>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-[1.65] text-[#94a3b8]/80">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={hero.primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7C3AED] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[#7C3AED]/25 transition-all duration-300 ease-out motion-safe:hover:-translate-y-px hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-[#7C3AED]/30 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 focus:ring-offset-[#050B14]"
              >
                {hero.primaryCta}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href={hero.secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 ease-out hover:border-[#8B5CF6]/40 hover:bg-[#7C3AED]/10 hover:text-[#C4B5FD] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 focus:ring-offset-[#050B14]"
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <SectionReveal>
              <MediaSlot
                asset={biliupMedia.hero}
                priority
                sizes="(max-width: 1024px) 70vw, 380px"
              />
            </SectionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
