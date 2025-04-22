"use client";

import { useEffect, useState } from "react";
import { saveConsent, hasGivenConsent } from "@/utils/consent-utils";
import { GdprBanner, GdprBannerState } from "@amalihomes/ui";

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!hasGivenConsent()) {
      setIsVisible(true);
    }
  }, []);

  const handleSave = (consent: GdprBannerState) => {
    saveConsent(consent as unknown as { [key: string]: boolean });

    console.log("Consent saved:", consent);
    if (window !== undefined) {
      console.log("window.gtag", window.gtag);

      window.gtag?.("consent", "update", {
        ad_storage: consent.targeting ? "granted" : "denied",
        analytics_storage: consent.performance ? "granted" : "denied",
        functionality_storage: consent.functionality ? "granted" : "denied",
        personalization_storage: consent.targeting ? "granted" : "denied",
        security_storage: "granted",
      });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return <GdprBanner getBanner={handleSave} />;
}
