import { getEntry } from "@/lib/contentful/contentful";
import { TypeHomeSkeleton } from "@/lib/contentful/generated/types";
import { HomeProps } from "./home.types";

export const homeLoader = async () => {
  const response = await getEntry<TypeHomeSkeleton>("home", { include: 5 });
  const {
    ctas,
    description,
    flashSale,
    heroImages,
    newArrivalsCards,
    newArrivalsTitle,
    title,
    productCards,
    uspImage,
    uspTitle,
    uspCards,
    uspDescription,
    productTitle,
  } = response.fields as unknown as HomeProps;

  const formattedHeroImages = heroImages.map((image) => {
    return {
      imageUrl: `https:${image.fields.file.url}`,
      imageAlt: image.fields.title,
    };
  });

  const formattedCTAs = ctas.map((cta) => {
    return {
      label: cta.fields.label,
      link: cta.fields.link,
    };
  });

  const formattedUspImage = {
    imageUrl: `https:${uspImage.fields.file.url}`,
    imageAlt: uspImage.fields.title,
  };

  const formattedUspCards = uspCards.map((card) => {
    return {
      id: card.sys.id,
      title: card.fields.title,
      description: card.fields.description,
      iconUrl: `https:${card.fields.cardImage.fields.file.url}`,
      iconAlt: card.fields.cardImage.fields.title,
    };
  });

  const formattedProductCards = productCards.map((card) => {
    return {
      id: card.sys.id,
      title: card.fields.title,
      imageUrl: `https:${card.fields.cardImage.fields.file.url}`,
      imageAlt: card.fields.cardImage.fields.title,
    };
  });

  const formattedFlashSale = {
    id: flashSale.sys.id,
    title: flashSale.fields.title,
    description: flashSale.fields.description,
    imageUrl: `https:${flashSale.fields.cardImage.fields.file.url}`,
    imageAlt: flashSale.fields.cardImage.fields.title,
    ctaUrl: flashSale.fields.cta.fields.link,
    ctaLabel: flashSale.fields.cta.fields.label,
  };

  const formattedNewArrivalsCards = newArrivalsCards.map((card) => {
    return {
      key: card.sys.id,
      caption: card.fields.title,
      src: `https:${card.fields.cardImage.fields.file.url}`,
      alt: card.fields.cardImage.fields.title,
    };
  });

  return {
    productTitle,
    title,
    description,
    ctas: formattedCTAs,
    flashSale: formattedFlashSale,
    heroImages: formattedHeroImages,
    newArrivalsCards: formattedNewArrivalsCards,
    newArrivalsTitle,
    productCards: formattedProductCards,
    uspImage: formattedUspImage,
    uspTitle,
    uspCards: formattedUspCards,
    uspDescription,
  };
};
