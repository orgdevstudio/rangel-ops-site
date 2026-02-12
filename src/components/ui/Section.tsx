import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** ID para âncoras de navegação */
  id?: string;
  /** Padding vertical: default (respiro generoso), cta (antes do footer), tight, none */
  variant?: "default" | "tight" | "cta" | "none";
  /** Variante de fundo — alternar default/muted para ritmo visual; dark/transition para CTA e transições */
  background?: "default" | "muted" | "dark" | "transition";
}

const variantClasses = {
  default: "py-28 lg:py-48",
  tight: "py-20 lg:py-28",
  cta: "py-40 lg:py-56",
  none: "py-0",
};

const backgroundClasses = {
  default: "bg-[#050B14] text-white",
  muted: "bg-[#0A1624] text-white",
  dark: "bg-[#060D18] text-white",
  /** Transição neutra entre blocos densos */
  transition: "bg-[#070E1A] text-white",
};

export function Section({
  id,
  className,
  variant = "default",
  background = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        variantClasses[variant],
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
