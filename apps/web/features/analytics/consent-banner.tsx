"use client";
import { useAnalytics } from "@/hooks/use-analytics";
import { GdprBanner, GdprBannerProps, GdprWrapper } from "@amalihomes/ui";

export default function ConsentBanner({
  consentOptions,
  customizeButtonText,
  rejectButtonText,
  saveButtonText,
  description,
  title,
  icon,
}: Readonly<Omit<GdprBannerProps, "getBanner">>) {
  const { isBannerVisible, saveConsent } = useAnalytics();

  if (!isBannerVisible) return null;

  return (
    <GdprWrapper>
      <GdprBanner
        icon={icon}
        getBanner={saveConsent}
        customizeButtonText={customizeButtonText}
        rejectButtonText={rejectButtonText}
        saveButtonText={saveButtonText}
        description={description}
        title={title}
        consentOptions={consentOptions}
      />
      ;
    </GdprWrapper>
  );
}
