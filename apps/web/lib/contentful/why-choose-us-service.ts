import { getEntry } from "./contentful";
import type { TypeUspuniqueSellingPointSkeleton } from "./types";

export async function fetchUspSection() {
  try {
    const uspSection = await getEntry<TypeUspuniqueSellingPointSkeleton>("uspuniqueSellingPoint");
    return uspSection.fields;
  } catch (error) {
    return null;
  }
}
