import { Section, Container } from "@/components/ui";

export function AboutPreview() {
  return (
    <Section id="sobre" variant="default" background="muted">
      <Container size="lg">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]/75">
              Quem somos
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.25]">
              A RangelOps nasceu para resolver operações em escala
            </h2>
            <p className="mt-8 text-base text-[#94a3b8]/85 max-w-prose leading-[1.65]">
              Somos uma empresa de tecnologia especializada em soluções SaaS para
              operações empresariais. Desenvolvemos aplicativos que automatizam
              processos, centralizam informações e entregam insights estratégicos
              para decisões mais assertivas.
            </p>
            <p className="mt-5 text-base text-[#94a3b8]/85 max-w-prose leading-[1.65]">
              Nossa proposta é construir um ecossistema integrado de ferramentas
              que se comunicam entre si, permitindo que sua operação cresça de
              forma organizada, segura e eficiente.
            </p>
          </div>
          <div className="relative">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(34,211,238,0.08) 100%)",
                border: "1px solid rgba(14,165,233,0.2)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0EA5E9]/20 text-[#0EA5E9] font-bold text-2xl mb-4">
                    RO
                  </div>
                  <p className="text-[#94a3b8] font-medium">
                    Ecossistema de soluções integradas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
