import Link from "next/link";
import { sellerflowLanding } from "@/config/sellerflow-landing";

const LockIcon = () => (
  <svg
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

type SellerFlowPageHeaderProps = {
  webLoginUrl: string;
};

export function SellerFlowPageHeader({ webLoginUrl }: SellerFlowPageHeaderProps) {
  const { pageHeader } = sellerflowLanding;

  return (
    <div className="bg-[#050B14] px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          href="/aplicativos"
          className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-white"
        >
          ← Voltar às soluções
        </Link>
        <a
          href={webLoginUrl}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#0EA5E9] bg-transparent px-3.5 py-2 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-[#0EA5E9]/10 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 focus:ring-offset-[#050B14]"
        >
          <LockIcon />
          {pageHeader.clientButtonLabel}
        </a>
      </div>
    </div>
  );
}
