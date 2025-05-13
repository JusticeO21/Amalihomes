import { Asset } from "contentful";

export type ContentfulShopCategoriesCard = {
  fields: {
    title: string;
    cardImage: Asset;
  };
  sys: {
    id: string;
  };
};

export type ShopPageProps = {
  categoryTitle: string;
  categories: ContentfulShopCategoriesCard[];
};
