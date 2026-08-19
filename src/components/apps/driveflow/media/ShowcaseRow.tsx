import { SectionReveal } from "@/components/ui";
import { MediaSlot } from "./MediaSlot";
import { cn } from "@/lib/utils";
import type { DriveflowMediaAsset } from "@/config/driveflow-media";

export type ShowcaseRowProps = {
  eyebrow?: string;
  title: string;
  description: string;
  asset: DriveflowMediaAsset;
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
          <MediaSlot asset={asset} />
        </div>
      </div>
    </SectionReveal>
  );
}
