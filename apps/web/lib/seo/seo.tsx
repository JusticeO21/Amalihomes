import config from "@/lib/seo/seo.config";
import type { Metadata } from "next";

export const getSeoTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
  parentMetadata,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, string>;
  parentMetadata?: Metadata;
}) => {
  const mergedOpenGraph = {
    title: openGraph?.title || title || config.appName,
    description: openGraph?.description ?? description ?? config.appDescription,
    url: openGraph?.url || config.domainName,
    siteName: openGraph?.siteName ?? config.appName,
    locale: openGraph?.locale ?? "en_US",
    type: "website",
    images: [] as Array<object | string>,
  };

  const parentOgImages = parentMetadata?.openGraph?.images || [];
  const currentOgImages = openGraph?.images || [];
  const defaultOgImage = [
    {
      url: `https://${config.domainName}/images/logo.png`,
      width: 1200,
      height: 630,
    },
  ];

  mergedOpenGraph.images = [
    ...(Array.isArray(currentOgImages) ? currentOgImages : [currentOgImages]),
    ...(Array.isArray(parentOgImages) ? parentOgImages : [parentOgImages]),
    ...(defaultOgImage ?? []),
  ];

  const twitterConfig = {
    title: mergedOpenGraph.title,
    description: mergedOpenGraph.description,
    images: mergedOpenGraph.images,
    card: "summary_large_image",
    creator: "@Amali_tech",
  };

  return {
    title: title || config.appName,
    description: description ?? config.appDescription,
    keywords: keywords || "home, office, furniture, amalihome",
    applicationName: config.appName,
    authors: [{ name: "AmaliTech", url: config.domainName }],
    creator: "AmaliTech",
    publisher: "AmaliTech",
    openGraph: mergedOpenGraph,
    twitter: twitterConfig,
    ...(canonicalUrlRelative && {
      alrernates: { canonical: canonicalUrlRelative },
    }),
    ...extraTags,
  };
};