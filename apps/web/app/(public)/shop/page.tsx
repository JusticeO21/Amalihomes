import { getSeoTags } from "@/lib/seo/seo";
import { ShopContent } from "./shop-conetent";
import { fetchShopContents } from "@/lib/contentful";
import { ShopPageProps } from "./shope-page.types";
import { notFound } from "next/navigation";

export const generateMetadata = async () =>
  getSeoTags({
    title: "Shop",
    description: "Shop for quality furniture",
  });

const Shop = async () => {
  try {
    const shop = (await fetchShopContents()) as unknown as ShopPageProps;

    if (!shop) {
      console.warn("Shop data missing required fields", { shop });
      throw new Error("Invalid data format");
    }

    return <ShopContent {...shop} />;
  } catch (error) {
    console.error("ShopPage failed to load", { error });
    return notFound();
  }
};

export default Shop;
