import { TypeFooterSkeleton } from "@/lib/contentful/types";
import { FooterProps } from "./footer.types";
import { getEntry } from "@/lib/contentful/contentful";

export const footerLoader = async () => {
  const response = await getEntry<TypeFooterSkeleton>("footer", { include: 5 });
  const data = response.fields as unknown as FooterProps;

  const {
    title,
    description,
    links,
    contactUs,
    socials,
    copyright,
    ctaLabel,
    inputPlaceholder,
    privacyDescription,
    privacyLink,
    legalLinks,
  } = data;

  const formattedLinks = links.map((link) => {
    const { title, links } = link.fields;
    return {
      title,
      links: links.map((tempLink) => {
        const { label, link } = tempLink.fields;
        return {
          id: tempLink.sys.id,
          label,
          href: link,
        };
      }),
    };
  });

  const formattedLegalLinks = legalLinks.map((link) => {
    const { label, link: url } = link.fields;
    return {
      id: link.sys.id,
      label,
      href: url,
    };
  });

  const formattedSocialLinks = socials.map((social) => {
    const { title, url, icon } = social.fields;
    return {
      label: title,
      href: url,
      icon: icon.fields.file.url,
    };
  });

  return {
    title,
    description,
    links: formattedLinks,
    contactUs,
    socials: formattedSocialLinks,
    copyright,
    ctaLabel,
    inputPlaceholder,
    privacyDescription,
    privacyLink,
    legalLinks: formattedLegalLinks,
  };
};
