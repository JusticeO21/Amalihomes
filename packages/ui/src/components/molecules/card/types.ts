export type FigureProps = {
  imageUrl: string;
  imageAlt: string;
  caption?: string;
  name?: string;
  description?: string;
  captionClassName?: string;
  cardClassName?: string;
  imageClassName?: string;
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
  iconUrl: string;
  iconAlt?: string;
};

export type SalesRepCardProps = {
  name: string;
  role: string;
  phoneNumber: string;
  email: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
};
