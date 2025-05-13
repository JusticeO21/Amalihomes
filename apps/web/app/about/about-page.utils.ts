import { getContentfulImage } from "@/utils/contentful";

import type {
  ContentfulMetric,
  ContentfulLeader,
  ContentfulUspCard,
  Metric,
  Leader,
  UspCard,
  ContentfulContinent,
  ContentfulContinentCard,
  ContentfulContinents,
  Continent,
} from "./about-page.types";

export const transformMetrics = (metrics: ContentfulMetric[]): Metric[] => {
  return metrics.map(({ fields }) => ({
    metric: fields.value,
    label: fields.title,
  }));
};

export const transformLeaders = (leaders: ContentfulLeader[]): Leader[] => {
  return leaders.map(({ fields, sys }) => {
    const { imageUrl, imageAlt } = getContentfulImage(fields.image, "_", "_");
    return {
      id: sys.id,
      name: fields.name,
      role: fields.role,
      imageUrl,
      imageAlt,
    };
  });
};

export const transformUspCards = (cards: ContentfulUspCard[]): UspCard[] => {
  return cards.map(({ fields, sys }) => {
    const { imageUrl, imageAlt } = getContentfulImage(fields.cardImage, "_", "_");
    return {
      id: sys.id,
      title: fields.title,
      description: fields.description,
      iconUrl: imageUrl,
      iconAlt: imageAlt || fields.iconAlt,
    };
  });
};

export function transformShowroomData(data: ContentfulContinents): Continent[] {
  return data.map((continentItem: ContentfulContinent) => {
    return {
      id: continentItem.sys.id,
      label: continentItem.fields.continent,
      content: continentItem.fields.cards.map((card: ContentfulContinentCard) => {
        const { imageUrl, imageAlt } = getContentfulImage(card.fields.cardImage, "_", "_");
        return {
          id: card.sys.id,
          imageUrl: imageUrl,
          imageAlt: imageAlt,
          country: card.fields.country,
        };
      }),
    };
  });
}
