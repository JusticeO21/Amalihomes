import { getEntry } from "@/lib/contentful/contentful";
import { TypeCookieBannerSkeleton } from "@/lib/contentful/generated/types";
import { GdprBannerProps } from "@amalihomes/ui/index";
import { BannerProps } from "./banner.types";

export async function bannerLoader(): Promise<Omit<GdprBannerProps, "getBanner">> {
  const response = await getEntry<TypeCookieBannerSkeleton>("cookieBanner", {
    include: 5,
  });

  const data = response.fields as unknown as BannerProps;

  const consentOptions = Object.entries(data.cookieOptions.fields).map(([id, label]) => ({
    id,
    label: String(label),
  }));

  const icon = {
    url: `https:${data.image.fields.file.url}`,
    alt: data.image.fields.description || "Cookie banner icon",
  };

  return {
    title: data.title,
    description: data.description,
    customizeButtonText: data.customizeButtonText,
    rejectButtonText: data.rejectButtonText,
    saveButtonText: data.customizeButtonText,
    consentOptions,
    icon,
  };
}
