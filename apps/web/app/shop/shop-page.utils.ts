import type { ContentfulShopCategoriesCard } from "./shope-page.types";
import { getContentfulImage } from "@/utils/contentful";

export const formatCategoriesCards = (cards: ContentfulShopCategoriesCard[]) => {
  return cards.map((card) => {
    const { imageUrl, imageAlt } = getContentfulImage(card.fields.cardImage, "_", "_");
    return {
      id: card.sys.id,
      title: card.fields.title,
      imageUrl,
      imageAlt,
    };
  });
};
