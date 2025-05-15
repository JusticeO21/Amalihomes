import { ProductListingCard } from "@amalihomes/ui/index";
import { MOCK_PRODUCTS } from "./dummy-products";

export const RecommendedProducts = () => {
  return (
    <ProductListingCard
      title="Recommended Items"
      products={MOCK_PRODUCTS}
      productCardType="recommended"
      className="py-64"
    />
  );
};
