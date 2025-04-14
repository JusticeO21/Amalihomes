import { fetchFlashSaleSection } from "@/lib/contentful/flashSaleservice";
import { getContentfulImage } from "@/utils/contentful";
import { FlashSaleCard } from "@amalihomes/ui/components/card";
import { Container } from "@amalihomes/ui/components/container";
import { Asset } from "contentful";

const FlashSale = async () => {
  const flashSaleData = await fetchFlashSaleSection();

  if (!flashSaleData?.title || !flashSaleData?.image) {
    return null;
  }

  const { imageUrl, imageAlt } = getContentfulImage(
    flashSaleData.image as Asset,
    `/images/flashsale-image.png`,
    `Flash sale promotion`,
  );

  return (
    <Container>
      <FlashSaleCard
        title={flashSaleData.title as string}
        description={flashSaleData.description as string}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        ctaLabel={flashSaleData.ctaLabel as string}
        ctaUrl={flashSaleData.ctaUrl as string}
        promoCode={flashSaleData.promoCode as string}
      />
    </Container>
  );
};

export default FlashSale;
