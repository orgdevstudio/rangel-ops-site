"use client";

import Image from "next/image";
import { useState } from "react";
import type { App } from "@/types";
import { cn } from "@/lib/utils";

export type AppIconSize = "sm" | "lg";

const sizeConfig = {
  sm: {
    box: "h-12 w-12 rounded-xl text-lg",
    letter: "bg-[#0EA5E9]/20 group-hover:bg-[#0EA5E9]/30",
    px: 48,
  },
  lg: {
    box: "h-20 w-20 rounded-2xl text-2xl",
    letter: "bg-[#0EA5E9]/20",
    px: 80,
  },
} as const;

export interface AppIconProps {
  app: App;
  size?: AppIconSize;
  className?: string;
}

/**
 * Ícone do app: imagem em `app.icon` quando definida; senão, inicial do nome.
 * Em falha de carregamento da imagem, volta para a inicial.
 */
export function AppIcon({ app, size = "sm", className }: AppIconProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const cfg = sizeConfig[size];
  const showImage = Boolean(app.icon) && !imageFailed;

  if (showImage && app.icon) {
    return (
      <div
        className={cn(
          "relative shrink-0 overflow-hidden bg-[#0EA5E9]/10 ring-1 ring-white/10 transition-colors duration-300 ease-out",
          cfg.box,
          size === "sm" && "group-hover:ring-[#0EA5E9]/35",
          className
        )}
      >
        <Image
          src={app.icon}
          alt=""
          width={cfg.px}
          height={cfg.px}
          className="h-full w-full object-cover"
          onError={() => setImageFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center font-bold text-[#0EA5E9] transition-colors duration-300 ease-out",
        cfg.box,
        cfg.letter,
        className
      )}
      aria-hidden
    >
      {app.name.charAt(0)}
    </div>
  );
}
