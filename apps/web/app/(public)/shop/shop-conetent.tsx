import React from "react";
import { CategorySection } from "@amalihomes/ui";
import type { ShopPageProps } from "./shope-page.types";
import { formatCategoriesCards } from "./shop-page.utils";
import { ProductsListing } from "@/features/products-listing";
import { RecommendedProducts } from "@/features/products-listing/recommended-products";

export const ShopContent = (data: ShopPageProps) => {
  const { categories, categoryTitle } = data;
  const formattedCategoryCards = formatCategoriesCards(categories);
  return (
    <main className="font-lato">
      <CategorySection
        categories={formattedCategoryCards}
        heading={categoryTitle}
      />
      <ProductsListing />
      <RecommendedProducts />
    </main>
  );
};
