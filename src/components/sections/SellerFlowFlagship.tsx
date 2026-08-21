import Link from "next/link";
import Image from "next/image";
import { apps } from "@/config/apps";
import { homeLanding } from "@/config/home-landing";
import { sellerflowMedia } from "@/config/sellerflow-media";
import { driveflowMedia } from "@/config/driveflow-media";
import { Section, Container, SectionReveal } from "@/components/ui";
import { cn } from "@/lib/utils";

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
  </svg>
);

type FlagshipCopy = {
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
};

type FlagshipMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function FlagshipMediaFrame({ media }: { media: FlagshipMedia }) {
  return (
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
  );
}

function FlagshipRow({
  copy,
  media,
  googlePlayUrl,
  reverse = false,
}: {
  copy: FlagshipCopy;
  media: FlagshipMedia;
  googlePlayUrl?: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
      <div
        className={cn(
          "lg:col-span-5",
          reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"
        )}
      >
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
          {copy.title}
        </h2>
        <p className="mt-5 text-base leading-[1.65] text-[#94a3b8]/80">
          {copy.subtitle}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={copy.primaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0EA5E9] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[#0EA5E9]/20 transition-all duration-300 ease-out hover:bg-[#0d9cd9] hover:shadow-lg hover:shadow-[#0EA5E9]/25"
          >
            {copy.primaryCta}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {googlePlayUrl && (
            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 ease-out hover:border-[#0EA5E9]/40 hover:bg-[#0EA5E9]/10 hover:text-[#0EA5E9]"
            >
              <GooglePlayIcon />
              {copy.secondaryCta}
            </a>
          )}
        </div>
      </div>

      <div
        className={cn(
          "lg:col-span-7",
          reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"
        )}
      >
        <FlagshipMediaFrame media={media} />
      </div>
    </div>
  );
}

function FlagshipDivider() {
  return (
    <div className="relative my-16 lg:my-24" aria-hidden>
      <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div
        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0EA5E9]/80"
        style={{ boxShadow: "0 0 18px 4px rgba(14,165,233,0.35)" }}
      />
    </div>
  );
}

export function SellerFlowFlagship() {
  const { flagship } = homeLanding;
  const sellerflow = apps.find((a) => a.slug === "sellerflow");
  const driveflow = apps.find((a) => a.slug === "driveflow");

  return (
    <Section variant="default" background="default" aria-label="Disponível agora">
      <SectionReveal>
        <Container size="xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
            {flagship.eyebrow}
          </p>

          <div className="mt-10 lg:mt-14">
            <FlagshipRow
              copy={flagship.sellerflow}
              media={sellerflowMedia.hero}
              googlePlayUrl={sellerflow?.googlePlayUrl}
            />
          </div>

          <FlagshipDivider />

          <FlagshipRow
            copy={flagship.driveflow}
            media={driveflowMedia.hero}
            googlePlayUrl={driveflow?.googlePlayUrl}
            reverse
          />
        </Container>
      </SectionReveal>
    </Section>
  );
}
