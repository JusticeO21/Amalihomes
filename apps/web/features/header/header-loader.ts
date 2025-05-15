import { getEntry } from "@/lib/contentful/contentful";
import { TypeHeaderSkeleton } from "@/lib/contentful/generated/types";
import { HeaderProps } from "./header.types";

export const headerLoader = async () => {
  const header = await getEntry<TypeHeaderSkeleton>("header", { include: 5 });
  const data = header.fields as unknown as HeaderProps;
  const { countries, languages, links, logo } = data;
  const formattedLinks = links.map((tempLink) => {
    const { label, link } = tempLink.fields;
    return {
      id: tempLink.sys.id,
      label,
      href: link,
    };
  });

  const formattedLanguages = languages.map((tempLanguage) => {
    const { language, languageCode } = tempLanguage.fields;
    return {
      language: language as string,
      languageCode: languageCode as string,
    };
  });

  const formattedCountries = countries.map((tempCountry) => {
    const { country, otherName, defaultLanguage, salesRepresentative } = tempCountry.fields;
    return {
      country: country,
      otherName: otherName as string,
      language: defaultLanguage.fields,
      salesRepresentative: {
        ...salesRepresentative.fields,
        profile: {
          imageUrl: `https:${salesRepresentative.fields.profile.fields.file.url}`,
          imageAlt: salesRepresentative.fields.profile.fields.title,
        },
      },
    };
  });

  return {
    data,
    logo: logo.fields.file.url,
    links: formattedLinks,
    countries: formattedCountries,
    languages: formattedLanguages,
  };
};
