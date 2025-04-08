export type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  isCategory?: boolean;
};

export type FlashSaleCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  onClick: () => void;
};

export type WhyChooseUsCardProps = {
  title: string;
  description: string;
  src: string;
  alt?: string;
};
