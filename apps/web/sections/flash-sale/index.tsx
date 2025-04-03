import Image from "next/image";
import { Container } from "@amalihomes/ui/components/container";
import { fetchFlashSaleSection } from "../../lib/contentful/flashSaleservice";
import { Asset } from "contentful";
import { getContentfulImage } from "utils/contentful";

async function FlashSale() {
  const flashSaleData = await fetchFlashSaleSection();

  if (!flashSaleData?.title || !flashSaleData?.image) {
    return null;
  }

  return (
    <FlashSaleView
      title={flashSaleData.title as string}
      description={flashSaleData.description as string}
      promoCode={flashSaleData.promoCode as string}
      ctaLabel={flashSaleData.ctaLabel as string}
      ctaUrl={flashSaleData.ctaUrl as string}
      image={flashSaleData.image as Asset}
    />
  );
}

interface FlashSaleViewProps {
  title: string;
  description: string;
  promoCode?: string;
  ctaLabel: string;
  ctaUrl: string;
  image: Asset;
}

function FlashSaleView({ title, description, promoCode, ctaLabel, ctaUrl, image }: FlashSaleViewProps) {
  const { imageUrl, imageAlt } = getContentfulImage(image, `/images/flashsale-image.png`, `Flash sale promotion`);

  return (
    <section
      aria-labelledby="flash-sale-heading"
      aria-label="Flash sale promotional section"
    >
      <Container className="grid md:grid-cols-2 gap-0">
        <ImageSection
          imageUrl={imageUrl}
          imageAlt={imageAlt}
        />
        <ContentSection
          title={title}
          description={description}
          promoCode={promoCode}
          ctaLabel={ctaLabel}
          ctaUrl={ctaUrl}
        />
      </Container>
    </section>
  );
}

function ImageSection({ imageUrl, imageAlt }: { imageUrl: string; imageAlt: string }) {
  return (
    <Container
      paddingY={0}
      paddingX={0}
      className="p-0 m-0"
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={600}
        height={400}
        priority
        className="w-full h-full object-cover"
      />
    </Container>
  );
}

interface ContentSectionProps {
  title: string;
  description: string;
  promoCode?: string;
  ctaLabel: string;
  ctaUrl: string;
}

function ContentSection({ title, description, promoCode, ctaLabel, ctaUrl }: ContentSectionProps) {
  return (
    <Container
      paddingX={0}
      className="px-24 py-24 mx-0 my-0 bg-Grey-text-strong grid items-center gap-40 text-white"
    >
      <div>
        <h2
          id="flash-sale-heading"
          className="text-20 md:text-24 font-semibold leading-28 md:leading-32"
        >
          {title}
        </h2>
        <p className="mt-2">
          {description}
          {promoCode && (
            <>
              {" "}
              Use code <strong>{promoCode}</strong> at checkout.
            </>
          )}
        </p>
      </div>

      <a
        href={ctaUrl}
        className="px-3 py-3 rounded-sm bg-Amber-text text-black font-medium transition w-[130px] text-center"
        aria-label={`Learn more about ${title}`}
      >
        {ctaLabel}
      </a>
    </Container>
  );
}

export default FlashSale;
