import { getEntry } from "@/lib/contentful/contentful";
import { TypeContactUsSkeleton } from "@/lib/contentful/types";
import { ContactProps } from "./contact.types";

export const contactLoader = async (locale?: string) => {
  const response = await getEntry<TypeContactUsSkeleton>("contactUs", {
    include: 5,
    locale: locale === "en" ? "en-US" : (locale ?? "en-US"),
  });
  const { salesRepresentative, image } = response.fields as unknown as ContactProps;
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
  return {
    ...(response.fields as unknown as ContactProps),
    image: formatImage,
    salesRepresentative: formatSalesRep,
  };
};
