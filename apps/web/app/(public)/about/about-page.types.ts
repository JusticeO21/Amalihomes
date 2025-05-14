import type { Asset } from "contentful";

// Contentful Content Types
export type ContentfulMetric = {
  fields: {
    title: string;
    value: string;
  };
  sys: {
    id: string;
  };
};

export type ContentfulLeader = {
  fields: {
    name: string;
    role: string;
    image: Asset;
  };
  sys: {
    id: string;
  };
};

export type ContentfulUspCard = {
  fields: {
    title: string;
    description: string;
    cardImage: Asset;
    iconAlt: string;
  };
  sys: {
    id: string;
  };
};

export type ContentfulContinentCard = {
  sys: {
    id: string;
  };
  fields: {
    cardImage: Asset;
    country: string;
  };
};
export type ContentfulContinent = {
  sys: {
    id: string;
  };
  fields: {
    continent: string;
    cards: ContentfulContinentCard[];
  };
};

export type ContentfulContinents = ContentfulContinent[];

export type AboutUsContent = {
  title: string;
  description: string;
  mainImage: Asset;
  historyTitle: string;
  historyDescription: string;
  historyCards: ContentfulMetric[];
  uspTitle: string;
  uspDescription: string;
  uspImage: Asset;
  uspCards: ContentfulUspCard[];
  teamTitle: string;
  teamDescription: string;
  teamCards: ContentfulLeader[];
  continents: ContentfulContinent[];
  showroomTitle: string;
  showroomDescription: string;
  locationTitle: string;
  locationDescription: string;
};

// Transformed Types
export type Metric = {
  metric: string;
  label: string;
};

export type Leader = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageAlt: string;
};

export type UspCard = {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  iconAlt: string;
};

export type ShowroomCard = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  country: string;
};

export type Continent = {
  id: string;
  label: string;
  content: ShowroomCard[];
};
