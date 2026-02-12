import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[50vh] max-h-[90vh] items-center overflow-hidden bg-[#050B14]"
      aria-label="Proposta de valor principal"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full opacity-40 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.4) 0%, rgba(34,211,238,0.1) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute right-0 top-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container size="xl" className="w-full py-28 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-7 min-w-0">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]/75">
              {siteConfig.brand.tagline}
            </p>
            <h1 className="relative text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
              <span
                className="absolute -top-4 -left-4 h-32 w-32 rounded-full opacity-20 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(14,165,233,0.5) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <span className="relative block">
                Operações que{" "}
                <span className="bg-gradient-to-r from-[#0EA5E9] via-[#22D3EE] to-[#0EA5E9] bg-clip-text text-transparent">
                  escalam
                </span>
                , decisões que impactam
              </span>
            </h1>
            <p className="mt-10 text-base text-[#94a3b8]/70 max-w-xl leading-[1.65]">
              Desenvolvemos aplicativos que unificam controle, automação e visibilidade. Soluções operacionais e estratégicas para quem quer organizar, automatizar e crescer.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/aplicativos"
                className="inline-flex items-center gap-2 rounded-xl border border-[#0EA5E9]/40 bg-[#0EA5E9]/20 px-6 py-4 text-base font-medium text-white transition-colors duration-200 ease-out hover:bg-[#0EA5E9]/30 hover:border-[#0EA5E9]/60"
              >
                Conheça nossas soluções
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:justify-end lg:order-2 lg:col-span-5">
            <div
              className="relative flex w-fit items-center justify-center rounded-2xl p-3 sm:p-4"
              style={{
                background:
                  "linear-gradient(145deg, rgba(14,165,233,0.06) 0%, rgba(34,211,238,0.02) 50%, transparent 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 0 32px rgba(14,165,233,0.08)",
              }}
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.12) 0%, transparent 65%)",
                }}
              />
              {siteConfig.brand.heroImage?.src ? (
                <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                  <Image
                    src={siteConfig.brand.heroImage.src}
                    alt={siteConfig.brand.heroImage.alt}
                    width={384}
                    height={384}
                    className="h-full w-full object-contain object-center"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0EA5E9]/15 font-bold text-xl text-[#0EA5E9] backdrop-blur-sm">
                  RO
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
