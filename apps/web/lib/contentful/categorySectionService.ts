import { getEntry } from "./contentful";
import type { TypeProductCategorySectionSkeleton } from "./types";

export async function fetchProductCategorySection() {
  try {
    const productCategory = await getEntry<TypeProductCategorySectionSkeleton>("productCategorySection");
    return productCategory.fields;
  } catch {
    return null;
  }
}
