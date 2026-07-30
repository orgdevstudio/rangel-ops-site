"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const emptySubscribe = () => () => {};

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
  /** Conteúdo do rodapé (ações). */
  footer?: ReactNode;
  /** Conteúdo acima do título (ícone, badges, etc.). */
  headerSlot?: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Exibe botão X no canto superior direito. Padrão: false. */
  showCloseButton?: boolean;
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
} as const;

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  headerSlot,
  size = "md",
  className,
  showCloseButton = false,
}: DialogProps) {
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const close = useCallback(() => onOpenChange(false), [onOpenChange]);

  useEffect(() => {
    if (!open) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    if (panel) {
      const focusables = panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      const first = focusables[0];
      (first ?? panel).focus();
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

      if (focusables.length === 0) {
        event.preventDefault();
        panelRef.current.focus();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, close]);

  if (!mounted || !open) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden
        onClick={close}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        className={cn(
          "relative z-10 w-full rounded-2xl border border-white/10 bg-[#0A1624] p-6 shadow-xl outline-none sm:p-8",
          sizeClasses[size],
          className
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-lg p-1.5 text-[#94a3b8] transition-colors duration-200 ease-out hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 focus:ring-offset-[#0A1624]"
            aria-label="Fechar"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {headerSlot && <div className="mb-5 flex flex-col items-center gap-3">{headerSlot}</div>}

        <h2
          id={titleId}
          className="text-center text-xl font-bold tracking-tight text-white"
        >
          {title}
        </h2>

        {description && (
          <p
            id={descriptionId}
            className="mt-4 text-center text-sm leading-[1.65] text-[#94a3b8]/90"
          >
            {description}
          </p>
        )}

        {children && <div className="mt-5">{children}</div>}

        {footer && (
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
