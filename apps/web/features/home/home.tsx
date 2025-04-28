import {
  CategorySection,
  FlashSale,
  Hero,
  ProductCard,
  ProductCarousel,
  UspCardList,
  UspContentWrapper,
  UspHeader,
  UspImage,
} from "@amalihomes/ui";
import { UspSectionWrapper } from "@amalihomes/ui/components/organisms/usp-section/usp-section-wrapper";
import { homeLoader } from "./home-loader";
import Link from "next/link";
export default async function Home() {
  const {
    ctas,
    heroImages,
    title,
    description,
    uspTitle,
    uspDescription,
    uspImage,
    uspCards,
    productCards,
    productTitle,
    flashSale,
    newArrivalsTitle,
    newArrivalsCards,
  } = await homeLoader();

  return (
    <main className="font-lato">
      <Hero
        ctaLink={ctas[0]?.link ?? ""}
        ctaText={ctas[0]?.label ?? ""}
        secondaryCtaLink={ctas[1]?.link ?? ""}
        secondaryCtaText={ctas[1]?.label ?? ""}
        headline={title}
        subtext={description}
        heroImages={heroImages}
      />
      <UspSectionWrapper>
        <UspContentWrapper>
          <UspHeader
            heading={uspTitle}
            description={uspDescription}
          />
          <UspCardList cards={uspCards} />
        </UspContentWrapper>
        <UspImage
          imageUrl={uspImage.imageUrl}
          imageAlt={uspImage.imageAlt}
        />
      </UspSectionWrapper>
      <CategorySection
        categories={productCards}
        heading={productTitle}
      />
      <FlashSale
        ctaUrl={flashSale.ctaUrl}
        ctaLabel={flashSale.ctaLabel}
        imageUrl={flashSale.imageUrl}
        imageAlt={flashSale.imageAlt}
        title={flashSale.title}
        description={flashSale.description}
      />

      <ProductCarousel
        heading={newArrivalsTitle}
        className="!mb-64"
      >
        {newArrivalsCards.map((arrival) => {
          return (
            <Link
              href={`/product/${arrival.caption}`}
              key={arrival.key}
            >
              <ProductCard
                imageUrl={arrival.src}
                imageAlt={arrival.alt}
                caption={arrival.caption}
                imageClassName="min-w-[236px] h-[316px] sm:min-w-[316px] sm:h-[422px] md:min-w-[421px] md:h-[526px]"
                captionClassName="text-18 sm:text-18 md:text-20 text-gray-600"
              />
            </Link>
          );
        })}
      </ProductCarousel>
    </main>
  );
}
