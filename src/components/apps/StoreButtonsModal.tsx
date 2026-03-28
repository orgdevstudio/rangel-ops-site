"use client";

import { useState } from "react";

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

type StoreButtonsModalProps = {
  /** Nome do app exibido no modal (ex.: SellerFlow, DriveFlow). */
  appName: string;
};

export function StoreButtonsModal({ appName }: StoreButtonsModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center gap-3 rounded-xl bg-[#1e293b] px-5 py-3.5 text-white transition-all duration-200 ease-out hover:bg-[#334155]"
        >
          <GooglePlayIcon />
          <div className="text-left">
            <span className="block text-[10px]">Baixar na</span>
            <span className="block text-sm font-bold">Google Play</span>
          </div>
        </button>
        <button
          type="button"
          onClick={openModal}
          className="flex items-center gap-3 rounded-xl bg-[#1e293b] px-5 py-3.5 text-white transition-all duration-200 ease-out hover:bg-[#334155]"
        >
          <AppleIcon />
          <div className="text-left">
            <span className="block text-[10px]">Baixar na</span>
            <span className="block text-sm font-bold">App Store</span>
          </div>
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden
          />
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0A1624] p-8 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <h2 id="modal-title" className="text-center text-xl font-bold text-white">
              Disponível em breve
            </h2>
            <p className="mt-4 text-center text-[#94a3b8]/90">
              O {appName} estará disponível em breve na Google Play e na App Store.
              Enquanto isso, entre em contato para saber mais.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-8 w-full rounded-lg bg-[#0EA5E9] py-3 font-medium text-white transition-colors duration-200 ease-out hover:bg-[#0d9cd9]"
            >
              Entendi
            </button>
          </div>
        </>
      )}
    </>
  );
}
