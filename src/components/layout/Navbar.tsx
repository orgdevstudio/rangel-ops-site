"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Container, Logo, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050B14]/95 backdrop-blur supports-[backdrop-filter]:bg-[#050B14]/80">
      <Container size="xl">
        <nav className="flex h-24 items-center justify-between lg:h-32">
          {/* Logo */}
          <Logo href="/" priority imageClassName="h-24 w-auto lg:h-32 hover:opacity-90 transition-opacity" />

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 ease-out hover:text-white",
                  pathname === link.href ? "text-white" : "text-[#94a3b8]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile menu button */}
          <div className="flex items-center gap-4">
            <Link href="/contato" className="hidden sm:block">
              <Button size="sm" className="bg-[#0EA5E9] text-white hover:bg-[#0d9cd9]">
                Falar com especialista
              </Button>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-[#94a3b8] transition-colors duration-200 ease-out hover:bg-white/10 hover:text-white md:hidden"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {siteConfig.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 ease-out hover:bg-white/5 hover:text-white",
                    pathname === link.href ? "text-white" : "text-[#94a3b8]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contato"
                onClick={() => setIsOpen(false)}
                className="mt-2"
              >
                <Button size="sm" className="w-full bg-[#0EA5E9] text-white hover:bg-[#0d9cd9]">
                  Falar com especialista
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
