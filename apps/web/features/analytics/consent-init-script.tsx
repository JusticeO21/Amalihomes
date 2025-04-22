// components/ConsentInitScript.tsx
"use client";

import { useEffect } from "react";
import { hasGivenConsent, getConsent } from "@/utils/consent-utils";

export default function ConsentInitScript() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer?.push(...(args as object[]));
    };

    const alreadyConsented = hasGivenConsent();
    const storedConsent = getConsent();

    if (alreadyConsented && storedConsent) {
      window.gtag("consent", "update", {
        ad_storage: storedConsent.targeting ? "granted" : "denied",
        analytics_storage: storedConsent.performance ? "granted" : "denied",
        functionality_storage: storedConsent.functionality ? "granted" : "denied",
        personalization_storage: storedConsent.targeting ? "granted" : "denied",
        security_storage: "granted",
      });
    } else {
      window.gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
        security_storage: "granted",
      });
    }
  }, []);

  return null;
}
