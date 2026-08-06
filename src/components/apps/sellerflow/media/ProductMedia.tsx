"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { SellerflowMediaAsset } from "@/config/sellerflow-media";

export type ProductMediaProps = {
  asset: SellerflowMediaAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** Desativa animação de entrada (ex.: já envolvido por outro reveal). */
  disableReveal?: boolean;
  glow?: boolean;
  /** object-fit da imagem. Phone screenshots usam contain. */
  objectFit?: "cover" | "contain";
};

export function ProductMedia({
  asset,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  disableReveal = false,
  glow = true,
  objectFit = "cover",
}: ProductMediaProps) {
  const isPhone = asset.aspect === "phone";
  const fit = objectFit ?? (isPhone ? "contain" : "cover");

  const frame = (
    <div
      className={cn(
        "group relative overflow-hidden",
        !isPhone &&
          "rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2 sm:p-3",
        !isPhone &&
          "transition-all duration-300 ease-out motion-safe:hover:-translate-y-px motion-safe:hover:scale-[1.01] motion-safe:hover:border-[#0EA5E9]/30",
        className
      )}
      style={
        glow && !isPhone
          ? { boxShadow: "0 0 48px rgba(14,165,233,0.12)" }
          : undefined
      }
    >
      {glow && !isPhone && (
        <div
          className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] opacity-50 blur-3xl transition-opacity duration-300 motion-safe:group-hover:opacity-70"
          style={{
            background:
              "radial-gradient(circle at center, rgba(14,165,233,0.28) 0%, transparent 70%)",
          }}
          aria-hidden
        />
      )}
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={priority}
        className={cn(
          "h-auto w-full",
          fit === "contain" ? "object-contain" : "object-cover",
          !isPhone && "rounded-xl"
        )}
        sizes={sizes}
      />
    </div>
  );

  if (disableReveal) return frame;

  return (
    <SectionReveal className="motion-safe:[&]:duration-400">
      {frame}
    </SectionReveal>
  );
}
