"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { useAnalytics } from "./analytics-provider";

export const Analytics = () => {
  const { isConsentProvided } = useAnalytics();

  if (!isConsentProvided) return null;

  const tagId = process.env.NEXT_PUBLIC_GTM_ID;
  return <GoogleTagManager gtmId={tagId} />;
};
