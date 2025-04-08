import { getEntry } from "./contentful";
import type { TypeNewArrivalSectionSkeleton, TypeProductCategorySectionSkeleton } from "./types";

export async function fetchProductCategorySection() {
  try {
    const productCategory = await getEntry<TypeProductCategorySectionSkeleton>("productCategorySection");
    return productCategory.fields;
  } catch {
    return null;
  }
}

export async function fetchNewArrivalSection() {
  try {
    const newArrival = await getEntry<TypeNewArrivalSectionSkeleton>("newArrivalSection");
    return newArrival.fields;
  } catch {
    return null;
  }
}
