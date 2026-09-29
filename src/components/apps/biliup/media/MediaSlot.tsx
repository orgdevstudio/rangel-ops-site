import Image from "next/image";
import { cn } from "@/lib/utils";
import type { BiliupMediaAsset } from "@/config/biliup-media";
import { DeviceFrame } from "./DeviceFrame";

export type MediaSlotProps = {
  asset: BiliupMediaAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
  glow?: boolean;
};

function Placeholder({
  asset,
  className,
}: {
  asset: BiliupMediaAsset;
  className?: string;
}) {
  const isPhone = asset.aspect === "phone";

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        isPhone ? "aspect-[470/1024] bg-[#050B14]" : "aspect-[3/2] rounded-xl bg-[#050B14]",
        className
      )}
      aria-label={asset.slotLabel}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(124,58,237,0.2) 0%, transparent 62%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <p className="relative px-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#94a3b8]/55">
        {asset.slotLabel}
      </p>
    </div>
  );
}

export function MediaSlot({
  asset,
  priority = false,
  className,
  sizes,
  glow = true,
}: MediaSlotProps) {
  const isPhone = asset.aspect === "phone";
  const isIcon = asset.aspect === "icon";

  const media = asset.ready ? (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={cn(
        "h-auto w-full",
        isPhone ? "object-contain" : isIcon ? "object-cover rounded-3xl" : "object-cover rounded-xl"
      )}
      sizes={
        sizes ??
        (isPhone
          ? "(max-width: 768px) 75vw, 340px"
          : isIcon
            ? "(max-width: 1024px) 70vw, 420px"
            : "(max-width: 1024px) 100vw, 58vw")
      }
    />
  ) : (
    <Placeholder asset={asset} />
  );

  if (isPhone) {
    return (
      <DeviceFrame variant="phone" className={className}>
        {media}
      </DeviceFrame>
    );
  }

  if (isIcon) {
    return (
      <div className={cn("group relative mx-auto w-full max-w-[320px] sm:max-w-[380px]", className)}>
        {glow && (
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-70 blur-3xl transition-opacity duration-300 motion-safe:group-hover:opacity-90"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(124,58,237,0.45) 0%, rgba(139,92,246,0.12) 45%, transparent 70%)",
            }}
            aria-hidden
          />
        )}
        <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.65),0_0_40px_rgba(124,58,237,0.18)] ring-1 ring-white/10 transition-all duration-300 ease-out motion-safe:group-hover:-translate-y-1">
          {media}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("group relative", className)}>
      {glow && (
        <div
          className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] opacity-50 blur-3xl transition-opacity duration-300 motion-safe:group-hover:opacity-70"
          style={{
            background:
              "radial-gradient(circle at center, rgba(124,58,237,0.3) 0%, transparent 70%)",
          }}
          aria-hidden
        />
      )}
      <DeviceFrame variant={asset.aspect === "landscape" ? "landscape" : "composition"}>
        {media}
      </DeviceFrame>
    </div>
  );
}
