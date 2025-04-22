export type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  isCategory?: boolean;
};

export type FlashSaleCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  promoCode?: string;
};

export type WhyChooseUsCardProps = {
  title: string;
  description: string;
  src: string;
  alt?: string;
};
