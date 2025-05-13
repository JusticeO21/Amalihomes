import { getEntry } from "../contentful";
import { TypeShopSkeleton } from "@/lib/contentful/generated/types";

export const fetchShopContents = async () => {
  try {
    const shop = await getEntry<TypeShopSkeleton>("shop", { include: 5 });
    return shop.fields;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Failed to fetch Shop: ${error.message}`);
      return {};
    }
    console.error("An unknown error occurred while fetching Shop.");
    return {};
  }
};
