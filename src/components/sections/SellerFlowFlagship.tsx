import Link from "next/link";
import Image from "next/image";
import { apps } from "@/config/apps";
import { homeLanding } from "@/config/home-landing";
import { sellerflowMedia } from "@/config/sellerflow-media";
import { Section, Container, SectionReveal } from "@/components/ui";

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
  </svg>
);

export function SellerFlowFlagship() {
  const { flagship } = homeLanding;
  const sellerflow = apps.find((a) => a.slug === "sellerflow");
  const media = sellerflowMedia.hero;

  return (
    <Section variant="default" background="default">
      <SectionReveal>
        <Container size="xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
                {flagship.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
                {flagship.title}
              </h2>
              <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/80">
                {flagship.subtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href={flagship.primaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0EA5E9] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[#0EA5E9]/20 transition-all duration-300 ease-out hover:bg-[#0d9cd9] hover:shadow-lg hover:shadow-[#0EA5E9]/25"
                >
                  {flagship.primaryCta}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                {sellerflow?.googlePlayUrl && (
                  <a
                    href={sellerflow.googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 ease-out hover:border-[#0EA5E9]/40 hover:bg-[#0EA5E9]/10 hover:text-[#0EA5E9]"
                  >
                    <GooglePlayIcon />
                    {flagship.secondaryCta}
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2 sm:p-3">
                <div
                  className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] opacity-50 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, rgba(14,165,233,0.25) 0%, transparent 65%)",
                  }}
                  aria-hidden
                />
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  className="h-auto w-full rounded-xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
