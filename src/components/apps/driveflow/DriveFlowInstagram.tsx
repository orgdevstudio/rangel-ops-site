import { Section, Container, SectionReveal } from "@/components/ui";
import { driveflowLanding } from "@/config/driveflow-landing";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export function DriveFlowInstagram() {
  const { instagram } = driveflowLanding;

  return (
    <Section variant="tight" background="muted" aria-label="Comunidade DriveFlow no Instagram">
      <SectionReveal>
        <Container size="md">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#94a3b8]">
              <InstagramIcon className="h-4 w-4" />
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94a3b8]/55">
              {instagram.eyebrow}
            </p>
            <h2 className="mt-2.5 text-lg font-semibold tracking-tight text-white sm:text-xl leading-[1.3]">
              {instagram.title}
            </h2>
            <p className="mt-2.5 max-w-sm text-sm leading-[1.65] text-[#94a3b8]/75">
              {instagram.subtitle}{" "}
              <span className="font-medium text-[#94a3b8]">{instagram.handle}</span>
            </p>

            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/12 bg-transparent px-4 py-2 text-sm font-medium text-[#94a3b8] transition-all duration-200 ease-out hover:border-[#0EA5E9]/40 hover:bg-[rgba(14,165,233,0.06)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/50 focus:ring-offset-2 focus:ring-offset-[#0A1624]"
            >
              {instagram.ctaLabel}
              <svg className="h-3.5 w-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
