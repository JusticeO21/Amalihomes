"use client";
import { GdprBanner, GdprWrapper } from "@amalihomes/ui";
import { useAnalytics } from "./analytics-provider";

export default function ConsentBanner() {
  const { isBannerVisible, saveConsent } = useAnalytics();

  if (!isBannerVisible) return null;

  return (
    <GdprWrapper>
      <GdprBanner getBanner={saveConsent} />;
    </GdprWrapper>
  );

}
