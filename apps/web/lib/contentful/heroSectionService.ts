import { getEntry } from "./contentful";
import type { TypeHeroSkeleton } from "./types";

export async function fetchHeroSection() {
  try {
    const hero = await getEntry<TypeHeroSkeleton>("hero");
    return hero.fields;
  } catch (error) {
    return null;
  }
}
