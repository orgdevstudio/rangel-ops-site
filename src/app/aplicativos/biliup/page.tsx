import type { Metadata } from "next";
import { apps } from "@/config/apps";
import { biliupLanding } from "@/config/biliup-landing";
import {
  BiliUpPageHeader,
  BiliUpHero,
  BiliUpProblem,
  BiliUpTransformation,
  BiliUpLanguages,
  BiliUpHowItWorks,
  BiliUpProductShowcase,
  BiliUpFeatures,
  BiliUpFaq,
  BiliUpFinalCta,
} from "@/components/apps/biliup";

const app = apps.find((a) => a.slug === "biliup")!;

export const metadata: Metadata = {
  title: biliupLanding.meta.title,
  description: biliupLanding.meta.description,
  openGraph: {
    title: biliupLanding.meta.title,
    description: biliupLanding.meta.description,
    images: [
      {
        url: app.ogImage ?? "/images/apps/biliup/og.png",
        alt: "BiliUp — aprenda idiomas por missões do dia a dia",
      },
    ],
  },
};

export default function BiliUpLandingPage() {
  return (
    <>
      <BiliUpPageHeader />
      <BiliUpHero />
      <BiliUpProblem />
      <BiliUpTransformation />
      <BiliUpLanguages />
      <BiliUpHowItWorks />
      <BiliUpProductShowcase />
      <BiliUpFeatures />
      <BiliUpFaq />
      <BiliUpFinalCta />
    </>
  );
}
