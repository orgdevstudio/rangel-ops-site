"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/ui";
import { sellerflowMedia } from "@/config/sellerflow-media";
import { cn } from "@/lib/utils";

export type VideoSlotProps = {
  className?: string;
  title?: string;
};

/**
 * Slot preparado para vídeo demonstrativo.
 * Renderiza apenas quando `sellerflowMedia.video.enabled === true`.
 */
export function VideoSlot({
  className,
  title = "Veja o SellerFlow em ação",
}: VideoSlotProps) {
  const { video } = sellerflowMedia;

  if (!video.enabled) {
    return null;
  }

  return (
    <SectionReveal>
      <div className={cn("mx-auto max-w-4xl", className)}>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
          Demonstração
        </p>
        <h3 className="mb-8 text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {title}
        </h3>
        <div
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40"
          style={{ boxShadow: "0 0 48px rgba(14,165,233,0.12)" }}
        >
          <video
            className="h-auto w-full"
            controls
            playsInline
            poster={video.poster.src}
            preload="metadata"
          >
            <source src={video.src} type="video/mp4" />
          </video>
          {/* Fallback visual se o vídeo falhar: poster */}
          <noscript>
            <Image
              src={video.poster.src}
              alt={video.poster.alt}
              width={video.poster.width}
              height={video.poster.height}
              className="h-auto w-full"
            />
          </noscript>
        </div>
      </div>
    </SectionReveal>
  );
}
