import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export type BadgeVariant = "accent" | "disponivel" | "em-breve" | "beta" | "muted";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  accent:
    "rounded-full bg-[#0EA5E9]/15 text-[#22D3EE] border border-[#0EA5E9]/30",
  disponivel:
    "rounded-full bg-[#0EA5E9]/20 text-[#22D3EE] border border-[#0EA5E9]/30",
  "em-breve":
    "rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30",
  beta:
    "rounded-full bg-[#0EA5E9]/20 text-[#22D3EE] border border-[#0EA5E9]/30",
  muted:
    "rounded-full bg-white/5 text-[#94a3b8] border border-white/10",
};

export function Badge({
  variant = "accent",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
