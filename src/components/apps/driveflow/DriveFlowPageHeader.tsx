import Link from "next/link";

export function DriveFlowPageHeader() {
  return (
    <div className="bg-[#050B14] px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/aplicativos"
          className="inline-flex items-center text-sm font-medium text-[#94a3b8] transition-colors duration-200 ease-out hover:text-white"
        >
          ← Voltar às soluções
        </Link>
      </div>
    </div>
  );
}
