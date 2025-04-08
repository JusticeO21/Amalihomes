import { Asset, Entry, EntrySkeletonType } from "contentful";

export type UspCardSkeleton = EntrySkeletonType<UspCardFields, "uspCard">;

export type UspCardFields = {
  title: string;
  description: string;
  icon: Asset;
};

export type UspSectionViewProps = {
  heading: string;
  description: string;
  cards: Entry<UspCardSkeleton>[];
  image: Asset;
};

export type UspContentProps = {
  heading: string;
  description: string;
  cards: Entry<UspCardSkeleton>[];
};

export type UspCardListProps = {
  cards: Entry<UspCardSkeleton>[];
};
export type UspImageProps = {
  imageUrl: string;
  imageAlt: string;
};

export type UspHeaderProps = {
  heading: string;
  description: string;
};

export type CategoryFields = {
  title: string;
  image: Asset;
};

export type CategorySkeleton = EntrySkeletonType<CategoryFields, "category">;

export type FlashSaleViewProps = {
  title: string;
  description: string;
  ctaUrl: string;
  image: Asset;
};

export type TextContentProps = {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaLink: string;
  secondaryCtaText: string;
};

export type HeroViewProps = {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaLink: string;
  secondaryCtaText: string;
  heroImages: Asset[];
};
