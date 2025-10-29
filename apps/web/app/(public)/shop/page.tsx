import { getSeoTags } from "@/lib/seo/seo";
import { ShopContent } from "./shop-conetent";

export const generateMetadata = async () =>
  getSeoTags({
    title: "Shop",
    description: "Shop for quality furniture",
  });

const Shop = async () => {
    return <ShopContent />;
};

export default Shop;
