import { ReactNode } from "react";

export type ProductCarouselProps = {
  children: ReactNode;
  showControls?: boolean;
  className?: string;
  itemClassName?: string;
  heading?: string;
  isCategory?: boolean;
};

export type CarouselControlsProps = {
  nextSlide: () => void;
  previousSlide: () => void;
  className?: string;
};

export type HeroCarouselProps = {
  images: { imageUrl: string; imageAlt: string }[];
  className?: string;
};
