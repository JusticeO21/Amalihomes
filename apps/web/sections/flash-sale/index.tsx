import { fetchFlashSaleSection } from "@/lib/contentful/flashSaleservice";
import { Asset } from "contentful";
import { FlashSaleView } from "./flash-sale-view";

const FlashSale = async () => {
  const flashSaleData = await fetchFlashSaleSection();

  if (!flashSaleData?.title || !flashSaleData?.image) {
    return null;
  }

  return (
    <FlashSaleView
      title={flashSaleData.title as string}
      description={flashSaleData.description as string}
      ctaUrl={flashSaleData.ctaUrl as string}
      image={flashSaleData.image as Asset}
    />
  );
};

export default FlashSale;
