"use client";

import { useState } from "react";
import { Dialog, Button, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

const DevicesIcon = () => (
  <svg
    className="h-8 w-8 text-[#22D3EE]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export interface ClientAccessCtaProps {
  /** Nome do aplicativo (ex.: SellerFlow). */
  appName: string;
  /** URL de login da versão Web. */
  loginUrl: string;
  /** Label do botão. Padrão: "Já sou cliente". */
  label?: string;
  className?: string;
}

export function ClientAccessCta({
  appName,
  loginUrl,
  label = "Já sou cliente",
  className,
}: ClientAccessCtaProps) {
  const [open, setOpen] = useState(false);

  const handleContinue = () => {
    window.location.assign(loginUrl);
  };

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#94a3b8]/70">
        Acesso para clientes
      </p>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative inline-flex flex-col items-center gap-3 rounded-2xl border border-[#0EA5E9]/40",
          "bg-[#0EA5E9]/15 px-8 py-5 text-white shadow-lg shadow-[#0EA5E9]/15",
          "transition-all duration-300 ease-out",
          "hover:border-[#0EA5E9]/60 hover:bg-[#0EA5E9]/25 hover:shadow-xl hover:shadow-[#0EA5E9]/20 hover:-translate-y-px",
          "focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 focus:ring-offset-[#050B14]",
          "active:translate-y-0"
        )}
      >
        <span className="flex items-center gap-2">
          <Badge variant="accent" className="px-2.5 py-0.5 text-[11px] font-semibold tracking-wide">
            Web
          </Badge>
          <Badge variant="accent" className="px-2.5 py-0.5 text-[11px] font-semibold tracking-wide">
            Desktop
          </Badge>
        </span>
        <span className="text-lg font-semibold tracking-tight sm:text-xl">
          {label}
        </span>
        <span className="text-xs font-medium text-[#94a3b8]/90 group-hover:text-[#94a3b8]">
          Acesso Web para assinantes
        </span>
      </button>

      <Dialog
        open={open}
        onOpenChange={setOpen}
        title={`Continuar no ${appName} Web`}
        description={`A versão Web do ${appName} usa a mesma conta do aplicativo Android. Seus dados permanecem sincronizados entre o celular e o computador.`}
        showCloseButton
        headerSlot={
          <>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0EA5E9]/25 bg-[#0EA5E9]/10">
              <DevicesIcon />
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="accent" className="px-2.5 py-0.5 text-[11px] font-semibold tracking-wide">
                Web
              </Badge>
              <Badge variant="accent" className="px-2.5 py-0.5 text-[11px] font-semibold tracking-wide">
                Desktop
              </Badge>
            </div>
          </>
        }
        footer={
          <>
            <Button
              type="button"
              variant="ghost"
              size="md"
              onClick={() => setOpen(false)}
              className="w-full sm:w-auto"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={handleContinue}
              className="w-full sm:w-auto"
            >
              Continuar para o Web
            </Button>
          </>
        }
      >
        <div className="space-y-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 text-left text-sm leading-[1.65] text-[#94a3b8]/90">
          <p>
            O acesso é exclusivo para quem já possui uma{" "}
            <span className="text-white/90">assinatura ativa</span>.
          </p>
          <p>
            Ainda não é assinante? Conheça os planos diretamente pelo aplicativo
            Android.
          </p>
        </div>
      </Dialog>
    </div>
  );
}
