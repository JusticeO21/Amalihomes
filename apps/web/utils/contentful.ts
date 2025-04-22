import { Asset } from "contentful";

export function getContentfulImage(
  image: Asset | undefined,
  fallbackUrl: string,
  fallbackAlt: string,
): { imageUrl: string; imageAlt: string } {
  let imageUrl = fallbackUrl;
  let imageAlt = fallbackAlt;

  if (image && typeof image === "object" && "fields" in image) {
    const imageAsset = image;
    if (imageAsset.fields?.file?.url) {
      imageUrl = `https:${String(imageAsset?.fields?.file?.url)}`;

      if (imageAsset.fields.description) {
        imageAlt = imageAsset.fields.description as string;
      }
    }
  }

  return { imageUrl, imageAlt };
}
