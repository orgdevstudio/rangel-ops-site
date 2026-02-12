"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /** Sobrescreve o link (ex.: href="/"). Se não passar, renderiza só a imagem/texte */
  href?: string;
  /** Classe aplicada ao wrapper (Link ou span) */
  className?: string;
  /** Classe aplicada apenas à imagem (tamanho, object-fit) */
  imageClassName?: string;
  /** Alt da imagem (default: brand.name) */
  alt?: string;
  /** Largura da imagem (default: 280 para next/image) */
  width?: number;
  /** Altura da imagem (default: 72) */
  height?: number;
  /** Usar prioridade no carregamento (recomendado na navbar) */
  priority?: boolean;
}

/**
 * Logo reutilizável da marca.
 * Troque o arquivo em public/images/logo.svg (ou .png) sem alterar layout ou estilos.
 * Se não houver imagem, exibe o nome da marca em texto.
 */
export function Logo({
  href,
  className,
  imageClassName,
  alt,
  width = 280,
  height = 72,
  priority = false,
}: LogoProps) {
  const logo = siteConfig.brand.logo;
  const label = alt ?? logo?.alt ?? siteConfig.brand.name;

  const imageContent = logo?.src ? (
    <Image
      src={logo.src}
      alt={label}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={cn("h-16 w-auto object-contain object-left", imageClassName)}
    />
  ) : (
    <span className="text-xl font-bold tracking-tight text-white transition-colors duration-300 ease-out hover:text-[#0EA5E9] lg:text-2xl">
      {siteConfig.brand.name}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={cn("flex items-center", className)} aria-label={`${siteConfig.brand.name} - Página inicial`}>
        {imageContent}
      </Link>
    );
  }

  return <span className={cn("flex items-center", className)}>{imageContent}</span>;
}
