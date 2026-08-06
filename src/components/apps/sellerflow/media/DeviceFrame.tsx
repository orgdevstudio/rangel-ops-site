import { cn } from "@/lib/utils";
import type { MediaAspect } from "@/config/sellerflow-media";
import type { ReactNode } from "react";

export type DeviceFrameProps = {
  variant?: MediaAspect | "phone" | "laptop" | "composition";
  children: ReactNode;
  className?: string;
};

export function DeviceFrame({
  variant = "composition",
  children,
  className,
}: DeviceFrameProps) {
  if (variant === "phone") {
    return (
      <div className={cn("relative mx-auto w-full max-w-[300px] sm:max-w-[340px]", className)}>
        {/* Ambient glow behind device */}
        <div
          className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(14,165,233,0.35) 0%, rgba(34,211,238,0.08) 45%, transparent 70%)",
          }}
          aria-hidden
        />

        <div
          className={cn(
            "group relative rounded-[2rem] border border-white/10 bg-[#0B1220] p-2.5",
            "shadow-[0_24px_64px_-12px_rgba(0,0,0,0.65),0_0_40px_rgba(14,165,233,0.12)]",
            "transition-all duration-300 ease-out",
            "motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_28px_72px_-12px_rgba(0,0,0,0.7),0_0_56px_rgba(14,165,233,0.2)]"
          )}
        >
          {/* Screen bezel — light backdrop for light app UI */}
          <div className="overflow-hidden rounded-[1.45rem] bg-[#F8FAFC] ring-1 ring-black/20">
            {children}
          </div>
        </div>
      </div>
    );
  }

  const surfaceClasses: Record<string, string> = {
    laptop: "rounded-2xl p-2 sm:p-3",
    desktop: "rounded-2xl p-2 sm:p-3",
    landscape: "rounded-2xl p-2 sm:p-3",
    composition: "rounded-2xl p-2 sm:p-3",
  };

  return (
    <div
      className={cn(
        "relative border border-white/[0.08] bg-[#0A1624]/80 backdrop-blur-sm",
        "shadow-[0_0_40px_rgba(14,165,233,0.1)]",
        "transition-all duration-300 ease-out motion-safe:hover:-translate-y-px motion-safe:hover:shadow-[0_0_56px_rgba(14,165,233,0.16)]",
        surfaceClasses[variant] ?? surfaceClasses.composition,
        className
      )}
    >
      {children}
    </div>
  );
}
