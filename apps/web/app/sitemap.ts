import { TypeLinkSkeleton } from "@/lib/contentful/types";
import { getEntries } from "lib/contentful/contentful";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const navigation = await getEntries<TypeLinkSkeleton>("link");

  const navLinks: MetadataRoute.Sitemap = navigation.items.map(({ sys: { updatedAt }, fields: { link } }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${link === "home" ? "" : link}`,
    lastModified: new Date(updatedAt),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    },
    ...navLinks,
  ];
}
