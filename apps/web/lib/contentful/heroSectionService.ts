import { getEntry } from "./contentful";
import type { TypeHeroSkeleton } from "./types";

export async function fetchHeroSection() {
  try {
    const hero = await getEntry<TypeHeroSkeleton>("heroPreview");
    return hero.fields;
  } catch {
    return null;
  }
}
