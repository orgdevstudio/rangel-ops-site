import { SectionReveal } from "@/components/ui";
import { ProductMedia } from "./ProductMedia";
import { DeviceFrame } from "./DeviceFrame";
import { cn } from "@/lib/utils";
import type { SellerflowMediaAsset } from "@/config/sellerflow-media";

export type ShowcaseRowProps = {
  eyebrow?: string;
  title: string;
  description: string;
  asset: SellerflowMediaAsset;
  /** Quando true: texto à esquerda, imagem à direita no padrão invertido (imagem esquerda no desktop). */
  reverse?: boolean;
  className?: string;
};

export function ShowcaseRow({
  eyebrow,
  title,
  description,
  asset,
  reverse = false,
  className,
}: ShowcaseRowProps) {
  const isPhone = asset.aspect === "phone";

  return (
    <SectionReveal>
      <div
        className={cn(
          "grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14",
          className
        )}
      >
        <div
          className={cn(
            "lg:col-span-5",
            reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"
          )}
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
              {eyebrow}
            </p>
          )}
          <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl leading-[1.2]">
            {title}
          </h3>
          <p className="mt-4 text-base leading-[1.65] text-[#94a3b8]/85">
            {description}
          </p>
        </div>

        <div
          className={cn(
            "flex justify-center lg:col-span-7",
            reverse ? "order-1 lg:order-1" : "order-1 lg:order-2",
            reverse ? "lg:justify-start" : "lg:justify-end"
          )}
        >
          <DeviceFrame variant={isPhone ? "phone" : "desktop"}>
            <ProductMedia
              asset={asset}
              disableReveal
              glow={!isPhone}
              objectFit={isPhone ? "contain" : "cover"}
              className={cn(!isPhone && "border-0 bg-transparent p-0 shadow-none")}
              sizes={
                isPhone
                  ? "(max-width: 768px) 75vw, 340px"
                  : "(max-width: 1024px) 100vw, 58vw"
              }
            />
          </DeviceFrame>
        </div>
      </div>
    </SectionReveal>
  );
}
