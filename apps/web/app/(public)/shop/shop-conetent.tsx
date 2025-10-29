import React from "react";
import { CategorySection, Typography } from "@amalihomes/ui";
import type { ShopPageProps } from "./shope-page.types";
import { formatCategoriesCards } from "./shop-page.utils";
// import { ProductsListing } from "@/features/products-listing";
import { fetchShopContents } from "@/lib/contentful";

export const ShopContent = () => {
  return (
    <div className="font-lato text-center w-full!">
      <Typography
        as="h3"
        className="text-16 mx-auto"
      >
        Shop page in progress. Stay tuned for the latest updates!
      </Typography>
    </div>
  );
};

export const ShopecategoriesContent = async () => {
   try {
      const shop = (await fetchShopContents()) as unknown as ShopPageProps;
  
      if (!shop) {
        console.warn("Shop data missing required fields", { shop });
        return null
      }
      const formattedCategoryCards = formatCategoriesCards(shop.categories);
      return (
        <CategorySection
          categories={formattedCategoryCards}
          heading={shop.categoryTitle}
        />
      );
    } catch { 
      return null;
    }
}
