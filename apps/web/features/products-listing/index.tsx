import { MOCK_PRODUCTS } from "./dummy-products";
import { ProductGridCard } from "@amalihomes/ui";

export const ProductsListing = () => {
  return <ProductGridCard products={MOCK_PRODUCTS} />;
};
