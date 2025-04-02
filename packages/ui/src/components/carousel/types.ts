import { ReactNode } from "react";

export type ProductCarouselProps = {
  children: ReactNode[];
  gap?: number;
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  className?: string;
  itemClassName?: string;
  heading?: string;
  isCategory?: boolean;
};

export type CarouselControlsProps = {
  nextSlide: () => void;
  previousSlide: () => void;
};
