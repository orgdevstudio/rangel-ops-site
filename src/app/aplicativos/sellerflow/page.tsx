import type { Metadata } from "next";
import { apps } from "@/config/apps";
import { sellerflowLanding } from "@/config/sellerflow-landing";
import {
  SellerFlowPageHeader,
  SellerFlowHero,
  SellerFlowDifferentiators,
  SellerFlowProblem,
  SellerFlowSolution,
  SellerFlowProductShowcase,
  SellerFlowHowItWorks,
  SellerFlowPlans,
  SellerFlowFaq,
  SellerFlowInstagram,
  SellerFlowFinalCta,
  SellerFlowClientAccess,
} from "@/components/apps/sellerflow";

const app = apps.find((a) => a.slug === "sellerflow")!;

export const metadata: Metadata = {
  title: sellerflowLanding.meta.title,
  description: sellerflowLanding.meta.description,
  openGraph: {
    title: sellerflowLanding.meta.title,
    description: sellerflowLanding.meta.description,
    images: [
      {
        url: "/images/apps/sellerflow/hero-productivity.png",
        alt: "SellerFlow — precificação e lucro no desktop",
      },
    ],
  },
};

export default function SellerFlowLandingPage() {
  const googlePlayUrl = app.googlePlayUrl!;
  const webLoginUrl = app.webAccess!.loginUrl;

  return (
    <>
      <SellerFlowPageHeader webLoginUrl={webLoginUrl} />
      <SellerFlowHero googlePlayUrl={googlePlayUrl} />
      <SellerFlowDifferentiators />
      <SellerFlowProblem />
      <SellerFlowSolution />
      <SellerFlowProductShowcase />
      <SellerFlowHowItWorks />
      <SellerFlowPlans googlePlayUrl={googlePlayUrl} />
      <SellerFlowFaq />
      <SellerFlowInstagram />
      <SellerFlowFinalCta
        googlePlayUrl={googlePlayUrl}
        appStoreUrl={app.appStoreUrl}
      />
      <SellerFlowClientAccess webLoginUrl={webLoginUrl} />
    </>
  );
}
