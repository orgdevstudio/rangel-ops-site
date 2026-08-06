import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container, Logo } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A1624] pt-20 lg:pt-28">
      <Container size="xl">
        <div className="pb-16 lg:pb-20">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-5">
              <Logo href="/" imageClassName="h-10 w-auto lg:h-12" />
              <p className="mt-5 max-w-sm text-[13px] leading-[1.65] text-[#94a3b8]/90">
                {siteConfig.brand.description}
              </p>
            </div>

            {/* Institucional */}
            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#94a3b8]/70">
                Institucional
              </h4>
              <ul className="mt-5 space-y-3">
                {siteConfig.footer.institucional.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#94a3b8]/90 transition-colors duration-200 ease-out hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-3 lg:col-start-10">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#94a3b8]/70">
                Legal
              </h4>
              <ul className="mt-5 space-y-3">
                {siteConfig.footer.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#94a3b8]/90 transition-colors duration-200 ease-out hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 border-t border-white/5 pt-6">
            <p className="text-center text-[12px] text-[#94a3b8]/60">
              © {new Date().getFullYear()} {siteConfig.brand.name}. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
