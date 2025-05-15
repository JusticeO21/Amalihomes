import { ReactNode } from "react";

export type ProductCarouselProps = {
  children: ReactNode;
  showControls?: boolean;
  className?: string;
  heading?: string;
  controlsClassName?: string;
  nextButtonClassName?: string;
  previousButtonClassName?: string;
};

export type CarouselControlsProps = {
  nextSlide: () => void;
  previousSlide: () => void;
  disableNextButton?: boolean;
  disablePrevButton?: boolean;
  className?: string;
  nextButtonClassName?: string;
  previousButtonClassName?: string;
};

export type HeroCarouselProps = {
  images: { imageUrl: string; imageAlt: string }[];
  className?: string;
};
