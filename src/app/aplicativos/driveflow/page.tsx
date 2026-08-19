import type { Metadata } from "next";
import { apps } from "@/config/apps";
import { driveflowLanding } from "@/config/driveflow-landing";
import {
  DriveFlowPageHeader,
  DriveFlowHero,
  DriveFlowProblem,
  DriveFlowTransformation,
  DriveFlowCriteria,
  DriveFlowProductShowcase,
  DriveFlowFaq,
  DriveFlowFinalCta,
} from "@/components/apps/driveflow";

const app = apps.find((a) => a.slug === "driveflow")!;

export const metadata: Metadata = {
  title: driveflowLanding.meta.title,
  description: driveflowLanding.meta.description,
  openGraph: {
    title: driveflowLanding.meta.title,
    description: driveflowLanding.meta.description,
    images: [
      {
        url: app.ogImage ?? "/images/apps/driveflow/hero-driver.png",
        alt: "DriveFlow — decida melhor antes de aceitar uma corrida",
      },
    ],
  },
};

export default function DriveFlowLandingPage() {
  const googlePlayUrl = app.googlePlayUrl!;

  return (
    <>
      <DriveFlowPageHeader />
      <DriveFlowHero googlePlayUrl={googlePlayUrl} />
      <DriveFlowProblem />
      <DriveFlowTransformation />
      <DriveFlowCriteria />
      <DriveFlowProductShowcase />
      <DriveFlowFaq />
      <DriveFlowFinalCta googlePlayUrl={googlePlayUrl} />
    </>
  );
}
