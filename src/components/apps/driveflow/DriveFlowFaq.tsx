"use client";

import { useId, useState } from "react";
import { Section, Container, SectionReveal } from "@/components/ui";
import { driveflowLanding } from "@/config/driveflow-landing";
import { DriveFlowFaqVideo } from "./DriveFlowFaqVideo";
import { cn } from "@/lib/utils";

export function DriveFlowFaq() {
  const { faq } = driveflowLanding;
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id={faq.id} variant="default" background="muted">
      <SectionReveal>
        <Container size="md">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]/90">
              {faq.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.2]">
              {faq.title}
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-button-${index}`;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]"
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white transition-colors duration-200 ease-out hover:text-[#22D3EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] focus-visible:ring-inset sm:px-6 sm:py-5"
                    >
                      <span>{item.question}</span>
                      <svg
                        className={cn(
                          "h-5 w-5 shrink-0 text-[#94a3b8] transition-transform duration-300 ease-out",
                          isOpen && "rotate-180 text-[#0EA5E9]"
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className={cn(!isOpen && "hidden")}
                  >
                    <div className="border-t border-white/[0.06] px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                      <p className="text-sm leading-[1.65] text-[#94a3b8]/85">
                        {item.answer}
                      </p>
                      {isOpen && "video" in item && item.video && (
                        <DriveFlowFaqVideo
                          title={item.video.title}
                          youtubeId={item.video.youtubeId}
                          watchUrl={item.video.watchUrl}
                          active={isOpen}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </SectionReveal>
    </Section>
  );
}
