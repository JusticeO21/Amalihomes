import React from "react";
import { CategorySection } from "@amalihomes/ui";
import type { ShopPageProps } from "./shope-page.types";
import { formatCategoriesCards } from "./shop-page.utils";

export const ShopContent = (data: ShopPageProps) => {
  const { categories, categoryTitle } = data;
  const formattedCategoryCards = formatCategoriesCards(categories);
  return (
    <main className="font-lato">
      <CategorySection
        categories={formattedCategoryCards}
        heading={categoryTitle}
      />
    </main>
  );
};
