"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 focus:ring-offset-[#050B14] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-out";

    const variants = {
      primary:
        "bg-[#0EA5E9] text-white hover:bg-[#0d9cd9] shadow-md shadow-[#0EA5E9]/20 hover:shadow-lg hover:shadow-[#0EA5E9]/25 hover:-translate-y-px active:translate-y-0",
      secondary:
        "bg-[#0A1624] text-white border border-white/20 hover:border-white/30 hover:bg-white/5",
      outline:
        "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/40",
      ghost: "text-[#94a3b8] hover:bg-white/5 hover:text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
