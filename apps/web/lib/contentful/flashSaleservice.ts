import { getEntry } from "./contentful";
import type { TypeFlashSaleSectionSkeleton } from "./types";

export async function fetchFlashSaleSection() {
  try {
    const flashSale = await getEntry<TypeFlashSaleSectionSkeleton>("flashSaleSection");
    return flashSale.fields;
  } catch {
    return null;
  }
}
