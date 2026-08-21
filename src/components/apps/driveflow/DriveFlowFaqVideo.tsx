"use client";

import { useEffect, useState } from "react";

type DriveFlowFaqVideoProps = {
  title: string;
  youtubeId: string;
  watchUrl: string;
  active: boolean;
};

type VideoStatus = "preview" | "playing" | "offline" | "error";

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M23.5 6.2a3.02 3.02 0 00-2.13-2.14C19.5 3.7 12 3.7 12 3.7s-7.5 0-9.37.36A3.02 3.02 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3.02 3.02 0 002.13 2.14C4.5 20.3 12 20.3 12 20.3s7.5 0 9.37-.36a3.02 3.02 0 002.13-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.75 15.52V8.48L15.84 12l-6.09 3.52z" />
  </svg>
);

function isOffline() {
  return typeof navigator !== "undefined" && navigator.onLine === false;
}

export function DriveFlowFaqVideo({
  title,
  youtubeId,
  watchUrl,
  active,
}: DriveFlowFaqVideoProps) {
  const [status, setStatus] = useState<VideoStatus>("preview");
  const [thumbKey, setThumbKey] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const thumbnailSrc = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const embedSrc = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`;

  useEffect(() => {
    if (!active) {
      setStatus("preview");
      setIsExpanded(false);
    }
  }, [active]);

  useEffect(() => {
    const onOffline = () => setStatus("offline");
    window.addEventListener("offline", onOffline);
    return () => window.removeEventListener("offline", onOffline);
  }, []);

  const retry = () => {
    setThumbKey((key) => key + 1);
    setStatus("preview");
  };

  const play = () => {
    if (isOffline()) {
      setStatus("offline");
      return;
    }
    setStatus("playing");
  };

  const onThumbError = () => {
    setStatus(isOffline() ? "offline" : "error");
  };

  return (
    <div className="mt-5">
      <p className="text-sm font-semibold tracking-tight text-white">{title}</p>

      <div
        className={`mx-auto mt-4 w-full transition-[max-width] duration-300 ease-out ${
          isExpanded
            ? "max-w-[min(100%,420px)] sm:max-w-[380px]"
            : "max-w-[min(100%,260px)] sm:max-w-[220px]"
        }`}
      >
        <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#050B14]">
          <button
            type="button"
            onClick={() => setIsExpanded((open) => !open)}
            className="absolute right-2.5 top-2.5 z-10 flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-black/55 text-white backdrop-blur-sm transition-colors duration-200 ease-out hover:border-[#0EA5E9]/50 hover:bg-[#0EA5E9]/20 hover:text-[#22D3EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]"
            aria-label={isExpanded ? "Diminuir vídeo" : "Ampliar vídeo"}
            aria-pressed={isExpanded}
          >
            {isExpanded ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9H5V5m10 4h4V5M9 15H5v4m10-4h4v4" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            )}
          </button>

          {status === "playing" ? (
            <iframe
              src={embedSrc}
              title={title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : status === "offline" || status === "error" ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-4 text-center">
              <p className="text-sm leading-[1.65] text-[#94a3b8]/90">
                {status === "offline"
                  ? "Não foi possível carregar o vídeo porque você está sem conexão com a internet."
                  : "Não foi possível carregar o vídeo agora."}
              </p>
              <button
                type="button"
                onClick={retry}
                className="rounded-lg border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-white transition-colors duration-200 ease-out hover:border-[#0EA5E9]/40 hover:bg-[#0EA5E9]/10 hover:text-[#22D3EE]"
              >
                Tentar novamente
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={play}
              className="group relative h-full w-full"
              aria-label={`Reproduzir: ${title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={thumbKey}
                src={thumbnailSrc}
                alt=""
                loading="lazy"
                onError={onThumbError}
                className="h-full w-full object-cover"
              />
              <span
                className="absolute inset-0 bg-black/35 transition-colors duration-200 group-hover:bg-black/45"
                aria-hidden
              />
              <span
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0EA5E9] text-white shadow-md shadow-[#0EA5E9]/30 transition-transform duration-200 ease-out group-hover:scale-105"
                aria-hidden
              >
                <svg className="ml-0.5 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <button
          type="button"
          onClick={() => setIsExpanded((open) => !open)}
          className="text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#0EA5E9]"
        >
          {isExpanded ? "Diminuir" : "Ampliar"}
        </button>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-[#0EA5E9]"
        >
          <YouTubeIcon className="h-4 w-4 text-[#FF0000]" />
          Assistir no YouTube
        </a>
      </div>
    </div>
  );
}
