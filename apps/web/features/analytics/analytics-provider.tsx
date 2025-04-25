"use client";
import { GdprBannerState } from "@amalihomes/ui";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

export interface ConsentContextProps {
  isConsentProvided: boolean;
  clearConsent: () => void;
  isBannerVisible: boolean;
  saveConsent: (consent: GdprBannerState) => void;
}

const COOKIE_NAME = "cookie_consent";
const COOKIE_MAX_AGE = 31536000;

const AnalyticsContext = createContext<ConsentContextProps | null>(null);

const useAnalyticsProvider = (): ConsentContextProps => {
  const [isConsentProvided, setIsConsentProvided] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const getConsent = useCallback((): GdprBannerState | null => {
    try {
      const consentCookie = getCookie(COOKIE_NAME);
      if (consentCookie) {
        setIsConsentProvided(true);
        return JSON.parse(consentCookie as string);
      }

      const rejected = localStorage.getItem("consent_rejected");
      if (rejected === "true") {
        return {
          testStrict: false,
          unclassified: false,
          functionality: false,
          performance: false,
          targeting: false,
        };
      }
      return null;
    } catch {
      return null;
    }
  }, []);

  const saveConsent = useCallback((consent: GdprBannerState): void => {
    const hasConsent = Object.values(consent).some(Boolean);

    if (hasConsent) {
      setCookie(COOKIE_NAME, JSON.stringify(consent), {
        maxAge: COOKIE_MAX_AGE,
        path: "/",
      });
      setIsConsentProvided(true);
      window.gtag?.("consent", "update", {
        ad_storage: consent.targeting ? "granted" : "denied",
        analytics_storage: consent.performance ? "granted" : "denied",
        functionality_storage: consent.functionality ? "granted" : "denied",
        personalization_storage: consent.targeting ? "granted" : "denied",
        security_storage: "granted",
      });
    } else {
      localStorage.setItem("consent_rejected", "true");
    }
  }, []);

  const clearConsent = useCallback((): void => {
    deleteCookie(COOKIE_NAME);
    setIsConsentProvided(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedConsent = getConsent();

    if (storedConsent) {
      const canTriggerEvent = Object.values(storedConsent).some(Boolean);

      if (canTriggerEvent) {
        setIsConsentProvided(true);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(...args: unknown[]) {
          window.dataLayer?.push(...(args as object[]));
        };
        window.gtag("consent", "update", {
          ad_storage: storedConsent?.targeting ? "granted" : "denied",
          analytics_storage: storedConsent?.performance ? "granted" : "denied",
          functionality_storage: storedConsent?.functionality ? "granted" : "denied",
          personalization_storage: storedConsent?.targeting ? "granted" : "denied",
          security_storage: "granted",
        });
      }
    } else {
      setIsBannerVisible(true);
    }
  }, [getConsent]);

  return {
    saveConsent,
    isConsentProvided,
    isBannerVisible,
    clearConsent,
  };
};

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => (
  <AnalyticsContext.Provider value={useAnalyticsProvider()}>{children}</AnalyticsContext.Provider>
);

export const useAnalytics = (): ConsentContextProps => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
  }
  return context;
};
