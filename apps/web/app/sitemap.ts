import { NavLinkProps } from "features/header/nav-links-listing";
import { getEntry } from "lib/contentful/contentful";
import { TypeNavigationSkeleton } from "lib/contentful/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const navigation = await getEntry<TypeNavigationSkeleton>("navigation");
  const typedNavLinks = navigation.fields.navigationLinks as unknown as NavLinkProps[];

  const navLinks: MetadataRoute.Sitemap = typedNavLinks.map(({ sys: { updatedAt }, fields: { href } }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${href === "home" ? "" : href}`,
    lastModified: new Date(updatedAt),
  }));
  
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    },
    ...navLinks,
  ];
}
