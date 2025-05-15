import { getEntries, getEntry } from "@/lib/contentful/contentful";
import { ContactProps, PageRep } from "./contact.types";
import { TypeContactUsSkeleton, TypeLinkSkeleton } from "@/lib/contentful/generated/types";

export const contactLoader = async (locale?: string) => {
  const response = await getEntry<TypeContactUsSkeleton>("contactUs", {
    include: 5,
    locale: locale === "en" ? "en-US" : (locale ?? "en-US"),
  });

  const pageResponse = await getEntries<TypeLinkSkeleton>("link", {
    include: 5,
    locale: locale === "en" ? "en-US" : (locale ?? "en-US"),
  });

  const { salesRepresentative, image } = response.fields as unknown as ContactProps;
  const pageReps = pageResponse.items as unknown as PageRep[];

  const formatImage = {
    imageUrl: `https:${image.fields.file.url}`,
    imageAlt: image.fields.title,
  };

  const formatSalesRep = {
    ...salesRepresentative.fields,
    profile: {
      imageUrl: `https:${salesRepresentative.fields.profile.fields.file.url}`,
      imageAlt: salesRepresentative.fields.profile.fields.title,
    },
  };

  const formatPageReps = pageReps.map((pageRep) => {
    const rep = pageRep.fields.pageRep;
    return {
      ...pageRep.fields,
      salesRepresentative: rep
        ? {
            ...rep.fields,
            profile: {
              imageUrl: `https:${rep.fields.profile.fields.file.url}`,
              imageAlt: rep.fields.profile.fields.title,
            },
          }
        : null,
    };
  });
  return {
    ...(response.fields as unknown as ContactProps),
    image: formatImage,
    salesRepresentative: formatSalesRep,
    pageReps: formatPageReps,
  };
};
