import { getEntry } from "../contentful";
import type { TypeAboutUsSkeleton } from "../generated/types";
export const fetchAboutUsContents = async () => {
  try {
    const aboutUs = await getEntry<TypeAboutUsSkeleton>("aboutUs", { include: 5 });
    return aboutUs.fields;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Failed to fetch About Us: ${error.message}`);
      return {};
    }
    console.error("An unknown error occurred while fetching About Us.");
    return {};
  }
};
