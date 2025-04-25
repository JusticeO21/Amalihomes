"use client";

import { GdprBanner } from "@amalihomes/ui";
import { useAnalytics } from "./analytics-provider";

export default function ConsentBanner() {
  const { isBannerVisible, saveConsent } = useAnalytics();

  if (!isBannerVisible) return null;

  return <GdprBanner getBanner={saveConsent} />;
}
