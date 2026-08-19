const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
  </svg>
);

type DriveFlowPlayButtonProps = {
  href: string;
  label: string;
};

export function DriveFlowPlayButton({ href, label }: DriveFlowPlayButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#0EA5E9] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[#0EA5E9]/20 transition-all duration-300 ease-out motion-safe:hover:-translate-y-px hover:bg-[#0d9cd9] hover:shadow-lg hover:shadow-[#0EA5E9]/25 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 focus:ring-offset-[#050B14]"
    >
      <GooglePlayIcon />
      {label}
    </a>
  );
}
