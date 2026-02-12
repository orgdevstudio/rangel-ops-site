import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered" | "flat";
}

const variantClasses = {
  default:
    "rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-white/10 hover:-translate-y-px hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)]",
  elevated:
    "rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.06] hover:border-[#0EA5E9]/15 hover:shadow-[0_8px_28px_-4px_rgba(0,0,0,0.14),0_0_24px_rgba(14,165,233,0.06)]",
  bordered:
    "rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ease-out hover:border-[#0EA5E9]/25",
  flat: "rounded-2xl bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 ease-out",
};

export function Card({
  className,
  variant = "default",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn("p-8 lg:p-10", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-bold text-white tracking-tight leading-snug",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-[#94a3b8]/90 mt-2 text-sm leading-[1.6]", className)} {...props} />
  );
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />;
}
