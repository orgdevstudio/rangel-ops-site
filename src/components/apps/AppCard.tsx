import Link from "next/link";
import type { App } from "@/types";
import { Card, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import { AppIcon } from "./AppIcon";

export interface AppCardProps {
  app: App;
  className?: string;
}

const statusLabels = {
  disponivel: "Disponível",
  "em-breve": "Em breve",
  beta: "Beta",
} as const;

function PlatformSyncStrip() {
  return (
    <div
      className="mt-5 rounded-xl border border-[#0EA5E9]/30 bg-[rgba(14,165,233,0.06)] px-3 py-3 sm:px-4"
      aria-label="Android e ERP Web sincronizados"
    >
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0EA5E9]/35 text-[#22D3EE]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10.5 1.5h3a1 1 0 011 1v1h-5v-1a1 1 0 011-1zM7.5 3.5h9A1.5 1.5 0 0118 5v14a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 19V5a1.5 1.5 0 011.5-1.5zM12 18.25h.01"
              />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-tight text-white">Android</p>
            <p className="text-[11px] leading-tight text-[#94a3b8]/80">App mobile</p>
          </div>
        </div>

        <span
          className="flex shrink-0 items-center justify-center text-[#0EA5E9] sm:px-1"
          aria-hidden
        >
          <svg className="h-5 w-5 rotate-90 sm:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M8 7l-4 5 4 5M16 7l4 5-4 5"
            />
          </svg>
        </span>

        <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:justify-end">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0EA5E9]/35 text-[#22D3EE]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-tight text-white">ERP Web</p>
            <p className="text-[11px] leading-tight text-[#94a3b8]/80">Plataforma Web</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppCard({ app, className }: AppCardProps) {
  const status = app.status ?? "disponivel";
  const isClickable = !!app.href;

  const content = (
    <Card
      variant="elevated"
      className={cn(
        "h-full flex flex-col transition-all duration-300 ease-out",
        isClickable && "cursor-pointer group",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <AppIcon app={app} size="sm" />
        {app.status && (
          <Badge variant={status}>{statusLabels[status]}</Badge>
        )}
      </div>
      <h3 className="mt-8 text-lg font-bold tracking-tight text-white leading-snug group-hover:text-[#0EA5E9] transition-colors duration-300 ease-out">
        {app.name}
      </h3>
      <p className="mt-4 text-[#94a3b8]/90 text-sm leading-[1.6] flex-1 line-clamp-2">
        {app.shortDescription ?? app.description}
      </p>
      {app.webAccess && <PlatformSyncStrip />}
      {isClickable && (
        <span className="mt-6 inline-flex items-center text-sm font-semibold text-[#0EA5E9] group-hover:text-[#22D3EE] transition-colors duration-300 ease-out">
          {status === "disponivel" ? "Ver detalhes do app" : "Ver detalhes"}
          <svg
            className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      )}
    </Card>
  );

  if (isClickable && app.href) {
    return (
      <Link href={app.href} className="block h-full">
        {content}
      </Link>
    );
  }

  return <div className="h-full">{content}</div>;
}
