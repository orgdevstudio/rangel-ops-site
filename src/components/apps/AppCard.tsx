import Link from "next/link";
import type { App } from "@/types";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface AppCardProps {
  app: App;
  className?: string;
}

const statusLabels = {
  disponivel: "Disponível",
  "em-breve": "Em breve",
  beta: "Beta",
} as const;

const statusStyles = {
  disponivel:
    "rounded-full bg-[#0EA5E9]/20 text-[#22D3EE] border border-[#0EA5E9]/30",
  "em-breve":
    "rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30",
  beta:
    "rounded-full bg-[#0EA5E9]/20 text-[#22D3EE] border border-[#0EA5E9]/30",
} as const;

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
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0EA5E9]/20 text-[#0EA5E9] font-bold text-lg group-hover:bg-[#0EA5E9]/30 transition-colors duration-300 ease-out">
          {app.name.charAt(0)}
        </div>
        {app.status && (
          <span
            className={cn(
              "shrink-0 rounded-full px-3 py-1 text-xs font-medium",
              statusStyles[status]
            )}
          >
            {statusLabels[status]}
          </span>
        )}
      </div>
      <h3 className="mt-8 text-lg font-bold tracking-tight text-white leading-snug group-hover:text-[#0EA5E9] transition-colors duration-300 ease-out">
        {app.name}
      </h3>
      <p className="mt-4 text-[#94a3b8]/90 text-sm leading-[1.6] flex-1 line-clamp-2">
        {app.shortDescription ?? app.description}
      </p>
      {isClickable && (
        <span className="mt-8 inline-flex items-center text-sm font-semibold text-[#0EA5E9] group-hover:text-[#22D3EE] transition-colors duration-300 ease-out">
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
